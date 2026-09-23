/**
 * LUGGAGE PASS - Media Viewer Controller
 * Handles 5-cut Card News Carousel, 50s Shorts Video Player, and Poster Lightbox.
 */

const MediaViewer = {
  cardIndex: 0,
  cardTotal: 5,
  cards: [
    {
      src: "promotion/luggage_pass_cardnews_01_cover.png",
      title: "01. 외국인 관광객을 위한 핸즈프리 쇼핑",
      desc: "쇼핑은 더 많이, 짐은 더 가볍게 (Shop more. Carry less.)"
    },
    {
      src: "promotion/luggage_pass_cardnews_02_problem.png",
      title: "02. 사고 싶은 건 많은데 들고 갈 손이 없어요",
      desc: "무거운 캐리어, 늘어나는 쇼핑백, 공항까지의 피로를 해결합니다."
    },
    {
      src: "promotion/luggage_pass_cardnews_03_features.png",
      title: "03. 패스 하나로 결제부터 공항 수령까지",
      desc: "PAY(선충전) · COLLECT(자동집결) · DELIVER(공항직송) · MEMBERSHIP(할인/라운지)"
    },
    {
      src: "promotion/luggage_pass_cardnews_04_flow.png",
      title: "04. 맡기고 쇼핑하고, 공항에서 한 번에 받으세요",
      desc: "예약/발급 ➔ 캐리어 보관 ➔ 태그 쇼핑 ➔ 자동 집결 ➔ 공항 데스크 수령"
    },
    {
      src: "promotion/luggage_pass_cardnews_05_cta.png",
      title: "05. 여행 일정에 맞는 패스를 선택하세요",
      desc: "DAY (₩20,000) / STAY (₩35,000) / PREMIUM (₩50,000)"
    }
  ],

  init() {
    this.initCardNews();
    this.initShortsVideo();
    this.initPosterLightbox();
    this.initTabs();
  },

  // --- Tab Navigation (Card News / Shorts / Poster) ---
  initTabs() {
    const tabBtns = document.querySelectorAll('.media-tab-btn');
    const tabPanes = document.querySelectorAll('.media-tab-pane');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetPane = document.getElementById(`tab-${targetTab}`);
        if (targetPane) targetPane.classList.add('active');

        // If leaving video tab, pause video
        const video = document.getElementById('shorts-video');
        if (video && targetTab !== 'shorts') {
          video.pause();
        }
      });
    });
  },

  // --- 1. Card News Carousel ---
  initCardNews() {
    const track = document.getElementById('cardnews-track');
    const prevBtn = document.getElementById('cardnews-prev');
    const nextBtn = document.getElementById('cardnews-next');
    const dotsContainer = document.getElementById('cardnews-dots');
    const captionTitle = document.getElementById('cardnews-caption-title');
    const captionDesc = document.getElementById('cardnews-caption-desc');

    if (!track) return;

    // Render cards
    track.innerHTML = '';
    this.cards.forEach((card, idx) => {
      const slide = document.createElement('div');
      slide.className = 'cardnews-slide';
      slide.innerHTML = `
        <div class="cardnews-img-box">
          <img src="${card.src}" alt="${card.title}" loading="lazy" class="cardnews-img" data-index="${idx}">
          <button class="cardnews-zoom-btn" title="확대 보기" data-index="${idx}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
          </button>
        </div>
      `;
      track.appendChild(slide);
    });

    // Render dots
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      for (let i = 0; i < this.cardTotal; i++) {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        dot.addEventListener('click', () => this.goToCard(i));
        dotsContainer.appendChild(dot);
      }
    }

    if (prevBtn) prevBtn.addEventListener('click', () => this.prevCard());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextCard());

    // Click to zoom image
    track.addEventListener('click', (e) => {
      const zoomBtn = e.target.closest('.cardnews-zoom-btn') || e.target.closest('.cardnews-img');
      if (zoomBtn) {
        const idx = parseInt(zoomBtn.getAttribute('data-index'), 10);
        if (!isNaN(idx)) {
          this.openLightbox(this.cards[idx].src, this.cards[idx].title);
        }
      }
    });

    // Touch Swipe
    let touchStartX = 0;
    let touchEndX = 0;
    track.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        this.nextCard();
      } else if (touchEndX - touchStartX > 50) {
        this.prevCard();
      }
    }, { passive: true });

    this.updateCardView();
  },

  goToCard(index) {
    this.cardIndex = (index + this.cardTotal) % this.cardTotal;
    this.updateCardView();
  },

  prevCard() {
    this.goToCard(this.cardIndex - 1);
  },

  nextCard() {
    this.goToCard(this.cardIndex + 1);
  },

  updateCardView() {
    const track = document.getElementById('cardnews-track');
    const dots = document.querySelectorAll('.carousel-dot');
    const captionTitle = document.getElementById('cardnews-caption-title');
    const captionDesc = document.getElementById('cardnews-caption-desc');
    const pageNum = document.getElementById('cardnews-current-num');

    if (track) {
      track.style.transform = `translateX(-${this.cardIndex * 100}%)`;
    }

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === this.cardIndex);
    });

    const curr = this.cards[this.cardIndex];
    if (captionTitle && curr) captionTitle.textContent = curr.title;
    if (captionDesc && curr) captionDesc.textContent = curr.desc;
    if (pageNum) pageNum.textContent = `${this.cardIndex + 1} / ${this.cardTotal}`;
  },

  // --- 2. Shorts Video Player ---
  initShortsVideo() {
    const video = document.getElementById('shorts-video');
    const playBtn = document.getElementById('shorts-play-btn');
    const muteBtn = document.getElementById('shorts-mute-btn');
    const progressBar = document.getElementById('shorts-progress-bar');
    const progressFill = document.getElementById('shorts-progress-fill');
    const timeDisplay = document.getElementById('shorts-time-display');
    const jumpBtns = document.querySelectorAll('.shorts-jump-btn');

    if (!video) return;

    // Toggle Play
    if (playBtn) {
      playBtn.addEventListener('click', () => {
        if (video.paused) {
          video.play().catch(e => console.log('Autoplay policy', e));
        } else {
          video.pause();
        }
      });
    }

    video.addEventListener('play', () => {
      if (playBtn) playBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      `;
    });

    video.addEventListener('pause', () => {
      if (playBtn) playBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      `;
    });

    // Toggle Mute
    if (muteBtn) {
      muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        this.updateMuteIcon(muteBtn, video.muted);
      });
      this.updateMuteIcon(muteBtn, video.muted);
    }

    // Time & Progress Update
    video.addEventListener('timeupdate', () => {
      if (video.duration) {
        const percent = (video.currentTime / video.duration) * 100;
        if (progressFill) progressFill.style.width = `${percent}%`;
        if (timeDisplay) {
          const curM = Math.floor(video.currentTime / 60);
          const curS = Math.floor(video.currentTime % 60).toString().padStart(2, '0');
          const durM = Math.floor(video.duration / 60);
          const durS = Math.floor(video.duration % 60).toString().padStart(2, '0');
          timeDisplay.textContent = `${curM}:${curS} / ${durM}:${durS}`;
        }
      }
    });

    // Progress Bar Seek
    if (progressBar) {
      progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        if (video.duration) {
          video.currentTime = pos * video.duration;
        }
      });
    }

    // Storyboard Timeline Jump Buttons
    jumpBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetSeconds = parseFloat(btn.getAttribute('data-time'));
        if (!isNaN(targetSeconds)) {
          video.currentTime = targetSeconds;
          video.play().catch(() => {});
          jumpBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        }
      });
    });
  },

  updateMuteIcon(btn, isMuted) {
    if (isMuted) {
      btn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      `;
      btn.title = "음소거 해제";
    } else {
      btn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      `;
      btn.title = "음소거";
    }
  },

  // --- 3. Poster Lightbox & Actions ---
  initPosterLightbox() {
    const posterImg = document.getElementById('poster-main-img');
    const zoomPosterBtn = document.getElementById('poster-zoom-btn');

    if (posterImg) {
      posterImg.addEventListener('click', () => {
        this.openLightbox('promotion/홍보포스터 최종.png', 'LUGGAGE PASS 공식 홍보 포스터');
      });
    }

    if (zoomPosterBtn) {
      zoomPosterBtn.addEventListener('click', () => {
        this.openLightbox('promotion/홍보포스터 최종.png', 'LUGGAGE PASS 공식 홍보 포스터');
      });
    }

    // Modal Close
    const lightboxModal = document.getElementById('lightbox-modal');
    const closeBtn = document.getElementById('lightbox-close-btn');
    if (closeBtn && lightboxModal) {
      closeBtn.addEventListener('click', () => this.closeLightbox());
      lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) this.closeLightbox();
      });
    }
  },

  openLightbox(src, title) {
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    const downloadBtn = document.getElementById('lightbox-download-btn');

    if (modal && img) {
      img.src = src;
      img.alt = title || 'LUGGAGE PASS Media';
      if (caption) caption.textContent = title || '';
      if (downloadBtn) downloadBtn.href = src;
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  },

  closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }
};

window.MediaViewer = MediaViewer;
