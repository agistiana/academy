
        // Inisialisasi AOS
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
      });
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
      // Refresh AOS setelah konten program dimuat
      setTimeout(refreshAOS, 600);
    } else {
      showSection("home");
    }
  } else if (hash.startsWith("#form")) {
    setupFormPage(hash);
    showSection("form");
    // Refresh AOS setelah form dimua
    setTimeout(refreshAOS, 600);
  } else {
    showSection(hash.substring(1));
    // Refresh AOS setelah section biasa dimuat
    setTimeout(refreshAOS, 600);
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

  programSection.querySelector(".program-title").textContent = course.title;
  programSection.querySelector(".program-description").textContent = course.description;

  const tabsContainer = programSection.querySelector(".program-tabs");
  tabsContainer.innerHTML = ""; 

  Object.keys(course.jenjang).forEach((jenjangKey) => {
    const button = document.createElement("button");
    button.dataset.jenjang = jenjangKey;
    button.className = "tab-btn border-b-4 pb-2 px-2 md:px-4 font-semibold transition-colors text-gray-500 border-transparent hover:border-sky-300";
    button.textContent = jenjangKey.toUpperCase();
    button.setAttribute('data-aos', 'zoom-in');
    button.setAttribute('data-aos-delay', Object.keys(course.jenjang).indexOf(jenjangKey) * 100);
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
      // Refresh AOS setelah konten tab berubah
      setTimeout(refreshAOS, 300);
    });
  });

  const firstJenjang = Object.keys(course.jenjang)[0];
  if (firstJenjang) {
    updateProgramContent(courseId, firstJenjang);
    const firstTab = tabsContainer.querySelector(`[data-jenjang="${firstJenjang}"]`);
    if (firstTab) firstTab.classList.add("tab-active");
  }
  
  // Refresh AOS setelah program page selesai setup
  setTimeout(refreshAOS, 800);
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
                        <h4 class="text-xl font-semibold mb-3 mt-6 text-slate-800"><i class="fa-solid fa-trophy"></i> Tujuan Pembelajaran</h4>
                        <p class="text-gray-600">${data.tujuan}</p>
                        
                        <h4 class="text-xl font-semibold mb-3 mt-6 text-slate-800"><i class="fa-solid fa-book-open"></i> Materi yang Akan Dipelajari</h4>
                        <ul class="space-y-2 text-gray-600">${materiList}</ul>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-lg">
                        <h4 class="text-xl font-semibold mb-3 text-slate-800">Contoh Proyek Akhir</h4>
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

      // cta Logic

       const faqs = document.querySelectorAll('.faq-item');
    faqs.forEach(item => {
      const button = item.querySelector('button');
      const content = item.querySelector('.faq-content');
      const icon = item.querySelector('svg');
      button.addEventListener('click', () => {
        const isOpen = !content.classList.contains('hidden');
        document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.faq-item svg').forEach(i => i.classList.remove('rotate-180'));
        if (!isOpen) {
          content.classList.remove('hidden');
          icon.classList.add('rotate-180');
        }
      });
    });

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

        const whatsappURL = `https://wa.me/6285248503788?text=${encodeURIComponent(
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
      speed = 1500;
      isDeleting = true;
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      speed = 300;
    }

    setTimeout(typeEffect, speed);
  }

  document.addEventListener("DOMContentLoaded", typeEffect);

let aosInitialized = false;

function initAOS() {
  if (typeof AOS !== 'undefined' && !aosInitialized) {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      delay: 100,
      easing: 'ease-in-out',
      mirror: false,
      anchorPlacement: 'top-bottom'
    });
    aosInitialized = true;
    console.log('AOS initialized');
  }
}

function refreshAOS() {
  if (typeof AOS !== 'undefined') {
    setTimeout(() => {
      AOS.refresh();
      console.log('AOS refreshed');
    }, 300);
  }
}


document.addEventListener('DOMContentLoaded', function() {
  initAOS();
  
  // Refresh AOS ketika section berubah
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        if (mutation.target.classList.contains('active')) {
          setTimeout(() => {
            refreshAOS();
          }, 500);
        }
      }
    });
  });
  
  // Observe semua sections
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section, {
      attributes: true,
      attributeFilter: ['class']
    });
  });
});