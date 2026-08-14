const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const os = require('os');

let DATA_DIR = path.join(__dirname, 'data');
try {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
} catch (err) {
    DATA_DIR = path.join(os.tmpdir(), 'aavasa_data');
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}

const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

// ─── Init Database Files ──────────────────────────────────────────────────────
function initDatabase() {
    try {
        if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    } catch (e) {}

    if (!fs.existsSync(ORDERS_FILE)) {
        const seedOrders = [
            {
                id: "AAVASA-ORD-10001",
                loginId: "eleanor@example.com",
                customer: {
                    fullName: "Eleanor Vance",
                    email: "eleanor@example.com",
                    phone: "+91 98765 43210",
                    address: "42 Park Avenue, Penthouse B",
                    city: "Mumbai",
                    state: "Maharashtra",
                    pincode: "400001"
                },
                items: [
                    { id: 6, name: "Oud Imperial", edition: "collector", price: 3999, quantity: 1, size: "80ml" },
                    { id: 11, name: "Jasmine Dew", edition: "signature", price: 1699, quantity: 1, size: "80ml" }
                ],
                subtotal: 5698, shippingFee: 0, totalAmount: 5698,
                paymentMethod: "stripe", paymentStatus: "Paid",
                orderStatus: "Shipped",
                createdAt: new Date(Date.now() - 86400000).toISOString()
            },
            {
                id: "AAVASA-ORD-10002",
                loginId: "julian@example.com",
                customer: {
                    fullName: "Julian Thorne",
                    email: "julian@example.com",
                    phone: "+91 91234 56789",
                    address: "18 Rosewood Estate, Road No. 12",
                    city: "Bengaluru",
                    state: "Karnataka",
                    pincode: "560001"
                },
                items: [
                    { id: 10, name: "Cuir Royale", edition: "collector", price: 3999, quantity: 1, size: "80ml" }
                ],
                subtotal: 3999, shippingFee: 0, totalAmount: 3999,
                paymentMethod: "razorpay", paymentStatus: "Paid",
                orderStatus: "Processing",
                createdAt: new Date(Date.now() - 36000000).toISOString()
            }
        ];
        fs.writeFileSync(ORDERS_FILE, JSON.stringify(seedOrders, null, 2), 'utf8');
    }

    if (!fs.existsSync(USERS_FILE)) {
        const seedUsers = [
            {
                loginId: "eleanor@example.com",
                passwordHash: hashPassword("Aavasa@2026"),
                profile: {
                    fullName: "Eleanor Vance",
                    phone: "+91 98765 43210",
                    address: "42 Park Avenue, Penthouse B",
                    city: "Mumbai",
                    state: "Maharashtra",
                    pincode: "400001"
                },
                createdAt: new Date(Date.now() - 90000000).toISOString()
            }
        ];
        fs.writeFileSync(USERS_FILE, JSON.stringify(seedUsers, null, 2), 'utf8');
    }
}

// ─── Helper: Hash Passwords ───────────────────────────────────────────────────
function hashPassword(plain) {
    return crypto.createHash('sha256').update(plain + 'aavasa_salt_2026').digest('hex');
}

// ─── Read / Write Helpers ─────────────────────────────────────────────────────
function readJSON(filePath) {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch { return []; }
}

function writeJSON(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

// ─── USER AUTH OPERATIONS ─────────────────────────────────────────────────────

function getAllUsers() {
    initDatabase();
    return readJSON(USERS_FILE);
}

function registerUser({ loginId, password, fullName, phone, address, city, state, pincode }) {
    const users = getAllUsers();
    const existing = users.find(u => u.loginId.toLowerCase() === loginId.toLowerCase());
    if (existing) return { success: false, message: "An account with this Login ID already exists." };

    const newUser = {
        loginId: loginId.toLowerCase().trim(),
        passwordHash: hashPassword(password),
        profile: {
            fullName: fullName || "",
            phone: phone || "",
            address: address || "",
            city: city || "",
            state: state || "",
            pincode: pincode || ""
        },
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    writeJSON(USERS_FILE, users);

    // Return safe user object (no password)
    return { success: true, user: safeUser(newUser) };
}

function loginUser({ loginId, password }) {
    const users = getAllUsers();
    const user = users.find(u => u.loginId.toLowerCase() === loginId.toLowerCase().trim());
    if (!user) return { success: false, message: "No account found with this Login ID." };

    const hash = hashPassword(password);
    if (hash !== user.passwordHash) return { success: false, message: "Incorrect password. Please try again." };

    return { success: true, user: safeUser(user) };
}

function updateUserProfile(loginId, profileData) {
    const users = getAllUsers();
    const idx = users.findIndex(u => u.loginId.toLowerCase() === loginId.toLowerCase());
    if (idx === -1) return null;

    users[idx].profile = { ...users[idx].profile, ...profileData };
    writeJSON(USERS_FILE, users);
    return safeUser(users[idx]);
}

function loginOrRegisterGoogleUser({ email, name, picture, googleId }) {
    const users = getAllUsers();
    const loginId = email.toLowerCase().trim();
    let user = users.find(u => u.loginId.toLowerCase() === loginId);
    let created = false;

    if (!user) {
        created = true;
        user = {
            loginId: loginId,
            googleId: googleId || "google_user",
            authProvider: "google",
            picture: picture || "",
            passwordHash: null,
            profile: {
                fullName: name || "Aavasa Member",
                phone: "",
                address: "",
                city: "",
                state: "",
                pincode: ""
            },
            createdAt: new Date().toISOString()
        };
        users.push(user);
        writeJSON(USERS_FILE, users);
    } else {
        if (name && (!user.profile.fullName || user.profile.fullName === "Aavasa Member")) {
            user.profile.fullName = name;
        }
        if (picture) user.picture = picture;
        if (googleId) user.googleId = googleId;
        user.authProvider = user.authProvider || "google";
        writeJSON(USERS_FILE, users);
    }

    return { success: true, user: safeUser(user), created: created };
}

function safeUser(user) {
    return {
        loginId: user.loginId,
        profile: user.profile,
        picture: user.picture || null,
        authProvider: user.authProvider || "email",
        createdAt: user.createdAt
    };
}

// ─── ORDER OPERATIONS ─────────────────────────────────────────────────────────

function getAllOrders() {
    initDatabase();
    const orders = readJSON(ORDERS_FILE);
    return orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function getOrderById(id) {
    return getAllOrders().find(o => o.id === id) || null;
}

function getOrdersByLoginId(loginId) {
    return getAllOrders().filter(o => o.loginId && o.loginId.toLowerCase() === loginId.toLowerCase());
}

function createOrder(orderData) {
    const orders = getAllOrders();
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const orderId = `AAVASA-ORD-${randomNum}`;

    const newOrder = {
        id: orderId,
        loginId: orderData.loginId || "guest",
        customer: {
            fullName: orderData.customer?.fullName || "Guest Customer",
            email: orderData.customer?.email || "N/A",
            phone: orderData.customer?.phone || "N/A",
            address: orderData.customer?.address || "N/A",
            city: orderData.customer?.city || "N/A",
            state: orderData.customer?.state || "N/A",
            pincode: orderData.customer?.pincode || "N/A"
        },
        items: orderData.items || [],
        subtotal: orderData.subtotal || 0,
        shippingFee: 0,
        totalAmount: orderData.totalAmount || orderData.subtotal || 0,
        paymentMethod: orderData.paymentMethod || "cod",
        paymentStatus: orderData.paymentMethod === "cod" ? "Pending (COD)" : "Paid",
        orderStatus: "Processing",
        createdAt: new Date().toISOString()
    };

    orders.unshift(newOrder);
    writeJSON(ORDERS_FILE, orders);
    return newOrder;
}

function updateOrderStatus(id, newStatus) {
    const orders = getAllOrders();
    const idx = orders.findIndex(o => o.id === id);
    if (idx === -1) return null;

    orders[idx].orderStatus = newStatus;
    if (newStatus === "Delivered" && orders[idx].paymentMethod === "cod") {
        orders[idx].paymentStatus = "Paid (COD Collected)";
    }
    writeJSON(ORDERS_FILE, orders);
    return orders[idx];
}

initDatabase();

module.exports = {
    getAllOrders,
    getOrderById,
    getOrdersByLoginId,
    createOrder,
    updateOrderStatus,
    registerUser,
    loginUser,
    updateUserProfile,
    loginOrRegisterGoogleUser
};
