import Script from 'next/script'

export default function () {

    return <Script
        dangerouslySetInnerHTML={{
            __html: `
            var swiper = new Swiper(".mySwiper", {
              slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            navigation: {
              nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
            breakpoints: {
              1200: {
              slidesPerView: 4,
            slidesPerGroup: 4
            },
            1000: {
              slidesPerView: 3,
            slidesPerGroup: 3
            },
            700: {
              slidesPerView: 2,
            slidesPerGroup: 2
            },
          }
        });
            `
        }}
    />
}