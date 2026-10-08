<script setup>
import { computed } from 'vue';
import { Mail, MapPin, Phone, CalendarDays, FileText } from 'lucide-vue-next';

const props = defineProps({
  templateId: { type: String, default: 'gerobak' },
  templateLabel: { type: String, default: 'Lamaran Kerja' }
});

const letters = {
  gerobak: {
    role: 'Penjaga Gerobak',
    opening: 'Dengan hormat, saya bermaksud mengajukan lamaran untuk posisi Penjaga Gerobak di perusahaan yang Bapak/Ibu pimpin.',
    body: 'Saya tertarik pada pekerjaan yang berhubungan langsung dengan pelanggan dan operasional harian. Saya siap menjaga kebersihan gerobak, menyiapkan pesanan dengan teliti, melayani pelanggan dengan ramah, serta mengelola pembayaran secara jujur dan bertanggung jawab.',
    fit: 'Saya memiliki stamina kerja yang baik, mudah beradaptasi, disiplin mengikuti SOP, dan bersedia bekerja dengan sistem shift.'
  },
  kasir: {
    role: 'Kasir / Pramuniaga',
    opening: 'Dengan hormat, melalui surat ini saya mengajukan lamaran untuk posisi Kasir / Pramuniaga di perusahaan yang Bapak/Ibu pimpin.',
    body: 'Saya memiliki minat besar pada pelayanan toko dan siap membantu pelanggan dengan sikap ramah serta komunikatif. Saya siap mempelajari sistem kasir, memproses transaksi secara teliti, menata barang, dan memastikan area penjualan tetap rapi.',
    fit: 'Ketelitian, kejujuran, kemampuan berhitung dasar, dan kemauan belajar menjadi bekal saya untuk mendukung kelancaran operasional toko.'
  },
  bakery: {
    role: 'Helper Bakery / Crew Produksi Roti',
    opening: 'Dengan hormat, saya mengajukan lamaran untuk posisi Helper Bakery / Crew Produksi Roti di perusahaan yang Bapak/Ibu pimpin.',
    body: 'Saya sangat tertarik memulai karier di bidang produksi bakery. Saya siap belajar menimbang bahan sesuai resep, menyiapkan adonan, membantu proses proofing dan pemanggangan, serta melakukan pengemasan produk secara rapi.',
    fit: 'Saya disiplin, teliti, memiliki stamina yang baik, siap bekerja pada shift pagi, dan berkomitmen menjaga kebersihan serta sanitasi area produksi.'
  },
  laundry: {
    role: 'Staf Operasional Laundry',
    opening: 'Dengan hormat, saya bermaksud melamar posisi Staf Operasional Laundry di perusahaan yang Bapak/Ibu pimpin.',
    body: 'Saya tertarik pada pekerjaan operasional laundry yang membutuhkan kerapian dan ketelitian. Saya siap menerima dan menimbang pakaian pelanggan, mencatat pesanan, memilah pakaian, membantu proses pencucian, menyetrika, serta melakukan packing dengan rapi.',
    fit: 'Saya siap bekerja secara aktif, menjaga kebersihan peralatan, mengikuti instruksi, dan memberikan pelayanan yang baik kepada pelanggan.'
  },
  fullstack: {
    role: 'Junior Fullstack Developer',
    opening: 'Dengan hormat, saya mengajukan lamaran untuk posisi Junior Fullstack Developer di perusahaan yang Bapak/Ibu pimpin.',
    body: 'Sebagai lulusan Pengembangan Perangkat Lunak dan Gim, saya memiliki ketertarikan kuat pada pengembangan aplikasi web. Saya siap belajar dan membantu proses pembuatan antarmuka, pengelolaan data, pengujian fitur, serta perbaikan masalah pada aplikasi.',
    fit: 'Saya memiliki pola pikir logis, teliti, mudah belajar teknologi baru, dan mampu bekerja sama untuk menyelesaikan tugas sesuai arahan tim.'
  },
  gudang: {
    role: 'Staff / Admin Gudang',
    opening: 'Dengan hormat, saya bermaksud mengajukan lamaran untuk posisi Staff / Admin Gudang di perusahaan yang Bapak/Ibu pimpin.',
    body: 'Saya tertarik pada pekerjaan pengelolaan stok dan administrasi gudang. Saya siap membantu penerimaan barang, pencatatan keluar-masuk barang, pengecekan jumlah, penataan lokasi penyimpanan, serta pembuatan laporan sederhana.',
    fit: 'Saya teliti, disiplin, memiliki stamina yang baik, mampu menggunakan komputer dasar, dan siap mengikuti prosedur keselamatan maupun alur kerja gudang.'
  },
  admin: {
    role: 'Staff Administrasi / Data Entry',
    opening: 'Dengan hormat, saya mengajukan lamaran untuk posisi Staff Administrasi / Data Entry di perusahaan yang Bapak/Ibu pimpin.',
    body: 'Saya tertarik pada pekerjaan administrasi yang membutuhkan ketelitian dan kerapian. Saya siap melakukan input data, mengelola dokumen, mengarsipkan berkas, menggunakan Microsoft Office atau Google Workspace, serta membantu kebutuhan administrasi kantor.',
    fit: 'Saya jujur, teliti, menjaga kerahasiaan informasi, cepat beradaptasi dengan sistem baru, dan bertanggung jawab terhadap setiap pekerjaan.'
  },
  sales: {
    role: 'Direct Sales',
    opening: 'Dengan hormat, saya bermaksud melamar posisi Direct Sales di PT Gloria Jasa Mandiri.',
    body: 'Saya memiliki minat besar pada bidang penjualan dan siap berkontribusi dalam menawarkan produk atau layanan perusahaan kepada calon pelanggan. Saya siap melakukan pendekatan secara langsung, menjelaskan manfaat produk dengan baik, menjawab pertanyaan pelanggan, melakukan follow-up, serta membangun hubungan yang positif dengan pelanggan.',
    fit: 'Saya komunikatif, percaya diri, jujur, pantang menyerah, berorientasi pada target, dan siap menerima arahan serta bimbingan dari supervisor.'
  },
  'helper-produksi': {
    role: 'Helper Produksi',
    opening: 'Dengan hormat, saya mengajukan lamaran untuk posisi Helper Produksi di perusahaan yang Bapak/Ibu pimpin.',
    body: 'Saya tertarik untuk berkontribusi dalam proses produksi. Saya siap membantu menyiapkan bahan dan alat, mengikuti instruksi kerja, menjaga kebersihan area, melakukan pengepakan, serta memastikan pekerjaan berjalan sesuai standar operasional.',
    fit: 'Saya memiliki stamina baik, disiplin, teliti, mudah bekerja sama, dan bersedia mengikuti jadwal kerja maupun sistem shift yang berlaku.'
  },
  'store-crew': {
    role: 'Store Crew',
    opening: 'Dengan hormat, saya bermaksud mengajukan lamaran untuk posisi Store Crew di perusahaan yang Bapak/Ibu pimpin.',
    body: 'Saya tertarik bekerja di bidang Food & Beverages dan siap mendukung operasional outlet. Saya siap melayani pelanggan, membantu menyiapkan pesanan, menjaga kebersihan area, menata stok, dan mengikuti standar pelayanan yang ditetapkan.',
    fit: 'Saya ramah, cekatan, disiplin, mudah belajar, dan siap bekerja penuh waktu dengan sistem shift.'
  },
  'content-creator': {
    role: 'Content Creator Intern',
    opening: 'Dengan hormat, saya mengajukan lamaran untuk posisi Content Creator Intern di perusahaan yang Bapak/Ibu pimpin.',
    body: 'Saya memiliki ketertarikan pada pembuatan konten dan komunikasi digital. Saya siap membantu mencari ide, menyiapkan materi, membuat foto atau video sederhana, melakukan editing dasar, serta mendukung kebutuhan konten tim marketing.',
    fit: 'Saya kreatif, mau menerima masukan, mampu mengikuti arahan, dan siap belajar agar dapat menghasilkan konten yang informatif serta menarik.'
  },
  'sales-assistant': {
    role: 'Sales Assistant',
    opening: 'Dengan hormat, saya bermaksud melamar posisi Sales Assistant di perusahaan yang Bapak/Ibu pimpin.',
    body: 'Saya tertarik pada pekerjaan yang memadukan pelayanan pelanggan dan operasional outlet. Saya siap menyambut pelanggan, menjelaskan menu atau produk, membantu proses penjualan, memantau stok sederhana, serta menjaga kerapian area kerja.',
    fit: 'Saya sopan, tekun, komunikatif, mudah menerima arahan, dan siap bekerja sama dengan tim untuk memberikan pengalaman terbaik bagi pelanggan.'
  },
  'jewelry-sales': {
    role: 'Sales Representative Retail Perhiasan',
    opening: 'Dengan hormat, saya mengajukan lamaran untuk posisi Sales Representative Retail Perhiasan di perusahaan yang Bapak/Ibu pimpin.',
    body: 'Saya tertarik pada bidang retail perhiasan yang mengutamakan pelayanan, kepercayaan, dan ketelitian. Saya siap mempelajari karakteristik produk, menyambut pelanggan, memberikan penjelasan dengan sopan, membantu proses penjualan, dan menjaga keamanan serta kerapian area display.',
    fit: 'Saya jujur, teliti, berpenampilan rapi, memiliki komunikasi yang baik, dan siap mengikuti SOP serta target yang ditetapkan perusahaan.'
  }
};

const letter = computed(() => letters[props.templateId] || letters.gerobak);
</script>

<template>
  <article class="cover-letter-page w-full min-h-full bg-white px-8 py-8 md:px-14 md:py-12 text-gray-700">
    <header class="border-b-2 border-cv-dark pb-5 mb-7">
      <div class="flex items-start justify-between gap-6">
        <div>
          <h1 contenteditable="true" class="font-playfair text-3xl md:text-4xl font-semibold uppercase tracking-wide text-cv-dark">MUHAMAD IKHSAN</h1>
          <p contenteditable="true" class="mt-2 text-xs font-bold tracking-[0.18em] uppercase text-gray-500">Lamaran {{ letter.role }}</p>
        </div>
        <FileText class="w-9 h-9 text-cv-dark shrink-0" />
      </div>
      <div class="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] text-gray-600">
        <span class="flex items-center gap-1.5"><Mail class="w-3.5 h-3.5 text-cv-dark" />muhamadikhsan.dev@gmail.com</span>
        <span class="flex items-center gap-1.5"><Phone class="w-3.5 h-3.5 text-cv-dark" />+62 898-9379-116</span>
        <span class="flex items-center gap-1.5"><MapPin class="w-3.5 h-3.5 text-cv-dark" />Kab. Bogor, Jawa Barat</span>
      </div>
    </header>

    <div class="flex justify-between items-start mb-7 text-[13px]">
      <div contenteditable="true"><p>Kepada Yth.</p><p class="font-bold text-cv-dark">Bapak/Ibu HRD {{ letter.role }}</p><p>di Tempat</p></div>
      <div contenteditable="true" class="flex items-center gap-1 text-right text-gray-500"><CalendarDays class="w-3.5 h-3.5" /> {{ new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }) }}</div>
    </div>

    <h2 contenteditable="true" class="font-lato font-bold text-center text-cv-dark tracking-widest uppercase text-sm mb-6">Perihal: Lamaran Pekerjaan</h2>
    <section contenteditable="true" class="text-[13px] leading-relaxed text-justify space-y-4">
      <p>Dengan hormat,</p>
      <p>{{ letter.opening }}</p>
      <p>Saya adalah lulusan SMKN 1 Ciomas jurusan Pengembangan Perangkat Lunak dan Gim (PPLG). {{ letter.body }}</p>
      <p>{{ letter.fit }}</p>
      <p>Sebagai bahan pertimbangan, saya melampirkan daftar riwayat hidup. Besar harapan saya untuk diberikan kesempatan mengikuti proses seleksi dan menjelaskan potensi saya lebih lanjut dalam wawancara.</p>
      <p>Demikian surat lamaran ini saya buat dengan sebenar-benarnya. Atas perhatian dan kesempatan yang diberikan, saya ucapkan terima kasih.</p>
    </section>

    <footer class="mt-10 text-[13px]">
      <p>Hormat saya,</p>
      <div class="h-16"></div>
      <p contenteditable="true" class="font-bold text-cv-dark underline underline-offset-4">MUHAMAD IKHSAN</p>
    </footer>
  </article>
</template>
