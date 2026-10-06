<script setup>
import { ref, computed } from 'vue';
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
  X,
  Check,
  Film,
  ShoppingBag,
  Gem,
  Menu,
  Download
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
import ContentCreator from './components/templates/ContentCreator.vue';
import SalesAssistant from './components/templates/SalesAssistant.vue';
import JewelrySales from './components/templates/JewelrySales.vue';

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
  { id: 'store-crew', label: 'Store Crew F&B', category: 'Food & Beverages / UMKM', subcategory: 'Store Crew', icon: Utensils, defaultName: 'CV_Muhamad_Ikhsan_Store_Crew', component: StoreCrew },
  { id: 'content-creator', label: 'Content Creator Intern', category: 'Marketing & Advertising', subcategory: 'Content Creator', icon: Film, defaultName: 'CV_Muhamad_Ikhsan_Content_Creator_Intern', component: ContentCreator },
  { id: 'sales-assistant', label: 'Sales Assistant', category: 'Food & Beverages / UMKM', subcategory: 'Sales Assistant', icon: ShoppingBag, defaultName: 'CV_Muhamad_Ikhsan_Sales_Assistant', component: SalesAssistant },
  { id: 'jewelry-sales', label: 'Sales Representative', category: 'Retail / Perhiasan', subcategory: 'Sales Representative', icon: Gem, defaultName: 'CV_Muhamad_Ikhsan_Sales_Representative_Retail', component: JewelrySales },
];

const activeTab = ref('gerobak');
const templateSearch = ref('');
const mobileSidebarOpen = ref(false);
const photoSrc = ref(null);
const pdfFileName = ref('CV_Muhamad_Ikhsan_Penjaga_Gerobak');

const filteredTabs = computed(() => {
  const query = templateSearch.value.trim().toLowerCase();
  if (!query) return tabs;
  return tabs.filter(tab => [tab.label, tab.category, tab.subcategory].filter(Boolean).join(' ').toLowerCase().includes(query));
});

function clearTemplateSearch() {
  templateSearch.value = '';
}

function selectTemplate(tabId) {
  switchTab(tabId);
  closeMobileSidebar();
}

function openMobileSidebar() {
  mobileSidebarOpen.value = true;
  document.body.style.overflow = 'hidden';
}

function closeMobileSidebar() {
  mobileSidebarOpen.value = false;
  document.body.style.overflow = '';
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
  <div class="app-shell pt-0 pb-0 lg:pt-4 lg:pb-6 font-lato min-h-screen bg-gray-200 overflow-x-hidden">
    <div class="app-layout w-full max-w-[1400px] mx-auto px-0 lg:px-4 flex flex-col lg:flex-row gap-0 lg:gap-6 items-start">
    <div v-if="mobileSidebarOpen" @click="closeMobileSidebar" class="fixed inset-0 z-40 bg-black/40 lg:hidden no-print"></div>
    <aside
      class="fixed inset-y-0 left-0 z-50 w-[min(86vw,320px)] overflow-y-auto transform -translate-x-full transition-transform duration-300 lg:static lg:inset-auto lg:z-auto lg:translate-x-0 lg:w-80 lg:min-h-[calc(100vh-2rem)] lg:flex-none lg:sticky lg:top-0 lg:overflow-visible bg-white p-5 rounded-r-xl lg:rounded-xl shadow-xl lg:shadow-md flex flex-col gap-4 no-print border-l-4 border-cv-dark"
      :class="{ 'translate-x-0': mobileSidebarOpen }"
    >
      <div class="flex items-center gap-2 border-b border-gray-100 pb-4">
        <div class="w-9 h-9 rounded-lg bg-cv-dark text-white flex items-center justify-center"><FilePen class="w-5 h-5" /></div>
        <div class="flex-1"><div class="text-lg font-black tracking-tight text-cv-dark">Cervia</div><div class="text-[10px] text-gray-500 uppercase tracking-widest">CV Maker</div></div>
        <button type="button" @click="closeMobileSidebar" class="lg:hidden p-1.5 rounded-md text-gray-500 hover:bg-gray-100 hover:text-cv-dark" aria-label="Tutup menu"><X class="w-5 h-5" /></button>
      </div>
      <!-- BARIS ATAS: INPUT NAMA FILE PDF DAN TOMBOL AKSI -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-3 border-b border-gray-100 pb-3.5">
        <div class="flex-1 w-full min-w-0">
          <label class="block whitespace-nowrap text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
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

      <!-- DAFTAR TEMPLATE PROFESI -->
      <div class="flex flex-col gap-3 pt-2 flex-1 min-h-0">
        <div class="relative w-full">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input v-model="templateSearch" type="search" placeholder="Cari template CV..." aria-label="Cari template CV" class="w-full text-sm pl-9 pr-9 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cv-dark focus:border-cv-dark focus:outline-none bg-gray-50 text-gray-800 transition">
          <button v-if="templateSearch" @click="clearTemplateSearch" type="button" aria-label="Hapus pencarian" class="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-cv-dark"><X class="w-4 h-4" /></button>
        </div>
        <div class="max-h-[28rem] flex-none overflow-y-auto pr-1 space-y-1">
          <button v-for="tab in filteredTabs" :key="tab.id" type="button" @click="selectTemplate(tab.id)" class="w-full flex items-center justify-between gap-3 rounded-md px-3 py-2.5 text-left hover:bg-gray-100 transition" :class="activeTab === tab.id ? 'bg-gray-100 text-cv-dark ring-1 ring-gray-300' : 'text-gray-700'">
            <span class="flex items-center gap-2 min-w-0"><component :is="tab.icon" class="w-4 h-4 shrink-0" /><span class="flex flex-col min-w-0 leading-tight"><span class="text-sm font-semibold truncate">{{ tab.label }}</span><span v-if="tab.category" class="text-[10px] text-gray-500 truncate">{{ tab.category }} · {{ tab.subcategory }}</span></span></span>
            <Check v-if="activeTab === tab.id" class="w-4 h-4 shrink-0" />
          </button>
          <div v-if="filteredTabs.length === 0" class="px-3 py-3 text-sm text-gray-500">Template tidak ditemukan.</div>
        </div>
      </div>
    </aside>

    <!-- AREA UTAMA PENAMPIL TEMPLATE CV -->
    <main class="flex-1 min-w-0 w-full flex justify-center self-start mt-0">
      <div class="cv-wrapper flex flex-col md:flex-row relative w-full max-w-[210mm] bg-white shadow-lg">
        <component :is="activeComponent" :photo-src="photoSrc" />
      </div>
    </main>
    </div>

    <button type="button" @click="openMobileSidebar" class="lg:hidden fixed top-4 left-4 z-30 w-11 h-11 rounded-xl bg-cv-dark text-white shadow-lg flex items-center justify-center active:scale-95 transition no-print" aria-label="Buka menu Cervia">
      <Menu class="w-5 h-5" />
    </button>
    <button type="button" @click="downloadPDF" class="lg:hidden fixed top-4 left-16 z-30 h-11 px-3 rounded-xl bg-white text-cv-dark border border-gray-200 shadow-lg flex items-center gap-2 active:scale-95 transition no-print" aria-label="Unduh PDF">
      <Download class="w-4 h-4" /><span class="text-xs font-bold">PDF</span>
    </button>
  </div>
</template>
