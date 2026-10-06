<script setup>
import { ref, computed, watch } from 'vue';
import { 
  FilePen, 
  Camera, 
  FileDown, 
  Store, 
  Receipt, 
  Croissant, 
  Shirt, 
  Code2, 
  Boxes, 
  Keyboard, 
  Handshake,
  Factory,
  Utensils,
  Search,
  X
} from 'lucide-vue-next';

import Gerobak from './components/templates/Gerobak.vue';
import Kasir from './components/templates/Kasir.vue';
import Bakery from './components/templates/Bakery.vue';
import Laundry from './components/templates/Laundry.vue';
import Fullstack from './components/templates/Fullstack.vue';
import Gudang from './components/templates/Gudang.vue';
import Admin from './components/templates/Admin.vue';
import Sales from './components/templates/Sales.vue';
import HelperProduksi from './components/templates/HelperProduksi.vue';
import StoreCrew from './components/templates/StoreCrew.vue';

import { compressPhoto } from './utils/photo.js';

const tabs = [
  { id: 'gerobak', label: 'Penjaga Gerobak', icon: Store, defaultName: 'CV_Muhamad_Ikhsan_Penjaga_Gerobak', component: Gerobak },
  { id: 'kasir', label: 'Kasir / Pramuniaga', icon: Receipt, defaultName: 'CV_Muhamad_Ikhsan_Kasir', component: Kasir },
  { id: 'bakery', label: 'Helper Bakery / Roti', icon: Croissant, defaultName: 'CV_Muhamad_Ikhsan_Helper_Bakery', component: Bakery },
  { id: 'laundry', label: 'Staf Laundry', icon: Shirt, defaultName: 'CV_Muhamad_Ikhsan_Laundry_Staff', component: Laundry },
  { id: 'fullstack', label: 'Fullstack Developer', icon: Code2, defaultName: 'CV_Muhamad_Ikhsan_Fullstack_Developer', component: Fullstack },
  { id: 'gudang', label: 'Staff / Admin Gudang', icon: Boxes, defaultName: 'CV_Muhamad_Ikhsan_Staff_Gudang', component: Gudang },
  { id: 'admin', label: 'Admin / Data Entry', icon: Keyboard, defaultName: 'CV_Muhamad_Ikhsan_Admin_Data_Entry', component: Admin },
  { id: 'sales', label: 'Sales / Marketing', icon: Handshake, defaultName: 'CV_Muhamad_Ikhsan_Sales_Representative', component: Sales },
  { id: 'helper-produksi', label: 'Helper Produksi', icon: Factory, defaultName: 'CV_Muhamad_Ikhsan_Helper_Produksi', component: HelperProduksi },
  { id: 'store-crew', label: 'Store Crew F&B', icon: Utensils, defaultName: 'CV_Fresh_Graduate_Store_Crew_FnB', component: StoreCrew },
];

const activeTab = ref('gerobak');
const templateSearch = ref('');
const photoSrc = ref(null);
const pdfFileName = ref('CV_Muhamad_Ikhsan_Penjaga_Gerobak');

const filteredTabs = computed(() => {
  const query = templateSearch.value.trim().toLowerCase();
  if (!query) return tabs;
  return tabs.filter(tab => tab.label.toLowerCase().includes(query));
});

function clearTemplateSearch() {
  templateSearch.value = '';
}

const activeComponent = computed(() => {
  const current = tabs.find(t => t.id === activeTab.value);
  return current ? current.component : Gerobak;
});

function switchTab(tabId) {
  activeTab.value = tabId;
  const current = tabs.find(t => t.id === tabId);
  if (current) {
    pdfFileName.value = current.defaultName;
    document.title = current.defaultName;
  }
}

function updateDocumentTitle() {
  if (pdfFileName.value) {
    document.title = pdfFileName.value.trim();
  }
}

async function onPhotoUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    const dataUrl = await compressPhoto(file);
    photoSrc.value = dataUrl;
  } catch (err) {
    console.error('Gagal memproses foto:', err);
    alert('Gagal memproses foto. Pastikan file berupa format gambar yang valid.');
  }
}

function downloadPDF() {
  updateDocumentTitle();
  setTimeout(() => {
    window.print();
  }, 100);
}

// Inisialisasi judul tab awal
document.title = pdfFileName.value;
</script>

<template>
  <div class="py-4 md:py-10 font-lato min-h-screen bg-gray-200">
    <div class="w-full max-w-[210mm] mx-auto bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col gap-4 no-print border-l-4 border-cv-dark px-4 sm:px-6">
      <!-- BARIS ATAS: INPUT NAMA FILE PDF DAN TOMBOL AKSI -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-gray-100 pb-3.5">
        <div class="flex-1 w-full min-w-0">
          <label class="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <FilePen class="w-3.5 h-3.5 inline-block text-cv-dark" /> NAMA FILE PDF SAAT DIUNDUH:
          </label>
          <div class="relative w-full">
            <input 
              v-model="pdfFileName" 
              @input="updateDocumentTitle" 
              type="text"
              class="w-full text-xs sm:text-sm font-semibold pl-3 pr-12 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cv-dark focus:border-cv-dark focus:outline-none bg-gray-50 text-gray-800 transition shadow-sm"
              placeholder="Nama file PDF..."
            >
            <span class="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 select-none pointer-events-none">.pdf</span>
          </div>
        </div>

        <div class="flex items-center gap-2 w-full md:w-auto shrink-0 justify-end">
          <label class="bg-gray-100 hover:bg-gray-200 text-cv-dark border border-gray-300 px-3.5 py-2 rounded-md shadow-sm cursor-pointer transition font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 flex-1 md:flex-none text-center active:scale-95">
            <Camera class="w-4 h-4 inline-block text-gray-600" /> Foto
            <input type="file" accept="image/*" class="hidden" @change="onPhotoUpload">
          </label>
          
          <button 
            @click="downloadPDF" 
            type="button" 
            class="bg-cv-dark hover:bg-black text-white px-4 py-2 rounded-md shadow transition font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 flex-1 md:flex-none active:scale-95"
          >
            <FileDown class="w-4 h-4 inline-block" /> Simpan PDF
          </button>
        </div>
      </div>

      <!-- PILIHAN TEMPLATE PROFESI -->
      <div class="flex flex-col gap-3">
        <div class="relative w-full md:max-w-sm">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            v-model="templateSearch"
            type="search"
            placeholder="Cari template CV..."
            aria-label="Cari template CV"
            class="w-full text-sm pl-9 pr-9 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cv-dark focus:border-cv-dark focus:outline-none bg-gray-50 text-gray-800 transition shadow-sm"
          >
          <button
            v-if="templateSearch"
            @click="clearTemplateSearch"
            type="button"
            aria-label="Hapus pencarian"
            class="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-cv-dark"
          >
            <X class="w-4 h-4" />
          </button>
        </div>

        <div class="flex flex-wrap gap-2 border-b border-gray-200 pb-3">
        <button 
          v-for="tab in filteredTabs" 
          :key="tab.id"
          @click="switchTab(tab.id)" 
          :class="activeTab === tab.id ? 'bg-cv-dark text-white border-cv-dark font-bold shadow-sm' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-400 hover:text-cv-dark font-medium'"
          class="py-2 px-3 text-xs sm:text-sm transition-all duration-200 flex items-center gap-1.5 rounded-md border"
        >
          <component :is="tab.icon" class="w-4 h-4 inline-block" />
          {{ tab.label }}
        </button>
        <span v-if="filteredTabs.length === 0" class="text-sm text-gray-500 py-2">Template tidak ditemukan.</span>
        </div>
      </div>
    </div>

    <!-- AREA UTAMA PENAMPIL TEMPLATE CV -->
    <div class="w-full flex justify-center px-2 sm:px-4">
      <div class="cv-wrapper flex flex-col md:flex-row relative w-full max-w-[210mm] bg-white shadow-lg">
        <component :is="activeComponent" :photo-src="photoSrc" />
      </div>
    </div>
  </div>
</template>
