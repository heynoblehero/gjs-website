const WA_NUMBER = "919821756547";
const IMG_DIR = "resource/images/";

const CATALOG = {
    "gold": {
        "women": [
            {
                "title": "Necklaces & Haars",
                "items": [
                    { "f": "gold/Women/Necklaces/Antique-necklace1.webp", "t": "Antique Leaf Choker with Earrings", "tag": "Antique Gold", "w": 603, "h": 543 },
                    { "f": "gold/Women/Necklaces/Antique-necklace2.webp", "t": "Long Antique Haram with Temple Pendant", "tag": "Antique Gold", "w": 516, "h": 561 },
                    { "f": "gold/Women/Necklaces/Antique-necklace3.webp", "t": "Temple Pendant Set with Emerald Beads", "tag": "Antique Gold", "w": 415, "h": 462 },
                    { "f": "gold/Women/Necklaces/Antique-necklace4.webp", "t": "Bridal Choker with Pearl Drops", "tag": "Antique Gold", "w": 631, "h": 432 },
                    { "f": "gold/Women/Necklaces/Antique-necklace5.webp", "t": "Lakshmi Bridal Choker Set", "tag": "Antique Gold", "w": 543, "h": 627 },
                    { "f": "gold/Women/Necklaces/Antique-necklace6.webp", "t": "Long Antique Haar with Jhumkas", "tag": "Antique Gold", "w": 624, "h": 510 },
                    { "f": "gold/Women/Necklaces/Antique-necklace7.webp", "t": "Long Gold Haar with Pearl Pendant", "tag": "Antique Gold", "w": 421, "h": 541 },
                    { "f": "gold/Women/Necklaces/Antique-necklace8.webp", "t": "Layered Bridal Choker Set", "tag": "Antique Gold", "w": 1024, "h": 964 },
                    { "f": "gold/Women/Necklaces/Antique-necklace9.webp", "t": "Double-Layer Temple Necklace", "tag": "Antique Gold", "w": 815, "h": 1024 },
                    { "f": "gold/Women/Necklaces/light-necklace1.webp", "t": "Light Pendant Chain with Earrings", "tag": "Light Weight", "w": 1100, "h": 1100 },
                    { "f": "gold/Women/Necklaces/light-necklace2.webp", "t": "Light Fringe Necklace with Earrings", "tag": "Light Weight", "w": 416, "h": 761 },
                    { "f": "gold/Women/Necklaces/light-necklace3.webp", "t": "Light Long Necklace with Pendant", "tag": "Light Weight", "w": 413, "h": 770 }
                ]
            },
			{
                "title": "Mangalsutras",
                "items": [
                    { "f": "gold/Women/Mangalsuttra/mangalsuttra5.webp", "t": "Traditional Floral Motif Gold Mangalsutra", "tag": "Traditional Gold", "w": 309, "h": 351 },
                    { "f": "gold/Women/Mangalsuttra/mangalsuttra6.webp", "t": "Textured Architectural Gold Mangalsutra", "tag": "Antique Gold", "w": 309, "h": 351 },
                    { "f": "gold/Women/Mangalsuttra/mangalsuttra7.webp", "t": "Circular Filigree Work Gold Mangalsutra", "tag": "Traditional Gold", "w": 309, "h": 312 },
                    { "f": "gold/Women/Mangalsuttra/mangalsuttra8.webp", "t": "Temple Peacock Design Gold Mangalsutra Set", "tag": "Antique Gold", "w": 246, "h": 267 },
                    { "f": "gold/Women/Mangalsuttra/mangalsuttra9.webp", "t": "Delicate Floral Drop Gold Mangalsutra", "tag": "Lightweight Gold", "w": 554, "h": 554 }
                ]
            },			
			{
                "title": "Chains",
                "items": [
                    { "f": "gold/Women/Chains/chain4.webp", "t": "Designer Mangalsutra Style Gold Chain", "tag": "Ethnic Gold", "w": 246, "h": 267 },
                    { "f": "gold/Women/Chains/chain15.webp", "t": "Puffed Heart Gold Pendant with Snake Chain", "tag": "Traditional Gold", "w": 309, "h": 351 },
                    { "f": "gold/Women/Chains/chain2.webp", "t": "Classic Beaded Gold Chain", "tag": "Traditional Gold", "w": 309, "h": 351 },
                    { "f": "gold/Women/Chains/chain7.webp", "t": "Interwoven Braided Pattern Gold Chain", "tag": "Modern Gold", "w": 309, "h": 312 },
                    { "f": "gold/Women/Chains/chain8.webp", "t": "Textured Mesh Link Gold Chain", "tag": "Traditional Gold", "w": 246, "h": 267 },
                    { "f": "gold/Women/Chains/chain9.webp", "t": "Faceted Modular Link Gold Chain", "tag": "Traditional Gold", "w": 554, "h": 554 },
                    { "f": "gold/Women/Chains/chain11.webp", "t": "Delicate Tube and Bead Gold Chain", "tag": "Lightweight Gold", "w": 246, "h": 267 },
                    { "f": "gold/Women/Chains/chain14.webp", "t": "Geometric Square Mesh Gold Chain", "tag": "Modern Gold", "w": 554, "h": 554 }
                ]
            },
            {
                "title": "Rings",
                "items": [
                    { "f": "gold/Women/Rings/ring10.webp", "t": "Antique Ruby Flower Ring", "tag": "Antique Gold", "w": 296, "h": 182 },
                    { "f": "gold/Women/Rings/ring2.webp", "t": "Gold Bead Cocktail Ring", "tag": "Gold Ring", "w": 309, "h": 351 },
                    { "f": "gold/Women/Rings/ring21.webp", "t": "Light Filigree Ring", "tag": "Light Weight", "w": 447, "h": 447 },
                    { "f": "gold/Women/Rings/ring22.webp", "t": "Gold Jaali Ring", "tag": "Light Weight", "w": 447, "h": 447 },
                    { "f": "gold/Women/Rings/ring23.webp", "t": "Antique Gold Statement Ring", "tag": "Antique Gold", "w": 447, "h": 447 }
                ]
            },
            {
                "title": "Bangles & Kadas",
                "items": [
                    { "f": "gold/Women/Bangles/bangles1.webp", "t": "Textured Gold Bangles (Pair)", "tag": "Gold Bangles", "w": 262, "h": 309 },
                    { "f": "gold/Women/Bangles/bangles2.webp", "t": "Meenakari Gold Bangles", "tag": "Gold Bangles", "w": 344, "h": 268 },
                    { "f": "gold/Women/Bangles/bangles3.webp", "t": "Antique Gold Kada", "tag": "Antique Gold", "w": 363, "h": 550 },
                    { "f": "gold/Women/Bangles/bangles4.webp", "t": "Enamel Gold Bangle", "tag": "Gold Bangles", "w": 480, "h": 376 },
                    { "f": "gold/Women/Bangles/bangles5.webp", "t": "Antique Nakshi Bangles", "tag": "Antique Gold", "w": 1024, "h": 1024 },
                    { "f": "gold/Women/Bangles/bangles6.webp", "t": "Antique Peacock Bangles", "tag": "Antique Gold", "w": 653, "h": 528 }
                ]
            }
        ],
        "men": [
		{
                "title": "Chains",
                "items": [
                    { "f": "gold/Men/Chains/chain16.webp", "t": "Architectural Block Link Gold Chain", "tag": "Modern Gold", "w": 309, "h": 351 },
                    { "f": "gold/Men/Chains/chain1.webp", "t": "Classic Textured Barrel Gold Chain", "tag": "Traditional Gold", "w": 309, "h": 351 },
                    { "f": "gold/Men/Chains/chain3.webp", "t": "Geometric Interlinked Modular Gold Chain", "tag": "Contemporary Gold", "w": 309, "h": 312 },
                    { "f": "gold/Men/Chains/chain5.webp", "t": "Ornate Barrel Motif Gold Chain", "tag": "Traditional Gold", "w": 246, "h": 267 },
                    { "f": "gold/Men/Chains/chain6.webp", "t": "Regal Studded Spacer Gold Chain", "tag": "Bridal Gold", "w": 554, "h": 554 },
                    { "f": "gold/Men/Chains/chain10.webp", "t": "Miami Cuban Link Gold Chain", "tag": "Modern Gold", "w": 246, "h": 267 },
                    { "f": "gold/Men/Chains/chain12.webp", "t": "Interlocking Textured Franco Gold Chain", "tag": "Contemporary Gold", "w": 554, "h": 554 },
                    { "f": "gold/Men/Chains/chain13.webp", "t": "Timeless Twisted Rope Gold Chain", "tag": "Classic Gold", "w": 554, "h": 554 }
                ]
            },
            {
                "title": "Kadas & Bracelets",
                "items": [
                    { "f": "gold/Men/kada/kda-men1.webp", "t": "Gents Gold Kada with Engraved Pattern", "tag": "Gents Kada", "w": 1024, "h": 1024 },
                    { "f": "gold/Men/kada/kda-men3.webp", "t": "Gents Gold Kada with Key Pattern", "tag": "Gents Kada", "w": 262, "h": 350 },
                    { "f": "gold/Men/kada/kda-men4.webp", "t": "Gents Plain Gold Kada", "tag": "Gents Kada", "w": 1254, "h": 1254 },					
                    { "f": "gold/Men/kada/kda-men5.webp", "t": "Gents Gold Kada with box Pattern", "tag": "Gents Kada", "w": 1254, "h": 1254 },
                    { "f": "gold/Men/kada/kda-men2.webp", "t": "Gents Gold Chain Bracelet", "tag": "Gents Bracelet", "w": 368, "h": 473 },
                    { "f": "gold/Men/kada/Bracelet-men1.webp", "t": "Dual-Tone Gold Chain Bracelet with Diamond Accents", "tag": "Gents Bracelet", "w": 262, "h": 350 },
                    { "f": "gold/Men/kada/Bracelet-men2.webp", "t": "Luxury Gold Chain Bracelet with Greek Key Clasp", "tag": "Gents Bracelet", "w": 262, "h": 350 },
                    { "f": "gold/Men/kada/Bracelet-men5.webp", "t": "Luxury Gold Bracelet", "tag": "Gents Bracelet", "w": 262, "h": 350 }
					
                ]
            },
            {
                "title": "Rings",
                "items": [
                    { "f": "gold/Men/rings/ring1.webp", "t": "Gents Gold Aesthetic Ring", "tag": "Gents Gold Ring", "w": 1024, "h": 1024 },
                    { "f": "gold/Men/rings/ring2.webp", "t": "Gents Gold Ring with Box Pattern", "tag": "Gents Gold Ring", "w": 262, "h": 350 },
                    { "f": "gold/Men/rings/ring3.webp", "t": "Gents Ring with Lion Engraved", "tag": "Gents Gold Ring", "w": 1254, "h": 1254 },					
                    { "f": "gold/Men/rings/ring4.webp", "t": "Modern Gents Gold Ring", "tag": "Gents Kada", "w": 1254, "h": 1254 },
                    { "f": "gold/Men/rings/ring5.webp", "t": "Gents Ring with Warrior Engraved", "tag": "Gents Gold Ring", "w": 368, "h": 473 },
                    { "f": "gold/Men/rings/ring6.webp", "t": "Gents Ring with Star Engraved", "tag": "Gents Gold Ring", "w": 262, "h": 350 },
                    { "f": "gold/Men/rings/ring7.webp", "t": "Gents Gold Aesthetic Circular Ring", "tag": "Gents Gold Ring", "w": 262, "h": 350 },
                    { "f": "gold/Men/rings/ring8.webp", "t": "Gents Ring Lord Shiva Engraved", "tag": "Gents Gold Ring", "w": 262, "h": 350 },
                    { "f": "gold/Men/rings/ring9.webp", "t": "Gents Ring Engraved Eagle", "tag": "Gents Gold Ring", "w": 262, "h": 350 },
                    { "f": "gold/Men/rings/ring10.webp", "t": "Aesthetic Gents Gold Ring", "tag": "Gents Gold Ring", "w": 1254, "h": 1254 },					
                    { "f": "gold/Men/rings/ring11.webp", "t": "Om Gold Ring for Gents", "tag": "Gents Gold Ring", "w": 1254, "h": 1254 },
                    { "f": "gold/Men/rings/ring12.webp", "t": "Gents Ring with Zig-Zag", "tag": "Gents Gold Ring", "w": 368, "h": 473 },
                    { "f": "gold/Men/rings/ring13.webp", "t": "Dual-Tone Gents Gold Ring", "tag": "Gents Gold Ring", "w": 262, "h": 350 },
                    { "f": "gold/Men/rings/ring14.webp", "t": "Luxury Gold Ring", "tag": "Gents Gold Ring", "w": 262, "h": 350 },
					
                ]
            }
        ]
    },
    "diamond": {
        "women": [
            {
                "title": "Necklaces & Sets",
                "items": [
                    { "f": "Diamond/Women/Necklaces/Diamond-necklace1.webp", "t": "Emerald Drop Diamond Necklace", "tag": "Light Diamond", "w": 330, "h": 250 },
                    { "f": "Diamond/Women/Necklaces/Diamond-necklace2.webp", "t": "Rose Gold Diamond Necklace", "tag": "Light Diamond", "w": 660, "h": 1024 },
                    { "f": "Diamond/Women/Necklaces/Diamond-necklace3.webp", "t": "Diamond Choker with Earrings", "tag": "Light Diamond", "w": 682, "h": 895 },
                    { "f": "Diamond/Women/Necklaces/Diamond-necklace4.webp", "t": "Layered Diamond Necklace with Earrings", "tag": "Diamond Set", "w": 682, "h": 1024 },
                    { "f": "Diamond/Women/Necklaces/Diamond-necklace5.webp", "t": "Diamond and Sapphire Necklace", "tag": "Light Diamond", "w": 742, "h": 870 },
                    { "f": "Diamond/Women/Necklaces/Diamond-necklace6.webp", "t": "Full Diamond Bridal Set", "tag": "Full Bridal Set", "w": 657, "h": 1024 },
                    { "f": "Diamond/Women/Necklaces/Diamond-necklace7.webp", "t": "Long Diamond Bridal Set with Emeralds", "tag": "Full Bridal Set", "w": 660, "h": 1024 }
                ]
            },
            {
                "title": "Mangalsutras",
                "items": [
				
                    { "f": "gold/Women/Mangalsuttra/mangalsuttra.webp", "t": "Crescent Diamond-Studded Mangalsutra", "tag": "Contemporary", "w": 309, "h": 351 },
                    { "f": "Diamond/Women/Mangalsuttra/mangalsuttra1.webp", "t": "Cascading Diamond Drop Mangalsutra", "tag": " Contemporary", "w": 309, "h": 351 },
                    { "f": "Diamond/Women/Mangalsuttra/mangalsuttra2.webp", "t": "Hexagonal Floral Twin Pendant Mangalsutra", "tag": "Traditional", "w": 309, "h": 351 },
                    { "f": "Diamond/Women/Mangalsuttra/mangalsuttra3.webp", "t": "Graceful Wavy Floral Mangalsutra", "tag": "Lightweight", "w": 309, "h": 351 },
                    { "f": "Diamond/Women/Mangalsuttra/mangalsuttra4.webp", "t": "Intricate Filigree Curve Gold Mangalsutra", "tag": "Traditional", "w": 309, "h": 312 },
                    { "f": "Diamond/Women/Mangalsuttra/mangalsuttra10.webp", "t": "Blooming Floral Cluster Mangalsutra", "tag": "Contemporary", "w": 246, "h": 267 },
                    { "f": "Diamond/Women/Mangalsuttra/mangalsuttra11.webp", "t": "Geometric Drop V-Shaped Mangalsutra", "tag": "Modern Rose Gold", "w": 554, "h": 554 }
                ]
            },
            {
                "title": "Rings",
                "items": [
                    { "f": "Diamond/Women/Rings/ring1.webp", "t": "Diamond Cluster Swirl Ring", "tag": "Diamond Ring", "w": 309, "h": 351 },
                    { "f": "Diamond/Women/Rings/ring3.webp", "t": "Floral Diamond Ring", "tag": "Diamond Ring", "w": 309, "h": 351 },
                    { "f": "Diamond/Women/Rings/ring4.webp", "t": "Diamond Crossover Ring", "tag": "Diamond Ring", "w": 309, "h": 351 },
                    { "f": "Diamond/Women/Rings/ring5.webp", "t": "Slim Diamond Band", "tag": "Diamond Ring", "w": 309, "h": 312 },
                    { "f": "Diamond/Women/Rings/ring6.webp", "t": "Rose Gold Diamond Cocktail Ring", "tag": "Diamond Ring", "w": 246, "h": 267 },
                    { "f": "Diamond/Women/Rings/ring7.webp", "t": "Tiered Diamond Cocktail Ring", "tag": "Diamond Ring", "w": 554, "h": 554 },
                    { "f": "Diamond/Women/Rings/ring8.webp", "t": "Halo Diamond Ring", "tag": "Diamond Ring", "w": 447, "h": 447 },
                    { "f": "Diamond/Women/Rings/ring9.webp", "t": "Two-Tone Square Diamond Ring", "tag": "Diamond Ring", "w": 450, "h": 600 },
                    { "f": "Diamond/Women/Rings/ring11.webp", "t": "Cushion Halo Diamond Ring", "tag": "Diamond Ring", "w": 450, "h": 450 }
                ]
            }
        ],
        "men": [
            {
                "title": "Rings",
                "items": [
                    { "f": "Diamond/Men/rings/Gents_ring1.webp", "t": "Gents Diamond Signet Ring", "tag": "Gents Diamond Ring", "w": 309, "h": 351 },
                    { "f": "Diamond/Men/rings/Gents_ring2.webp", "t": "Gents Diamond Halo Band Ring", "tag": "Gents Diamond Ring", "w": 309, "h": 351 },
                    { "f": "Diamond/Men/rings/Gents_ring3.webp", "t": "Gents Baguette Diamond Ring", "tag": "Gents Diamond Ring", "w": 450, "h": 465 },
                    { "f": "Diamond/Men/rings/Gents_ring4.webp", "t": "Gents Solitaire Ring", "tag": "Gents Diamond Ring", "w": 447, "h": 447 },
                    { "f": "Diamond/Men/rings/Gents_ring5.webp", "t": "Gents Diamond Band Ring", "tag": "Gents Diamond Ring", "w": 1600, "h": 1600 }
                ]
            }
        ]
    }
};

const SILVER = [
    {
        "id": "bartan",
        "label": "Bartan & Coins",
        "intro": "Silver thali, glass, jug and bowl for puja and gifting, with silver coins.",
        "items": [
            {
                "f": "Silver/Bartan/silverCoins_Bartan.webp",
                "t": "Silver Puja Set & Coins",
                "tag": "Silver Bartan",
                "w": 1536,
                "h": 1024,
                "d": "Silver thali, glass, jug and bowl for puja and gifting, with silver coins. Message us on WhatsApp for weight and today's price."
            }
        ]
    },
    {
        "id": "payals",
        "label": "Payals",
        "intro": "Silver payals in light and heavy designs.",
        "items": [
            {
                "f": "Silver/Payal/Payals.webp",
                "t": "Silver Payal Collection",
                "tag": "Silver Payal",
                "w": 1125,
                "h": 587,
                "d": "Silver payals in light and heavy designs. Message us on WhatsApp for weight and today's price."
            }
        ]
    },
	{
        "id": "Bichiya",
        "label": "Bichiya",
        "intro": "Silver Bichiyas in light and heavy designs..",
        "items": [
            {
                "f": "Silver/Bichiya/Bichiya.webp",
                "t": "Silver Bichiya Collection",
                "tag": "Silver Bichiya",
                "w": 1536,
                "h": 1024,
                "d": "Silver Bichiyas in light and heavy designs. Message us on WhatsApp for weight and today's price."
            }
        ]
    }
];

const HOME_TILES = [
    { "f": "gold/Women/Necklaces/Antique-necklace5.webp", "label": "Gold Jewellery", "sub": "Antique & Lightweight Collection", "metal": "gold", "gender": "women" },
    { "f": "Diamond/Women/Necklaces/Diamond-necklace4.webp", "label": "Diamond Jewellery", "sub": "Kisna Diamond Collection", "metal": "diamond", "gender": "women" },
    { "f": "Silver/Bartan/silverCoins_Bartan.webp", "label": "Silver Collection", "sub": "Bartan, Coins & Payals", "metal": "silver", "gender": null, "pos": "30% center" }
];

const METAL_LABEL = { gold: "Gold", diamond: "Diamond", silver: "Silver" };
const GENDER_LABEL = { women: "For Her", men: "For Him" };
const METAL_INTRO = {
    gold: "Antique and lightweight collection for women and men.",
    diamond: "Kisna diamond collection for women and men.",
    silver: "Silver bartan and coins, and payals."
};
