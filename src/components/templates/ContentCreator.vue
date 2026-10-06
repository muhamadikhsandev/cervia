<script setup>
import { Mail, MapPin, Phone, IdCard, User, Camera, MessageCircle, Film } from 'lucide-vue-next';

defineProps({ photoSrc: { type: String, default: null } });
</script>

<template>
  <div class="cv-left-col w-full md:w-[35%] bg-[#f8fafc] flex flex-col py-6 md:py-10 px-6 md:px-8 border-b md:border-b-0 md:border-r border-gray-200">
    <div class="mb-8 md:mb-10 flex justify-center"><div class="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-[4px] border-cv-dark bg-white flex items-center justify-center"><img v-if="photoSrc" :src="photoSrc" alt="Foto profil" class="w-full h-full object-cover"><User v-else class="w-12 h-12 md:w-16 md:h-16 text-gray-300" /></div></div>
    <div class="mb-6 md:mb-8">
      <h3 class="font-lato font-bold text-cv-dark border-b-[2px] border-cv-dark pb-1 mb-4 text-[13px] tracking-widest uppercase">KONTAK</h3>
      <ul class="text-[12px] text-gray-700 space-y-3 leading-tight">
        <li class="flex items-start"><Mail class="w-3.5 h-3.5 text-cv-dark mt-0.5 shrink-0" /><a href="mailto:muhamadikhsan.dev@gmail.com" class="flex-1 ml-1.5 break-all" target="_blank"><span class="cv-link-elegan" contenteditable="true">muhamadikhsan.dev@gmail.com</span></a></li>
        <li class="flex items-center"><MapPin class="w-3.5 h-3.5 text-cv-dark shrink-0" /><span contenteditable="true" class="flex-1 ml-1.5">Kab. Bogor, Jawa Barat</span></li>
        <li class="flex items-start"><Phone class="w-3.5 h-3.5 text-cv-dark mt-0.5 shrink-0" /><a href="https://wa.me/628989379116" class="flex-1 ml-1.5" target="_blank"><span class="cv-link-elegan" contenteditable="true">+62 898-9379-116</span></a></li>
        <li class="flex items-center"><IdCard class="w-3.5 h-3.5 text-cv-dark shrink-0" /><span contenteditable="true" class="flex-1 ml-1.5">Usia: 18 Tahun (Laki-laki)</span></li>
      </ul>
    </div>
    <div>
      <h3 class="font-lato font-bold text-cv-dark border-b-[2px] border-cv-dark pb-1 mb-4 text-[13px] tracking-widest uppercase">KOMPETENSI</h3>
      <ul contenteditable="true" class="text-[12.5px] text-gray-700 space-y-2 list-disc marker:text-cv-dark pl-4"><li>Komunikasi pemasaran</li><li>Ide dan konsep konten</li><li>Editing foto dan video dasar</li><li>Fotografi dasar</li><li>Kerja tim dan koordinasi</li><li>Mau belajar dan menerima arahan</li></ul>
    </div>
  </div>
  <div class="cv-right-col w-full md:w-[65%] py-6 md:py-12 px-6 md:px-10 flex flex-col bg-white">
    <div class="mb-8 md:mb-10"><div class="flex items-center gap-2 text-gray-500 text-[11px] font-bold tracking-[0.25em] uppercase mb-2"><Film class="w-4 h-4" /> Marketing & Advertising</div><h1 contenteditable="true" class="font-playfair font-semibold text-3xl md:text-4xl uppercase text-cv-dark tracking-wide mb-1 leading-tight md:leading-none">MUHAMAD IKHSAN</h1><h2 contenteditable="true" class="font-lato font-bold text-gray-500 text-sm tracking-[0.2em] uppercase leading-none mt-2">CONTENT CREATOR INTERN</h2></div>
    <div class="mb-8 md:mb-10"><h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-3 text-[13px] tracking-widest uppercase">PROFIL SINGKAT</h3><div contenteditable="true" class="text-[13px] text-gray-700 text-justify leading-relaxed">Lulusan SMK PPLG berusia 18 tahun yang tertarik pada pembuatan konten dan komunikasi digital. Memiliki kemauan belajar dalam membuat konsep konten, mengedit foto atau video sederhana, serta bekerja sama dengan tim marketing. Mampu mengikuti arahan dan menyampaikan informasi dengan bahasa yang mudah dipahami.</div></div>
    <div class="mb-8 md:mb-10"><h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-4 text-[13px] tracking-widest uppercase">KEMAMPUAN YANG RELEVAN</h3><div contenteditable="true" class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[12.5px] text-gray-700 leading-relaxed"><div class="flex gap-2"><Camera class="w-4 h-4 text-cv-dark shrink-0 mt-0.5" /><span><strong>Produksi konten</strong><br>Membantu menyiapkan ide dan materi konten.</span></div><div class="flex gap-2"><Film class="w-4 h-4 text-cv-dark shrink-0 mt-0.5" /><span><strong>Editing dasar</strong><br>Mengolah foto dan video sederhana.</span></div><div class="flex gap-2"><MessageCircle class="w-4 h-4 text-cv-dark shrink-0 mt-0.5" /><span><strong>Komunikasi</strong><br>Menyampaikan pesan promosi dengan jelas.</span></div><div class="flex gap-2"><User class="w-4 h-4 text-cv-dark shrink-0 mt-0.5" /><span><strong>Kerja tim</strong><br>Berkoordinasi dan menerima masukan.</span></div></div></div>
    <div><h3 class="font-lato font-bold text-cv-dark border-b-[1.5px] border-gray-300 pb-1 mb-4 text-[13px] tracking-widest uppercase">PENDIDIKAN</h3><div contenteditable="true" class="text-gray-700"><h4 class="font-lato font-bold text-[14px] text-cv-dark">SMKN 1 CIOMAS</h4><div class="text-[13px] mt-0.5">Pengembangan Perangkat Lunak dan Gim (PPLG) — Kab. Bogor, Jawa Barat</div><div class="text-[12px] italic mt-0.5 text-gray-500">Lulus Mei 2026</div></div></div>
  </div>
</template>
