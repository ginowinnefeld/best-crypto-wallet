// =============================================================================
// CRYPTOGUIDE INTERACTIVE FEATURES
// Modern crypto personal finance platform
// =============================================================================

// Application State
const AppState = {
  theme: 'light',
  language: 'es',
  currency: 'eur',
  currentCards: []
};

// Translations
const translations = {
  es: {
    pageTitle: 'Mejores Tarjetas Cripto España 2024 - CryptoGuide',
    heroTitle: 'Mejores Tarjetas Cripto de España 2024',
    heroSubtitle: 'Dinero cripto, simplificado.',
    heroDescription: 'Compara tarjetas de débito y crédito cripto para obtener recompensas en tus gastos diarios. Encuentra la tarjeta perfecta para tu viaje cripto.',
    compareCTA: 'Ver Mejores Tarjetas',
    methodologyCTA: 'Metodología',
    filtersTitle: 'Encuentra Tu Tarjeta Cripto Perfecta',
    cardType: 'Tipo de Tarjeta',
    rewardType: 'Tipo de Recompensa',
    annualFee: 'Cuota Anual',
    allTypes: 'Todos los Tipos',
    debitCards: 'Tarjetas Débito Cripto',
    creditCards: 'Tarjetas Crédito Cripto',
    allRewards: 'Todas las Recompensas',
    bitcoinRewards: 'Recompensas Bitcoin',
    cashback: 'Devolución Efectivo',
    cryptoRewards: 'Recompensas Cripto',
    anyFee: 'Cualquier Cuota',
    noFee: 'Sin Cuota Anual',
    lowFee: 'Menos de €100',
    applyNow: 'Solicitar Ahora',
    learnMore: 'Ver Detalles',
    sponsored: 'Patrocinado',
    euDisclaimer: 'Los criptoactivos son altamente volátiles y no están regulados en algunos países de la UE. No hay protección al consumidor. Pueden aplicarse impuestos sobre las ganancias.'
  },
  en: {
    pageTitle: 'Best Crypto Cards Spain 2024 - CryptoGuide',
    heroTitle: 'Best Crypto Cards of Spain 2024',
    heroSubtitle: 'Crypto money, made simple.',
    heroDescription: 'Compare crypto debit and credit cards to earn rewards on your everyday spending. Find the perfect card for your crypto journey.',
    compareCTA: 'View Best Cards',
    methodologyCTA: 'Methodology',
    filtersTitle: 'Find Your Perfect Crypto Card',
    cardType: 'Card Type',
    rewardType: 'Reward Type',
    annualFee: 'Annual Fee',
    allTypes: 'All Types',
    debitCards: 'Crypto Debit Cards',
    creditCards: 'Crypto Credit Cards',
    allRewards: 'All Rewards',
    bitcoinRewards: 'Bitcoin Rewards',
    cashback: 'Cash Back',
    cryptoRewards: 'Crypto Rewards',
    anyFee: 'Any Fee',
    noFee: 'No Annual Fee',
    lowFee: 'Under $100',
    applyNow: 'Apply Now',
    learnMore: 'See Details',
    sponsored: 'Sponsored',
    euDisclaimer: 'Cryptoassets are highly volatile and unregulated in some EU countries. No consumer protection. Tax on profits may apply.'
  }
};

// Crypto Cards Data with enhanced structure
const cryptoCards = [
  {
    id: 1,
    name: 'Coinbase Card',
    subtitle: 'Visa Debit Card',
    type: 'debit',
    rewardType: 'crypto',
    annualFee: { eur: 0, usd: 0 },
    rating: 4.5,
    reviews: 2847,
    logo: 'CB',
    score: 88,
    highlights: {
      es: [
        'Hasta 4% recompensas cripto',
        'Sin cuota anual',
        'Asegurado FDIC',
        'Conversión cripto en tiempo real'
      ],
      en: [
        'Up to 4% crypto rewards',
        'No annual fee',
        'FDIC insured',
        'Real-time crypto conversion'
      ]
    },
    rewardText: {
      es: 'Hasta 4% en recompensas cripto',
      en: 'Up to 4% in crypto rewards'
    },
    features: {
      fee: { eur: '€0', usd: '$0' },
      cashback: '4%',
      bonus: { es: 'Ninguno', en: 'None' }
    },
    badge: 'featured',
    affiliate: true
  },
  {
    id: 2,
    name: 'Crypto.com Visa Card',
    subtitle: 'Metal Debit Card',
    type: 'debit',
    rewardType: 'cashback',
    annualFee: { eur: 0, usd: 0 },
    rating: 4.3,
    reviews: 1923,
    logo: 'CDC',
    score: 92,
    highlights: {
      es: [
        'Hasta 8% devolución',
        'Reembolsos Netflix y Spotify',
        'Acceso a salas VIP aeropuertos',
        'Recompensas staking CRO'
      ],
      en: [
        'Up to 8% cashback',
        'Netflix & Spotify rebates',
        'Airport lounge access',
        'CRO staking rewards'
      ]
    },
    rewardText: {
      es: 'Hasta 8% devolución con staking CRO',
      en: 'Up to 8% cashback with CRO staking'
    },
    features: {
      fee: { eur: '€0', usd: '$0' },
      cashback: '8%',
      bonus: { es: '€50', en: '$50' }
    },
    badge: 'new',
    affiliate: true
  },
  {
    id: 3,
    name: 'BlockFi Rewards Card',
    subtitle: 'Bitcoin Credit Card',
    type: 'credit',
    rewardType: 'bitcoin',
    annualFee: { eur: 0, usd: 0 },
    rating: 4.1,
    reviews: 1156,
    logo: 'BF',
    score: 76,
    highlights: {
      es: [
        '1.5% recompensas bitcoin',
        'Sin cuota anual',
        'Tasas APR estándar',
        'Gestión app móvil'
      ],
      en: [
        '1.5% bitcoin rewards',
        'No annual fee',
        'Standard APR rates',
        'Mobile app management'
      ]
    },
    rewardText: {
      es: '1.5% de vuelta en Bitcoin en todas las compras',
      en: '1.5% back in Bitcoin on all purchases'
    },
    features: {
      fee: { eur: '€0', usd: '$0' },
      cashback: '1.5%',
      bonus: { es: '€100', en: '$100' }
    },
    affiliate: true
  },
  {
    id: 4,
    name: 'Gemini Credit Card',
    subtitle: 'Mastercard Credit Card',
    type: 'credit',
    rewardType: 'crypto',
    annualFee: { eur: 0, usd: 0 },
    rating: 4.2,
    reviews: 892,
    logo: 'GM',
    score: 81,
    highlights: {
      es: [
        'Hasta 3% recompensas cripto',
        'Canje en tiempo real',
        'Sin tarifas transacciones extranjeras',
        'Enfocado en seguridad'
      ],
      en: [
        'Up to 3% crypto rewards',
        'Real-time redemption',
        'No foreign transaction fees',
        'Security-focused'
      ]
    },
    rewardText: {
      es: 'Hasta 3% de vuelta en cripto',
      en: 'Up to 3% back in crypto'
    },
    features: {
      fee: { eur: '€0', usd: '$0' },
      cashback: '3%',
      bonus: { es: '€50', en: '$50' }
    },
    affiliate: false
  },
  {
    id: 5,
    name: 'BitPay Card',
    subtitle: 'Prepaid Mastercard',
    type: 'debit',
    rewardType: 'cashback',
    annualFee: { eur: 9.95, usd: 9.95 },
    rating: 3.9,
    reviews: 743,
    logo: 'BP',
    score: 68,
    highlights: {
      es: [
        'Convierte cripto a EUR/USD',
        'Soporte múltiples criptos',
        'Tarjetas física y virtual',
        'Gasto directo cripto'
      ],
      en: [
        'Convert crypto to USD/EUR',
        'Multiple crypto support',
        'Physical & virtual cards',
        'Direct crypto spending'
      ]
    },
    rewardText: {
      es: 'Gasta cripto directamente con conversión',
      en: 'Spend crypto directly with conversion'
    },
    features: {
      fee: { eur: '€9.95', usd: '$9.95' },
      cashback: '0%',
      bonus: { es: 'Ninguno', en: 'None' }
    },
    affiliate: true
  },
  {
    id: 6,
    name: 'Nexo Card',
    subtitle: 'Premium Metal Card',
    type: 'debit',
    rewardType: 'cashback',
    annualFee: { eur: 0, usd: 0 },
    rating: 4.4,
    reviews: 1384,
    logo: 'NX',
    score: 85,
    highlights: {
      es: [
        'Hasta 2% devolución',
        'Sin comisiones con tokens NEXO',
        'Gastos respaldados por cripto',
        'Soporte premium'
      ],
      en: [
        'Up to 2% cashback',
        'No fees with NEXO tokens',
        'Crypto-backed spending',
        'Premium support'
      ]
    },
    rewardText: {
      es: 'Hasta 2% devolución en cripto',
      en: 'Up to 2% cashback in crypto'
    },
    features: {
      fee: { eur: '€0', usd: '$0' },
      cashback: '2%',
      bonus: { es: '€25', en: '$25' }
    },
    affiliate: false
  }
];

// DOM Elements
let cardsContainer, cardTypeFilter, rewardTypeFilter, annualFeeFilter;
let themeToggle, langBtns, currencyBtns, navToggle, navMenu;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  try {
    initializeDOMElements();
    initializeTheme();
    initializeLanguage();
    initializeCurrency();
    setupEventListeners();
    renderCards(cryptoCards);
    updateUI();
  } catch (error) {
    console.error('Error initializing application:', error);
  }
});

// Initialize DOM elements with error handling
function initializeDOMElements() {
  cardsContainer = document.getElementById('cards-container');
  cardTypeFilter = document.getElementById('card-type');
  rewardTypeFilter = document.getElementById('reward-type');
  annualFeeFilter = document.getElementById('annual-fee');
  themeToggle = document.querySelector('.theme-toggle');
  langBtns = document.querySelectorAll('.lang-btn');
  currencyBtns = document.querySelectorAll('.currency-btn');
  navToggle = document.querySelector('.nav-toggle');
  navMenu = document.querySelector('.nav-menu');
  
  if (!cardsContainer) {
    throw new Error('Cards container not found');
  }
  
  return true;
}

// Theme Management
function initializeTheme() {
  const savedTheme = localStorage.getItem('cryptoguide-theme') || 'light';
  setTheme(savedTheme);
}

function setTheme(theme) {
  AppState.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('cryptoguide-theme', theme);
}

function toggleTheme() {
  const newTheme = AppState.theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

// Language Management
function initializeLanguage() {
  const savedLang = localStorage.getItem('cryptoguide-language') || 'es';
  setLanguage(savedLang);
}

function setLanguage(lang) {
  AppState.language = lang;
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('cryptoguide-language', lang);
  updateLanguageButtons();
  updatePageContent();
}

function updateLanguageButtons() {
  langBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === AppState.language);
  });
}

function updatePageContent() {
  const t = translations[AppState.language];
  
  // Update page title
  document.title = t.pageTitle;
  
  // Update hero content
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroDescription = document.querySelector('.hero-description');
  
  if (heroTitle) heroTitle.textContent = t.heroTitle;
  if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
  if (heroDescription) heroDescription.textContent = t.heroDescription;
  
  // Update buttons
  const compareCTA = document.querySelector('.hero-actions .btn-primary');
  const methodologyCTA = document.querySelector('.hero-actions .btn-secondary');
  
  if (compareCTA) compareCTA.textContent = t.compareCTA;
  if (methodologyCTA) methodologyCTA.textContent = t.methodologyCTA;
  
  // Update filters
  const filtersTitle = document.querySelector('.filters-header h2');
  if (filtersTitle) filtersTitle.textContent = t.filtersTitle;
  
  updateFilterOptions();
  
  // Update disclaimer
  const disclaimerText = document.querySelector('.disclaimer-content p');
  if (disclaimerText) disclaimerText.textContent = t.euDisclaimer;
  
  // Re-render cards to update language-specific content
  renderCards(AppState.currentCards.length ? AppState.currentCards : cryptoCards);
}

function updateFilterOptions() {
  const t = translations[AppState.language];
  
  // Card type filter
  if (cardTypeFilter) {
    const options = cardTypeFilter.options;
    options[0].textContent = t.allTypes;
    options[1].textContent = t.debitCards;
    options[2].textContent = t.creditCards;
  }
  
  // Reward type filter
  if (rewardTypeFilter) {
    const options = rewardTypeFilter.options;
    options[0].textContent = t.allRewards;
    options[1].textContent = t.bitcoinRewards;
    options[2].textContent = t.cashback;
    options[3].textContent = t.cryptoRewards;
  }
  
  // Annual fee filter
  if (annualFeeFilter) {
    const options = annualFeeFilter.options;
    options[0].textContent = t.anyFee;
    options[1].textContent = t.noFee;
    if (AppState.currency === 'eur') {
      options[2].textContent = 'Menos de €100';
    } else {
      options[2].textContent = 'Under $100';
    }
  }
}

// Currency Management
function initializeCurrency() {
  const savedCurrency = localStorage.getItem('cryptoguide-currency') || 'eur';
  setCurrency(savedCurrency);
}

function setCurrency(currency) {
  AppState.currency = currency;
  localStorage.setItem('cryptoguide-currency', currency);
  updateCurrencyButtons();
  updateFilterOptions();
  renderCards(AppState.currentCards.length ? AppState.currentCards : cryptoCards);
}

function updateCurrencyButtons() {
  currencyBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.currency === AppState.currency);
  });
}

// Event Listeners
function setupEventListeners() {
  // Theme toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Language toggle
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      setLanguage(e.target.dataset.lang);
    });
  });
  
  // Currency toggle
  currencyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      setCurrency(e.target.dataset.currency);
    });
  });
  
  // Filters
  [cardTypeFilter, rewardTypeFilter, annualFeeFilter].forEach(filter => {
    if (filter) {
      filter.addEventListener('change', applyFilters);
    }
  });
  
  // Mobile navigation
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', toggleMobileNav);
    
    // Close mobile menu when clicking on links
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });
  }
  
  // Smooth scrolling
  setupSmoothScrolling();
}

// Mobile Navigation
function toggleMobileNav() {
  const isActive = navMenu.classList.contains('active');
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', !isActive);
}

function closeMobileNav() {
  navMenu.classList.remove('active');
  navToggle.classList.remove('active');
  navToggle.setAttribute('aria-expanded', 'false');
}

// Card Rendering
function renderCards(cards) {
  if (!cardsContainer) return;
  
  AppState.currentCards = cards;
  cardsContainer.innerHTML = '';
  
  if (!Array.isArray(cards) || cards.length === 0) {
    renderNoResults();
    return;
  }
  
  cards.forEach((card, index) => {
    try {
      const cardElement = createProductCard(card);
      cardsContainer.appendChild(cardElement);
      
      // Add staggered animation
      setTimeout(() => {
        cardElement.classList.add('fade-in');
      }, index * 100);
    } catch (error) {
      console.error(`Error creating card ${card.id}:`, error);
    }
  });
}

function createProductCard(card) {
  const t = translations[AppState.language];
  const lang = AppState.language;
  const currency = AppState.currency;
  
  // Get score class
  const scoreClass = getScoreClass(card.score);
  
  // Create card element
  const cardDiv = document.createElement('article');
  cardDiv.className = 'product-card';
  cardDiv.setAttribute('aria-labelledby', `card-title-${card.id}`);
  
  // Generate content
  cardDiv.innerHTML = `
    ${card.badge ? `<div class="card-badge ${card.badge}">${card.badge.toUpperCase()}</div>` : ''}
    ${card.affiliate ? '<div class="sponsored-label">' + t.sponsored + '</div>' : ''}
    
    <div class="card-header">
      <div class="card-logo" aria-label="${escapeHtml(card.name)} logo">
        ${escapeHtml(card.logo)}
      </div>
      <div class="card-rating">
        <div class="score-chip ${scoreClass}" aria-label="Score: ${card.score} out of 100">
          ${card.score}
        </div>
        <div class="rating-text">${card.rating} (${card.reviews.toLocaleString()})</div>
      </div>
    </div>
    
    <h3 class="card-title" id="card-title-${card.id}">${escapeHtml(card.name)}</h3>
    <p class="card-subtitle">${escapeHtml(card.subtitle)}</p>
    
    <div class="card-reward">${escapeHtml(card.rewardText[lang] || card.rewardText.es)}</div>
    
    <ul class="card-highlights" aria-label="Card benefits">
      ${(card.highlights[lang] || card.highlights.es).map(highlight => 
        `<li>${escapeHtml(highlight)}</li>`
      ).join('')}
    </ul>
    
    <div class="card-features">
      <div class="feature">
        <div class="feature-value">${escapeHtml(card.features.fee[currency])}</div>
        <div class="feature-label">${lang === 'es' ? 'Cuota Anual' : 'Annual Fee'}</div>
      </div>
      <div class="feature">
        <div class="feature-value">${escapeHtml(card.features.cashback)}</div>
        <div class="feature-label">${lang === 'es' ? 'Recompensas Max' : 'Max Rewards'}</div>
      </div>
      <div class="feature">
        <div class="feature-value">${escapeHtml(typeof card.features.bonus === 'object' ? card.features.bonus[currency.replace('eur', '€').replace('usd', '$')] || card.features.bonus[lang] : card.features.bonus)}</div>
        <div class="feature-label">${lang === 'es' ? 'Bono Registro' : 'Sign-up Bonus'}</div>
      </div>
    </div>
    
    <div class="card-actions">
      <button class="btn btn-primary" 
              onclick="trackCardClick('${escapeHtml(card.name)}', 'apply')" 
              aria-label="${t.applyNow} for ${escapeHtml(card.name)}"
              ${card.affiliate ? 'rel="sponsored"' : ''}>
        ${t.applyNow}
      </button>
      <button class="btn btn-secondary" 
              onclick="trackCardClick('${escapeHtml(card.name)}', 'details')" 
              aria-label="${t.learnMore} about ${escapeHtml(card.name)}">
        ${t.learnMore}
      </button>
    </div>
  `;
  
  return cardDiv;
}

function getScoreClass(score) {
  if (score >= 80) return 'score-excellent';
  if (score >= 60) return 'score-good';
  if (score >= 40) return 'score-fair';
  return 'score-poor';
}

function renderNoResults() {
  const lang = AppState.language;
  const message = lang === 'es' 
    ? 'No se encontraron tarjetas que coincidan con tus filtros. Prueba ajustar los criterios de búsqueda.'
    : 'No cards match your current filters. Try adjusting your search criteria.';
    
  cardsContainer.innerHTML = `
    <div class="no-results">
      <p>${message}</p>
    </div>
  `;
}

// Filtering
function applyFilters() {
  try {
    if (!cardTypeFilter || !rewardTypeFilter || !annualFeeFilter) {
      console.warn('Filter elements not available');
      return;
    }
    
    const typeFilter = cardTypeFilter.value;
    const rewardFilter = rewardTypeFilter.value;
    const feeFilter = annualFeeFilter.value;
    const currency = AppState.currency;
    
    let filteredCards = cryptoCards.filter(card => {
      // Type filter
      if (typeFilter !== 'all' && card.type !== typeFilter) {
        return false;
      }
      
      // Reward filter
      if (rewardFilter !== 'all' && card.rewardType !== rewardFilter) {
        return false;
      }
      
      // Annual fee filter
      if (feeFilter === 'no-fee' && card.annualFee[currency] > 0) {
        return false;
      }
      if (feeFilter === 'low-fee' && card.annualFee[currency] >= 100) {
        return false;
      }
      
      return true;
    });
    
    // Sort by score (highest first)
    filteredCards.sort((a, b) => (b.score || 0) - (a.score || 0));
    
    renderCards(filteredCards);
  } catch (error) {
    console.error('Error applying filters:', error);
  }
}

// Analytics
function trackCardClick(cardName, action) {
  console.log(`Card interaction: ${cardName} - ${action}`);
  
  // Send to analytics service
  if (typeof gtag !== 'undefined') {
    gtag('event', 'card_interaction', {
      'card_name': cardName,
      'action': action,
      'language': AppState.language,
      'currency': AppState.currency
    });
  }
  
  return false; // Prevent default for demo
}

// Smooth Scrolling
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Close mobile nav if open
        closeMobileNav();
      }
    });
  });
}

// Utility Functions
function escapeHtml(text) {
  if (typeof text !== 'string') return text;
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

function updateUI() {
  // Update any additional UI elements based on current state
  updateLanguageButtons();
  updateCurrencyButtons();
}

// Accessibility
function announceToScreenReader(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Performance: Intersection Observer for animations
function setupIntersectionObserver() {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe learning cards
    document.querySelectorAll('.learning-card').forEach(card => {
      observer.observe(card);
    });
  }
}

// Initialize intersection observer after DOM is loaded
document.addEventListener('DOMContentLoaded', setupIntersectionObserver);

// Handle browser back/forward navigation
window.addEventListener('popstate', function(e) {
  if (e.state) {
    if (e.state.language) setLanguage(e.state.language);
    if (e.state.currency) setCurrency(e.state.currency);
    if (e.state.theme) setTheme(e.state.theme);
  }
});

// Export for potential testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    AppState,
    cryptoCards,
    setTheme,
    setLanguage,
    setCurrency,
    renderCards,
    applyFilters
  };
}