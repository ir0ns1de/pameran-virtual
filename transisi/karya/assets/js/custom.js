document.addEventListener("DOMContentLoaded", function () {

  fetch("./karya.json")
    .then(response => response.json())
    .then(data => {

      const wrapper = document.querySelector(".swiper-carousel .swiper-wrapper");

      if (!wrapper) {
        console.error("swiper-wrapper tidak ditemukan");
        return;
      }

      // HAPUS slide statis
      wrapper.innerHTML = "";

      data.forEach(item => {
        wrapper.insertAdjacentHTML("beforeend", `
          <div class="swiper-slide">
            <div class="swiper-slide__inner">
              <div class="slide-image swiper-lazy">
                <img src="${item.link_karya}" alt="${item.judul}">
              </div>
              <div class="swiper-slide__info">
                <div class="slide-title text-component">
                  <h1>${item.judul}</h1>
                  <p>${item.caption} ${item.description}</p>
                </div>
                <a class="btn btn--primary" rel="noreferrer" href="${item.link_detail}">
                  Take a Look
                </a>
              </div>
            </div>
          </div>
        `);
      });

      // Inisialisasi Swiper (TANPA pagination & navigation)
      new Swiper(".swiper-carousel", {
        loop: true,
        lazy: true
      });

    })
    .catch(err => console.error("Gagal load JSON:", err));

});
