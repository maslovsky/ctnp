document.addEventListener('DOMContentLoaded', () => {
  const glide = new Glide('.glide').mount();

  const containersToParallax = document.querySelectorAll('.section.pros, .section.price');

  window.addEventListener('scroll', () => {
    const offset = window.pageYOffset;

    containersToParallax.forEach(x => x.style['background-position-y'] = `-${-(offset - x.offsetTop) / 5}px`);
  });
});
