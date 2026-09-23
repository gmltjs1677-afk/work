/**
 * LUGGAGE PASS - Booking & Digital Pass Generator
 * Handles tier selection, balance calculation, reservation form validation,
 * and Canvas-based dynamic Barcode/QR code pass generation.
 */

const BookingManager = {
  selectedTier: 'STAY',
  currentChargeAmount: 500000,

  tiers: {
    DAY: {
      name: 'DAY PASS',
      price: 20000,
      badge: '1-DAY SHOPPING',
      color: '#6B1724',
      storage: '1-Day Luggage Storage',
      discount: '5% Brand Discount'
    },
    STAY: {
      name: 'STAY PASS',
      price: 35000,
      badge: '★ BEST RECOMMEND',
      color: '#1B2A4A',
      storage: '7-Day Unlimited Storage',
      discount: '7% Brand Discount'
    },
    PREMIUM: {
      name: 'PREMIUM PASS',
      price: 50000,
      badge: 'VIP CONCIERGE',
      color: '#8C6D37',
      storage: '14-Day Unlimited Storage',
      discount: '10% Brand Discount'
    }
  },

  airports: {
    'ICN_T1': '인천공항 제1터미널 (ICN T1)',
    'ICN_T2': '인천공항 제2터미널 (ICN T2)',
    'GMP': '김포국제공항 (GMP)',
    'PUS': '김해국제공항 (PUS)'
  },

  init() {
    this.initTierSelection();
    this.initCalculator();
    this.initBookingForm();
    this.initDemoButtons();
    this.renderActivePass();

    // Listen for pass updates
    window.addEventListener('lp_pass_updated', (e) => {
      this.renderActivePass(e.detail.pass);
    });
  },

  // --- 1. Tier Selection Synchronization ---
  initTierSelection() {
    const tierCards = document.querySelectorAll('.pricing-card');
    const formTierSelect = document.getElementById('book-tier-select');

    tierCards.forEach(card => {
      const selectBtn = card.querySelector('.pricing-select-btn');
      if (selectBtn) {
        selectBtn.addEventListener('click', () => {
          const tier = card.getAttribute('data-tier');
          this.setTier(tier);
          // Smooth scroll to booking section
          const bookSection = document.getElementById('booking-section');
          if (bookSection) bookSection.scrollIntoView({ behavior: 'smooth' });
        });
      }
    });

    if (formTierSelect) {
      formTierSelect.addEventListener('change', (e) => {
        this.setTier(e.target.value);
      });
    }
  },

  setTier(tier) {
    if (!this.tiers[tier]) tier = 'STAY';
    this.selectedTier = tier;

    // Update pricing cards highlight
    document.querySelectorAll('.pricing-card').forEach(c => {
      if (c.getAttribute('data-tier') === tier) {
        c.classList.add('selected-tier');
      } else {
        c.classList.remove('selected-tier');
      }
    });

    // Update form select
    const formSelect = document.getElementById('book-tier-select');
    if (formSelect) formSelect.value = tier;
  },

  // --- 2. Smart Balance Calculator ---
  initCalculator() {
    const slider = document.getElementById('calc-slider');
    const inputVal = document.getElementById('calc-input-val');
    const quickBtns = document.querySelectorAll('.calc-quick-btn');

    if (slider) {
      slider.addEventListener('input', (e) => {
        this.updateCalculator(parseInt(e.target.value, 10));
      });
    }

    if (inputVal) {
      inputVal.addEventListener('change', (e) => {
        const val = parseInt(e.target.value.replace(/[^0-9]/g, ''), 10) || 0;
        this.updateCalculator(val);
      });
    }

    quickBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const addAmount = parseInt(btn.getAttribute('data-amount'), 10);
        this.updateCalculator(this.currentChargeAmount + addAmount);
      });
    });

    this.updateCalculator(this.currentChargeAmount);
  },

  updateCalculator(amount) {
    this.currentChargeAmount = Math.max(0, Math.min(2000000, amount));

    const slider = document.getElementById('calc-slider');
    const inputVal = document.getElementById('calc-input-val');
    const tierBadge = document.getElementById('calc-membership-badge');
    const perkText = document.getElementById('calc-perks-text');
    const savingText = document.getElementById('calc-saving-est');
    const formChargeInput = document.getElementById('book-charge-input');

    if (slider) slider.value = this.currentChargeAmount;
    if (inputVal) inputVal.value = this.currentChargeAmount.toLocaleString() + ' 원';
    if (formChargeInput) formChargeInput.value = this.currentChargeAmount;

    let grade = 'STANDARD';
    let perk = '기본 패스 혜택 적용';
    let gradeColor = '#5A5048';
    let estSaving = Math.round(this.currentChargeAmount * 0.05);

    if (this.currentChargeAmount >= 1000000) {
      grade = 'PLATINUM';
      perk = '★ VIP 전용 라운지 2인 이용권 + 프리미엄 다과 세트 증정 + 특급 배송 무료';
      gradeColor = '#D4AF37';
      estSaving = Math.round(this.currentChargeAmount * 0.10);
    } else if (this.currentChargeAmount >= 500000) {
      grade = 'GOLD';
      perk = '★ 공항 배송 옵션 특급(Express) 업그레이드 무료 제공';
      gradeColor = '#C5A880';
      estSaving = Math.round(this.currentChargeAmount * 0.07);
    } else if (this.currentChargeAmount >= 300000) {
      grade = 'SILVER';
      perk = '★ K-뷰티 베스트 셀러 디럭스 샘플 키트 증정';
      gradeColor = '#8A9BA8';
      estSaving = Math.round(this.currentChargeAmount * 0.05);
    }

    if (tierBadge) {
      tierBadge.textContent = grade;
      tierBadge.style.backgroundColor = gradeColor;
    }
    if (perkText) perkText.textContent = perk;
    if (savingText) savingText.textContent = `예상 브랜드 즉시 할인 혜택: 약 ₩${estSaving.toLocaleString()}`;
  },

  // --- 3. Booking Form Submission ---
  initBookingForm() {
    const form = document.getElementById('booking-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleFormSubmit();
    });
  },

  handleFormSubmit() {
    const name = document.getElementById('book-name').value.trim();
    const country = document.getElementById('book-country').value;
    const contact = document.getElementById('book-contact').value.trim();
    const tier = document.getElementById('book-tier-select').value;
    const visitDate = document.getElementById('book-date').value;
    const airport = document.getElementById('book-airport').value;
    const flight = document.getElementById('book-flight').value.trim() || 'TBD';
    const departureTime = document.getElementById('book-time').value || '18:00';
    const charge = parseInt(document.getElementById('book-charge-input').value, 10) || 0;

    if (!name || !visitDate || !contact) {
      alert('필수 정보(영문 성명, 방문 예정일, 연락처)를 모두 입력해주세요.');
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const passId = `LP-2026-${randomSuffix}`;

    let level = 'STANDARD';
    const perks = [this.tiers[tier].storage, this.tiers[tier].discount];
    if (charge >= 1000000) {
      level = 'PLATINUM';
      perks.push('VIP Lounge Access', 'Express Airport Delivery');
    } else if (charge >= 500000) {
      level = 'GOLD';
      perks.push('Express Airport Delivery');
    } else if (charge >= 300000) {
      level = 'SILVER';
      perks.push('K-Beauty Deluxe Sample Kit');
    }

    const passData = {
      passId,
      tier,
      tierName: this.tiers[tier].name,
      holderName: name.toUpperCase(),
      country,
      contact,
      visitDate,
      airport,
      airportName: this.airports[airport] || airport,
      flightNo: flight.toUpperCase(),
      departureTime: `${visitDate} ${departureTime}`,
      prechargeAmount: charge,
      balance: charge,
      membershipLevel: level,
      perks,
      savedWeightKg: 0,
      issuedAt: new Date().toISOString(),
      status: 'ACTIVE'
    };

    window.StorageManager.saveActivePass(passData);
    window.StorageManager.setDeliveryStep(1);

    // Scroll to active pass
    const passDisplay = document.getElementById('digital-pass-card');
    if (passDisplay) {
      passDisplay.scrollIntoView({ behavior: 'smooth' });
      passDisplay.classList.add('pass-glow-effect');
      setTimeout(() => passDisplay.classList.remove('pass-glow-effect'), 2500);
    }

    this.showToast(`LUGGAGE PASS 발급 완료! (${passId})`);
  },

  // --- 4. Demo Pass Loader & Reset ---
  initDemoButtons() {
    const demoBtn = document.getElementById('book-demo-btn');
    const resetBtn = document.getElementById('pass-reset-btn');
    const printBtn = document.getElementById('pass-print-btn');

    if (demoBtn) {
      demoBtn.addEventListener('click', () => {
        const demo = window.StorageManager.loadDemoPass();
        this.fillFormWithDemo(demo);
        this.showToast('칭칭(Qing Qing) 고객님의 샘플 패스가 로드되었습니다.');
        const passDisplay = document.getElementById('digital-pass-card');
        if (passDisplay) passDisplay.scrollIntoView({ behavior: 'smooth' });
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('발급된 패스와 쇼핑 내역을 모두 초기화하시겠습니까?')) {
          window.StorageManager.resetAll();
          this.showToast('패스가 성공적으로 초기화되었습니다.');
        }
      });
    }

    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  },

  fillFormWithDemo(demo) {
    if (!demo) return;
    const nameEl = document.getElementById('book-name');
    const countryEl = document.getElementById('book-country');
    const contactEl = document.getElementById('book-contact');
    const tierEl = document.getElementById('book-tier-select');
    const dateEl = document.getElementById('book-date');
    const airportEl = document.getElementById('book-airport');
    const flightEl = document.getElementById('book-flight');
    const timeEl = document.getElementById('book-time');

    if (nameEl) nameEl.value = demo.holderName;
    if (countryEl) countryEl.value = demo.country;
    if (contactEl) contactEl.value = demo.contact;
    if (tierEl) tierEl.value = demo.tier;
    if (dateEl) dateEl.value = demo.visitDate;
    if (airportEl) airportEl.value = demo.airport;
    if (flightEl) flightEl.value = demo.flightNo;
    if (timeEl) timeEl.value = '18:30';

    this.setTier(demo.tier);
    this.updateCalculator(demo.prechargeAmount);
  },

  // --- 5. Render Digital Mobile Pass Card ---
  renderActivePass(passData) {
    const pass = passData || window.StorageManager.getActivePass();
    const cardContainer = document.getElementById('digital-pass-card');
    const emptyState = document.getElementById('digital-pass-empty');

    if (!cardContainer) return;

    if (!pass) {
      cardContainer.style.display = 'none';
      if (emptyState) emptyState.style.display = 'block';
      this.updateGnbPassBadge(false);
      return;
    }

    cardContainer.style.display = 'block';
    if (emptyState) emptyState.style.display = 'none';
    this.updateGnbPassBadge(true, pass.passId);

    // Populate Pass Card HTML
    const tierInfo = this.tiers[pass.tier] || this.tiers.STAY;
    cardContainer.style.borderColor = tierInfo.color;

    const elId = document.getElementById('card-pass-id');
    const elHolder = document.getElementById('card-holder-name');
    const elTier = document.getElementById('card-tier-badge');
    const elBalance = document.getElementById('card-balance-val');
    const elAirport = document.getElementById('card-airport-val');
    const elFlight = document.getElementById('card-flight-val');
    const elDate = document.getElementById('card-valid-date');
    const elPerks = document.getElementById('card-perks-list');
    const elWeight = document.getElementById('card-saved-weight');

    if (elId) elId.textContent = pass.passId;
    if (elHolder) elHolder.textContent = pass.holderName;
    if (elTier) {
      elTier.textContent = pass.tierName || tierInfo.name;
      elTier.style.backgroundColor = tierInfo.color;
    }
    if (elBalance) elBalance.textContent = `₩ ${(pass.balance || 0).toLocaleString()}`;
    if (elAirport) elAirport.textContent = pass.airportName;
    if (elFlight) elFlight.textContent = pass.flightNo || 'TBD';
    if (elDate) elDate.textContent = pass.visitDate;
    if (elWeight) elWeight.textContent = `${pass.savedWeightKg || 0} kg`;

    if (elPerks) {
      elPerks.innerHTML = (pass.perks || []).map(p => `<li>✓ ${p}</li>`).join('');
    }

    // Render Canvas QR Code & Barcode
    this.drawBarcode(pass.passId);
    this.drawQrCode(pass.passId);
  },

  updateGnbPassBadge(hasPass, passId) {
    const badge = document.getElementById('gnb-pass-badge');
    if (badge) {
      if (hasPass) {
        badge.style.display = 'inline-flex';
        badge.textContent = passId || 'PASS ACTIVE';
      } else {
        badge.style.display = 'none';
      }
    }
  },

  // Canvas Barcode Generator (Code128-styled lines)
  drawBarcode(code) {
    const canvas = document.getElementById('barcode-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width = 240;
    const h = canvas.height = 48;

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = '#111111';
    let x = 12;
    // pseudo barcode pattern based on string characters
    for (let i = 0; i < code.length; i++) {
      const charCode = code.charCodeAt(i);
      const barWidth1 = (charCode % 3) + 1;
      const barWidth2 = ((charCode >> 1) % 2) + 1;
      const gap = (charCode % 2) + 2;

      ctx.fillRect(x, 4, barWidth1, h - 16);
      x += barWidth1 + gap;
      ctx.fillRect(x, 4, barWidth2, h - 16);
      x += barWidth2 + gap;
      if (x > w - 20) break;
    }

    // Text below barcode
    ctx.font = '10px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(code, w / 2, h - 2);
  },

  // Canvas QR Code Generator (Procedural pattern)
  drawQrCode(code) {
    const canvas = document.getElementById('qr-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = canvas.width = canvas.height = 96;

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = '#1B1414';
    const grid = 16;
    const cell = size / grid;

    // Corner Finder Patterns
    const drawFinder = (startX, startY) => {
      ctx.fillRect(startX * cell, startY * cell, 5 * cell, 5 * cell);
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect((startX + 1) * cell, (startY + 1) * cell, 3 * cell, 3 * cell);
      ctx.fillStyle = '#1B1414';
      ctx.fillRect((startX + 2) * cell, (startY + 2) * cell, 1 * cell, 1 * cell);
    };

    drawFinder(1, 1);
    drawFinder(10, 1);
    drawFinder(1, 10);

    // Procedural random noise seeded by code
    let hash = 0;
    for (let i = 0; i < code.length; i++) {
      hash = (hash << 5) - hash + code.charCodeAt(i);
      hash |= 0;
    }

    for (let r = 0; r < grid; r++) {
      for (let c = 0; c < grid; c++) {
        // Skip finder areas
        if ((r < 7 && c < 7) || (r < 7 && c > 8) || (r > 8 && c < 7)) continue;
        const val = Math.abs(Math.sin(hash + r * 13 + c * 37)) > 0.5;
        if (val) {
          ctx.fillRect(c * cell, r * cell, cell - 0.5, cell - 0.5);
        }
      }
    }
  },

  showToast(msg) {
    let toast = document.getElementById('lp-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'lp-toast';
      toast.className = 'lp-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
};

window.BookingManager = BookingManager;
