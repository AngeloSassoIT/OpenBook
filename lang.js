// OpenBook site: language auto-detect (5 langs) + toggle + memory.
(function () {
  var SUPPORTED = ['en','it','es','fr','de'];
  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) < 0) lang = 'en';
    var h = document.documentElement;
    SUPPORTED.forEach(function (l) { h.classList.remove('lang-' + l); });
    h.classList.add('lang-' + lang);
    h.setAttribute('lang', lang);
    try { localStorage.setItem('openbook-lang', lang); } catch (e) {}
    var btns = document.querySelectorAll('.lang-toggle button[data-set]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('active', btns[i].getAttribute('data-set') === lang);
    }
  }
  window.__openbookSetLang = setLang;
  document.addEventListener('DOMContentLoaded', function () {
    var cur = 'en';
    var cls = document.documentElement.className.match(/lang-(en|it|es|fr|de)/);
    if (cls) cur = cls[1];
    setLang(cur);
    var btns = document.querySelectorAll('.lang-toggle button[data-set]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () { setLang(this.getAttribute('data-set')); });
    }
  });
})();
