function slider({wrapper, sliderBody, prevBtn, nextBtn, field, slide, totalCounter, currentCounter}) {

    const sliderWrapper = document.querySelector(wrapper),
          slider = document.querySelector(sliderBody),
          prev = document.querySelector(prevBtn),
          next = document.querySelector(nextBtn),
          sliderField = sliderWrapper.querySelector(field),
          slides = sliderWrapper.querySelectorAll(slide),
          currSlide = document.querySelector(currentCounter),
          totalSlide = document.querySelector(totalCounter),
          width = window.getComputedStyle(sliderWrapper).width;

    let slideIndex = 1,
        offset = 0;

        if(slides.length < 10) {
            totalSlide.textContent = `/0${slides.length}`;
        } else {
            totalSlide.textContent = `/${slides.length}`;
        }
    
    sliderField.style.width = 100 * slides.length + '%';
    sliderField.style.display = 'flex';
    sliderField.style.transition = '0.6s all';
    sliderWrapper.style.overflow = 'hidden';
    slides.forEach(slide => slide.style.width = width);
    slider.style.position = 'relative';

    function deleteNotDigits (str) {
        return +str.replace(/\D/gi, '');
    }

    const indicator = document.createElement('ol'),
          dots = [];
    indicator.classList.add('carousel-indicators');
    slider.append(indicator);

    for (let i = 0; i < slides.length; i ++) {
        let dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-to', i + 1);
        
        if (i == 0) {
            dot.style.opacity = 1;
        }
        
        indicator.append(dot);
        dots.push(dot);
    }

    function slideSwitch (target) {
        sliderField.style.transform = `translateX(-${offset}px)`;

        if (target === prev) {
            if (slideIndex == 1) {
                slideIndex = slides.length;
            } else {
                slideIndex--;
            }
        }
        if (target === next) {
            if (slideIndex == slides.length) {
                slideIndex = 1;
            } else {
                slideIndex++;
            }
        }

        if (slides.length < 10) {
            currSlide.textContent = `0${slideIndex}`;
        } else {
            currSlide.textContent = slideIndex;
        }

        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    next.addEventListener('click', ()=> {

        if (offset == deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        slideSwitch(next);
    });

    prev.addEventListener('click', ()=> {

        if (offset == 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        slideSwitch(prev);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e)=> {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;

            offset = deleteNotDigits(width) * (slideTo - 1);

            slideSwitch();
        });
    });
}

export default slider;