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
const images = document.querySelectorAll('.slide-in')
function addImage(e){
    images.forEach(image => {
        let slideInAt = window.scrollY +  window.innerHeight - image.height / 2
        let imageBottom = image.offsetTop + image.height;
        let halfshown = slideInAt > image.offsetTop
        let scrolledPast = window.scrollY > imageBottom
        if(halfshown && !scrolledPast)
            image.classList.add('active')
        else
            image.classList.remove('active')
    })
}

window.addEventListener('scroll',debounce(addImage))