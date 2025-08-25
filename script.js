// =============================================================================
// BEST CRYPTO CARDS 2025 - INTERACTIVE FEATURES
// Production-ready crypto cards comparison platform
// =============================================================================

// Application State
const AppState = {
  currentCards: [],
  filters: {
    type: 'all',
    rewards: 'all',
    annualFee: 'all'
  }
};

// Comprehensive crypto cards data with 12 real products
const cryptoCards = [
  {
    id: 'coinbase-card',
    name: 'Coinbase Card',
    issuer: 'Coinbase',
    type: 'debit',
    score: 92,
    annualFee: 0,
    rewardsRate: '4.00',
    rewardsType: 'crypto',
    highlights: [
      'Up to 4% back in crypto rewards',
      'No annual fee or foreign transaction fees',
      'Instant conversion from crypto to USD'
    ],
    minSpend: 0,
    welcomeBonus: null,
    cryptoSupported: ['BTC', 'ETH', 'LTC', 'BCH', 'BAT', 'REP', 'ZRX', 'USDC'],
    stakingRequired: false,
    applicationUrl: 'https://www.coinbase.com/card',
    pros: ['High rewards rate', 'No fees', 'Wide crypto support'],
    cons: ['Requires Coinbase account', 'Limited to debit only'],
    details: 'The Coinbase Card offers one of the highest crypto reward rates available, with up to 4% back in select cryptocurrencies.',
    sponsored: true
  },
  {
    id: 'crypto-com-visa',
    name: 'Crypto.com Visa Card',
    issuer: 'Crypto.com',
    type: 'debit',
    score: 89,
    annualFee: 0,
    rewardsRate: '8.00',
    rewardsType: 'crypto',
    highlights: [
      'Up to 8% cashback with CRO staking',
      'Airport lounge access and travel perks',
      'Netflix and Spotify rebates available'
    ],
    minSpend: 0,
    welcomeBonus: '$25 CRO',
    cryptoSupported: ['CRO', 'BTC', 'ETH', 'USDC', 'USDT'],
    stakingRequired: true,
    stakingAmount: '$400-$400,000 CRO',
    applicationUrl: 'https://crypto.com/cards',
    pros: ['Highest potential rewards', 'Premium perks', 'Multiple tiers'],
    cons: ['Requires CRO staking', 'Complex tier system'],
    details: 'Crypto.com offers multiple card tiers with rewards up to 8% cashback, but requires CRO token staking for higher tiers.',
    sponsored: true
  },
  {
    id: 'blockfi-rewards',
    name: 'BlockFi Rewards Credit Card',
    issuer: 'BlockFi',
    type: 'credit',
    score: 85,
    annualFee: 0,
    rewardsRate: '1.50',
    rewardsType: 'bitcoin',
    highlights: [
      '1.5% back in Bitcoin on all purchases',
      '3.5% back on crypto purchases',
      'No annual fee with solid credit benefits'
    ],
    minSpend: 0,
    welcomeBonus: '$250 Bitcoin',
    cryptoSupported: ['BTC'],
    stakingRequired: false,
    applicationUrl: 'https://blockfi.com/credit-card',
    pros: ['Bitcoin rewards', 'Credit card benefits', 'Higher rate on crypto'],
    cons: ['Only Bitcoin rewards', 'Credit approval required'],
    details: 'The BlockFi credit card automatically converts your cashback to Bitcoin, perfect for building your BTC stack.',
    sponsored: false
  },
  {
    id: 'gemini-credit',
    name: 'Gemini Credit Card',
    issuer: 'Gemini',
    type: 'credit',
    score: 83,
    annualFee: 0,
    rewardsRate: '3.00',
    rewardsType: 'crypto',
    highlights: [
      'Up to 3% back in Bitcoin or other crypto',
      'Real-time crypto rewards earning',
      'No foreign transaction fees'
    ],
    minSpend: 0,
    welcomeBonus: '$200 Bitcoin',
    cryptoSupported: ['BTC', 'ETH', 'GUSD'],
    stakingRequired: false,
    applicationUrl: 'https://www.gemini.com/credit-card',
    pros: ['Multiple crypto options', 'Good rewards rate', 'Real-time earning'],
    cons: ['Credit approval needed', 'Limited crypto selection'],
    details: 'Gemini\'s credit card offers flexible crypto rewards with the security of the regulated Gemini exchange.',
    sponsored: true
  },
  {
    id: 'bitpay-card',
    name: 'BitPay Card',
    issuer: 'BitPay',
    type: 'debit',
    score: 78,
    annualFee: 9.95,
    rewardsRate: '0.00',
    rewardsType: 'none',
    highlights: [
      'Direct crypto spending capability',
      'Supports 8+ cryptocurrencies',
      'Global acceptance with Mastercard'
    ],
    minSpend: 0,
    welcomeBonus: null,
    cryptoSupported: ['BTC', 'ETH', 'LTC', 'DOGE', 'SHIB', 'GUSD', 'BUSD', 'USDC'],
    stakingRequired: false,
    applicationUrl: 'https://bitpay.com/card',
    pros: ['Wide crypto support', 'Direct spending', 'Global acceptance'],
    cons: ['Annual fee', 'No rewards', 'Conversion fees apply'],
    details: 'BitPay Card allows direct spending from your crypto wallet with support for multiple cryptocurrencies.',
    sponsored: false
  },
  {
    id: 'nexo-card',
    name: 'Nexo Card',
    issuer: 'Nexo',
    type: 'debit',
    score: 86,
    annualFee: 0,
    rewardsRate: '2.00',
    rewardsType: 'crypto',
    highlights: [
      'Up to 2% cashback in crypto',
      'No fees with NEXO token holding',
      'Spend crypto without selling'
    ],
    minSpend: 0,
    welcomeBonus: null,
    cryptoSupported: ['NEXO', 'BTC', 'ETH', 'USDC', 'USDT'],
    stakingRequired: false,
    nexoRequired: true,
    applicationUrl: 'https://nexo.io/card',
    pros: ['No selling required', 'Good rewards', 'Fee waivers with NEXO'],
    cons: ['Requires NEXO tokens', 'Limited availability'],
    details: 'Nexo Card lets you spend your crypto collateral without selling, earning rewards while maintaining your positions.',
    sponsored: false
  },
  {
    id: 'binance-visa',
    name: 'Binance Visa Card',
    issuer: 'Binance',
    type: 'debit',
    score: 81,
    annualFee: 0,
    rewardsRate: '8.00',
    rewardsType: 'crypto',
    highlights: [
      'Up to 8% cashback with BNB staking',
      'No annual fee across all tiers',
      'Airport lounge access on higher tiers'
    ],
    minSpend: 0,
    welcomeBonus: null,
    cryptoSupported: ['BNB', 'BTC', 'ETH', 'BUSD', 'USDT'],
    stakingRequired: true,
    stakingAmount: '1-600 BNB',
    applicationUrl: 'https://www.binance.com/en/cards',
    pros: ['High potential rewards', 'Multiple tiers', 'Travel perks'],
    cons: ['Requires BNB staking', 'Limited regions'],
    details: 'Binance Card offers competitive cashback rates with BNB staking requirements and premium travel benefits.',
    sponsored: true
  },
  {
    id: 'uphold-card',
    name: 'Uphold Card',
    issuer: 'Uphold',
    type: 'debit',
    score: 75,
    annualFee: 0,
    rewardsRate: '0.00',
    rewardsType: 'none',
    highlights: [
      'Spend 30+ cryptocurrencies directly',
      'Real-time conversion at market rates',
      'No monthly or annual fees'
    ],
    minSpend: 0,
    welcomeBonus: null,
    cryptoSupported: ['BTC', 'ETH', 'XRP', 'BAT', 'DASH', 'LTC', 'BCH', 'LINK', 'UNI', 'AAVE'],
    stakingRequired: false,
    applicationUrl: 'https://uphold.com/card',
    pros: ['30+ crypto support', 'No fees', 'Real-time rates'],
    cons: ['No rewards', 'Limited features'],
    details: 'Uphold Card supports the widest range of cryptocurrencies for direct spending without conversion fees.',
    sponsored: false
  },
  {
    id: 'wirex-card',
    name: 'Wirex Card',
    issuer: 'Wirex',
    type: 'debit',
    score: 79,
    annualFee: 0,
    rewardsRate: '2.00',
    rewardsType: 'crypto',
    highlights: [
      'Up to 2% back in WXT tokens',
      'Multi-currency wallet support',
      'Cryptoback rewards program'
    ],
    minSpend: 0,
    welcomeBonus: null,
    cryptoSupported: ['WXT', 'BTC', 'ETH', 'LTC', 'XRP', 'USDC'],
    stakingRequired: false,
    applicationUrl: 'https://wirexapp.com/card',
    pros: ['Cryptoback program', 'Multi-currency', 'No annual fee'],
    cons: ['WXT token rewards', 'Regional restrictions'],
    details: 'Wirex pioneered crypto rewards with their Cryptoback program, offering WXT tokens for everyday spending.',
    sponsored: false
  },
  {
    id: 'swipe-card',
    name: 'Swipe Card',
    issuer: 'Swipe',
    type: 'debit',
    score: 72,
    annualFee: 0,
    rewardsRate: '8.00',
    rewardsType: 'crypto',
    highlights: [
      'Up to 8% cashback with SXP staking',
      'Netflix and Spotify rebates',
      'Airport lounge access available'
    ],
    minSpend: 0,
    welcomeBonus: null,
    cryptoSupported: ['SXP', 'BTC', 'ETH', 'USDC'],
    stakingRequired: true,
    stakingAmount: '300-300,000 SXP',
    applicationUrl: 'https://swipe.io/card',
    pros: ['High rewards potential', 'Premium perks', 'Multiple tiers'],
    cons: ['SXP staking required', 'Limited availability'],
    details: 'Swipe Card offers tiered rewards up to 8% cashback with SXP token staking and premium lifestyle benefits.',
    sponsored: false
  },
  {
    id: 'crypto-ruby-steel',
    name: 'Crypto.com Ruby Steel',
    issuer: 'Crypto.com',
    type: 'debit',
    score: 84,
    annualFee: 0,
    rewardsRate: '2.00',
    rewardsType: 'crypto',
    highlights: [
      '2% unlimited cashback in CRO',
      'Spotify Premium rebate included',
      'No annual fee with $400 CRO stake'
    ],
    minSpend: 0,
    welcomeBonus: null,
    cryptoSupported: ['CRO', 'BTC', 'ETH', 'USDC'],
    stakingRequired: true,
    stakingAmount: '$400 CRO',
    applicationUrl: 'https://crypto.com/cards',
    pros: ['Good base rewards', 'Spotify rebate', 'Accessible staking'],
    cons: ['CRO staking required', 'Single tier'],
    details: 'Ruby Steel is Crypto.com\'s entry-level premium card offering solid 2% rewards with minimal staking requirements.',
    sponsored: true
  },
  {
    id: 'fold-card',
    name: 'Fold Card',
    issuer: 'Fold',
    type: 'debit',
    score: 88,
    annualFee: 0,
    rewardsRate: '1.00',
    rewardsType: 'bitcoin',
    highlights: [
      'Bitcoin-back rewards on purchases',
      'Sats stacking with every transaction',
      'Gamified rewards experience'
    ],
    minSpend: 0,
    welcomeBonus: '20,000 sats',
    cryptoSupported: ['BTC'],
    stakingRequired: false,
    applicationUrl: 'https://foldapp.com/card',
    pros: ['Pure Bitcoin focus', 'Gamified experience', 'No staking required'],
    cons: ['Bitcoin only', 'Variable rewards rate'],
    details: 'Fold Card focuses exclusively on Bitcoin rewards with a unique spin-to-earn system for additional sats.',
    sponsored: false
  }
];

// DOM Elements
let cardsContainer, cardTypeFilter, rewardTypeFilter, annualFeeFilter, filtersContainer;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  try {
    initializeDOMElements();
    loadFiltersFromURL();
    setupEventListeners();
    renderCards(getFilteredCards());
    updateFiltersUI();
    renderComparisonTable();
  } catch (error) {
    console.error('Error initializing application:', error);
  }
});

// Initialize DOM elements
function initializeDOMElements() {
  cardsContainer = document.getElementById('cards-container');
  cardTypeFilter = document.getElementById('card-type');
  rewardTypeFilter = document.getElementById('reward-type');
  annualFeeFilter = document.getElementById('annual-fee');
  filtersContainer = document.querySelector('.filters-container');
  
  if (!cardsContainer) {
    throw new Error('Cards container not found');
  }
  
  return true;
}

// URL Parameters Management
function loadFiltersFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  
  AppState.filters.type = urlParams.get('type') || 'all';
  AppState.filters.rewards = urlParams.get('rewards') || 'all';
  AppState.filters.annualFee = urlParams.get('fee') || 'all';
}

function updateURL() {
  const url = new URL(window.location);
  const params = url.searchParams;
  
  // Set or remove parameters
  if (AppState.filters.type !== 'all') {
    params.set('type', AppState.filters.type);
  } else {
    params.delete('type');
  }
  
  if (AppState.filters.rewards !== 'all') {
    params.set('rewards', AppState.filters.rewards);
  } else {
    params.delete('rewards');
  }
  
  if (AppState.filters.annualFee !== 'all') {
    params.set('fee', AppState.filters.annualFee);
  } else {
    params.delete('fee');
  }
  
  // Update URL without page reload
  window.history.pushState({}, '', url);
}

// Event Listeners
function setupEventListeners() {
  // Filter change events
  if (cardTypeFilter) {
    cardTypeFilter.addEventListener('change', (e) => {
      AppState.filters.type = e.target.value;
      applyFiltersWithURL();
    });
  }
  
  if (rewardTypeFilter) {
    rewardTypeFilter.addEventListener('change', (e) => {
      AppState.filters.rewards = e.target.value;
      applyFiltersWithURL();
    });
  }
  
  if (annualFeeFilter) {
    annualFeeFilter.addEventListener('change', (e) => {
      AppState.filters.annualFee = e.target.value;
      applyFiltersWithURL();
    });
  }
  
  // Browser back/forward navigation
  window.addEventListener('popstate', function() {
    loadFiltersFromURL();
    updateFiltersUI();
    renderCards(getFilteredCards());
    updateFilterChips();
  });
  
  // Smooth scrolling for anchor links
  setupSmoothScrolling();
}

// Filtering Logic
function getFilteredCards() {
  return cryptoCards.filter(card => {
    // Type filter
    if (AppState.filters.type !== 'all' && card.type !== AppState.filters.type) {
      return false;
    }
    
    // Reward type filter
    if (AppState.filters.rewards !== 'all') {
      if (AppState.filters.rewards === 'bitcoin' && card.rewardsType !== 'bitcoin') {
        return false;
      }
      if (AppState.filters.rewards === 'crypto' && !['crypto', 'bitcoin'].includes(card.rewardsType)) {
        return false;
      }
      if (AppState.filters.rewards === 'cashback' && card.rewardsType === 'none') {
        return false;
      }
    }
    
    // Annual fee filter
    if (AppState.filters.annualFee === 'no-fee' && card.annualFee > 0) {
      return false;
    }
    if (AppState.filters.annualFee === 'low-fee' && card.annualFee >= 100) {
      return false;
    }
    
    return true;
  }).sort((a, b) => b.score - a.score); // Sort by score descending
}

function applyFiltersWithURL() {
  const filteredCards = getFilteredCards();
  renderCards(filteredCards);
  updateURL();
  updateFilterChips();
  
  // Track analytics
  trackFilterChange();
}

// UI Updates
function updateFiltersUI() {
  if (cardTypeFilter) cardTypeFilter.value = AppState.filters.type;
  if (rewardTypeFilter) rewardTypeFilter.value = AppState.filters.rewards;
  if (annualFeeFilter) annualFeeFilter.value = AppState.filters.annualFee;
}

function updateFilterChips() {
  // Remove existing chips
  const existingChips = document.querySelectorAll('.filter-chip');
  existingChips.forEach(chip => chip.remove());
  
  const chipsContainer = document.querySelector('.filters-chips');
  if (!chipsContainer) return;
  
  const activeFilters = [];
  
  // Add active filter chips
  if (AppState.filters.type !== 'all') {
    const label = AppState.filters.type === 'debit' ? 'Debit Cards' : 'Credit Cards';
    activeFilters.push({ key: 'type', label: label });
  }
  
  if (AppState.filters.rewards !== 'all') {
    const rewardLabels = {
      'bitcoin': 'Bitcoin Rewards',
      'crypto': 'Crypto Rewards', 
      'cashback': 'Cashback'
    };
    activeFilters.push({ key: 'rewards', label: rewardLabels[AppState.filters.rewards] });
  }
  
  if (AppState.filters.annualFee !== 'all') {
    const feeLabels = {
      'no-fee': 'No Annual Fee',
      'low-fee': 'Under $100 Fee'
    };
    activeFilters.push({ key: 'annualFee', label: feeLabels[AppState.filters.annualFee] });
  }
  
  // Create chip elements
  activeFilters.forEach(filter => {
    const chip = document.createElement('div');
    chip.className = 'filter-chip';
    chip.innerHTML = `
      ${filter.label}
      <button class="chip-remove" onclick="removeFilter('${filter.key}')" aria-label="Remove ${filter.label} filter">×</button>
    `;
    chipsContainer.appendChild(chip);
  });
  
  // Show count
  const filteredCount = getFilteredCards().length;
  const countElement = document.querySelector('.results-count');
  if (countElement) {
    countElement.textContent = `${filteredCount} cards found`;
  }
}

function removeFilter(filterKey) {
  AppState.filters[filterKey] = 'all';
  updateFiltersUI();
  applyFiltersWithURL();
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
  // Get score styling
  const scoreClass = getScoreClass(card.score);
  
  // Create card element
  const cardDiv = document.createElement('article');
  cardDiv.className = 'product-card';
  cardDiv.setAttribute('itemscope', '');
  cardDiv.setAttribute('itemtype', 'https://schema.org/FinancialProduct');
  
  // Generate content
  cardDiv.innerHTML = `
    ${card.sponsored ? '<div class="sponsored-label">Sponsored</div>' : ''}
    
    <div class="card-header">
      <div class="card-logo" aria-label="${escapeHtml(card.name)} logo">
        <span class="logo-initials">${getInitials(card.name)}</span>
      </div>
      <div class="card-rating">
        <div class="score-chip ${scoreClass}" aria-label="Score: ${card.score} out of 100">
          ${card.score}
        </div>
      </div>
    </div>
    
    <h3 class="card-title" itemprop="name">${escapeHtml(card.name)}</h3>
    <p class="card-subtitle">${escapeHtml(card.issuer)} • ${card.type === 'debit' ? 'Debit Card' : 'Credit Card'}</p>
    
    <div class="card-reward" itemprop="description">
      Up to ${card.rewardsRate}% ${card.rewardsType === 'bitcoin' ? 'in Bitcoin' : card.rewardsType === 'crypto' ? 'in Crypto' : 'Cashback'}
    </div>
    
    <ul class="card-highlights" aria-label="Card benefits">
      ${card.highlights.map(highlight => 
        `<li>${escapeHtml(highlight)}</li>`
      ).join('')}
    </ul>
    
    <div class="card-features">
      <div class="feature">
        <div class="feature-value">$${card.annualFee}</div>
        <div class="feature-label">Annual Fee</div>
      </div>
      <div class="feature">
        <div class="feature-value">${card.rewardsRate}%</div>
        <div class="feature-label">Max Rewards</div>
      </div>
      <div class="feature">
        <div class="feature-value">${card.welcomeBonus || 'None'}</div>
        <div class="feature-label">Welcome Bonus</div>
      </div>
    </div>
    
    <div class="card-actions">
      <button class="btn btn-primary" 
              onclick="trackCardClick('${escapeHtml(card.name)}', 'apply')" 
              aria-label="Apply now for ${escapeHtml(card.name)}"
              ${card.sponsored ? 'rel="sponsored"' : ''}>
        Apply Now
      </button>
      <button class="btn btn-secondary" 
              onclick="showCardDetails('${card.id}')" 
              aria-label="Learn more about ${escapeHtml(card.name)}">
        Learn More
      </button>
    </div>
  `;
  
  return cardDiv;
}

function getInitials(name) {
  return name.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();
}

function getScoreClass(score) {
  if (score >= 85) return 'score-excellent';
  if (score >= 75) return 'score-good';
  if (score >= 65) return 'score-fair';
  return 'score-poor';
}

function renderNoResults() {
  cardsContainer.innerHTML = `
    <div class="no-results">
      <h3>No cards match your current filters</h3>
      <p>Try adjusting your search criteria or <button onclick="clearAllFilters()" class="btn-link">clear all filters</button>.</p>
    </div>
  `;
}

// Additional Functions
function clearAllFilters() {
  AppState.filters = {
    type: 'all',
    rewards: 'all',
    annualFee: 'all'
  };
  updateFiltersUI();
  applyFiltersWithURL();
}

function showCardDetails(cardId) {
  const card = cryptoCards.find(c => c.id === cardId);
  if (!card) return;
  
  // For now, log details - could be expanded to show modal
  console.log('Card details:', card);
  trackCardClick(card.name, 'details');
}

// Analytics
function trackCardClick(cardName, action) {
  console.log(`Card interaction: ${cardName} - ${action}`);
  
  if (typeof gtag !== 'undefined') {
    gtag('event', 'card_interaction', {
      'card_name': cardName,
      'action': action,
      'page_location': window.location.href
    });
  }
}

function trackFilterChange() {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'filter_change', {
      'type_filter': AppState.filters.type,
      'rewards_filter': AppState.filters.rewards,
      'fee_filter': AppState.filters.annualFee
    });
  }
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
      }
    });
  });
}

// Comparison Table
function renderComparisonTable() {
  const tbody = document.getElementById('comparison-tbody');
  if (!tbody) return;
  
  // Get top 8 cards for comparison table
  const topCards = cryptoCards
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
  
  tbody.innerHTML = topCards.map(card => {
    return `
      <tr class="comparison-row" data-card="${card.id}">
        <td class="sticky-col product-cell" onclick="copyCell(this)">
          <div class="product-info">
            <strong>${escapeHtml(card.name)}</strong>
            <div class="score-chip ${getScoreClass(card.score)}">${card.score}</div>
          </div>
        </td>
        <td class="copyable" onclick="copyCell(this)">${card.rewardsRate}% ${card.rewardsType}</td>
        <td class="copyable" onclick="copyCell(this)">${card.type === 'credit' ? 'N/A' : '0.5-1.5%'}</td>
        <td class="copyable" onclick="copyCell(this)">${card.annualFee > 0 ? '$2-5' : 'Free'}</td>
        <td class="copyable" onclick="copyCell(this)">$${card.annualFee}</td>
        <td class="copyable" onclick="copyCell(this)">✓ Yes</td>
        <td class="copyable" onclick="copyCell(this)">${getAvailability(card)}</td>
        <td class="copyable" onclick="copyCell(this)">${getFundingMethods(card)}</td>
      </tr>
    `;
  }).join('');
}

function getAvailability(card) {
  // Simplified availability based on card type
  const regions = {
    'coinbase-card': 'US',
    'crypto-com-visa': 'US, EU, Asia',
    'blockfi-rewards': 'US',
    'gemini-credit': 'US',
    'bitpay-card': 'Global',
    'nexo-card': 'EU, 30+ countries',
    'binance-visa': 'EU, Asia',
    'uphold-card': 'US, EU',
    'wirex-card': 'EU, UK',
    'swipe-card': 'Limited regions',
    'crypto-ruby-steel': 'US, EU, Asia',
    'fold-card': 'US'
  };
  return regions[card.id] || 'Check website';
}

function getFundingMethods(card) {
  if (card.type === 'credit') {
    return 'Credit limit';
  }
  if (card.id.includes('bitpay') || card.id.includes('uphold')) {
    return 'Crypto wallet';
  }
  return 'Bank/Crypto';
}

function copyCell(cell) {
  const text = cell.textContent.trim();
  
  navigator.clipboard.writeText(text).then(() => {
    // Show copy feedback
    const originalContent = cell.innerHTML;
    cell.innerHTML = `<span class="copy-success">Copied!</span>`;
    cell.classList.add('copied');
    
    setTimeout(() => {
      cell.innerHTML = originalContent;
      cell.classList.remove('copied');
    }, 1500);
    
    // Track analytics
    trackCopyEvent(text);
  }).catch(err => {
    console.error('Failed to copy text:', err);
    // Fallback for older browsers
    fallbackCopyTextToClipboard(text);
  });
}

function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';
  
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    console.log('Fallback: Text copied to clipboard');
  } catch (err) {
    console.error('Fallback: Could not copy text:', err);
  }
  
  document.body.removeChild(textArea);
}

function trackCopyEvent(text) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'table_cell_copy', {
      'copied_text': text,
      'page_location': window.location.href
    });
  }
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

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    AppState,
    cryptoCards,
    getFilteredCards,
    renderCards,
    renderComparisonTable
  };
}