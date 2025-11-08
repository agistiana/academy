// js/blogDetail.js
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const article = blogData.find(b => b.id === id);
  const container = document.getElementById("blog-detail");

  if (!article) {
    container.innerHTML = `<p class="text-center text-gray-600 mt-10">Artikel tidak ditemukan.</p>`;
    return;
  }

  container.innerHTML = `
    <img src="../${article.image}" alt="${article.title}" 
         class="w-full h-80 object-cover rounded-2xl shadow-md mb-8 fade-seq fade-delay-1">

    <div class="fade-seq fade-delay-2">
      <h2 class="text-4xl font-bold text-indigo-800 mb-3">${article.title}</h2>
      <p class="text-sm text-gray-500 mb-10">
        📅 ${article.date} | <span class="text-blue-600 font-semibold">${article.category}</span>
      </p>
    </div>

    <div class="fade-seq fade-delay-3 prose prose-lg max-w-none text-gray-700 leading-relaxed">
      ${article.content}
    </div>

    <div class="text-center mt-12 fade-seq fade-delay-3">
      <a href="../index.html#blog" id="back-link" 
         class="inline-block text-indigo-700 font-semibold hover:underline">
         ← Kembali ke Daftar Blog
      </a>
    </div>
  `;

  // Event animasi keluar
  const backLink = document.getElementById("back-link");
  backLink.addEventListener("click", (e) => {
    e.preventDefault(); // jangan langsung redirect
    document.body.classList.add("fade-out");

    // tunggu animasi selesai baru pindah halaman
    setTimeout(() => {
      window.location.href = backLink.getAttribute("href");
    }, 600); // durasi sesuai CSS
  });
});
