<script setup>
import { Mail, MapPin, Phone, IdCard, User } from 'lucide-vue-next';

defineProps({
  photoSrc: {
    type: String,
    default: null
  }
});
</script>

<template>
  <div class="cv-left-col w-full md:w-[35%] bg-[#f8fafc] flex flex-col py-6 md:py-10 px-6 md:px-8 border-b md:border-b-0 md:border-r border-gray-200">
    <div class="mb-8 md:mb-10 flex justify-center">
        <div class="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-[4px] border-cv-dark bg-white flex items-center justify-center relative shadow-sm">
        <img v-if="photoSrc" :src="photoSrc" alt="Profile" class="w-full h-full object-cover">
        <User v-else class="w-12 h-12 md:w-16 md:h-16 text-gray-300" />
      </div>
    </div>
    <div class="mb-6 md:mb-8">
        <h3 class="font-lato font-bold text-cv-dark border-b-[2px] border-cv-dark pb-1 mb-4 text-[13px] tracking-widest uppercase">KONTAK</h3>
        <ul class="text-[12px] text-cv-charcoal space-y-3 leading-tight">
            <li class="flex items-start">
                <Mail class="w-3.5 h-3.5 text-cv-dark mt-0.5 shrink-0" /> 
                <a href="mailto:muhamadikhsan.dev@gmail.com" target="_blank" class="flex-1 ml-1.5 break-all flex flex-wrap items-center gap-1 group">
                    <span class="cv-link-elegan break-all" contenteditable="true">muhamadikhsan.dev@gmail.com</span>
                </a>
            </li>
            <li class="flex items-center">
                <MapPin class="w-3.5 h-3.5 text-cv-dark shrink-0" /> 
                <span contenteditable="true" class="flex-1 ml-1.5">Kab. Bogor, Jawa Barat</span>
            </li>
            <li class="flex items-start">
                <Phone class="w-3.5 h-3.5 text-cv-dark mt-0.5 shrink-0" /> 
                <a href="https://wa.me/628989379116" target="_blank" class="flex-1 ml-1.5 inline-flex items-center gap-1 group">
                    <span class="cv-link-elegan" contenteditable="true">+62 898-9379-116</span>
                </a>
            </li>
            <li class="flex items-center">
                <IdCard class="w-3.5 h-3.5 text-cv-dark shrink-0" /> 
                <span contenteditable="true" class="flex-1 ml-1.5">Usia: 18 Tahun (Laki-laki)</span>
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
</div>
</template>
