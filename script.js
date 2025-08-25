// Crypto Cards Data
const cryptoCards = [
    {
        id: 1,
        name: "Coinbase Card",
        subtitle: "Visa Debit Card",
        type: "debit",
        rewardType: "crypto",
        annualFee: 0,
        rating: 4.5,
        reviews: 2847,
        logo: "CB",
        highlights: [
            "Up to 4% crypto rewards",
            "No annual fee",
            "FDIC insured",
            "Real-time crypto conversion"
        ],
        rewardText: "Up to 4% in crypto rewards",
        features: {
            fee: "$0",
            cashback: "4%",
            bonus: "None"
        },
        badge: "featured"
    },
    {
        id: 2,
        name: "Crypto.com Visa Card",
        subtitle: "Metal Debit Card",
        type: "debit",
        rewardType: "cashback",
        annualFee: 0,
        rating: 4.3,
        reviews: 1923,
        logo: "CDC",
        highlights: [
            "Up to 8% cashback",
            "Netflix & Spotify rebates",
            "Airport lounge access",
            "CRO staking rewards"
        ],
        rewardText: "Up to 8% cashback with CRO staking",
        features: {
            fee: "$0",
            cashback: "8%",
            bonus: "$50"
        },
        badge: "new"
    },
    {
        id: 3,
        name: "BlockFi Rewards Card",
        subtitle: "Bitcoin Credit Card",
        type: "credit",
        rewardType: "bitcoin",
        annualFee: 0,
        rating: 4.1,
        reviews: 1156,
        logo: "BF",
        highlights: [
            "1.5% bitcoin rewards",
            "No annual fee",
            "Standard APR rates",
            "Mobile app management"
        ],
        rewardText: "1.5% back in Bitcoin on all purchases",
        features: {
            fee: "$0",
            cashback: "1.5%",
            bonus: "$100"
        }
    },
    {
        id: 4,
        name: "Gemini Credit Card",
        subtitle: "Mastercard Credit Card",
        type: "credit",
        rewardType: "crypto",
        annualFee: 0,
        rating: 4.2,
        reviews: 892,
        logo: "GM",
        highlights: [
            "Up to 3% crypto rewards",
            "Real-time redemption",
            "No foreign transaction fees",
            "Security-focused"
        ],
        rewardText: "Up to 3% back in crypto",
        features: {
            fee: "$0",
            cashback: "3%",
            bonus: "$50"
        }
    },
    {
        id: 5,
        name: "BitPay Card",
        subtitle: "Prepaid Mastercard",
        type: "debit",
        rewardType: "cashback",
        annualFee: 9.95,
        rating: 3.9,
        reviews: 743,
        logo: "BP",
        highlights: [
            "Convert crypto to USD",
            "Multiple crypto support",
            "Physical & virtual cards",
            "Direct crypto spending"
        ],
        rewardText: "Spend crypto directly with conversion",
        features: {
            fee: "$9.95",
            cashback: "0%",
            bonus: "None"
        }
    },
    {
        id: 6,
        name: "Nexo Card",
        subtitle: "Premium Metal Card",
        type: "debit",
        rewardType: "cashback",
        annualFee: 0,
        rating: 4.4,
        reviews: 1384,
        logo: "NX",
        highlights: [
            "Up to 2% cashback",
            "No fees with NEXO tokens",
            "Crypto-backed spending",
            "Premium support"
        ],
        rewardText: "Up to 2% cashback in crypto",
        features: {
            fee: "$0",
            cashback: "2%",
            bonus: "$25"
        }
    }
];

// DOM Elements
const cardsContainer = document.getElementById('cards-container');
const cardTypeFilter = document.getElementById('card-type');
const rewardTypeFilter = document.getElementById('reward-type');
const annualFeeFilter = document.getElementById('annual-fee');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderCards(cryptoCards);
    setupFilters();
    addAnimations();
});

// Render cards to the DOM
function renderCards(cards) {
    cardsContainer.innerHTML = '';
    
    cards.forEach(card => {
        const cardElement = createCardElement(card);
        cardsContainer.appendChild(cardElement);
    });
    
    // Add fade-in animation to new cards
    const cardElements = cardsContainer.querySelectorAll('.card');
    cardElements.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 100);
    });
}

// Create individual card element
function createCardElement(card) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.dataset.type = card.type;
    cardDiv.dataset.rewardType = card.rewardType;
    cardDiv.dataset.annualFee = card.annualFee;
    
    const stars = '★'.repeat(Math.floor(card.rating)) + '☆'.repeat(5 - Math.floor(card.rating));
    
    cardDiv.innerHTML = `
        ${card.badge ? `<div class="card-badge ${card.badge}">${card.badge.toUpperCase()}</div>` : ''}
        
        <div class="card-header">
            <div class="card-logo">${card.logo}</div>
            <div class="card-rating">
                <div class="rating-stars">${stars}</div>
                <div class="rating-text">${card.rating} (${card.reviews.toLocaleString()})</div>
            </div>
        </div>
        
        <h3 class="card-title">${card.name}</h3>
        <p class="card-subtitle">${card.subtitle}</p>
        
        <div class="card-reward">${card.rewardText}</div>
        
        <ul class="card-highlights">
            ${card.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
        </ul>
        
        <div class="card-features">
            <div class="feature">
                <div class="feature-value">${card.features.fee}</div>
                <div class="feature-label">Annual Fee</div>
            </div>
            <div class="feature">
                <div class="feature-value">${card.features.cashback}</div>
                <div class="feature-label">Max Rewards</div>
            </div>
            <div class="feature">
                <div class="feature-value">${card.features.bonus}</div>
                <div class="feature-label">Sign-up Bonus</div>
            </div>
        </div>
        
        <div class="card-actions">
            <a href="#" class="btn btn-primary" onclick="trackCardClick('${card.name}', 'apply')">Apply Now</a>
            <a href="#" class="btn btn-secondary" onclick="trackCardClick('${card.name}', 'learn')">Learn More</a>
        </div>
    `;
    
    return cardDiv;
}

// Setup filter functionality
function setupFilters() {
    [cardTypeFilter, rewardTypeFilter, annualFeeFilter].forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });
}

// Apply filters to cards
function applyFilters() {
    const typeFilter = cardTypeFilter.value;
    const rewardFilter = rewardTypeFilter.value;
    const feeFilter = annualFeeFilter.value;
    
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
        if (feeFilter === 'no-fee' && card.annualFee > 0) {
            return false;
        }
        if (feeFilter === 'low-fee' && card.annualFee >= 100) {
            return false;
        }
        
        return true;
    });
    
    // Sort by rating (highest first)
    filteredCards.sort((a, b) => b.rating - a.rating);
    
    renderCards(filteredCards);
}

// Track card clicks for analytics
function trackCardClick(cardName, action) {
    console.log(`Card clicked: ${cardName} - Action: ${action}`);
    
    // In a real application, you would send this to your analytics service
    if (typeof gtag !== 'undefined') {
        gtag('event', 'card_click', {
            'card_name': cardName,
            'action': action
        });
    }
    
    // Prevent default link behavior for demo
    return false;
}

// Add scroll animations and smooth scrolling
function addAnimations() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe learning center items
    document.querySelectorAll('.learning-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
}

// Search functionality (bonus feature)
function setupSearch() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search cards...';
    searchInput.className = 'search-input';
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredCards = cryptoCards.filter(card => 
            card.name.toLowerCase().includes(searchTerm) ||
            card.highlights.some(highlight => highlight.toLowerCase().includes(searchTerm))
        );
        renderCards(filteredCards);
    });
    
    // You can add this search input to your filters section if desired
}

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        cryptoCards,
        renderCards,
        applyFilters,
        createCardElement
    };
}