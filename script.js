/* ==========================================================================
   AURA Pure — Interactive Functionality
   Handles Configurator, UV-C Pulse Simulation, Tab Switching, Dynamic Cart
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initColorwaySelector();
  initConfigurator();
  initEngraving();
  initUvPulseSimulation();
  initSpecTabs();
  initImageThumbnails();
  initCartAndCheckout();
});

/* --------------------------------------------------------------------------
   Mobile Navigation Toggle
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = toggleBtn.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.textContent = navLinks.classList.contains('open') ? 'close' : 'menu';
      }
    });
  }
}

/* --------------------------------------------------------------------------
   Colorway Swatch Selector
   -------------------------------------------------------------------------- */
const COLORWAY_MAP = {
  'Obsidian Matte Black': {
    image: 'assets/aura-hero.png',
    tagline: 'Deep anodized matte black with surgical steel core'
  },
  'Glacial Alpine White': {
    image: 'assets/aura-steel-desk.jpg',
    tagline: 'Luminous brushed stainless steel with clean ambient finish'
  },
  'Deep Oceanic Navy': {
    image: 'assets/aura-colorways-lineup.jpg',
    tagline: 'Deep oceanic navy paired with bio-luminescent OLED telemetry'
  },
  'Brushed Titanium': {
    image: 'assets/aura-steel-desk.jpg',
    tagline: 'Aerospace-grade satin titanium alloy — Limited Edition'
  }
};

function initColorwaySelector() {
  const swatchButtons = document.querySelectorAll('.swatch-item');
  const colorLabel = document.getElementById('selected-color-name');
  const mainImage = document.getElementById('product-main-img');
  const colorDesc = document.getElementById('selected-color-desc');

  if (!swatchButtons.length) return;

  swatchButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      swatchButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const colorName = btn.dataset.colorName;
      if (colorLabel) colorLabel.textContent = colorName;

      const info = COLORWAY_MAP[colorName];
      if (info) {
        if (mainImage) {
          mainImage.style.opacity = '0.3';
          mainImage.style.transform = 'scale(0.96)';
          setTimeout(() => {
            mainImage.src = info.image;
            mainImage.style.opacity = '1';
            mainImage.style.transform = 'scale(1)';
          }, 180);
        }
        if (colorDesc) colorDesc.textContent = info.tagline;
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Order Configurator (Capacity, Addons & Total Price)
   -------------------------------------------------------------------------- */
let configuratorState = {
  basePrice: 119, // default 750ml
  engravingPrice: 0,
  addonsPrice: 0
};

function initConfigurator() {
  const capacityCards = document.querySelectorAll('.capacity-card');
  const addonCheckboxes = document.querySelectorAll('.addon-card input[type="checkbox"]');

  capacityCards.forEach(card => {
    card.addEventListener('click', () => {
      capacityCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const price = parseInt(card.dataset.price, 10);
      if (!isNaN(price)) {
        configuratorState.basePrice = price;
        updateOrderPricing();
      }
    });
  });

  addonCheckboxes.forEach(chk => {
    chk.addEventListener('change', () => {
      calculateAddons();
      updateOrderPricing();
    });
  });

  updateOrderPricing();
}

function calculateAddons() {
  let sum = 0;
  const activeCheckboxes = document.querySelectorAll('.addon-card input[type="checkbox"]:checked');
  activeCheckboxes.forEach(chk => {
    const val = parseInt(chk.dataset.price, 10);
    if (!isNaN(val)) sum += val;
  });
  configuratorState.addonsPrice = sum;
}

function updateOrderPricing() {
  const total = configuratorState.basePrice + configuratorState.engravingPrice + configuratorState.addonsPrice;

  const currentPriceEl = document.getElementById('order-current-price');
  const checkoutTotalEl = document.getElementById('checkout-total-amt');

  if (currentPriceEl) currentPriceEl.textContent = `$${total}`;
  if (checkoutTotalEl) checkoutTotalEl.textContent = `$${total}`;
}

/* --------------------------------------------------------------------------
   Laser Engraving Live Preview
   -------------------------------------------------------------------------- */
function initEngraving() {
  const toggle = document.getElementById('engraving-toggle');
  const inputWrap = document.getElementById('engraving-input-wrap');
  const inputField = document.getElementById('engraving-input-field');
  const previewBadge = document.getElementById('engraving-render-preview');
  const previewText = document.getElementById('engraving-text-slot');

  if (!toggle) return;

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      if (inputWrap) inputWrap.style.display = 'block';
      if (previewBadge) previewBadge.classList.add('visible');
      configuratorState.engravingPrice = 10;
      if (inputField) inputField.focus();
    } else {
      if (inputWrap) inputWrap.style.display = 'none';
      if (previewBadge) previewBadge.classList.remove('visible');
      configuratorState.engravingPrice = 0;
    }
    updateOrderPricing();
  });

  if (inputField && previewText) {
    inputField.addEventListener('input', (e) => {
      const text = e.target.value.trim();
      previewText.textContent = text.length > 0 ? text : 'YOUR NAME';
    });
  }
}

/* --------------------------------------------------------------------------
   UV-C Light Pulse Simulation
   -------------------------------------------------------------------------- */
function initUvPulseSimulation() {
  const pulseBtn = document.getElementById('uv-trigger-btn');
  const halo = document.getElementById('uv-glow-effect');

  if (!pulseBtn || !halo) return;

  pulseBtn.addEventListener('click', () => {
    halo.classList.add('pulsing');
    pulseBtn.disabled = true;
    pulseBtn.innerHTML = '<span class="material-symbols-outlined text-[16px]">hourglass_top</span> Sterilizing...';

    showToast('UV-C 275nm Photonic sterilization cycle active. 99.999% Bio-deactivation.');

    setTimeout(() => {
      halo.classList.remove('pulsing');
      pulseBtn.disabled = false;
      pulseBtn.innerHTML = '<span class="material-symbols-outlined text-[16px]">check_circle</span> Cycle Complete';
      setTimeout(() => {
        pulseBtn.innerHTML = '<span class="material-symbols-outlined text-[16px]">cycle</span> Test UV-C Pulse';
      }, 2500);
    }, 3500);
  });
}

/* --------------------------------------------------------------------------
   Product Specs Architecture Tabs
   -------------------------------------------------------------------------- */
function initSpecTabs() {
  const tabButtons = document.querySelectorAll('.spec-tab-btn');
  const tabPanels = document.querySelectorAll('.spec-tab-panel');

  if (!tabButtons.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;

      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Image Thumbnails Gallery Switcher
   -------------------------------------------------------------------------- */
function initImageThumbnails() {
  const thumbs = document.querySelectorAll('.thumb-btn');
  const mainImg = document.getElementById('product-main-img');

  if (!thumbs.length || !mainImg) return;

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');

      const newSrc = thumb.dataset.imageSrc || thumb.querySelector('img')?.src;
      if (newSrc) {
        mainImg.style.opacity = '0.4';
        setTimeout(() => {
          mainImg.src = newSrc;
          mainImg.style.opacity = '1';
        }, 150);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Cart & Checkout Feedback
   -------------------------------------------------------------------------- */
function initCartAndCheckout() {
  const checkoutBtn = document.getElementById('checkout-action-btn');
  const cartBadges = document.querySelectorAll('.cart-badge');

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      const currentCount = parseInt(cartBadges[0]?.textContent || '1', 10);
      cartBadges.forEach(b => b.textContent = currentCount + 1);

      showToast('AURA Pure added to your cart! Proceeding to checkout...');
      checkoutBtn.disabled = true;
      checkoutBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">lock</span> Securing Batch Allocation...';

      setTimeout(() => {
        checkoutBtn.disabled = false;
        checkoutBtn.innerHTML = '<span class="material-symbols-outlined text-[18px]">shopping_bag</span> Order Confirmed!';
      }, 2000);
    });
  }
}

/* --------------------------------------------------------------------------
   Floating Toast Notifications
   -------------------------------------------------------------------------- */
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    toast.innerHTML = `<span class="material-symbols-outlined toast-icon">verified</span><span class="toast-text">${message}</span>`;
    document.body.appendChild(toast);
  } else {
    toast.querySelector('.toast-text').textContent = message;
  }

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
