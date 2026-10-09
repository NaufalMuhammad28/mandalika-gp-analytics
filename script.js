// FUNGSI DRAWER MOBILE RESPONSIF
function toggleMobileMenu() {
  const sidebar = document.getElementById('sidebar-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  sidebar.classList.toggle('-translate-x-full');
  backdrop.classList.toggle('hidden');
}

// DICTIONARY 100% LENGKAP BILINGUAL ID & EN
const TRANSLATIONS = {
  id: {
    verifiedSources: "PORTAL RESMI DIAUDIT:",
    analystRole: "Lead Motorsport Data Analyst",
    navHistory: "1. Sejarah FIM & NTB",
    navEcon: "2. Riset Ekonomi BPS NTB",
    navHotelMap: "3. Peta Hotel & Tiket",
    navGrid: "4. Grid Pembalap Resmi",
    navGPSeries: "5. Mandalika GP Series",
    historyMainTitle: "Kronologi 75 Tahun Kejuaraan Dunia MotoGP & Sejarah Luhur Tanah Mandalika",
    historyMainDesc: "Didirikan pada 17 Juni 1949 oleh Fédération Internationale de Motocyclisme (FIM) di balapan Isle of Man TT, MotoGP merupakan kejuaraan motorsport tertua di muka bumi. Di sisi lain, pulau Lombok di Nusa Tenggara Barat menyimpan sejarah luhur legenda Putri Mandalika yang kini bertransformasi menjadi sirkuit balap tercantik di dunia.",
    fimErasTitle: "Evolusi Regulasi Mesin Dunia (1949–2027)",
    era1949Title: "1949: Kelahiran Resmi FIM (Isle of Man TT)",
    era1949Desc: "Leslie Graham juara dunia 500cc pertama menggunakan AJS Porcupine dengan kecepatan puncak 155 km/jam di balapan jalan raya paling berbahaya di dunia.",
    era1975Title: "1975–2001: Monster 2-Tak 500cc (\"The Golden Era\")",
    era1975Desc: "Motor 2-tak 200 hp buas tanpa kontrol traksi elektronik. Mick Doohan mengukir rekor 5 gelar beruntun bersama Honda NSR500 melalui gaya sliding yang legendaris.",
    era1996Title: "1996–1997: Babak Emas Sirkuit Sentul (Indonesia)",
    era1996Desc: "Indonesia pertama kali menggelar GP resmi FIM. Mick Doohan memenangi kelas 500cc (1996), dan Valentino Rossi remaja merengkuh kemenangan perdananya di Indonesia di kelas 125cc (1997).",
    era2002Title: "2002–2026: Era 4-Tak 990cc, 800cc & Aero 1000cc",
    era2002Desc: "Valentino Rossi, Casey Stoner, dan Marc Marquez mengukir dinasti emas. Brad Binder mencetak rekor top speed 366.1 km/jam bersama KTM RC16 di sirkuit Mugello.",
    era2027Title: "2027: Era Mesin Baru 850cc (Next-Gen MotoGP)",
    era2027Desc: "FIM memangkas kapasitas mesin ke 850cc, melarang ride-height device, dan membatasi aero winglet demi mengembalikan kendali murni ke tangan pembalap.",
    ntbHeritageTitle: "Sejarah & Warisan Luhur Tanah Mandalika NTB",
    folkloreTitle: "Folklor Legenda Putri Mandalika (Tradisi Bau Nyale)",
    folkloreDesc: "Kisah putri nan elok yang memilih menceburkan diri ke laut Seger agar tidak memicu perang antarkerajaan di Lombok. Jasadnya dipercaya menjelma menjadi cacing laut berkilau (Nyale), simbol pengorbanan demi persatuan yang dirayakan tiap tahun.",
    tenunTitle: "Filosofi Seni Tenun Sasak di Lintasan Sirkuit",
    tenunDesc: "Motif kain tenun tradisional suku Sasak Lombok dilukis megah di atas area run-off tikungan 15, 16, dan 17 seluas 50.000 m². Merupakan penghormatan budaya Indonesia yang disiarkan ke lebih dari 200 negara.",
    transfTitle: "Transformasi Menjadi Kawasan Ekonomi Khusus (KEK)",
    transfDesc: "Ditetapkan sebagai Destinasi Pariwisata Super Prioritas (DPSP) oleh pemerintah RI melalui ITDC dan InJourney, mengubah pesisir tandus menjadi pusat sport tourism internasional.",
    homologTitle: "Homologasi FIM Grade A & Teknologi Aspal SMA",
    homologDesc: "Diresmikan November 2021 dengan aspal Stone Mastic Asphalt (SMA) terbaik dunia, menjamin grip optimal saat motor dipacu hingga 318 km/jam di udara pesisir Samudra Hindia.",
    chartSpeedTitle: "Grafik: Rekor Top Speed Sepanjang Era Mesin (1949–2027)",
    chartLegendsTitle: "Grafik: Distribusi Gelar Juara Dunia Terbanyak Sepanjang Masa",
    econMainTitle: "Kajian Analisis Data: Dampak Sirkuit Mandalika Terhadap Ekonomi & Pariwisata NTB",
    kpiEconTurnover: "Perputaran Ekonomi",
    kpiHotelOcc: "Okupansi Hotel Lombok",
    kpiJobsAbsorbed: "Tenaga Kerja Terserap",
    kpiMsmeGrowth: "Omzet UMKM Lokal",
    chartEconTitle: "PDRB & Perputaran",
    chartHotelTitle: "Okupansi Hotel",
    chartAirportTitle: "Trafik Bandara BIL",
    layoutMainTitle: "Denah Layout Sirkuit Mandalika & Pilihan Kategori Tiket",
    layoutMainDesc: "Klik salah satu zona tribun di bawah ini untuk melihat data analitik sudut pandang, beban deselerasi G-Force, serta akses fasilitas resminya.",
    buyOfficialTicket: "Beli Tiket Resmi MGPA ↗",
    hotelDirTitle: "Direktori 9 Hotel & Resort Resmi Sekitar Mandalika",
    hotelDirDesc: "Lengkap dengan rute navigasi Google Maps, jarak tempuh, dan portal reservasi resmi.",
    gridMainTitle: "Grid Pembalap Resmi MotoGP™, Moto2™ & Moto3™",
    gridMainDesc: "Pilih kelas balap di bawah ini dan klik nama pembalap untuk membuka kartu biodata resmi langsung tanpa login!"
  },
  en: {
    verifiedSources: "AUDITED OFFICIAL PORTALS:",
    analystRole: "Lead Motorsport Data Analyst",
    navHistory: "1. FIM & NTB Heritage",
    navEcon: "2. BPS NTB Economic Report",
    navHotelMap: "3. Hotels & Tickets Map",
    navGrid: "4. Official Riders Grid",
    navGPSeries: "5. Mandalika GP Series",
    historyMainTitle: "75 Years of MotoGP Chronology (1949 — 2027) & Mandalika's Cultural Heritage",
    historyMainDesc: "Founded on June 17, 1949, by the FIM at the Isle of Man TT, MotoGP is the oldest motorsport championship. Meanwhile, Lombok holds the sacred legend of Princess Mandalika, now hosting the world's most scenic circuit.",
    fimErasTitle: "World Engine Regulation Evolution (1949–2027)",
    era1949Title: "1949: Official FIM Inception (Isle of Man TT)",
    era1949Desc: "Leslie Graham won the inaugural 500cc World Championship riding the AJS Porcupine reaching 155 km/h top speeds on the world's most perilous road circuit.",
    era1975Title: "1975–2001: 500cc 2-Stroke Beasts (\"The Golden Era\")",
    era1975Desc: "Raw 200 hp two-stroke prototypes without electronic traction control. Mick Doohan achieved a legendary 5 consecutive world titles with Honda NSR500.",
    era1996Title: "1996–1997: Sentul Circuit Golden Era (Indonesia)",
    era1996Desc: "Indonesia hosted its first official FIM GP. Mick Doohan dominated the 500cc class (1996), and young Valentino Rossi took his maiden Indonesian victory in 125cc (1997).",
    era2002Title: "2002–2026: 4-Stroke 990cc, 800cc & Aero 1000cc Era",
    era2002Desc: "Valentino Rossi, Casey Stoner, and Marc Marquez built historic dynasties. Brad Binder set the all-time top speed record of 366.1 km/h on the KTM RC16.",
    era2027Title: "2027: Next-Gen 850cc Engine Era",
    era2027Desc: "FIM downsizes displacement to 850cc, completely bans ride-height devices, and reduces aero winglets to put raw rider skill back in full control.",
    ntbHeritageTitle: "Heritage & Ancient Legacy of Mandalika, West Nusa Tenggara",
    folkloreTitle: "Folklore of Princess Mandalika (Bau Nyale Tradition)",
    folkloreDesc: "The tale of a princess who sacrificed herself into the Seger Sea to prevent bloodshed among rival kingdoms. Legend says her soul transforms annually into glowing sea worms (Nyale), celebrating unity and peace.",
    tenunTitle: "Sasak Traditional Weaving Art on Circuit Run-Offs",
    tenunDesc: "The intricate indigenous Sasak textile pattern is painted across the run-off areas of Turns 15, 16, and 17 across 50,000 m², showcasing Indonesian culture to global broadcast viewers in 200+ territories.",
    transfTitle: "Transformation into a Special Economic Zone (SEZ)",
    transfDesc: "Designated as a Super Priority Tourism Destination by the Indonesian government through ITDC and InJourney, transforming arid shores into an international sport tourism capital.",
    homologTitle: "FIM Grade A Homologation & SMA Asphalt Technology",
    homologDesc: "Inaugurated in November 2021 with Stone Mastic Asphalt (SMA) technology, providing superior grip as prototype bikes blast at 318 km/h along the Indian Ocean coastline.",
    chartSpeedTitle: "Chart: Top Speed Record Across Engine Eras (1949–2027)",
    chartLegendsTitle: "Chart: All-Time Championship Titles Distribution",
    econMainTitle: "Data Analysis Report: Economic Multiplier Impact of Mandalika Circuit",
    kpiEconTurnover: "Economic Circulation",
    kpiHotelOcc: "Lombok Hotel Occupancy",
    kpiJobsAbsorbed: "Local Jobs Absorbed",
    kpiMsmeGrowth: "Local MSME Growth",
    chartEconTitle: "GDP & Turnover",
    chartHotelTitle: "Hotel Occupancy",
    chartAirportTitle: "Lombok Airport Traffic (BIL)",
    layoutMainTitle: "Mandalika Circuit Layout & Ticket Intelligence",
    layoutMainDesc: "Click any grandstand category below to analyze telemetry viewing angles, braking g-forces, and official hospitality amenities.",
    buyOfficialTicket: "Buy Official MGPA Ticket ↗",
    hotelDirTitle: "Official 9 Hotels & Resorts Directory Around Mandalika",
    hotelDirDesc: "Featuring authentic resort photography, direct Google Maps navigation, and official booking portals.",
    gridMainTitle: "Official Riders Grid: MotoGP™, Moto2™ & Moto3™",
    gridMainDesc: "Select racing class below and click any rider name to open the official bio dossier directly without login barriers!"
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.innerText = TRANSLATIONS[lang][key];
    }
  });
  const btnId = document.getElementById('lang-id-btn');
  const btnEn = document.getElementById('lang-en-btn');
  if (lang === 'id') {
    btnId.className = "px-2.5 py-1 rounded bg-racing-red text-white transition";
    btnEn.className = "px-2.5 py-1 rounded text-slate-700 dark:text-slate-300 hover:text-racing-red transition";
  } else {
    btnEn.className = "px-2.5 py-1 rounded bg-racing-red text-white transition";
    btnId.className = "px-2.5 py-1 rounded text-slate-700 dark:text-slate-300 hover:text-racing-red transition";
  }
}

function toggleDarkMode() {
  const html = document.documentElement;
  html.classList.toggle('dark');
}

// =========================================================================
// DATABASE 76 PEMBALAP (MOTOGP: 22, MOTO2: 28, MOTO3: 26)
// =========================================================================
const RIDERS_DATABASE = {
  motogp: [
    { id: "bagnaia", name: "Francesco Bagnaia", number: 63, flag: "🇮🇹", country: "Italia", team: "Ducati Lenovo Team", bike: "Ducati GP26", dob: "14/01/1997", titles: "2x MotoGP World Champion", wins: "28 Wins", podiums: "50+ Podiums", style: "Precision hard-braking & tactical race craft.", bio: "VR46 Academy talisman who restored Ducati Corse to back-to-back glory." },
    { id: "marquez", name: "Marc Márquez", number: 93, flag: "🇪🇸", country: "Spanyol", team: "Ducati Lenovo Team", bike: "Ducati GP26", dob: "17/02/1993", titles: "8x World Champion (6x MotoGP)", wins: "88 Wins", podiums: "140+ Podiums", style: "68° extreme lean-angle & legendary front saves.", bio: "Living legend hunting his 9th world championship on the factory Desmosedici." },
    { id: "martin", name: "Jorge Martín", number: 89, flag: "🇪🇸", country: "Spanyol", team: "Aprilia Racing", bike: "Aprilia RS-GP26", dob: "29/01/1998", titles: "2024 MotoGP World Champion", wins: "18 Wins", podiums: "40+ Podiums", style: "The Martinator: Sprint master with launchpad acceleration.", bio: "Reigning world champion spearheading Aprilia Racing's title assault." },
    { id: "bezzecchi", name: "Marco Bezzecchi", number: 72, flag: "🇮🇹", country: "Italia", team: "Aprilia Racing", bike: "Aprilia RS-GP26", dob: "12/11/1998", titles: "3rd Overall MotoGP 2023", wins: "3 Wins", podiums: "14 Podiums", style: "Fluid momentum and wet-track aggression.", bio: "Charismatic VR46 prodigy teaming with Martin at Aprilia Factory." },
    { id: "diggia", name: "Fabio Di Giannantonio", number: 49, flag: "🇮🇹", country: "Italia", team: "Pertamina Enduro VR46", bike: "Ducati GP26", dob: "10/10/1998", titles: "2023 Qatar GP Winner", wins: "1 Win", podiums: "4 Podiums", style: "Smooth late-race tire management.", bio: "Factory-supported rider flying Indonesia's Pertamina Enduro VR46 colors." },
    { id: "morbidelli", name: "Franco Morbidelli", number: 21, flag: "🇮🇹", country: "Italia", team: "Pertamina Enduro VR46", bike: "Ducati GP25", dob: "04/12/1994", titles: "2020 MotoGP Runner-Up", wins: "3 Wins", podiums: "9 Podiums", style: "Ultra-smooth cornering lines.", bio: "Senior VR46 Academy talent completing Pertamina Enduro VR46 lineup." },
    { id: "acosta", name: "Pedro Acosta", number: 31, flag: "🇪🇸", country: "Spanyol", team: "Red Bull KTM Factory", bike: "KTM RC16", dob: "25/05/2004", titles: "Moto3 & Moto2 World Champion", wins: "16 Wins", podiums: "5+ Podiums", style: "The Shark: Relentless trail-braking overtakes.", bio: "Generational prodigy leading the factory Red Bull KTM assault." },
    { id: "binder", name: "Brad Binder", number: 33, flag: "🇿🇦", country: "Afrika Selatan", team: "Red Bull KTM Factory", bike: "KTM RC16", dob: "11/08/1995", titles: "Top Speed Record (366.1 km/h)", wins: "2 Wins", podiums: "11 Podiums", style: "Sunday fighter with all-time straightline bravery.", bio: "South African warrior renowned for lightning starts and fierce combat." },
    { id: "vinales", name: "Maverick Viñales", number: 12, flag: "🇪🇸", country: "Spanyol", team: "Red Bull KTM Tech3", bike: "KTM RC16", dob: "12/01/1995", titles: "2013 Moto3 World Champion", wins: "10 Wins (3 Brands)", podiums: "35 Podiums", style: "Top Gun: Unrivaled apex velocity on balanced setups.", bio: "Historic GP winner with Suzuki, Yamaha, and Aprilia, now racing with KTM." },
    { id: "bastianini", name: "Enea Bastianini", number: 23, flag: "🇮🇹", country: "Italia", team: "Red Bull KTM Tech3", bike: "KTM RC16", dob: "30/12/1997", titles: "2020 Moto2 World Champion", wins: "7 Wins", podiums: "18 Podiums", style: "The Beast: Deadly late-race tire preserver.", bio: "Italian sensation partnering Viñales in Tech3 KTM's formidable lineup." },
    { id: "quartararo", name: "Fabio Quartararo", number: 20, flag: "🇫🇷", country: "Prancis", team: "Monster Energy Yamaha", bike: "Yamaha YZR-M1", dob: "20/04/1999", titles: "2021 MotoGP World Champion", wins: "11 Wins", podiums: "31 Podiums", style: "El Diablo: Unmatched mid-corner speed.", bio: "Yamaha's talismanic leader spearheading the YZR-M1 recovery project." },
    { id: "rins", name: "Alex Rins", number: 42, flag: "🇪🇸", country: "Spanyol", team: "Monster Energy Yamaha", bike: "Yamaha YZR-M1", dob: "08/12/1995", titles: "6x MotoGP Winner", wins: "6 Wins", podiums: "18 Podiums", style: "Silky-smooth lines & tire preservation.", bio: "Experienced race winner partnering Quartararo in Monster Energy Yamaha." },
    { id: "miller", name: "Jack Miller", number: 43, flag: "🇦🇺", country: "Australia", team: "Prima Pramac (Yamaha)", bike: "Yamaha YZR-M1", dob: "18/01/1995", titles: "2014 Moto3 Runner-Up", wins: "4 Wins", podiums: "23 Podiums", style: "Jackass: Rear-wheel slide master in flag-to-flag rain.", bio: "Australian veteran bringing invaluable knowledge to Pramac Yamaha." },
    { id: "toprak", name: "Toprak Razgatlıoğlu", number: 54, flag: "🇹🇷", country: "Turki", team: "Prima Pramac (Yamaha)", bike: "Yamaha YZR-M1", dob: "16/10/1996", titles: "2x WorldSBK Champion", wins: "50+ Superbike Wins", podiums: "130+ Podiums", style: "Stoppie King: Aerobatic late-braker.", bio: "Superbike icon completing a historic transition into MotoGP with Pramac." },
    { id: "alexmarquez", name: "Alex Márquez", number: 73, flag: "🇪🇸", country: "Spanyol", team: "Gresini Racing BK8", bike: "Ducati GP25", dob: "23/04/1996", titles: "Moto3 & Moto2 Champion", wins: "Sprint Race Winner", podiums: "6 Podiums", style: "Consistent rhythm & wet-weather pace.", bio: "Established front-runner leading the Gresini Racing independent outfit." },
    { id: "aldeguer", name: "Fermin Aldeguer", number: 54, flag: "🇪🇸", country: "Spanyol", team: "Gresini Racing BK8", bike: "Ducati GP25", dob: "05/04/2005", titles: "Multiple Moto2 Winner", wins: "5 Wins", podiums: "10+ Podiums", style: "Explosive pure qualifying speed.", bio: "Ducati Corse's prized young signing placed at Gresini Racing." },
    { id: "raulfernandez", name: "Raul Fernandez", number: 25, flag: "🇪🇸", country: "Spanyol", team: "Trackhouse Racing", bike: "Aprilia RS-GP26", dob: "23/10/2000", titles: "Rookie Moto2 Record (8 Wins)", wins: "8 Wins", podiums: "Pole Sitter", style: "Blistering fast high-speed entry.", bio: "Lead American-backed Trackhouse Racing talent." },
    { id: "ogura", name: "Ai Ogura", number: 79, flag: "🇯🇵", country: "Jepang", team: "Trackhouse Racing", bike: "Aprilia RS-GP25", dob: "26/01/2001", titles: "2024 Moto2 World Champion", wins: "6 Wins", podiums: "20+ Podiums", style: "Samurai discipline and tactical calculations.", bio: "2024 Moto2 World Champion stepping into MotoGP with Trackhouse." },
    { id: "joanmir", name: "Joan Mir", number: 36, flag: "🇪🇸", country: "Spanyol", team: "Honda HRC Castrol", bike: "Honda RC213V", dob: "01/09/1997", titles: "2020 MotoGP World Champion", wins: "1 Win", podiums: "13 Podiums", style: "Relentless fighter with race-distance consistency.", bio: "World champion spearheading the technical turnaround of Honda HRC." },
    { id: "marini", name: "Luca Marini", number: 10, flag: "🇮🇹", country: "Italia", team: "Honda HRC Castrol", bike: "Honda RC213V", dob: "10/08/1997", titles: "2020 Moto2 Runner-Up", wins: "6 Wins", podiums: "2 Podiums", style: "Methodical engineering-grade telemetry intellect.", bio: "Valentino Rossi's brother driving Honda HRC's technical resurgence." },
    { id: "zarco", name: "Johann Zarco", number: 5, flag: "🇫🇷", country: "Prancis", team: "Castrol Honda LCR", bike: "Honda RC213V", dob: "16/07/1990", titles: "2x Moto2 World Champion", wins: "1 Win", podiums: "21 Podiums", style: "Backflip rider with acute tire sensitivity.", bio: "Experienced French rider leading Honda's charge at LCR." },
    { id: "moreira", name: "Diogo Moreira", number: 10, flag: "🇧🇷", country: "Brasil", team: "Castrol Honda LCR", bike: "Honda RC213V", dob: "23/04/2004", titles: "Moto3 Rookie of the Year", wins: "1 Win", podiums: "3 Podiums", style: "Agile supermoto reflexes and sharp overtakes.", bio: "Brazilian young talent completing the official 2026 MotoGP grid." }
  ],
  moto2: [
    { id: "m2_garcia", name: "Sergio Garcia", number: 3, flag: "🇪🇸", country: "Spanyol", team: "MT Helmets - MSI", bike: "Boscoscuro B-24", dob: "22/03/2003", titles: "Moto2 Title Contender", wins: "8 Wins", podiums: "25 Podiums", style: "Cornering apex bravery.", bio: "Championship front-runner in Moto2." },
    { id: "m2_ortola", name: "Ivan Ortolá", number: 4, flag: "🇪🇸", country: "Spanyol", team: "MT Helmets - MSI", bike: "Boscoscuro B-24", dob: "04/08/2004", titles: "Multiple GP Winner", wins: "4 Wins", podiums: "12 Podiums", style: "Late-braking aggression.", bio: "Moto3 sensation promoted to Moto2." },
    { id: "m2_baltus", name: "Barry Baltus", number: 7, flag: "🇧🇪", country: "Belgia", team: "Fantic Racing", bike: "Kalex Moto2", dob: "03/05/2004", titles: "Moto2 Podium Finisher", wins: "0 Wins", podiums: "2 Podiums", style: "High lean-angle rhythm.", bio: "Young Belgian talent racing with Fantic." },
    { id: "m2_escrig", name: "Alex Escrig", number: 11, flag: "🇪🇸", country: "Spanyol", team: "KLINT Forward Factory", bike: "Forward Moto2", dob: "21/02/2004", titles: "Stock Champion", wins: "0 Wins", podiums: "1 Podium", style: "Technical chassis feedback.", bio: "Lead Forward Racing rider." },
    { id: "m2_salac", name: "Filip Salac", number: 12, flag: "🇨🇿", country: "Ceko", team: "Elf Marc VDS Racing", bike: "Boscoscuro B-24", dob: "12/12/2001", titles: "Moto2 Pole & Podium", wins: "0 Wins", podiums: "3 Podiums", style: "Fast sector time attacks.", bio: "Czech standout at Marc VDS." },
    { id: "m2_vietti", name: "Celestino Vietti", number: 13, flag: "🇮🇹", country: "Italia", team: "SpeedUp Racing", bike: "Boscoscuro B-24", dob: "13/10/2001", titles: "Multiple Moto2 Winner", wins: "7 Wins", podiums: "16 Podiums", style: "VR46 school race craft.", bio: "Key Italian contender." },
    { id: "m2_arbolino", name: "Tony Arbolino", number: 14, flag: "🇮🇹", country: "Italia", team: "Pramac Yamaha Moto2", bike: "Kalex Moto2", dob: "03/08/2000", titles: "Moto2 Vice-Champion", wins: "6 Wins", podiums: "22 Podiums", style: "The Tiger: Relentless duel pace.", bio: "Yamaha factory junior spearhead." },
    { id: "m2_roberts", name: "Joe Roberts", number: 16, flag: "🇺🇸", country: "Amerika Serikat", team: "OnlyFans American Racing", bike: "Kalex Moto2", dob: "16/06/1997", titles: "Multiple Moto2 Winner", wins: "2 Wins", podiums: "9 Podiums", style: "Brave dirt-track slides.", bio: "American flagbearer in Grand Prix racing." },
    { id: "m2_munoz", name: "Daniel Muñoz", number: 17, flag: "🇪🇸", country: "Spanyol", team: "Preicanos Racing Team", bike: "Kalex Moto2", dob: "01/03/2006", titles: "European Junior Winner", wins: "0 Wins", podiums: "1 Podium", style: "Aggressive throttle exit.", bio: "Rapid rising Spanish talent." },
    { id: "m2_gonzalez", name: "Manuel Gonzalez", number: 18, flag: "🇪🇸", country: "Spanyol", team: "Liqui Moly Intact GP", bike: "Kalex Moto2", dob: "04/08/2002", titles: "WorldSSP300 Champion & GP Winner", wins: "2 Wins", podiums: "11 Podiums", style: "Smooth tactical intelligence.", bio: "Intact GP lead championship contender." },
    { id: "m2_lopez", name: "Alonso Lopez", number: 21, flag: "🇪🇸", country: "Spanyol", team: "SpeedUp Racing", bike: "Boscoscuro B-24", dob: "21/12/2001", titles: "Moto2 GP Winner", wins: "3 Wins", podiums: "15 Podiums", style: "Boscoscuro rocket starts.", bio: "SpeedUp front-row specialist." },
    { id: "m2_guevara", name: "Izan Guevara", number: 28, flag: "🇪🇸", country: "Spanyol", team: "Pramac Yamaha Moto2", bike: "Kalex Moto2", dob: "28/06/2004", titles: "2022 Moto3 World Champion", wins: "7 Wins", podiums: "12 Podiums", style: "Pure talent apex momentum.", bio: "World Champion driving Yamaha's Moto2 push." },
    { id: "m2_lunetta", name: "Luca Lunetta", number: 32, flag: "🇮🇹", country: "Italia", team: "SIC58 Squadra Corse", bike: "Kalex Moto2", dob: "27/05/2006", titles: "Moto3 Podium Finisher", wins: "0 Wins", podiums: "2 Podiums", style: "Dynamic high-lean attack.", bio: "Simoncelli team protege stepping up." },
    { id: "m2_piqueras", name: "Angel Piqueras", number: 36, flag: "🇪🇸", country: "Spanyol", team: "MT Helmets - MSI", bike: "Boscoscuro B-24", dob: "30/11/2006", titles: "Red Bull Rookies Champion", wins: "1 Win", podiums: "5 Podiums", style: "Fearless last-lap overtaking.", bio: "One of the quickest teenagers on two wheels." },
    { id: "m2_canet", name: "Aron Canet", number: 44, flag: "🇪🇸", country: "Spanyol", team: "Fantic Racing", bike: "Kalex Moto2", dob: "30/09/1999", titles: "Multiple Moto2 Winner", wins: "7 Wins", podiums: "38 Podiums", style: "Pole position wizard.", bio: "Charismatic title contender at Fantic." },
    { id: "m2_oncu", name: "Deniz Öncü", number: 53, flag: "🇹🇷", country: "Turki", team: "Red Bull KTM Ajo", bike: "Kalex Moto2", dob: "26/07/2003", titles: "Multiple GP Winner", wins: "3 Wins", podiums: "13 Podiums", style: "Fierce combat and hard trail-braking.", bio: "Ajo KTM factory powerhouse from Turkey." },
    { id: "m2_ferrandez", name: "Alberto Ferrandez", number: 54, flag: "🇪🇸", country: "Spanyol", team: "Finetwork Team", bike: "Kalex Moto2", dob: "14/11/2007", titles: "Junior GP Standout", wins: "0 Wins", podiums: "1 Podium", style: "Sharp switchbacks.", bio: "Promising Spanish junior graduate." },
    { id: "m2_marioaji", name: "Mario Suryo Aji", number: 64, flag: "🇮🇩", country: "Indonesia", team: "Idemitsu Honda Team Asia", bike: "Kalex Moto2", dob: "16/03/2004", titles: "Kebanggaan Indonesia di Panggung Dunia", wins: "Top Finisher", podiums: "National Icon", style: "Magetan Express: High fighting spirit and exceptional wet-weather race control.", bio: "Pembalap kebanggaan bangsa Indonesia yang mengibarkan bendera Merah Putih di kancah Grand Prix Moto2 dunia!" },
    { id: "m2_sasaki", name: "Ayumu Sasaki", number: 71, flag: "🇯🇵", country: "Jepang", team: "RW-Idrofoglia Racing GP", bike: "Kalex Moto2", dob: "04/10/2000", titles: "Moto3 Vice-Champion", wins: "3 Wins", podiums: "22 Podiums", style: "The Crazy Boy: Laser precision lines.", bio: "Japanese ace piloting for RW Racing." },
    { id: "m2_furusato", name: "Taiyo Furusato", number: 72, flag: "🇯🇵", country: "Jepang", team: "Idemitsu Honda Team Asia", bike: "Kalex Moto2", dob: "12/07/2003", titles: "Asia Talent Cup Champion", wins: "0 Wins", podiums: "2 Podiums", style: "Explosive mid-corner throttle.", bio: "Honda Team Asia young charger." },
    { id: "m2_dalonso", name: "David Alonso", number: 80, flag: "🇨🇴", country: "Kolombia", team: "CFMOTO Aspar Team", bike: "Kalex Moto2", dob: "25/04/2006", titles: "2024 Moto3 World Champion (14 Wins)", wins: "18 Wins", podiums: "23 Podiums", style: "Unmatched race intellect & cold-blooded race execution.", bio: "Record-shattering World Champion graduating to Moto2 glory." },
    { id: "m2_agius", name: "Senna Agius", number: 81, flag: "🇦🇺", country: "Australia", team: "Liqui Moly Intact GP", bike: "Kalex Moto2", dob: "09/06/2005", titles: "European Moto2 Champion", wins: "0 Wins", podiums: "1 Podium", style: "Raw Aussie power sliding.", bio: "Australian prodigy carrying forward Gardner/Doohan legacy." },
    { id: "m2_zonta", name: "Zonta van den Goorbergh", number: 84, flag: "🇳🇱", country: "Belanda", team: "RW-Idrofoglia Racing GP", bike: "Kalex Moto2", dob: "01/12/2005", titles: "Dutch Talent Star", wins: "0 Wins", podiums: "Top 5", style: "Smooth weight transfers.", bio: "Son of GP legend Jurgen van den Goorbergh." },
    { id: "m2_zurutuza", name: "Xabi Zurutuza", number: 85, flag: "🇪🇸", country: "Spanyol", team: "Red Bull KTM Ajo", bike: "Kalex Moto2", dob: "07/04/2006", titles: "Junior GP Winner", wins: "0 Wins", podiums: "2 Podiums", style: "Tenacious sector 3 pace.", bio: "Basque talent racing under Aki Ajo's tutelage." },
    { id: "m2_veijer", name: "Collin Veijer", number: 95, flag: "🇳🇱", country: "Belanda", team: "Red Bull KTM Ajo", bike: "Kalex Moto2", dob: "19/02/2005", titles: "Multiple GP Winner", wins: "3 Wins", podiums: "12 Podiums", style: "Relentless front-runner pace.", bio: "Dutch superstar tipped as a future MotoGP contender." },
    { id: "m2_holgado", name: "Daniel Holgado", number: 96, flag: "🇪🇸", country: "Spanyol", team: "CFMOTO Aspar Team", bike: "Kalex Moto2", dob: "27/04/2005", titles: "Junior World Champion", wins: "4 Wins", podiums: "16 Podiums", style: "Uncompromising defensive lines.", bio: "Fierce Spanish champion hunting Moto2 crowns." },
    { id: "m2_rueda", name: "Jose Antonio Rueda", number: 98, flag: "🇪🇸", country: "Spanyol", team: "Red Bull KTM Ajo", bike: "Kalex Moto2", dob: "29/10/2005", titles: "Red Bull Rookies Champion", wins: "1 Win", podiums: "6 Podiums", style: "High mid-corner carry speed.", bio: "Seville native shining on factory KTM machinery." },
    { id: "m2_huertas", name: "Adrian Huertas", number: 99, flag: "🇪🇸", country: "Spanyol", team: "Italtrans Racing Team", bike: "Kalex Moto2", dob: "21/08/2003", titles: "World Supersport Champion", wins: "15 Wins (WSSP)", podiums: "20 Podiums", style: "Superbike-derived rear steering.", bio: "World Supersport Champion transitioning to Grand Prix." }
  ],
  moto3: [
    { id: "m3_leo", name: "Leo Rammerstorfer", number: 5, flag: "🇦🇹", country: "Austria", team: "SIC58 Squadra Corse", bike: "Honda NSF250RW", dob: "12/08/2004", titles: "Austrian National Champion", wins: "0 Wins", podiums: "1 Podium", style: "Disciplined throttle mapping.", bio: "Austrian prospect carrying national colors." },
    { id: "m3_yamanaka", name: "Ryusei Yamanaka", number: 6, flag: "🇯🇵", country: "Jepang", team: "MT Helmets - MSI", bike: "KTM RC250GP", dob: "06/11/2001", titles: "Moto3 Podium Finisher", wins: "0 Wins", podiums: "2 Podiums", style: "High corner momentum.", bio: "Experienced Japanese front-runner." },
    { id: "m3_oshea", name: "Eddie O'Shea", number: 8, flag: "🇬🇧", country: "Inggris Raya", team: "MLav Racing", bike: "Honda NSF250RW", dob: "24/09/2006", titles: "British Talent Cup Winner", wins: "0 Wins", podiums: "1 Podium", style: "Aggressive entry angles.", bio: "British talent nurtured by Michael Laverty." },
    { id: "m3_vedapratama", name: "Veda Ega Pratama", number: 9, flag: "🇮🇩", country: "Indonesia", team: "Honda Team Asia", bike: "Honda NSF250RW", dob: "23/11/2008", titles: "Asia Talent Cup Champion 2023 (Rekor Poin)", wins: "9 Wins (ATC)", podiums: "Rekor Juara", style: "Sensasi Gunungkidul: Keberanian manuver lap terakhir, refleks pengereman kilat & insting juara alami.", bio: "Pembalap masa depan Indonesia pemecah rekor poin Asia Talent Cup sepanjang masa yang kini bertarung di panggung Kejuaraan Dunia!" },
    { id: "m3_carraro", name: "Nicola Carraro", number: 10, flag: "🇮🇹", country: "Italia", team: "Rivacold Snipers Team", bike: "Honda NSF250RW", dob: "08/04/2002", titles: "CIV Moto3 Champion", wins: "0 Wins", podiums: "1 Podium", style: "Methodical tire management.", bio: "Italian fighter with Snipers Team." },
    { id: "m3_cruces", name: "Adrian Cruces", number: 11, flag: "🇪🇸", country: "Spanyol", team: "CIP Green Power", bike: "KTM RC250GP", dob: "20/07/2006", titles: "Junior GP Winner", wins: "0 Wins", podiums: "2 Podiums", style: "Sharp late braking.", bio: "Spanish young prodigy at CIP." },
    { id: "m3_danish", name: "Hakim Danish", number: 13, flag: "🇲🇾", country: "Malaysia", team: "MT Helmets - MSI", bike: "KTM RC250GP", dob: "27/07/2007", titles: "Asia Talent Cup Winner & Rookies Star", wins: "Multiple ATC Wins", podiums: "7 Podiums", style: "Brave wet-weather overtaking.", bio: "Malaysian wonderkid following the footsteps of Hafizh Syahrin." },
    { id: "m3_buchanan", name: "Cormac Buchanan", number: 14, flag: "🇳🇿", country: "Selandia Baru", team: "BOE Motorsports", bike: "KTM RC250GP", dob: "16/08/2006", titles: "NZ Supersport Champion", wins: "0 Wins", podiums: "1 Podium", style: "Fast sweeper rhythm.", bio: "New Zealand's lone star in the GP paddock." },
    { id: "m3_bertelle", name: "Matteo Bertelle", number: 18, flag: "🇮🇹", country: "Italia", team: "LevelUp - MTA", bike: "KTM RC250GP", dob: "28/01/2004", titles: "Red Bull Rookies Winner", wins: "0 Wins", podiums: "1 Podium", style: "Smooth Italian style.", bio: "Team MTA's dependable Italian racer." },
    { id: "m3_ogden", name: "Scott Ogden", number: 19, flag: "🇬🇧", country: "Inggris Raya", team: "CIP Green Power", bike: "KTM RC250GP", dob: "16/10/2003", titles: "British Talent Cup Champion", wins: "0 Wins", podiums: "Top 5", style: "Slipstream specialist.", bio: "Tenacious British representative." },
    { id: "m3_moodley", name: "Ruche Moodley", number: 21, flag: "🇿🇦", country: "Afrika Selatan", team: "BOE Motorsports", bike: "KTM RC250GP", dob: "19/02/2007", titles: "Rookies Cup Podium", wins: "0 Wins", podiums: "1 Podium", style: "Raw fearless aggression.", bio: "South African export on KTM power." },
    { id: "m3_almansa", name: "David Almansa", number: 22, flag: "🇪🇸", country: "Spanyol", team: "Liqui Moly Husqvarna Intact", bike: "Husqvarna FR250GP", dob: "22/01/2006", titles: "Junior GP Frontrunner", wins: "0 Wins", podiums: "2 Podiums", style: "Quick change of direction.", bio: "Spanish charger racing for Husqvarna Intact GP." },
    { id: "m3_salmela", name: "Rico Salmela", number: 27, flag: "🇫🇮", country: "Finlandia", team: "Red Bull KTM Ajo", bike: "KTM RC250GP", dob: "12/01/2008", titles: "Finnish Star Prodigy", wins: "0 Wins", podiums: "2 Podiums", style: "Ice-cool Scandinavian calmness.", bio: "Aki Ajo's handpicked Finnish prodigy." },
    { id: "m3_quiles", name: "Maximo Quiles", number: 28, flag: "🇪🇸", country: "Spanyol", team: "CFMOTO Aspar Team", bike: "KTM RC250GP", dob: "18/03/2008", titles: "European Talent Cup Champion", wins: "Multiple ETC Wins", podiums: "10 Podiums", style: "Explosive race starts.", bio: "Marc Marquez's mentee and Aspar wonderkid." },
    { id: "m3_fernandez", name: "Adrian Fernandez", number: 31, flag: "🇪🇸", country: "Spanyol", team: "Leopard Racing", bike: "Honda NSF250RW", dob: "31/01/2004", titles: "Multiple Moto3 Podium Finisher", wins: "0 Wins", podiums: "4 Podiums", style: "Pitbull trail-braking.", bio: "Raul Fernandez's younger brother leading Leopard Racing." },
    { id: "m3_mitani", name: "Zen Mitani", number: 32, flag: "🇯🇵", country: "Jepang", team: "Honda Team Asia", bike: "Honda NSF250RW", dob: "09/07/2007", titles: "Asia Talent Cup Champion 2024", wins: "7 Wins", podiums: "Rekor Podium", style: "Disciplined Japanese perfection.", bio: "2024 Asia Talent Cup Champion joining Honda Team Asia." },
    { id: "m3_uriarte", name: "Brian Uriarte", number: 51, flag: "🇪🇸", country: "Spanyol", team: "CFMOTO Aspar Team", bike: "KTM RC250GP", dob: "18/08/2008", titles: "ETC Vice Champion", wins: "Multiple Wins", podiums: "8 Podiums", style: "High speed sector bravery.", bio: "Aspar junior team standout." },
    { id: "m3_rios", name: "Jesus Rios", number: 54, flag: "🇪🇸", country: "Spanyol", team: "Rivacold Snipers Team", bike: "Honda NSF250RW", dob: "01/10/2007", titles: "Junior GP Winner", wins: "2 Wins", podiums: "5 Podiums", style: "Aggressive overtake angles.", bio: "Snipers team young gun." },
    { id: "m3_dmunoz", name: "David Muñoz", number: 64, flag: "🇪🇸", country: "Spanyol", team: "Liqui Moly Intact GP", bike: "KTM RC250GP", dob: "15/05/2006", titles: "Multiple Moto3 Podium Finisher", wins: "0 Wins", podiums: "7 Podiums", style: "Wild knife-between-teeth combat.", bio: "Fan favorite known for breathtaking last-lap lunges." },
    { id: "m3_kelso", name: "Joel Kelso", number: 66, flag: "🇦🇺", country: "Australia", team: "BOE Motorsports", bike: "KTM RC250GP", dob: "12/06/2003", titles: "Moto3 Pole & Podium", wins: "0 Wins", podiums: "3 Podiums", style: "Aussie grit and brave line-holding.", bio: "Fast Darwin native hunting his maiden GP victory." },
    { id: "m3_ogorman", name: "Casey O'Gorman", number: 67, flag: "🇮🇪", country: "Irlandia", team: "SIC58 Squadra Corse", bike: "Honda NSF250RW", dob: "21/07/2007", titles: "British Talent Cup Champion", wins: "Multiple Wins", podiums: "6 Podiums", style: "Precision corner slicing.", bio: "Irish sensation flying under Simoncelli colors." },
    { id: "m3_perrone", name: "Valentin Perrone", number: 73, flag: "🇦🇷", country: "Argentina", team: "Red Bull Tech3", bike: "GASGAS RC250GP", dob: "29/12/2007", titles: "European Talent Cup Star", wins: "1 Win", podiums: "4 Podiums", style: "Passionate tango race craft.", bio: "Argentine starlet backed by Herve Poncharal's Tech3." },
    { id: "m3_esteban", name: "Joel Esteban", number: 78, flag: "🇪🇸", country: "Spanyol", team: "LevelUp - MTA", bike: "KTM RC250GP", dob: "14/08/2005", titles: "Junior GP Winner", wins: "1 Win", podiums: "3 Podiums", style: "Technical apex momentum.", bio: "Spanish front-row contender." },
    { id: "m3_carpe", name: "Alvaro Carpe", number: 83, flag: "🇪🇸", country: "Spanyol", team: "Red Bull KTM Ajo", bike: "KTM RC250GP", dob: "05/06/2007", titles: "2024 Red Bull Rookies Cup Champion", wins: "3 Wins", podiums: "7 Podiums", style: "High tactical race awareness.", bio: "2024 Red Bull Rookies Cup Champion making factory GP debut." },
    { id: "m3_pini", name: "Guido Pini", number: 94, flag: "🇮🇹", country: "Italia", team: "Leopard Racing", bike: "Honda NSF250RW", dob: "07/01/2008", titles: "European Talent Cup Champion", wins: "Multiple Wins", podiums: "9 Podiums", style: "Silky Tuscan throttle finesse.", bio: "Italian prodigy paired with championship-winning Leopard squad." },
    { id: "m3_morelli", name: "Marco Morelli", number: 97, flag: "🇦🇷", country: "Argentina", team: "CFMOTO Aspar Team", bike: "KTM RC250GP", dob: "18/06/2007", titles: "Rookies Cup Podium Finisher", wins: "1 Win", podiums: "4 Podiums", style: "Aggressive chicane flicking.", bio: "Argentine talent completing Aspar's formidable lineup." }
  ]
};

let currentClass = 'motogp';

function filterRiderClass(className) {
  currentClass = className;
  
  const buttons = ['motogp', 'moto2', 'moto3'];
  buttons.forEach(b => {
    const btn = document.getElementById(`btn-class-${b}`);
    if (b === className) {
      btn.className = "px-5 py-2.5 rounded-xl text-xs font-black bg-racing-red text-white shadow-md transition";
    } else {
      btn.className = "px-5 py-2.5 rounded-xl text-xs font-black bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-racing-red hover:text-white transition";
    }
  });

  renderRidersGrid();
}

function renderRidersGrid() {
  const container = document.getElementById('container-grid-riders');
  const riders = RIDERS_DATABASE[currentClass] || [];

  container.innerHTML = riders.map(r => `
    <div class="p-4 bg-white dark:bg-racing-asphaltCard rounded-2xl border-2 border-racing-red/60 hover:border-racing-red shadow-sm hover:shadow-md transition flex flex-col justify-between group">
      <div>
        <div class="flex justify-between items-baseline pb-2 border-b border-slate-100 dark:border-slate-800">
          <span class="racing-number text-3xl font-black text-racing-red tracking-tight">#${r.number}</span>
          <span class="text-xs font-bold text-slate-500 dark:text-slate-400">${r.country} ${r.flag}</span>
        </div>
        
        <div class="mt-2.5">
          <h4 class="font-black text-slate-900 dark:text-white text-sm tracking-tight">${r.name}</h4>
          <p class="text-[11px] text-racing-red font-bold mt-0.5">${r.team}</p>
          <p class="text-[10px] text-slate-400 mt-1">${r.bike}</p>
        </div>
      </div>

      <button onclick="openRiderModal('${r.id}')" class="mt-3.5 w-full py-2 bg-slate-100 dark:bg-racing-asphalt hover:bg-racing-red hover:text-white text-racing-red border border-slate-200 dark:border-racing-asphaltBorder rounded-xl text-[11px] font-bold transition flex items-center justify-center gap-1.5 shadow-sm">
        <i data-lucide="user" class="w-3.5 h-3.5"></i> Profil & Analisis ↗
      </button>
    </div>
  `).join('');

  lucide.createIcons();
}

// MODAL LENGKAP & TAUTAN BEBAS LOGIN
function openRiderModal(riderId) {
  let r = null;
  for (const cls in RIDERS_DATABASE) {
    const found = RIDERS_DATABASE[cls].find(item => item.id === riderId);
    if (found) { r = found; break; }
  }
  if (!r) return;

  const modal = document.getElementById('rider-modal');
  const content = document.getElementById('modal-content');

  // Tautan Publik Bebas Login
  const openFreeUrl = `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(r.name + ' motorcycle racer')}`;

  content.innerHTML = `
    <div class="flex items-center justify-between border-b pb-3 border-slate-200 dark:border-slate-800">
      <div>
        <span class="text-xs font-bold text-racing-red uppercase">${r.country} ${r.flag} • ${r.team}</span>
        <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase">${r.name}</h3>
      </div>
      <span class="racing-number text-4xl font-black italic text-racing-red">#${r.number}</span>
    </div>

    <div class="grid grid-cols-2 gap-2 text-xs pt-1">
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
        <span class="text-[10px] text-slate-400 block uppercase font-bold">Motor Prototype:</span>
        <span class="font-bold text-slate-900 dark:text-white">${r.bike}</span>
      </div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
        <span class="text-[10px] text-slate-400 block uppercase font-bold">Tanggal Lahir:</span>
        <span class="font-bold text-slate-900 dark:text-white">${r.dob}</span>
      </div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
        <span class="text-[10px] text-slate-400 block uppercase font-bold">Prestasi Terbaik:</span>
        <span class="font-bold text-racing-red">${r.titles}</span>
      </div>
      <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl">
        <span class="text-[10px] text-slate-400 block uppercase font-bold">Kemenangan & Podium:</span>
        <span class="font-bold text-blue-500">${r.wins} • ${r.podiums}</span>
      </div>
    </div>

    <div class="text-xs space-y-2 pt-2">
      <div>
        <h4 class="font-bold text-slate-900 dark:text-white uppercase text-[11px]">Karakteristik & Gaya Balap:</h4>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed mt-0.5">${r.style}</p>
      </div>
      <div>
        <h4 class="font-bold text-slate-900 dark:text-white uppercase text-[11px]">Catatan Karier Resmi:</h4>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed mt-0.5">${r.bio}</p>
      </div>
    </div>

    <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
      <span class="text-[10px] text-emerald-500 font-bold flex items-center gap-1">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        Akses Publik Tanpa Login
      </span>
      <a href="${openFreeUrl}" target="_blank" rel="noreferrer noopener" class="bg-racing-red hover:bg-racing-darkred text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 shadow">
        <i data-lucide="external-link" class="w-3.5 h-3.5"></i> Buka Arsip Lengkap Bebas Login ↗
      </a>
    </div>
  `;

  modal.classList.remove('hidden');
  lucide.createIcons();
}

function closeRiderModal() {
  document.getElementById('rider-modal').classList.add('hidden');
}

const ZONE_INFO = {
  premiere: {
    title: "VIP Hospitality - Premiere",
    desc: "Pemandangan tepat di atas pitlane garasi tim dan garis starting grid. Termasuk akses Pitlane Walk resmi.",
    facility: "Full F&B, AC Lounge, Pitlane Walk",
    gforce: "1.2G — 1.5G (Apex Acceleration Straight)"
  },
  deluxe: {
    title: "VIP Hospitality - Deluxe",
    desc: "Lounge berpendingin udara mewah berpadu dengan tribun outdoor beratap untuk menikmati raungan mesin motor prototype dari jarak dekat.",
    facility: "Food & Beverage, Indoor AC Area, Covered Tribune",
    gforce: "1.3G (Straight to T1 transition)"
  },
  t1: {
    title: "VIP Luxury Tent (Turn 1)",
    desc: "Tenda mewah VIP tepat di zona pengereman paling brutal Tikungan 1 setelah lintasan lurus 723 meter berkecepatan 318 km/jam.",
    facility: "Full F&B, Premium Shaded Tent, Hard Braking View",
    gforce: "1.5G Deselerasi Ekstrem (Brembo High Stress)"
  },
  grandstand_covered: {
    title: "Premium Grandstand (A, B, C, J, K)",
    desc: "Tribun duduk terlindung atap (Covered Grandstand) dengan nomor kursi bebas. Menghadap langsung zona overtaking dan tikungan teknikal.",
    facility: "Covered Roof, Giant Screen View, F&B Booth Access",
    gforce: "1.2G — 1.4G (High Speed Cornering)"
  },
  grandstand_regular: {
    title: "Regular Grandstand (E, G, H, I)",
    desc: "Tribun terbuka (Uncovered) dengan sudut pandang aksi cornering cepat di sektor selatan sirkuit dengan latar perbukitan Mandalika.",
    facility: "Uncovered Free Seating, Giant Screen View, Merch Area",
    gforce: "1.1G (Flowing Turns)"
  },
  festival: {
    title: "Standing - Festival (General Admission)",
    desc: "Akses fleksibel ke area bukit pandang sirkuit dan panggung festival musik/konser hiburan tanpa akses ke kursi grandstand.",
    facility: "Viewing Zone Area Bukit, Festival Stage, UMKM Foodcourt",
    gforce: "Wide Circuit Atmosphere"
  }
};

function showZoneInfo(zoneKey) {
  const z = ZONE_INFO[zoneKey];
  if (!z) return;
  document.getElementById('zone-title').innerText = z.title;
  document.getElementById('zone-desc').innerText = z.desc;
  document.getElementById('zone-facility').innerText = z.facility;
  document.getElementById('zone-gforce').innerText = z.gforce;
}

// FUNGSI INISIALISASI HALAMAN & TAB
function switchTab(tabId) {
  document.querySelectorAll('.tab-pane').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('bg-racing-red', 'text-white', 'shadow-lg');
    btn.classList.add('bg-racing-sidebarCard', 'text-slate-300');
  });

  const activePane = document.getElementById(tabId);
  activePane.classList.remove('hidden');

  const activeBtn = document.getElementById(`btn-${tabId}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-racing-sidebarCard', 'text-slate-300');
    activeBtn.classList.add('bg-racing-red', 'text-white', 'shadow-lg');
  }

  // Tutup otomatis drawer di HP dan hilangkan overlay hitam
  const sidebar = document.getElementById('sidebar-drawer');
  const backdrop = document.getElementById('mobile-backdrop');
  if (sidebar && !sidebar.classList.contains('-translate-x-full')) {
    sidebar.classList.add('-translate-x-full');
  }
  if (backdrop && !backdrop.classList.contains('hidden')) {
    backdrop.classList.add('hidden');
  }

  lucide.createIcons();
}

document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  renderRidersGrid();
  initChartSejarahSpeed();
  initAllTimeLegendsChart();
  initChartEkonomiNTB();
  initChartOkupansiHotel();
  initChartTrafikBandara();
  initChartPDRBSektor();
  initChartPengeluaranTuris();
  initChartPekerjaLokal();
});

// ================= INITIALIZE CHARTS =================
function initChartSejarahSpeed() {
  const ctx = document.getElementById('chartSejarahSpeed').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1949 (AJS)', '1975 (2-Tak)', '1997 (Sentul)', '2002 (990cc)', '2016 (ECU)', '2024 (Aero)', '2027 (850cc)'],
      datasets: [{
        label: 'Top Speed Record (km/jam)',
        data: [155, 275, 312, 332, 354, 366.1, 340.0],
        borderColor: '#e10600',
        backgroundColor: 'rgba(225, 6, 0, 0.15)',
        fill: true,
        tension: 0.35,
        borderWidth: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { y: { min: 140, max: 380, grid: { color: '#e2e8f0' } } }
    }
  });
}

function initAllTimeLegendsChart() {
  const ctx = document.getElementById('chartAllTimeLegends').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Agostini (15)', 'Nieto (13)', 'Rossi (9)', 'Hailwood (9)', 'Marquez (8)', 'Lainnya'],
      datasets: [{
        data: [15, 13, 9, 9, 8, 46],
        backgroundColor: ['#e10600', '#2563eb', '#f59e0b', '#7c3aed', '#10b981', '#64748b']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 9 } } } }
    }
  });
}

function initChartEkonomiNTB() {
  const ctx = document.getElementById('chartEkonomiNTB').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2022', '2023', '2024', '2025/2026'],
      datasets: [{
        label: 'Triliun Rupiah',
        data: [3.8, 4.3, 4.5, 4.8],
        backgroundColor: ['#e10600', '#e10600', '#e10600', '#f59e0b'],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { min: 2.0, max: 6.0, grid: { color: '#e2e8f0' } } }
    }
  });
}

function initChartOkupansiHotel() {
  const ctx = document.getElementById('chartOkupansiHotel').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Normal', 'Race Week'],
      datasets: [
        { label: 'KEK Mandalika (%)', data: [42, 98], backgroundColor: '#e10600', borderRadius: 6 },
        { label: 'Mataram & Senggigi (%)', data: [38, 92], backgroundColor: '#2563eb', borderRadius: 6 }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: { y: { min: 0, max: 100, grid: { color: '#e2e8f0' } } }
    }
  });
}

function initChartTrafikBandara() {
  const ctx = document.getElementById('chartTrafikBandara').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['H-5', 'H-3', 'H-1', 'Race Day', 'H+1'],
      datasets: [{
        label: 'Penumpang / Hari',
        data: [4200, 6800, 11400, 14200, 13800],
        borderColor: '#e10600',
        backgroundColor: 'rgba(225, 6, 0, 0.15)',
        fill: true,
        tension: 0.3,
        borderWidth: 2.5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { grid: { color: '#e2e8f0' } } }
    }
  });
}

function initChartPDRBSektor() {
  const ctx = document.getElementById('chartPDRBSektor').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Transportasi', 'Hotel & Akomodasi', 'Restoran / F&B', 'UMKM Retail'],
      datasets: [{
        label: 'Pertumbuhan YoY (%)',
        data: [14.8, 18.2, 12.5, 9.4],
        backgroundColor: ['#e10600', '#2563eb', '#10b981', '#f59e0b'],
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { grid: { color: '#e2e8f0' } } }
    }
  });
}

function initChartPengeluaranTuris() {
  const ctx = document.getElementById('chartPengeluaranTuris').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Hotel (38%)', 'Tiket GP (28%)', 'Kuliner & F&B (18%)', 'UMKM & Transport (16%)'],
      datasets: [{
        data: [38, 28, 18, 16],
        backgroundColor: ['#e10600', '#2563eb', '#f59e0b', '#10b981']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 9 } } } }
    }
  });
}

function initChartPekerjaLokal() {
  const ctx = document.getElementById('chartPekerjaLokal').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Track Marshals FIM (32%)', 'Hospitality & Ticketing (28%)', 'Security & Logistik (25%)', 'Medis & Fasilitas (15%)'],
      datasets: [{
        data: [32, 28, 25, 15],
        backgroundColor: ['#e10600', '#f59e0b', '#2563eb', '#64748b']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 9 } } } }
    }
  });
}