/**
 * LUGGAGE PASS - LocalStorage State Manager
 * Handles client-side persistent storage without external database.
 */

const STORAGE_KEYS = {
  LANGUAGE: 'luggage_pass_lang',
  RESERVATION: 'luggage_pass_reserve',
  ACTIVE_PASS: 'luggage_pass_card',
  TAGGED_ITEMS: 'luggage_pass_cart',
  DELIVERY_STEP: 'luggage_pass_step'
};

// Default Demo Pass Data (Matches Persona '칭칭' - Qing Qing, Taipei)
const DEFAULT_DEMO_PASS = {
  passId: 'LP-2026-9238',
  tier: 'STAY',
  tierName: 'STAY PASS (7-Day)',
  holderName: 'Qing Qing',
  country: 'Taiwan',
  contact: 'qing28@taipei.tw',
  visitDate: '2026-09-25',
  airport: 'ICN_T1',
  airportName: 'Incheon Airport Terminal 1 (ICN T1)',
  flightNo: 'BR169',
  departureTime: '2026-09-25 18:30',
  prechargeAmount: 500000,
  balance: 500000,
  membershipLevel: 'GOLD',
  perks: ['7-Day Repeat Luggage Storage', 'Free Airport Express Delivery', 'Shinsegae 5~10% Brand Discount'],
  savedWeightKg: 0,
  issuedAt: new Date().toISOString(),
  status: 'ACTIVE'
};

const StorageManager = {
  // --- Language ---
  getLanguage() {
    return localStorage.getItem(STORAGE_KEYS.LANGUAGE) || 'ko';
  },
  setLanguage(lang) {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
    window.dispatchEvent(new CustomEvent('lp_language_changed', { detail: { lang } }));
  },

  // --- Active Pass ---
  getActivePass() {
    const raw = localStorage.getItem(STORAGE_KEYS.ACTIVE_PASS);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch (e) {
      console.error('Failed to parse active pass', e);
      return null;
    }
  },
  saveActivePass(passData) {
    localStorage.setItem(STORAGE_KEYS.ACTIVE_PASS, JSON.stringify(passData));
    window.dispatchEvent(new CustomEvent('lp_pass_updated', { detail: { pass: passData } }));
  },
  clearActivePass() {
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_PASS);
    window.dispatchEvent(new CustomEvent('lp_pass_updated', { detail: { pass: null } }));
  },
  loadDemoPass() {
    this.saveActivePass(DEFAULT_DEMO_PASS);
    this.setDeliveryStep(2);
    return DEFAULT_DEMO_PASS;
  },

  // --- Tagged Shopping Items (Cart) ---
  getTaggedItems() {
    const raw = localStorage.getItem(STORAGE_KEYS.TAGGED_ITEMS);
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch (e) {
      return [];
    }
  },
  saveTaggedItems(items) {
    localStorage.setItem(STORAGE_KEYS.TAGGED_ITEMS, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('lp_cart_updated', { detail: { items } }));
  },
  addTaggedItem(item) {
    const items = this.getTaggedItems();
    items.unshift({
      ...item,
      id: 'tag_' + Date.now(),
      taggedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    this.saveTaggedItems(items);

    // Deduct balance from active pass if available
    const pass = this.getActivePass();
    if (pass) {
      pass.balance = Math.max(0, (pass.balance || 0) - item.price);
      pass.savedWeightKg = Number(((pass.savedWeightKg || 0) + (item.weight || 0.5)).toFixed(1));
      this.saveActivePass(pass);
    }
    return items;
  },
  removeTaggedItem(itemId) {
    const items = this.getTaggedItems().filter(i => i.id !== itemId);
    this.saveTaggedItems(items);
  },
  clearTaggedItems() {
    localStorage.removeItem(STORAGE_KEYS.TAGGED_ITEMS);
    window.dispatchEvent(new CustomEvent('lp_cart_updated', { detail: { items: [] } }));
  },

  // --- Delivery Tracking Step (1 to 5) ---
  getDeliveryStep() {
    const step = parseInt(localStorage.getItem(STORAGE_KEYS.DELIVERY_STEP), 10);
    return isNaN(step) ? 1 : step;
  },
  setDeliveryStep(step) {
    const clamped = Math.max(1, Math.min(5, step));
    localStorage.setItem(STORAGE_KEYS.DELIVERY_STEP, clamped.toString());
    window.dispatchEvent(new CustomEvent('lp_step_updated', { detail: { step: clamped } }));
    return clamped;
  },

  // --- Global Reset ---
  resetAll() {
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_PASS);
    localStorage.removeItem(STORAGE_KEYS.TAGGED_ITEMS);
    localStorage.removeItem(STORAGE_KEYS.DELIVERY_STEP);
    window.dispatchEvent(new CustomEvent('lp_pass_updated', { detail: { pass: null } }));
    window.dispatchEvent(new CustomEvent('lp_cart_updated', { detail: { items: [] } }));
    window.dispatchEvent(new CustomEvent('lp_step_updated', { detail: { step: 1 } }));
  }
};

window.StorageManager = StorageManager;
