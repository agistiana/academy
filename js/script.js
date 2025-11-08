
        // Inisialisasi AOS
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
      });

      // Data Kursus
      const courseData = {
        pemrograman: {
          title: "Kursus Pemrograman Dasar",
          description:
            "Pelajari fondasi logika pemrograman dengan bahasa yang mudah dipahami, cocok untuk pemula yang belum pernah coding sama sekali.",
          jenjang: {
            sd: {
              tujuan:
                "Siswa mampu membuat animasi dan game sederhana menggunakan platform visual block-based seperti Scratch.",
              materi: [
                "Pengenalan Algoritma & Logika",
                "Blok Logika (Events, Motion, Looks, Sound)",
                "Konsep Perulangan (Loops)",
                "Percabangan Sederhana (If/Then)",
              ],
              proyek: "Membuat Animasi Interaktif atau Game Kejar-kejaran.",
              durasi: "8x Pertemuan @ 90 Menit",
              biaya: "Rp 1.200.000",
            },
            smp: {
              tujuan:
                "Siswa mampu membuat aplikasi sederhana dan memahami konsep variabel, fungsi, serta struktur data dasar.",
              materi: [
                "Dasar-dasar Python/JavaScript",
                "Variabel, Tipe Data, dan Operator",
                "Struktur Kontrol (If/Else, For, While)",
                "Fungsi dan Parameter",
              ],
              proyek: "Membuat Kalkulator Sederhana atau Game Tebak Angka.",
              durasi: "10x Pertemuan @ 90 Menit",
              biaya: "Rp 1.500.000",
            },
            sma: {
              tujuan:
                "Siswa mampu membangun website statis sederhana menggunakan HTML & CSS dan memahami dasar-dasar web development.",
              materi: [
                "Struktur Dasar HTML5",
                "Styling dengan CSS3 (Selector, Box Model, Flexbox)",
                "Dasar-dasar JavaScript DOM Manipulation",
                "Hosting Website Sederhana",
              ],
              proyek: "Membuat Website Portofolio Pribadi.",
              durasi: "12x Pertemuan @ 120 Menit",
              biaya: "Rp 2.000.000",
            },
            umum: {
              tujuan:
                "Peserta mampu memahami konsep pemrograman berorientasi objek (OOP) dan membangun aplikasi backend sederhana.",
              materi: [
                "Konsep OOP (Class, Object, Inheritance)",
                "Dasar-dasar API dengan Python (Flask/FastAPI)",
                "Interaksi dengan Database (SQL Basics)",
                "Version Control dengan Git",
              ],
              proyek: "Membangun API sederhana untuk aplikasi To-Do List.",
              durasi: "12x Pertemuan @ 120 Menit",
              biaya: "Rp 2.500.000",
            },
          },
        },
        word: {
          title: "Kursus Microsoft Word",
          description:
            "Kuasai aplikasi pengolah kata paling populer untuk membuat dokumen yang rapi dan profesional untuk tugas sekolah, laporan, hingga surat resmi.",
          jenjang: {
            sd: {
              tujuan:
                "Siswa mampu mengetik cerita, mengatur format teks dasar (bold, italic, underline), dan menyisipkan gambar.",
              materi: [
                "Pengenalan Antarmuka Word",
                "Format Teks dan Paragraf",
                "Menyisipkan Gambar dan Bentuk",
                "Menyimpan dan Mencetak Dokumen",
              ],
              proyek: "Membuat Cerita Bergambar.",
              durasi: "4x Pertemuan @ 90 Menit",
              biaya: "Rp 500.000",
            },
            smp: {
              tujuan:
                "Siswa mampu membuat makalah dengan format yang benar, termasuk membuat daftar isi, header/footer, dan penomoran halaman.",
              materi: [
                "Penggunaan Styles",
                "Membuat Daftar Isi Otomatis",
                "Header, Footer, dan Page Number",
                "Menyisipkan Tabel dan Grafik",
              ],
              proyek: "Membuat Makalah Ilmiah Sederhana.",
              durasi: "6x Pertemuan @ 90 Menit",
              biaya: "Rp 750.000",
            },
            sma: {
              tujuan:
                "Siswa mampu menggunakan fitur-fitur canggih seperti Mail Merge, sitasi, dan daftar pustaka untuk tugas akhir atau laporan.",
              materi: [
                "Mail Merge untuk Surat Massal",
                "Manajemen Sitasi dan Daftar Pustaka",
                "Membuat Formulir",
                "Fitur Track Changes dan Comments",
              ],
              proyek:
                "Membuat Laporan Penelitian Lengkap dengan Daftar Pustaka.",
              durasi: "6x Pertemuan @ 90 Menit",
              biaya: "Rp 850.000",
            },
            umum: {
              tujuan:
                "Peserta mampu membuat dokumen bisnis profesional, template, dan mengotomatisasi tugas-tugas berulang.",
              materi: [
                "Membuat Template Dokumen Profesional",
                "Penggunaan Quick Parts dan Building Blocks",
                "Dasar-dasar Makro untuk Otomatisasi",
                "Proteksi Dokumen",
              ],
              proyek: "Membuat Template Proposal Bisnis atau Laporan Tahunan.",
              durasi: "8x Pertemuan @ 90 Menit",
              biaya: "Rp 1.200.000",
            },
          },
        },

        excel: {
          title: "Kursus Microsoft Excel",
          description:
            "Pelajari cara mengolah data, membuat laporan, dan visualisasi grafik dengan spreadsheet untuk analisis yang akurat dan efisien.",
          jenjang: {
            smp: {
              tujuan:
                "Siswa mampu menggunakan rumus dasar, membuat tabel, dan membuat grafik sederhana untuk tugas sekolah.",
              materi: [
                "Pengenalan Sel, Baris, Kolom",
                "Rumus Dasar (SUM, AVERAGE, MIN, MAX)",
                "Format Tabel dan Sel",
                "Membuat Grafik Batang dan Lingkaran",
              ],
              proyek: "Membuat Laporan Keuangan Kelas Sederhana.",
              durasi: "6x Pertemuan @ 90 Menit",
              biaya: "Rp 800.000",
            },
            sma: {
              tujuan:
                "Siswa mampu menggunakan fungsi logika (IF), VLOOKUP, dan membuat PivotTable untuk analisis data yang lebih kompleks.",
              materi: [
                "Fungsi Logika (IF, AND, OR)",
                "Fungsi Lookup (VLOOKUP, HLOOKUP)",
                "Sorting dan Filtering Data",
                "Pengenalan PivotTable",
              ],
              proyek: "Menganalisis Data Nilai Siswa atau Data Survei.",
              durasi: "8x Pertemuan @ 90 Menit",
              biaya: "Rp 1.000.000",
            },
            umum: {
              tujuan:
                "Peserta mampu mengotomatisasi laporan dengan PivotTable, Dashboard, dan pengenalan Power Query.",
              materi: [
                "PivotTable & PivotChart Lanjutan",
                "Membuat Dashboard Interaktif",
                "Validasi Data dan Conditional Formatting",
                "Pengenalan Power Query untuk ETL",
              ],
              proyek: "Membuat Dashboard Penjualan Interaktif.",
              durasi: "10x Pertemuan @ 120 Menit",
              biaya: "Rp 1.800.000",
            },
            sd: {
              tujuan:
                "Siswa mampu membuat tabel sederhana, melakukan penjumlahan dasar, dan mewarnai sel untuk data visual.",
              materi: [
                "Mengenal Tabel",
                "Penjumlahan Otomatis (AutoSum)",
                "Mewarnai Sel dan Mengubah Font",
                "Membuat Jadwal Pelajaran",
              ],
              proyek: "Membuat Jadwal Piket Kelas.",
              durasi: "4x Pertemuan @ 90 Menit",
              biaya: "Rp 500.000",
            },
          },
        },
        powerpoint: {
          title: "Kursus Microsoft PowerPoint",
          description:
            "Buat presentasi yang memukau dan profesional dengan menguasai desain slide, animasi, dan teknik penyampaian yang efektif.",
          jenjang: {
            sd: {
              tujuan:
                "Siswa mampu membuat presentasi sederhana dengan teks, gambar, dan transisi antar slide.",
              materi: [
                "Membuat Slide Baru",
                "Menambahkan Teks dan Gambar",
                "Memberi Warna Latar Belakang",
                "Transisi Slide Sederhana",
              ],
              proyek: "Presentasi tentang Hewan Peliharaan.",
              durasi: "4x Pertemuan @ 90 Menit",
              biaya: "Rp 500.000",
            },
            smp: {
              tujuan:
                "Siswa mampu menggunakan SmartArt, animasi objek, dan menyisipkan video untuk presentasi yang lebih dinamis.",
              materi: [
                "Desain Slide dengan Template",
                "Penggunaan SmartArt dan Chart",
                "Animasi Objek (Entrance, Exit)",
                "Menyisipkan Video dan Audio",
              ],
              proyek: "Presentasi Tugas Kelompok.",
              durasi: "6x Pertemuan @ 90 Menit",
              biaya: "Rp 750.000",
            },
            sma: {
              tujuan:
                "Siswa mampu mendesain presentasi yang profesional menggunakan Slide Master, hyperlink, dan teknik presentasi non-linear.",
              materi: [
                "Menggunakan Slide Master untuk Konsistensi",
                "Hyperlink dan Action Buttons",
                "Fitur Morph Transition",
                "Tips Desain Profesional (Layout, Warna, Font)",
              ],
              proyek: "Presentasi Sidang Karya Ilmiah atau Rencana Bisnis.",
              durasi: "6x Pertemuan @ 90 Menit",
              biaya: "Rp 850.000",
            },
            umum: {
              tujuan:
                "Peserta mampu membuat template presentasi perusahaan dan menggunakan fitur canggih untuk presentasi bisnis yang persuasif.",
              materi: [
                "Desain Template Korporat",
                "Integrasi dengan Excel Chart",
                "Fitur Presenter View",
                "Merekam Presentasi",
              ],
              proyek:
                "Membuat Deck Presentasi Investor atau Peluncuran Produk.",
              durasi: "8x Pertemuan @ 90 Menit",
              biaya: "Rp 1.200.000",
            },
          },
        },
        canva: {
          title: "Kursus Desain Grafis dengan Canva",
          description:
            "Pelajari cara membuat desain visual yang menarik untuk media sosial, presentasi, dan materi promosi dengan mudah tanpa perlu skill desain profesional.",
          jenjang: {
            smp: {
              tujuan:
                "Siswa mampu membuat desain poster digital dan konten sederhana untuk media sosial sekolah.",
              materi: [
                "Pengenalan Antarmuka Canva",
                "Menggunakan Template",
                "Menambahkan Teks, Elemen, dan Foto",
                "Prinsip Dasar Layout",
              ],
              proyek: "Membuat Poster Acara 17 Agustus di Sekolah.",
              durasi: "6x Pertemuan @ 90 Menit",
              biaya: "Rp 800.000",
            },
            sma: {
              tujuan:
                "Siswa mampu membuat desain untuk kebutuhan organisasi/OSIS, seperti feed Instagram, proposal, dan banner acara.",
              materi: [
                "Membuat Brand Kit Sederhana",
                "Desain Konten Carousel Instagram",
                "Membuat Video Pendek dan GIF",
                "Tips Tipografi",
              ],
              proyek: "Merancang Konten Media Sosial untuk Acara Sekolah.",
              durasi: "8x Pertemuan @ 90 Menit",
              biaya: "Rp 1.000.000",
            },
            umum: {
              tujuan:
                "Peserta mampu membuat materi marketing untuk bisnis (UMKM), presentasi profesional, dan mengelola konten brand secara konsisten.",
              materi: [
                "Membuat Brand Kit Profesional",
                "Desain Materi Marketing (Brosur, Flyer)",
                "Canva Docs & Websites",
                "Fitur AI di Canva",
              ],
              proyek:
                "Membuat satu set materi branding untuk sebuah produk fiktif.",
              durasi: "8x Pertemuan @ 120 Menit",
              biaya: "Rp 1.500.000",
            },
            sd: {
              tujuan:
                "Siswa mampu membuat kartu ucapan digital dan poster sederhana menggunakan template dan elemen yang ada.",
              materi: [
                "Mengenal Template Canva",
                "Mengganti Teks dan Warna",
                "Menambahkan Stiker dan Elemen Lucu",
                "Menyimpan Hasil Desain",
              ],
              proyek: "Membuat Kartu Ucapan Ulang Tahun Digital.",
              durasi: "4x Pertemuan @ 90 Menit",
              biaya: "Rp 500.000",
            },
          },
        },
      };

      
      
      const sections = document.querySelectorAll(".section");
      const navLinks = document.querySelectorAll("nav a, footer a");
      const dropdownBtn = document.getElementById("dropdown-button");
      const dropdownMenu = document.getElementById("dropdown-menu");

      // Toggle dropdown saat tombol diklik
      dropdownBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle("hidden");

        // animasi muncul
        setTimeout(() => {
          dropdownMenu.classList.toggle("opacity-100");
          dropdownMenu.classList.toggle("scale-y-100");
        }, 10);
      });

      // Tutup dropdown kalau klik di luar
      window.addEventListener("click", (e) => {
        if (!dropdownMenu.classList.contains("hidden")) {
          dropdownMenu.classList.add("hidden");
          dropdownMenu.classList.remove("opacity-100", "scale-y-100");
        }
      });

      function navigate() {
        let hash = window.location.hash || "#home";

        // Handle program pages
        if (hash.startsWith("#program-")) {
          const courseId = hash.substring(9);
          if (courseData[courseId]) {
            setupProgramPage(courseId);
            showSection("program-template");
          } else {
            showSection("home");
          }
        } else if (hash.startsWith("#form")) {
          setupFormPage(hash);
          showSection("form");
        } else {
          showSection(hash.substring(1));
        }
        window.scrollTo(0, 0);
      }

      function showSection(id) {
        sections.forEach((section) => {
          if (section.id === id) {
            section.classList.add("active");
          } else {
            section.classList.remove("active");
          }
        });
      }

      navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          // Close mobile menu on click
          document.getElementById("mobile-menu").classList.add("hidden");
        });
      });

      window.addEventListener("hashchange", navigate);
      document.addEventListener("DOMContentLoaded", navigate);

      // Mobile Menu Toggle
      const mobileMenuButton = document.getElementById("mobile-menu-button");
      const mobileMenu = document.getElementById("mobile-menu");
      mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      // Program Page Logic
      function setupProgramPage(courseId) {
        const course = courseData[courseId];
        const programSection = document.getElementById("program-template");

        programSection.querySelector(".program-title").textContent =
          course.title;
        programSection.querySelector(".program-description").textContent =
          course.description;

        const tabsContainer = programSection.querySelector(".program-tabs");
        tabsContainer.innerHTML = ""; // Clear previous tabs

        // Dynamically create tabs based on available jenjang
        Object.keys(course.jenjang).forEach((jenjangKey) => {
          const button = document.createElement("button");
          button.dataset.jenjang = jenjangKey;
          button.className =
            "tab-btn border-b-4 pb-2 px-2 md:px-4 font-semibold transition-colors text-gray-500 border-transparent hover:border-sky-300";
          button.textContent = jenjangKey.toUpperCase();
          tabsContainer.appendChild(button);
        });

        const tabs = programSection.querySelectorAll(".tab-btn");
        tabs.forEach((tab) => {
          tab.addEventListener("click", () => {
            const jenjang = tab.dataset.jenjang;
            updateProgramContent(courseId, jenjang);
            tabs.forEach((t) =>
              t.classList.remove("tab-active", "text-sky-600", "border-sky-600")
            );
            tab.classList.add("tab-active");
          });
        });

        // Activate the first tab by default
        const firstJenjang = Object.keys(course.jenjang)[0];
        if (firstJenjang) {
          updateProgramContent(courseId, firstJenjang);
          const firstTab = tabsContainer.querySelector(
            `[data-jenjang="${firstJenjang}"]`
          );
          if (firstTab) firstTab.classList.add("tab-active");
        }
      }

      function updateProgramContent(courseId, jenjang) {
        const course = courseData[courseId];
        const data = course.jenjang[jenjang];
        const contentContainer = document
          .getElementById("program-template")
          .querySelector(".program-content");

        const materiList = data.materi
          .map(
            (item) =>
              `<li class="flex items-start"><span class="text-sky-500 mr-2 mt-1">&#10003;</span>${item}</li>`
          )
          .join("");

        contentContainer.innerHTML = `
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 class="text-xl font-semibold mb-3 text-slate-800">🎯 Tujuan Pembelajaran</h4>
                        <p class="text-gray-600">${data.tujuan}</p>
                        
                        <h4 class="text-xl font-semibold mb-3 mt-6 text-slate-800">📚 Materi yang Akan Dipelajari</h4>
                        <ul class="space-y-2 text-gray-600">${materiList}</ul>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h4 class="text-xl font-semibold mb-3 text-slate-800">🏆 Contoh Proyek Akhir</h4>
                        <p class="text-gray-600 mb-6">${data.proyek}</p>
                        
                        <div class="space-y-3 text-gray-700">
                            <p><strong>Durasi:</strong> ${data.durasi}</p>
                            <p><strong>Biaya:</strong> <span class="text-2xl font-bold text-sky-600">${
                              data.biaya
                            }</span></p>
                        </div>
                        
                        <a href="#form?program=${encodeURIComponent(
                          course.title
                        )}&jenjang=${jenjang.toUpperCase()}" class="mt-6 w-full block text-center bg-sky-600 text-white px-6 py-3 rounded-full hover:bg-sky-700 transition-colors font-semibold">Daftar Sekarang (Jenjang ${jenjang.toUpperCase()})</a>
                    </div>
                </div>
            `;
      }

      // Form Page Logic
      function setupFormPage(hash) {
        const params = new URLSearchParams(hash.split("?")[1]);
        const program = params.get("program");
        const jenjang = params.get("jenjang");
        const subtitle = document.getElementById("form-subtitle");

        if (program && jenjang) {
          subtitle.textContent = `Anda akan mendaftar untuk program: ${program} - Jenjang ${jenjang}.`;
          // Pre-fill form if needed
          const jenjangSelect = document.getElementById("jenjang-sekolah");
          for (let i = 0; i < jenjangSelect.options.length; i++) {
            if (
              jenjangSelect.options[i].text.toLowerCase() ===
              jenjang.toLowerCase()
            ) {
              jenjangSelect.selectedIndex = i;
              break;
            }
          }
        } else {
          subtitle.textContent = `Pilih program dan jenjang Anda untuk memulai.`;
        }
      }

      const registrationForm = document.getElementById("registration-form");
      registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const nama = document.getElementById("nama").value;
        const jenjangSekolah = document.getElementById("jenjang-sekolah").value;
        const wali = document.getElementById("wali").value;
        const whatsapp = document.getElementById("whatsapp").value;
        const email = document.getElementById("email").value;

        const params = new URLSearchParams(window.location.hash.split("?")[1]);
        const program = params.get("program") || "Belum Dipilih";
        const jenjangKursus = params.get("jenjang") || "Belum Dipilih";

        const message = `Halo RZF Academy, saya ingin mendaftar kursus.
---
*Program:* ${program}
*Jenjang Kursus:* ${jenjangKursus}
---
*Nama Siswa:* ${nama}
*Jenjang Sekolah:* ${jenjangSekolah}
*Nama Wali:* ${wali}
*No. WhatsApp:* ${whatsapp}
*Email:* ${email}
---
Mohon informasi selanjutnya untuk proses pembayaran. Terima kasih.`;

        const whatsappURL = `https://wa.me/6283166819166?text=${encodeURIComponent(
          message
        )}`;

        document.getElementById("form-success").classList.remove("hidden");

        // Open WhatsApp in a new tab
        window.open(whatsappURL, "_blank");
      });
    
  const words = ["SD ", "SMP ", "SMA ", "hingga Umum."];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;

  function typeEffect() {
    currentWord = words[i];
    const display = document.getElementById("dynamic-text");

    if (isDeleting) {
      display.textContent = currentWord.substring(0, j--);
    } else {
      display.textContent = currentWord.substring(0, j++);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && j === currentWord.length) {
      speed = 1500; // jeda sebelum hapus
      isDeleting = true;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      speed = 300;
    }

    setTimeout(typeEffect, speed);
  }

  document.addEventListener("DOMContentLoaded", typeEffect);
