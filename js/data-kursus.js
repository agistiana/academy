
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