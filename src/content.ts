import type { Locale } from "@/i18n/routing";

export const contact = {
  email: "azzammustafidh@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-azzam-mustafidh-42586a239/",
  github: "https://github.com/mustafidh",
  youtube: "https://youtube.com/shorts/VSzH_oqFBRk?feature=share",
  youtubeEmbed: "https://www.youtube-nocookie.com/embed/VSzH_oqFBRk",
  siteUrl: "https://islamic-smart-door.vercel.app",
};

export const siteContent: Record<Locale, {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  nav: Array<{ href: string; label: string }>;
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    body: string;
    primary: string;
    demo: string;
    secondary: string;
    imageAlt: string;
    stats: Array<{ value: string; label: string }>;
  };
  problem: {
    label: string;
    title: string;
    problemTitle: string;
    problem: string;
    solutionTitle: string;
    solution: string;
  };
  featuresTitle: string;
  featuresLead: string;
  features: Array<{ title: string; body: string }>;
  architecture: {
    label: string;
    title: string;
    body: string;
    nodes: Array<{ title: string; body: string }>;
  };
  gallery: {
    label: string;
    title: string;
    body: string;
    deviceAlt: string;
    exhibitionAlt: string;
    items: Array<{ title: string; body: string }>;
  };
  technical: {
    label: string;
    title: string;
    body: string;
    groups: Array<{ title: string; items: string[] }>;
  };
  recognition: {
    label: string;
    title: string;
    items: Array<{ title: string; body: string }>;
  };
  about: {
    label: string;
    title: string;
    body: string;
    points: string[];
  };
  contact: {
    label: string;
    title: string;
    body: string;
    name: string;
    email: string;
    message: string;
    send: string;
    linkedin: string;
  };
}> = {
  id: {
    meta: {
      title: "Islamic Smart Door (ISD) - Showcase Portofolio Mustafidh",
      description:
        "Website showcase bilingual untuk Islamic Smart Door, sistem akses pintar ESP32 yang memadukan keamanan modern dengan pengingat ibadah harian.",
      ogAlt:
        "Render Islamic Smart Door dengan modul ESP32, NFC, Telegram, voice command Islami, dan jadwal sholat.",
    },
    nav: [
      { href: "#problem", label: "Masalah" },
      { href: "#features", label: "Fitur" },
      { href: "#architecture", label: "Arsitektur" },
      { href: "#demo", label: "Demo" },
      { href: "#technical", label: "Teknis" },
      { href: "#contact", label: "Kontak" },
    ],
    hero: {
      eyebrow: "Portfolio project - IoT bernilai Islami",
      title: "Islamic Smart Door (ISD)",
      tagline: "Smart access control yang menjaga ruang dan mengingatkan ibadah.",
      body:
        "ISD adalah sistem smart door berbasis ESP32 buatan Mustafidh yang menyatukan NFC, Telegram remote, Web PIN, voice command Islami, jadwal sholat Kemenag, dan watchdog timer dalam satu perangkat ringkas.",
      primary: "Hubungi untuk Kolaborasi",
      demo: "Lihat Demo",
      secondary: "Lihat LinkedIn",
      imageAlt:
        "Render perangkat Islamic Smart Door dengan panel akses, ikon NFC, LCD pengingat ibadah, dan koneksi cloud.",
      stats: [
        { value: "< Rp500K", label: "estimasi produksi" },
        { value: "8 detik", label: "watchdog timer" },
        { value: "9 fitur", label: "akses dan ibadah" },
      ],
    },
    problem: {
      label: "Problem & Solution",
      title: "Akses pintar yang tidak berhenti di keamanan.",
      problemTitle: "Masalah",
      problem:
        "Sistem akses rumah, masjid, dan pesantren umumnya fokus pada kunci digital, tetapi jarang membawa konteks ibadah harian seperti jadwal sholat dan pengingat amalan.",
      solutionTitle: "Solusi ISD",
      solution:
        "ISD menjadikan ESP32 sebagai pusat kontrol: membuka akses lewat NFC, Telegram, Web PIN, dan Google Assistant, sambil menampilkan jadwal sholat serta pengingat ibadah pada LCD 20x4.",
    },
    featuresTitle: "Fitur Utama",
    featuresLead:
      "Dirancang agar mudah dipahami pengunjung umum, tetapi tetap cukup dalam untuk reviewer teknis.",
    features: [
      { title: "NFC PN532", body: "Akses cepat menggunakan kartu atau tag NFC untuk pengguna tepercaya." },
      { title: "Telegram Remote", body: "Buka pintu dari jarak jauh melalui perintah Telegram yang praktis." },
      { title: "Web PIN", body: "Fallback berbasis browser untuk akses berbasis kode PIN." },
      { title: "Voice Command Islami", body: "Modul DF2301QG mendukung perintah suara bernuansa Islami." },
      { title: "Jadwal Sholat", body: "Sinkronisasi jadwal via Kemenag API dan waktu NTP." },
      { title: "Pengingat LCD", body: "LCD 20x4 menampilkan pesan ibadah dan status perangkat." },
      { title: "Google Assistant", body: "Integrasi SinricPro membuka peluang kontrol suara dari ekosistem rumah pintar." },
      { title: "WiFiManager", body: "Setup jaringan lebih mudah tanpa hardcode kredensial WiFi." },
      { title: "Watchdog Timer", body: "Pemulihan otomatis 8 detik untuk menjaga sistem tetap andal." },
    ],
    architecture: {
      label: "How It Works",
      title: "ESP32 sebagai pusat, sensor sebagai indera, cloud sebagai jembatan.",
      body:
        "Arsitektur ISD menjaga batas yang jelas: website ini adalah showcase, sementara kendali aktual tetap berada di firmware, Telegram bot, Web PIN, dan integrasi cloud perangkat.",
      nodes: [
        { title: "Input akses", body: "NFC, Web PIN, Telegram, Google Assistant, dan voice command." },
        { title: "Core ESP32", body: "Validasi perintah, kontrol relay, LCD, WiFiManager, NTP, dan watchdog." },
        { title: "Layanan eksternal", body: "Kemenag API, Telegram Bot API, dan SinricPro." },
        { title: "Output ruang", body: "Door lock, status akses, pengingat ibadah, dan feedback pengguna." },
      ],
    },
    gallery: {
      label: "Galeri / Demo",
      title: "Disiapkan untuk foto perangkat, exhibition, dan video demo.",
      body:
        "Slot visual sudah dibuat agar foto asli dari Sekolah Impian Exhibition atau embed YouTube bisa masuk tanpa mengubah struktur halaman.",
      deviceAlt: "Render perangkat ISD yang menunjukkan panel pintu pintar dan modul kontrol.",
      exhibitionAlt: "Ilustrasi booth exhibition Islamic Smart Door dengan pengunjung melihat demo perangkat.",
      items: [
        { title: "Render perangkat", body: "Hero visual untuk memperlihatkan bentuk sistem dan titik akses." },
        { title: "Sekolah Impian Exhibition", body: "Ruang untuk dokumentasi publik saat produk didemokan." },
        { title: "Video demo", body: "Tonton demo singkat ISD langsung melalui YouTube Shorts." },
      ],
    },
    technical: {
      label: "Technical Deep Dive",
      title: "Detail teknis untuk reviewer, dosen, dan calon kolaborator.",
      body:
        "Bagian ini sengaja dibuat collapsible supaya pengunjung umum tidak kewalahan, tetapi audiens teknis tetap mendapatkan konteks yang mereka cari.",
      groups: [
        {
          title: "Komponen Hardware",
          items: ["ESP32 sebagai controller utama", "PN532 NFC module", "DF2301QG voice command module", "LCD 20x4", "Relay dan door lock"],
        },
        {
          title: "Software Stack",
          items: ["Firmware ESP32", "Kemenag API untuk jadwal sholat", "NTP sync", "Telegram Bot API", "SinricPro untuk Google Assistant"],
        },
        {
          title: "Reliability & Setup",
          items: ["WiFiManager untuk onboarding jaringan", "Watchdog timer 8 detik", "Fallback akses lewat Web PIN", "Biaya produksi di bawah Rp 500.000"],
        },
      ],
    },
    recognition: {
      label: "Pencapaian",
      title: "Dibangun sebagai karya unggulan dan didemokan secara publik.",
      items: [
        { title: "Sekolah Impian Exhibition", body: "ISD pernah dipresentasikan sebagai demo publik untuk menunjukkan integrasi IoT dan nilai Islam." },
        { title: "Portfolio-ready", body: "Website ini disiapkan sebagai link aktif untuk LinkedIn, CV, beasiswa, magang, dan review institusi." },
        { title: "Track record teknis", body: "Dapat dikaitkan dengan karya lain seperti AgriSmart bila relevan untuk konteks portofolio." },
      ],
    },
    about: {
      label: "Tentang Pembuat",
      title: "Mustafidh, builder di persimpangan teknologi dan nilai Islam.",
      body:
        "Mustafidh mengembangkan ISD sebagai project manager dan maker, dengan fokus pada IoT yang bukan hanya pintar secara teknis, tetapi juga berguna untuk ritme ibadah dan kehidupan komunitas Muslim.",
      points: ["IoT dan embedded systems", "Produk edukatif untuk pesantren dan komunitas", "Teknologi sebagai alat peradaban Islam"],
    },
    contact: {
      label: "Kontak",
      title: "Tertarik berdiskusi, mereview, atau berkolaborasi?",
      body:
        "Kirim pesan singkat untuk peluang kolaborasi, masukan teknis, mentoring, atau kebutuhan portofolio.",
      name: "Nama",
      email: "Email",
      message: "Pesan",
      send: "Kirim via Email",
      linkedin: "Lihat LinkedIn",
    },
  },
  en: {
    meta: {
      title: "Islamic Smart Door (ISD) - Mustafidh Portfolio Showcase",
      description:
        "A bilingual showcase for Islamic Smart Door, an ESP32 smart access system combining modern security with daily worship reminders.",
      ogAlt:
        "Islamic Smart Door render with ESP32, NFC, Telegram, Islamic voice command, and prayer schedule integration.",
    },
    nav: [
      { href: "#problem", label: "Problem" },
      { href: "#features", label: "Features" },
      { href: "#architecture", label: "Architecture" },
      { href: "#demo", label: "Demo" },
      { href: "#technical", label: "Technical" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      eyebrow: "Portfolio project - Islamic values in IoT",
      title: "Islamic Smart Door (ISD)",
      tagline: "Smart access control that protects a space and supports daily worship.",
      body:
        "ISD is an ESP32-based smart door system by Mustafidh that brings NFC, Telegram remote access, Web PIN, Islamic voice command, Kemenag prayer schedules, and an 8-second watchdog timer into one compact product.",
      primary: "Contact for Collaboration",
      demo: "View Demo",
      secondary: "View LinkedIn",
      imageAlt:
        "Render of the Islamic Smart Door device with access panel, NFC symbol, worship reminder LCD, and cloud connection.",
      stats: [
        { value: "< Rp500K", label: "production estimate" },
        { value: "8 sec", label: "watchdog timer" },
        { value: "9 features", label: "access and worship" },
      ],
    },
    problem: {
      label: "Problem & Solution",
      title: "Smart access that goes beyond security.",
      problemTitle: "Problem",
      problem:
        "Access systems for homes, mosques, and pesantren usually focus on digital locks, while daily worship context such as prayer schedules and reminders remains outside the system.",
      solutionTitle: "ISD Solution",
      solution:
        "ISD uses ESP32 as the control center: unlocking through NFC, Telegram, Web PIN, and Google Assistant, while displaying prayer times and worship reminders on a 20x4 LCD.",
    },
    featuresTitle: "Core Features",
    featuresLead:
      "Clear enough for non-technical visitors, with enough technical depth for reviewers and collaborators.",
    features: [
      { title: "PN532 NFC", body: "Fast access with trusted NFC cards or tags." },
      { title: "Telegram Remote", body: "Remote unlock commands through a practical Telegram interface." },
      { title: "Web PIN", body: "Browser-based fallback access with a PIN code." },
      { title: "Islamic Voice Command", body: "DF2301QG module supports Islamic-context voice commands." },
      { title: "Prayer Schedule", body: "Prayer time sync via Kemenag API and NTP timekeeping." },
      { title: "LCD Reminders", body: "20x4 LCD displays worship prompts and device status." },
      { title: "Google Assistant", body: "SinricPro integration enables voice control in a smart home ecosystem." },
      { title: "WiFiManager", body: "Network setup without hardcoded WiFi credentials." },
      { title: "Watchdog Timer", body: "8-second automatic recovery helps keep the system reliable." },
    ],
    architecture: {
      label: "How It Works",
      title: "ESP32 as the core, sensors as inputs, cloud services as bridges.",
      body:
        "ISD keeps a clear boundary: this website is a showcase, while real device control remains in the firmware, Telegram bot, Web PIN, and cloud integrations.",
      nodes: [
        { title: "Access inputs", body: "NFC, Web PIN, Telegram, Google Assistant, and voice command." },
        { title: "ESP32 core", body: "Command validation, relay control, LCD, WiFiManager, NTP, and watchdog." },
        { title: "External services", body: "Kemenag API, Telegram Bot API, and SinricPro." },
        { title: "Room outputs", body: "Door lock, access status, worship reminders, and user feedback." },
      ],
    },
    gallery: {
      label: "Gallery / Demo",
      title: "Ready for device photos, exhibition shots, and demo video.",
      body:
        "The visual slots are prepared so real Sekolah Impian Exhibition photos or a YouTube embed can be added without changing the page structure.",
      deviceAlt: "ISD device render showing the smart door panel and control module.",
      exhibitionAlt: "Illustration of an Islamic Smart Door exhibition booth with visitors watching the demo.",
      items: [
        { title: "Device render", body: "Hero visual showing the product shape and access points." },
        { title: "Sekolah Impian Exhibition", body: "Space for public demo documentation." },
        { title: "Demo video", body: "Watch the short ISD demo directly through YouTube Shorts." },
      ],
    },
    technical: {
      label: "Technical Deep Dive",
      title: "Technical detail for reviewers, lecturers, and collaborators.",
      body:
        "This section is collapsible so general visitors are not overloaded, while technical readers still get the context they need.",
      groups: [
        {
          title: "Hardware Components",
          items: ["ESP32 as the main controller", "PN532 NFC module", "DF2301QG voice command module", "20x4 LCD", "Relay and door lock"],
        },
        {
          title: "Software Stack",
          items: ["ESP32 firmware", "Kemenag API for prayer times", "NTP sync", "Telegram Bot API", "SinricPro for Google Assistant"],
        },
        {
          title: "Reliability & Setup",
          items: ["WiFiManager for network onboarding", "8-second watchdog timer", "Web PIN access fallback", "Production cost under Rp 500,000"],
        },
      ],
    },
    recognition: {
      label: "Recognition",
      title: "Built as a flagship project and demonstrated publicly.",
      items: [
        { title: "Sekolah Impian Exhibition", body: "ISD was presented as a public demo showing the integration of IoT and Islamic values." },
        { title: "Portfolio-ready", body: "This website is prepared as an active link for LinkedIn, CVs, scholarships, internships, and institutional review." },
        { title: "Technical track record", body: "It can be connected to other work such as AgriSmart when relevant for portfolio context." },
      ],
    },
    about: {
      label: "About the Creator",
      title: "Mustafidh, a builder at the intersection of technology and Islamic values.",
      body:
        "Mustafidh developed ISD as a project manager and maker, focusing on IoT that is not only technically smart, but also useful for worship rhythms and Muslim community life.",
      points: ["IoT and embedded systems", "Educational products for pesantren and communities", "Technology as a tool for Islamic civilization"],
    },
    contact: {
      label: "Contact",
      title: "Interested in discussing, reviewing, or collaborating?",
      body:
        "Send a short message for collaboration, technical feedback, mentoring, or portfolio opportunities.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send via Email",
      linkedin: "View LinkedIn",
    },
  },
};
