/* ============================================================
   AURUM HOTEL CONSULTING — Interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Header scroll state ---------- */
  var header = document.querySelector(".header");
  function onScroll() {
    if (window.scrollY > 30) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile drawer ---------- */
  var drawer = document.getElementById("drawer");
  var menuBtn = document.getElementById("menuBtn");
  var closeBtn = document.getElementById("drawerClose");
  function openDrawer() { drawer.classList.add("open"); document.body.style.overflow = "hidden"; }
  function closeDrawer() { drawer.classList.remove("open"); document.body.style.overflow = ""; }
  if (menuBtn) menuBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeDrawer); });

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Animated counters ---------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-target"));
    var prefix = el.getAttribute("data-prefix") || "";
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1700, start = null;
    function ease(t) { return 1 - Math.pow(1 - t, 3); }
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var val = Math.round(target * ease(p));
      el.textContent = prefix + val + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  var counters = document.querySelectorAll("[data-target]");
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---------- FAQ accordion ---------- */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      faqItems.forEach(function (other) {
        other.classList.remove("open");
        other.querySelector(".faq-a").style.height = "0px";
        other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        a.style.height = a.firstElementChild.offsetHeight + "px";
        q.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- Cases carousel ---------- */
  var track = document.getElementById("caseTrack");
  if (track) {
    var slides = track.children.length;
    var idx = 0;
    var dotsWrap = document.getElementById("caseDots");
    var prev = document.getElementById("casePrev");
    var next = document.getElementById("caseNext");
    var dots = [];
    for (var i = 0; i < slides; i++) {
      (function (n) {
        var d = document.createElement("button");
        d.className = "case-dot" + (n === 0 ? " active" : "");
        d.setAttribute("aria-label", "Ver caso " + (n + 1));
        d.addEventListener("click", function () { go(n); });
        dotsWrap.appendChild(d);
        dots.push(d);
      })(i);
    }
    function go(n) {
      idx = (n + slides) % slides;
      track.style.transform = "translateX(-" + (idx * 100) + "%)";
      dots.forEach(function (d, k) { d.classList.toggle("active", k === idx); });
    }
    if (prev) prev.addEventListener("click", function () { go(idx - 1); });
    if (next) next.addEventListener("click", function () { go(idx + 1); });
    var autoplay = setInterval(function () { go(idx + 1); }, 7000);
    track.parentElement.addEventListener("mouseenter", function () { clearInterval(autoplay); });
  }

  /* ---------- Form validation ---------- */
  var form = document.getElementById("diagForm");
  if (form) {
    var success = document.getElementById("formSuccess");
    function setErr(field, on) { field.classList.toggle("invalid", on); }
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var ok = true;
      var name = form.querySelector('[name="name"]');
      var hotel = form.querySelector('[name="hotel"]');
      var email = form.querySelector('[name="email"]');
      var web = form.querySelector('[name="web"]');

      var nf = name.closest(".field"), hf = hotel.closest(".field"),
          ef = email.closest(".field"), wf = web.closest(".field");

      if (name.value.trim().length < 2) { setErr(nf, true); ok = false; } else setErr(nf, false);
      if (hotel.value.trim().length < 2) { setErr(hf, true); ok = false; } else setErr(hf, false);
      var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(email.value.trim())) { setErr(ef, true); ok = false; } else setErr(ef, false);
      // website optional but if present do a light check
      if (web.value.trim() && !/\./.test(web.value.trim())) { setErr(wf, true); ok = false; } else setErr(wf, false);

      if (!ok) {
        var firstErr = form.querySelector(".field.invalid input");
        if (firstErr) firstErr.focus();
        return;
      }
      form.style.display = "none";
      success.classList.add("show");
    });
    // clear error on input
    form.querySelectorAll("input").forEach(function (inp) {
      inp.addEventListener("input", function () { inp.closest(".field").classList.remove("invalid"); });
    });
  }

  /* ---------- Active nav highlight + year ---------- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
