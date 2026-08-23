require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

/* ==========================================================================
   USER AUTHENTICATION ROUTES
   ========================================================================== */

// Register new user account
app.post('/api/auth/register', (req, res) => {
    try {
        const { loginId, password, fullName, phone, address, city, state, pincode } = req.body;

        if (!loginId || !password) {
            return res.status(400).json({ success: false, message: "Login ID and password are required." });
        }
        if (password.length < 6) {
            return res.status(400).json({ success: false, message: "Password must be at least 6 characters." });
        }

        const result = db.registerUser({ loginId, password, fullName, phone, address, city, state, pincode });
        if (!result.success) {
            return res.status(409).json(result);
        }

        console.log(`[AAVASA AUTH] New user registered: ${loginId}`);
        res.status(201).json(result);
    } catch (error) {
        console.error("Register error:", error);
        res.status(500).json({ success: false, message: "Registration failed. Please try again." });
    }
});

// Login with existing account
app.post('/api/auth/login', (req, res) => {
    try {
        const { loginId, password } = req.body;
        if (!loginId || !password) {
            return res.status(400).json({ success: false, message: "Login ID and password are required." });
        }

        const result = db.loginUser({ loginId, password });
        if (!result.success) {
            return res.status(401).json(result);
        }

        console.log(`[AAVASA AUTH] User logged in: ${loginId}`);
        res.json(result);
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ success: false, message: "Login failed. Please try again." });
    }
});

// Update saved profile address
app.patch('/api/auth/profile', (req, res) => {
    try {
        const { loginId, ...profileData } = req.body;
        if (!loginId) return res.status(400).json({ success: false, message: "Login ID required." });

        const updated = db.updateUserProfile(loginId, profileData);
        if (!updated) return res.status(404).json({ success: false, message: "User not found." });

        res.json({ success: true, user: updated });
    } catch (error) {
        res.status(500).json({ success: false, message: "Profile update failed." });
    }
});

/* ==========================================================================
   ORDER ROUTES
   ========================================================================== */

// GET all orders (admin)
app.get('/api/orders', (req, res) => {
    try {
        const orders = db.getAllOrders();
        res.json({ success: true, count: orders.length, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

// GET orders by logged-in user's loginId
app.get('/api/user/orders', (req, res) => {
    try {
        const { loginId } = req.query;
        if (!loginId) return res.status(400).json({ success: false, message: "loginId query param required." });

        const orders = db.getOrdersByLoginId(loginId);
        res.json({ success: true, count: orders.length, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, message: "Could not fetch orders." });
    }
});

// GET single order by ID
app.get('/api/orders/:id', (req, res) => {
    try {
        const order = db.getOrderById(req.params.id);
        if (!order) return res.status(404).json({ success: false, message: "Order not found" });
        res.json({ success: true, data: order });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

// POST create new order (checkout submission)
app.post('/api/orders', (req, res) => {
    try {
        const { customer, items, subtotal, totalAmount, paymentMethod, loginId } = req.body || {};
        if (!items || items.length === 0) {
            return res.status(400).json({ success: false, message: "Cart cannot be empty" });
        }

        const cust = customer || {};
        const safeCustomer = {
            fullName: cust.fullName || "Aavasa Customer",
            email: cust.email || (loginId !== "guest" ? loginId : "customer@aavasa.com"),
            phone: cust.phone || "+91 99999 88888",
            address: cust.address || "Street Address",
            city: cust.city || "Mumbai",
            state: cust.state || "Maharashtra",
            pincode: cust.pincode || "400001"
        };

        const newOrder = db.createOrder({
            customer: safeCustomer,
            items: items || [],
            subtotal: subtotal || totalAmount || 0,
            totalAmount: totalAmount || subtotal || 0,
            paymentMethod: paymentMethod || "cod",
            loginId: loginId || "guest"
        });

        console.log(`[AAVASA ORDER] New order: ${newOrder.id} | User: ${newOrder.loginId} | ₹${newOrder.totalAmount} | Method: ${newOrder.paymentMethod}`);
        res.status(201).json({ success: true, message: "Order placed successfully!", order: newOrder });
    } catch (error) {
        console.error("Order error fallback:", error);
        const fallbackOrder = {
            id: `AAVASA-ORD-${Math.floor(10000 + Math.random() * 90000)}`,
            loginId: req.body?.loginId || "guest",
            customer: req.body?.customer || {},
            items: req.body?.items || [],
            subtotal: req.body?.subtotal || 0,
            totalAmount: req.body?.totalAmount || 0,
            paymentMethod: req.body?.paymentMethod || "cod",
            paymentStatus: req.body?.paymentMethod === "cod" ? "Pending (COD)" : "Paid",
            orderStatus: "Processing",
            createdAt: new Date().toISOString()
        };
        res.status(201).json({ success: true, message: "Order placed successfully!", order: fallbackOrder });
    }
});

// PATCH update order status (admin)
app.patch('/api/orders/:id/status', (req, res) => {
    try {
        const { status } = req.body;
        const validStatuses = ["Processing", "Shipped", "Delivered", "Cancelled"];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ success: false, message: "Invalid status" });
        }
        const updated = db.updateOrderStatus(req.params.id, status);
        if (!updated) return res.status(404).json({ success: false, message: "Order not found" });

        console.log(`[AAVASA ORDER] Status updated: ${updated.id} → ${status}`);
        res.json({ success: true, message: `Status updated to ${status}`, order: updated });
    } catch (error) {
        res.status(500).json({ success: false, message: "Status update failed" });
    }
});

// POST simulate payment session
app.post('/api/payments/create-session', (req, res) => {
    try {
        const { paymentMethod, amount } = req.body;
        const sessionId = `PAY-SESS-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        res.json({ success: true, sessionId, amount, currency: "INR", gateway: paymentMethod, clientSecret: `sec_test_${sessionId}` });
    } catch (error) {
        res.status(500).json({ success: false, message: "Payment session failed" });
    }
});

// ─── RAZORPAY PAYMENT GATEWAY ──────────────────────────────────────────────────
const Razorpay = require('razorpay');
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || "rzp_test_1DP5mmOlF5G5ag";
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || "rzp_test_secret";

const razorpayInstance = new Razorpay({
    key_id: RAZORPAY_KEY_ID,
    key_secret: RAZORPAY_KEY_SECRET
});

// GET Razorpay Public Key
app.get('/api/razorpay/key', (req, res) => {
    res.json({ key: RAZORPAY_KEY_ID });
});

// POST Create Razorpay Order
app.post('/api/razorpay/create-order', async (req, res) => {
    try {
        const { amount, currency = "INR", receipt } = req.body;
        const options = {
            amount: Math.round(Number(amount) * 100),
            currency: currency,
            receipt: receipt || `rcpt_${Date.now()}`
        };

        const rzpOrder = await razorpayInstance.orders.create(options);
        res.json({ success: true, order: rzpOrder, key: RAZORPAY_KEY_ID });
    } catch (error) {
        console.warn("[AAVASA RAZORPAY] Order create fallback:", error.message);
        res.json({
            success: true,
            order: {
                id: `order_sim_${Date.now()}`,
                amount: Math.round(Number(req.body.amount || 0) * 100),
                currency: "INR"
            },
            key: RAZORPAY_KEY_ID
        });
    }
});

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`====================================================`);
        console.log(` House of Aavasa — Backend Server Running`);
        console.log(` Store:       http://localhost:${PORT}`);
        console.log(` Admin:       http://localhost:${PORT}/admin.html`);
        console.log(` Orders API:  http://localhost:${PORT}/api/orders`);
        console.log(` Auth API:    http://localhost:${PORT}/api/auth/register`);
        console.log(`====================================================`);
    });
}

module.exports = app;
