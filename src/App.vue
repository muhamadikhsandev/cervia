<script setup>
import { ref, computed, nextTick } from 'vue';
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
  Film,
  ShoppingBag,
  Gem,
  Menu,
  Download,
  ArrowLeft
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
import CoverLetter from './components/templates/CoverLetter.vue';
import LokerCv from './components/templates/LokerCv.vue';

import { compressPhoto } from './utils/photo.js';
import defaultPhoto from '../foto-profil-default.jpg';

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
  { id: 'job-3', label: 'Staff Outlet', category: 'Lowongan 3', subcategory: 'Food & Beverages', icon: Utensils, defaultName: 'CV_Nama_Staff_Outlet_Dimsumart', component: LokerCv },
  { id: 'job-4', label: 'Operator Packing', category: 'Lowongan 4', subcategory: 'Produksi', icon: Factory, defaultName: 'CV_Nama_Operator_Packing', component: LokerCv },
  { id: 'job-5', label: 'Admin Stock Opname', category: 'Lowongan 5', subcategory: 'Administrasi Gudang', icon: Boxes, defaultName: 'CV_Nama_Admin_Stock_Opname', component: LokerCv },
  { id: 'job-6', label: 'Crew Store', fileLabel: 'Crew Store Petshop', category: 'Lowongan 6', subcategory: 'Petshop', icon: Store, defaultName: 'CV_Muhamad_Ikhsan_Crew_Store_Petshop', component: LokerCv },
  { id: 'job-7', label: 'Customer Service', category: 'Lowongan 7', subcategory: 'Layanan Pelanggan', icon: Handshake, defaultName: 'CV_Nama_Customer_Service_Arasya', component: LokerCv },
  { id: 'job-8', label: 'Service Kopi', category: 'Lowongan 8', subcategory: 'Kedai Kopi', icon: Croissant, defaultName: 'CV_Nama_Service_Kopi_Satu_Tudju', component: LokerCv },
  { id: 'job-10', label: 'Casual Warehouse', category: 'Lowongan 10', subcategory: 'Gudang', icon: Boxes, defaultName: 'CV_Nama_Casual_Warehouse_Naturlife', component: LokerCv },
  { id: 'job-11', label: 'Waiter', category: 'Lowongan 11', subcategory: 'Restoran', icon: Utensils, defaultName: 'CV_Nama_Waiter_Bears_Group', component: LokerCv },
];

const activeTab = ref('gerobak');
const documentMode = ref('cv');
const templateSearch = ref('');
const mobileSidebarOpen = ref(false);
const photoSrc = ref(defaultPhoto);
const pdfFileName = ref('CV_Muhamad_Ikhsan_Penjaga_Gerobak');
const showTemplateGallery = ref(false);
const previewZoom = ref(1);

function adjustPreviewZoom(amount) {
  previewZoom.value = Math.min(1, Math.max(0.3, Math.round((previewZoom.value + amount) * 100) / 100));
}

function setPreviewZoom(event) {
  const input = event.target;
  if (input.value === '') return;
  const value = Number(input.value);
  if (!Number.isFinite(value)) return;
  if (value > 100) {
    input.value = '100';
    previewZoom.value = 1;
  } else if (value >= 30) {
    previewZoom.value = value / 100;
  }
}

function normalizePreviewZoomInput(event) {
  const input = event.target;
  const value = Number(input.value);
  const clampedValue = input.value === '' || !Number.isFinite(value)
    ? Math.round(previewZoom.value * 100)
    : Math.min(100, Math.max(30, value));
  input.value = String(clampedValue);
  previewZoom.value = clampedValue / 100;
}

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
  if (documentMode.value === 'cover-letter') return CoverLetter;
  const current = tabs.find(t => t.id === activeTab.value);
  return current ? current.component : Gerobak;
});

const activeTemplateLabel = computed(() => tabs.find(t => t.id === activeTab.value)?.label || 'Lamaran Kerja');

function switchTab(tabId) {
  activeTab.value = tabId;
  const current = tabs.find(t => t.id === tabId);
  if (current) {
    pdfFileName.value = formatDocumentFileName(documentMode.value, current.fileLabel || current.label);
    document.title = pdfFileName.value;
  }
}

function switchDocumentMode(mode) {
  documentMode.value = mode;
  const current = tabs.find(t => t.id === activeTab.value);
  if (current) {
    pdfFileName.value = formatDocumentFileName(mode, current.fileLabel || current.label);
    document.title = pdfFileName.value;
  }
}

function updateDocumentTitle() {
  const name = pdfFileName.value.trim().replace(/\.pdf$/i, '');
  if (name) document.title = name;
}

function formatDocumentFileName(mode, label) {
  const position = label
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
  const prefix = mode === 'cover-letter' ? 'Surat_Lamaran_Muhamad_Ikhsan' : 'CV_Muhamad_Ikhsan';
  return `${prefix}_${position}`;
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

async function waitForImages(container) {
  const images = [...container.querySelectorAll('img')];
  await Promise.all(images.map(image => {
    if (image.complete && image.naturalWidth > 0) return Promise.resolve();
    if (typeof image.decode === 'function') return image.decode().catch(() => {});
    return new Promise(resolve => {
      image.addEventListener('load', resolve, { once: true });
      image.addEventListener('error', resolve, { once: true });
    });
  }));
}

async function downloadPDF() {
  updateDocumentTitle();
  await nextTick();
  await waitForImages(document.querySelector('.app-layout main'));
  window.print();
}

window.addEventListener('afterprint', () => {
  document.title = pdfFileName.value.trim() || 'CV';
});

// Inisialisasi judul tab awal
document.title = pdfFileName.value;
</script>

<template>
  <div class="app-shell pt-0 pb-0 lg:h-screen lg:min-h-0 lg:overflow-hidden lg:pt-4 lg:pb-4 font-lato min-h-screen bg-gray-200 overflow-x-clip">
    <div class="app-layout w-full max-w-[1400px] mx-auto px-0 lg:px-4 flex flex-col lg:flex-row gap-0 lg:gap-6 items-start">
    <div v-if="mobileSidebarOpen" @click="closeMobileSidebar" class="fixed inset-0 z-40 bg-black/40 lg:hidden no-print"></div>
    <aside
      class="fixed inset-y-0 left-0 z-50 w-[min(86vw,320px)] overflow-y-auto transform -translate-x-full transition-transform duration-300 lg:static lg:inset-auto lg:z-auto lg:translate-x-0 lg:w-80 lg:h-[calc(100vh-2rem)] lg:max-h-[calc(100vh-2rem)] lg:flex-none lg:sticky lg:top-4 lg:overscroll-contain bg-white p-5 rounded-r-xl lg:rounded-xl shadow-xl lg:shadow-md flex flex-col gap-4 no-print border-l-4 border-cv-dark"
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
        <div class="grid grid-cols-2 gap-1 rounded-lg bg-gray-100 p-1 no-print">
          <button type="button" @click="switchDocumentMode('cv')" class="rounded-md px-2 py-2 text-xs font-bold transition" :class="documentMode === 'cv' ? 'bg-white text-cv-dark shadow-sm' : 'text-gray-500 hover:text-cv-dark'">Template CV</button>
          <button type="button" @click="switchDocumentMode('cover-letter')" class="rounded-md px-2 py-2 text-xs font-bold transition" :class="documentMode === 'cover-letter' ? 'bg-white text-cv-dark shadow-sm' : 'text-gray-500 hover:text-cv-dark'">Surat Lamaran</button>
        </div>
        <div class="relative w-full">
          <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input v-model="templateSearch" type="search" placeholder="Cari template CV..." aria-label="Cari template CV" class="w-full text-sm pl-9 pr-9 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cv-dark focus:border-cv-dark focus:outline-none bg-gray-50 text-gray-800 transition">
          <button v-if="templateSearch" @click="clearTemplateSearch" type="button" aria-label="Hapus pencarian" class="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-cv-dark"><X class="w-4 h-4" /></button>
        </div>
        <button type="button" @click="switchDocumentMode('cv'); showTemplateGallery = true" class="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-bold text-cv-dark hover:bg-gray-100">Lihat semua CV dalam kertas</button>
        <div class="max-h-[28rem] flex-none overflow-y-auto pr-1 space-y-1 lg:max-h-none lg:flex-1 lg:min-h-0">
          <button v-for="tab in filteredTabs" :key="tab.id" type="button" @click="selectTemplate(tab.id)" class="w-full flex items-center justify-between gap-3 rounded-md px-3 py-3 text-left transition" :class="activeTab === tab.id ? 'bg-cv-dark text-white shadow-sm hover:bg-black' : 'text-gray-700 hover:bg-gray-100'">
            <span class="flex items-center gap-2 min-w-0"><component :is="tab.icon" class="w-4 h-4 shrink-0" /><span class="flex flex-col min-w-0 leading-tight"><span class="text-sm font-semibold truncate">{{ tab.label }}</span><span v-if="tab.category" class="text-[10px] truncate" :class="activeTab === tab.id ? 'text-white/70' : 'text-gray-500'">{{ tab.category }} · {{ tab.subcategory }}</span></span></span>
          </button>
          <div v-if="filteredTabs.length === 0" class="px-3 py-3 text-sm text-gray-500">Template tidak ditemukan.</div>
        </div>
      </div>
    </aside>

    <!-- AREA UTAMA PENAMPIL TEMPLATE CV -->
    <main class="relative flex-1 min-w-0 w-full flex flex-col items-center justify-start self-start mt-0 lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:overflow-y-auto lg:overscroll-contain">
      <div v-if="!showTemplateGallery" class="preview-zoom-controls no-print" role="group" aria-label="Ukuran pratinjau CV">
        <button type="button" @click="adjustPreviewZoom(-0.05)" :disabled="previewZoom <= 0.3" aria-label="Perkecil pratinjau" title="Perkecil" class="preview-zoom-button">−</button>
        <label class="preview-zoom-field"><input type="number" min="30" max="100" step="1" :value="Math.round(previewZoom * 100)" @input="setPreviewZoom" @blur="normalizePreviewZoomInput" aria-label="Persentase ukuran pratinjau"><span>%</span></label>
        <button type="button" @click="adjustPreviewZoom(0.05)" :disabled="previewZoom >= 1" aria-label="Perbesar pratinjau" title="Perbesar" class="preview-zoom-button">+</button>
      </div>
      <section v-if="showTemplateGallery" class="template-gallery-section w-full p-3 md:p-5">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <div><h1 class="text-xl font-bold text-cv-dark">Semua Template CV</h1><p class="text-sm text-gray-500">{{ filteredTabs.length }} template · pilih kertas untuk melihat CV</p></div>
          <button type="button" @click="showTemplateGallery = false" class="inline-flex shrink-0 items-center gap-2 rounded-md bg-cv-dark px-3 py-2 text-sm font-semibold text-white hover:bg-black"><ArrowLeft class="h-4 w-4" />Kembali ke CV</button>
        </div>
        <div class="template-gallery-grid">
          <button v-for="tab in filteredTabs" :key="tab.id" type="button" @click="selectTemplate(tab.id); showTemplateGallery = false" class="template-gallery-card" :aria-label="`Buka template ${tab.label}`">
            <div class="template-gallery-paper"><div class="template-gallery-scaled"><div class="cv-wrapper flex flex-row relative w-full max-w-[210mm] bg-white"><component :is="tab.component" :photo-src="photoSrc" :template-id="tab.id" :template-label="tab.label" /></div></div></div>
            <div class="px-2 py-2 text-left"><div class="truncate text-xs font-bold text-cv-dark">{{ tab.label }}</div><div v-if="tab.category" class="truncate text-[10px] text-gray-500">{{ tab.category }}</div></div>
          </button>
        </div>
      </section>
      <div v-else class="cv-screen-preview cv-wrapper flex flex-col md:flex-row relative w-full max-w-[210mm] bg-white shadow-lg" :style="{ zoom: previewZoom }">
        <component :is="activeComponent" :photo-src="photoSrc" :template-id="activeTab" :template-label="activeTemplateLabel" />
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
