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
    <div class="mb-6 md:mb-8">
        <h3 class="font-lato font-bold text-cv-dark border-b-[2px] border-cv-dark pb-1 mb-4 text-[13px] tracking-widest uppercase">KETERAMPILAN DASAR</h3>
        <ul contenteditable="true" class="text-[12.5px] text-cv-charcoal space-y-2 list-disc marker:text-cv-dark pl-4">
            <li>Fisik Prima & Siap Kerja Berat</li>
            <li>Disiplin Waktu & Patuh Instruksi</li>
            <li>Teliti & Rapi dalam Bekerja</li>
            <li>Cepat Belajar Hal Baru</li>
            <li>Mampu Bekerja dalam Tim</li>
            <li>Jujur & Bertanggung Jawab</li>
            <li>Dasar Komputer (Ms. Office)</li>
        </ul>
    </div>
    <div>
        <h3 class="font-lato font-bold text-cv-dark border-b-[2px] border-cv-dark pb-1 mb-4 text-[13px] tracking-widest uppercase">KESEDIAAN KERJA</h3>
        <ul contenteditable="true" class="text-[12px] text-cv-charcoal space-y-2 list-disc marker:text-cv-dark pl-4">
            <li>Siap ditempatkan di semua divisi produksi</li>
            <li>Bersedia mengikuti pelatihan dari nol</li>
            <li>Bersedia bekerja di bawah tekanan target</li>
            <li>Siap bekerja dengan alat pelindung diri (APD)</li>
        </ul>
    </div>
</div>
<div class="cv-right-col w-full md:w-[65%] py-6 md:py-12 px-6 md:px-10 flex flex-col bg-white">
    <div class="mb-8 md:mb-10">
        <h1 contenteditable="true" class="font-playfair font-semibold text-3xl md:text-4xl uppercase text-cv-dark tracking-wide mb-1 leading-tight md:leading-none">MUHAMAD IKHSAN</h1>
        <h2 contenteditable="true" class="font-lato font-bold text-gray-500 text-sm tracking-[0.2em] uppercase leading-none mt-2">HELPER PRODUKSI / OPERATOR</h2>
    </div>
    <div class="mb-8 md:mb-10">
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-3 text-[13px] tracking-widest uppercase">TENTANG SAYA</h3>
        <div contenteditable="true" class="text-[13px] text-cv-charcoal text-justify leading-relaxed">
            Saya <strong>Muhamad Ikhsan, 18 tahun, fresh graduate SMK</strong> yang sedang mencari kesempatan pertama untuk bekerja sebagai <strong>Helper Produksi</strong>. Saya belum memiliki pengalaman kerja formal, namun saya memiliki <strong>fisik yang sehat dan kuat, disiplin tinggi, serta kemauan besar untuk belajar</strong>. Saya siap dilatih dari nol, mengikuti semua aturan perusahaan, dan membuktikan diri melalui kerja keras serta hasil kerja yang rapi dan tepat waktu.
        </div>
    </div>
    <div class="mb-8 md:mb-10">
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-4 text-[13px] tracking-widest uppercase">MENGAPA MEMPEKERJAKAN SAYA?</h3>
        <div contenteditable="true" class="text-cv-charcoal">
            <ul class="text-[13px] list-disc pl-4 space-y-2.5 marker:text-cv-dark leading-relaxed">
                <li><strong>Fisik Prima & Usia Produktif:</strong> Berusia 18 tahun dengan kondisi fisik sehat dan stamina yang baik — cocok untuk pekerjaan produksi yang membutuhkan tenaga dan ketahanan.</li>
                <li><strong>Siap Dilatih dari Nol:</strong> Sebagai fresh graduate, saya tidak membawa kebiasaan kerja lama. Saya siap menerima arahan, mengikuti SOP, dan menyerap pelatihan dengan cepat.</li>
                <li><strong>Disiplin, Jujur & Bertanggung Jawab:</strong> Saya terbiasa disiplin waktu dari lingkungan sekolah, jujur dalam bekerja, serta bertanggung jawab terhadap tugas yang diberikan sampai selesai.</li>
                <li><strong>Teliti & Menjaga Kualitas:</strong> Saya terbiasa mengerjakan tugas dengan rapi dan detail, sehingga cocok untuk membantu proses quality control serta packing produk agar hasil akhirnya sesuai standar.</li>
            </ul>
        </div>
    </div>
    <div>
        <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-4 text-[13px] tracking-widest uppercase">PENDIDIKAN</h3>
        <div contenteditable="true" class="text-cv-charcoal">
            <div>
                <h4 class="font-lato font-bold text-[14px] text-cv-dark">SMKN 1 CIOMAS</h4>
                <div class="text-[13px] mt-0.5 text-gray-700">Pengembangan Perangkat Lunak dan Gim (PPLG) — Kab. Bogor, Jawa Barat</div>
                <div class="text-[12px] italic mt-0.5 text-gray-500">Lulus: Mei 2026</div>
            </div>
        </div>
    </div>
</div>
</template>