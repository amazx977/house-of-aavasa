/* ==========================================================================
   HOUSE OF AAVASA — APP ENGINE (Auth + Cart + Catalog + Checkout + Orders)
   ========================================================================== */

// ─── PRODUCT DATABASE ─────────────────────────────────────────────────────────
const products = [
    { id: 1,  name: "Verve Royale",      gender: "male",   edition: "signature", priceOriginal: 2199, priceDiscounted: 1699, size: "80ml", image: "assets/citrus.png", family: "citrus", notes: "Calabrian Bergamot, Lemon Zest, Fresh Mint, Virginia Cedarwood", description: "Verve Royale captures the vibrant energy of a Mediterranean sunrise — a burst of sparkling citrus melting into fresh mint, anchored by dry, architectural cedarwood.", occasion: "day" },
    { id: 2,  name: "Santal Breeze",     gender: "male",   edition: "signature", priceOriginal: 2199, priceDiscounted: 1699, size: "80ml", image: "assets/woody.png",  family: "woody",  notes: "Mysore Sandalwood, Cardamom, Vetiver, Muted Iris", description: "A clean, modern interpretation of classic woods. Creamy Mysore sandalwood in cardamom spice and earth-bound vetiver.", occasion: "day" },
    { id: 3,  name: "Nautical Drift",    gender: "male",   edition: "signature", priceOriginal: 2199, priceDiscounted: 1699, size: "80ml", image: "assets/citrus.png", family: "citrus", notes: "Sea Salt, White Sage, Pink Grapefruit, Driftwood", description: "Mineral-rich and bracing. Salty air with dry sage and sparkling grapefruit over sun-bleached driftwood.", occasion: "day" },
    { id: 4,  name: "Nomad Spice",       gender: "male",   edition: "signature", priceOriginal: 2199, priceDiscounted: 1699, size: "80ml", image: "assets/amber.png",  family: "amber",  notes: "Black Pepper, Nutmeg, Ambergris, Dry Woods", description: "Fiery pepper and nutmeg with the warm, salty undertones of rare mineral ambergris.", occasion: "day" },
    { id: 5,  name: "Forest Mist",       gender: "male",   edition: "signature", priceOriginal: 2199, priceDiscounted: 1699, size: "80ml", image: "assets/woody.png",  family: "woody",  notes: "Siberian Pine, Oakmoss, Patchouli, Green Tea", description: "Crisp alpine air. Damp moss and evergreen pine with grounding patchouli dry-down.", occasion: "day" },
    { id: 6,  name: "Oud Imperial",      gender: "male",   edition: "collector", priceOriginal: 4569, priceDiscounted: 3999, size: "80ml", image: "assets/woody.png",  family: "woody",  notes: "Assam Oud, Tuscan Leather, Smoked Tobacco, Labdanum", description: "Dark and resinous — wild Indian agarwood paired with fine Italian leather. A collector's masterwork.", occasion: "night" },
    { id: 7,  name: "Amber Absolute",    gender: "male",   edition: "collector", priceOriginal: 4569, priceDiscounted: 3999, size: "80ml", image: "assets/amber.png",  family: "amber",  notes: "Warm Amber, Sweet Vanilla, Somalian Incense, Benzoin", description: "Rich, enveloping resins with balsamic benzoin and mystical incense, sweetened by Madagascan vanilla.", occasion: "night" },
    { id: 8,  name: "Smoky Santal",      gender: "male",   edition: "collector", priceOriginal: 4569, priceDiscounted: 3999, size: "80ml", image: "assets/woody.png",  family: "woody",  notes: "Smoked Sandalwood, Papyrus Reed, Leather Suede, Cedar", description: "Creamy sandalwood with dry papyrus and smokiness of roasted woods.", occasion: "night" },
    { id: 9,  name: "Citron Eclipse",    gender: "male",   edition: "collector", priceOriginal: 4569, priceDiscounted: 3999, size: "80ml", image: "assets/citrus.png", family: "citrus", notes: "Black Amber, Bergamot, Indonesian Patchouli, Vetiver", description: "The dark side of freshness. Premium bergamot over black amber and earthy patchouli.", occasion: "night" },
    { id: 10, name: "Cuir Royale",       gender: "male",   edition: "collector", priceOriginal: 4569, priceDiscounted: 3999, size: "80ml", image: "assets/amber.png",  family: "amber",  notes: "Saffron, Golden Amber, Tuscan Suede, Thyme", description: "Aristocratic and compelling — crimson saffron with luxurious velvety suede base.", occasion: "night" },
    { id: 11, name: "Jasmine Dew",       gender: "female", edition: "signature", priceOriginal: 2199, priceDiscounted: 1699, size: "80ml", image: "assets/floral.png", family: "floral", notes: "Grasse Jasmine Sambac, White Rose Petals, Crisp Pear, White Musk", description: "Fresh, romantic, ethereal. White flowers laden with morning dew, sweetened by crisp pear.", occasion: "day" },
    { id: 12, name: "Citrus Blossom",    gender: "female", edition: "signature", priceOriginal: 2199, priceDiscounted: 1699, size: "80ml", image: "assets/citrus.png", family: "citrus", notes: "Orange Blossom, Neroli, Mandarine, White Amber", description: "Luminous and solar. Sun-kissed orange flowers, bittersweet neroli, and sparkling mandarine.", occasion: "day" },
    { id: 13, name: "Rose Muse",         gender: "female", edition: "signature", priceOriginal: 2199, priceDiscounted: 1699, size: "80ml", image: "assets/floral.png", family: "floral", notes: "Damask Rose, Wild Honey, Soft Musk, Pink Pepper", description: "A modern ode to the queen of flowers — rich Damask Rose with golden honey and pink pepper.", occasion: "day" },
    { id: 14, name: "Vanilla Whispers",  gender: "female", edition: "signature", priceOriginal: 2199, priceDiscounted: 1699, size: "80ml", image: "assets/amber.png",  family: "amber",  notes: "Vanilla Bean, Night Orchid, Sandalwood, Coconut Milk", description: "Soft and comforting — warm vanilla orchids with creamy coconut milk and smooth sandalwood.", occasion: "day" },
    { id: 15, name: "Lavender Fields",   gender: "female", edition: "signature", priceOriginal: 2199, priceDiscounted: 1699, size: "80ml", image: "assets/floral.png", family: "floral", notes: "French Lavender, Chamomile, Vanilla, Cedarwood", description: "Serene and herbal. French lavender valleys into warm chamomile tea and cozy vanilla.", occasion: "day" },
    { id: 16, name: "Fleur Nuit",        gender: "female", edition: "collector", priceOriginal: 4569, priceDiscounted: 3999, size: "80ml", image: "assets/floral.png", family: "floral", notes: "Midnight Rose, Patchouli, Dark Chocolate, Amber", description: "Gothic romance — velvety midnight rose with earthy patchouli and dark chocolate.", occasion: "night" },
    { id: 17, name: "Elixir d'Or",       gender: "female", edition: "collector", priceOriginal: 4569, priceDiscounted: 3999, size: "80ml", image: "assets/amber.png",  family: "amber",  notes: "Gold Saffron, Jasmine Sambac, Amber, Cashmere Wood", description: "Liquid gold masterpiece. Aromatic saffron with creamy jasmine and warm amber.", occasion: "night" },
    { id: 18, name: "Santal de Soie",    gender: "female", edition: "collector", priceOriginal: 4569, priceDiscounted: 3999, size: "80ml", image: "assets/woody.png",  family: "woody",  notes: "White Sandalwood, Cashmere Wood, Florentine Iris, Vanilla", description: "Sandalwood spun into pure silk — Florentine iris and velvety cashmere woods.", occasion: "night" },
    { id: 19, name: "Bergamote Select",  gender: "female", edition: "collector", priceOriginal: 4569, priceDiscounted: 3999, size: "80ml", image: "assets/citrus.png", family: "citrus", notes: "Calabrian Bergamot, Petitgrain, White Musk, Jasmine", description: "A study in refined citrus purity — bergamot elevated by petitgrain and white musk.", occasion: "night" },
    { id: 20, name: "Tuberose Intense",  gender: "female", edition: "collector", priceOriginal: 4569, priceDiscounted: 3999, size: "80ml", image: "assets/floral.png", family: "floral", notes: "Tuberose Absolu, Ylang-Ylang, Coconut Husk, Sandalwood", description: "Sensual and hypnotic. Creamy tuberose with ylang-ylang and warm coconut husk base.", occasion: "night" }
];

// ─── APP STATE ─────────────────────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem("aavasa_cart") || "[]");
let currentUser = JSON.parse(localStorage.getItem("aavasa_user") || "null");
let currentGenderFilter = "all";
let currentEditionFilter = "all";
let currentSort = "default";
let selectedIngredientFilter = null;
let selectedPaymentMethod = "razorpay";
let currentCheckoutStep = 1;
let isGuestCheckout = false;
let quizAnswers = { family: null, occasion: null, gender: null };

// ─── DOM REFERENCES ────────────────────────────────────────────────────────────
const productGrid        = document.getElementById("product-grid");
const cartDrawer         = document.getElementById("cart-drawer");
const cartOverlay        = document.getElementById("cart-drawer-overlay");
const cartToggleBtn      = document.getElementById("cart-toggle-btn");
const cartCloseBtn       = document.getElementById("cart-close-btn");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartSubtotalEl     = document.getElementById("cart-subtotal");
const cartCountEl        = document.getElementById("cart-count");
const proceedCheckoutBtn = document.getElementById("proceed-checkout-btn");

const authModal          = document.getElementById("auth-modal");
const authModalClose     = document.getElementById("auth-modal-close");
const loginForm          = document.getElementById("login-form");
const registerForm       = document.getElementById("register-form");

const checkoutModal      = document.getElementById("checkout-drawer-modal");
const checkoutModalClose = document.getElementById("checkout-modal-close");
const successModal       = document.getElementById("checkout-modal");

const myOrdersDrawer     = document.getElementById("my-orders-drawer");
const myOrdersOverlay    = document.getElementById("my-orders-overlay");
const myOrdersClose      = document.getElementById("my-orders-close");
const myOrdersContent    = document.getElementById("my-orders-content");

const editProfileModal   = document.getElementById("edit-profile-modal");
const editProfileForm    = document.getElementById("edit-profile-form");

const mobileNav          = document.getElementById("mobile-nav");
const mobileNavToggle    = document.getElementById("mobile-nav-toggle");
const mobileNavClose     = document.getElementById("mobile-nav-close");

const newsletterForm     = document.getElementById("newsletter-form");

// ─── INITIALIZATION ────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    initVideoLoader();
    renderProducts();
    updateCartUI();
    syncAuthState();
    setupEventListeners();
});

// ─── VIDEO LOADING SCREEN ──────────────────────────────────────────────────────
let loaderDismissed = false;

function initVideoLoader() {
    const loaderOverlay = document.getElementById("video-loader-overlay");
    const loaderVideo   = document.getElementById("loader-video-element");
    const loaderFill    = document.getElementById("loader-progress-fill");
    if (!loaderOverlay) return;

    if (loaderVideo) {
        loaderVideo.play().catch(() => {});
        loaderVideo.addEventListener("ended", () => dismissVideoLoader());
        loaderVideo.addEventListener("timeupdate", () => {
            if (loaderVideo.duration && loaderFill) {
                const pct = (loaderVideo.currentTime / loaderVideo.duration) * 100;
                loaderFill.style.width = `${pct}%`;
            }
        });
    }

    // Fallback timer max 3.8 seconds
    setTimeout(() => {
        if (!loaderDismissed) dismissVideoLoader();
    }, 3800);
}

window.dismissVideoLoader = function() {
    if (loaderDismissed) return;
    loaderDismissed = true;
    const loaderOverlay = document.getElementById("video-loader-overlay");
    if (loaderOverlay) {
        loaderOverlay.classList.add("fade-out");
        setTimeout(() => {
            loaderOverlay.style.display = "none";
        }, 800);
    }
};

// ─── EVENT LISTENERS ──────────────────────────────────────────────────────────
function setupEventListeners() {
    // Catalog Filters
    document.querySelectorAll("[data-filter-edition]").forEach(tab => {
        tab.addEventListener("click", e => {
            document.querySelectorAll("[data-filter-edition]").forEach(t => t.classList.remove("active"));
            e.target.classList.add("active");
            currentEditionFilter = e.target.dataset.filterEdition;
            selectedIngredientFilter = null;
            renderProducts();
        });
    });
    document.querySelectorAll("[data-filter-gender]").forEach(tab => {
        tab.addEventListener("click", e => {
            document.querySelectorAll("[data-filter-gender]").forEach(t => t.classList.remove("active"));
            e.target.classList.add("active");
            currentGenderFilter = e.target.dataset.filterGender;
            selectedIngredientFilter = null;
            renderProducts();
        });
    });
    document.getElementById("sort-select")?.addEventListener("change", e => { currentSort = e.target.value; renderProducts(); });
    document.getElementById("clear-filters-btn")?.addEventListener("click", resetFilters);

    // Cart
    cartToggleBtn.addEventListener("click", openCart);
    cartCloseBtn.addEventListener("click", closeCart);
    cartOverlay.addEventListener("click", closeCart);
    cartItemsContainer.addEventListener("click", handleCartClicks);
    proceedCheckoutBtn?.addEventListener("click", () => { closeCart(); openCheckoutModal(); });

    // Auth Modal
    authModalClose.addEventListener("click", () => authModal.classList.remove("active"));
    authModal.addEventListener("click", e => { if (e.target === authModal) authModal.classList.remove("active"); });
    loginForm.addEventListener("submit", handleLogin);
    registerForm.addEventListener("submit", handleRegister);

    // Account dropdown toggle
    document.getElementById("account-trigger-btn")?.addEventListener("click", e => {
        e.stopPropagation();
        document.getElementById("account-menu")?.classList.toggle("open");
    });
    document.addEventListener("click", () => document.getElementById("account-menu")?.classList.remove("open"));

    // Checkout modal
    checkoutModalClose.addEventListener("click", () => checkoutModal.classList.remove("active"));
    checkoutModal.addEventListener("click", e => { if (e.target === checkoutModal) checkoutModal.classList.remove("active"); });

    // Payment method tabs in checkout
    document.querySelectorAll(".payment-option-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".payment-option-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            selectedPaymentMethod = tab.dataset.method;
            tab.querySelector("input[type='radio']").checked = true;
            updatePaymentInfoBox(selectedPaymentMethod);
        });
    });

    // Guest checkout continue
    document.getElementById("continue-as-guest-btn")?.addEventListener("click", () => {
        isGuestCheckout = true;
        document.getElementById("guest-identity-card").style.display = "none";
        document.getElementById("go-step-2-btn").style.display = "flex";
    });

    // My Orders drawer
    myOrdersClose.addEventListener("click", closeMyOrders);
    myOrdersOverlay.addEventListener("click", closeMyOrders);

    // Success modal close
    document.getElementById("checkout-success-close")?.addEventListener("click", () => successModal.classList.remove("active"));

    // Edit Profile Form
    editProfileForm?.addEventListener("submit", handleEditProfile);

    // Mobile Nav
    mobileNavToggle?.addEventListener("click", () => mobileNav.classList.add("open"));
    mobileNavClose?.addEventListener("click", () => mobileNav.classList.remove("open"));
    document.querySelectorAll(".mobile-link").forEach(l => l.addEventListener("click", () => mobileNav.classList.remove("open")));

    // Ingredient cards
    document.querySelectorAll(".ingredient-card").forEach(card => {
        card.addEventListener("click", () => filterCatalogByIngredient(card.dataset.note));
    });

    // Quiz options
    document.querySelectorAll(".quiz-option").forEach(opt => opt.addEventListener("click", handleQuizOption));
    document.querySelectorAll(".quiz-back-btn").forEach(btn => btn.addEventListener("click", handleQuizBack));
    document.getElementById("restart-quiz-btn")?.addEventListener("click", restartQuiz);

    // Newsletter
    newsletterForm?.addEventListener("submit", e => {
        e.preventDefault();
        newsletterForm.style.display = "none";
        document.getElementById("newsletter-success").style.display = "block";
    });
}

// ─── AUTH STATE ────────────────────────────────────────────────────────────────
function syncAuthState() {
    const signInBtn       = document.getElementById("sign-in-nav-btn");
    const navOrdersBtn    = document.getElementById("nav-my-orders-btn");
    const accountDropdown = document.getElementById("account-dropdown");
    const mobileAuthLink  = document.getElementById("mobile-auth-link");

    if (currentUser) {
        if (signInBtn) signInBtn.style.display = "none";
        if (navOrdersBtn) navOrdersBtn.style.display = "inline-flex";
        if (accountDropdown) accountDropdown.style.display = "inline-flex";

        const name = currentUser.profile?.fullName || currentUser.loginId;
        const initial = name[0].toUpperCase();

        const avatarEl = document.getElementById("account-avatar");
        const nameEl   = document.getElementById("account-display-name");
        const menuIdEl = document.getElementById("menu-login-id");

        if (avatarEl) {
            if (currentUser.picture) {
                avatarEl.innerHTML = `<img src="${currentUser.picture}" alt="${name}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
            } else {
                avatarEl.textContent = initial;
            }
        }
        if (nameEl)   nameEl.textContent   = currentUser.profile?.fullName?.split(" ")[0] || "Account";
        if (menuIdEl) menuIdEl.textContent = currentUser.loginId;

        // Profile banner info
        const profAvatar = document.getElementById("profile-avatar-large");
        const profName   = document.getElementById("profile-header-name");
        const profEmail  = document.getElementById("profile-header-email");
        if (profAvatar) {
            if (currentUser.picture) {
                profAvatar.innerHTML = `<img src="${currentUser.picture}" alt="${name}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">`;
            } else {
                profAvatar.textContent = initial;
            }
        }
        if (profName)   profName.textContent   = currentUser.profile?.fullName || "Aavasa Member";
        if (profEmail)  profEmail.textContent  = currentUser.loginId;

        if (mobileAuthLink) mobileAuthLink.textContent = "My Account & Orders";
    } else {
        if (signInBtn) signInBtn.style.display = "inline-flex";
        if (navOrdersBtn) navOrdersBtn.style.display = "none";
        if (accountDropdown) accountDropdown.style.display = "none";
        if (mobileAuthLink) mobileAuthLink.textContent = "Sign In";
    }
}

// ─── GOOGLE AUTHENTICATION SYSTEM ──────────────────────────────────────────────
let googleOAuthClientId = "987654321098-house-of-aavasa.apps.googleusercontent.com";

async function fetchAuthConfig() {
    try {
        const res = await fetch("/api/auth/config");
        const data = await res.json();
        if (data.googleClientId) {
            googleOAuthClientId = data.googleClientId;
            initGoogleGSI();
        }
    } catch {
        initGoogleGSI();
    }
}

function initGoogleGSI() {
    if (window.google && google.accounts && google.accounts.id) {
        try {
            google.accounts.id.initialize({
                client_id: googleOAuthClientId,
                callback: handleGoogleCredentialResponse,
                auto_select: false
            });
        } catch (e) {
            console.warn("Google GSI Init:", e);
        }
    }
}

// Call config fetch on script load
fetchAuthConfig();

window.handleGoogleLoginClick = function() {
    if (window.google && google.accounts && google.accounts.id) {
        try {
            google.accounts.id.initialize({
                client_id: googleOAuthClientId,
                callback: handleGoogleCredentialResponse,
                auto_select: false
            });
            google.accounts.id.prompt((notification) => {
                if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                    openGoogleAccountModal();
                }
            });
            return;
        } catch (e) {
            console.warn("GSI Prompt fallback to Account Chooser:", e);
        }
    }
    openGoogleAccountModal();
};

window.openGoogleAccountModal = function() {
    const gModal = document.getElementById("google-account-modal");
    if (gModal) gModal.classList.add("active");
};

window.selectGoogleAccount = function(name, email, picture) {
    document.getElementById("google-account-modal")?.classList.remove("active");
    processGoogleAuthPayload({
        email: email,
        name: name,
        picture: picture || "https://lh3.googleusercontent.com/a/default-user=s96-c",
        googleId: `google_sub_${Date.now()}`
    });
};

window.promptCustomGoogleAccount = function() {
    const userEmail = prompt("Enter your Google Account email:", "alex.thorne@gmail.com");
    if (!userEmail) return;

    const userName = prompt("Enter your Google profile name:", "Alex Thorne") || "Alex Thorne";

    selectGoogleAccount(userName, userEmail, "https://lh3.googleusercontent.com/a/default-user=s96-c");
};

window.handleGoogleCredentialResponse = function(response) {
    if (response && response.credential) {
        processGoogleAuthPayload({ credential: response.credential });
    }
};

async function processGoogleAuthPayload(payload) {
    try {
        const res = await fetch("/api/auth/google", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (data.success) {
            currentUser = data.user;
            localStorage.setItem("aavasa_user", JSON.stringify(currentUser));
            authModal.classList.remove("active");
            syncAuthState();
            alert(`Welcome, ${currentUser.profile.fullName || currentUser.loginId}! Signed in with Google.`);
        } else {
            alert(data.message || "Google Authentication failed.");
        }
    } catch {
        alert("Cannot reach the server for Google Sign-In.");
    }
}

// Open Login/Register modal
window.openAuthModal = function(tab = "login") {
    authModal.classList.add("active");
    switchAuthTab(tab);
};

window.switchAuthTab = function(tab) {
    document.getElementById("tab-login").classList.toggle("active", tab === "login");
    document.getElementById("tab-register").classList.toggle("active", tab === "register");
    document.getElementById("login-form").style.display = tab === "login" ? "flex" : "none";
    document.getElementById("register-form").style.display = tab === "register" ? "flex" : "none";
    document.getElementById("login-error").style.display = "none";
    document.getElementById("register-error").style.display = "none";
};

window.togglePasswordVisibility = function(id, btn) {
    const input = document.getElementById(id);
    if (input.type === "password") {
        input.type = "text";
        btn.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
    } else {
        input.type = "password";
        btn.innerHTML = '<i class="fa-regular fa-eye"></i>';
    }
};

// Handle Login
async function handleLogin(e) {
    e.preventDefault();
    const btn = document.getElementById("login-submit-btn");
    const errEl = document.getElementById("login-error");
    const loginId = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    btn.disabled = true;
    btn.textContent = "Signing in…";
    errEl.style.display = "none";

    try {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ loginId, password })
        });
        const data = await res.json();
        if (data.success) {
            currentUser = data.user;
            localStorage.setItem("aavasa_user", JSON.stringify(currentUser));
            authModal.classList.remove("active");
            syncAuthState();
        } else {
            errEl.textContent = data.message;
            errEl.style.display = "block";
        }
    } catch {
        errEl.textContent = "Connection error. Is the server running?";
        errEl.style.display = "block";
    }

    btn.disabled = false;
    btn.textContent = "Sign In to AAVASA";
}

// Handle Register
async function handleRegister(e) {
    e.preventDefault();
    const btn = document.getElementById("register-submit-btn");
    const errEl = document.getElementById("register-error");

    btn.disabled = true;
    btn.textContent = "Creating Account…";
    errEl.style.display = "none";

    const payload = {
        loginId: document.getElementById("reg-email").value.trim(),
        password: document.getElementById("reg-password").value,
        fullName: document.getElementById("reg-name").value.trim(),
        phone: document.getElementById("reg-phone").value.trim(),
        address: document.getElementById("reg-address").value.trim(),
        city: document.getElementById("reg-city").value.trim(),
        state: document.getElementById("reg-state").value.trim(),
        pincode: document.getElementById("reg-pincode").value.trim()
    };

    try {
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (data.success) {
            currentUser = data.user;
            localStorage.setItem("aavasa_user", JSON.stringify(currentUser));
            authModal.classList.remove("active");
            syncAuthState();
        } else {
            errEl.textContent = data.message;
            errEl.style.display = "block";
        }
    } catch {
        errEl.textContent = "Connection error. Is the server running?";
        errEl.style.display = "block";
    }

    btn.disabled = false;
    btn.textContent = "Create My AAVASA Account";
}

window.handleLogout = function() {
    currentUser = null;
    localStorage.removeItem("aavasa_user");
    syncAuthState();
    document.getElementById("account-menu")?.classList.remove("open");
};

// ─── USER PROFILE & MY ORDERS PORTAL ──────────────────────────────────────────
window.switchProfileTab = function(tab) {
    const tabOrders   = document.getElementById("tab-profile-orders");
    const tabAddress  = document.getElementById("tab-profile-address");
    const panelOrders  = document.getElementById("profile-panel-orders");
    const panelAddress = document.getElementById("profile-panel-address");

    if (tab === "orders") {
        if (tabOrders) tabOrders.classList.add("active");
        if (tabAddress) tabAddress.classList.remove("active");
        if (panelOrders) panelOrders.style.display = "block";
        if (panelAddress) panelAddress.style.display = "none";
        loadMyOrders();
    } else {
        if (tabOrders) tabOrders.classList.remove("active");
        if (tabAddress) tabAddress.classList.add("active");
        if (panelOrders) panelOrders.style.display = "none";
        if (panelAddress) panelAddress.style.display = "block";
    }
};

window.openEditProfile = function(defaultTab = "orders") {
    if (!currentUser) return openAuthModal("login");
    const p = currentUser.profile || {};
    setVal("ep-name",    p.fullName);
    setVal("ep-phone",   p.phone);
    setVal("ep-address", p.address);
    setVal("ep-city",    p.city);
    setVal("ep-state",   p.state);
    setVal("ep-pincode", p.pincode);

    syncAuthState();
    switchProfileTab(defaultTab);
    editProfileModal.classList.add("active");
    document.getElementById("account-menu")?.classList.remove("open");
};

async function handleEditProfile(e) {
    e.preventDefault();
    const btn = e.target.querySelector("button[type='submit']");
    btn.disabled = true;
    btn.textContent = "Saving…";

    const profileData = {
        loginId: currentUser.loginId,
        fullName: document.getElementById("ep-name").value.trim(),
        phone: document.getElementById("ep-phone").value.trim(),
        address: document.getElementById("ep-address").value.trim(),
        city: document.getElementById("ep-city").value.trim(),
        state: document.getElementById("ep-state").value.trim(),
        pincode: document.getElementById("ep-pincode").value.trim()
    };

    try {
        const res = await fetch("/api/auth/profile", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(profileData)
        });
        const data = await res.json();
        if (data.success) {
            currentUser = data.user;
            localStorage.setItem("aavasa_user", JSON.stringify(currentUser));
            syncAuthState();
            editProfileModal.classList.remove("active");
        }
    } catch (err) {
        console.error(err);
    }

    btn.disabled = false;
    btn.textContent = "Save Profile Details";
}

// ─── MY ORDERS ─────────────────────────────────────────────────────────────────
window.openMyOrders = function() {
    if (!currentUser) return openAuthModal("login");
    openEditProfile("orders");
};

function closeMyOrders() {
    myOrdersOverlay?.classList.remove("active");
    myOrdersDrawer?.classList.remove("active");
}

async function loadMyOrders() {
    const profileOrdersList = document.getElementById("profile-orders-list");
    if (profileOrdersList) {
        profileOrdersList.innerHTML = `<div class="empty-cart-message"><i class="fa-solid fa-spinner fa-spin"></i><p>Loading your orders…</p></div>`;
    }
    if (myOrdersContent) {
        myOrdersContent.innerHTML = `<div class="empty-cart-message"><i class="fa-solid fa-spinner fa-spin"></i><p>Loading your orders…</p></div>`;
    }

    try {
        const res = await fetch(`/api/user/orders?loginId=${encodeURIComponent(currentUser.loginId)}`);
        const data = await res.json();

        if (!data.success || data.data.length === 0) {
            const emptyHtml = `
                <div class="empty-cart-message" style="padding:40px 20px;">
                    <i class="fa-solid fa-box-open" style="font-size:2.2rem; color:var(--color-border);"></i>
                    <p>No orders placed yet.</p>
                    <button class="btn btn-outline" onclick="editProfileModal.classList.remove('active'); closeMyOrders(); document.getElementById('catalog').scrollIntoView({behavior:'smooth'});">Explore Fragrances</button>
                </div>`;
            if (profileOrdersList) profileOrdersList.innerHTML = emptyHtml;
            if (myOrdersContent) myOrdersContent.innerHTML = emptyHtml;
            return;
        }

        const ordersHtml = data.data.map(order => {
            const date = new Date(order.createdAt).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
            const statusClass = `status-${order.orderStatus.replace(" ", "")}`;
            return `
                <div class="my-order-card">
                    <div class="my-order-header">
                        <div>
                            <div class="my-order-id">${order.id}</div>
                            <div class="my-order-date">${date}</div>
                        </div>
                        <span class="my-order-status ${statusClass}">${order.orderStatus}</span>
                    </div>
                    <div class="my-order-items">
                        ${order.items.map(item => `
                            <div class="my-order-item-row">
                                <div>
                                    <div>${item.name} × ${item.quantity}</div>
                                    <div class="my-order-item-sub">${item.edition} Edition · ${item.size}</div>
                                </div>
                                <div>₹${(item.price * item.quantity).toLocaleString("en-IN")}</div>
                            </div>`).join("")}
                    </div>
                    <div class="my-order-total">
                        <span>Total Paid</span>
                        <div style="text-align:right;">
                            <div>₹${order.totalAmount.toLocaleString("en-IN")}</div>
                            <div class="my-order-method">${order.paymentMethod.toUpperCase()} · ${order.paymentStatus}</div>
                        </div>
                    </div>
                </div>`;
        }).join("");

        if (profileOrdersList) profileOrdersList.innerHTML = ordersHtml;
        if (myOrdersContent) myOrdersContent.innerHTML = ordersHtml;
    } catch {
        const errorHtml = `<div class="empty-cart-message"><p>Could not load orders. Please try again.</p></div>`;
        if (profileOrdersList) profileOrdersList.innerHTML = errorHtml;
        if (myOrdersContent) myOrdersContent.innerHTML = errorHtml;
    }
}

// ─── CHECKOUT SYSTEM (3-Step) ──────────────────────────────────────────────────
function openCheckoutModal() {
    if (cart.length === 0) return;
    populateCheckoutSummary();
    setupIdentityStep();
    goToCheckoutStep(1);
    checkoutModal.classList.add("active");
}

function populateCheckoutSummary() {
    const itemsEl = document.getElementById("checkout-summary-items");
    const subtotal = cart.reduce((s, i) => s + i.priceDiscounted * i.quantity, 0);

    itemsEl.innerHTML = cart.map(item => `
        <div class="summary-item">
            <div class="summary-item-img"><img src="${item.image}" alt="${item.name}"></div>
            <div class="summary-item-details">
                <div class="summary-item-name">${item.name}</div>
                <div class="summary-item-sub">${item.edition === "collector" ? "Collector's" : "Signature"} · ${item.size} · Qty ${item.quantity}</div>
            </div>
            <div class="summary-item-price">₹${(item.priceDiscounted * item.quantity).toLocaleString("en-IN")}</div>
        </div>`).join("");

    document.getElementById("checkout-summary-subtotal").textContent = `₹${subtotal.toLocaleString("en-IN")}`;
    document.getElementById("checkout-summary-total").textContent = `₹${subtotal.toLocaleString("en-IN")}`;
}

function setupIdentityStep() {
    const loggedCard  = document.getElementById("logged-in-identity-card");
    const guestCard   = document.getElementById("guest-identity-card");
    const goStep2Btn  = document.getElementById("go-step-2-btn");

    if (currentUser) {
        const p = currentUser.profile || {};
        loggedCard.style.display = "flex";
        guestCard.style.display = "none";
        goStep2Btn.style.display = "flex";

        const initial = (p.fullName || currentUser.loginId)[0].toUpperCase();
        document.getElementById("checkout-avatar").textContent = initial;
        document.getElementById("checkout-identity-name").textContent = p.fullName || "—";
        document.getElementById("checkout-identity-loginid").textContent = currentUser.loginId;
        document.getElementById("checkout-identity-phone").textContent = p.phone || "Not saved";

        // Pre-fill address fields
        prefillAddressFields(p);
        showSavedAddressCard(p);
    } else {
        loggedCard.style.display = "none";
        guestCard.style.display = "flex";
        goStep2Btn.style.display = "none";
        isGuestCheckout = false;
        hideSavedAddressCard();
    }
}

function prefillAddressFields(p) {
    if (!p) return;
    setVal("co-name",    p.fullName);
    setVal("co-phone",   p.phone);
    setVal("co-email",   currentUser?.loginId || "");
    setVal("co-address", p.address);
    setVal("co-city",    p.city);
    setVal("co-state",   p.state);
    setVal("co-pincode", p.pincode);
}

function setVal(id, val) {
    const el = document.getElementById(id);
    if (el) el.value = val || "";
}

function showSavedAddressCard(p) {
    const card = document.getElementById("saved-address-display");
    const body = document.getElementById("saved-address-body");
    const form = document.getElementById("address-form-fields");
    if (!p?.address) { hideSavedAddressCard(); return; }

    card.style.display = "block";
    form.style.display = "none";
    body.innerHTML = `
        <strong>${p.fullName || "—"}</strong><br>
        ${p.phone || ""}<br>
        ${p.address},<br>
        ${p.city}, ${p.state} — ${p.pincode}`;
}

function hideSavedAddressCard() {
    document.getElementById("saved-address-display").style.display = "none";
    document.getElementById("address-form-fields").style.display = "block";
}

window.enableAddressEdit = function() {
    hideSavedAddressCard();
};

window.goToCheckoutStep = function(step) {
    // Validate step 2 before proceeding to step 3
    if (step === 3) {
        const name = document.getElementById("co-name")?.value.trim();
        const phone = document.getElementById("co-phone")?.value.trim();
        const email = document.getElementById("co-email")?.value.trim();
        const address = document.getElementById("co-address")?.value.trim();
        const city = document.getElementById("co-city")?.value.trim();
        if (!name || !phone || !email || !address || !city) {
            alert("Please fill in all required fields before continuing.");
            return;
        }
    }

    currentCheckoutStep = step;

    document.querySelectorAll(".checkout-step-panel").forEach(p => p.classList.remove("active"));
    document.getElementById(`checkout-panel-${step}`).classList.add("active");

    document.querySelectorAll(".checkout-step-indicator").forEach(ind => {
        const s = parseInt(ind.dataset.step);
        ind.classList.remove("active", "completed");
        if (s === step) ind.classList.add("active");
        else if (s < step) ind.classList.add("completed");
    });
};

function updatePaymentInfoBox(method) {
    const infoEl = document.getElementById("payment-info-box");
    if (!infoEl) return;
    const infos = {
        razorpay: `<i class="fa-solid fa-bolt" style="color:var(--color-accent);"></i> <strong>Razorpay:</strong> Instant UPI (GPay, PhonePe, Paytm), Credit/Debit Cards, NetBanking.`,
        stripe:   `<i class="fa-brands fa-stripe" style="color:#6772E5;"></i> <strong>Stripe:</strong> Global Credit/Debit Card processing with 256-bit SSL.`,
        paypal:   `<i class="fa-brands fa-paypal" style="color:#003087;"></i> <strong>PayPal:</strong> Pay via your PayPal account balance or linked cards.`,
        cod:      `<i class="fa-solid fa-truck-ramp-box"></i> <strong>Cash on Delivery:</strong> Pay in cash to the courier on delivery.`
    };
    infoEl.innerHTML = infos[method] || infos.razorpay;
}

// ─── ORDER SUBMISSION ─────────────────────────────────────────────────────────
window.handleOrderSubmission = async function() {
    const btn = document.getElementById("place-order-submit-btn");

    const name    = document.getElementById("co-name")?.value.trim();
    const phone   = document.getElementById("co-phone")?.value.trim();
    const email   = document.getElementById("co-email")?.value.trim();
    const address = document.getElementById("co-address")?.value.trim();
    const city    = document.getElementById("co-city")?.value.trim();
    const state   = document.getElementById("co-state")?.value.trim();
    const pincode = document.getElementById("co-pincode")?.value.trim();

    if (!name || !phone || !address || !city) {
        alert("Please complete your delivery address in Step 2 first.");
        goToCheckoutStep(2);
        return;
    }

    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing…`;

    const subtotal = cart.reduce((s, i) => s + i.priceDiscounted * i.quantity, 0);

    const payload = {
        loginId: currentUser?.loginId || "guest",
        customer: { fullName: name, email, phone, address, city, state, pincode },
        items: cart.map(i => ({ id: i.id, name: i.name, edition: i.edition, price: i.priceDiscounted, quantity: i.quantity, size: i.size })),
        subtotal,
        totalAmount: subtotal,
        paymentMethod: selectedPaymentMethod
    };

    try {
        const res = await fetch("/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await res.json();

        if (data.success) {
            cart = [];
            saveCart();
            updateCartUI();
            checkoutModal.classList.remove("active");
            document.getElementById("simulated-order-id").textContent = data.order.id;
            successModal.classList.add("active");
        } else {
            alert(data.message || "Order failed. Please try again.");
        }
    } catch {
        alert("Cannot reach the server. Please make sure the backend is running.");
    }

    btn.disabled = false;
    btn.innerHTML = `<i class="fa-solid fa-lock"></i> Place Order & Pay`;
};

// ─── CATALOG SYSTEM ────────────────────────────────────────────────────────────
function renderProducts() {
    let list = [...products];
    if (currentEditionFilter !== "all") list = list.filter(p => p.edition === currentEditionFilter);
    if (currentGenderFilter  !== "all") list = list.filter(p => p.gender === currentGenderFilter);
    if (selectedIngredientFilter) list = list.filter(p => p.notes.toLowerCase().includes(selectedIngredientFilter.toLowerCase()));

    const info = document.getElementById("active-filters-info");
    if (selectedIngredientFilter) {
        info.style.display = "flex";
        document.getElementById("active-filters-text").textContent = `Showing blends featuring: "${selectedIngredientFilter}"`;
    } else if (currentEditionFilter !== "all" || currentGenderFilter !== "all") {
        info.style.display = "flex";
        const label = [
            currentEditionFilter === "signature" ? "Signature Edition" : currentEditionFilter === "collector" ? "Collector's Edition" : "",
            currentGenderFilter  === "male"      ? "For Him"           : currentGenderFilter  === "female"    ? "For Her"           : ""
        ].filter(Boolean).join(" · ");
        document.getElementById("active-filters-text").textContent = `Filters: ${label}`;
    } else {
        info.style.display = "none";
    }

    if (currentSort === "price-low")  list.sort((a,b) => a.priceDiscounted - b.priceDiscounted);
    if (currentSort === "price-high") list.sort((a,b) => b.priceDiscounted - a.priceDiscounted);
    if (currentSort === "name-asc")   list.sort((a,b) => a.name.localeCompare(b.name));

    if (!list.length) {
        productGrid.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:var(--color-text-muted); padding:40px 0;">No fragrances match the selected filters.</p>`;
        return;
    }

    productGrid.innerHTML = list.map(p => {
        const edLabel  = p.edition === "signature" ? "Signature" : "Collector's";
        const tagClass = p.edition === "collector"  ? "tag-collector" : "";
        return `
            <div class="product-card" data-id="${p.id}">
                <span class="product-tag ${tagClass}">${edLabel}</span>
                <div class="product-card-media" onclick="openProductModal(${p.id})">
                    <img src="${p.image}" alt="${p.name}" class="product-card-img" loading="lazy">
                    <div class="product-card-overlay">
                        <button class="btn-quickview"><i class="fa-regular fa-eye"></i> Quick View</button>
                    </div>
                </div>
                <div class="product-card-details">
                    <div class="product-meta">
                        <span>${p.gender === "male" ? "For Him" : "For Her"}</span>
                        <span>${p.size}</span>
                    </div>
                    <h3 class="product-title">${p.name}</h3>
                    <p class="product-notes">${p.notes}</p>
                    <div class="product-price-row">
                        <span class="price-original">₹${p.priceOriginal.toLocaleString("en-IN")}</span>
                        <span class="price-discounted">₹${p.priceDiscounted.toLocaleString("en-IN")}</span>
                    </div>
                    <button class="btn-add-cart" onclick="addToCart(${p.id})">Add to Bag</button>
                </div>
            </div>`;
    }).join("");
}

function resetFilters() {
    currentGenderFilter = currentEditionFilter = "all";
    selectedIngredientFilter = null;
    currentSort = "default";
    document.getElementById("sort-select").value = "default";
    document.querySelectorAll("[data-filter-edition]").forEach((t,i) => t.classList.toggle("active", i===0));
    document.querySelectorAll("[data-filter-gender]").forEach((t,i) => t.classList.toggle("active", i===0));
    renderProducts();
}

function filterCatalogByIngredient(note) {
    selectedIngredientFilter = note;
    document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
    renderProducts();
}

window.setFilters = function(gender, edition) {
    currentGenderFilter = gender;
    currentEditionFilter = edition;
    selectedIngredientFilter = null;
    document.querySelectorAll("[data-filter-edition]").forEach(t => t.classList.toggle("active", t.dataset.filterEdition === edition));
    document.querySelectorAll("[data-filter-gender]").forEach(t => t.classList.toggle("active", t.dataset.filterGender === gender));
    renderProducts();
};

// ─── CART ──────────────────────────────────────────────────────────────────────
function openCart() {
    cartDrawer.classList.add("active");
    cartOverlay.classList.add("active");
    renderCart();
}
function closeCart() {
    cartDrawer.classList.remove("active");
    cartOverlay.classList.remove("active");
}

window.addToCart = function(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const idx = cart.findIndex(i => i.id === id);
    if (idx > -1) cart[idx].quantity++;
    else cart.push({ ...product, quantity: 1 });
    saveCart();
    updateCartUI();
    openCart();
};

function handleCartClicks(e) {
    const item = e.target.closest(".cart-item");
    if (!item) return;
    const id = parseInt(item.dataset.id);
    if (e.target.classList.contains("qty-plus"))        updateQty(id, 1);
    else if (e.target.classList.contains("qty-minus"))  updateQty(id, -1);
    else if (e.target.classList.contains("cart-item-remove")) removeFromCart(id);
}

function updateQty(id, delta) {
    const idx = cart.findIndex(i => i.id === id);
    if (idx === -1) return;
    cart[idx].quantity += delta;
    if (cart[idx].quantity <= 0) cart.splice(idx, 1);
    saveCart();
    updateCartUI();
    renderCart();
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    updateCartUI();
    renderCart();
}

function renderCart() {
    if (!cart.length) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Your bag is empty.</p>
                <button class="btn btn-outline" onclick="closeCart(); document.getElementById('catalog').scrollIntoView({behavior:'smooth'});">Explore Collection</button>
            </div>`;
        cartSubtotalEl.textContent = "₹0";
        proceedCheckoutBtn.style.display = "none";
        return;
    }
    proceedCheckoutBtn.style.display = "flex";
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <div class="cart-item-media"><img src="${item.image}" alt="${item.name}"></div>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-meta">${item.gender === "male" ? "For Him" : "For Her"} · ${item.edition === "collector" ? "Collector's" : "Signature"} · ${item.size}</div>
                <div class="cart-item-controls">
                    <div class="cart-qty-selector">
                        <button class="qty-btn qty-minus"><i class="fa-solid fa-minus"></i></button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn qty-plus"><i class="fa-solid fa-plus"></i></button>
                    </div>
                    <span class="cart-item-price">₹${(item.priceDiscounted * item.quantity).toLocaleString("en-IN")}</span>
                    <button class="cart-item-remove">Remove</button>
                </div>
            </div>
        </div>`).join("");
    const subtotal = cart.reduce((s, i) => s + i.priceDiscounted * i.quantity, 0);
    cartSubtotalEl.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
}

function updateCartUI() {
    const count = cart.reduce((s, i) => s + i.quantity, 0);
    cartCountEl.textContent = count;
}
function saveCart() { localStorage.setItem("aavasa_cart", JSON.stringify(cart)); }

// ─── PRODUCT QUICK VIEW MODAL ──────────────────────────────────────────────────
window.openProductModal = function(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const edLabel = product.edition === "signature" ? "Signature Edition" : "Collector's Edition";
    document.getElementById("modal-content-container").innerHTML = `
        <div class="modal-media">
            <img src="${product.image}" alt="${product.name}" class="modal-img">
        </div>
        <div class="modal-info">
            <span class="modal-edition">${edLabel}</span>
            <h2 class="modal-title">${product.name}</h2>
            <div class="modal-notes-label">Olfactive Notes:</div>
            <p class="modal-notes">${product.notes}</p>
            <p class="modal-desc">${product.description}</p>
            <div class="modal-size">Vessel Size: ${product.size}</div>
            <div class="modal-price-block">
                <span class="modal-price-original">₹${product.priceOriginal.toLocaleString("en-IN")}</span>
                <span class="modal-price-discounted">₹${product.priceDiscounted.toLocaleString("en-IN")}</span>
            </div>
            <button class="btn btn-primary" onclick="addToCart(${product.id}); document.getElementById('product-modal').classList.remove('active');">Add to Shopping Bag</button>
        </div>`;
    document.getElementById("product-modal").classList.add("active");
};
document.getElementById("modal-close-btn")?.addEventListener("click", () => document.getElementById("product-modal").classList.remove("active"));
document.getElementById("product-modal")?.addEventListener("click", e => { if (e.target.id === "product-modal") e.target.classList.remove("active"); });

// ─── SCENT QUIZ ────────────────────────────────────────────────────────────────
function handleQuizOption(e) {
    const btn = e.currentTarget;
    const step = btn.closest(".quiz-step");
    const stepNum = parseInt(step.dataset.step);
    step.querySelectorAll(".quiz-option").forEach(o => o.classList.remove("selected"));
    btn.classList.add("selected");
    const val = btn.dataset.value;
    if      (stepNum === 1) { quizAnswers.family  = val; goQuiz(2); }
    else if (stepNum === 2) { quizAnswers.occasion = val; goQuiz(3); }
    else if (stepNum === 3) { quizAnswers.gender   = val; computeQuizResult(); }
}
function handleQuizBack(e) {
    const step = e.currentTarget.closest(".quiz-step");
    goQuiz(parseInt(step.dataset.step) - 1);
}
function goQuiz(n) {
    document.querySelectorAll(".quiz-step").forEach(s => s.classList.remove("active"));
    document.querySelector(`.quiz-step[data-step="${n}"]`)?.classList.add("active");
    const bar = document.getElementById("quiz-progress-bar");
    if (n === "result" || n > 3) { bar.style.display = "none"; return; }
    bar.style.display = "flex";
    document.querySelector(".quiz-progress-fill").style.width = `${(n / 3) * 100}%`;
    document.querySelector(".quiz-progress-text").textContent = `Step ${n} of 3`;
}
function computeQuizResult() {
    let matches = products.filter(p => p.gender === quizAnswers.gender);
    const ed = quizAnswers.occasion === "day" ? "signature" : "collector";
    const edMatches = matches.filter(p => p.edition === ed);
    if (edMatches.length) matches = edMatches;
    const fam = matches.filter(p => p.family === quizAnswers.family);
    const final = fam.length ? fam[0] : matches[0] || products[0];
    const edLabel = final.edition === "signature" ? "Signature Edition" : "Collector's Edition";
    document.querySelector(".quiz-result-content").innerHTML = `
        <div class="quiz-result-media"><img src="${final.image}" alt="${final.name}"></div>
        <div class="quiz-result-details">
            <h4>Our Recommendation</h4>
            <h3>${final.name}</h3>
            <span class="section-label">${edLabel} · ${final.size}</span>
            <p class="quiz-result-desc">Based on your love for <strong>${quizAnswers.family}</strong> notes and <strong>${quizAnswers.occasion}time</strong> preference, featuring: <em>${final.notes}</em>.</p>
            <div class="quiz-result-price">₹${final.priceDiscounted.toLocaleString("en-IN")}</div>
            <button class="btn btn-primary" onclick="addToCart(${final.id})">Add to Bag</button>
        </div>`;
    goQuiz("result");
}
function restartQuiz() {
    quizAnswers = { family: null, occasion: null, gender: null };
    document.querySelectorAll(".quiz-option").forEach(o => o.classList.remove("selected"));
    goQuiz(1);
}
