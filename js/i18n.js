/**
 * LUGGAGE PASS - Internationalization (i18n) Engine
 * Supported Languages: Korean (ko), English (en), Traditional Chinese (zh), Japanese (ja)
 */

const I18N_DICTIONARY = {
  ko: {
    // Header & Nav
    nav_about: "서비스 소개",
    nav_features: "4대 핵심가치",
    nav_media: "홍보 미디어",
    nav_pricing: "패스 요금제",
    nav_shop: "가상 쇼핑 체험",
    nav_tracking: "실시간 배송 조회",
    nav_guide: "이용 안내",
    nav_my_pass: "내 패스 확인",
    nav_book_now: "지금 예약하기",

    // Hero
    hero_badge: "신세계백화점 외국인 전용 핸즈프리 쇼핑",
    hero_title: "쇼핑은 더 많이, 짐은 더 가볍게",
    hero_subtitle: "Shop more. Carry less.",
    hero_desc: "사는 건 당신이, 공항까지 짐을 옮기는 건 신세계백화점이 합니다. 무거운 캐리어와 쇼핑백 없이 오직 쇼핑과 서울 여행의 설렘만을 누리세요.",
    hero_btn_book: "사전예약 신청하기",
    hero_btn_video: "홍보 영상 감상 (50초)",
    hero_stat_1_num: "0 kg",
    hero_stat_1_desc: "쇼핑 중 손에 쥐는 짐 무게",
    hero_stat_2_num: "100%",
    hero_stat_2_desc: "출국 당일 공항 직송 보장",
    hero_stat_3_num: "3대 공항",
    hero_stat_3_desc: "인천(T1/T2)·김포·김해 수령",

    // Pain Point
    pain_tag: "PROBLEM & SOLUTION",
    pain_title: "여행 중 쇼핑, 왜 이렇게 힘들었을까요?",
    pain_subtitle: "사고 싶은 건 많은데 들고 갈 손이 없던 여행자의 하루, 이제 완전히 바뀝니다.",
    pain_before_title: "기존의 무거운 쇼핑 (Before)",
    pain_before_1: "지하철역 도착 직후부터 무거운 24인치 캐리어 이동 고통",
    pain_before_2: "매장마다 늘어나는 쇼핑백으로 손이 모자라 조기 귀가",
    pain_before_3: "매장마다 여권 꺼내기, Tax Refund 줄 서기의 번거로움",
    pain_before_4: "쇼핑 후 양손 가득 짐을 든 채 피로에 지친 공항철도 탑승",
    pain_after_title: "LUGGAGE PASS와 함께 (After)",
    pain_after_1: "백화점 도착 즉시 캐리어 위탁! 손가방 하나로 홀가분한 입장",
    pain_after_2: "매장에서 패스 카드만 '태그'하면 구매품이 자동 물류센터로 집결",
    pain_after_3: "선충전 카드 원터치 결제와 세금 환급(Tax Refund) 자동 연동",
    pain_after_4: "출국 당일 공항 데스크에서 말끔하게 포장된 모든 짐을 한 번에 픽업",

    // Features
    feat_tag: "CORE 4 PILLARS",
    feat_title: "패스 하나로 결제부터 공항 수령까지",
    feat_subtitle: "신세계백화점이 선사하는 올인원(All-in-One) 컨시어지 쇼핑 경험",
    feat_1_title: "PAY",
    feat_1_sub: "선충전 간편 통합 결제",
    feat_1_desc: "원하는 금액을 사전 충전하여 전 매장에서 원터치 결제. 여권 연동으로 Tax Refund 환급까지 자동 완료됩니다.",
    feat_2_title: "COLLECT",
    feat_2_sub: "매장별 구매품 자동 집결",
    feat_2_desc: "매장에서 결제 시 패스만 태그하세요. 직원이 안전하게 패킹하여 백화점 중앙 물류센터로 자동 집결합니다.",
    feat_3_title: "DELIVER",
    feat_3_sub: "공항 직송 안심 배송",
    feat_3_desc: "위탁한 캐리어와 당일 구매품 전량을 인천(T1/T2), 김포, 김해공항의 안전한 지정 수령 데스크로 직송합니다.",
    feat_4_title: "MEMBERSHIP",
    feat_4_sub: "등급별 할인 & 라운지 혜택",
    feat_4_desc: "주요 패션·뷰티 브랜드 5~10% 즉시 할인 및 외국인 전용 웰컴 라운지 무료 이용, 프리미엄 다과가 제공됩니다.",

    // Media Center
    media_tag: "OFFICIAL PROMOTION",
    media_title: "LUGGAGE PASS 공식 홍보관",
    media_subtitle: "카드뉴스, 50초 쇼츠 영상, 공식 포스터를 직접 감상해보세요.",
    tab_cardnews: "공식 카드뉴스 (5컷)",
    tab_shorts: "홍보 쇼츠 영상 (50초)",
    tab_poster: "공식 종합 포스터",
    shorts_jump_1: "00:00 짐에 지친 칭칭",
    shorts_jump_2: "00:15 러기지패스 발견",
    shorts_jump_3: "00:20 터치 결제 & 자동집결",
    shorts_jump_4: "00:27 공항 직송 안내",
    shorts_jump_5: "00:38 자유로운 출국 수령",

    // Pricing
    pricing_tag: "PASS TIERS & CALCULATOR",
    pricing_title: "여행 일정에 맞는 패스를 선택하세요",
    pricing_subtitle: "당일 가벼운 쇼핑부터 7일간의 여유로운 서울 여행까지",
    tier_day_name: "DAY PASS",
    tier_day_desc: "당일 쇼핑 고객을 위한 알뜰 패스",
    tier_day_price: "₩20,000",
    tier_day_f1: "당일 캐리어 보관 1회",
    tier_day_f2: "구매품 매장 자동 집결",
    tier_day_f3: "공항 일반 직송 배송",
    tier_day_f4: "백화점 브랜드 5% 할인",

    tier_stay_name: "STAY PASS",
    tier_stay_badge: "★ BEST RECOMMEND",
    tier_stay_desc: "최대 7일간 체류하는 여행자 필수 패스",
    tier_stay_price: "₩35,000",
    tier_stay_f1: "7일간 캐리어/짐 보관 무제한",
    tier_stay_f2: "매장 구매품 무제한 자동 집결",
    tier_stay_f3: "공항 직송 배송 (출국일 지정)",
    tier_stay_f4: "백화점 브랜드 7% 할인",
    tier_stay_f5: "웰컴 웰컴센터 음료 쿠폰 2매",

    tier_premium_name: "PREMIUM PASS",
    tier_premium_desc: "VIP 전용 라운지와 특급 배송의 품격",
    tier_premium_price: "₩50,000",
    tier_premium_f1: "최대 14일 짐 보관 무제한",
    tier_premium_f2: "특급 우선(Express) 공항 배송",
    tier_premium_f3: "신세계 VIP 라운지 2인 입장권",
    tier_premium_f4: "백화점 브랜드 10% 즉시 할인",
    tier_premium_f5: "웰컴 티 & 프리미엄 다과 증정",

    calc_title: "쇼핑 충전금 혜택 실시간 계산기",
    calc_desc: "예상 쇼핑 금액을 입력하시면 충전 등급과 추가 증정 혜택을 즉시 확인하실 수 있습니다.",
    calc_label_amount: "쇼핑 충전 희망 금액:",
    calc_grade_label: "달성 멤버십 등급:",
    calc_perk_label: "특별 제공 리워드:",

    // Booking Form
    book_tag: "PRE-BOOKING & DIGITAL PASS",
    book_title: "온라인 사전예약 및 디지털 패스 발급",
    book_subtitle: "간단한 정보 입력으로 모바일 패스를 즉시 발급받고 혜택을 누리세요.",
    book_label_name: "영문 성명 (여권 기준)",
    book_placeholder_name: "예: QING QING WANG",
    book_label_country: "국적 / 지역",
    book_label_contact: "이메일 또는 연락처",
    book_placeholder_contact: "예: guest@example.com",
    book_label_tier: "패스 종류 선택",
    book_label_date: "백화점 방문 예정일",
    book_label_airport: "출국 수령 공항",
    book_label_flight: "항공편명 (선택)",
    book_placeholder_flight: "예: BR169 또는 CI161",
    book_label_time: "출국 예정 시간",
    book_label_charge: "쇼핑 선충전 금액 (원)",
    book_btn_submit: "디지털 LUGGAGE PASS 발급하기",
    book_btn_demo: "체험용 샘플 패스(칭칭) 즉시 불러오기",

    // Digital Pass Card
    pass_title: "SHINSEGAE LUGGAGE PASS",
    pass_holder: "CARD HOLDER",
    pass_valid: "VALID THRU",
    pass_balance: "SHOPPING BALANCE",
    pass_pickup: "AIRPORT PICKUP",
    pass_weight: "SAVED WEIGHT",
    pass_btn_reset: "패스 초기화",
    pass_btn_print: "패스 이미지 저장 / 인쇄",

    // Shopping Simulator
    shop_tag: "VIRTUAL HANDS-FREE SHOPPING",
    shop_title: "가상 핸즈프리 쇼핑 체험관",
    shop_subtitle: "매장에서 상품을 선택하고 패스를 태그해보세요! 쇼핑백은 백화점이 공항으로 보냅니다.",
    shop_btn_tag: "+ 패스로 태그 결제",
    shop_cart_title: "나의 핸즈프리 쇼핑백 목록 (중앙 센터 집결 중)",
    shop_cart_empty: "아직 태그한 상품이 없습니다. 위 매장에서 상품을 태그해보세요!",
    shop_total_spent: "총 쇼핑 결제액:",
    shop_rem_balance: "패스 잔여 충전금:",
    shop_weight_saved: "내가 덜어낸 짐 무게:",

    // Tracker
    track_tag: "REAL-TIME TRACKING",
    track_title: "실시간 수하물 배송 현황 조회",
    track_subtitle: "고객님의 캐리어와 쇼핑백이 공항으로 안전하게 이동 중입니다.",
    track_pass_label: "조회 패스 번호:",
    track_step_1: "웰컴센터 보관 완료",
    track_step_1_desc: "백화점 웰컴센터에 고객님의 캐리어가 입고되어 안전 보관 중입니다.",
    track_step_2: "구매품 매장 집결 중",
    track_step_2_desc: "쇼핑하신 전 매장의 상품이 중앙 물류센터로 안전하게 자동 집결되었습니다.",
    track_step_3: "공항 직송 차량 이동",
    track_step_3_desc: "전용 보안 물류 차량이 지정 공항 출국 데스크로 출발하여 이동 중입니다.",
    track_step_4: "공항 데스크 도착 완료",
    track_step_4_desc: "출국장 수령 데스크에 모든 짐이 완벽히 도착하여 픽업 대기 중입니다.",
    track_step_5: "고객 수령 완료",
    track_step_5_desc: "고객님께서 출국 전 캐리어와 모든 구매품을 안전하게 수령하셨습니다.",
    track_btn_prev: "이전 단계",
    track_btn_next: "다음 단계 (시뮬레이션)",

    // Guide
    guide_tag: "LOCATION & DESK GUIDE",
    guide_title: "웰컴센터 및 공항별 수령 데스크 안내",
    guide_subtitle: "출국 당일 비행기 탑승 전, 지정된 공항 데스크에서 가볍게 픽업하세요.",
    guide_tab_main: "신세계 본점 웰컴센터",
    guide_tab_icn1: "인천공항 제1터미널",
    guide_tab_icn2: "인천공항 제2터미널",
    guide_tab_gmp: "김포국제공항",
    guide_tab_pus: "김해국제공항",

    // FAQ
    faq_tag: "CUSTOMER SUPPORT",
    faq_title: "자주 묻는 질문 (FAQ)",
    faq_subtitle: "LUGGAGE PASS 이용과 관련하여 궁금하신 점을 확인하세요.",
    faq_q1: "Q. 캐리어 크기나 무게에 제한이 있나요?",
    faq_a1: "A. 일반 항공기 위탁 수하물 규격(최대 32kg, 28인치 이하)의 캐리어라면 모두 안전하게 보관 및 공항 배송이 가능합니다.",
    faq_q2: "Q. 쇼핑 후 공항에서 비행기 탑승 몇 시간 전까지 수령할 수 있나요?",
    faq_a2: "A. 출국 최소 2시간 전까지 공항 데스크에 모든 짐이 안전하게 도착해 대기합니다. 24시간 연중무휴 데스크(인천공항)에서 언제든 편리하게 수령하실 수 있습니다.",
    faq_q3: "Q. 충전하고 남은 잔액은 어떻게 환불받나요?",
    faq_a3: "A. 여행 종료 후 남은 잔액은 백화점 웰컴센터 또는 출국 공항 데스크에서 결제하신 수단으로 즉시 수수료 없이 전액 환불해 드립니다.",
    faq_q4: "Q. 세금 환급(Tax Refund)은 어떻게 처리되나요?",
    faq_a4: "A. 패스 등록 시 여권 정보가 1회 안전하게 연동되므로, 매장에서 패스 태그 결제 시 즉시 사후 면세가 자동 적용됩니다.",

    // Footer
    footer_corp: "신세계백화점 (SHINSEGAE DEPARTMENT STORE)",
    footer_copy: "© 2026 SHINSEGAE ALL RIGHTS RESERVED. LUGGAGE PASS CAMPAIGN TEAM.",
    footer_addr: "서울특별시 중구 소공로 63 신세계백화점 본점 컨시어지 데스크"
  },

  en: {
    // Header & Nav
    nav_about: "About",
    nav_features: "4 Pillars",
    nav_media: "Media Center",
    nav_pricing: "Pass Tiers",
    nav_shop: "Virtual Shop",
    nav_tracking: "Live Tracking",
    nav_guide: "Pickup Guide",
    nav_my_pass: "My Pass",
    nav_book_now: "Book Now",

    // Hero
    hero_badge: "Shinsegae Hands-Free Shopping for Global Travelers",
    hero_title: "Shop more. Carry less.",
    hero_subtitle: "Hands-free luxury shopping in Korea",
    hero_desc: "You enjoy the shopping; Shinsegae delivers your bags straight to the airport. Stroll freely through Seoul without heavy luggage or overflowing shopping bags.",
    hero_btn_book: "Get Your Pass Now",
    hero_btn_video: "Watch Film (50s)",
    hero_stat_1_num: "0 kg",
    hero_stat_1_desc: "Weight in your hands while shopping",
    hero_stat_2_num: "100%",
    hero_stat_2_desc: "Guaranteed Airport Direct Delivery",
    hero_stat_3_num: "3 Major Airports",
    hero_stat_3_desc: "Incheon (T1/T2), Gimpo & Gimhae",

    // Pain Point
    pain_tag: "PROBLEM & SOLUTION",
    pain_title: "Why was travel shopping so exhausting?",
    pain_subtitle: "So much you wanted to buy, but not enough hands to carry it all. That changes today.",
    pain_before_title: "Heavy Shopping (Before)",
    pain_before_1: "Dragging heavy 24-inch luggage from the moment you exit the station",
    pain_before_2: "Cutting shopping short because both hands are overwhelmed with bags",
    pain_before_3: "Repetitive passport checks and queuing for Tax Refunds at every single store",
    pain_before_4: "Exhausting airport express train ride burdened with endless luggage",
    pain_after_title: "With LUGGAGE PASS (After)",
    pain_after_1: "Drop off suitcases at the Welcome Center; explore light and free",
    pain_after_2: "Simply tag your pass at checkout; purchases automatically route to central hub",
    pain_after_3: "One-touch payment from pre-charged balance with automated Tax Refund",
    pain_after_4: "Pick up all your neatly packaged goods and luggage right at the airport desk before takeoff",

    // Features
    feat_tag: "CORE 4 PILLARS",
    feat_title: "From Checkout to Airport Pickup in One Pass",
    feat_subtitle: "Shinsegae Department Store's All-in-One Luxury Concierge Solution",
    feat_1_title: "PAY",
    feat_1_sub: "Pre-charged Smart Pay",
    feat_1_desc: "Pre-load funds and tap to pay at every boutique. Automated Tax Refund without extra paperwork.",
    feat_2_title: "COLLECT",
    feat_2_sub: "Automated Store Aggregation",
    feat_2_desc: "Just tag your pass. Department store staff packs and gathers all purchases at the central logistics hub.",
    feat_3_title: "DELIVER",
    feat_3_sub: "Direct Airport Delivery",
    feat_3_desc: "Your stored luggage and all day's purchases are safely dispatched to Incheon (T1/T2), Gimpo, or Gimhae airport.",
    feat_4_title: "MEMBERSHIP",
    feat_4_sub: "Exclusive Perks & Lounges",
    feat_4_desc: "5~10% instant discounts on leading brands, free access to foreigner welcome lounges, and complimentary refreshments.",

    // Media Center
    media_tag: "OFFICIAL PROMOTION",
    media_title: "LUGGAGE PASS Media Showcase",
    media_subtitle: "Explore our official 5-cut card news, 50-second shorts film, and campaign posters.",
    tab_cardnews: "Card News (5 Cuts)",
    tab_shorts: "Shorts Video (50s)",
    tab_poster: "Official Poster",
    shorts_jump_1: "00:00 Qing Qing Burdened",
    shorts_jump_2: "00:15 Discovers Luggage Pass",
    shorts_jump_3: "00:20 One-Tap Pay & Collect",
    shorts_jump_4: "00:27 Airport Direct Delivery",
    shorts_jump_5: "00:38 Effortless Departure",

    // Pricing
    pricing_tag: "PASS TIERS & CALCULATOR",
    pricing_title: "Choose the Perfect Pass for Your Journey",
    pricing_subtitle: "From a single day of intense shopping to a relaxed 7-day Seoul experience.",
    tier_day_name: "DAY PASS",
    tier_day_desc: "Ideal for single-day shopping travelers",
    tier_day_price: "₩20,000",
    tier_day_f1: "1-Day Luggage Storage",
    tier_day_f2: "Store Purchases Aggregation",
    tier_day_f3: "Standard Airport Delivery",
    tier_day_f4: "5% Brand Discounts",

    tier_stay_name: "STAY PASS",
    tier_stay_badge: "★ BEST RECOMMEND",
    tier_stay_desc: "Essential for 3 to 7-day travelers",
    tier_stay_price: "₩35,000",
    tier_stay_f1: "Unlimited 7-Day Luggage Storage",
    tier_stay_f2: "Unlimited Store Purchases Aggregation",
    tier_stay_f3: "Direct Airport Delivery (Scheduled)",
    tier_stay_f4: "7% Brand Discounts",
    tier_stay_f5: "2 Welcome Drink Vouchers",

    tier_premium_name: "PREMIUM PASS",
    tier_premium_desc: "VIP Lounge Access & Priority Express Delivery",
    tier_premium_price: "₩50,000",
    tier_premium_f1: "Up to 14 Days Unlimited Storage",
    tier_premium_f2: "Priority Express Airport Delivery",
    tier_premium_f3: "Shinsegae VIP Lounge Access (2 Pax)",
    tier_premium_f4: "10% Instant Brand Discount",
    tier_premium_f5: "Welcome Tea & Gourmet Treats",

    calc_title: "Smart Shopping Balance Calculator",
    calc_desc: "Input your intended shopping balance to discover your VIP membership tier and unlocked bonuses.",
    calc_label_amount: "Planned Shopping Balance:",
    calc_grade_label: "Unlocked Membership Tier:",
    calc_perk_label: "Complimentary Perks:",

    // Booking Form
    book_tag: "PRE-BOOKING & DIGITAL PASS",
    book_title: "Online Reservation & Digital Pass Issuance",
    book_subtitle: "Receive your stylish digital mobile pass instantly and enjoy seamless luxury benefits.",
    book_label_name: "Full Name (as on Passport)",
    book_placeholder_name: "e.g. QING QING WANG",
    book_label_country: "Country / Region",
    book_label_contact: "Email or Messenger ID",
    book_placeholder_contact: "e.g. guest@example.com",
    book_label_tier: "Select Pass Tier",
    book_label_date: "Expected Visit Date",
    book_label_airport: "Departure Airport Pickup",
    book_label_flight: "Flight Number (Optional)",
    book_placeholder_flight: "e.g. BR169 or CI161",
    book_label_time: "Departure Flight Time",
    book_label_charge: "Pre-charge Shopping Amount (KRW)",
    book_btn_submit: "Issue My Digital LUGGAGE PASS",
    book_btn_demo: "Load Demo Traveler Pass (Qing Qing)",

    // Digital Pass Card
    pass_title: "SHINSEGAE LUGGAGE PASS",
    pass_holder: "CARD HOLDER",
    pass_valid: "VALID THRU",
    pass_balance: "SHOPPING BALANCE",
    pass_pickup: "AIRPORT PICKUP",
    pass_weight: "SAVED WEIGHT",
    pass_btn_reset: "Reset Pass",
    pass_btn_print: "Save Pass / Print",

    // Shopping Simulator
    shop_tag: "VIRTUAL HANDS-FREE SHOPPING",
    shop_title: "Virtual Hands-Free Shopping Arena",
    shop_subtitle: "Pick popular Korean products and simulate a pass tag! Shinsegae handles the bags.",
    shop_btn_tag: "+ Tag & Buy with Pass",
    shop_cart_title: "My Hands-Free Shopping Items (Aggregating at Central Hub)",
    shop_cart_empty: "No items tagged yet. Try clicking '+ Tag & Buy with Pass' on the items above!",
    shop_total_spent: "Total Purchases:",
    shop_rem_balance: "Pass Remaining Balance:",
    shop_weight_saved: "Luggage Weight Relieved:",

    // Tracker
    track_tag: "REAL-TIME TRACKING",
    track_title: "Live Luggage & Purchase Tracker",
    track_subtitle: "Your suitcases and shopping bags are safely in transit to the departure terminal.",
    track_pass_label: "Active Pass Number:",
    track_step_1: "Stored at Welcome Center",
    track_step_1_desc: "Your luggage is checked in and safely stored at the Shinsegae Welcome Center.",
    track_step_2: "Aggregating Store Items",
    track_step_2_desc: "All purchases from department boutiques have been gathered at the central logistics hub.",
    track_step_3: "Direct Airport Transit",
    track_step_3_desc: "Our secured transport vehicle is en route to your specified departure airport.",
    track_step_4: "Arrived at Airport Desk",
    track_step_4_desc: "All items have arrived at the airport pickup counter and are awaiting your flight.",
    track_step_5: "Customer Pickup Complete",
    track_step_5_desc: "You have safely collected all luggage and shopping bags before boarding your flight.",
    track_btn_prev: "Previous Step",
    track_btn_next: "Next Step (Simulation)",

    // Guide
    guide_tag: "LOCATION & DESK GUIDE",
    guide_title: "Welcome Center & Airport Pickup Desks",
    guide_subtitle: "Collect your bags effortlessly at our designated airport desks before boarding.",
    guide_tab_main: "Shinsegae Main Welcome Center",
    guide_tab_icn1: "Incheon Airport T1",
    guide_tab_icn2: "Incheon Airport T2",
    guide_tab_gmp: "Gimpo Airport",
    guide_tab_pus: "Gimhae Airport",

    // FAQ
    faq_tag: "CUSTOMER SUPPORT",
    faq_title: "Frequently Asked Questions (FAQ)",
    faq_subtitle: "Everything you need to know about using LUGGAGE PASS.",
    faq_q1: "Q. Is there any size or weight limitation for luggage?",
    faq_a1: "A. Standard airline check-in sizes (up to 32kg and 28 inches) are fully supported for storage and direct airport delivery.",
    faq_q2: "Q. How early before flight departure can I pick up my bags?",
    faq_a2: "A. Bags arrive at the airport pickup counter at least 2 hours before your scheduled departure flight. 24/7 service is available at Incheon Airport.",
    faq_q3: "Q. Can I get a refund for unspent pre-charged balance?",
    faq_a3: "A. Yes, any remaining balance will be 100% refunded with zero fees back to your payment method at the Welcome Center or airport counter.",
    faq_q4: "Q. How is the Tax Refund handled?",
    faq_a4: "A. Passport information linked upon pass registration automatically applies immediate Tax Refund discounts during your pass-tag purchases.",

    // Footer
    footer_corp: "SHINSEGAE DEPARTMENT STORE",
    footer_copy: "© 2026 SHINSEGAE ALL RIGHTS RESERVED. LUGGAGE PASS CAMPAIGN TEAM.",
    footer_addr: "63 Sogong-ro, Jung-gu, Seoul, Republic of Korea (Main Store Concierge Desk)"
  },

  zh: {
    // Header & Nav
    nav_about: "服務介紹",
    nav_features: "四大核心價值",
    nav_media: "宣傳影像館",
    nav_pricing: "通行證方案",
    nav_shop: "虛擬購物體驗",
    nav_tracking: "即時行李追蹤",
    nav_guide: "領取指南",
    nav_my_pass: "查看我的通行證",
    nav_book_now: "立即預約",

    // Hero
    hero_badge: "新世界百貨 外國遊客專屬免提購物服務",
    hero_title: "買得盡興，行得輕盈",
    hero_subtitle: "Shop more. Carry less.",
    hero_desc: "您只管盡情購物，行李由新世界百貨直送機場！擺脫笨重行李箱與大包小包，暢遊首爾無負擔。",
    hero_btn_book: "立即預約通行證",
    hero_btn_video: "觀看宣傳短片 (50秒)",
    hero_stat_1_num: "0 kg",
    hero_stat_1_desc: "購物時雙手行李負擔",
    hero_stat_2_num: "100%",
    hero_stat_2_desc: "出境當日機場直送保證",
    hero_stat_3_num: "三大機場",
    hero_stat_3_desc: "仁川(T1/T2)·金浦·金海領取",

    // Pain Point
    pain_tag: "PROBLEM & SOLUTION",
    pain_title: "旅行中的購物，為什麼總是這麼累？",
    pain_subtitle: "想買的太多，能提的手太少。現在，一切將煥然一新。",
    pain_before_title: "過去負重購物的辛勞 (Before)",
    pain_before_1: "一出地鐵站就得拖著沉重的24吋行李箱寸步難行",
    pain_before_2: "購物袋愈積愈多，雙手不堪重負只能提早結束行程",
    pain_before_3: "每家店鋪都要翻找護照、排隊辦理退稅手續繁瑣",
    pain_before_4: "購物後滿手大包小包，精疲力竭地擠上機場快線",
    pain_after_title: "有了 LUGGAGE PASS 之後 (After)",
    pain_after_1: "抵達百貨即刻寄存行李！只需攜帶輕便小包優雅逛街",
    pain_after_2: "結帳時只需輕觸通行證卡片，戰利品自動送往中央物流中心",
    pain_after_3: "預儲值卡一鍵感應付款，自動綁定退稅免去繁瑣排隊",
    pain_after_4: "搭機前在機場專屬服務台，一次領取所有完好包裝的行李",

    // Features
    feat_tag: "CORE 4 PILLARS",
    feat_title: "一張通行證，搞定結帳到機場領取",
    feat_subtitle: "新世界百貨為您呈獻的全方位 (All-in-One) 尊榮禮賓購物體驗",
    feat_1_title: "PAY",
    feat_1_sub: "預先儲值 便捷支付",
    feat_1_desc: "全館專櫃一觸即付，自動關聯護照辦理即時退稅 (Tax Refund)。",
    feat_2_title: "COLLECT",
    feat_2_sub: "各櫃商品 自動集結",
    feat_2_desc: "購物時感應卡片即可，由專員為您悉心包裝並送至中央物流中心集結。",
    feat_3_title: "DELIVER",
    feat_3_sub: "安全直達 機場配送",
    feat_3_desc: "寄存的行李箱與當日戰利品，將準時直送仁川(T1/T2)、金浦或金海機場。",
    feat_4_title: "MEMBERSHIP",
    feat_4_sub: "尊享折扣 貴賓禮遇",
    feat_4_desc: "知名品牌享5~10%專屬折扣，免費進入外國人專屬貴賓室並享用迎賓茶點。",

    // Media Center
    media_tag: "OFFICIAL PROMOTION",
    media_title: "LUGGAGE PASS 官方宣傳中心",
    media_subtitle: "立即欣賞官方5張圖文卡、50秒直式Shorts影片及官方宣傳海報。",
    tab_cardnews: "圖文卡片 (5張)",
    tab_shorts: "50秒短片 (Shorts)",
    tab_poster: "官方宣傳海報",
    shorts_jump_1: "00:00 疲憊不堪的晴晴",
    shorts_jump_2: "00:15 發現 Luggage Pass",
    shorts_jump_3: "00:20 一卡通結帳與集結",
    shorts_jump_4: "00:27 機場專車直送服務",
    shorts_jump_5: "00:38 輕鬆愜意登機出境",

    // Pricing
    pricing_tag: "PASS TIERS & CALCULATOR",
    pricing_title: "選擇最適合您行程的通行證",
    pricing_subtitle: "從單日血拼到7天自由行，滿足各種旅行節奏。",
    tier_day_name: "DAY PASS",
    tier_day_desc: "專為單日集中購物的旅客設計",
    tier_day_price: "₩20,000",
    tier_day_f1: "單日行李寄存 1次",
    tier_day_f2: "專櫃戰利品自動集結",
    tier_day_f3: "機場標準直送服務",
    tier_day_f4: "百貨品牌 5% 折扣",

    tier_stay_name: "STAY PASS",
    tier_stay_badge: "★ 熱門推薦 BEST",
    tier_stay_desc: "訪韓中長期(最長7天)旅客首選",
    tier_stay_price: "₩35,000",
    tier_stay_f1: "7天內無限次行李寄存",
    tier_stay_f2: "專櫃戰利品無限次自動集結",
    tier_stay_f3: "機場直送服務 (指定出境日)",
    tier_stay_f4: "百貨品牌 7% 折扣",
    tier_stay_f5: "迎賓中心飲品兌換券 2張",

    tier_premium_name: "PREMIUM PASS",
    tier_premium_desc: "VIP尊榮貴賓室與特快配送頂級禮遇",
    tier_premium_price: "₩50,000",
    tier_premium_f1: "最長14天無限次行李寄存",
    tier_premium_f2: "優先特快 (Express) 機場配送",
    tier_premium_f3: "新世界 VIP貴賓室 2人入場券",
    tier_premium_f4: "百貨品牌 10% 現折優惠",
    tier_premium_f5: "迎賓尊榮名茶與精緻茶點禮盒",

    calc_title: "購物儲值金 禮遇計算機",
    calc_desc: "輸入您的預算金額，即時查看獲贈的會員等級與額外專屬禮品。",
    calc_label_amount: "預計購物儲值金額:",
    calc_grade_label: "達成會員等級:",
    calc_perk_label: "贈送尊榮禮遇:",

    // Booking Form
    book_tag: "PRE-BOOKING & DIGITAL PASS",
    book_title: "線上預約與電子通行證發行",
    book_subtitle: "填寫基本資料即可即時領取電子手機卡證，開啟免提購物體驗。",
    book_label_name: "英文姓名 (同護照拼音)",
    book_placeholder_name: "例：QING QING WANG",
    book_label_country: "國籍 / 地區",
    book_label_contact: "電子信箱或聯絡方式",
    book_placeholder_contact: "例：guest@example.com",
    book_label_tier: "選擇通行證等級",
    book_label_date: "預計到訪百貨日期",
    book_label_airport: "出境領取機場",
    book_label_flight: "出境航班代號 (選填)",
    book_placeholder_flight: "例：BR169 或 CI161",
    book_label_time: "預計班機起飛時間",
    book_label_charge: "預先儲值購物金 (韓元)",
    book_btn_submit: "發行我的 LUGGAGE PASS",
    book_btn_demo: "立即載入示範旅客(晴晴)的卡片",

    // Digital Pass Card
    pass_title: "SHINSEGAE LUGGAGE PASS",
    pass_holder: "持卡人 CARD HOLDER",
    pass_valid: "有效期限 VALID THRU",
    pass_balance: "購物可用餘額 BALANCE",
    pass_pickup: "機場領取處 PICKUP",
    pass_weight: "已免除行李負擔 SAVED",
    pass_btn_reset: "重設卡片",
    pass_btn_print: "保存卡片圖 / 列印",

    // Shopping Simulator
    shop_tag: "VIRTUAL HANDS-FREE SHOPPING",
    shop_title: "虛擬免提購物體驗館",
    shop_subtitle: "挑選心儀的韓國人氣商品，體驗感應卡片購買！行李交給百貨直送。",
    shop_btn_tag: "+ 感應卡片結帳",
    shop_cart_title: "我的免提戰利品清單 (中央物流中心集結中)",
    shop_cart_empty: "尚未感應任何商品，快點擊上方專櫃商品進行體驗吧！",
    shop_total_spent: "累計購物結帳額:",
    shop_rem_balance: "通行證剩餘儲值金:",
    shop_weight_saved: "減輕的行李總重量:",

    // Tracker
    track_tag: "REAL-TIME TRACKING",
    track_title: "即時行李與戰利品追蹤",
    track_subtitle: "您的行李與購物戰利品正安全運送往機場服務台。",
    track_pass_label: "當前追蹤證號:",
    track_step_1: "迎賓中心入庫完成",
    track_step_1_desc: "您的行李箱已在新世界百貨迎賓中心完成入庫，正接受妥善保管。",
    track_step_2: "專櫃戰利品集結中",
    track_step_2_desc: "您在各個專櫃所感應購買的商品已全數安全送達中央物流中心。",
    track_step_3: "機場專車直達運送",
    track_step_3_desc: "專屬保全物流車輛已啟程，正前往您所指定的出境航廈服務台。",
    track_step_4: "抵達機場服務台",
    track_step_4_desc: "所有行李與購物袋已整齊抵達航廈領取櫃檯，靜候您的到來。",
    track_step_5: "旅客領取完成",
    track_step_5_desc: "您已在起飛前順利領取全部行李與戰利品，祝您旅途愉快！",
    track_btn_prev: "上一步",
    track_btn_next: "下一步 (模擬演示)",

    // Guide
    guide_tag: "LOCATION & DESK GUIDE",
    guide_title: "迎賓中心及各機場領取櫃檯指南",
    guide_subtitle: "出境當天登機前，於機場指定專屬櫃檯輕鬆領回所有行李。",
    guide_tab_main: "新世界本店 迎賓中心",
    guide_tab_icn1: "仁川機場 第一航廈",
    guide_tab_icn2: "仁川機場 第二航廈",
    guide_tab_gmp: "金浦國際機場",
    guide_tab_pus: "金海國際機場",

    // FAQ
    faq_tag: "CUSTOMER SUPPORT",
    faq_title: "常見問題解答 (FAQ)",
    faq_subtitle: "為您解答使用 LUGGAGE PASS 的一切疑問。",
    faq_q1: "Q. 行李箱的尺寸或重量有限制嗎？",
    faq_a1: "A. 符合一般航空公司託運標準(最大32公斤、28吋以下)的行李箱均可安全寄存與配送。",
    faq_q2: "Q. 購物後最晚何時能在機場領取行李？",
    faq_a2: "A. 行李會在您班機起飛前至少2小時送達機場櫃檯。仁川機場提供24小時全年無休領取服務。",
    faq_q3: "Q. 預先儲值的餘額沒用完可以退款嗎？",
    faq_a3: "A. 可以！結束行程後，未使用的儲值金可於百貨迎賓中心或機場櫃檯原路全額免手續費退還。",
    faq_q4: "Q. 退稅 (Tax Refund) 如何處理？",
    faq_a4: "A. 預約通行證時綁定護照資訊，結帳感應卡片時即可享受即時免稅優惠，無需重複繁瑣手續。",

    // Footer
    footer_corp: "新世界百貨 (SHINSEGAE DEPARTMENT STORE)",
    footer_copy: "© 2026 SHINSEGAE ALL RIGHTS RESERVED. LUGGAGE PASS CAMPAIGN TEAM.",
    footer_addr: "首爾特別市中區小公路63 新世界百貨總店 禮賓服務台"
  },

  ja: {
    // Header & Nav
    nav_about: "サービス紹介",
    nav_features: "4大特徴",
    nav_media: "プロモーション",
    nav_pricing: "パス料金プラン",
    nav_shop: "バーチャル体験",
    nav_tracking: "手荷物追跡",
    nav_guide: "受取場所案内",
    nav_my_pass: "マイパス確認",
    nav_book_now: "今すぐ予約",

    // Hero
    hero_badge: "新世界百貨店 訪韓外国人専用ハンズフリーショッピング",
    hero_title: "ショッピングをもっと楽しく、手荷物はもっと軽く",
    hero_subtitle: "Shop more. Carry less.",
    hero_desc: "お買い物は思いっきり、空港への手荷物配送は新世界百貨店におまかせ。重いスーツケースや紙袋を持たずに、身軽で快適なソウル旅行をお楽しみください。",
    hero_btn_book: "パスを事前予約する",
    hero_btn_video: "プロモーション動画を見る (50秒)",
    hero_stat_1_num: "0 kg",
    hero_stat_1_desc: "ショッピング中の荷物の重さ",
    hero_stat_2_num: "100%",
    hero_stat_2_desc: "出国当日の空港直送を完全保証",
    hero_stat_3_num: "3大空港対応",
    hero_stat_3_desc: "仁川(T1/T2)・金浦・金海空港で受取",

    // Pain Point
    pain_tag: "PROBLEM & SOLUTION",
    pain_title: "旅行中のショッピング、なぜこんなに疲れるの？",
    pain_subtitle: "買いたい物はたくさんあるのに、持てる手は2つだけ。そんな悩みを解決します。",
    pain_before_title: "これまでの重いショッピング (Before)",
    pain_before_1: "地下鉄を降りてから重い24インチのスーツケースを引きずり移動",
    pain_before_2: "増え続けるショッパーで手が塞がり、途中でホテルに戻ることに",
    pain_before_3: "お会計ごとにパスポート提示＆事後免税カウンターに並ぶ手間",
    pain_before_4: "ショッピング後、大量の荷物を抱えて疲労困憊で空港鉄道に乗車",
    pain_after_title: "LUGGAGE PASSを利用すると (After)",
    pain_after_1: "百貨店到着後すぐスーツケースをお預け！小さなバッグ1つで入場",
    pain_after_2: "店頭でパスをタッチするだけで、購入品は自動的に物流センターへ集結",
    pain_after_3: "事前チャージ型ワンタッチ決済＆免税(Tax Refund)も自動連携",
    pain_after_4: "出国当日、空港の専用カウンターで綺麗に梱包された荷物を一括受取",

    // Features
    feat_tag: "CORE 4 PILLARS",
    feat_title: "パス1枚で決済から空港受取まで完結",
    feat_subtitle: "新世界百貨店がお届けするAll-in-Oneコンシェルジュショッピング",
    feat_1_title: "PAY",
    feat_1_sub: "事前チャージ型スマート決済",
    feat_1_desc: "全館でワンタッチ決済可能。パスポート連携によりTax Refundも自動適用されます。",
    feat_2_title: "COLLECT",
    feat_2_sub: "店舗別購入品の自動集結",
    feat_2_desc: "お会計時にパスをかざすだけ。スタッフが丁寧にパッキングし、中央物流センターへ集結します。",
    feat_3_title: "DELIVER",
    feat_3_sub: "安心の空港ダイレクト配送",
    feat_3_desc: "お預かりしたスーツケースと購入品を、仁川(T1/T2)・金浦・金海空港の専用デスクへ直送します。",
    feat_4_title: "MEMBERSHIP",
    feat_4_sub: "優待割引＆ラウンジ特典",
    feat_4_desc: "人気ブランド5〜10%即時割引、外国人専用ウェルカムラウンジの無料利用とお茶・お菓子を提供。",

    // Media Center
    media_tag: "OFFICIAL PROMOTION",
    media_title: "LUGGAGE PASS 公式メディア館",
    media_subtitle: "公式カードニュース、50秒ショート動画、ポスターをご覧ください。",
    tab_cardnews: "カードニュース (5カット)",
    tab_shorts: "ショート動画 (50秒)",
    tab_poster: "公式ポスター",
    shorts_jump_1: "00:00 荷物に疲れたチンチン",
    shorts_jump_2: "00:15 ラゲッジパスを発見",
    shorts_jump_3: "00:20 タッチ決済＆自動集結",
    shorts_jump_4: "00:27 空港への直送案内",
    shorts_jump_5: "00:38 身軽なフライトへ出発",

    // Pricing
    pricing_tag: "PASS TIERS & CALCULATOR",
    pricing_title: "旅行プランに合わせた最適なパスを選択",
    pricing_subtitle: "1日の集中ショッピングから7日間のゆったりソウル滞在まで。",
    tier_day_name: "DAY PASS",
    tier_day_desc: "1日集中ショッピングを楽しみたい方向け",
    tier_day_price: "₩20,000",
    tier_day_f1: "当日スーツケース保管 1回",
    tier_day_f2: "店舗購入品の自動集結",
    tier_day_f3: "空港一般直送配送",
    tier_day_f4: "百貨店ブランド 5% 割引",

    tier_stay_name: "STAY PASS",
    tier_stay_badge: "★ 一番人気 BEST",
    tier_stay_desc: "3〜7日間の滞在旅行者に一番のおすすめ",
    tier_stay_price: "₩35,000",
    tier_stay_f1: "7日間スーツケース保管が無制限",
    tier_stay_f2: "店舗購入品の自動集結が無制限",
    tier_stay_f3: "空港直送配送 (出国日指定)",
    tier_stay_f4: "百貨店ブランド 7% 割引",
    tier_stay_f5: "ウェルカムドリンク引換券 2枚",

    tier_premium_name: "PREMIUM PASS",
    tier_premium_desc: "VIPラウンジと特急優先配送の最上級プラン",
    tier_premium_price: "₩50,000",
    tier_premium_f1: "最大14日間保管が無制限",
    tier_premium_f2: "特急優先(Express)空港配送",
    tier_premium_f3: "新世界VIPラウンジ入場券 (2名様)",
    tier_premium_f4: "百貨店ブランド 10% 即時割引",
    tier_premium_f5: "特製ウェルカムティー＆銘菓プレゼント",

    calc_title: "ショッピングチャージ特典シミュレーター",
    calc_desc: "予定ショッピング金額を入力すると、獲得できるメンバーシップ特典を瞬時に確認できます。",
    calc_label_amount: "お買い物チャージ予定額:",
    calc_grade_label: "達成会員ランク:",
    calc_perk_label: "プレゼント特典:",

    // Booking Form
    book_tag: "PRE-BOOKING & DIGITAL PASS",
    book_title: "オンライン事前予約＆デジタルパス発行",
    book_subtitle: "簡単入力ですぐにデジタルパスを発行。快適なショッピングをお楽しみください。",
    book_label_name: "ローマ字氏名 (パスポート表記)",
    book_placeholder_name: "例: QING QING WANG",
    book_label_country: "国籍 / 地域",
    book_label_contact: "メールアドレスまたは連絡先",
    book_placeholder_contact: "例: guest@example.com",
    book_label_tier: "パス種類の選択",
    book_label_date: "百貨店ご来店予定日",
    book_label_airport: "出国受取空港",
    book_label_flight: "便名 (任意)",
    book_placeholder_flight: "例: BR169 または CI161",
    book_label_time: "出国便出発予定時刻",
    book_label_charge: "事前チャージ希望額 (KRW)",
    book_btn_submit: "デジタル LUGGAGE PASS を発行する",
    book_btn_demo: "体験用サンプルパス(チンチン様)を読み込む",

    // Digital Pass Card
    pass_title: "SHINSEGAE LUGGAGE PASS",
    pass_holder: "CARD HOLDER",
    pass_valid: "VALID THRU",
    pass_balance: "チャージ残高 BALANCE",
    pass_pickup: "受取空港 PICKUP",
    pass_weight: "軽減された荷物の重さ",
    pass_btn_reset: "パス初期化",
    pass_btn_print: "パス画像を保存 / 印刷",

    // Shopping Simulator
    shop_tag: "VIRTUAL HANDS-FREE SHOPPING",
    shop_title: "バーチャル ハンズフリーショッピング体験",
    shop_subtitle: "人気商品を選んでパスタッチを体験！荷物は百貨店が空港へお届けします。",
    shop_btn_tag: "+ パスでタッチ決済",
    shop_cart_title: "ハンズフリー購入品リスト (中央物流センターに集結中)",
    shop_cart_empty: "まだタッチした商品がありません。上の商品で体験してみましょう！",
    shop_total_spent: "ショッピング合計額:",
    shop_rem_balance: "パス残高:",
    shop_weight_saved: "減らした手荷物の重さ:",

    // Tracker
    track_tag: "REAL-TIME TRACKING",
    track_title: "リアルタイム手荷物配送追跡",
    track_subtitle: "スーツケースとお買い物袋が空港へ安全に移動中です。",
    track_pass_label: "照会パス番号:",
    track_step_1: "ウェルカムセンター保管完了",
    track_step_1_desc: "お客様のスーツケースがウェルカムセンターに入庫され、安全に保管されています。",
    track_step_2: "店舗購入品を集結中",
    track_step_2_desc: "お買い物された全店舗の商品が中央物流センターに安全に集結されました。",
    track_step_3: "空港直送専用車で移動中",
    track_step_3_desc: "セキュリティ車両が指定空港の出国カウンターへ向けて出発しました。",
    track_step_4: "空港カウンター到着完了",
    track_step_4_desc: "出国ロビーの受取カウンターに全ての荷物が到着し、お客様をお待ちしています。",
    track_step_5: "お客様受取完了",
    track_step_5_desc: "ご搭乗前にすべての手荷物をお引き取りいただきました。良い旅を！",
    track_btn_prev: "前のステップ",
    track_btn_next: "次のステップ (シミュレーション)",

    // Guide
    guide_tag: "LOCATION & DESK GUIDE",
    guide_title: "ウェルカムセンターおよび空港受取デスク案内",
    guide_subtitle: "出国当日、搭乗前に指定空港カウンターでスムーズにお受け取りください。",
    guide_tab_main: "新世界本店 ウェルカムセンター",
    guide_tab_icn1: "仁川空港 第1ターミナル",
    guide_tab_icn2: "仁川空港 第2ターミナル",
    guide_tab_gmp: "金浦国際空港",
    guide_tab_pus: "金海国際空港",

    // FAQ
    faq_tag: "CUSTOMER SUPPORT",
    faq_title: "よくあるご質問 (FAQ)",
    faq_subtitle: "LUGGAGE PASSのご利用に関する疑問にお答えします。",
    faq_q1: "Q. スーツケースのサイズや重さに制限はありますか？",
    faq_a1: "A. 一般的な航空会社の受託手荷物サイズ(最大32kg、28インチ以下)であればすべて安全にお預かりおよび空港配送が可能です。",
    faq_q2: "Q. 空港では出発の何時間前までに受け取れますか？",
    faq_a2: "A. ご搭乗便の出発2時間前までに必ず空港受取カウンターに到着しています。仁川空港では24時間年中無休で対応しております。",
    faq_q3: "Q. チャージして余った残高は返金できますか？",
    faq_a3: "A. はい。未使用のチャージ残高は、ウェルカムセンターまたは空港カウンターにて手数料無料で全額返金いたします。",
    faq_q4: "Q. 免税(Tax Refund)はどのように処理されますか？",
    faq_a4: "A. パス登録時にパスポート情報が連携されるため、店舗でパスタッチ決済を行うだけで即時免税が自動適用されます。",

    // Footer
    footer_corp: "新世界百貨店 (SHINSEGAE DEPARTMENT STORE)",
    footer_copy: "© 2026 SHINSEGAE ALL RIGHTS RESERVED. LUGGAGE PASS CAMPAIGN TEAM.",
    footer_addr: "ソウル特別市中区小公路63 新世界百貨店本店 コンシェルジュデスク"
  }
};

const I18nManager = {
  currentLang: 'ko',

  init() {
    const saved = window.StorageManager ? window.StorageManager.getLanguage() : 'ko';
    this.setLanguage(saved);
  },

  setLanguage(lang) {
    if (!I18N_DICTIONARY[lang]) lang = 'ko';
    this.currentLang = lang;
    if (window.StorageManager) {
      window.StorageManager.setLanguage(lang);
    }
    this.applyTranslations();
    this.updateActiveLanguageButtons();
  },

  getText(key) {
    const dict = I18N_DICTIONARY[this.currentLang] || I18N_DICTIONARY.ko;
    return dict[key] || I18N_DICTIONARY.ko[key] || key;
  },

  applyTranslations() {
    // Translate textContent
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = this.getText(key);
      if (text) {
        el.textContent = text;
      }
    });

    // Translate placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const text = this.getText(key);
      if (text) {
        el.setAttribute('placeholder', text);
      }
    });

    // Update document title and html lang attribute
    document.documentElement.lang = this.currentLang;
  },

  updateActiveLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const targetLang = btn.getAttribute('data-lang');
      if (targetLang === this.currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
};

window.I18nManager = I18nManager;
window.I18N_DICTIONARY = I18N_DICTIONARY;
