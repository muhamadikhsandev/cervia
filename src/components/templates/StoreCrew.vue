<script setup>
import { Mail, MapPin, Phone, User, IdCard, Sparkles, BadgeCheck } from 'lucide-vue-next';

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
        <img v-if="photoSrc" :src="photoSrc" alt="Foto profil" class="w-full h-full object-cover">
        <User v-else class="w-12 h-12 md:w-16 md:h-16 text-gray-300" />
      </div>
    </div>

    <div class="mb-6 md:mb-8">
      <h3 class="font-lato font-bold text-cv-dark border-b-[2px] border-cv-dark pb-1 mb-4 text-[13px] tracking-widest uppercase">KONTAK</h3>
      <ul class="text-[12px] text-gray-700 space-y-3 leading-tight">
        <li class="flex items-start">
          <Mail class="w-3.5 h-3.5 text-cv-dark mt-0.5 shrink-0" />
          <a href="mailto:muhamadikhsan.dev@gmail.com" class="flex-1 ml-1.5 break-all" target="_blank"><span class="cv-link-elegan" contenteditable="true">muhamadikhsan.dev@gmail.com</span></a>
        </li>
        <li class="flex items-center">
          <MapPin class="w-3.5 h-3.5 text-cv-dark shrink-0" />
          <span contenteditable="true" class="flex-1 ml-1.5">Kab. Bogor, Jawa Barat</span>
        </li>
        <li class="flex items-start">
          <Phone class="w-3.5 h-3.5 text-cv-dark mt-0.5 shrink-0" />
          <a href="https://wa.me/628989379116" class="flex-1 ml-1.5" target="_blank"><span class="cv-link-elegan" contenteditable="true">+62 898-9379-116</span></a>
        </li>
        <li class="flex items-center">
          <IdCard class="w-3.5 h-3.5 text-cv-dark shrink-0" />
          <span contenteditable="true" class="flex-1 ml-1.5">Usia: 18 Tahun (Laki-laki)</span>
        </li>
      </ul>
    </div>

    <div class="mb-6 md:mb-8">
      <h3 class="font-lato font-bold text-cv-dark border-b-[2px] border-cv-dark pb-1 mb-4 text-[13px] tracking-widest uppercase">KEUNGGULAN</h3>
      <ul contenteditable="true" class="text-[12.5px] text-gray-700 space-y-2 list-disc marker:text-cv-dark pl-4">
        <li>Ramah, sopan, dan komunikatif</li>
        <li>Cekatan melayani pelanggan</li>
        <li>Menjaga kebersihan area kerja</li>
        <li>Teliti menyiapkan pesanan</li>
        <li>Disiplin dan bertanggung jawab</li>
        <li>Mudah belajar hal baru</li>
      </ul>
    </div>

    <div class="rounded-lg bg-gray-100 p-4 text-cv-dark">
      <div class="flex items-center gap-2 mb-2 font-bold text-[12px] uppercase tracking-wide"><BadgeCheck class="w-4 h-4" /> Siap bergabung</div>
      <p contenteditable="true" class="text-[11.5px] leading-relaxed">Siap bekerja full-time, mengikuti jadwal shift, dan memberikan pelayanan terbaik untuk pelanggan.</p>
    </div>
  </div>

  <div class="cv-right-col w-full md:w-[65%] py-6 md:py-12 px-6 md:px-10 flex flex-col bg-white">
    <div class="mb-8 md:mb-10">
      <h1 contenteditable="true" class="font-playfair font-semibold text-3xl md:text-4xl uppercase text-gray-900 tracking-wide mb-1 leading-tight md:leading-none">MUHAMAD IKHSAN</h1>
      <h2 contenteditable="true" class="font-lato font-bold text-gray-500 text-sm tracking-[0.2em] uppercase leading-none mt-2">STORE CREW</h2>
    </div>

    <div class="mb-8 md:mb-10">
      <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-3 text-[13px] tracking-widest uppercase">PROFIL SINGKAT</h3>
      <div contenteditable="true" class="text-[13px] text-gray-700 text-justify leading-relaxed">Lulusan SMK PPLG berusia 18 tahun yang ramah, disiplin, dan memiliki kemauan belajar. Mampu berkomunikasi dengan sopan, bekerja dalam tim, menjaga kebersihan area kerja, serta mengikuti instruksi dengan baik. Siap melayani pelanggan, membantu menyiapkan makanan, dan bekerja penuh waktu dengan sistem shift.</div>
    </div>

    <div class="mb-8 md:mb-10">
      <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-4 text-[13px] tracking-widest uppercase">KOMPETENSI YANG DITAWARKAN</h3>
      <div contenteditable="true" class="text-gray-700">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12.5px] leading-relaxed">
          <div class="flex gap-2"><Sparkles class="w-4 h-4 text-cv-dark shrink-0 mt-0.5" /><span><strong>Pelayanan pelanggan</strong><br>Ramah, tanggap, dan sopan.</span></div>
          <div class="flex gap-2"><Sparkles class="w-4 h-4 text-cv-dark shrink-0 mt-0.5" /><span><strong>Penyajian makanan</strong><br>Rapi, bersih, dan sesuai pesanan.</span></div>
          <div class="flex gap-2"><Sparkles class="w-4 h-4 text-cv-dark shrink-0 mt-0.5" /><span><strong>Operasional toko</strong><br>Menata area dan membantu stok.</span></div>
          <div class="flex gap-2"><Sparkles class="w-4 h-4 text-cv-dark shrink-0 mt-0.5" /><span><strong>Kerja tim & shift</strong><br>Disiplin dan siap beradaptasi.</span></div>
        </div>
      </div>
    </div>

    <div>
      <h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-4 text-[13px] tracking-widest uppercase">PENDIDIKAN</h3>
      <div contenteditable="true" class="text-gray-700">
        <h4 class="font-lato font-bold text-[14px] text-gray-900">SMKN 1 CIOMAS</h4>
        <div class="text-[13px] mt-0.5">Pengembangan Perangkat Lunak dan Gim (PPLG) — Kab. Bogor, Jawa Barat</div>
        <div class="text-[12px] italic mt-0.5 text-gray-500">Lulus Mei 2026</div>
      </div>
    </div>
  </div>
</template>
