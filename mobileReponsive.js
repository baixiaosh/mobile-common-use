! function() {
  function a() {
    var e = document.documentElement.clientWidth,
      h = document.querySelector('html'),
      b = document.querySelector('body'),
      w = b.dataset.designWidth,
      d = b.dataset.designDpr;
    h.dataset.dataDpr = window.devicePixelRatio;
    e = e ? e : 640;
    d = d ? d : 2;
    e = e > w ? w : e;
    var size = 100 / (w / d) * e;
    if (size< 100) {
    	size = 100
    }
    h.style.fontSize = size + 'px'; };
  a();
  window.addEventListener("resize", a) }()
