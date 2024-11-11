const dropMenu = document.getElementById('dropMenu');
const clickMenu = document.getElementById('clickMenu');

if (dropMenu && clickMenu) {  // Kiểm tra sự tồn tại của cả dropMenu và clickMenu
    document.addEventListener('click', (e) => {
        if (clickMenu.contains(e.target)) {
            dropMenu.classList.toggle('hidden');
        } else if (!dropMenu.contains(e.target)) {
            dropMenu.classList.add('hidden');
        }
    });
}

var gridSwiper = new Swiper(".gridSwiper ", {
    slidesPerView: 3,
    grid: {
        rows: 3,
    },
    slidesPerView: 3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1280: { 
        slidesPerView: 3,
        grid: { rows: 3 },
      },
      0: { 
        slidesPerView: 3,
        grid: { rows: 2 },
      }
    },
    navigation: {
        nextEl: '.docterNext',
        prevEl: '.docterPrev',
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".singleSwiper", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.docterNext2',
        prevEl: '.docterPrev2',
    },
});


var threeSwiper = new Swiper(".threeSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.docterNext3',
        prevEl: '.docterPrev3',
    },
    breakpoints: {
        1280: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 1,
        },
    },
    
});


function initializeToggle(titleSelector) {
    const titles = document.querySelectorAll(titleSelector);
    titles.forEach(title => {
        title.addEventListener('click', () => {
            const container = title.closest('.toggle-container');
            const content = container.querySelector('.content');
            const iconPlus = container.querySelector('.fa-plus');
            const iconMinus = container.querySelector('.fa-minus');

            content.classList.toggle('hidden');

            iconPlus.classList.toggle('hidden', !content.classList.contains('hidden'));
            iconMinus.classList.toggle('hidden', content.classList.contains('hidden'));
        });
    });
}

initializeToggle('.title');