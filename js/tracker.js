/**
 * LUGGAGE PASS - Real-Time Luggage & Delivery Tracker
 * Manages 5-step progress stepper, timestamped event log, and simulation controls.
 */

const TrackerManager = {
  steps: [
    {
      step: 1,
      title: "웰컴센터 보관 완료",
      titleEn: "Stored at Welcome Center",
      location: "신세계백화점 본점 1F 웰컴센터",
      desc: "고객님의 캐리어가 웰컴센터에 입고되어 보안 태그 부착 후 안전하게 보관 중입니다.",
      icon: "🧳",
      timeOffset: "-3h 30m"
    },
    {
      step: 2,
      title: "구매품 매장 집결 중",
      titleEn: "Aggregating Store Items",
      location: "신세계 지하 물류 집결 센터",
      desc: "쇼핑하신 매장의 모든 구매품이 실시간으로 확인되어 전용 패키징 후 집결되었습니다.",
      icon: "🛍️",
      timeOffset: "-2h 00m"
    },
    {
      step: 3,
      title: "공항 직송 차량 이동",
      titleEn: "En Route to Airport",
      location: "공항 전용 직송 보안 차량",
      desc: "보관 캐리어와 패키징된 모든 쇼핑백이 전용 보안 배송 차량에 실려 공항으로 출발했습니다.",
      icon: "🚚",
      timeOffset: "-1h 15m"
    },
    {
      step: 4,
      title: "공항 데스크 도착 완료",
      titleEn: "Arrived at Airport Desk",
      location: "출국장 지정 전용 수령 데스크",
      desc: "지정하신 공항 수령처에 모든 짐이 안전하게 도착하여 고객님의 픽업을 대기하고 있습니다.",
      icon: "✈️",
      timeOffset: "-30m"
    },
    {
      step: 5,
      title: "고객 수령 완료",
      titleEn: "Customer Pickup Complete",
      location: "출국 게이트 통과 전",
      desc: "출국 전 모든 캐리어와 쇼핑백을 정상 수령하셨습니다. 즐거운 귀국길 되세요!",
      icon: "🎉",
      timeOffset: "방금 전"
    }
  ],

  init() {
    this.renderTracker();
    this.initControls();

    window.addEventListener('lp_step_updated', (e) => {
      this.renderTracker(e.detail.step);
    });
    window.addEventListener('lp_pass_updated', () => {
      this.renderTracker();
    });
  },

  initControls() {
    const prevBtn = document.getElementById('tracker-prev-step-btn');
    const nextBtn = document.getElementById('tracker-next-step-btn');
    const resetBtn = document.getElementById('tracker-reset-step-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const cur = window.StorageManager.getDeliveryStep();
        window.StorageManager.setDeliveryStep(cur - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const cur = window.StorageManager.getDeliveryStep();
        window.StorageManager.setDeliveryStep(cur + 1);
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        window.StorageManager.setDeliveryStep(1);
      });
    }
  },

  renderTracker(forcedStep) {
    const currentStep = forcedStep !== undefined ? forcedStep : window.StorageManager.getDeliveryStep();
    const pass = window.StorageManager.getActivePass();

    // Pass information banner
    const passIdEl = document.getElementById('tracker-active-pass-id');
    const destEl = document.getElementById('tracker-active-dest');
    const statusEl = document.getElementById('tracker-status-pill');

    if (passIdEl) passIdEl.textContent = pass ? pass.passId : 'LP-DEMO-2026';
    if (destEl) destEl.textContent = pass ? `${pass.airportName} (${pass.flightNo})` : '인천공항 제1터미널 (ICN T1)';
    if (statusEl) {
      const curStepInfo = this.steps[currentStep - 1] || this.steps[0];
      statusEl.textContent = curStepInfo.title;
    }

    // Step Nodes
    const stepperContainer = document.getElementById('tracker-stepper-nodes');
    if (stepperContainer) {
      stepperContainer.innerHTML = '';

      this.steps.forEach(s => {
        const isPassed = s.step < currentStep;
        const isCurrent = s.step === currentStep;

        const node = document.createElement('div');
        node.className = `tracker-step-node ${isPassed ? 'completed' : ''} ${isCurrent ? 'active' : ''}`;
        node.innerHTML = `
          <div class="step-circle" title="단계 ${s.step}: ${s.title}">
            ${isPassed ? '✓' : s.icon}
          </div>
          <div class="step-label-group">
            <span class="step-num">STEP 0${s.step}</span>
            <span class="step-title">${s.title}</span>
          </div>
        `;

        node.addEventListener('click', () => {
          window.StorageManager.setDeliveryStep(s.step);
        });

        stepperContainer.appendChild(node);
      });
    }

    // Current Step Highlight Card
    const cardTitle = document.getElementById('tracker-current-step-title');
    const cardLoc = document.getElementById('tracker-current-step-loc');
    const cardDesc = document.getElementById('tracker-current-step-desc');
    const cardProgress = document.getElementById('tracker-progress-percentage');
    const progressBarFill = document.getElementById('tracker-bar-fill');

    const curInfo = this.steps[currentStep - 1] || this.steps[0];
    if (cardTitle) cardTitle.textContent = `STEP 0${curInfo.step}. ${curInfo.title}`;
    if (cardLoc) cardLoc.textContent = `📍 현재 위치: ${curInfo.location}`;
    if (cardDesc) cardDesc.textContent = curInfo.desc;

    const percent = Math.round((currentStep / 5) * 100);
    if (cardProgress) cardProgress.textContent = `${percent}% 진행 완료`;
    if (progressBarFill) progressBarFill.style.width = `${percent}%`;

    // Render Timeline Log
    const logContainer = document.getElementById('tracker-timeline-log');
    if (logContainer) {
      logContainer.innerHTML = '';
      this.steps.forEach(s => {
        if (s.step <= currentStep) {
          const item = document.createElement('div');
          item.className = 'timeline-log-item';
          item.innerHTML = `
            <span class="timeline-dot ${s.step === currentStep ? 'live' : ''}"></span>
            <div class="timeline-body">
              <div class="timeline-time">${s.timeOffset} (${s.location})</div>
              <div class="timeline-msg"><strong>${s.title}</strong> - ${s.desc}</div>
            </div>
          `;
          logContainer.appendChild(item);
        }
      });
    }
  }
};

window.TrackerManager = TrackerManager;
