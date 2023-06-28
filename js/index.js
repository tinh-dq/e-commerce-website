window.onload = function () {
  document.getElementById('btn-scroll-to-top').onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
};
