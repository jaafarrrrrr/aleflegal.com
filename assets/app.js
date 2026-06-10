document.addEventListener('DOMContentLoaded', function () {

      // --- Header scroll behavior ---
      var header = document.querySelector('.header');
      var heroSection = document.getElementById('hero');

      function onScroll() {
        if (window.scrollY > 60) {
          header.classList.add('scrolled');
        } else if (header.dataset.navForced !== 'true') {
          header.classList.remove('scrolled');
        }
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      // --- Mobile menu toggle ---
      var toggle = document.querySelector('.header__toggle');
      var mobileNav = document.getElementById('mobileNav');

      toggle.addEventListener('click', function () {
        var isOpen = mobileNav.classList.toggle('open');
        toggle.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isOpen);
        // Lock body scroll when mobile nav is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
        // Force scrolled header style when nav is open on hero
        if (isOpen && window.scrollY <= 60) {
          header.classList.add('scrolled');
          header.dataset.navForced = 'true';
        }
        if (!isOpen && header.dataset.navForced === 'true') {
          header.dataset.navForced = '';
          if (window.scrollY <= 60) {
            header.classList.remove('scrolled');
          }
        }
      });

      // Close mobile nav on link click
      mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileNav.classList.remove('open');
          toggle.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
          if (header.dataset.navForced === 'true') {
            header.dataset.navForced = '';
            if (window.scrollY <= 60) {
              header.classList.remove('scrolled');
            }
          }
        });
      });

      // --- Header dropdown (Resources) ---
      document.querySelectorAll('.nav-item--dropdown').forEach(function (item) {
        var trigger = item.querySelector('button');
        if (!trigger) return;
        trigger.addEventListener('click', function (e) {
          e.stopPropagation();
          var isOpen = item.classList.toggle('open');
          trigger.setAttribute('aria-expanded', isOpen);
        });
      });
      document.addEventListener('click', function () {
        document.querySelectorAll('.nav-item--dropdown.open').forEach(function (item) {
          item.classList.remove('open');
          var t = item.querySelector('button');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
      });

      // --- Pricing tabs (Legal / Regulatory) ---
      var pTabs = document.querySelectorAll('.pricing__tab');
      var pPanels = document.querySelectorAll('.pricing__panel');
      pTabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          var target = tab.getAttribute('data-tab');
          pTabs.forEach(function (t) {
            var active = t === tab;
            t.classList.toggle('is-active', active);
            t.setAttribute('aria-selected', active);
          });
          pPanels.forEach(function (p) {
            p.classList.toggle('is-active', p.getAttribute('data-panel') === target);
          });
          if (window.lucide) lucide.createIcons();
        });
      });

      // --- Smooth scroll for anchor links ---
      document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
          var target = document.querySelector(this.getAttribute('href'));
          if (target) {
            e.preventDefault();
            var offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
            var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: top, behavior: 'smooth' });
          }
        });
      });

      // --- Intersection Observer for scroll animations ---
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

      document.querySelectorAll('.animate-in').forEach(function (el) {
        observer.observe(el);
      });

      // --- Hero entrance animation (staggered reveal on load) ---
      (function () {
        var hero = document.getElementById('hero');
        if (!hero) return;
        var words = hero.querySelectorAll('.hero__word');
        var rest = [hero.querySelector('.hero__sub'), hero.querySelector('.hero__actions'), hero.querySelector('.hero__reassure')].filter(Boolean);
        var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        function showAll() {
          words.forEach(function (w) { w.style.opacity = 1; w.style.transform = 'none'; });
          rest.forEach(function (r) { r.style.opacity = 1; r.style.transform = 'none'; });
        }
        if (reduce || typeof gsap === 'undefined') { showAll(); return; }
        gsap.set(words, { opacity: 0, y: 46 });
        gsap.set(rest, { opacity: 0, y: 16 });
        gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.15 })
          .to(words, { opacity: 1, y: 0, duration: 0.7, stagger: 0.075 })
          .to(rest, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 }, '-=0.3');
      })();

      // --- Animated stat counters ---
      var countObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          countObserver.unobserve(el);
          var target = parseFloat(el.getAttribute('data-count-to'));
          if (isNaN(target)) return;
          var prefix = el.getAttribute('data-prefix') || '';
          var suffix = el.getAttribute('data-suffix') || '';
          var duration = 1400, startTime = null;
          function tick(now) {
            if (startTime === null) startTime = now;
            var p = Math.min((now - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            el.textContent = prefix + Math.round(target * eased) + suffix;
            if (p < 1) requestAnimationFrame(tick);
            else el.textContent = prefix + target + suffix;
          }
          requestAnimationFrame(tick);
        });
      }, { threshold: 0.45 });
      document.querySelectorAll('[data-count-to]').forEach(function (el) {
        // reset to zero-state at load (off-screen) so the count-up starts clean
        el.textContent = (el.getAttribute('data-prefix') || '') + '0' + (el.getAttribute('data-suffix') || '');
        countObserver.observe(el);
      });

      // --- Usage bar animation on scroll ---
      var barObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var bars = entry.target.querySelectorAll('.usage-bar__fill');
            bars.forEach(function (bar) {
              var w = bar.style.width;
              bar.style.width = '0%';
              requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                  bar.style.width = w;
                });
              });
            });
            barObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      document.querySelectorAll('.pricing__scenario').forEach(function (el) {
        barObserver.observe(el);
      });

      // --- Initialize Lucide icons ---
      if (window.lucide) {
        lucide.createIcons();
      }

      // --- GSAP Scroll-Driven Reel ---
      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && window.innerWidth > 768) {
        gsap.registerPlugin(ScrollTrigger);

        var reelTrack = document.querySelector('.reel__track');
        var reelSection = document.querySelector('.reel');
        var reelSticky = document.querySelector('.reel__sticky');
        var panels = document.querySelectorAll('.reel__panel');
        var dots = document.querySelectorAll('.reel__dot');

        if (reelTrack && panels.length) {
          var totalScroll = (panels.length - 1) * panels[0].offsetWidth;

          // Set section height dynamically to ensure pin holds through all panels
          reelSection.style.height = (totalScroll + window.innerHeight * 1.6) + 'px';

          // Track which approval groups have already been auto-selected
          var approvalAutoSelected = {};

          // Priority-based ordering for reveal sequence
          function getRevealPriority(idx) {
            if (idx === 'badge' || idx === 'badge-lawyer') return 90;
            if (idx === 'stamp') return 80;
            if (idx === 'lawyer') return 70;
            if (idx.indexOf('approve') === 0) return 50 + parseInt(idx.split('-')[1] || 0);
            if (idx.indexOf('react') === 0) return 50 + parseInt(idx.split('-')[1] || 0);
            if (idx.indexOf('comment') === 0) return 30 + parseInt(idx.split('-')[1] || 0);
            return 10 + parseInt(idx);
          }

          // Precompute thresholds: distribute each panel's elements evenly
          // Panel 2 (idx 1) uses tighter range so all animations finish before fade
          panels.forEach(function(panel, panelIdx) {
            var items = Array.from(panel.querySelectorAll('[data-reel-reveal]'));
            items.sort(function(a, b) {
              return getRevealPriority(a.getAttribute('data-reel-reveal')) - getRevealPriority(b.getAttribute('data-reel-reveal'));
            });
            var n = items.length;
            var maxT = (panelIdx === 1) ? 0.30 : 0.85;
            items.forEach(function(el, i) {
              el._revealThreshold = 0.02 + (i / Math.max(n - 1, 1)) * (maxT - 0.02);
            });
          });

          // Helper: reveal elements inside a panel based on scroll progress within that panel
          function revealPanelElements(panel, panelProgress) {
            var items = panel.querySelectorAll('[data-reel-reveal]');
            items.forEach(function(el) {
              if (panelProgress >= el._revealThreshold) {
                if (!el.classList.contains('revealed')) {
                  el.classList.add('revealed');

                  var idx = el.getAttribute('data-reel-reveal');
                  // Auto-select approval buttons after reveal
                  if (idx.indexOf('approve') === 0 && !approvalAutoSelected[idx]) {
                    approvalAutoSelected[idx] = true;
                    var btns = el.querySelectorAll('.approval-btn');
                    var selectIdx = (idx === 'approve-0') ? 0 : 1;
                    setTimeout(function() {
                      btns.forEach(function(btn, i) {
                        if (i === selectIdx) btn.classList.add('auto-selected');
                        else btn.classList.add('auto-faded');
                      });
                    }, 400);
                  }
                }
              }
            });
          }

          // Progress bar fill for Panel 2
          var progressFill = document.querySelector('.terminal-progress__fill');

          var reelTL = gsap.timeline({
            scrollTrigger: {
              trigger: reelSection,
              start: 'top top',
              end: function() { return '+=' + (totalScroll + window.innerHeight); },
              pin: reelSticky,
              scrub: 1,
              anticipatePin: 1,
              onUpdate: function(self) {
                var progress = self.progress;
                var numPanels = panels.length;
                var activeIndex = Math.min(Math.floor(progress * numPanels), numPanels - 1);

                // Update dots
                dots.forEach(function(dot, i) {
                  dot.classList.toggle('active', i === activeIndex);
                });

                // Per-panel sub-animations + fade
                panels.forEach(function(panel, i) {
                  var panelStart = i / numPanels;
                  var panelEnd = (i + 1) / numPanels;
                  if (progress >= panelStart && progress <= panelEnd) {
                    var panelProgress = (progress - panelStart) / (panelEnd - panelStart);
                    revealPanelElements(panel, panelProgress);

                    // Fade out in last 30% of panel scroll (except last panel)
                    if (panelProgress > 0.7 && i < numPanels - 1) {
                      panel.style.opacity = String(Math.max(0, 1 - (panelProgress - 0.7) / 0.3));
                    } else {
                      panel.style.opacity = '1';
                    }

                    // Progress bar for panel 2 (AI analysis)
                    if (i === 1 && progressFill) {
                      progressFill.style.width = Math.min(panelProgress * 350, 100) + '%';
                    }
                  } else if (progress > panelEnd) {
                    panel.style.opacity = '0';
                  } else {
                    panel.style.opacity = '1';
                  }
                });
              }
            }
          });

          // Main horizontal movement
          reelTL.to(reelTrack, { x: -totalScroll, ease: 'none' });

          // Clickable dots, scroll to the corresponding panel
          var st = reelTL.scrollTrigger;
          dots.forEach(function(dot) {
            dot.addEventListener('click', function() {
              var panelIdx = parseInt(this.getAttribute('data-panel'));
              var targetProgress = panelIdx / panels.length;
              var targetScroll = st.start + targetProgress * (st.end - st.start);
              window.scrollTo({ top: targetScroll, behavior: 'smooth' });
            });
          });

          // Skip link, scroll past the reel to Results
          var skipLink = document.querySelector('.reel__skip');
          if (skipLink) {
            skipLink.addEventListener('click', function(e) {
              e.preventDefault();
              window.scrollTo({ top: st.end + 100, behavior: 'smooth' });
            });
          }

          // Reveal first panel's elements on load
          setTimeout(function() {
            revealPanelElements(panels[0], 1);
          }, 600);
        }
      } else {
        // Mobile: make all reel elements visible immediately
        document.querySelectorAll('[data-reel-reveal]').forEach(function(el) {
          el.classList.add('revealed');
        });
      }
    });

/* ===== extracted inline scripts ===== */
// --- Submission tracking endpoint (Cloudflare Worker -> GitHub issue). See worker/README.md ---
    // Paste your deployed Worker URL here to store every submission as a GitHub issue.
    var SUBMISSION_ENDPOINT = '';

    // --- EmailJS init (replace placeholders with your keys) ---
    var EMAILJS_PUBLIC_KEY  = 'YOUR_EMAILJS_PUBLIC_KEY';
    var EMAILJS_SERVICE_ID  = 'YOUR_EMAILJS_SERVICE_ID';
    var EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';

    if (window.emailjs && EMAILJS_PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }

    // --- Modal open / close ---
    function openEstimateModal() {
      var modal = document.getElementById('estimateModal');
      // Reset to form view
      document.getElementById('estimateFormWrap').style.display = '';
      document.getElementById('estimateSuccess').classList.remove('show');
      document.getElementById('estimateBtn').disabled = false;
      document.getElementById('estimateBtn').textContent = 'Get started';
      var form = modal.querySelector('.estimate-form');
      if (form) form.reset();
      document.getElementById('gs-legal-fields').classList.remove('is-shown');
      document.getElementById('gs-compliance-fields').classList.remove('is-shown');
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      // Close mobile nav if open
      var mobileNav = document.getElementById('mobileNav');
      if (mobileNav && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        var toggle = document.querySelector('.header__toggle');
        if (toggle) {
          toggle.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
        }
      }
    }

    function closeEstimateModal() {
      var modal = document.getElementById('estimateModal');
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    // Close on backdrop click
    document.getElementById('estimateModal').addEventListener('click', function(e) {
      if (e.target === this) closeEstimateModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeEstimateModal();
    });

    // --- Branching: show conditional fields based on selected practice ---
    (function () {
      var legalCb = document.getElementById('gs-legal');
      var compCb = document.getElementById('gs-compliance');
      function sync() {
        document.getElementById('gs-legal-fields').classList.toggle('is-shown', legalCb.checked);
        document.getElementById('gs-compliance-fields').classList.toggle('is-shown', compCb.checked);
      }
      if (legalCb && compCb) {
        legalCb.addEventListener('change', sync);
        compCb.addEventListener('change', sync);
      }
    })();

    // --- Form submission ---
    function submitEstimate(e) {
      e.preventDefault();
      var btn = document.getElementById('estimateBtn');

      var practices = Array.prototype.map.call(
        document.querySelectorAll('input[name="practice"]:checked'), function (i) { return i.value; });
      if (practices.length === 0) {
        alert('Please choose at least one: Compliance or Legal.');
        return;
      }

      btn.disabled = true;
      btn.textContent = 'Sending...';

      var contractsEl = document.querySelector('input[name="contracts"]:checked');
      var filings = Array.prototype.map.call(
        document.querySelectorAll('input[name="filings"]:checked'), function (i) { return i.value; });

      // Honeypot: if a bot filled the hidden field, pretend success and drop it.
      var hp = document.getElementById('est-company');
      if (hp && hp.value) { showSuccess(); return; }

      var params = {
        name:      document.getElementById('est-name').value,
        role:      document.getElementById('est-role').value,
        email:     document.getElementById('est-email').value,
        practice:  practices.join(', '),
        contracts: contractsEl ? contractsEl.value : '',
        filings:   filings.join(', '),
        company:   '',
        page:      window.location.pathname
      };

      function fail() {
        btn.disabled = false;
        btn.textContent = 'Get started';
        alert('Something went wrong. Please try again or email legal@alefcompute.com.');
      }

      // 1) Preferred: store every submission in GitHub via the Worker endpoint.
      if (SUBMISSION_ENDPOINT) {
        fetch(SUBMISSION_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(params)
        })
          .then(function (r) { if (!r.ok) throw new Error('bad status'); return r.text(); })
          .then(function () { showSuccess(); })
          .catch(fail);
        return;
      }

      // 2) EmailJS, if configured.
      if (window.emailjs && EMAILJS_PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY') {
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
          .then(function () { showSuccess(); })
          .catch(fail);
        return;
      }

      // 3) Fallback: open the user's mail client with the details pre-filled.
      var subject = encodeURIComponent('Get started request from ' + params.name);
      var body = encodeURIComponent(
        'Name: ' + params.name + '\n' +
        'Role: ' + params.role + '\n' +
        'Email: ' + params.email + '\n' +
        'Interested in: ' + params.practice + '\n' +
        (params.contracts ? 'Contracts/month: ' + params.contracts + '\n' : '') +
        (params.filings ? 'Filings: ' + params.filings + '\n' : '')
      );
      window.location.href = 'mailto:legal@alefcompute.com?subject=' + subject + '&body=' + body;
      showSuccess();
    }

    function showSuccess() {
      document.getElementById('estimateFormWrap').style.display = 'none';
      document.getElementById('estimateSuccess').classList.add('show');
      setTimeout(closeEstimateModal, 2000);
    }
