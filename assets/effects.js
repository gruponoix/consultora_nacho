/* ============================================================
   AURUM — visual effects
   Canvas sparkles · lamp trigger · marquee & column cloning
   ============================================================ */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Canvas sparkles ---------- */
  function initSparkles(canvas, opts) {
    opts = opts || {};
    var ctx = canvas.getContext("2d");
    var DPR = Math.min(window.devicePixelRatio || 1, 2);
    var color = opts.color || "47,98,160";       // elegant blue (r,g,b)
    var density = opts.density || 0.00016;          // particles per px²
    var minR = opts.minSize || 0.4, maxR = opts.maxSize || 1.9;
    var parts = [], W = 0, H = 0, raf = null;

    function mk() {
      return {
        x: Math.random() * W, y: Math.random() * H,
        r: minR + Math.random() * (maxR - minR),
        a: Math.random() * Math.PI * 2,
        sp: 0.004 + Math.random() * 0.014,
        vy: -(0.015 + Math.random() * 0.05),
        vx: (Math.random() - 0.5) * 0.04
      };
    }
    function resize() {
      var r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      if (!W || !H) return;
      canvas.width = W * DPR; canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      var count = Math.max(24, Math.round(W * H * density));
      parts = [];
      for (var i = 0; i < count; i++) parts.push(mk());
    }
    function frame() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        if (!reduce) {
          p.a += p.sp; p.y += p.vy; p.x += p.vx;
          if (p.y < -3) { p.y = H + 3; p.x = Math.random() * W; }
          if (p.x < -3) p.x = W + 3; else if (p.x > W + 3) p.x = -3;
        }
        var op = 0.12 + (Math.sin(p.a) * 0.5 + 0.5) * 0.88;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + color + "," + op.toFixed(3) + ")";
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    }
    resize();
    frame();
    var rt;
    window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(resize, 180); });
  }

  var heroCanvas = document.getElementById("heroSparkles");
  if (heroCanvas) initSparkles(heroCanvas, { color: "47,98,160", density: 0.00020, maxSize: 2.0 });

  /* ---------- Lamp: light up when in view ---------- */
  var lamp = document.querySelector(".lamp");
  if (lamp) {
    if ("IntersectionObserver" in window && !reduce) {
      var lio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { lamp.classList.add("lit"); lio.unobserve(e.target); } });
      }, { threshold: 0.35 });
      lio.observe(lamp);
    } else {
      lamp.classList.add("lit");
    }
  }

  /* ---------- Seamless marquee: duplicate children once ---------- */
  document.querySelectorAll(".marquee__track").forEach(function (track) {
    var items = Array.prototype.slice.call(track.children);
    items.forEach(function (node) {
      var clone = node.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });
  });

  /* ---------- Testimonial columns: duplicate for seamless loop ---------- */
  document.querySelectorAll(".tcol__inner").forEach(function (col) {
    var items = Array.prototype.slice.call(col.children);
    items.forEach(function (node) {
      var clone = node.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      col.appendChild(clone);
    });
  });
})();
