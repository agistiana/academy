// js/blogList.js
document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blog-list");

  blogData.forEach((article, index) => {
    const blogCard = document.createElement("article");
    blogCard.className = "bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden";
    blogCard.setAttribute('data-aos', 'fade-up');
    blogCard.setAttribute('data-aos-delay', (index % 3) * 100);
    
    blogCard.innerHTML = `
      <img src="${article.image}" alt="${article.title}"
           class="w-full h-48 object-cover">
      <div class="p-6 text-left">
        <span class="text-sm text-blue-600 font-semibold uppercase">${article.category}</span>
        <h3 class="text-xl font-bold text-gray-800 mt-2 mb-2">${article.title}</h3>
        <span class="text-sm text-gray-500 block mb-3">📅 ${article.date}</span>
        <p class="text-gray-700 leading-relaxed mb-4">${article.summary}</p>
        <a href="blog/detail.html?id=${article.id}" 
           class="inline-block text-blue-700 font-semibold hover:underline">Baca Selengkapnya →</a>
      </div>
    `;
    blogContainer.appendChild(blogCard);
  });
  
  // Refresh AOS setelah blog list selesai dimuat
  setTimeout(() => {
    if (window.AOSUtils && window.AOSUtils.refresh) {
      window.AOSUtils.refresh();
    }
  }, 500);
});