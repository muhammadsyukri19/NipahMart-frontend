// Mock Data untuk Role Pembeli (Buyer Dashboard)

export const MOCK_USER = {
  name: "Cut Nyak Sofia",
  impact: {
    mangrovesPlanted: 12,
    communitiesSupported: 4,
    totalDonation: 45000,
  }
};

export const MOCK_ACTIVE_ORDER = {
  id: "NH-88291",
  productName: "Gula Nipah Organik (Rendah Glikemik)",
  price: 125000,
  image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
  courier: "Biteship Express",
  status: "SEDANG TRANSIT",
  progress: 2, // 0: Dibayar, 1: Diproses, 2: Dikirim, 3: Diterima
};

export const MOCK_TIMELINE = [
  { id: 1, title: "Dipanen oleh Pak Ramli", desc: "Zona Pesisir Banda Aceh", date: "12 Okt 2024", isCompleted: true },
  { id: 2, title: "Diproses di UMKM Cahaya Nipah", desc: "Fasilitas Bersertifikat Eco", date: "14 Okt 2024", isCompleted: true },
  { id: 3, title: "Dikirim via Biteship", desc: "Hub Lhokseumawe", date: "15 Okt 2024", isCompleted: false },
];

export const MOCK_PRODUCTS = [
  { id: 1, title: "Topi Anyaman Pesisir", desc: "Dianyam dengan tangan oleh pengrajin", price: 210000, score: 98, image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
  { id: 2, title: "Set Tatakan Ruang Makan", desc: "Set isi 6 • Finishing Alami", price: 85000, score: 96, image: "https://images.unsplash.com/photo-1610992015762-1111075677d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
];

export const MOCK_ADDRESSES = [
  { id: 1, title: "Rumah", name: "Sofia Cut Nyak", address: "Jl. Teuku Umar No. 42, Baiturrahman, Banda Aceh, 23243", isDefault: true },
  { id: 2, title: "Kantor", name: "Sofia Cut Nyak", address: "Gedung Aceh Creative Lab, Lt. 3, Kuta Alam, Banda Aceh, 23126", isDefault: false },
];

export const MOCK_MARKETPLACE_PRODUCTS = [
  { 
    id: 1, 
    category: "MAKANAN & NUTRISI", 
    title: "Gula Rendah Glikemik", 
    price: 45000, 
    rating: 4.9, 
    reviews: 124, 
    isEcoSorted: true,
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 2, 
    category: "PAKAIAN & TEKSTIL", 
    title: "Topi Anyaman Pesisir", 
    price: 185000, 
    rating: 4.8, 
    reviews: 86, 
    isEcoSorted: true,
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 3, 
    category: "PAKET HADIAH", 
    title: "Paket Warisan Pesisir", 
    price: 320000, 
    rating: 5.0, 
    reviews: 12, 
    isEcoSorted: true,
    image: "https://images.unsplash.com/photo-1610992015762-1111075677d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
  },
  { 
    id: 4, 
    category: "DEKORASI RUMAH", 
    title: "Mangkuk Keramik Tanah", 
    price: 210000, 
    rating: 0, 
    reviews: 0, 
    isEcoSorted: false,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
  },
];

export const MOCK_CART_ITEMS = [
  {
    id: 1,
    productName: "Gula Nipah Organik (Rendah Glikemik)",
    category: "MAKANAN & NUTRISI",
    price: 45000,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    isEcoSorted: true,
  },
  {
    id: 2,
    productName: "Topi Anyaman Pesisir",
    category: "PAKAIAN & TEKSTIL",
    price: 185000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    isEcoSorted: true,
  }
];

export const MOCK_TRACKING_DATA = {
  orderId: "NPH-2026-88219A",
  status: "Dalam Perjalanan",
  estimatedArrival: "28 Juni 2026",
  carbonOffset: 2.4, // kg
  timeline: [
    {
      id: 1,
      date: "23 Juni 2026, 08:00 WIB",
      title: "Pemanenan Nira Nipah",
      desc: "Disadap oleh Pak Basri (Mitra Petani #112) di Hutan Nipah Pesisir Aceh Besar.",
      isCompleted: true,
      icon: "leaf"
    },
    {
      id: 2,
      date: "23 Juni 2026, 15:30 WIB",
      title: "Pengolahan Organik",
      desc: "Bahan baku diterima dan diolah oleh UMKM Karya Pesisir tanpa bahan kimia tambahan.",
      isCompleted: true,
      icon: "factory"
    },
    {
      id: 3,
      date: "24 Juni 2026, 10:00 WIB",
      title: "Pengemasan Ramah Lingkungan",
      desc: "Dikemas menggunakan anyaman daun nipah sisa dan kardus daur ulang.",
      isCompleted: true,
      icon: "package"
    },
    {
      id: 4,
      date: "25 Juni 2026, 14:00 WIB",
      title: "Diserahkan ke Kurir (Eco-Transit)",
      desc: "Paket dijemput oleh armada kendaraan listrik (EV) menuju pusat sortir.",
      isCompleted: true,
      icon: "truck"
    },
    {
      id: 5,
      date: "-",
      title: "Pesanan Diterima",
      desc: "Menunggu konfirmasi penerimaan dari pihak pembeli.",
      isCompleted: false,
      icon: "home"
    }
  ]
};

export const MOCK_PRODUCT_DETAILS = {
  id: 1,
  category: "Pemanis Alami",
  title: "Gula Nipah Cair Organik Premium - 250ml",
  price: 45000,
  rating: 4.8,
  reviews: 124,
  isEcoSorted: true,
  stock: 45,
  images: [
    "https://images.unsplash.com/photo-1587049352847-4d4b1a2068aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1622485540306-382a84e68e4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ],
  shortDesc: "Gula nipah cair murni dari nira nipah pesisir Aceh Besar. Indeks glikemik rendah, cocok untuk penderita diabetes dan diet sehat. Diproses secara tradisional tanpa tambahan bahan kimia.",
  description: "<p>Gula nipah cair premium kami disadap langsung dari pohon nipah liar yang tumbuh alami di kawasan estuari Aceh Besar. Memiliki rasa manis karamel yang khas dengan sentuhan gurih (umami) alami dari ekosistem payau.</p><br/><p><strong>Kandungan Gizi:</strong><br/>- Indeks Glikemik Rendah (GI 35-40)<br/>- Kaya Antioksidan<br/>- Mengandung Mineral Alami (Zat Besi, Kalium)</p>",
  story: "<p>Produk ini merupakan hasil kerja keras Pak Basri dan kelompok tani hutan pesisir Aceh Besar. Dengan membeli produk ini, Anda langsung berkontribusi meningkatkan pendapatan 15 keluarga nelayan/petani nipah yang beralih ke praktik pemanenan lestari tanpa merusak habitat mangrove.</p>",
  impact: {
    description: "<ul class='list-disc pl-5 mt-2'><li>Metode panen non-destruktif melestarikan 2.5 m² area nipah.</li><li>Kemasan menggunakan botol kaca daur ulang (reusable).</li><li>Diproses tanpa kayu bakar hutan, melainkan menggunakan limbah biomassa.</li></ul>",
    locationName: "Estuari Lhoknga, Aceh Besar",
    coordinates: "5.4521° N, 95.2443° E",
    preservedArea: "2.5 m²",
    mapImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
};


// ==========================================
// Mock Data untuk Role Petani (Farmer Dashboard)
// ==========================================

export const MOCK_FARMER_USER = {
  name: "Syarifuddin",
  id: "Petani Terverifikasi #1042",
  avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  location: "Aceh Coastal Hub"
};

export const MOCK_FARMER_STATS = {
  totalHarvest: 1240, // Liters
  harvestTrend: "+12%",
  activeOrders: 18,
  estEarnings: "Rp 8.400.000",
  qualityRating: "98.4%",
  grade: "Grade A"
};

export const MOCK_ACTIVE_SUPPLY_CHAIN = [
  { id: "#NP-8821", partner: "Koperasi Aceh Jaya", location: "Meulaboh", status: "VERIFIKASI", nextAction: "Pindai QR", color: "warning" },
  { id: "#NP-8799", partner: "Nipah Artisanal Home", location: "Banda Aceh", status: "SERAH TERIMA", nextAction: "Konfirmasi", color: "success-container" },
  { id: "#NP-8750", partner: "Aceh Organic Sugars", location: "Lhokseumawe", status: "DIPROSES", nextAction: "Lacak...", color: "surface-container-highest" },
];

export const MOCK_HARVEST_HISTORY = [
  { id: 1, date: "24 Okt 2024, 10:15 WIB", volume: 28.5, quality: "GRADE A", coordinates: "5.5483, 95.3238" },
  { id: 2, date: "22 Okt 2024, 08:40 WIB", volume: 22.0, quality: "GRADE B", coordinates: "5.5512, 95.3195" },
  { id: 3, date: "20 Okt 2024, 09:15 WIB", volume: 31.5, quality: "GRADE A", coordinates: "5.5483, 95.3238" },
];

export const MOCK_SUPPLY_REQUESTS = [
  { id: 1, partner: "Koperasi Makmur Sejahtera", location: "Meulaboh North (4.2km)", volume: 50, isVerified: true },
  { id: 2, partner: "Aceh Artisanal Vinegar Co.", location: "Central Hub (12.0km)", volume: 120, isVerified: true },
];

