const state = { metal: "gold", gender: "women", silverSection: "", section: "", query: "" };
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function injectCommonLayouts(activePage) {
    const headerEl = document.getElementById("site-header");
	
    
    if (headerEl) {
    headerEl.innerHTML = `
        <div class="text-gold-300 text-xs sm:text-sm py-2 px-4 border-b border-gold-500/20">
            <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-1 sm:gap-4">
                <div class="flex items-center space-x-3">
                    <span class="bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded-full text-xs font-medium border border-gold-500/40">Ghaziabad</span>
                    <span>Gold, diamond & silver jewellery</span>
                </div>
                <div class="flex items-center space-x-4 text-xs">
					<span class="bg-gold-500/15 text-gold-200 font-medium px-3 py-1 rounded-md border border-gold-500/30">
						<i class="fa-solid fa-tag mr-1"></i> Ask about current pricing
					</span>
                    <span class="hidden md:inline">•</span>
                    <span><i class="fa-solid fa-award text-gold-400 mr-1"></i> Serving since 1980</span>
                    <span>•</span>
                    <a href="tel:+919821756547" class="hover:text-white transition-colors"><i class="fa-solid fa-phone text-gold-400 mr-1"></i> Ghaziabad Showrooms</a>
                </div>
            </div>
        </div>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-20">
                    <a href="index.html" class="flex items-center space-x-3 group">
                        <div class="relative w-20 sm:w-24 h-auto flex items-center justify-center">
                            <img src="resource/images/Logo.webp" alt="Gorri Jewellers and Sons Logo" class="w-full h-full object-contain">
                        </div>
                        <div>
                            <span class="font-serif text-xl sm:text-2xl font-bold gold-gradient-text">Gorri Jewellers & Sons</span>
                        </div>
                    </a>

                    <nav class="hidden md:flex items-center space-x-8 text-sm font-medium">
                        <a href="index.html" id="nav-home" class="nav-btn ${activePage==='home'?'text-gold-400 border-gold-500':'text-gray-300 border-transparent'} hover:text-gold-300 transition-colors py-2 border-b-2">Home</a>
                        <a href="about.html" id="nav-about" class="nav-btn ${activePage==='about'?'text-gold-400 border-gold-500':'text-gray-300 border-transparent'} hover:text-gold-300 transition-colors py-2 border-b-2">About Us</a>
                        <a href="collections.html" id="nav-collections" class="nav-btn ${activePage==='collections'?'text-gold-400 border-gold-500':'text-gray-300 border-transparent'} hover:text-gold-300 transition-colors py-2 border-b-2">Jewellery Collections</a>
                        <a href="stores.html" id="nav-stores" class="nav-btn ${activePage==='stores'?'text-gold-400 border-gold-500':'text-gray-300 border-transparent'} hover:text-gold-300 transition-colors py-2 border-b-2">Our Stores</a>
                    </nav>

                    <div class="flex items-center space-x-3">
                        <a href="https://wa.me/919821756547?text=Hello%20GJS%20Jewellers,%20I%20would%20like%20to%20inquire%20about%20your%20jewellery%20collection." target="_blank" rel="noopener" class="hidden sm:inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg transition-transform active:scale-95">
                            <i class="fa-brands fa-whatsapp text-lg"></i>
                            <span>WhatsApp Us</span>
                        </a>

                        <button id="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobile-menu" class="md:hidden text-gold-400 hover:text-white p-2 rounded-md focus:outline-none">
                            <i class="fa-solid fa-bars text-2xl"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div id="mobile-menu" class="hidden md:hidden bg-burgundy-950 border-b border-gold-500/30 px-4 pt-3 pb-6 space-y-3">
                <a href="index.html" class="block w-full text-left py-2 px-3 rounded-md text-gold-300 font-medium hover:bg-burgundy-900">Home</a>
                <a href="about.html" class="block w-full text-left py-2 px-3 rounded-md text-gray-200 font-medium hover:bg-burgundy-900">About Us</a>
                <a href="collections.html" class="block w-full text-left py-2 px-3 rounded-md text-gray-200 font-medium hover:bg-burgundy-900">Jewellery Collections</a>
                <a href="stores.html" class="block w-full text-left py-2 px-3 rounded-md text-gray-200 font-medium hover:bg-burgundy-900">Our Stores & Directions</a>
            </div>`;
}
    const actionBar = document.createElement("nav");
    actionBar.className = "mobile-action-bar md:hidden";
    actionBar.setAttribute("aria-label", "Quick showroom actions");
    actionBar.innerHTML = `
        <a href="tel:+918287680527"><i class="fa-solid fa-phone" aria-hidden="true"></i><span>Call</span></a>
        <a href="stores.html#pratap-vihar"><i class="fa-solid fa-diamond-turn-right" aria-hidden="true"></i><span>Directions</span></a>
        <a href="https://wa.me/919821756547?text=Hello%20GJS%20Jewellers%2C%20I%20would%20like%20to%20ask%20about%20your%20jewellery%20collection." target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i><span>WhatsApp</span></a>`;
    document.body.appendChild(actionBar);
    const footerEl = document.getElementById("site-footer");
if (footerEl) {
    footerEl.innerHTML = `
    <footer class="bg-burgundy-950 text-white border-t border-gold-500/30 pt-8 pb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- 3 Clean Main Columns Layout with Fixed Spacing -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-4 pb-4 border-b border-gold-500/25 items-start">
                
                <!-- Column 1: Brand Info & Timings nicely placed here -->
                <div class="space-y-4">
                    <div class="flex items-center space-x-3">
                        <div class="w-9 h-9 rounded-full border border-gold-500 flex items-center justify-center bg-burgundy-900 shrink-0">
						<img src="resource/images/GJS-SecondLogo.webp" alt="Gorri Jewellers and Sons Logo" class="w-full h-full object-contain">
                        </div>
                        <span class="font-serif text-lg font-bold gold-gradient-text">Gorri Jewellers & Sons</span>
                    </div>
                    <p class="text-xs text-gray-300 leading-relaxed font-light">
                        Explore gold, diamond and silver jewellery at our Pratap Vihar and Vijay Nagar showrooms. Contact us for product details and current pricing.
                    </p>
                    <div class="pt-1">
                        <span class="inline-block text-xs text-gold-400 font-medium bg-gold-500/10 px-3 py-2 rounded border border-gold-500/20">
                            <i class="fa-regular fa-clock mr-1"></i> Store hours: 10:30 AM - 9:30 PM, Tuesday closed
                        </span>
                    </div>
                </div>

                <!-- Column 2: Navigation & Collections Side-by-Side -->
                <div class="grid grid-cols-2 gap-6">
                    <div class="space-y-4">
                        <h4 class="font-serif font-bold text-gold-300 text-sm mb-3 pb-1 border-b border-gold-500/30 inline-block">Navigation</h4>
                        <ul class="space-y-3 text-xs text-gray-300">
                            <li><a href="index.html" class="hover:text-gold-400 block transition-transform duration-200 hover:translate-x-1 py-0.5">Home Page</a></li>
                            <li><a href="about.html" class="hover:text-gold-400 block transition-transform duration-200 hover:translate-x-1 py-0.5">Our Heritage</a></li>
                            <li><a href="collections.html" class="hover:text-gold-400 block transition-transform duration-200 hover:translate-x-1 py-0.5">Jewellery Catalog</a></li>
                            <li><a href="stores.html" class="hover:text-gold-400 block transition-transform duration-200 hover:translate-x-1 py-0.5">Showrooms</a></li>
                        </ul>
                    </div>
                    <div class="space-y-4">
                        <h4 class="font-serif font-bold text-gold-300 text-sm mb-3 pb-1 border-b border-gold-500/30 inline-block">Collections</h4>
                        <ul class="space-y-3 text-xs text-gray-300">
                            <li><button onclick="openCollection('gold')" class="hover:text-gold-400 block transition-transform duration-200 hover:translate-x-1 py-0.5">Gold Jewellery</button></li>
                            <li><button onclick="openCollection('diamond')" class="hover:text-gold-400 block transition-transform duration-200 hover:translate-x-1 py-0.5">Diamond Collection</button></li>
                            <li><button onclick="openCollection('silver')" class="hover:text-gold-400 block transition-transform duration-200 hover:translate-x-1 py-0.5">Silver Ornaments</button></li>
                        </ul>
                    </div>
                </div>

                <!-- Column 3: Showroom Locations -->
                <div class="space-y-4">
                    <h4 class="font-serif font-bold text-gold-300 text-sm mb-3 pb-1 border-b border-gold-500/30 inline-block">Showroom Locations</h4>
                    <div class="space-y-3 text-xs text-gray-300">
                        <div>
                            <strong class="text-gold-300 block mb-0.5">Pratap Vihar</strong>
                            <p class="text-gray-400">Ground Floor, M-41, Sector 12, Pratap Vihar, Ghaziabad</p>
                            <div class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                                <a href="tel:+918287680527" class="hover:text-gold-400"><i class="fa-solid fa-phone text-gold-400 mr-1"></i> +91 82876 80527</a>
                                <a href="https://www.google.com/maps/dir//Ground+Floor,+Gorri+Jewellers+and+Sons's+-+Best+Jewellers+In+Ghaziabad,+M-41,+near+VDS+Convent+and+First+Cry+Showroom,+Sector+12,+Block+M,+Pratap+Vihar,+Ghaziabad,+Uttar+Pradesh+201009/" target="_blank" rel="noopener" class="text-gold-400 hover:underline inline-flex items-center gap-1"><i class="fa-solid fa-location-dot"></i> Map</a>
                            </div>
                        </div>
                        <div>
                            <strong class="text-gold-300 block mb-0.5">Vijay Nagar</strong>
                            <p class="text-gray-400">Shop E-220, Sector 12, Vijay Nagar, Ghaziabad</p>
                            <div class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                                <a href="tel:+919810594805" class="hover:text-gold-400"><i class="fa-solid fa-phone text-gold-400 mr-1"></i> +91 98105 94805</a>
                                <a href="tel:+919821756547" class="hover:text-gold-400"><i class="fa-solid fa-phone text-gold-400 mr-1"></i> +91 98217 56547</a>
                                <a href="https://www.google.com/maps/dir//Gorri+Jewellers+-+best+jewellers+in+Ghaziabad+best+jewellery+shop+in+Vijay+Nagar+ghaziabad,+Shop+No.+E,+220,+Gaushala+Rd,+Sector+12,+Mirzapur,+Pratap+Vihar,+Ghaziabad,+Uttar+Pradesh+201001/" target="_blank" rel="noopener" class="text-gold-400 hover:underline inline-flex items-center gap-1"><i class="fa-solid fa-location-dot"></i> Map</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Copyright Section -->
            <div class="pt-6 text-center text-xs text-gray-400 space-y-1.5">
                <p>&copy; 2026 Gorri Jewellers and Sons (GJS). All rights reserved.</p>
                <p class="text-[11px]">Crafted with trust & honesty. <a href="image-credits.html" class="text-gold-300 underline">Image credits</a></p>
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
    card.className = "catalog-card bg-white rounded-xl border border-gold-500/20 overflow-hidden shadow-sm flex flex-col h-full";
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
                <i class="fa-brands fa-whatsapp text-base"></i> Ask about this design
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
        btn.setAttribute("aria-pressed", String(g === state.gender));
        btn.addEventListener("click", () => { state.gender = g; state.section = ""; renderCollections(); });
        sub.appendChild(btn);
    });
    const sections = CATALOG[state.metal][state.gender] || [];
    const secNav = $("section-nav");
    if (secNav) {
        if (!sections.some((sec) => sec.title === state.section)) state.section = sections[0]?.title || "";
        sections.forEach((sec) => {
            const btn = document.createElement("button");
            btn.type = "button";
            const active = sec.title === state.section;
            btn.className = `${chipBase} text-[11px] ${active ? chipOn : chipOff}`;
            btn.textContent = `${sec.title} (${sec.items.length})`;
            btn.setAttribute("aria-pressed", String(active));
            btn.addEventListener("click", () => { state.section = sec.title; renderCollections(); });
            secNav.appendChild(btn);
        });
    }
    const head = document.createElement("div");
    head.className = "border-b border-gold-500/30 pb-4 mb-6";
    head.innerHTML = `<h2 class="font-serif text-3xl font-bold text-burgundy-900">${esc(METAL_LABEL[state.metal])} Jewellery ${esc(GENDER_LABEL[state.gender])}</h2>
        <p class="text-sm text-gray-600 mt-1">${esc(METAL_INTRO[state.metal])}</p>`;
    out.appendChild(head);
    const activeSection = sections.find((sec) => sec.title === state.section);
    if (activeSection) {
        const wrap = document.createElement("section");
        wrap.innerHTML = `<h3 class="font-serif text-xl sm:text-2xl font-bold text-burgundy-800 border-l-4 border-gold-500 pl-3 mb-5">${esc(activeSection.title)}</h3>`;
        wrap.appendChild(makeGrid(activeSection.items, `${METAL_LABEL[state.metal]}, ${GENDER_LABEL[state.gender]} - ${activeSection.title}`));
        out.appendChild(wrap);
    }
}

function renderSearchResults(out) {
    const query = state.query.trim().toLocaleLowerCase();
    const groups = [];
    for (const metal of ["gold", "diamond"]) {
        for (const gender of gendersFor(metal)) {
            for (const sec of CATALOG[metal][gender]) {
                const path = `${METAL_LABEL[metal]}, ${GENDER_LABEL[gender]} - ${sec.title}`;
                const items = sec.items.filter(item => `${item.t} ${item.tag} ${path}`.toLocaleLowerCase().includes(query));
                if (items.length) groups.push({path, items});
            }
        }
    }
    for (const sec of SILVER) {
        const path = `Silver, ${sec.label}`;
        const items = sec.items.filter(item => `${item.t} ${item.tag} ${path}`.toLocaleLowerCase().includes(query));
        if (items.length) groups.push({path, items});
    }
    const count = groups.reduce((total, group) => total + group.items.length, 0);
    const heading = document.createElement("div");
    heading.innerHTML = `<h2 class="font-serif text-2xl sm:text-3xl font-bold text-burgundy-900">Search results</h2><p class="text-sm text-gray-600 mt-1">${count} design${count === 1 ? "" : "s"} for “${esc(state.query.trim())}”</p>`;
    out.appendChild(heading);
    for (const group of groups) {
        const section = document.createElement("section");
        section.innerHTML = `<h3 class="font-serif text-xl font-bold text-burgundy-800 border-l-4 border-gold-500 pl-3 mb-5">${esc(group.path)}</h3>`;
        section.appendChild(makeGrid(group.items, group.path));
        out.appendChild(section);
    }
    if (!count) out.insertAdjacentHTML("beforeend", '<p class="catalog-empty">No designs found. Try another design name or category.</p>');
    const status = $("catalog-search-status");
    if (status) status.textContent = `${count} catalogue designs found`;
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
                    <i class="fa-brands fa-whatsapp text-base"></i> Ask about this design
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
        btn.setAttribute("aria-pressed", String(isActive));
        btn.addEventListener("click", () => {
            state.silverSection = sec.id;
            sub.querySelectorAll("button").forEach((b, idx) => {
                const targetSec = sections[idx];
                const active = targetSec.id === sec.id;
                b.className = `${chipBase} ${active ? chipOn : chipOff}`;
                b.setAttribute("aria-pressed", String(active));
            });
            const el = document.getElementById("silver-" + sec.id);
            if (el) el.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" });
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
    const searching = Boolean(state.query.trim());
    const sub = $("sub-nav"), out = $("catalog"), secNav = $("section-nav");
    if (!sub || !out) return;
    $("metal-tabs")?.classList.toggle("hidden", searching);
    sub.classList.toggle("hidden", searching);
    secNav?.classList.toggle("hidden", searching || state.metal === "silver");
    const clear = $("clear-catalog-search");
    if (clear) clear.hidden = !searching;
    document.querySelectorAll(".main-cat-tab").forEach((btn) => {
        const on = btn.dataset.metal === state.metal;
        btn.setAttribute("aria-pressed", String(on));
        btn.classList.toggle("bg-burgundy-900", on);
        btn.classList.toggle("text-gold-300", on);
        btn.classList.toggle("shadow", on);
        btn.classList.toggle("bg-cream", !on);
        btn.classList.toggle("text-burgundy-900", !on);
        btn.classList.toggle("hover:bg-gold-500/20", !on);
    });
    sub.replaceChildren();
    out.replaceChildren();
    secNav?.replaceChildren();
    if (searching) renderSearchResults(out);
    else if (state.metal === "silver") renderSilver(sub, out);
    else renderMetal(sub, out);
}

function switchMainCategory(metal) {
    state.metal = metal;
    state.section = "";
    if (metal !== "silver") state.silverSection = "";
    renderCollections();
}

function openCollection(metal, gender) {
    window.location.href = `collections.html?metal=${metal}&gender=${gender || 'women'}`;
}

function renderHomeTiles() {
    const wrap = $("home-tiles");
    if (!wrap) return;
    HOME_TILES.forEach((tile) => {
        const btn = document.createElement("button");
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
    const button = $("mobile-menu-btn");
    if (!menu || !button) return;
    const isOpening = menu.classList.contains("hidden");
    menu.classList.toggle("hidden", !isOpening);
    button.setAttribute("aria-expanded", String(isOpening));
}

document.addEventListener("DOMContentLoaded", () => {
    const search = $("catalog-search");
    const clear = $("clear-catalog-search");
    search?.addEventListener("input", () => { state.query = search.value; renderCollections(); });
    clear?.addEventListener("click", () => { state.query = ""; search.value = ""; renderCollections(); search.focus(); });
});

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
    if (e.key === "Escape" && modal && !modal.classList.contains("hidden")) { closeModal(); return; }
    const menu = $("mobile-menu"), menuButton = $("mobile-menu-btn");
    if (e.key === "Escape" && menu && !menu.classList.contains("hidden")) {
        menu.classList.add("hidden"); menuButton.setAttribute("aria-expanded", "false"); menuButton.focus();
    }
    if (e.key === "Tab" && modal && !modal.classList.contains("hidden")) {
        const focusables = [...modal.querySelectorAll('a[href], button:not([disabled])')];
        const first = focusables[0], last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
});
