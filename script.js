// Template Fallback internal (memungkinkan CV langsung berfungsi bahkan jika dibuka via file:// tanpa local server)
const fallbackTemplates = {
    gerobak: `<div class="cv-left-col w-full md:w-[35%] bg-[#f8fafc] flex flex-col py-6 md:py-10 px-6 md:px-8 border-b md:border-b-0 md:border-r border-gray-200">
    <div class="mb-8 md:mb-10 flex justify-center">
        <div class="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-[4px] border-cv-dark bg-white flex items-center justify-center relative shadow-sm">
            <template x-if="photoSrc">
                <img :src="photoSrc" alt="Profile" class="w-full h-full object-cover">
            </template>
            <template x-if="!photoSrc">
                <i class="fa-solid fa-user text-4xl md:text-5xl text-gray-300"></i>
            </template>
        </div>
    </div>
    <div class="mb-6 md:mb-8">
        <h3 class="font-lato font-bold text-cv-dark border-b-[2px] border-cv-dark pb-1 mb-4 text-[13px] tracking-widest uppercase">KONTAK</h3>
        <ul class="text-[12px] text-cv-charcoal space-y-3 leading-tight">
            <li class="flex items-start">
                <i class="fa-solid fa-envelope text-cv-dark w-5 text-center text-[12px] mt-0.5 shrink-0"></i> 
                <a href="mailto:muhamadikhsan.dev@gmail.com" target="_blank" class="flex-1 ml-1 break-all flex flex-wrap items-center gap-1 group">
                    <span class="cv-link-elegan break-all" contenteditable="true">muhamadikhsan.dev@gmail.com</span>
                </a>
            </li>
            <li class="flex items-center">
                <i class="fa-solid fa-location-dot text-cv-dark w-5 text-center text-[12px] shrink-0"></i> 
                <span contenteditable="true" class="flex-1 ml-1">Kab. Bogor, Jawa Barat</span>
            </li>
            <li class="flex items-start">
                <i class="fa-solid fa-phone text-cv-dark w-5 text-center text-[12px] mt-0.5 shrink-0"></i> 
                <a href="https://wa.me/628989379116" target="_blank" class="flex-1 ml-1 inline-flex items-center gap-1 group">
                    <span class="cv-link-elegan" contenteditable="true">+62 898-9379-116</span>
                </a>
            </li>
            <li class="flex items-center">
                <i class="fa-solid fa-id-card text-cv-dark w-5 text-center text-[12px] shrink-0"></i> 
                <span contenteditable="true" class="flex-1 ml-1">Usia: 18 Tahun (Laki-laki)</span>
            </li>
        </ul>
    </div>
    <div>
        <h3 class="font-lato font-bold text-cv-dark border-b-[2px] border-cv-dark pb-1 mb-4 text-[13px] tracking-widest uppercase">KETERAMPILAN UTAMA</h3>
        <ul contenteditable="true" class="text-[12.5px] text-cv-charcoal space-y-2 list-disc marker:text-cv-dark pl-4">
            <li>Pelayanan Pelanggan Ramah</li>
            <li>Transaksi Kasir & Hitungan Teliti</li>
            <li>Pencatatan Administrasi Sederhana</li>
            <li>Kebersihan & Display Gerobak</li>
            <li>Stok Opnam & Manajemen Barang</li>
            <li>Komunikasi Baik & Sopan</li>
            <li>Kedisiplinan & Etos Kerja Tinggi</li>
        </ul>
    </div>
</div>
<div class="cv-right-col w-full md:w-[65%] py-6 md:py-12 px-6 md:px-10 flex flex-col bg-white">
    <div class="mb-8 md:mb-10">
        <h1 contenteditable="true" class="font-playfair font-semibold text-3xl md:text-4xl uppercase text-cv-dark tracking-wide mb-1 leading-tight md:leading-none">MUHAMAD IKHSAN</h1>
        <h2 contenteditable="true" class="font-lato font-bold text-gray-500 text-sm tracking-[0.2em] uppercase leading-none mt-2">PENJAGA GEROBAK / OPERASIONAL TOKO</h2>
    </div>
    <div class="mb-8 md:mb-10">
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-3 text-[13px] tracking-widest uppercase">PROFIL RINGKAS</h3>
        <div contenteditable="true" class="text-[13px] text-cv-charcoal text-justify leading-relaxed">
            Pemuda berusia 18 tahun lulusan SMK PPLG yang jujur, disiplin, dan komunikatif. Berdomisili di Bogor serta siap bekerja penuh waktu dengan sistem shift sore/malam. Memiliki ketertarikan tinggi di bidang operasional kuliner retail, pelayanan konsumen, serta penataan display produk. Cepat belajar, terbiasa dengan pembukuan dan perhitungan angka yang presisi, serta siap menjaga kebersihan gerobak dan melayani pelanggan dengan ramah demi mendukung pertumbuhan outlet PT Selaras Rasakoe Indonesia.
        </div>
    </div>
    <div class="mb-8 md:mb-10">
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-4 text-[13px] tracking-widest uppercase">MINAT & KESIAPAN KERJA</h3>
        <div contenteditable="true" class="text-cv-charcoal">
            <ul class="text-[13px] list-disc pl-4 space-y-2.5 marker:text-cv-dark leading-relaxed">
                <li><strong>Kebersihan & Tampilan Outlet:</strong> Berkomitmen untuk selalu menjaga kebersihan fisik gerobak, peralatan, dan kerapian display barang agar terlihat higienis dan menarik minat pembeli.</li>
                <li><strong>Pelayanan Kasir & Konsumen:</strong> Siap menyapa setiap pelanggan secara sopan, melayani transaksi penjualan tunai/non-tunai secara jujur, akurat, dan ramah.</li>
                <li><strong>Manajemen Stok & Administrasi:</strong> Terbiasa melakukan perhitungan matematis dasar dan input data untuk mencatat pemasukan harian, sisa stok produk, serta laporan penjualan sederhana.</li>
                <li><strong>Fleksibilitas Kerja:</strong> Siap bekerja 6 hari seminggu pada shift sore/malam dan sigap belajar operasional gerobak sesuai panduan SOP perusahaan.</li>
            </ul>
        </div>
    </div>
    <div>
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-4 text-[13px] tracking-widest uppercase">PENDIDIKAN</h3>
        <div contenteditable="true" class="text-cv-charcoal">
            <div>
                <h4 class="font-lato font-bold text-[14px] text-cv-dark">SMKN 1 CIOMAS</h4>
                <div class="text-[13px] mt-0.5 text-gray-700">Pengembangan Perangkat Lunak dan Gim (PPLG) — Kab. Bogor, Jawa Barat</div>
                <div class="text-[12px] italic mt-0.5 text-gray-500">Lulus Mei 2026</div>
            </div>
        </div>
    </div>
</div>`,

    laundry: `<div class="cv-left-col w-full md:w-[35%] bg-[#f8fafc] flex flex-col py-6 md:py-10 px-6 md:px-8 border-b md:border-b-0 md:border-r border-gray-200">
    <div class="mb-8 md:mb-10 flex justify-center">
        <div class="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-[4px] border-cv-dark bg-white flex items-center justify-center relative shadow-sm">
            <template x-if="photoSrc">
                <img :src="photoSrc" alt="Profile" class="w-full h-full object-cover">
            </template>
            <template x-if="!photoSrc">
                <i class="fa-solid fa-user text-4xl md:text-5xl text-gray-300"></i>
            </template>
        </div>
    </div>
    <div class="mb-6 md:mb-8">
        <h3 class="font-lato font-bold text-cv-dark border-b-[2px] border-cv-dark pb-1 mb-4 text-[13px] tracking-widest uppercase">KONTAK</h3>
        <ul class="text-[12px] text-cv-charcoal space-y-3 leading-tight">
            <li class="flex items-start">
                <i class="fa-solid fa-envelope text-cv-dark w-5 text-center text-[12px] mt-0.5 shrink-0"></i> 
                <a href="mailto:muhamadikhsan.dev@gmail.com" target="_blank" class="flex-1 ml-1 break-all flex flex-wrap items-center gap-1 group">
                    <span class="cv-link-elegan break-all" contenteditable="true">muhamadikhsan.dev@gmail.com</span>
                </a>
            </li>
            <li class="flex items-center">
                <i class="fa-solid fa-location-dot text-cv-dark w-5 text-center text-[12px] shrink-0"></i> 
                <span contenteditable="true" class="flex-1 ml-1">Kab. Bogor, Jawa Barat</span>
            </li>
            <li class="flex items-start">
                <i class="fa-solid fa-phone text-cv-dark w-5 text-center text-[12px] mt-0.5 shrink-0"></i> 
                <a href="https://wa.me/628989379116" target="_blank" class="flex-1 ml-1 inline-flex items-center gap-1 group">
                    <span class="cv-link-elegan" contenteditable="true">+62 898-9379-116</span>
                </a>
            </li>
            <li class="flex items-center">
                <i class="fa-solid fa-id-card text-cv-dark w-5 text-center text-[12px] shrink-0"></i> 
                <span contenteditable="true" class="flex-1 ml-1">Usia: 18 Tahun (Laki-laki)</span>
            </li>
        </ul>
    </div>
    <div>
        <h3 class="font-lato font-bold text-cv-dark border-b-[2px] border-cv-dark pb-1 mb-4 text-[13px] tracking-widest uppercase">KETERAMPILAN UTAMA</h3>
        <ul contenteditable="true" class="text-[12.5px] text-cv-charcoal space-y-2 list-disc marker:text-cv-dark pl-4">
            <li>Pencucian & Pemilahan Bahan Pakaian</li>
            <li>Teknik Setrika Rapi & Cepat</li>
            <li>Pengepakan (Packing) Higienis</li>
            <li>Pencatatan Nota & Penimbangan Bagian Kasir</li>
            <li>Manajemen Deterjen & Bahan Kimia</li>
            <li>Kelitian Jenis Kain & Perawatan Pakaian</li>
            <li>Kedisiplinan & Kejujuran</li>
        </ul>
    </div>
</div>
<div class="cv-right-col w-full md:w-[65%] py-6 md:py-12 px-6 md:px-10 flex flex-col bg-white">
    <div class="mb-8 md:mb-10">
        <h1 contenteditable="true" class="font-playfair font-semibold text-3xl md:text-4xl uppercase text-cv-dark tracking-wide mb-1 leading-tight md:leading-none">MUHAMAD IKHSAN</h1>
        <h2 contenteditable="true" class="font-lato font-bold text-gray-500 text-sm tracking-[0.2em] uppercase leading-none mt-2">STAF OPERASIONAL LAUNDRY / KASIR</h2>
    </div>
    <div class="mb-8 md:mb-10">
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-3 text-[13px] tracking-widest uppercase">PROFIL RINGKAS</h3>
        <div contenteditable="true" class="text-[13px] text-cv-charcoal text-justify leading-relaxed">
            Lulusan SMK PPLG berusia 18 tahun yang terbiasa bekerja rapi, rapih, teliti, serta disiplin tinggi. Memiliki minat besar untuk bekerja di operasional usaha laundry, mulai dari penerimaan barang, penimbangan, pencucian sesuai jenis kain, penyetrikaan presisi, hingga packing rapi. Siap bekerja secara penuh waktu demi menjaga kualitas kebersihan pakaian pelanggan dan citra outlet.
        </div>
    </div>
    <div class="mb-8 md:mb-10">
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-4 text-[13px] tracking-widest uppercase">MINAT & KESIAPAN KERJA</h3>
        <div contenteditable="true" class="text-cv-charcoal">
            <ul class="text-[13px] list-disc pl-4 space-y-2.5 marker:text-cv-dark leading-relaxed">
                <li><strong>Penerimaan & Kasir Laundry:</strong> Menerima pakaian pelanggan, melakukan penimbangan dengan tepat, mencatat nota transaksi, serta memberikan estimasi waktu selesai secara sopan.</li>
                <li><strong>Pemilahan & Proses Cuci:</strong> Teliti memisahkan jenis pakaian berdasarkan warna dan bahan, serta menggunakan takaran deterjen/pewangi yang sesuai SOP.</li>
                <li><strong>Finishing & Packing:</strong> Menguasai teknik menyetrika pakaian dengan cepat dan rapi serta melakukan packing teratur agar pakaian tetap harum dan siap diambil pelanggan.</li>
                <li><strong>Perawatan Peralatan:</strong> Menjaga kebersihan mesin cuci, mesin pengering, dan area kerja agar operasional harian berjalan lancar tanpa kendala.</li>
            </ul>
        </div>
    </div>
    <div>
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-4 text-[13px] tracking-widest uppercase">PENDIDIKAN</h3>
        <div contenteditable="true" class="text-cv-charcoal">
            <div>
                <h4 class="font-lato font-bold text-[14px] text-cv-dark">SMKN 1 CIOMAS</h4>
                <div class="text-[13px] mt-0.5 text-gray-700">Pengembangan Perangkat Lunak dan Gim (PPLG) — Kab. Bogor, Jawa Barat</div>
                <div class="text-[12px] italic mt-0.5 text-gray-500">Lulus Mei 2026</div>
            </div>
        </div>
    </div>
</div>`,

    fullstack: `<div class="cv-left-col w-full md:w-[35%] bg-[#f8fafc] flex flex-col py-6 md:py-10 px-6 md:px-8 border-b md:border-b-0 md:border-r border-gray-200">
    <div class="mb-8 md:mb-10 flex justify-center">
        <div class="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-[4px] border-cv-dark bg-white flex items-center justify-center relative shadow-sm">
            <template x-if="photoSrc">
                <img :src="photoSrc" alt="Profile" class="w-full h-full object-cover">
            </template>
            <template x-if="!photoSrc">
                <i class="fa-solid fa-user text-4xl md:text-5xl text-gray-300"></i>
            </template>
        </div>
    </div>
    <div class="mb-6 md:mb-8">
        <h3 class="font-lato font-bold text-cv-dark border-b-[2px] border-cv-dark pb-1 mb-4 text-[13px] tracking-widest uppercase">CONTACT</h3>
        <ul class="text-[12px] text-cv-charcoal space-y-3 leading-tight">
            <li class="flex items-start">
                <i class="fa-solid fa-envelope text-cv-dark w-5 text-center text-[12px] mt-0.5 shrink-0"></i> 
                <a href="mailto:muhamadikhsan.dev@gmail.com" target="_blank" class="flex-1 ml-1 break-all flex flex-wrap items-center gap-1 group">
                    <span class="cv-link-elegan break-all" contenteditable="true">muhamadikhsan.dev@gmail.com</span>
                </a>
            </li>
            <li class="flex items-center">
                <i class="fa-solid fa-house text-cv-dark w-5 text-center text-[12px] shrink-0"></i> 
                <span contenteditable="true" class="flex-1 ml-1">Bogor, Jawa Barat</span>
            </li>
            <li class="flex items-start">
                <i class="fa-solid fa-phone text-cv-dark w-5 text-center text-[12px] mt-0.5 shrink-0"></i> 
                <a href="https://wa.me/628989379116" target="_blank" class="flex-1 ml-1 inline-flex items-center gap-1 group">
                    <span class="cv-link-elegan" contenteditable="true">+62 898-9379-116</span>
                </a>
            </li>
            <li class="flex items-center">
                <i class="fa-solid fa-globe text-cv-dark w-5 text-center text-[12px] shrink-0"></i> 
                <a href="https://muhamadikhsan-dev.vercel.app" target="_blank" class="flex-1 ml-1 break-all flex flex-wrap items-center gap-1 group">
                    <span class="cv-link-elegan break-all" contenteditable="true">muhamadikhsan-dev.vercel.app</span>
                </a>
            </li>
        </ul>
    </div>
    <div>
        <h3 class="font-lato font-bold text-cv-dark border-b-[2px] border-cv-dark pb-1 mb-4 text-[13px] tracking-widest uppercase">SKILLS</h3>
        <div contenteditable="true" class="text-[12px] text-cv-charcoal space-y-3">
            <div>
                <h4 class="font-bold text-cv-dark text-[11px] uppercase tracking-wider mb-1">Frontend Development</h4>
                <p class="leading-relaxed">Next.js, React.js, TypeScript, JavaScript, Tailwind CSS, Flutter</p>
            </div>
            <div>
                <h4 class="font-bold text-cv-dark text-[11px] uppercase tracking-wider mb-1">Backend & Database</h4>
                <p class="leading-relaxed">Laravel, FastAPI, PHP, Python, REST API, PostgreSQL, MySQL</p>
            </div>
            <div>
                <h4 class="font-bold text-cv-dark text-[11px] uppercase tracking-wider mb-1">Tools & Mobile</h4>
                <p class="leading-relaxed">Git, Dart</p>
            </div>
            <div>
                <h4 class="font-bold text-cv-dark text-[11px] uppercase tracking-wider mb-1">Soft Skills</h4>
                <ul class="list-disc pl-4 space-y-0.5 marker:text-cv-dark">
                    <li>Problem Solving</li>
                    <li>Analytical Thinking</li>
                    <li>Adaptability</li>
                    <li>Time Management</li>
                    <li>Effective Communication</li>
                    <li>Team Collaboration</li>
                    <li>Continuous Learning</li>
                </ul>
            </div>
        </div>
    </div>
</div>
<div class="cv-right-col w-full md:w-[65%] py-6 md:py-12 px-6 md:px-10 flex flex-col bg-white">
    <div class="mb-8 md:mb-10">
        <h1 contenteditable="true" class="font-playfair font-semibold text-3xl md:text-4xl uppercase text-cv-dark tracking-wide mb-1 leading-tight md:leading-none">MUHAMAD IKHSAN</h1>
        <h2 contenteditable="true" class="font-lato font-bold text-gray-500 text-sm tracking-[0.2em] uppercase leading-none mt-2">FULLSTACK DEVELOPER</h2>
    </div>
    <div class="mb-8 md:mb-10">
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-3 text-[13px] tracking-widest uppercase">SUMMARY</h3>
        <div contenteditable="true" class="text-[13px] text-cv-charcoal text-justify leading-relaxed">
            Fullstack Developer dengan pengalaman membangun aplikasi web dan mobile menggunakan Laravel, Next.js, Flutter, MySQL, PostgreSQL, dan REST API. Memiliki pengalaman magang sebagai Fullstack Developer serta mengembangkan beberapa project seperti CRM, POS, Learning Management System, dan Portfolio Website.
        </div>
    </div>
    <div class="mb-8 md:mb-10">
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-4 text-[13px] tracking-widest uppercase">WORK EXPERIENCE</h3>
        <div contenteditable="true" class="text-cv-charcoal space-y-4">
            <div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h4 class="font-lato font-bold text-[14px] text-cv-dark">FULLSTACK PROJECT | CLIENTRA CRM SYSTEM</h4>
                    <span class="text-[12px] font-semibold text-gray-500">Juni 2026 - Sekarang</span>
                </div>
                <div class="text-[12px] italic text-gray-600 mb-1">Next.js, FastAPI, PostgreSQL</div>
                <ul class="text-[13px] list-disc pl-4 space-y-1 marker:text-cv-dark leading-relaxed">
                    <li>Mengembangkan sistem CRM untuk pengelolaan pelanggan dan aktivitas bisnis.</li>
                    <li>Membangun REST API menggunakan FastAPI dan PostgreSQL.</li>
                </ul>
            </div>
            <div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h4 class="font-lato font-bold text-[14px] text-cv-dark">IT INTERN / FULL STACK DEVELOPER</h4>
                    <span class="text-[12px] font-semibold text-gray-500">Juli 2025 - Desember 2025</span>
                </div>
                <div class="text-[12px] text-gray-700 font-medium">Dymo Group . Jakarta Selatan, DKI Jakarta</div>
                <div class="text-[12px] italic text-gray-600 mb-1">Laravel, MySQL, JavaScript, Tailwind CSS</div>
                <ul class="text-[13px] list-disc pl-4 space-y-1 marker:text-cv-dark leading-relaxed">
                    <li>Mengembangkan dan memelihara Learning Management System (LMS).</li>
                    <li>Membangun fitur CRUD, dashboard, dan pengelolaan data pembelajaran.</li>
                </ul>
            </div>
            <div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h4 class="font-lato font-bold text-[14px] text-cv-dark">PERSONAL PROJECT | KASWIRA POINT OF SALE (POS)</h4>
                    <span class="text-[12px] font-semibold text-gray-500">Januari 2025 - Juni 2025</span>
                </div>
                <div class="text-[12px] italic text-gray-600 mb-1">Laravel, MySQL, JavaScript, Tailwind CSS</div>
                <ul class="text-[13px] list-disc pl-4 space-y-1 marker:text-cv-dark leading-relaxed">
                    <li>Mengembangkan sistem Point of Sale (POS) untuk transaksi penjualan.</li>
                    <li>Membangun fitur manajemen produk dan laporan penjualan.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="mb-8 md:mb-10">
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-4 text-[13px] tracking-widest uppercase">EDUCATION</h3>
        <div contenteditable="true" class="text-cv-charcoal">
            <div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <h4 class="font-lato font-bold text-[14px] text-cv-dark">PENGEMBANGAN PERANGKAT LUNAK DAN GIM (PPLG)</h4>
                    <span class="text-[12px] font-semibold text-gray-500">Juli 2023 - Mei 2026</span>
                </div>
                <div class="text-[13px] mt-0.5 text-gray-700">SMKN 1 CIOMAS . Bogor, Jawa Barat</div>
            </div>
        </div>
    </div>
    <div>
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-4 text-[13px] tracking-widest uppercase">COURSES AND CERTIFICATES</h3>
        <div contenteditable="true" class="text-cv-charcoal">
            <ul class="text-[13px] space-y-1.5 list-disc pl-4 marker:text-cv-dark">
                <li><strong>API INTRODUCTION</strong> — MySkill . Online <span class="text-[12px] text-gray-500">(Juni 2025)</span></li>
                <li><strong>PKL DIVISI IT</strong> — Dymo Group . Jakarta Selatan <span class="text-[12px] text-gray-500">(Juli 2025)</span></li>
                <li><strong>BACKEND INTRODUCTION</strong> — MySkill . Online <span class="text-[12px] text-gray-500">(Juni 2025)</span></li>
                <li><strong>INTRODUCTION REACT</strong> — MySkill . Online <span class="text-[12px] text-gray-500">(Juni 2025)</span></li>
            </ul>
        </div>
    </div>
</div>`,

    gudang: `<div class="cv-left-col w-full md:w-[35%] bg-[#f8fafc] flex flex-col py-6 md:py-10 px-6 md:px-8 border-b md:border-b-0 md:border-r border-gray-200">
    <div class="mb-8 md:mb-10 flex justify-center">
        <div class="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-[4px] border-cv-dark bg-white flex items-center justify-center relative shadow-sm">
            <template x-if="photoSrc">
                <img :src="photoSrc" alt="Profile" class="w-full h-full object-cover">
            </template>
            <template x-if="!photoSrc">
                <i class="fa-solid fa-user text-4xl md:text-5xl text-gray-300"></i>
            </template>
        </div>
    </div>
    <div class="mb-6 md:mb-8">
        <h3 class="font-lato font-bold text-cv-dark border-b-[2px] border-cv-dark pb-1 mb-4 text-[13px] tracking-widest uppercase">KONTAK</h3>
        <ul class="text-[12px] text-cv-charcoal space-y-3 leading-tight">
            <li class="flex items-start">
                <i class="fa-solid fa-envelope text-cv-dark w-5 text-center text-[12px] mt-0.5 shrink-0"></i> 
                <a href="mailto:muhamadikhsan.dev@gmail.com" target="_blank" class="flex-1 ml-1 break-all flex flex-wrap items-center gap-1 group">
                    <span class="cv-link-elegan break-all" contenteditable="true">muhamadikhsan.dev@gmail.com</span>
                </a>
            </li>
            <li class="flex items-center">
                <i class="fa-solid fa-location-dot text-cv-dark w-5 text-center text-[12px] shrink-0"></i> 
                <span contenteditable="true" class="flex-1 ml-1">Kab. Bogor, Jawa Barat</span>
            </li>
            <li class="flex items-start">
                <i class="fa-solid fa-phone text-cv-dark w-5 text-center text-[12px] mt-0.5 shrink-0"></i> 
                <a href="https://wa.me/628989379116" target="_blank" class="flex-1 ml-1 inline-flex items-center gap-1 group">
                    <span class="cv-link-elegan" contenteditable="true">+62 898-9379-116</span>
                </a>
            </li>
            <li class="flex items-center">
                <i class="fa-solid fa-id-card text-cv-dark w-5 text-center text-[12px] shrink-0"></i> 
                <span contenteditable="true" class="flex-1 ml-1">Usia: 18 Tahun (Laki-laki)</span>
            </li>
        </ul>
    </div>
    <div>
        <h3 class="font-lato font-bold text-cv-dark border-b-[2px] border-cv-dark pb-1 mb-4 text-[13px] tracking-widest uppercase">KETERAMPILAN UTAMA</h3>
        <ul contenteditable="true" class="text-[12.5px] text-cv-charcoal space-y-2 list-disc marker:text-cv-dark pl-4">
            <li>Stok Opname & Audit Barang</li>
            <li>Pencatatan Inbound & Outbound</li>
            <li>Pengoperasian Ms. Excel / Spreadsheet</li>
            <li>Penataan Layout & Display Barang</li>
            <li>Packing & Labeling Produk</li>
            <li>Fisik Kuat & Ketelitian Tinggi</li>
            <li>Manajemen Waktu Baik</li>
        </ul>
    </div>
</div>
<div class="cv-right-col w-full md:w-[65%] py-6 md:py-12 px-6 md:px-10 flex flex-col bg-white">
    <div class="mb-8 md:mb-10">
        <h1 contenteditable="true" class="font-playfair font-semibold text-3xl md:text-4xl uppercase text-cv-dark tracking-wide mb-1 leading-tight md:leading-none">MUHAMAD IKHSAN</h1>
        <h2 contenteditable="true" class="font-lato font-bold text-gray-500 text-sm tracking-[0.2em] uppercase leading-none mt-2">STAFF GUDANG / ADMIN LOGISTIK</h2>
    </div>
    <div class="mb-8 md:mb-10">
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-3 text-[13px] tracking-widest uppercase">PROFIL RINGKAS</h3>
        <div contenteditable="true" class="text-[13px] text-cv-charcoal text-justify leading-relaxed">
            Pemuda berusia 18 tahun lulusan SMK PPLG yang memiliki stamina fisik prima, disiplin, serta tingkat ketelitian tinggi. Mampu melakukan pengelolaan inventaris, pencatatan masuk-keluar barang (inbound/outbound), serta penyusunan laporan persediaan barang berbasis komputer (Spreadsheet/Excel). Siap bekerja keras dan bekerja dalam tim logistik gudang.
        </div>
    </div>
    <div class="mb-8 md:mb-10">
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-4 text-[13px] tracking-widest uppercase">MINAT & KESIAPAN KERJA</h3>
        <div contenteditable="true" class="text-cv-charcoal">
            <ul class="text-[13px] list-disc pl-4 space-y-2.5 marker:text-cv-dark leading-relaxed">
                <li><strong>Manajemen Stok & Opname:</strong> Terbiasa menghitung jumlah barang secara akurat dan mencocokkan fisik persediaan dengan data sistem.</li>
                <li><strong>Pencatatan & Data Entry:</strong> Terampil mengoperasikan komputer untuk memasukkan data penerimaan dan pengiriman barang secara efisien.</li>
                <li><strong>Penyimpanan & Packing:</strong> Menata letak barang sesuai kategori serta menyiapkan proses pengepakan pesanan dengan rapi dan aman sebelum dikirim.</li>
            </ul>
        </div>
    </div>
    <div>
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-4 text-[13px] tracking-widest uppercase">PENDIDIKAN</h3>
        <div contenteditable="true" class="text-cv-charcoal">
            <div>
                <h4 class="font-lato font-bold text-[14px] text-cv-dark">SMKN 1 CIOMAS</h4>
                <div class="text-[13px] mt-0.5 text-gray-700">Pengembangan Perangkat Lunak dan Gim (PPLG) — Kab. Bogor, Jawa Barat</div>
                <div class="text-[12px] italic mt-0.5 text-gray-500">Lulus Mei 2026</div>
            </div>
        </div>
    </div>
</div>`,

    kasir: `<div class="cv-left-col w-full md:w-[35%] bg-[#f8fafc] flex flex-col py-6 md:py-10 px-6 md:px-8 border-b md:border-b-0 md:border-r border-gray-200">
    <div class="mb-8 md:mb-10 flex justify-center">
        <div class="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-[4px] border-cv-dark bg-white flex items-center justify-center relative shadow-sm">
            <template x-if="photoSrc">
                <img :src="photoSrc" alt="Profile" class="w-full h-full object-cover">
            </template>
            <template x-if="!photoSrc">
                <i class="fa-solid fa-user text-4xl md:text-5xl text-gray-300"></i>
            </template>
        </div>
    </div>
    <div class="mb-6 md:mb-8">
        <h3 class="font-lato font-bold text-cv-dark border-b-[2px] border-cv-dark pb-1 mb-4 text-[13px] tracking-widest uppercase">KONTAK</h3>
        <ul class="text-[12px] text-cv-charcoal space-y-3 leading-tight">
            <li class="flex items-start">
                <i class="fa-solid fa-envelope text-cv-dark w-5 text-center text-[12px] mt-0.5 shrink-0"></i> 
                <a href="mailto:muhamadikhsan.dev@gmail.com" target="_blank" class="flex-1 ml-1 break-all flex flex-wrap items-center gap-1 group">
                    <span class="cv-link-elegan break-all" contenteditable="true">muhamadikhsan.dev@gmail.com</span>
                </a>
            </li>
            <li class="flex items-center">
                <i class="fa-solid fa-location-dot text-cv-dark w-5 text-center text-[12px] shrink-0"></i> 
                <span contenteditable="true" class="flex-1 ml-1">Kab. Bogor, Jawa Barat</span>
            </li>
            <li class="flex items-start">
                <i class="fa-solid fa-phone text-cv-dark w-5 text-center text-[12px] mt-0.5 shrink-0"></i> 
                <a href="https://wa.me/628989379116" target="_blank" class="flex-1 ml-1 inline-flex items-center gap-1 group">
                    <span class="cv-link-elegan" contenteditable="true">+62 898-9379-116</span>
                </a>
            </li>
            <li class="flex items-center">
                <i class="fa-solid fa-id-card text-cv-dark w-5 text-center text-[12px] shrink-0"></i> 
                <span contenteditable="true" class="flex-1 ml-1">Usia: 18 Tahun (Laki-laki)</span>
            </li>
        </ul>
    </div>
    <div>
        <h3 class="font-lato font-bold text-cv-dark border-b-[2px] border-cv-dark pb-1 mb-4 text-[13px] tracking-widest uppercase">KETERAMPILAN UTAMA</h3>
        <ul contenteditable="true" class="text-[12.5px] text-cv-charcoal space-y-2 list-disc marker:text-cv-dark pl-4">
            <li>Pengoperasian Mesin Kasir & Aplikasi POS</li>
            <li>Transaksi Tunai & Non-Tunai (QRIS / EDC / Debit)</li>
            <li>Pelayanan Pelanggan Ramah (Customer Service)</li>
            <li>Rekonsiliasi & Perhitungan Kas Harian (Closing Kasir)</li>
            <li>Ketelitian Perhitungan & Uang Kembalian</li>
            <li>Penataan Display Produk & Barcode Scanning</li>
            <li>Kedisiplinan, Kejujuran, & Tanggung Jawab</li>
        </ul>
    </div>
</div>
<div class="cv-right-col w-full md:w-[65%] py-6 md:py-12 px-6 md:px-10 flex flex-col bg-white">
    <div class="mb-8 md:mb-10">
        <h1 contenteditable="true" class="font-playfair font-semibold text-3xl md:text-4xl uppercase text-cv-dark tracking-wide mb-1 leading-tight md:leading-none">MUHAMAD IKHSAN</h1>
        <h2 contenteditable="true" class="font-lato font-bold text-gray-500 text-sm tracking-[0.2em] uppercase leading-none mt-2">KASIR / PRAMUNIAGA TOKO</h2>
    </div>
    <div class="mb-8 md:mb-10">
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-3 text-[13px] tracking-widest uppercase">PROFIL RINGKAS</h3>
        <div contenteditable="true" class="text-[13px] text-cv-charcoal text-justify leading-relaxed">
            Pemuda berusia 18 tahun lulusan SMK PPLG yang jujur, teliti, ramah, dan berorientasi pada kepuasan pelanggan. Memiliki pemahaman yang baik dalam pengoperasian perangkat lunak Point of Sale (POS), pencatatan transaksi kasir, serta alur pembayaran tunai maupun non-tunai (QRIS/EDC). Terbiasa dengan perhitungan matematis yang presisi, cepat beradaptasi dengan lingkungan ritel, serta siap bekerja dengan sistem shift secara profesional demi kelancaran operasional toko.
        </div>
    </div>
    <div class="mb-8 md:mb-10">
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-4 text-[13px] tracking-widest uppercase">MINAT & KESIAPAN KERJA</h3>
        <div contenteditable="true" class="text-cv-charcoal">
            <ul class="text-[13px] list-disc pl-4 space-y-2.5 marker:text-cv-dark leading-relaxed">
                <li><strong>Pelayanan Transaksi & Kasir:</strong> Siap menyapa setiap pelanggan dengan senyum dan sopan, memindai barcode barang secara cepat, serta melayani pembayaran tunai/non-tunai dengan akurat.</li>
                <li><strong>Ketelitian Kas & Closing Shift:</strong> Terbiasa menghitung uang kas masuk secara teliti dan mencocokkan total fisik dengan laporan rekonsiliasi pada sistem POS tanpa selisih.</li>
                <li><strong>Pelayanan Konsumen (Service Excellence):</strong> Mampu memberikan informasi produk kepada pembeli, melayani dengan ramah dan tanggap, serta menjaga antrean kasir tetap teratur dan nyaman.</li>
                <li><strong>Kebersihan & Kerapian Kasir:</strong> Menjaga kebersihan area meja kasir, memastikan ketersediaan kantong belanja dan kertas struk, serta siap membantu display produk saat toko senggang.</li>
            </ul>
        </div>
    </div>
    <div>
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-4 text-[13px] tracking-widest uppercase">PENDIDIKAN</h3>
        <div contenteditable="true" class="text-cv-charcoal">
            <div>
                <h4 class="font-lato font-bold text-[14px] text-cv-dark">SMKN 1 CIOMAS</h4>
                <div class="text-[13px] mt-0.5 text-gray-700">Pengembangan Perangkat Lunak dan Gim (PPLG) — Kab. Bogor, Jawa Barat</div>
                <div class="text-[12px] italic mt-0.5 text-gray-500">Lulus Mei 2026</div>
            </div>
        </div>
    </div>
</div>`,

    bakery: `<div class="cv-left-col w-full md:w-[35%] bg-[#f8fafc] flex flex-col py-6 md:py-10 px-6 md:px-8 border-b md:border-b-0 md:border-r border-gray-200">
    <div class="mb-8 md:mb-10 flex justify-center">
        <div class="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-[4px] border-cv-dark bg-white flex items-center justify-center relative shadow-sm">
            <template x-if="photoSrc">
                <img :src="photoSrc" alt="Profile" class="w-full h-full object-cover">
            </template>
            <template x-if="!photoSrc">
                <i class="fa-solid fa-user text-4xl md:text-5xl text-gray-300"></i>
            </template>
        </div>
    </div>
    <div class="mb-6 md:mb-8">
        <h3 class="font-lato font-bold text-cv-dark border-b-[2px] border-cv-dark pb-1 mb-4 text-[13px] tracking-widest uppercase">KONTAK</h3>
        <ul class="text-[12px] text-cv-charcoal space-y-3 leading-tight">
            <li class="flex items-start">
                <i class="fa-solid fa-envelope text-cv-dark w-5 text-center text-[12px] mt-0.5 shrink-0"></i> 
                <a href="mailto:muhamadikhsan.dev@gmail.com" target="_blank" class="flex-1 ml-1 break-all flex flex-wrap items-center gap-1 group">
                    <span class="cv-link-elegan break-all" contenteditable="true">muhamadikhsan.dev@gmail.com</span>
                </a>
            </li>
            <li class="flex items-center">
                <i class="fa-solid fa-location-dot text-cv-dark w-5 text-center text-[12px] shrink-0"></i> 
                <span contenteditable="true" class="flex-1 ml-1">Kab. Bogor, Jawa Barat</span>
            </li>
            <li class="flex items-start">
                <i class="fa-solid fa-phone text-cv-dark w-5 text-center text-[12px] mt-0.5 shrink-0"></i> 
                <a href="https://wa.me/628989379116" target="_blank" class="flex-1 ml-1 inline-flex items-center gap-1 group">
                    <span class="cv-link-elegan" contenteditable="true">+62 898-9379-116</span>
                </a>
            </li>
            <li class="flex items-center">
                <i class="fa-solid fa-id-card text-cv-dark w-5 text-center text-[12px] shrink-0"></i> 
                <span contenteditable="true" class="flex-1 ml-1">Usia: 18 Tahun (Laki-laki)</span>
            </li>
        </ul>
    </div>
    <div>
        <h3 class="font-lato font-bold text-cv-dark border-b-[2px] border-cv-dark pb-1 mb-4 text-[13px] tracking-widest uppercase">KETERAMPILAN UTAMA</h3>
        <ul contenteditable="true" class="text-[12.5px] text-cv-charcoal space-y-2 list-disc marker:text-cv-dark pl-4">
            <li>Penimbangan Bahan Presisi (Scaling Gramasi)</li>
            <li>Higienitas & Sanitasi Dapur (Food Safety Dasar)</li>
            <li>Kesiapan Belajar Adonan, Proofing & Baking</li>
            <li>Stamina Fisik Prima (Terbiasa Kerja Aktif)</li>
            <li>Pembersihan & Perawatan Loyang serta Oven</li>
            <li>Pengepakan (Packaging) & Display Roti Segar</li>
            <li>Disiplin Shift Subuh/Pagi & Kerja Sama Tim</li>
        </ul>
    </div>
</div>
<div class="cv-right-col w-full md:w-[65%] py-6 md:py-12 px-6 md:px-10 flex flex-col bg-white">
    <div class="mb-8 md:mb-10">
        <h1 contenteditable="true" class="font-playfair font-semibold text-3xl md:text-4xl uppercase text-cv-dark tracking-wide mb-1 leading-tight md:leading-none">MUHAMAD IKHSAN</h1>
        <h2 contenteditable="true" class="font-lato font-bold text-gray-500 text-sm tracking-[0.2em] uppercase leading-none mt-2">CREW BAKERY / HELPER PEMBUAT ROTI</h2>
    </div>
    <div class="mb-8 md:mb-10">
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-3 text-[13px] tracking-widest uppercase">PROFIL RINGKAS</h3>
        <div contenteditable="true" class="text-[13px] text-cv-charcoal text-justify leading-relaxed">
            Pemuda berusia 18 tahun lulusan SMK PPLG yang berenergi positif, disiplin, teliti, dan memiliki motivasi besar untuk memulai karir di bidang produksi roti (*bakery*). Walaupun belum memiliki pengalaman kerja formal di dapur roti, saya memiliki kemauan belajar yang sangat tinggi (*fast learner*), stamina fisik prima untuk bekerja aktif dan berdiri lama, serta terbiasa dengan perhitungan angka yang presisi. Siap dibimbing dari nol mengenai standar resep, persiapan adonan, pemantauan oven, hingga pemeliharaan kebersihan dapur demi menjaga mutu dan cita rasa produk roti.
        </div>
    </div>
    <div class="mb-8 md:mb-10">
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-4 text-[13px] tracking-widest uppercase">MINAT & KESIAPAN KERJA</h3>
        <div contenteditable="true" class="text-cv-charcoal">
            <ul class="text-[13px] list-disc pl-4 space-y-2.5 marker:text-cv-dark leading-relaxed">
                <li><strong>Kemauan Belajar dari Dasar:</strong> Sangat antusias mempelajari alur produksi roti secara menyeluruh—mulai dari penyiapan bahan (*mise en place*), pengadukan adonan, proses fermentasi/*proofing*, hingga teknik pemanggangan sesuai SOP toko.</li>
                <li><strong>Ketelitian Takaran & Resep:</strong> Memiliki ketelitian tinggi dalam menimbang dan menakar bahan baku (tepung, ragi, mentega, gula, air) sesuai takaran gramasi agar adonan mengembang sempurna dan konsisten.</li>
                <li><strong>Kebersihan & Sanitasi Area Dapur:</strong> Berkomitmen menerapkan standar kebersihan diri (*personal hygiene*), rutin mencuci dan membersihkan loyang, wadah adonan, meja kerja, serta mesin oven agar steril dan higienis.</li>
                <li><strong>Ketahanan Fisik & Kesiapan Shift Pagi:</strong> Berstamina fisik bugar untuk mengangkat bahan baku, memindahkan rak loyang, serta terbiasa bangun pagi untuk bekerja pada shift subuh/pagi secara disiplin.</li>
            </ul>
        </div>
    </div>
    <div>
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-4 text-[13px] tracking-widest uppercase">PENDIDIKAN</h3>
        <div contenteditable="true" class="text-cv-charcoal">
            <div>
                <h4 class="font-lato font-bold text-[14px] text-cv-dark">SMKN 1 CIOMAS</h4>
                <div class="text-[13px] mt-0.5 text-gray-700">Pengembangan Perangkat Lunak dan Gim (PPLG) — Kab. Bogor, Jawa Barat</div>
                <div class="text-[12px] italic mt-0.5 text-gray-500">Lulus Mei 2026</div>
            </div>
        </div>
    </div>
</div>`
};

// Logika Komponen Alpine.js
document.addEventListener('alpine:init', () => {
    Alpine.data('cvMaker', () => ({
        activeTab: 'gerobak',
        photoSrc: null, 
        pdfFileName: 'CV_Muhamad_Ikhsan_Penjaga_Gerobak',
        currentHtml: '', // Menampung HTML komponen yang aktif
        templateCache: {}, // Cache agar file HTML tidak di-fetch berulang kali

        init() {
            this.updateDocumentTitle();
            // Load template pertama kali saat web dibuka
            this.loadTemplate(this.activeTab);
        },

        // Sinkronisasi Alpine tree ke konten dinamis
        refreshTemplateTree() {
            this.$nextTick(() => {
                const wrapper = document.querySelector('.cv-wrapper');
                if (wrapper && window.Alpine) {
                    Array.from(wrapper.children).forEach(child => {
                        Alpine.initTree(child);
                    });
                }
            });
        },

        // Fungsi asynchronous untuk mengambil file HTML dari folder templates/
        async loadTemplate(tabName) {
            const fileName = `templates/${tabName}.html`;

            // Gunakan cache jika file sudah pernah diambil sebelumnya
            if (this.templateCache[fileName]) {
                this.currentHtml = this.templateCache[fileName];
                this.refreshTemplateTree();
                return;
            }

            try {
                const response = await fetch(fileName);
                if (!response.ok) throw new Error(`Status: ${response.status}`);

                const htmlText = await response.text();
                this.templateCache[fileName] = htmlText; // Simpan ke cache
                this.currentHtml = htmlText;
                this.refreshTemplateTree();
            } catch (error) {
                // Fallback jika fetch diblokir (misalnya dibuka langsung via protokol file:///)
                if (fallbackTemplates && fallbackTemplates[tabName]) {
                    console.info(`[CV Maker] Memuat template "${tabName}" dari bundle fallback internal (kebijakan keamanan protokol file:///).`);
                    this.templateCache[fileName] = fallbackTemplates[tabName];
                    this.currentHtml = fallbackTemplates[tabName];
                    this.refreshTemplateTree();
                } else {
                    console.error('Gagal memuat template CV:', error);
                    this.currentHtml = `<div class="p-6 text-red-500 font-bold text-center w-full">Gagal memuat template ${fileName}. Pastikan file berada di dalam folder templates/ dan dijalankan via Local Server.</div>`;
                }
            }
        },

        switchTab(tabName) {
            this.activeTab = tabName;
            
            if (tabName === 'gerobak') {
                this.pdfFileName = 'CV_Muhamad_Ikhsan_Penjaga_Gerobak';
            } else if (tabName === 'kasir') {
                this.pdfFileName = 'CV_Muhamad_Ikhsan_Kasir';
            } else if (tabName === 'bakery') {
                this.pdfFileName = 'CV_Muhamad_Ikhsan_Helper_Bakery';
            } else if (tabName === 'laundry') {
                this.pdfFileName = 'CV_Muhamad_Ikhsan_Laundry_Staff';
            } else if (tabName === 'fullstack') {
                this.pdfFileName = 'CV_Muhamad_Ikhsan_Fullstack_Developer';
            } else if (tabName === 'gudang') {
                this.pdfFileName = 'CV_Muhamad_Ikhsan_Staff_Gudang';
            }

            this.updateDocumentTitle();
            this.loadTemplate(tabName); // Panggil fungsi pemuat template
        },

        setPreset(type) {
            this.switchTab(type);
        },

        updateDocumentTitle() {
            document.title = this.pdfFileName;
        },
        
        // AUTO COMPRESS & CONVERT KE JPEG
        uploadPhoto(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    const maxDimension = 400;
                    let width = img.width;
                    let height = img.height;

                    if (width > height) {
                        if (width > maxDimension) {
                            height = Math.round((height * maxDimension) / width);
                            width = maxDimension;
                        }
                    } else {
                        if (height > maxDimension) {
                            width = Math.round((width * maxDimension) / height);
                            height = maxDimension;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;

                    ctx.fillStyle = '#FFFFFF';
                    ctx.fillRect(0, 0, width, height);
                    ctx.drawImage(img, 0, 0, width, height);

                    this.photoSrc = canvas.toDataURL('image/jpeg', 0.75);
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        
        downloadPDF() {
            this.updateDocumentTitle();
            setTimeout(() => {
                window.print();
            }, 100);
        }
    }));
});
