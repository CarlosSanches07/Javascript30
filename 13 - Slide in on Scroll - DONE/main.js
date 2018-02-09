function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const images = document.querySelectorAll('.slide-in');

function checkSlide (e) {
  images.forEach((image) => {
    const slideAt = (window.scrollY + window.innerHeight) - image.height / 2;
    const imageBottom = image.offsetTop + image.height;
    let isHalfShown = slideAt > image.offsetTop;
    let isNotScrolledPast = window.scrollY < imageBottom;
    console.log(isHalfShown);
    console.log(isNotScrolledPast);
    if(isHalfShown && isNotScrolledPast)
      image.classList.add('active');
    else
      image.classList.remove('active');
  })
}

window.addEventListener('scroll', debounce(checkSlide));