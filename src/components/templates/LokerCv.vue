<script setup>
import { Mail, MapPin, Phone, IdCard, User } from 'lucide-vue-next';

defineProps({
  photoSrc: { type: String, default: null },
  templateId: { type: String, default: 'job-3' }
});

const profiles = {
  'job-3': { title: 'STAFF OUTLET', summary: 'Lulusan SMK yang ramah, cekatan, dan tertarik pada operasional outlet makanan. Siap melayani pelanggan, membantu transaksi kasir, menjaga kebersihan, menata display, serta bekerja dengan sistem shift termasuk akhir pekan.', skills: ['Pelayanan pelanggan & komunikasi', 'Kasir / POS dan transaksi', 'Operasional outlet F&B', 'Penataan display & stok', 'Kebersihan area kerja', 'Kerja tim dan kesiapan shift'] },
  'job-4': { title: 'OPERATOR PACKING', summary: 'Lulusan SMK yang teliti, disiplin, dan siap mendukung kegiatan produksi. Mampu mengikuti instruksi kerja, bekerja dalam tim, menjaga kerapian area, serta melakukan pengemasan dan pemeriksaan hasil kerja dengan bertanggung jawab.', skills: ['Pengemasan dan pelabelan', 'Pemeriksaan hasil packing', 'Ketelitian dan fokus', 'Kerja tim', 'Menjaga kebersihan area', 'Kesiapan kerja operasional'] },
  'job-5': { title: 'ADMIN STOCK OPNAME', summary: 'Lulusan SMK yang teliti dan tertarik pada administrasi persediaan. Siap membantu pencatatan stok, menghitung barang fisik, mencocokkan data, serta mendukung penerimaan dan penyimpanan barang secara teratur.', skills: ['Stock opname dan hitung barang', 'Pencatatan persediaan', 'Input data dan administrasi', 'Microsoft Excel / Spreadsheet', 'Penerimaan dan penyimpanan barang', 'Ketelitian dan tanggung jawab'] },
  'job-6': { title: 'CREW STORE PETSHOP', summary: 'Lulusan SMK yang ramah, menyukai hewan, dan tertarik pada operasional toko. Siap membantu pelanggan memilih kebutuhan hewan, menjaga kerapian produk, mempelajari informasi produk, dan bekerja sama dalam tim.', skills: ['Pelayanan pelanggan', 'Operasional toko ritel', 'Penataan barang dan display', 'Pengetahuan dasar produk hewan', 'Komunikasi dan kerja tim', 'Siap bekerja akhir pekan'] },
  'job-7': { title: 'CUSTOMER SERVICE OPERASIONAL', summary: 'Lulusan SMK yang komunikatif dan teliti, dengan minat pada pelayanan pelanggan dan administrasi operasional. Siap membantu reservasi, menjawab pertanyaan, mencatat transaksi, serta berkoordinasi dengan tim untuk mendukung layanan yang lancar.', skills: ['Komunikasi dan layanan pelanggan', 'Penanganan pertanyaan / keluhan', 'Administrasi dan pencatatan', 'Input data dan reservasi', 'Koordinasi operasional', 'Microsoft Office dasar'] },
  'job-8': { title: 'SERVICE KOPI', summary: 'Lulusan SMK yang ramah, cekatan, dan tertarik pada operasional kedai kopi. Siap menyambut pelanggan, mencatat pesanan, mengantar makanan dan minuman, menjaga kebersihan, serta mengikuti SOP dan bekerja sama saat jam sibuk.', skills: ['Pelayanan pelanggan', 'Mencatat dan mengantar pesanan', 'Operasional kedai kopi', 'Kebersihan area pelayanan', 'Kerja sama tim', 'Kesiapan mengikuti SOP'] },
  'job-10': { title: 'CASUAL WAREHOUSE', summary: 'Lulusan SMK yang disiplin dan teliti, siap membantu pekerjaan operasional gudang. Mampu mengikuti instruksi, menjaga kerapian barang, membantu proses penerimaan, penyimpanan, dan penyiapan barang, serta bekerja sama dengan tim.', skills: ['Penataan dan penyimpanan barang', 'Penerimaan / pemindahan barang', 'Pengecekan jumlah dan kondisi', 'Packing dan persiapan barang', 'Ketelitian dan stamina kerja', 'Kerja tim dan disiplin'] },
  'job-11': { title: 'WAITER', summary: 'Lulusan SMK yang ramah, rapi, dan memiliki minat pada pelayanan restoran. Siap menyambut pelanggan, mencatat pesanan secara akurat, mengantarkan makanan, menjaga kebersihan meja, serta bekerja dalam tim dan mengikuti jadwal shift.', skills: ['Pelayanan restoran', 'Komunikasi yang sopan', 'Pencatatan dan pengecekan pesanan', 'Table service', 'Kebersihan area dining', 'Kerja tim dan kesiapan shift'] }
};

const profile = (id) => profiles[id] || profiles['job-3'];
const readiness = {
  'job-3': ['Tertarik pada operasional outlet makanan dan pelayanan pelanggan.', 'Siap mempelajari penggunaan kasir/POS serta penataan stok dan display.', 'Bersedia bekerja shift, termasuk akhir pekan dan hari libur.'],
  'job-4': ['Tertarik mendukung proses produksi melalui pengemasan yang rapi dan teliti.', 'Siap mengikuti instruksi kerja dan standar kualitas perusahaan.', 'Siap bekerja sama dengan tim dalam kegiatan operasional.'],
  'job-5': ['Tertarik pada pencatatan administrasi dan pengelolaan persediaan.', 'Siap belajar proses stock opname serta pencocokan data dengan stok fisik.', 'Teliti saat menginput dan memeriksa informasi barang.'],
  'job-6': ['Tertarik pada pelayanan dan operasional toko kebutuhan hewan.', 'Siap mempelajari informasi produk makanan dan aksesori hewan.', 'Bersedia bekerja enam hari serta pada akhir pekan dan hari libur.'],
  'job-7': ['Tertarik pada layanan pelanggan dan koordinasi operasional.', 'Siap mempelajari alur reservasi serta pencatatan transaksi.', 'Berkomitmen berkomunikasi dengan sopan dan membantu menangani kebutuhan pelanggan.'],
  'job-8': ['Tertarik membantu kegiatan pelayanan di kedai kopi.', 'Siap mempelajari pencatatan pesanan dan standar pelayanan.', 'Bersedia membantu tim saat jam sibuk serta menjaga kebersihan area kerja.'],
  'job-10': ['Tertarik membantu kegiatan penataan dan penyimpanan barang di gudang.', 'Siap mengikuti prosedur kerja untuk pengecekan, pemindahan, dan persiapan barang.', 'Mengutamakan ketelitian, kerapian, dan kerja sama tim.'],
  'job-11': ['Tertarik pada pelayanan restoran dan interaksi langsung dengan pelanggan.', 'Siap belajar standar pelayanan, pencatatan pesanan, serta persiapan dan closing.', 'Bersedia bekerja shift, termasuk akhir pekan dan hari libur nasional.']
};
</script>

<template>
  <div class="cv-left-col w-full md:w-[35%] bg-[#f8fafc] flex flex-col py-6 md:py-10 px-6 md:px-8 border-b md:border-b-0 md:border-r border-gray-200">
    <div class="mb-8 flex justify-center"><div class="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-cv-dark bg-white flex items-center justify-center"><img v-if="photoSrc" :src="photoSrc" alt="Foto profil" class="w-full h-full object-cover"><User v-else class="w-12 h-12 text-gray-300" /></div></div>
    <h3 class="font-bold text-cv-dark border-b-2 border-cv-dark pb-1 mb-4 text-[13px] tracking-widest">KONTAK</h3>
    <ul class="text-[12px] text-gray-700 space-y-3 mb-7">
      <li class="flex gap-2"><Mail class="w-3.5 h-3.5 shrink-0" /><a href="https://mail.google.com/mail/?view=cm&fs=1&to=muhamadikhsan.dev%40gmail.com" class="cv-link-elegan"><span contenteditable="true">muhamadikhsan.dev@gmail.com</span></a></li>
      <li class="flex gap-2"><MapPin class="w-3.5 h-3.5 shrink-0" /><span contenteditable="true">Kab. Bogor, Jawa Barat</span></li>
      <li class="flex gap-2"><Phone class="w-3.5 h-3.5 shrink-0" /><a href="tel:+628989379116" class="cv-link-elegan"><span contenteditable="true">+62 898-9379-116</span></a></li>
      <li class="flex gap-2"><IdCard class="w-3.5 h-3.5 shrink-0" /><span contenteditable="true">18 tahun · Laki-laki</span></li>
    </ul>
    <h3 class="font-bold text-cv-dark border-b-2 border-cv-dark pb-1 mb-4 text-[13px] tracking-widest">KETERAMPILAN</h3>
    <ul contenteditable="true" class="text-[12.5px] text-gray-700 space-y-2 list-disc pl-4 marker:text-cv-dark"><li v-for="skill in profile(templateId).skills" :key="skill">{{ skill }}</li></ul>
  </div>
  <div class="cv-right-col w-full md:w-[65%] py-6 md:py-12 px-6 md:px-10 flex flex-col bg-white">
    <header class="mb-8"><h1 contenteditable="true" class="font-playfair font-semibold text-3xl md:text-4xl uppercase text-cv-dark tracking-wide">MUHAMAD IKHSAN</h1><h2 class="font-lato font-bold text-gray-500 text-sm tracking-[0.2em] uppercase mt-2">{{ profile(templateId).title }}</h2></header>
    <section class="mb-6"><h3 class="font-bold text-cv-dark border-b border-gray-300 pb-1 mb-3 text-[13px] tracking-widest">PROFIL SINGKAT</h3><p contenteditable="true" class="text-[13px] text-gray-700 text-justify leading-relaxed">{{ profile(templateId).summary }} Disiplin, teliti, dan siap belajar. Belum memiliki pengalaman kerja formal, tetapi siap mengikuti arahan serta SOP.</p></section>
    <section class="mb-7"><h3 class="font-bold text-cv-dark border-b border-gray-300 pb-1 mb-3 text-[13px] tracking-widest">MINAT & KESIAPAN KERJA</h3><ul contenteditable="true" class="text-[13px] text-gray-700 list-disc pl-4 space-y-2 leading-relaxed"><li v-for="item in (readiness[templateId] || readiness['job-3'])" :key="item">{{ item }}</li></ul></section>
    <section><h3 class="font-bold text-cv-dark border-b border-gray-300 pb-1 mb-3 text-[13px] tracking-widest">PENDIDIKAN</h3><div contenteditable="true" class="text-[13px] text-gray-700"><strong>SMKN 1 CIOMAS</strong><p>Pengembangan Perangkat Lunak dan Gim (PPLG) — Kab. Bogor, Jawa Barat</p><p class="text-gray-500">Lulus Mei 2026</p></div></section>
  </div>
</template>
