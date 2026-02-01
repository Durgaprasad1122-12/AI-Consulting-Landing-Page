// script.js
// Client-side behavior: mobile nav toggle, scroll reveal animations, contact form validation & UX.
// Deferred in HTML to allow non-blocking render.

// Encapsulate in an IIFE to avoid polluting global scope
(() => {
  'use strict';

  // Utility selectors
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // ---------- Mobile nav toggle ----------
  const navToggle = $('#nav-toggle');
  const navList = $('#nav-list');

  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('open');
    });

    // Close mobile nav when a link is clicked (for better UX)
    navList.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && navList.classList.contains('open')) {
        navList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---------- Smooth scroll for internal links ----------
  // Use native behavior + offset if necessary; CSS scroll-behavior supports it,
  // but we'll ensure focus moves to the target (a11y).
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (href === '#' || href === '#!' ) return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Move focus for keyboard users
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    window.setTimeout(() => target.removeAttribute('tabindex'), 1000);
  });

  // ---------- Reveal on scroll (IntersectionObserver) ----------
  const revealElements = $$('[data-reveal]');

  if ('IntersectionObserver' in window && revealElements.length) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08
    });

    revealElements.forEach(el => obs.observe(el));
  } else {
    // Fallback: reveal all
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // ---------- Contact form validation & UX ----------
  const form = $('#contact-form');
  const formStatus = $('#form-status');

  if (form) {
    // Utility: validate email with a simple regex (keeps UX friendly; not exhaustive)
    function isValidEmail(email) {
      // RFC compliant regex is heavy; simple safe pattern:
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
    }

    function setStatus(message, isError = false) {
      formStatus.textContent = message;
      formStatus.style.color = isError ? '#ffb4a6' : 'var(--muted)';
      formStatus.setAttribute('aria-live', 'polite');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Read values
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      // Client-side validations
      if (!name) {
        setStatus('Please enter your name.', true);
        form.name.focus();
        return;
      }
      if (!email || !isValidEmail(email)) {
        setStatus('Please enter a valid email address.', true);
        form.email.focus();
        return;
      }
      if (!message || message.length < 10) {
        setStatus('Message must be at least 10 characters.', true);
        form.message.focus();
        return;
      }

      // Simulate sending (no backend). Show loading + success.
      setStatus('Sending message…');
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      // Simulate network latency
      setTimeout(() => {
        // Success UX
        setStatus('Thanks! Your message has been sent. We will contact you within 2 business days.');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';

        // For accessibility, focus the success message
        formStatus.focus && formStatus.focus();
      }, 1100);
    });

    // Real-time validation feedback (optional but helpful)
    ['input', 'change'].forEach(ev => {
      form.addEventListener(ev, () => {
        // Clear status if user updates fields
        if (formStatus.textContent) formStatus.textContent = '';
      });
    });
  }

  // ---------- Footer year auto-update ----------
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---------- Performance notes (no-op, but helpful to keep here) ----------
  // All assets are minimal, SVGs inline, fonts loaded from Google Fonts (display=swap).
  // JS is deferred; CSS focuses on critical layout. Keep files small for fast loads.

})();