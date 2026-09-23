/**
 * LUGGAGE PASS - Virtual Hands-Free Shopping Arena Simulator
 * Lets visitors browse iconic Korean department store products,
 * click "+ Tag with Pass", deducts balance, and accumulates saved luggage weight.
 */

const ShoppingSimulator = {
  products: [
    {
      id: 'prod_1',
      category: 'K-BEAUTY',
      name: '탬버린즈 에그 퍼퓸 (카모 14ml)',
      nameEn: 'TAMBURINS Egg Perfume (Chamo 14ml)',
      price: 45800,
      weight: 0.4,
      floor: '본관 1F 럭셔리 뷰티',
      imageEmoji: '✨',
      badge: 'HOT TREND'
    },
    {
      id: 'prod_2',
      category: 'K-BEAUTY',
      name: '헤라 블랙 쿠션 SPF34 특별 기획세트',
      nameEn: 'HERA Black Cushion Special Set',
      price: 68000,
      weight: 0.3,
      floor: '본관 1F K-뷰티',
      imageEmoji: '💄',
      badge: 'BEST'
    },
    {
      id: 'prod_3',
      category: 'K-FASHION',
      name: '마뗑킴 아코디언 지갑 (블랙 메탈)',
      nameEn: 'Matin Kim Accordion Metal Wallet',
      price: 98000,
      weight: 0.3,
      floor: '신관 3F 영캐주얼',
      imageEmoji: '👛',
      badge: 'TOP PICK'
    },
    {
      id: 'prod_4',
      category: 'K-FASHION',
      name: '젠틀몬스터 선글라스 (LILIT 01)',
      nameEn: 'GENTLE MONSTER Sunglasses (Lilit 01)',
      price: 269000,
      weight: 0.5,
      floor: '본관 2F 디자이너',
      imageEmoji: '🕶️',
      badge: 'MUST BUY'
    },
    {
      id: 'prod_5',
      category: 'K-FASHION',
      name: '이미스(EMIS) 뉴 로고 볼캡',
      nameEn: 'EMIS New Logo Vintage Ball Cap',
      price: 39000,
      weight: 0.2,
      floor: '신관 3F 스트리트 패션',
      imageEmoji: '🧢',
      badge: 'POPULAR'
    },
    {
      id: 'prod_6',
      category: 'K-FOOD & GIFT',
      name: '신세계명품 프리미엄 6년근 홍삼정 (240g)',
      nameEn: 'Shinsegae Premium Korean Red Ginseng (240g)',
      price: 198000,
      weight: 1.5,
      floor: '지하 1F 식품관 고메스트리트',
      imageEmoji: '🎁',
      badge: 'GIFT BEST'
    },
    {
      id: 'prod_7',
      category: 'K-BEAUTY',
      name: '설화수 윤조에센스 6세대 (90ml)',
      nameEn: 'Sulwhasoo First Care Activating Serum',
      price: 140000,
      weight: 0.6,
      floor: '본관 1F K-뷰티 명품',
      imageEmoji: '🌸',
      badge: 'STEADY'
    },
    {
      id: 'prod_8',
      category: 'K-FOOD & GIFT',
      name: '조선호텔 궁중 약과 & 전통 수제 다과 세트',
      nameEn: 'Josun Palace Royal Yakgwa Gift Set',
      price: 52000,
      weight: 1.1,
      floor: '지하 1F 전통 디저트',
      imageEmoji: '🍯',
      badge: 'K-DESSERT'
    }
  ],

  init() {
    this.renderProducts();
    this.renderCart();
    this.initCategoryFilters();

    // Listen to updates from storage
    window.addEventListener('lp_cart_updated', () => this.renderCart());
    window.addEventListener('lp_pass_updated', () => this.renderCart());
  },

  initCategoryFilters() {
    const filterBtns = document.querySelectorAll('.shop-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-category');
        this.renderProducts(cat);
      });
    });
  },

  renderProducts(categoryFilter = 'ALL') {
    const container = document.getElementById('shop-product-grid');
    if (!container) return;

    container.innerHTML = '';
    const filtered = categoryFilter === 'ALL'
      ? this.products
      : this.products.filter(p => p.category === categoryFilter);

    filtered.forEach(p => {
      const card = document.createElement('div');
      card.className = 'shop-product-card';
      card.innerHTML = `
        <div class="product-badge">${p.badge}</div>
        <div class="product-icon-wrap">${p.imageEmoji}</div>
        <div class="product-cat">${p.category} · ${p.floor}</div>
        <h4 class="product-name">${p.name}</h4>
        <div class="product-meta">
          <span class="product-price">₩ ${p.price.toLocaleString()}</span>
          <span class="product-weight">무게 ${p.weight} kg</span>
        </div>
        <button class="shop-tag-action-btn" data-id="${p.id}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="5" width="20" height="14" rx="2"></rect>
            <line x1="2" y1="10" x2="22" y2="10"></line>
          </svg>
          패스로 태그 결제
        </button>
      `;

      card.querySelector('.shop-tag-action-btn').addEventListener('click', (e) => {
        this.handleProductTag(p, e.currentTarget);
      });

      container.appendChild(card);
    });
  },

  handleProductTag(product, btnElement) {
    let pass = window.StorageManager.getActivePass();
    if (!pass) {
      // Auto issue or load demo pass for smooth experience
      pass = window.StorageManager.loadDemoPass();
      if (window.BookingManager) {
        window.BookingManager.showToast('체험용 LUGGAGE PASS가 자동으로 활성화되었습니다.');
      }
    }

    // Button Tag Animation
    btnElement.classList.add('tagging-active');
    btnElement.innerHTML = `
      <span class="tag-ping"></span>
      태그 완료! 중앙물류센터 집결 중...
    `;

    setTimeout(() => {
      btnElement.classList.remove('tagging-active');
      btnElement.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="5" width="20" height="14" rx="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
        </svg>
        패스로 태그 결제
      `;
    }, 1200);

    // Add to cart & deduct
    window.StorageManager.addTaggedItem(product);

    if (window.BookingManager) {
      window.BookingManager.showToast(`[${product.name}] 결제 완료! 짐 ${product.weight}kg이 공항으로 배송됩니다.`);
    }

    // Scroll to cart briefly or highlight
    const cartBox = document.getElementById('shop-cart-section');
    if (cartBox) {
      cartBox.classList.add('cart-pulse-glow');
      setTimeout(() => cartBox.classList.remove('cart-pulse-glow'), 1500);
    }
  },

  renderCart() {
    const listContainer = document.getElementById('shop-cart-list');
    const emptyMsg = document.getElementById('shop-cart-empty');
    const elTotalSpent = document.getElementById('shop-total-spent-val');
    const elRemBalance = document.getElementById('shop-rem-balance-val');
    const elSavedWeight = document.getElementById('shop-saved-weight-val');
    const clearBtn = document.getElementById('shop-cart-clear-btn');

    const items = window.StorageManager.getTaggedItems();
    const pass = window.StorageManager.getActivePass();

    if (!listContainer) return;

    if (items.length === 0) {
      listContainer.innerHTML = '';
      if (emptyMsg) emptyMsg.style.display = 'block';
      if (elTotalSpent) elTotalSpent.textContent = '₩ 0';
      if (elRemBalance) elRemBalance.textContent = pass ? `₩ ${(pass.balance || 0).toLocaleString()}` : '₩ 0';
      if (elSavedWeight) elSavedWeight.textContent = '0.0 kg (0개 품목)';
      if (clearBtn) clearBtn.style.display = 'none';
      return;
    }

    if (emptyMsg) emptyMsg.style.display = 'none';
    if (clearBtn) {
      clearBtn.style.display = 'inline-block';
      clearBtn.onclick = () => {
        if (confirm('쇼핑백 목록을 모두 비우시겠습니까?')) {
          window.StorageManager.clearTaggedItems();
        }
      };
    }

    let totalSpent = 0;
    let totalWeight = 0;

    listContainer.innerHTML = '';
    items.forEach(item => {
      totalSpent += item.price;
      totalWeight += item.weight;

      const row = document.createElement('div');
      row.className = 'cart-item-row';
      row.innerHTML = `
        <div class="cart-item-info">
          <span class="cart-item-tag">COLLECTED (${item.taggedAt})</span>
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-sub">${item.floor} · 무게 ${item.weight} kg</div>
        </div>
        <div class="cart-item-right">
          <span class="cart-item-price">₩ ${item.price.toLocaleString()}</span>
          <button class="cart-item-del-btn" title="삭제" data-id="${item.id}">×</button>
        </div>
      `;

      row.querySelector('.cart-item-del-btn').addEventListener('click', () => {
        window.StorageManager.removeTaggedItem(item.id);
      });

      listContainer.appendChild(row);
    });

    if (elTotalSpent) elTotalSpent.textContent = `₩ ${totalSpent.toLocaleString()}`;
    if (elRemBalance) elRemBalance.textContent = pass ? `₩ ${(pass.balance || 0).toLocaleString()}` : '-';
    if (elSavedWeight) {
      elSavedWeight.textContent = `${totalWeight.toFixed(1)} kg (${items.length}개 품목)`;
    }
  }
};

window.ShoppingSimulator = ShoppingSimulator;
