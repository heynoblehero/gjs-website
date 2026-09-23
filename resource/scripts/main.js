const state = { metal: "gold", gender: "women", silverSection: "" };
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function injectCommonLayouts(activePage) {
    const headerEl = document.getElementById("site-header");
	
    
    if (headerEl) {
    headerEl.innerHTML = `
        <div class="text-gold-300 text-xs sm:text-sm py-2 px-4 border-b border-gold-500/20">
            <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-1 sm:gap-4">
                <div class="flex items-center space-x-3">
                    <span class="bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded-full text-xs font-medium border border-gold-500/40">✨ Authorized Distributor</span>
                    <span>India's No. 1 Diamond King - <strong>Kisna Diamond</strong></span>
                </div>
                <div class="flex items-center space-x-4 text-xs">
					<span class="bg-gold-500 text-burgundy-900 font-bold px-3 py-1 rounded-md shadow-md border border-gold-700 hover:bg-gold-400 hover:scale-105 transition-transform">
						<i class="fa-solid fa-percent mr-1"></i> Flat 8% Making Charges
					</span>
                    <span class="hidden md:inline">•</span>
                    <span><i class="fa-solid fa-award text-gold-400 mr-1"></i> 45+ Years of Trust</span>
                    <span>•</span>
                    <a href="tel:+919821756547" class="hover:text-white transition-colors"><i class="fa-solid fa-phone text-gold-400 mr-1"></i> Ghaziabad Showrooms</a>
                </div>
            </div>
        </div>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-20">
                    <a href="/" class="flex items-center space-x-3 group">
                        <div class="relative w-20 sm:w-24 h-auto flex items-center justify-center">
                            <img src="/resource/images/Logo-removebg.png" alt="Gorri Jewellers and Sons Logo" class="w-full h-full object-contain">
                        </div>
                        <div>
                            <span class="font-serif text-3xl sm:text-4xl font-bold gold-gradient-text">Gorri Jewellers & Sons</span>
                        </div>
                    </a>

                    <nav class="hidden md:flex items-center space-x-8 text-sm font-medium">
                        <a href="/" id="nav-home" class="nav-btn ${activePage==='home'?'text-gold-400 border-gold-500':'text-gray-300 border-transparent'} hover:text-gold-300 transition-colors py-2 border-b-2">Home</a>
                        <a href="/about/" id="nav-about" class="nav-btn ${activePage==='about'?'text-gold-400 border-gold-500':'text-gray-300 border-transparent'} hover:text-gold-300 transition-colors py-2 border-b-2">About Us</a>
                        <a href="/collections/" id="nav-collections" class="nav-btn ${activePage==='collections'?'text-gold-400 border-gold-500':'text-gray-300 border-transparent'} hover:text-gold-300 transition-colors py-2 border-b-2">Jewellery Collections</a>
                        <a href="/stores/" id="nav-stores" class="nav-btn ${activePage==='stores'?'text-gold-400 border-gold-500':'text-gray-300 border-transparent'} hover:text-gold-300 transition-colors py-2 border-b-2">Our Stores</a>
                    </nav>

                    <div class="flex items-center space-x-3">
                        <a href="https://wa.me/919821756547?text=Hello%20GJS%20Jewellers,%20I%20would%20like%20to%20inquire%20about%20your%20jewellery%20collection." target="_blank" rel="noopener" class="hidden sm:inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg transition-transform active:scale-95">
                            <i class="fa-brands fa-whatsapp text-lg"></i>
                            <span>WhatsApp Us</span>
                        </a>

                        <button id="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Open menu" class="md:hidden text-gold-400 hover:text-white p-2 rounded-md focus:outline-none">
                            <i class="fa-solid fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div id="mobile-menu" class="hidden md:hidden bg-burgundy-950 border-b border-gold-500/30 px-4 pt-3 pb-6 space-y-3">
                <a href="/" class="block w-full text-left py-2 px-3 rounded-md text-gold-300 font-medium hover:bg-burgundy-900">Home</a>
                <a href="/about/" class="block w-full text-left py-2 px-3 rounded-md text-gray-200 font-medium hover:bg-burgundy-900">About Us</a>
                <a href="/collections/" class="block w-full text-left py-2 px-3 rounded-md text-gray-200 font-medium hover:bg-burgundy-900">Jewellery Collections</a>
                <a href="/stores/" class="block w-full text-left py-2 px-3 rounded-md text-gray-200 font-medium hover:bg-burgundy-900">Our Stores & Directions</a>
                <div class="pt-2 border-t border-gold-500/20 flex flex-col gap-2">
                    <a href="https://wa.me/919821756547?text=Hello%20GJS%20Jewellers,%20I%20would%20like%20to%20inquire%20about%20your%20jewellery%20collection." target="_blank" rel="noopener" class="flex items-center justify-center space-x-2 bg-emerald-600 text-white py-2.5 rounded-lg text-sm font-semibold">
                        <i class="fa-brands fa-whatsapp text-lg"></i>
                        <span>Connect on WhatsApp</span>
                    </a>
                </div>
            </div>`;
}
    const footerEl = document.getElementById("site-footer");
    if (footerEl) {
        footerEl.innerHTML = `
        <footer class="bg-burgundy-950 text-white border-t border-gold-500/30 pt-12 pb-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-gold-500/20">
                    <div class="space-y-3">
                        <div class="flex items-center space-x-2">
                            <div class="w-8 h-8 rounded-full border border-gold-500 flex items-center justify-center bg-burgundy-900">
                                <span class="font-serif font-bold text-gold-400 text-xs">GJS</span>
                            </div>
                            <span class="font-serif text-lg font-bold gold-gradient-text">Gorri Jewellers & Sons</span>
                        </div>
                        <p class="text-xs text-gray-400 leading-relaxed font-light">
                            Ghaziabad's premier destination for 100% hallmarked gold, Kisna diamonds, antique jewellery, and silver ornaments with flat 8% making charges.
                        </p>
                    </div>
                    <div>
                        <h4 class="font-serif font-bold text-gold-300 text-sm mb-3">Quick Navigation</h4>
                        <ul class="space-y-2 text-xs text-gray-300">
                            <li><a href="/" class="hover:text-gold-400">Home Page</a></li>
                            <li><a href="/about/" class="hover:text-gold-400">Our 45-Year Heritage</a></li>
                            <li><a href="/collections/" class="hover:text-gold-400">Jewellery Catalog</a></li>
                            <li><a href="/stores/" class="hover:text-gold-400">Showrooms & Directions</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-serif font-bold text-gold-300 text-sm mb-3">Our Collections</h4>
                        <ul class="space-y-2 text-xs text-gray-300">
                            <li><a href="/collections/" class="hover:text-gold-400">Antique and Plain Gold Collection</a></li>
                            <li><a href="/collections/" class="hover:text-gold-400">Diamond Collection</a></li>
                            <li><a href="/collections/" class="hover:text-gold-400">Silver Collection</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="font-serif font-bold text-gold-300 text-sm mb-3">Showroom Locations</h4>
                        <div class="space-y-2 text-xs text-gray-200">
                            <p><strong>Branch 1:</strong> Ground Floor, M-41, Sector 12, Pratap Vihar, Ghaziabad, <br> <strong>Contact:</strong> +91 82876 80527</p>
                            <br>
                            <p><strong>Branch 2:</strong> Shop E-220, Sector 12, Vijay Nagar, Ghaziabad, <br> <strong>Contact:</strong> +91 98105 94805 / +91 98217 56547</p>
                            <p class="pt-1 text-gold-400">Open Wed-Mon: 10:30 AM - 9:30 PM</p>
                        </div>
                    </div>
                </div>
                <div class="pt-6 text-center text-xs text-gray-400 space-y-1.5">
                    <p>&copy; 2026 Gorri Jewellers and Sons (GJS). All rights reserved.</p>
                    <p class="text-[11px]">Crafted with trust & honesty for Ghaziabad.</p>
                </div>
            </div>
        </footer>`;
    }
}

function waLink(item, path) {
    const text = `Hello Gorri Jewellers & Sons, I am interested in "${item.t}" (${path}). Please share details and price.`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

const chipBase = "shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-colors border cursor-pointer";
const chipOn = "bg-burgundy-900 text-gold-300 border-burgundy-900";
const chipOff = "bg-white text-burgundy-900 border-gold-500/40 hover:bg-gold-500/15";

function makeCard(item, path) {
    const card = document.createElement("article");
    card.className = "bg-white rounded-xl border border-gold-500/20 overflow-hidden shadow-sm flex flex-col h-full hover:shadow-lg hover:scale-105 transition-transform";
    card.innerHTML = `
        <button type="button" class="block w-full bg-creamDark overflow-hidden h-56 sm:h-64 flex items-center justify-center p-3" data-open aria-label="View ${esc(item.t)}">
            <img src="${IMG_DIR}${esc(item.f)}" alt="${esc(item.t)}" loading="lazy" decoding="async" class="w-full h-full object-contain mx-auto block">
        </button>
        <div class="p-4 space-y-3 flex-1 flex flex-col justify-between">
            <div>
                <span class="inline-block text-[10px] font-semibold text-gold-700 bg-gold-500/15 px-2.5 py-0.5 rounded-full">${esc(item.tag)}</span>
                <h4 class="font-serif font-bold text-sm sm:text-base leading-snug text-burgundy-900 mt-1.5">
                    <button type="button" data-open class="text-left hover:text-gold-700 transition-colors">${esc(item.t)}</button>
                </h4>
            </div>
            <a href="${waLink(item, path)}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 pt-1">
                <i class="fa-brands fa-whatsapp text-base"></i> Ask on WhatsApp
            </a>
        </div>`;
    card.querySelectorAll("[data-open]").forEach((b) => b.addEventListener("click", () => openModal(item, path)));
    return card;
}

function makeGrid(items, path) {
    const grid = document.createElement("div");
    grid.className = "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6";
    items.forEach((item) => grid.appendChild(makeCard(item, path)));
    return grid;
}

function gendersFor(metal) { return ["women", "men"].filter((g) => CATALOG[metal] && CATALOG[metal][g] && CATALOG[metal][g].length > 0); }

function renderMetal(sub, out) {
    const genders = gendersFor(state.metal);
    if (!genders.includes(state.gender)) state.gender = genders[0];

    genders.forEach((g) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `${chipBase} ${g === state.gender ? chipOn : chipOff}`;
        btn.textContent = GENDER_LABEL[g];
        btn.addEventListener("click", () => { state.gender = g; renderCollections(); });
        sub.appendChild(btn);
    });

    const head = document.createElement("div");
    head.className = "border-b border-gold-500/30 pb-4 mb-6";
    head.innerHTML = `<h2 class="font-serif text-3xl font-bold text-burgundy-900 flex items-center gap-2">
            <i class="fa-solid ${state.metal === "gold" ? "fa-crown" : "fa-gem"} text-gold-600"></i>
            ${METAL_LABEL[state.metal]} Jewellery for ${GENDER_LABEL[state.gender]}</h2>
        <p class="text-sm text-gray-600 mt-1">${esc(METAL_INTRO[state.metal])}</p>`;
    out.appendChild(head);

    const sections = CATALOG[state.metal][state.gender] || [];
    sections.forEach((sec) => {
        const secWrap = document.createElement("div");
        secWrap.className = "mb-10";
        const secHead = document.createElement("div");
        secHead.className = "flex items-center gap-x-3 border-l-4 border-gold-500 pl-3 mb-5";
        secHead.innerHTML = `<h3 class="font-serif text-xl sm:text-2xl font-bold text-burgundy-800">${esc(sec.title)}</h3>`;
        secWrap.appendChild(secHead);
        const path = `${METAL_LABEL[state.metal]}, ${GENDER_LABEL[state.gender]} - ${sec.title}`;
        secWrap.appendChild(makeGrid(sec.items, path));
        out.appendChild(secWrap);
    });
}

function makeSilverFeature(sec, flip) {
    const item = sec.items[0];
    const path = `Silver, ${sec.label}`;
    const box = document.createElement("div");
    box.className = "grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl border border-gold-500/20 overflow-hidden shadow-sm items-center";
    box.innerHTML = `
        <button type="button" data-open class="block bg-creamDark overflow-hidden p-6 h-80 sm:h-96 flex items-center justify-center ${flip ? "lg:order-2" : ""}" aria-label="View ${esc(item.t)}">
            <img src="${IMG_DIR}${esc(item.f)}" alt="${esc(item.t)}" loading="lazy" decoding="async" class="w-full h-full object-contain mx-auto block">
        </button>
        <div class="p-6 sm:p-10 flex flex-col justify-center gap-4">
            <span class="self-start text-[10px] font-semibold text-gold-700 bg-gold-500/15 px-2.5 py-0.5 rounded-full">${esc(item.tag)}</span>
            <h4 class="font-serif text-2xl sm:text-3xl font-bold text-burgundy-900">${esc(item.t)}</h4>
            <p class="text-sm text-gray-600 leading-relaxed max-w-md">${esc(item.d || sec.intro)}</p>
            <div class="flex flex-wrap gap-3 pt-2">
                <a href="${waLink(item, path)}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-lg text-xs transition-colors">
                    <i class="fa-brands fa-whatsapp text-base"></i> Ask for price on WhatsApp
                </a>
                <button type="button" data-open class="border border-gold-500/60 text-burgundy-900 hover:bg-gold-500/15 font-semibold px-5 py-2.5 rounded-lg text-xs transition-colors">View photo</button>
            </div>
        </div>`;
    box.querySelectorAll("[data-open]").forEach((b) => b.addEventListener("click", () => openModal(item, path)));
    return box;
}

function renderSilver(sub, out) {
    const sections = SILVER.filter((s) => s.items.length);
    if (!state.silverSection && sections.length) state.silverSection = sections[0].id;

    sections.forEach((sec) => {
        const btn = document.createElement("button");
        btn.type = "button";
        const isActive = state.silverSection === sec.id;
        btn.className = `${chipBase} ${isActive ? chipOn : chipOff}`;
        btn.textContent = sec.label;
        btn.addEventListener("click", () => {
            state.silverSection = sec.id;
            sub.querySelectorAll("button").forEach((b, idx) => {
                const targetSec = sections[idx];
                const active = targetSec.id === sec.id;
                b.className = `${chipBase} ${active ? chipOn : chipOff}`;
            });
            const el = document.getElementById("silver-" + sec.id);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        sub.appendChild(btn);
    });

    const head = document.createElement("div");
    head.className = "border-b border-gold-500/30 pb-4 mb-6";
    head.innerHTML = `<h2 class="font-serif text-3xl font-bold text-burgundy-900 flex items-center gap-2">
            <i class="fa-solid fa-coins text-gold-600"></i> Silver Collection</h2>
        <p class="text-sm text-gray-600 mt-1">${esc(METAL_INTRO.silver)}</p>`;
    out.appendChild(head);

    sections.forEach((sec, i) => {
        const section = document.createElement("section");
        section.id = "silver-" + sec.id;
        section.className = "scroll-mt-24 md:scroll-mt-52 mb-10";
        const wrap = document.createElement("div");
        wrap.className = "flex flex-wrap items-baseline gap-x-3 gap-y-1 border-l-4 border-gold-500 pl-3 mb-6";
        wrap.innerHTML = `<h3 class="font-serif text-2xl font-semibold text-burgundy-800">${esc(sec.label)}</h3>`;
        section.appendChild(wrap);
        section.appendChild(sec.items.length === 1 ? makeSilverFeature(sec, i % 2 === 1) : makeGrid(sec.items, `Silver, ${sec.label}`));
        out.appendChild(section);
    });
}

function renderCollections() {
    document.querySelectorAll(".main-cat-tab").forEach((btn) => {
        const on = btn.dataset.metal === state.metal;
        btn.classList.toggle("bg-burgundy-900", on);
        btn.classList.toggle("text-gold-300", on);
        btn.classList.toggle("shadow", on);
        btn.classList.toggle("bg-cream", !on);
        btn.classList.toggle("text-burgundy-900", !on);
        btn.classList.toggle("hover:bg-gold-500/20", !on);
    });
    const sub = $("sub-nav"), out = $("catalog");
    if (!sub || !out) return;
    sub.innerHTML = "";
    out.innerHTML = "";
    if (state.metal === "silver") renderSilver(sub, out); else renderMetal(sub, out);
}

function switchMainCategory(metal) {
    state.metal = metal;
    if (metal !== "silver") state.silverSection = "";
    renderCollections();
}

function openCollection(metal, gender) {
    window.location.href = `/collections/?metal=${metal}&gender=${gender || 'women'}`;
}

function renderHomeTiles() {
    const wrap = $("home-tiles");
    if (!wrap) return;
    HOME_TILES.forEach((tile) => {
        const btn = document.createElement("button");
        btn.type.metal = tile.metal;
        btn.type = "button";
        btn.className = "group relative overflow-hidden rounded-xl h-64 sm:h-80 text-left border border-gold-500/30 bg-burgundy-950 flex flex-col justify-end";
        btn.innerHTML = `
            <img src="${IMG_DIR}${esc(tile.f)}" alt="" loading="lazy" decoding="async" class="absolute inset-0 w-full h-full object-cover" style="object-position:${tile.pos || "center"}">
            <div class="absolute inset-0 bg-gradient-to-t from-burgundy-950/90 via-burgundy-950/10 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-5">
                <span class="font-serif text-lg sm:text-xl font-semibold text-white block leading-snug">${esc(tile.label)}</span>
                <span class="text-xs text-gold-300 mt-0.5 block">${esc(tile.sub)}</span>
            </div>`;
        btn.addEventListener("click", () => openCollection(tile.metal, tile.gender));
        wrap.appendChild(btn);
    });
}

function toggleMobileMenu() {
    const menu = $("mobile-menu");
    if (menu) menu.classList.toggle("hidden");
}

let lastFocus = null;

function openModal(item, path) {
    const modal = $("product-modal");
    if (!modal) return;
    $("modal-img").src = IMG_DIR + item.f;
    $("modal-img").alt = item.t;
    $("modal-title").textContent = item.t;
    $("modal-tag").textContent = item.tag;
    $("modal-path").textContent = path;
    $("modal-desc").textContent = item.d || "Visit our showroom or message us on WhatsApp for weight, purity and today's price.";
    $("modal-wa-link").href = waLink(item, path);
	
    lastFocus = document.activeElement;
    modal.classList.add("flex");
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    const closeBtn = $("modal-close");
    if (closeBtn) closeBtn.focus();
}

function closeModal() {
    const modal = $("product-modal");
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
}

document.addEventListener("DOMContentLoaded", () => {
    const modal = $("product-modal");
    if (modal) {
        modal.addEventListener("click", (e) => { if (e.target === e.currentTarget) closeModal(); });
    }
});
document.addEventListener("keydown", (e) => {
    const modal = $("product-modal");
    if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) closeModal();
});
