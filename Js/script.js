// ================================================
// ALL JAVASCRIPT – collected from your original file
// ================================================

document.addEventListener('DOMContentLoaded', () => {

  // Testimonial read-more logic
  document.querySelectorAll('.testimonial-text-wrapper').forEach(wrapper => {
    const textEl   = wrapper.querySelector('.testimonial-text');
    const readMore = wrapper.querySelector('.read-more');

    if (!textEl || !readMore) return;

    setTimeout(() => {
      const isOverflowing = textEl.scrollHeight > wrapper.clientHeight + 6;

      if (isOverflowing) {
        wrapper.classList.add('truncated');
        readMore.style.display = 'block';
      } else {
        wrapper.classList.remove('truncated');
        readMore.style.display = 'none';
        wrapper.style.maxHeight = 'none';
      }

      readMore.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.classList.add('expanded');
        wrapper.classList.remove('truncated');
        readMore.style.display = 'none';
      });
    }, 100);
  });

  // ──────────────── Mobile offcanvas navigation ────────────────
  const offcanvas = document.getElementById('offcanvasNavbar');

  document.querySelectorAll('#offcanvasNavbar .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      if (targetId && targetId.startsWith('#') && targetId !== '#') {
        e.preventDefault();

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas) || 
                             bootstrap.Offcanvas.getOrCreateInstance(offcanvas);
          if (bsOffcanvas) bsOffcanvas.hide();

          setTimeout(() => {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 350);
        }
      }
    });
  });

  // Navbar scrolled effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Go to Top Button Logic
  const btn = document.getElementById('goToTop');
  if (btn) {
    window.onscroll = function() {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    };

    btn.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  // Global smooth scrolling for all # links (including HOME / logo)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');

      if (targetId === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

});

// FAQ toggle function (if you still want to keep it inline or move it here)
function toggleFAQ(element) {
  const accordionItem = element.parentElement;
  const allItems = document.querySelectorAll('.faq-accordion-item');
  
  allItems.forEach(item => {
    if (item !== accordionItem) {
      item.classList.remove('active');
    }
  });
  
  accordionItem.classList.toggle('active');
}