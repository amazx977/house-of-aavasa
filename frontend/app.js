/* ==========================================================================
   HOUSE OF AAVASA — APP ENGINE (Auth + Cart + Catalog + Checkout + Orders)
   ========================================================================== */

// ─── PRODUCT DATABASE ─────────────────────────────────────────────────────────
// Note: Each fragrance supports an array of images: [Primary Bottle, Travel Edition 15ml / Secondary View, Notes / Lifestyle].
// You can freely add or replace image paths in the "images" array for each perfume!
const products = [
    { 
        id: 1,  
        name: "Morning Shower",      
        gender: "male",   
        edition: "signature", 
        priceOriginal: 2199, 
        priceDiscounted: 1699, 
        size: "50ml", 
        sizes: [
            { size: "50ml", priceOriginal: 2199, priceDiscounted: 1699, label: "Full Flacon" }, 
            { size: "15ml", priceOriginal: 699,  priceDiscounted: 499,  label: "Travel Edition" }
        ], 
        image: "media/Morning.png",
        images: [
            "media/Morning.png",
            "media/morning15.jpg",
            "media/citrus.png"
        ],
        family: "citrus", 
        notes: "Calabrian Bergamot, Lemon Zest, Fresh Mint, Virginia Cedarwood", 
        description: "Morning Shower captures the vibrant energy of a Bright Day — a burst of sparkling citrus melting into fresh mint, anchored by dry, architectural cedarwood.", 
        occasion: "day" 
    },
    { 
        id: 2,  
        name: "Night King",          
        gender: "male",   
        edition: "signature", 
        priceOriginal: 2199, 
        priceDiscounted: 1699, 
        size: "50ml", 
        sizes: [
            { size: "50ml", priceOriginal: 2199, priceDiscounted: 1699, label: "Full Flacon" }, 
            { size: "15ml", priceOriginal: 699,  priceDiscounted: 499,  label: "Travel Edition" }
        ], 
        image: "media/Night.png",  
        images: [
            "media/Night.png",
            "media/night15.jpg",
            "media/amber.png"
        ],
        family: "Gourmand",  
        notes: "Mysore Sandalwood, Cinamon, Boozy, Muted Iris, Prelin", 
        description: "A Playful, modern interpretation of classic Men. Creamy Mysore sandalwood in cinamon spice and boozy-sweetness that defines a playful night.", 
        occasion: "night" 
    },
    { 
        id: 3,  
        name: "Timeless",            
        gender: "male",   
        edition: "signature", 
        priceOriginal: 2199, 
        priceDiscounted: 1699, 
        size: "50ml", 
        sizes: [
            { size: "50ml", priceOriginal: 2199, priceDiscounted: 1699, label: "Full Flacon" }, 
            { size: "15ml", priceOriginal: 699,  priceDiscounted: 499,  label: "Travel Edition" }
        ], 
        image: "media/Timeless.png", 
        images: [
            "media/Timeless.png",
            "media/timeless15.jpg",
            "media/citrus.png"
        ],
        family: "citrus", 
        notes: "Sea Salt, White Sage, Pink Grapefruit, Driftwood", 
        description: "Mineral-rich and bracing. Salty air with dry sage and sparkling grapefruit over sun-bleached driftwood.", 
        occasion: "day" 
    },
    { 
        id: 4,  
        name: "Euphoria",            
        gender: "unisex",   
        edition: "signature", 
        priceOriginal: 2199, 
        priceDiscounted: 1699, 
        size: "50ml", 
        sizes: [
            { size: "50ml", priceOriginal: 2199, priceDiscounted: 1699, label: "Full Flacon" }, 
            { size: "15ml", priceOriginal: 699,  priceDiscounted: 499,  label: "Travel Edition" }
        ], 
        image: "media/Euphoria.png",  
        images: [
            "media/Euphoria.png",
            "media/amber.png",
            "media/hero.png"
        ],
        family: "amber",  
        notes: "Cherry, Nutmeg, Ambergris, Dry Woods", 
        description: "Fiery cherry and nutmeg with the warm, salty undertones of rare mineral ambergris.", 
        occasion: "SPecial" 
    },
    //{ id: 5,  name: "Forest Mist",       gender: "male",   edition: "signature", priceOriginal: 2199, priceDiscounted: 1699, size: "80ml", image: "media/woody.png",  family: "woody",  notes: "Siberian Pine, Oakmoss, Patchouli, Green Tea", description: "Crisp alpine air. Damp moss and evergreen pine with grounding patchouli dry-down.", occasion: "day" },
    //{ id: 6,  name: "Oud Imperial",      gender: "male",   edition: "collector", priceOriginal: 4569, priceDiscounted: 3999, size: "80ml", image: "media/woody.png",  family: "woody",  notes: "Assam Oud, Tuscan Leather, Smoked Tobacco, Labdanum", description: "Dark and resinous — wild Indian agarwood paired with fine Italian leather. A collector's masterwork.", occasion: "night" },
    //{ id: 7,  name: "Amber Absolute",    gender: "male",   edition: "collector", priceOriginal: 4569, priceDiscounted: 3999, size: "80ml", image: "media/amber.png",  family: "amber",  notes: "Warm Amber, Sweet Vanilla, Somalian Incense, Benzoin", description: "Rich, enveloping resins with balsamic benzoin and mystical incense, sweetened by Madagascan vanilla.", occasion: "night" },
    //{ id: 8,  name: "Smoky Santal",      gender: "male",   edition: "collector", priceOriginal: 4569, priceDiscounted: 3999, size: "80ml", image: "media/woody.png",  family: "woody",  notes: "Smoked Sandalwood, Papyrus Reed, Leather Suede, Cedar", description: "Creamy sandalwood with dry papyrus and smokiness of roasted woods.", occasion: "night" },
    //{ id: 9,  name: "Citron Eclipse",    gender: "male",   edition: "collector", priceOriginal: 4569, priceDiscounted: 3999, size: "80ml", image: "media/citrus.png", family: "citrus", notes: "Black Amber, Bergamot, Indonesian Patchouli, Vetiver", description: "The dark side of freshness. Premium bergamot over black amber and earthy patchouli.", occasion: "night" },
    //{ id: 10, name: "Cuir Royale",       gender: "male",   edition: "collector", priceOriginal: 4569, priceDiscounted: 3999, size: "80ml", image: "media/amber.png",  family: "amber",  notes: "Saffron, Golden Amber, Tuscan Suede, Thyme", description: "Aristocratic and compelling — crimson saffron with luxurious velvety suede base.", occasion: "night" },
    //{ id: 11, name: "Jasmine Dew",       gender: "female", edition: "signature", priceOriginal: 2199, priceDiscounted: 1699, size: "80ml", image: "media/floral.png", family: "floral", notes: "Grasse Jasmine Sambac, White Rose Petals, Crisp Pear, White Musk", description: "Fresh, romantic, ethereal. White flowers laden with morning dew, sweetened by crisp pear.", occasion: "day" },
    { 
        id: 12, 
        name: "Petal Kiss",          
        gender: "female", 
        edition: "signature", 
        priceOriginal: 2199, 
        priceDiscounted: 1699, 
        size: "50ml", 
        sizes: [
            { size: "50ml", priceOriginal: 2199, priceDiscounted: 1699, label: "Full Flacon" }, 
            { size: "15ml", priceOriginal: 699,  priceDiscounted: 499,  label: "Travel Edition" }
        ], 
        image: "media/Petal Kiss.png", 
        images: [
            "media/Petal Kiss.png",
            "media/petal15.jpg",
            "media/floral.png"
        ],
        family: "citrus", 
        notes: "Orange Blossom, Bright rose, Green Apple, White Musk", 
        description: "Luminous and solar. Sun-kissed orange flowers, Green Apple.", 
        occasion: "day" 
    },
    { 
        id: 13, 
        name: "Dusky Rose",          
        gender: "female", 
        edition: "signature", 
        priceOriginal: 2199, 
        priceDiscounted: 1699, 
        size: "50ml", 
        sizes: [
            { size: "50ml", priceOriginal: 2199, priceDiscounted: 1699, label: "Full Flacon" }, 
            { size: "15ml", priceOriginal: 699,  priceDiscounted: 499,  label: "Travel Edition" }
        ], 
        image: "media/Dusky Rose.png", 
        images: [
            "media/Dusky Rose.png",
            "media/dusky15.jpg",
            "media/floral.png"
        ],
        family: "Ambery floral", 
        notes: "Damask Rose, Wild Honey, Soft Musk, Leather, Coffee", 
        description: "A modern ode to the queen of flowers — rich Damask Rose with golden honey and Damp leather.", 
        occasion: "day" 
    },
    { 
        id: 14, 
        name: "Adore",               
        gender: "female", 
        edition: "signature", 
        priceOriginal: 2199, 
        priceDiscounted: 1699, 
        size: "50ml", 
        sizes: [
            { size: "50ml", priceOriginal: 2199, priceDiscounted: 1699, label: "Full Flacon" }, 
            { size: "15ml", priceOriginal: 699,  priceDiscounted: 499,  label: "Travel Edition" }
        ], 
        image: "media/Adore.png",  
        images: [
            "media/Adore.png",
            "media/adore15.jpg",
            "media/amber.png"
        ],
        family: "Ambery sweet",  
        notes: "Vanilla Bean, Night Orchid, Sandalwood, Coconut Milk", 
        description: "Soft and comforting — warm vanilla orchids with creamy coconut milk and smooth sandalwood.", 
        occasion: "day" 
    },
    { 
        id: 15, 
        name: "Discovery set Male",   
        gender: "Male", 
        edition: "signature", 
        priceOriginal: 2199, 
        priceDiscounted: 1699, 
        size: "45ml", 
        sizes: [
            { size: "45ml", priceOriginal: 2199, priceDiscounted: 1699, label: "Discovery Set" }
        ], 
        image: "media/Dset 1.png", 
        images: [
            "media/Dset 1.png",
            "media/Sample set 1.png",
            "media/hero.png"
        ],
        family: "Set", 
        notes: "French Lavender, Chamomile, Vanilla, Cedarwood", 
        description: "Serene and herbal. French lavender valleys into warm chamomile tea and cozy vanilla.", 
        occasion: "day" 
    },
    { 
        id: 16, 
        name: "Discovery set Female", 
        gender: "female", 
        edition: "signature", 
        priceOriginal: 2599, 
        priceDiscounted: 1799, 
        size: "60ml", 
        sizes: [
            { size: "60ml", priceOriginal: 2599, priceDiscounted: 1799, label: "Discovery Set" }
        ], 
        image: "media/Dset2.png", 
        images: [
            "media/Dset2.png",
            "media/Sample set 1.png",
            "media/hero.png"
        ],
        family: "Set", 
        notes: "Midnight Rose, Patchouli, Dark Chocolate, Amber", 
        description: "Gothic romance — velvety midnight rose with earthy patchouli and dark chocolate.", 
        occasion: "night" 
    },
    //{ id: 17, name: "Elixir d'Or",       gender: "female", edition: "collector", priceOriginal: 4569, priceDiscounted: 3999, size: "80ml", image: "media/amber.png",  family: "amber",  notes: "Gold Saffron, Jasmine Sambac, Amber, Cashmere Wood", description: "Liquid gold masterpiece. Aromatic saffron with creamy jasmine and warm amber.", occasion: "night" },
    //{ id: 18, name: "Santal de Soie",    gender: "female", edition: "collector", priceOriginal: 4569, priceDiscounted: 3999, size: "80ml", image: "media/woody.png",  family: "woody",  notes: "White Sandalwood, Cashmere Wood, Florentine Iris, Vanilla", description: "Sandalwood spun into pure silk — Florentine iris and velvety cashmere woods.", occasion: "night" },
    //{ id: 19, name: "Bergamote Select",  gender: "female", edition: "collector", priceOriginal: 4569, priceDiscounted: 3999, size: "80ml", image: "media/citrus.png", family: "citrus", notes: "Calabrian Bergamot, Petitgrain, White Musk, Jasmine", description: "A study in refined citrus purity — bergamot elevated by petitgrain and white musk.", occasion: "night" },
    //{ id: 20, name: "Tuberose Intense",  gender: "female", edition: "collector", priceOriginal: 4569, priceDiscounted: 3999, size: "80ml", image: "media/floral.png", family: "floral", notes: "Tuberose Absolu, Ylang-Ylang, Coconut Husk, Sandalwood", description: "Sensual and hypnotic. Creamy tuberose with ylang-ylang and warm coconut husk base.", occasion: "night" }
];

// Helper: Get available gallery images for any product
function getProductImages(product) {
    if (!product) return [];
    if (Array.isArray(product.images) && product.images.length > 0) {
        return product.images;
    }
    if (typeof product.images === "string" && product.images.trim()) {
        return [product.image, product.images].filter(Boolean);
    }
    return [product.image].filter(Boolean);
}

// Helper: Get available sizes for any product
function getProductSizes(product) {
    if (product.sizes && product.sizes.length) return product.sizes;
    if (product.family === "Set") {
        return [{ size: product.size || "45ml", priceOriginal: product.priceOriginal, priceDiscounted: product.priceDiscounted, label: "Discovery Set" }];
    }
    return [
        { size: "50ml", priceOriginal: product.priceOriginal || 2199, priceDiscounted: product.priceDiscounted || 1699, label: "Full Flacon" },
        { size: "15ml", priceOriginal: 699,                          priceDiscounted: 499,                          label: "Travel Edition" }
    ];
}

// Map tracking active size selection per product id
let selectedProductSizes = {};

function getSelectedSizeInfo(product, chosenSize) {
    const sizes = getProductSizes(product);
    const targetSize = chosenSize || selectedProductSizes[product.id] || sizes[0].size;
    return sizes.find(s => s.size === targetSize) || sizes[0];
}

// ─── SCENTIRA-INSPIRED OLFACTORY NOTES & PERFORMANCE DATABASE ────────────────
const PERFUME_NOTES_DATA = {
    1: { // Morning Shower
        category: "Citrus Aromatic & Crisp Woody",
        pyramid: {
            top: {
                title: "Top Notes",
                duration: "Opening 15–30 min",
                notes: ["Calabrian Bergamot", "Lemon Zest", "Fresh Spearmint", "Crisp Marine Accord"],
                desc: "An invigorating burst of solar citrus and chilled mint that awakens the senses instantly."
            },
            heart: {
                title: "Heart / Middle Notes",
                duration: "Core 2–4 hours",
                notes: ["French Lavender", "Orange Blossom", "Crushed Thyme", "Fresh Cardamom"],
                desc: "Airy aromatics that settle into an elegant, sun-drenched Mediterranean breeze."
            },
            base: {
                title: "Base Notes",
                duration: "Dry-down 6–10+ hours",
                notes: ["Virginia Cedarwood", "Haitian Vetiver", "Sheer White Musk", "Golden Amber"],
                desc: "Dry, architectural cedarwood with grounding earthy vetiver that lingers close to warm skin."
            }
        },
        featuredNotes: [
            { name: "Calabrian Bergamot", role: "Top Note · Citrus", icon: "fa-solid fa-lemon", desc: "Crisp, effervescent, sun-drenched Italian bergamot." },
            { name: "Fresh Spearmint", role: "Top Note · Fresh Herbal", icon: "fa-solid fa-leaf", desc: "Cooling botanical freshness with an uplifting sparkle." },
            { name: "French Lavender", role: "Heart Note · Aromatic", icon: "fa-solid fa-spa", desc: "Subtle Provencal lavender bringing serene floral balance." },
            { name: "Virginia Cedarwood", role: "Base Note · Woody", icon: "fa-solid fa-tree", desc: "Clean, dry pencil-shaving cedar giving enduring structure." }
        ],
        performance: {
            longevity: "8–10 Hours",
            longevityLevel: "Long Lasting",
            sillage: "Moderate to Radiant",
            sillageDesc: "Creates an energetic 4–5 ft personal aura without overwhelming.",
            concentration: "Eau de Parfum (22% Oil)",
            season: "Spring & Summer",
            timeOfDay: "Morning & Crisp Daytime"
        }
    },
    2: { // Night King
        category: "Warm Gourmand Woody & Boozy Spice",
        pyramid: {
            top: {
                title: "Top Notes",
                duration: "Opening 15–30 min",
                notes: ["Cognac Boozy Accord", "Ceylon Cinnamon", "Nutmeg Grating", "Sweet Candied Orange"],
                desc: "A rich, heady splash of aged cognac infused with fiery Ceylon cinnamon and warm citrus."
            },
            heart: {
                title: "Heart / Middle Notes",
                duration: "Core 2–4 hours",
                notes: ["Muted Tuscan Iris", "Roasted Praline", "Tonka Bean", "Dark Oak Rum"],
                desc: "Silky, muted iris enveloped by buttery roasted praline and spiced confectionery warmth."
            },
            base: {
                title: "Base Notes",
                duration: "Dry-down 8–14+ hours",
                notes: ["Mysore Sandalwood", "Bourbon Vanilla", "Smoked Amber", "Rich Benzoin Resin"],
                desc: "Creamy Mysore sandalwood fused with decadent vanilla and smoky golden amber that lasts all night."
            }
        },
        featuredNotes: [
            { name: "Mysore Sandalwood", role: "Base Note · Rich Wood", icon: "fa-solid fa-tree", desc: "Legendary Indian sandalwood: velvety, buttery, and deeply grounding." },
            { name: "Ceylon Cinnamon", role: "Top Note · Warm Spice", icon: "fa-solid fa-fire", desc: "Fiery, festive spice evoking late-night indulgence." },
            { name: "Cognac Accord", role: "Top Note · Boozy Gourmand", icon: "fa-solid fa-wine-glass", desc: "Opulent oak-aged spirit with mellow caramel nuances." },
            { name: "Bourbon Vanilla", role: "Base Note · Sweet Resin", icon: "fa-solid fa-gem", desc: "Smoky, natural Madagascan vanilla pods with rich sillage." }
        ],
        performance: {
            longevity: "10–14 Hours",
            longevityLevel: "Exceptional / All-Night",
            sillage: "Enveloping & Heavy",
            sillageDesc: "Leaves a magnetic, seductive scent trail in any room.",
            concentration: "Extrait de Parfum (28% High Concentration)",
            season: "Autumn & Winter",
            timeOfDay: "Golden Evening & Midnight"
        }
    },
    3: { // Timeless
        category: "Mineral Marine & Coastal Aromatic Wood",
        pyramid: {
            top: {
                title: "Top Notes",
                duration: "Opening 15–30 min",
                notes: ["Pink Grapefruit", "Sea Salt Crystals", "Italian Bergamot", "Ocean Spray"],
                desc: "Crisp ocean air infused with sparkling pink grapefruit and bracing sea-salt minerals."
            },
            heart: {
                title: "Heart / Middle Notes",
                duration: "Core 2–4 hours",
                notes: ["Coastal White Sage", "Juniper Berry", "Crushed Rosemary", "Wild Geranium"],
                desc: "Aromatic herbs baking under coastal sunshine, dry and invigorating."
            },
            base: {
                title: "Base Notes",
                duration: "Dry-down 7–10 hours",
                notes: ["Sun-Bleached Driftwood", "Earthy Oakmoss", "Ambrette Seed", "Clean Cedar"],
                desc: "Sun-drenched driftwood seasoned by oceanic winds and soft ambrette musk."
            }
        },
        featuredNotes: [
            { name: "Sea Salt Crystals", role: "Top Note · Mineral Marine", icon: "fa-solid fa-water", desc: "Brisk ocean breeze with a clean, mineral-rich bite." },
            { name: "Coastal White Sage", role: "Heart Note · Herbal Aromatic", icon: "fa-solid fa-wind", desc: "Purifying, aromatic sage with an untamed coastal spirit." },
            { name: "Pink Grapefruit", role: "Top Note · Zesty Citrus", icon: "fa-solid fa-lemon", desc: "Tart, ruby grapefruit sparkling over brisk seaside air." },
            { name: "Sun-Bleached Driftwood", role: "Base Note · Woody Marine", icon: "fa-solid fa-tree", desc: "Dry, weathered wood cured by salt and warm sunlight." }
        ],
        performance: {
            longevity: "8–10 Hours",
            longevityLevel: "Long Lasting",
            sillage: "Moderate & Fresh",
            sillageDesc: "Radiates effortlessly within arm's reach with crisp clarity.",
            concentration: "Eau de Parfum (20% Oil)",
            season: "Spring, Summer & Monsoon",
            timeOfDay: "Morning to Sunset"
        }
    },
    4: { // Euphoria
        category: "Fiery Amber, Dark Cherry & Exotic Resins",
        pyramid: {
            top: {
                title: "Top Notes",
                duration: "Opening 15–30 min",
                notes: ["Dark Black Cherry", "Grated Nutmeg", "Pink Pepper", "Wild Plum Liquor"],
                desc: "Deep, boozy dark cherry sparkled with spicy nutmeg and zesty pink pepper."
            },
            heart: {
                title: "Heart / Middle Notes",
                duration: "Core 2–4 hours",
                notes: ["Turkish Rose", "Bitter Almond", "Smoked Labdanum", "Cinnamon Bark"],
                desc: "A luxurious heart of velvety crimson rose wrapped in roasted almond and balsamic resins."
            },
            base: {
                title: "Base Notes",
                duration: "Dry-down 10–14 hours",
                notes: ["Rare Mineral Ambergris", "Dry Cedarwood", "Golden Amber", "Roasted Tonka Bean"],
                desc: "Animalic warmth of rare ambergris anchored by dry woods and sensual golden amber."
            }
        },
        featuredNotes: [
            { name: "Dark Black Cherry", role: "Top Note · Rich Fruit", icon: "fa-solid fa-apple-whole", desc: "Luscious, liqueur-soaked black cherry with hypnotic allure." },
            { name: "Mineral Ambergris", role: "Base Note · Marine Amber", icon: "fa-solid fa-gem", desc: "Rare oceanic ambergris lending unforgettable warmth and longevity." },
            { name: "Grated Nutmeg", role: "Top Note · Exotic Spice", icon: "fa-solid fa-fire", desc: "Warm, culinary nutmeg adding fiery mystery to the opening." },
            { name: "Dry Cedarwood", role: "Base Note · Woody", icon: "fa-solid fa-tree", desc: "Solid, smoky cedar that grounds the fruity-amber sweetness." }
        ],
        performance: {
            longevity: "10–13 Hours",
            longevityLevel: "Extremely Long Lasting",
            sillage: "Intense & Enveloping",
            sillageDesc: "Leaves an intoxicating, head-turning signature scent trail.",
            concentration: "Extrait de Parfum (25% Oil)",
            season: "Fall, Winter & Special Evenings",
            timeOfDay: "Evening & Late Night"
        }
    },
    12: { // Petal Kiss
        category: "Luminous Solar Floral & Sparkling Citrus",
        pyramid: {
            top: {
                title: "Top Notes",
                duration: "Opening 15–30 min",
                notes: ["Grasse Orange Blossom", "Crisp Green Apple", "Mandarin Peel", "Morning Dewdrop"],
                desc: "An ethereal kiss of dew-kissed orange blossom and crunchy green apple."
            },
            heart: {
                title: "Heart / Middle Notes",
                duration: "Core 2–4 hours",
                notes: ["Bright Pink Rose", "Grasse Jasmine Sambac", "White Lily", "Peony Petals"],
                desc: "A romantic bouquet of freshly cut pink roses and blossoming spring flowers."
            },
            base: {
                title: "Base Notes",
                duration: "Dry-down 7–10 hours",
                notes: ["White Cashmere Musk", "Blonde Cedar", "Solar Amber", "Soft Cotton"],
                desc: "Soft cashmere musk that melts into warm skin like sunlit silk."
            }
        },
        featuredNotes: [
            { name: "Orange Blossom", role: "Top Note · Solar Floral", icon: "fa-solid fa-spa", desc: "Grasse neroli blossom bursting with honeyed citrus radiance." },
            { name: "Crisp Green Apple", role: "Top Note · Fruity Fresh", icon: "fa-solid fa-apple-whole", desc: "Crisp Granny Smith apple delivering juicy, youthful vivacity." },
            { name: "Bright Rose", role: "Heart Note · Romantic Floral", icon: "fa-solid fa-clover", desc: "Dewy pink rose petals capturing the essence of early morning romance." },
            { name: "White Cashmere Musk", role: "Base Note · Skin Clean", icon: "fa-solid fa-feather", desc: "Velvety, clean musk that feels like a warm embrace." }
        ],
        performance: {
            longevity: "8–10 Hours",
            longevityLevel: "Long Lasting",
            sillage: "Graceful & Airy",
            sillageDesc: "Intimate and delicate, projecting gently as you move.",
            concentration: "Eau de Parfum (20% Oil)",
            season: "Spring & Summer",
            timeOfDay: "Daytime, Brunch & Casual Dates"
        }
    },
    13: { // Dusky Rose
        category: "Gothic Ambery Floral & Rich Leather",
        pyramid: {
            top: {
                title: "Top Notes",
                duration: "Opening 15–30 min",
                notes: ["Wild Golden Honey", "Calabrian Bergamot", "Pink Peppercorn", "Crushed Violet Leaf"],
                desc: "Dark, sensual golden honey trickling over crushed pink peppercorns and citrus."
            },
            heart: {
                title: "Heart / Middle Notes",
                duration: "Core 2–4 hours",
                notes: ["Crimson Damask Rose", "Roasted Coffee Bean", "Smoky Frankincense", "Dark Chocolate"],
                desc: "Opulent Turkish Damask rose juxtaposed against bitter roasted coffee and dark cacao."
            },
            base: {
                title: "Base Notes",
                duration: "Dry-down 10–14 hours",
                notes: ["Supple Tuscan Leather", "Indonesian Patchouli", "Warm Amber", "Velvet Musk"],
                desc: "Deep, moody leather and earthy patchouli creating an unforgettable nocturnal silhouette."
            }
        },
        featuredNotes: [
            { name: "Damask Rose", role: "Heart Note · Gothic Floral", icon: "fa-solid fa-spa", desc: "Deep crimson rose with honeyed petals and velvety texture." },
            { name: "Wild Honey", role: "Top Note · Sweet Golden Nectar", icon: "fa-solid fa-jar", desc: "Raw, viscous forest honey with warm beeswax undertones." },
            { name: "Roasted Coffee Bean", role: "Heart Note · Dark Gourmand", icon: "fa-solid fa-mug-hot", desc: "Artisanal espresso roast giving rebellious bite and depth." },
            { name: "Tuscan Leather", role: "Base Note · Dark Smoky Suede", icon: "fa-solid fa-vest", desc: "Buttery, polished leather with smoky elegance." }
        ],
        performance: {
            longevity: "10–14 Hours",
            longevityLevel: "Exceptional / Nocturnal",
            sillage: "Bold & Magnetic",
            sillageDesc: "Unmistakable presence with a 6-foot seductive trail.",
            concentration: "Extrait de Parfum (26% Oil)",
            season: "Autumn & Winter",
            timeOfDay: "Candlelight Dinners & Midnight Soirées"
        }
    },
    14: { // Adore
        category: "Velvety Ambery Sweet & Creamy Orchid",
        pyramid: {
            top: {
                title: "Top Notes",
                duration: "Opening 15–30 min",
                notes: ["Creamy Coconut Milk", "White Peach Nectar", "Heliotrope", "Sweet Almond"],
                desc: "Velvety coconut milk laced with juicy peach nectar and comforting sweet almond."
            },
            heart: {
                title: "Heart / Middle Notes",
                duration: "Core 2–4 hours",
                notes: ["Night-Blooming Orchid", "Vanilla Orchid Petals", "Ylang-Ylang", "Tahitian Gardenia"],
                desc: "Sensual tropical night orchids and buttery ylang-ylang in full nocturnal bloom."
            },
            base: {
                title: "Base Notes",
                duration: "Dry-down 9–12 hours",
                notes: ["Madagascan Vanilla Bean", "Mysore Sandalwood", "Fluffy Marshmallow Musk", "Golden Amber"],
                desc: "Decadent natural vanilla bean whipped with creamy sandalwood and cloud-like musk."
            }
        },
        featuredNotes: [
            { name: "Madagascan Vanilla Bean", role: "Base Note · Sweet Amber", icon: "fa-solid fa-gem", desc: "Rich, gourmet vanilla infused with warm balsamic depth." },
            { name: "Night Orchid", role: "Heart Note · Exotic Floral", icon: "fa-solid fa-spa", desc: "Hypnotic, dark floral with narcotic sweet facets." },
            { name: "Coconut Milk", role: "Top Note · Creamy Gourmand", icon: "fa-solid fa-water", desc: "Silky, cooling coconut milk bringing tropical luxury." },
            { name: "Mysore Sandalwood", role: "Base Note · Silky Wood", icon: "fa-solid fa-tree", desc: "Creamy sandalwood that binds the sweet floral heart to the skin." }
        ],
        performance: {
            longevity: "9–12 Hours",
            longevityLevel: "Long Lasting",
            sillage: "Alluring & Cozy",
            sillageDesc: "A warm, comforting scent bubble that invites closeness.",
            concentration: "Eau de Parfum (22% Oil)",
            season: "All-Year Versatility",
            timeOfDay: "Afternoon into Enchanting Evening"
        }
    },
    15: { // Discovery set Male
        category: "Curated Artisanal Trio for Him (3 x 15ml)",
        pyramid: {
            top: {
                title: "Opening Accords (Across Set)",
                duration: "Opening 15–30 min",
                notes: ["Calabrian Bergamot (Morning Shower)", "Aged Cognac & Cinnamon (Night King)", "Sea Salt & Pink Grapefruit (Timeless)"],
                desc: "Experience three distinct openings: sparkling day citrus, boozy evening spice, and crisp coastal marine."
            },
            heart: {
                title: "Heart Accords (Across Set)",
                duration: "Core 2–4 hours",
                notes: ["French Lavender", "Coastal White Sage", "Muted Tuscan Iris", "Roasted Praline"],
                desc: "A full olfactory journey transitioning from fresh herbs into aristocratic powdery praline."
            },
            base: {
                title: "Base Accords (Across Set)",
                duration: "Dry-down 8–14 hours",
                notes: ["Mysore Sandalwood", "Virginia Cedarwood", "Bourbon Vanilla", "Sun-bleached Driftwood"],
                desc: "Long-lasting foundation of precious Indian sandalwood, dry woods, and comforting amber."
            }
        },
        featuredNotes: [
            { name: "Calabrian Bergamot", role: "Daytime Freshness", icon: "fa-solid fa-lemon", desc: "Featured in Morning Shower for solar energy." },
            { name: "Mysore Sandalwood", role: "Night King Foundation", icon: "fa-solid fa-tree", desc: "Creamy sandalwood in our bestselling night blend." },
            { name: "Sea Salt & Driftwood", role: "Timeless Coastal Air", icon: "fa-solid fa-water", desc: "Marine accords crafted for relaxed confidence." },
            { name: "Ceylon Cinnamon", role: "Warm Spice Accent", icon: "fa-solid fa-fire", desc: "Rich spicy contrast for dinner and nightlife." }
        ],
        performance: {
            longevity: "8–14 Hours",
            longevityLevel: "Complete Day-to-Night",
            sillage: "Versatile Aura",
            sillageDesc: "Adaptable from fresh office sillage to bold nightclub presence.",
            concentration: "3 x 15ml Extrait / EDP",
            season: "Four Seasons Versatile",
            timeOfDay: "Dawn, Dusk & Midnight"
        }
    },
    16: { // Discovery set Female
        category: "Curated Artisanal Discovery for Her (4 x 15ml)",
        pyramid: {
            top: {
                title: "Opening Accords (Across Set)",
                duration: "Opening 15–30 min",
                notes: ["Orange Blossom & Apple (Petal Kiss)", "Wild Honey & Pepper (Dusky Rose)", "Coconut Milk (Adore)", "Dark Cherry (Euphoria)"],
                desc: "Four exquisite facets: solar florals, gothic honeyed spice, creamy sweet coconut, and fiery cherry."
            },
            heart: {
                title: "Heart Accords (Across Set)",
                duration: "Core 2–4 hours",
                notes: ["Crimson Damask Rose", "Night-Blooming Orchid", "Roasted Coffee", "Grasse Jasmine Sambac"],
                desc: "Intoxicating floral artistry blended with gourmand coffee and exotic tropical blooms."
            },
            base: {
                title: "Base Accords (Across Set)",
                duration: "Dry-down 8–14 hours",
                notes: ["Madagascan Vanilla", "Tuscan Leather", "Cashmere Musk", "Rare Ambergris"],
                desc: "Sensual trail of velvety vanilla, suede leather, clean skin musk, and marine amber."
            }
        },
        featuredNotes: [
            { name: "Orange Blossom", role: "Petal Kiss Signature", icon: "fa-solid fa-spa", desc: "Solar radiance for uplifting morning wear." },
            { name: "Damask Rose", role: "Dusky Rose Core", icon: "fa-solid fa-clover", desc: "Deep romance paired with roasted coffee & leather." },
            { name: "Madagascan Vanilla", role: "Adore Sweetness", icon: "fa-solid fa-gem", desc: "Warm, velvety comfort that clings to skin." },
            { name: "Dark Cherry & Amber", role: "Euphoria Magnetism", icon: "fa-solid fa-fire", desc: "Fiery, seductive evening projection." }
        ],
        performance: {
            longevity: "8–14 Hours",
            longevityLevel: "All-Day Elegance",
            sillage: "Radiant & Captivating",
            sillageDesc: "From soft romantic skin scent to head-turning projection.",
            concentration: "4 x 15ml Extrait / EDP",
            season: "All-Season Wardrobe",
            timeOfDay: "Morning, High Tea & Gala Nights"
        }
    }
};

// Helper: Retrieve Olfactory Notes & Scent Details with fallback
function getProductNotesData(product) {
    if (!product) return null;
    if (PERFUME_NOTES_DATA[product.id]) {
        return PERFUME_NOTES_DATA[product.id];
    }
    const rawNotes = (product.notes || "").split(",").map(n => n.trim()).filter(Boolean);
    const topNotes = rawNotes.slice(0, Math.ceil(rawNotes.length / 3));
    const heartNotes = rawNotes.slice(Math.ceil(rawNotes.length / 3), Math.ceil((rawNotes.length * 2) / 3));
    const baseNotes = rawNotes.slice(Math.ceil((rawNotes.length * 2) / 3));

    return {
        category: product.family ? `${product.family.charAt(0).toUpperCase() + product.family.slice(1)} Fragrance` : "Luxury Artisanal Fragrance",
        pyramid: {
            top: {
                title: "Top Notes",
                duration: "Opening 15–30 min",
                notes: topNotes.length ? topNotes : ["Sparkling Citrus", "Aromatic Breeze"],
                desc: "The bright initial impression upon first spray."
            },
            heart: {
                title: "Heart / Middle Notes",
                duration: "Core 2–4 hours",
                notes: heartNotes.length ? heartNotes : ["Floral Bouquet", "Warm Spice"],
                desc: "The true character and emotional body of the perfume."
            },
            base: {
                title: "Base Notes",
                duration: "Dry-down 6–10+ hours",
                notes: baseNotes.length ? baseNotes : ["Precious Woods", "Sensual Amber"],
                desc: "The lingering dry-down that binds with skin chemistry."
            }
        },
        featuredNotes: (rawNotes.length ? rawNotes : ["Bergamot", "Cedar", "Amber", "Musk"]).slice(0, 4).map((n, i) => ({
            name: n,
            role: i === 0 ? "Top Note" : i === 1 ? "Heart Note" : "Base Note",
            icon: i === 0 ? "fa-solid fa-lemon" : i === 1 ? "fa-solid fa-spa" : "fa-solid fa-tree",
            desc: `Featured artisanal essence in ${product.name}.`
        })),
        performance: {
            longevity: "8–10 Hours",
            longevityLevel: "Long Lasting",
            sillage: "Moderate to Radiant",
            sillageDesc: "Leaves a distinctive, elegant presence.",
            concentration: "Eau de Parfum (22% Oil)",
            season: "All Season Versatile",
            timeOfDay: product.occasion === "night" ? "Golden Evening" : "Bright Daytime"
        }
    };
}

// ─── SCENTIRA-STYLE CARD IMAGE CAROUSEL CONTROLLER ────────────────────────────
// Tracks current image index displayed on each product card in the catalog
let cardImageIndexMap = {};

window.navigateCardImage = function(e, productId, delta) {
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }
    const p = products.find(item => item.id === productId);
    if (!p) return;
    const images = getProductImages(p);
    if (!images || images.length <= 1) return;

    let curIdx = cardImageIndexMap[productId] !== undefined ? cardImageIndexMap[productId] : 0;
    let nextIdx = (curIdx + delta + images.length) % images.length;
    cardImageIndexMap[productId] = nextIdx;

    updateCardImageDisplay(productId, p, images, nextIdx);
};

window.setCardImageByIndex = function(e, productId, targetIdx) {
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }
    const p = products.find(item => item.id === productId);
    if (!p) return;
    const images = getProductImages(p);
    if (!images || targetIdx < 0 || targetIdx >= images.length) return;

    cardImageIndexMap[productId] = targetIdx;
    updateCardImageDisplay(productId, p, images, targetIdx);
};

function updateCardImageDisplay(productId, product, images, activeIdx) {
    const card = document.querySelector(`.product-card[data-id="${productId}"]`);
    if (!card) return;

    const imgEl = card.querySelector(`#card-img-${productId}`);
    if (imgEl && images[activeIdx]) {
        imgEl.style.opacity = "0.35";
        setTimeout(() => {
            imgEl.src = images[activeIdx];
            imgEl.style.opacity = "1";
        }, 90);
    }

    // Update pagination dots
    const dots = card.querySelectorAll(".card-image-dot");
    dots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === activeIdx);
    });
}

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
        goToCheckoutStep(2);
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

// ─── AUTHENTICATION MODAL CONTROLS ─────────────────────────────────────────────
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

// ─── COUPON CODE SYSTEM ──────────────────────────────────────────────────────
let appliedCoupon = null; // { code: "AAVASA10", type: "percent", value: 10, label: "10% OFF" }

const AVAILABLE_COUPONS = {
    "AAVASA10":   { type: "percent", value: 10, label: "10% OFF", minOrder: 0 },
    "LUXURY20":   { type: "percent", value: 20, label: "20% OFF", minOrder: 3000 },
    "FIRST500":   { type: "flat",    value: 500, label: "₹500 OFF", minOrder: 1500 },
    "FESTIVE15":  { type: "percent", value: 15, label: "15% OFF", minOrder: 2000 }
};

window.applyCouponCode = function(codeOverride) {
    const input = document.getElementById("coupon-code-input");
    const code = (codeOverride || input?.value || "").trim().toUpperCase();

    if (!code) {
        showCouponMsg("Please enter a coupon code.", "error");
        return;
    }

    const subtotal = cart.reduce((s, i) => s + i.priceDiscounted * i.quantity, 0);
    const coupon = AVAILABLE_COUPONS[code];

    if (!coupon) {
        showCouponMsg(`Coupon code "${code}" is invalid or expired.`, "error");
        return;
    }

    if (coupon.minOrder && subtotal < coupon.minOrder) {
        showCouponMsg(`Coupon "${code}" requires a min. order of ₹${coupon.minOrder.toLocaleString("en-IN")}.`, "error");
        return;
    }

    appliedCoupon = { code, ...coupon };
    if (input) input.value = code;

    showCouponMsg(`Coupon "${code}" applied successfully!`, "success");
    updateCouponUI();
    populateCheckoutSummary();
};

window.quickApplyCoupon = function(code) {
    applyCouponCode(code);
};

window.removeCouponCode = function() {
    appliedCoupon = null;
    const input = document.getElementById("coupon-code-input");
    if (input) input.value = "";
    const msgEl = document.getElementById("coupon-message");
    if (msgEl) {
        msgEl.className = "coupon-msg";
        msgEl.textContent = "";
    }
    updateCouponUI();
    populateCheckoutSummary();
};

function showCouponMsg(text, type) {
    const msgEl = document.getElementById("coupon-message");
    if (!msgEl) return;
    msgEl.textContent = text;
    msgEl.className = `coupon-msg ${type}`;
}

function updateCouponUI() {
    const tag = document.getElementById("coupon-applied-tag");
    const label = document.getElementById("applied-coupon-label");
    const desc = document.getElementById("applied-coupon-desc");
    const inputGroup = document.getElementById("coupon-input-group");
    const hints = document.getElementById("coupon-hints-container");

    if (appliedCoupon) {
        if (tag) tag.classList.add("active");
        if (label) label.textContent = appliedCoupon.code;
        if (desc) desc.textContent = appliedCoupon.label;
        if (inputGroup) inputGroup.style.display = "none";
        if (hints) hints.style.display = "none";
    } else {
        if (tag) tag.classList.remove("active");
        if (inputGroup) inputGroup.style.display = "flex";
        if (hints) hints.style.display = "flex";
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

    let discountAmount = 0;
    if (appliedCoupon) {
        if (appliedCoupon.type === "percent") {
            discountAmount = Math.round((subtotal * appliedCoupon.value) / 100);
        } else if (appliedCoupon.type === "flat") {
            discountAmount = Math.min(appliedCoupon.value, subtotal);
        }
    }

    const total = Math.max(0, subtotal - discountAmount);

    if (itemsEl) {
        itemsEl.innerHTML = cart.map(item => `
            <div class="summary-item">
                <div class="summary-item-img"><img src="${item.image}" alt="${item.name}"></div>
                <div class="summary-item-details">
                    <div class="summary-item-name">${item.name}</div>
                    <div class="summary-item-sub">${item.edition === "collector" ? "Collector's" : "Signature"} · ${item.size} · Qty ${item.quantity}</div>
                </div>
                <div class="summary-item-price">₹${(item.priceDiscounted * item.quantity).toLocaleString("en-IN")}</div>
            </div>`).join("");
    }

    const subtotalEl = document.getElementById("checkout-summary-subtotal");
    const discountRow = document.getElementById("checkout-discount-row");
    const discountEl = document.getElementById("checkout-summary-discount");
    const percentLabel = document.getElementById("discount-percent-label");
    const totalEl = document.getElementById("checkout-summary-total");

    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString("en-IN")}`;

    if (appliedCoupon && discountAmount > 0) {
        if (discountRow) discountRow.style.display = "flex";
        if (percentLabel) percentLabel.textContent = appliedCoupon.label;
        if (discountEl) discountEl.textContent = `-₹${discountAmount.toLocaleString("en-IN")}`;
    } else {
        if (discountRow) discountRow.style.display = "none";
    }

    if (totalEl) totalEl.textContent = `₹${total.toLocaleString("en-IN")}`;
    updateCouponUI();
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

// ─── ORDER SUBMISSION & PAYMENT GATEWAYS ──────────────────────────────────────
window.handleOrderSubmission = async function() {
    const btn = document.getElementById("place-order-submit-btn");

    const p = (currentUser && currentUser.profile) ? currentUser.profile : {};
    const name    = document.getElementById("co-name")?.value.trim() || p.fullName || "Aavasa Customer";
    const phone   = document.getElementById("co-phone")?.value.trim() || p.phone || "+91 99999 88888";
    const email   = document.getElementById("co-email")?.value.trim() || currentUser?.loginId || "guest@aavasa.com";
    const address = document.getElementById("co-address")?.value.trim() || p.address || "Street Address";
    const city    = document.getElementById("co-city")?.value.trim() || p.city || "Mumbai";
    const state   = document.getElementById("co-state")?.value.trim() || p.state || "Maharashtra";
    const pincode = document.getElementById("co-pincode")?.value.trim() || p.pincode || "400001";

    if (!name || !phone || !address || !city) {
        alert("Please complete your delivery address in Step 2 first.");
        goToCheckoutStep(2);
        return;
    }

    if (cart.length === 0) {
        alert("Your bag is empty. Please add fragrances first.");
        return;
    }

    btn.disabled = true;
    btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing…`;

    const subtotal = cart.reduce((s, i) => s + i.priceDiscounted * i.quantity, 0);

    let discountAmount = 0;
    if (appliedCoupon) {
        if (appliedCoupon.type === "percent") {
            discountAmount = Math.round((subtotal * appliedCoupon.value) / 100);
        } else if (appliedCoupon.type === "flat") {
            discountAmount = Math.min(appliedCoupon.value, subtotal);
        }
    }
    const totalAmount = Math.max(0, subtotal - discountAmount);

    const payload = {
        loginId: currentUser?.loginId || "guest",
        customer: { fullName: name, email, phone, address, city, state, pincode },
        items: cart.map(i => ({ id: i.id, name: i.name, edition: i.edition, price: i.priceDiscounted, quantity: i.quantity, size: i.size })),
        subtotal,
        discountAmount,
        couponCode: appliedCoupon?.code || null,
        totalAmount,
        paymentMethod: selectedPaymentMethod,
        paymentStatus: selectedPaymentMethod === "cod" ? "Pending (Cash on Delivery)" : "Paid"
    };

    // If Razorpay is selected, launch Razorpay Gateway Modal
    if (selectedPaymentMethod === "razorpay") {
        try {
            let razorpayKey = "rzp_test_1DP5mmOlF5G5ag";
            try {
                const keyRes = await fetch("/api/razorpay/key");
                const keyData = await keyRes.json();
                if (keyData.key) razorpayKey = keyData.key;
            } catch (e) {}

            const options = {
                key: razorpayKey,
                amount: totalAmount * 100,
                currency: "INR",
                name: "House of Aavasa",
                description: `Luxury Fragrance Order (${cart.length} item${cart.length > 1 ? 's' : ''})`,
                image: "https://lh3.googleusercontent.com/a/default-user=s96-c",
                handler: async function (response) {
                    payload.paymentId = response.razorpay_payment_id || `rzp_${Date.now()}`;
                    payload.paymentStatus = "Paid (Razorpay)";
                    await submitOrderToBackend(payload, btn);
                },
                prefill: {
                    name: name,
                    email: email,
                    contact: phone
                },
                theme: {
                    color: "#1c1917"
                },
                modal: {
                    ondismiss: function() {
                        btn.disabled = false;
                        btn.innerHTML = `<i class="fa-solid fa-lock"></i> Place Order & Pay`;
                    }
                }
            };

            if (window.Razorpay) {
                const rzp = new window.Razorpay(options);
                rzp.on('payment.failed', function (resp) {
                    alert("Payment cancelled or not completed: " + (resp.error?.description || "Transaction failed"));
                    btn.disabled = false;
                    btn.innerHTML = `<i class="fa-solid fa-lock"></i> Place Order & Pay`;
                });
                rzp.open();
                return;
            }
        } catch (rzpErr) {
            console.warn("Razorpay launch error, fallback to direct order:", rzpErr);
        }
    }

    // Direct Order Submission (for COD, Stripe, PayPal, or fallback)
    await submitOrderToBackend(payload, btn);
};

async function submitOrderToBackend(payload, btn) {
    try {
        const res = await fetch("/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        const data = await res.json();

        if (data.success && data.order) {
            cart = [];
            saveCart();
            updateCartUI();
            checkoutModal.classList.remove("active");
            document.getElementById("simulated-order-id").textContent = data.order.id;
            successModal.classList.add("active");
            btn.disabled = false;
            btn.innerHTML = `<i class="fa-solid fa-lock"></i> Place Order & Pay`;
            return;
        }
    } catch (err) {
        console.warn("Order submission offline fallback:", err);
    }

    // Fail-proof Local Order Creation Backup
    const simOrderId = `AAVASA-ORD-${Math.floor(10000 + Math.random() * 90000)}`;
    const savedOrders = JSON.parse(localStorage.getItem("aavasa_orders") || "[]");
    savedOrders.unshift({ ...payload, id: simOrderId, orderStatus: "Processing", createdAt: new Date().toISOString() });
    localStorage.setItem("aavasa_orders", JSON.stringify(savedOrders));

    cart = [];
    saveCart();
    updateCartUI();
    checkoutModal.classList.remove("active");
    document.getElementById("simulated-order-id").textContent = simOrderId;
    successModal.classList.add("active");

    btn.disabled = false;
    btn.innerHTML = `<i class="fa-solid fa-lock"></i> Place Order & Pay`;
}

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
            currentEditionFilter === "signature" ? "Signature Edition" : currentEditionFilter === "collector" ? "Heritage Edition" : "",
            currentGenderFilter  === "male"      ? "For Him"           : currentGenderFilter  === "female"    ? "For Her"           : ""
        ].filter(Boolean).join(" · ");
        document.getElementById("active-filters-text").textContent = `Filters: ${label}`;
    } else {
        info.style.display = "none";
    }

    if (currentSort === "price-low")  list.sort((a,b) => getSelectedSizeInfo(a).priceDiscounted - getSelectedSizeInfo(b).priceDiscounted);
    if (currentSort === "price-high") list.sort((a,b) => getSelectedSizeInfo(b).priceDiscounted - getSelectedSizeInfo(a).priceDiscounted);
    if (currentSort === "name-asc")   list.sort((a,b) => a.name.localeCompare(b.name));

    if (!list.length) {
        productGrid.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:var(--color-text-muted); padding:40px 0;">No fragrances match the selected filters.</p>`;
        return;
    }

    productGrid.innerHTML = list.map(p => {
        const edLabel  = p.edition === "signature" ? "Signature" : (p.edition === "collector" ? "Heritage" : "Collector's");
        const tagClass = p.edition === "collector"  ? "tag-collector" : "";
        const sizes    = getProductSizes(p);
        const currentSize = selectedProductSizes[p.id] || sizes[0].size;
        const currentSizeInfo = getSelectedSizeInfo(p, currentSize);
        const images   = getProductImages(p);

        // Determine active card image index
        let activeIdx = cardImageIndexMap[p.id];
        if (activeIdx === undefined) {
            // Default: if 15ml is selected and a 15ml photo exists, use it
            if (currentSize === "15ml") {
                const found15Idx = images.findIndex(img => img.toLowerCase().includes("15"));
                activeIdx = found15Idx !== -1 ? found15Idx : 0;
            } else {
                activeIdx = 0;
            }
            cardImageIndexMap[p.id] = activeIdx;
        } else if (activeIdx >= images.length) {
            activeIdx = 0;
            cardImageIndexMap[p.id] = 0;
        }

        const currentImg = images[activeIdx] || p.image;

        return `
            <div class="product-card" data-id="${p.id}">
                <span class="product-tag ${tagClass}">${edLabel}</span>
                <div class="product-card-media" onclick="openProductModal(${p.id})">
                    <img src="${currentImg}" alt="${p.name}" class="product-card-img" id="card-img-${p.id}" loading="lazy">

                    ${images.length > 1 ? `
                    <!-- Scentira-Style Floating Prev / Next Image Navigation Buttons -->
                    <button type="button" 
                            class="card-image-page-button card-image-page-button--previous" 
                            onclick="navigateCardImage(event, ${p.id}, -1)" 
                            aria-label="Previous view of ${p.name}">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button type="button" 
                            class="card-image-page-button card-image-page-button--next" 
                            onclick="navigateCardImage(event, ${p.id}, 1)" 
                            aria-label="Next view of ${p.name}">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>

                    <!-- Scentira-Style Image Pagination Dots -->
                    <div class="card-image-dots" onclick="event.stopPropagation()">
                        ${images.map((_, i) => `
                            <button type="button" 
                                    class="card-image-dot ${i === activeIdx ? 'is-active' : ''}" 
                                    onclick="setCardImageByIndex(event, ${p.id}, ${i})" 
                                    aria-label="View photo ${i + 1} of ${p.name}">
                            </button>
                        `).join('')}
                    </div>` : ''}

                    <div class="product-card-overlay">
                        <button class="btn-quickview"><i class="fa-regular fa-eye"></i> Quick View & Notes</button>
                    </div>
                </div>
                <div class="product-card-details">
                    <div class="product-meta">
                        <span>${p.gender === "male" ? "For Him" : (p.gender === "female" ? "For Her" : "Universal")}</span>
                        <span class="card-size-label" id="card-size-label-${p.id}">${currentSizeInfo.size}</span>
                    </div>
                    <h3 class="product-title" onclick="openProductModal(${p.id})" style="cursor:pointer;" title="Click to view notes breakdown">${p.name}</h3>
                    <p class="product-notes" onclick="openProductModal(${p.id})" style="cursor:pointer;" title="Click to view notes breakdown">${p.notes}</p>

                    ${sizes.length > 1 ? `
                    <div class="product-sizes-bar">
                        ${sizes.map(s => `
                            <button type="button" 
                                    class="product-size-chip ${s.size === currentSize ? 'active' : ''}" 
                                    data-size="${s.size}" 
                                    onclick="handleCardSizeChange(event, ${p.id}, '${s.size}')">
                                ${s.size}
                            </button>
                        `).join("")}
                    </div>` : `
                    <div class="product-sizes-bar">
                        <span class="product-size-chip active static">${sizes[0].size}</span>
                    </div>`}

                    <div class="product-price-row" id="card-price-row-${p.id}">
                        <span class="price-original">₹${currentSizeInfo.priceOriginal.toLocaleString("en-IN")}</span>
                        <span class="price-discounted">₹${currentSizeInfo.priceDiscounted.toLocaleString("en-IN")}</span>
                    </div>
                    <button class="btn-add-cart" onclick="addToCart(${p.id})">Add to Bag</button>
                </div>
            </div>`;
    }).join("");
}

window.handleCardSizeChange = function(e, productId, newSize) {
    if (e) e.stopPropagation();
    selectedProductSizes[productId] = newSize;
    const p = products.find(x => x.id === productId);
    if (!p) return;
    const sizeInfo = getSelectedSizeInfo(p, newSize);

    const card = document.querySelector(`.product-card[data-id="${productId}"]`);
    if (card) {
        card.querySelectorAll(".product-size-chip").forEach(chip => {
            chip.classList.toggle("active", chip.dataset.size === newSize);
        });
        const sizeLabel = card.querySelector(`#card-size-label-${productId}`);
        if (sizeLabel) sizeLabel.textContent = sizeInfo.size;
        
        const priceRow = card.querySelector(`#card-price-row-${productId}`);
        if (priceRow) {
            priceRow.innerHTML = `
                <span class="price-original">₹${sizeInfo.priceOriginal.toLocaleString("en-IN")}</span>
                <span class="price-discounted">₹${sizeInfo.priceDiscounted.toLocaleString("en-IN")}</span>
            `;
        }

        // Dynamically update card image when size is chosen (e.g. 15ml bottle)
        const images = getProductImages(p);
        if (newSize === "15ml") {
            const found15Idx = images.findIndex(img => img.toLowerCase().includes("15"));
            if (found15Idx !== -1) {
                cardImageIndexMap[productId] = found15Idx;
                updateCardImageDisplay(productId, p, images, found15Idx);
            }
        } else {
            cardImageIndexMap[productId] = 0;
            updateCardImageDisplay(productId, p, images, 0);
        }
    }
};

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

window.addToCart = function(id, chosenSize) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const sizeInfo = getSelectedSizeInfo(product, chosenSize);
    const cartItemId = `${id}_${sizeInfo.size}`;

    const imgs = getProductImages(product);
    const imgForSize = (sizeInfo.size === "15ml" && imgs.find(i => i.toLowerCase().includes("15")))
        ? imgs.find(i => i.toLowerCase().includes("15"))
        : (imgs[0] || product.image);

    const idx = cart.findIndex(i => (i.cartItemId || `${i.id}_${i.size || '50ml'}`) === cartItemId);
    if (idx > -1) {
        cart[idx].quantity++;
    } else {
        cart.push({
            ...product,
            image: imgForSize,
            cartItemId: cartItemId,
            size: sizeInfo.size,
            priceOriginal: sizeInfo.priceOriginal,
            priceDiscounted: sizeInfo.priceDiscounted,
            quantity: 1
        });
    }
    saveCart();
    updateCartUI();
    openCart();
};

function handleCartClicks(e) {
    const item = e.target.closest(".cart-item");
    if (!item) return;
    const cartItemId = item.dataset.cartItemId || item.dataset.id;
    if (e.target.classList.contains("qty-plus") || e.target.closest(".qty-plus"))        updateQty(cartItemId, 1);
    else if (e.target.classList.contains("qty-minus") || e.target.closest(".qty-minus"))  updateQty(cartItemId, -1);
    else if (e.target.classList.contains("cart-item-remove")) removeFromCart(cartItemId);
}

function updateQty(cartItemId, delta) {
    const idx = cart.findIndex(i => (i.cartItemId || `${i.id}_${i.size || '50ml'}`) === cartItemId || String(i.id) === String(cartItemId));
    if (idx === -1) return;
    cart[idx].quantity += delta;
    if (cart[idx].quantity <= 0) cart.splice(idx, 1);
    saveCart();
    updateCartUI();
    renderCart();
}

function removeFromCart(cartItemId) {
    cart = cart.filter(i => (i.cartItemId || `${i.id}_${i.size || '50ml'}`) !== cartItemId && String(i.id) !== String(cartItemId));
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
        <div class="cart-item" data-cart-item-id="${item.cartItemId || `${item.id}_${item.size || '50ml'}`}">
            <div class="cart-item-media"><img src="${item.image}" alt="${item.name}"></div>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-meta">${item.gender === "male" ? "For Him" : (item.gender === "female" ? "For Her" : "Universal")} · ${item.edition === "collector" ? "Heritage" : "Signature"} · <strong style="color:var(--color-accent-dark);">${item.size}</strong></div>
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

// ─── PRODUCT QUICK VIEW MODAL & NOTES BREAKDOWN (Scentira Experience) ────────
let currentModalImages = [];
let currentModalImgIdx = 0;
let activeModalTab = "overview";

window.switchModalTab = function(tabName) {
    activeModalTab = tabName;
    const tabs = ["overview", "notes", "performance"];
    tabs.forEach(t => {
        const btn = document.getElementById(`modal-tab-btn-${t}`);
        const panel = document.getElementById(`modal-tab-panel-${t}`);
        const isActive = (t === tabName);
        if (btn) {
            btn.classList.toggle("active", isActive);
            btn.setAttribute("aria-selected", isActive ? "true" : "false");
        }
        if (panel) {
            panel.classList.toggle("active", isActive);
        }
    });
};

window.openProductModal = function(id, defaultTab = "overview") {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const edLabel = product.edition === "signature" ? "Signature Edition" : (product.edition === "collector" ? "Heritage Edition" : "Collector's Edition");
    const sizes = getProductSizes(product);
    const currentSize = selectedProductSizes[id] || sizes[0].size;
    const sizeInfo = getSelectedSizeInfo(product, currentSize);
    const notesData = getProductNotesData(product);

    currentModalImages = getProductImages(product);
    let initialIdx = 0;
    if (currentSize === "15ml") {
        const found15Idx = currentModalImages.findIndex(img => img.toLowerCase().includes("15"));
        if (found15Idx !== -1) initialIdx = found15Idx;
    }
    currentModalImgIdx = initialIdx;

    document.getElementById("modal-content-container").innerHTML = `
        <div class="modal-media modal-gallery-media">
            <div class="modal-main-image-wrap">
                <img src="${currentModalImages[initialIdx]}" alt="${product.name}" id="modal-active-img" class="modal-img">
                ${currentModalImages.length > 1 ? `
                    <button type="button" class="modal-nav-arrow prev" onclick="navigateModalGallery(-1)" aria-label="Previous image">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button type="button" class="modal-nav-arrow next" onclick="navigateModalGallery(1)" aria-label="Next image">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                    <div class="modal-image-counter">
                        <span id="modal-image-counter-text">${initialIdx + 1} / ${currentModalImages.length}</span>
                    </div>
                ` : ''}
            </div>
            ${currentModalImages.length > 1 ? `
                <div class="modal-thumbs-strip" id="modal-thumbs-strip">
                    ${currentModalImages.map((img, idx) => `
                        <button type="button" 
                                class="modal-thumb ${idx === initialIdx ? 'active' : ''}" 
                                data-index="${idx}" 
                                onclick="setModalActiveImage(${idx})"
                                aria-label="View photo ${idx + 1}">
                            <img src="${img}" alt="${product.name} angle ${idx + 1}" loading="lazy">
                        </button>
                    `).join("")}
                </div>
            ` : ''}
        </div>

        <div class="modal-info">
            <div class="modal-header-meta">
                <span class="modal-edition">${edLabel}</span>
                <span class="modal-category-badge">${notesData.category || product.family}</span>
            </div>
            <h2 class="modal-title">${product.name}</h2>

            <!-- Scentira-Style Interactive Tabs -->
            <div class="modal-tabs-header" role="tablist">
                <button type="button" 
                        class="modal-tab-btn ${defaultTab === 'overview' ? 'active' : ''}" 
                        id="modal-tab-btn-overview" 
                        onclick="switchModalTab('overview')" 
                        role="tab" 
                        aria-selected="${defaultTab === 'overview' ? 'true' : 'false'}">
                    <i class="fa-solid fa-bottle-droplet"></i> Overview & Sizes
                </button>
                <button type="button" 
                        class="modal-tab-btn ${defaultTab === 'notes' ? 'active' : ''}" 
                        id="modal-tab-btn-notes" 
                        onclick="switchModalTab('notes')" 
                        role="tab" 
                        aria-selected="${defaultTab === 'notes' ? 'true' : 'false'}">
                    <i class="fa-solid fa-layer-group"></i> Notes Breakdown
                </button>
                <button type="button" 
                        class="modal-tab-btn ${defaultTab === 'performance' ? 'active' : ''}" 
                        id="modal-tab-btn-performance" 
                        onclick="switchModalTab('performance')" 
                        role="tab" 
                        aria-selected="${defaultTab === 'performance' ? 'true' : 'false'}">
                    <i class="fa-solid fa-chart-simple"></i> Scent Profile
                </button>
            </div>

            <!-- TAB 1: OVERVIEW & SIZES -->
            <div class="modal-tab-panel ${defaultTab === 'overview' ? 'active' : ''}" id="modal-tab-panel-overview" role="tabpanel">
                <div class="modal-quick-notes-teaser" onclick="switchModalTab('notes')" title="Click to view notes breakdown">
                    <span class="modal-notes-label"><i class="fa-solid fa-wand-magic-sparkles"></i> Olfactive Blend:</span>
                    <p class="modal-notes">${product.notes}</p>
                    <span class="modal-teaser-link">View Detailed Notes Breakdown & Olfactory Pyramid &rarr;</span>
                </div>
                <p class="modal-desc">${product.description}</p>
                
                ${sizes.length > 1 ? `
                <div class="modal-sizes-container">
                    <span class="modal-sizes-title">Select Vessel Size:</span>
                    <div class="modal-sizes-options">
                        ${sizes.map(s => `
                            <button type="button" 
                                    class="modal-size-card ${s.size === currentSize ? 'active' : ''}" 
                                    data-size="${s.size}" 
                                    onclick="selectModalSize(${product.id}, '${s.size}')">
                                <span class="m-size-vol">${s.size}</span>
                                <span class="m-size-sub">${s.label || (s.size === '15ml' ? 'Travel Edition' : 'Full Bottle')}</span>
                                <span class="m-size-price">₹${s.priceDiscounted.toLocaleString("en-IN")}</span>
                            </button>
                        `).join("")}
                    </div>
                </div>` : `
                <div class="modal-size">Vessel Size: <strong>${sizes[0].size}</strong></div>`}

                <div class="modal-price-block" id="modal-price-block">
                    <span class="modal-price-original">₹${sizeInfo.priceOriginal.toLocaleString("en-IN")}</span>
                    <span class="modal-price-discounted">₹${sizeInfo.priceDiscounted.toLocaleString("en-IN")}</span>
                </div>
                <button class="btn btn-primary" onclick="addToCart(${product.id}, selectedProductSizes[${product.id}] || '${currentSize}'); document.getElementById('product-modal').classList.remove('active');">
                    <i class="fa-solid fa-bag-shopping"></i> Add to Shopping Bag
                </button>
            </div>

            <!-- TAB 2: NOTES BREAKDOWN (Scentira Olfactory Pyramid + Featured Notes Grid) -->
            <div class="modal-tab-panel ${defaultTab === 'notes' ? 'active' : ''}" id="modal-tab-panel-notes" role="tabpanel">
                <div class="notes-breakdown-container">
                    <div class="pyramid-intro">
                        <span class="pyramid-sub-badge"><i class="fa-solid fa-shapes"></i> Composition</span>
                        <h4>Olfactory Pyramid</h4>
                        <p>Timed fragrance evolution on your skin — from instant opening sparkle to dusk dry-down.</p>
                    </div>

                    <!-- Top Notes -->
                    <div class="pyramid-tier tier-top">
                        <div class="tier-header">
                            <span class="tier-badge top"><i class="fa-regular fa-sun"></i> Top Notes</span>
                            <span class="tier-timing">${notesData.pyramid.top.duration}</span>
                        </div>
                        <div class="tier-pills">
                            ${notesData.pyramid.top.notes.map(n => `<span class="pyramid-pill">${n}</span>`).join("")}
                        </div>
                        <p class="tier-desc">${notesData.pyramid.top.desc}</p>
                    </div>

                    <!-- Heart Notes -->
                    <div class="pyramid-tier tier-heart">
                        <div class="tier-header">
                            <span class="tier-badge heart"><i class="fa-solid fa-heart"></i> Heart / Middle Notes</span>
                            <span class="tier-timing">${notesData.pyramid.heart.duration}</span>
                        </div>
                        <div class="tier-pills">
                            ${notesData.pyramid.heart.notes.map(n => `<span class="pyramid-pill">${n}</span>`).join("")}
                        </div>
                        <p class="tier-desc">${notesData.pyramid.heart.desc}</p>
                    </div>

                    <!-- Base Notes -->
                    <div class="pyramid-tier tier-base">
                        <div class="tier-header">
                            <span class="tier-badge base"><i class="fa-solid fa-tree"></i> Base Notes</span>
                            <span class="tier-timing">${notesData.pyramid.base.duration}</span>
                        </div>
                        <div class="tier-pills">
                            ${notesData.pyramid.base.notes.map(n => `<span class="pyramid-pill">${n}</span>`).join("")}
                        </div>
                        <p class="tier-desc">${notesData.pyramid.base.desc}</p>
                    </div>

                    <!-- Featured Notes Visual Grid (Scentira style) -->
                    <div class="featured-notes-section">
                        <h4 class="featured-notes-heading"><i class="fa-solid fa-leaf"></i> Featured Ingredients</h4>
                        <div class="notes-grid">
                            ${notesData.featuredNotes.map(item => `
                                <div class="note-item">
                                    <div class="note-icon-circle">
                                        <i class="${item.icon}"></i>
                                    </div>
                                    <span class="note-name">${item.name}</span>
                                    <span class="note-role">${item.role}</span>
                                    <p class="note-desc">${item.desc}</p>
                                </div>
                            `).join("")}
                        </div>
                    </div>

                    <div class="modal-tab-action-row">
                        <button type="button" class="btn btn-primary" onclick="addToCart(${product.id}, selectedProductSizes[${product.id}] || '${currentSize}'); document.getElementById('product-modal').classList.remove('active');">
                            <i class="fa-solid fa-bag-shopping"></i> Add to Bag (<span id="modal-notes-add-price">₹${sizeInfo.priceDiscounted.toLocaleString("en-IN")}</span>)
                        </button>
                        <button type="button" class="btn btn-outline" onclick="switchModalTab('overview')">
                            Change Size (<span id="modal-notes-curr-size">${currentSize}</span>)
                        </button>
                    </div>
                </div>
            </div>

            <!-- TAB 3: SCENT PERFORMANCE -->
            <div class="modal-tab-panel ${defaultTab === 'performance' ? 'active' : ''}" id="modal-tab-panel-performance" role="tabpanel">
                <div class="scent-performance-container">
                    <div class="performance-metric-card">
                        <div class="perf-metric-header">
                            <div class="perf-metric-icon"><i class="fa-regular fa-clock"></i></div>
                            <div class="perf-metric-title-group">
                                <span class="perf-label">Longevity on Skin</span>
                                <h4 class="perf-value">${notesData.performance.longevity}</h4>
                            </div>
                            <span class="perf-badge">${notesData.performance.longevityLevel}</span>
                        </div>
                        <div class="perf-bar-track">
                            <div class="perf-bar-fill" style="width: 88%;"></div>
                        </div>
                    </div>

                    <div class="performance-metric-card">
                        <div class="perf-metric-header">
                            <div class="perf-metric-icon"><i class="fa-solid fa-wind"></i></div>
                            <div class="perf-metric-title-group">
                                <span class="perf-label">Sillage & Projection</span>
                                <h4 class="perf-value">${notesData.performance.sillage}</h4>
                            </div>
                        </div>
                        <p class="perf-detail-desc">${notesData.performance.sillageDesc}</p>
                    </div>

                    <div class="perf-meta-grid">
                        <div class="perf-mini-card">
                            <span class="perf-mini-label"><i class="fa-solid fa-vial"></i> Concentration</span>
                            <strong class="perf-mini-val">${notesData.performance.concentration}</strong>
                        </div>
                        <div class="perf-mini-card">
                            <span class="perf-mini-label"><i class="fa-regular fa-calendar"></i> Best Season</span>
                            <strong class="perf-mini-val">${notesData.performance.season}</strong>
                        </div>
                        <div class="perf-mini-card" style="grid-column: 1 / -1;">
                            <span class="perf-mini-label"><i class="fa-regular fa-sun"></i> Best Time & Occasion</span>
                            <strong class="perf-mini-val">${notesData.performance.timeOfDay}</strong>
                        </div>
                    </div>

                    <div class="modal-tab-action-row" style="margin-top: 24px;">
                        <button type="button" class="btn btn-primary" onclick="addToCart(${product.id}, selectedProductSizes[${product.id}] || '${currentSize}'); document.getElementById('product-modal').classList.remove('active');">
                            <i class="fa-solid fa-bag-shopping"></i> Add to Bag (<span id="modal-perf-add-price">₹${sizeInfo.priceDiscounted.toLocaleString("en-IN")}</span>)
                        </button>
                    </div>
                </div>
            </div>
        </div>`;
    document.getElementById("product-modal").classList.add("active");
};

window.setModalActiveImage = function(idx) {
    if (!currentModalImages || !currentModalImages[idx]) return;
    currentModalImgIdx = idx;
    const mainImg = document.getElementById("modal-active-img");
    if (mainImg) {
        mainImg.style.opacity = "0.35";
        setTimeout(() => {
            mainImg.src = currentModalImages[idx];
            mainImg.style.opacity = "1";
        }, 110);
    }
    document.querySelectorAll(".modal-thumb").forEach(thumb => {
        thumb.classList.toggle("active", parseInt(thumb.dataset.index) === idx);
    });
    const counterText = document.getElementById("modal-image-counter-text");
    if (counterText) {
        counterText.textContent = `${idx + 1} / ${currentModalImages.length}`;
    }
};

window.navigateModalGallery = function(dir) {
    if (!currentModalImages || currentModalImages.length <= 1) return;
    let nextIdx = (currentModalImgIdx + dir + currentModalImages.length) % currentModalImages.length;
    setModalActiveImage(nextIdx);
};

window.selectModalSize = function(productId, newSize) {
    selectedProductSizes[productId] = newSize;
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const sizeInfo = getSelectedSizeInfo(product, newSize);

    document.querySelectorAll(".modal-size-card").forEach(card => {
        card.classList.toggle("active", card.dataset.size === newSize);
    });

    const priceBlock = document.getElementById("modal-price-block");
    if (priceBlock) {
        priceBlock.innerHTML = `
            <span class="modal-price-original">₹${sizeInfo.priceOriginal.toLocaleString("en-IN")}</span>
            <span class="modal-price-discounted">₹${sizeInfo.priceDiscounted.toLocaleString("en-IN")}</span>
        `;
    }

    const notesAddPrice = document.getElementById("modal-notes-add-price");
    if (notesAddPrice) notesAddPrice.textContent = `₹${sizeInfo.priceDiscounted.toLocaleString("en-IN")}`;
    const notesCurrSize = document.getElementById("modal-notes-curr-size");
    if (notesCurrSize) notesCurrSize.textContent = newSize;
    const perfAddPrice = document.getElementById("modal-perf-add-price");
    if (perfAddPrice) perfAddPrice.textContent = `₹${sizeInfo.priceDiscounted.toLocaleString("en-IN")}`;

    // Auto-switch modal image if 15ml vs 50ml
    if (currentModalImages && currentModalImages.length > 1) {
        if (newSize === "15ml") {
            const found15Idx = currentModalImages.findIndex(img => img.toLowerCase().includes("15"));
            if (found15Idx !== -1) setModalActiveImage(found15Idx);
        } else if (newSize === "50ml") {
            setModalActiveImage(0);
        }
    }

    // Sync card if present in DOM
    const card = document.querySelector(`.product-card[data-id="${productId}"]`);
    if (card) {
        card.querySelectorAll(".product-size-chip").forEach(chip => {
            chip.classList.toggle("active", chip.dataset.size === newSize);
        });
        const sizeLabel = card.querySelector(`#card-size-label-${productId}`);
        if (sizeLabel) sizeLabel.textContent = sizeInfo.size;
        const priceRow = card.querySelector(`#card-price-row-${productId}`);
        if (priceRow) {
            priceRow.innerHTML = `
                <span class="price-original">₹${sizeInfo.priceOriginal.toLocaleString("en-IN")}</span>
                <span class="price-discounted">₹${sizeInfo.priceDiscounted.toLocaleString("en-IN")}</span>
            `;
        }
        const images = getProductImages(product);
        if (newSize === "15ml") {
            const found15Idx = images.findIndex(img => img.toLowerCase().includes("15"));
            if (found15Idx !== -1) {
                cardImageIndexMap[productId] = found15Idx;
                updateCardImageDisplay(productId, product, images, found15Idx);
            }
        } else {
            cardImageIndexMap[productId] = 0;
            updateCardImageDisplay(productId, product, images, 0);
        }
    }
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
