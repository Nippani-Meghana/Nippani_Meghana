/* ===================================================================
   Main JS — Navigation, scroll reveals, project filters, neuron canvas
   =================================================================== */

(function () {
  'use strict';

  // -------- Navigation scroll shadow --------
  const nav = document.getElementById('main-nav');
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu on link click
  document.querySelectorAll('.mobile-link').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // -------- Smooth scroll for nav links --------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const navHeight = nav.offsetHeight;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // -------- Scroll Reveal --------
  const revealElements = document.querySelectorAll(
    '.section-label, .section-heading, .about-text, .about-sidebar, ' +
    '.timeline-item, .project-card, .skill-category, .writing-card, ' +
    '.contact-heading, .contact-sub, .contact-links, .writing-intro, ' +
    '.project-filters'
  );

  revealElements.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => observer.observe(el));

  // -------- Project Filters --------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach((card) => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
          // Re-trigger reveal animation
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px)';
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          });
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // -------- Project Card Click → GitHub --------
  projectCards.forEach((card) => {
    card.addEventListener('click', () => {
      const url = card.dataset.href;
      if (url) window.open(url, '_blank', 'noopener');
    });
  });

  // -------- Writing Card Click → Substack --------
  document.querySelectorAll('.writing-card[data-href]').forEach((card) => {
    card.addEventListener('click', () => {
      const url = card.dataset.href;
      if (url) window.open(url, '_blank', 'noopener');
    });
  });

  // -------- Neuron Canvas — Abstract dendritic sketch --------
  const canvas = document.getElementById('neuron-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let branches = [];

    function resize() {
      width = canvas.parentElement.offsetWidth * 0.55;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    }

    // Simple recursive branching structure (like a neuron's dendritic tree)
    function generateBranches() {
      branches = [];
      const startX = width * 0.4;
      const startY = height * 0.5;

      function branch(x, y, angle, length, depth, maxDepth) {
        if (depth > maxDepth || length < 4) return;

        const endX = x + Math.cos(angle) * length;
        const endY = y + Math.sin(angle) * length;

        branches.push({
          x1: x,
          y1: y,
          x2: endX,
          y2: endY,
          depth: depth,
          maxDepth: maxDepth,
        });

        // Branch into 2-3 sub-branches
        const numBranches = depth < 2 ? 3 : 2;
        const spread = 0.4 + Math.random() * 0.3;

        for (let i = 0; i < numBranches; i++) {
          const newAngle = angle - spread + (spread * 2 * i) / (numBranches - 1 || 1);
          const jitter = (Math.random() - 0.5) * 0.3;
          const shrink = 0.6 + Math.random() * 0.15;
          branch(endX, endY, newAngle + jitter, length * shrink, depth + 1, maxDepth);
        }
      }

      // Create several main dendrites radiating outward
      const numDendrites = 5;
      for (let i = 0; i < numDendrites; i++) {
        const angle = (Math.PI * 2 * i) / numDendrites + (Math.random() - 0.5) * 0.4;
        const len = 60 + Math.random() * 80;
        branch(startX, startY, angle, len, 0, 5);
      }

      // Draw soma (cell body)
      branches.push({
        soma: true,
        x: startX,
        y: startY,
        radius: 12,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Draw branches
      branches.forEach((b) => {
        if (b.soma) {
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#1a1a1a';
          ctx.fill();
          return;
        }

        const thickness = Math.max(0.5, 3 - b.depth * 0.5);
        ctx.beginPath();
        ctx.moveTo(b.x1, b.y1);
        ctx.lineTo(b.x2, b.y2);
        ctx.strokeStyle = '#1a1a1a';
        ctx.lineWidth = thickness;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Small synaptic boutons at terminal branches
        if (b.depth >= b.maxDepth - 1 && Math.random() > 0.5) {
          ctx.beginPath();
          ctx.arc(b.x2, b.y2, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = '#1a1a1a';
          ctx.fill();
        }
      });
    }

    function init() {
      resize();
      generateBranches();
      draw();
    }

    init();
    window.addEventListener('resize', () => {
      init();
    });
  }

  // -------- Active nav link highlighting on scroll --------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNav() {
    const scrollPos = window.scrollY + nav.offsetHeight + 100;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');

      navLinks.forEach((link) => {
        if (link.getAttribute('href') === `#${id}`) {
          if (scrollPos >= top && scrollPos < bottom) {
            link.style.color = 'var(--accent)';
          } else {
            link.style.color = '';
          }
        }
      });
    });
  }

  window.addEventListener('scroll', highlightNav);
  highlightNav();

  // -------- Interactive LIF Neuron --------
  const lifCanvas = document.getElementById('lif-canvas');
  if (lifCanvas) {
    const ctx = lifCanvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    // Sizing
    function resizeLif() {
      const rect = lifCanvas.getBoundingClientRect();
      lifCanvas.width = rect.width * dpr;
      lifCanvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resizeLif();
    window.addEventListener('resize', resizeLif);

    // LIF parameters
    const tau = 20;        // membrane time constant (ms)
    const vRest = -65;     // resting potential (mV)
    const vThresh = -50;   // spike threshold (mV)
    const vReset = -70;    // reset potential (mV)
    const vPeak = 20;      // spike peak for display
    const dt = 0.5;        // timestep (ms)
    const iBase = 0;       // baseline current
    const iInject = 25;    // injected current on click

    let v = vRest;
    let injecting = false;
    let spiking = false;
    let spikeTimer = 0;

    // Voltage history (scrolling trace)
    const maxPoints = 600;
    let history = new Array(maxPoints).fill(vRest);

    // Colors matching the palette
    const traceColor = '#c4956a';      // accent-light
    const threshColor = 'rgba(245, 240, 232, 0.25)';
    const gridColor = 'rgba(245, 240, 232, 0.06)';
    const textColor = 'rgba(245, 240, 232, 0.45)';
    const spikeGlow = 'rgba(196, 149, 106, 0.35)';

    // Mouse/touch events
    lifCanvas.addEventListener('mousedown', () => { injecting = true; });
    lifCanvas.addEventListener('mouseup', () => { injecting = false; });
    lifCanvas.addEventListener('mouseleave', () => { injecting = false; });
    lifCanvas.addEventListener('touchstart', (e) => { e.preventDefault(); injecting = true; }, { passive: false });
    lifCanvas.addEventListener('touchend', () => { injecting = false; });
    lifCanvas.addEventListener('touchcancel', () => { injecting = false; });

    // Fade the hint after first interaction
    const hint = document.querySelector('.lif-hint');
    let hintFaded = false;

    function stepNeuron() {
      const I = injecting ? iInject : iBase;

      if (!hintFaded && injecting && hint) {
        hint.style.opacity = '0';
        hintFaded = true;
      }

      if (spiking) {
        spikeTimer++;
        if (spikeTimer >= 3) {
          v = vReset;
          spiking = false;
          spikeTimer = 0;
        }
      } else {
        // LIF dynamics: tau * dv/dt = -(v - vRest) + I
        const dv = (-(v - vRest) + I) * (dt / tau);
        v += dv;

        // Add a tiny bit of noise for biological feel
        v += (Math.random() - 0.5) * 0.3;

        if (v >= vThresh) {
          v = vPeak;
          spiking = true;
          spikeTimer = 0;
        }
      }

      history.push(v);
      if (history.length > maxPoints) history.shift();
    }

    function drawLif() {
      const w = lifCanvas.getBoundingClientRect().width;
      const h = lifCanvas.getBoundingClientRect().height;

      ctx.clearRect(0, 0, w, h);

      // Voltage range for mapping
      const vMin = vReset - 5;
      const vMax = vPeak + 10;
      const pad = { top: 20, bottom: 30, left: 50, right: 15 };
      const plotW = w - pad.left - pad.right;
      const plotH = h - pad.top - pad.bottom;

      function yMap(voltage) {
        return pad.top + plotH * (1 - (voltage - vMin) / (vMax - vMin));
      }

      // Grid lines
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 0.5;
      [-70, -65, -50, 0, 20].forEach((val) => {
        const y = yMap(val);
        ctx.beginPath();
        ctx.moveTo(pad.left, y);
        ctx.lineTo(w - pad.right, y);
        ctx.stroke();
      });

      // Threshold line (dashed)
      ctx.strokeStyle = threshColor;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      const threshY = yMap(vThresh);
      ctx.beginPath();
      ctx.moveTo(pad.left, threshY);
      ctx.lineTo(w - pad.right, threshY);
      ctx.stroke();
      ctx.setLineDash([]);

      // Threshold label
      ctx.fillStyle = textColor;
      ctx.font = '11px Merriweather, serif';
      ctx.textAlign = 'left';
      ctx.fillText('threshold', pad.left + 6, threshY - 6);

      // Y-axis labels
      ctx.textAlign = 'right';
      ctx.font = '10px Merriweather, serif';
      ctx.fillText(`${vRest} mV`, pad.left - 6, yMap(vRest) + 4);
      ctx.fillText(`${vThresh} mV`, pad.left - 6, threshY + 4);

      // Draw voltage trace
      ctx.beginPath();
      ctx.strokeStyle = traceColor;
      ctx.lineWidth = 1.8;
      ctx.lineJoin = 'round';

      const step = plotW / maxPoints;
      for (let i = 0; i < history.length; i++) {
        const x = pad.left + i * step;
        const y = yMap(history[i]);
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Spike glow effect
      const lastV = history[history.length - 1];
      if (lastV > vThresh) {
        const glowX = pad.left + (history.length - 1) * step;
        const glowY = yMap(lastV);
        const grad = ctx.createRadialGradient(glowX, glowY, 0, glowX, glowY, 20);
        grad.addColorStop(0, spikeGlow);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(glowX - 20, glowY - 20, 40, 40);
      }

      // Current injection indicator
      if (injecting) {
        ctx.fillStyle = 'rgba(196, 149, 106, 0.15)';
        ctx.fillRect(pad.left, pad.top, plotW, plotH);
        ctx.fillStyle = textColor;
        ctx.font = '11px Merriweather, serif';
        ctx.textAlign = 'center';
        ctx.fillText('I = ' + iInject + ' nA', w / 2, h - 8);
      }
    }

    // Animation loop
    let lastTime = 0;
    const stepsPerFrame = 4; // speed of simulation

    function animate(time) {
      for (let i = 0; i < stepsPerFrame; i++) {
        stepNeuron();
      }
      drawLif();
      requestAnimationFrame(animate);
    }

    // Only run when visible (performance)
    const lifObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(animate);
        }
      });
    }, { threshold: 0.1 });

    lifObserver.observe(lifCanvas);
  }
})();
