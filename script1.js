// --- 1. DATA: The Restaurant Memory ---
const restaurants = [
    {
        name: "McDonald's",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/06/c0/56/img-20181013-142845-largejpg.jpg?w=1000&h=1000&s=1",
        description: "Quick, reliable fast food with burgers and fries – perfect for late-night cravings.",
        vibes: ["Quick Snack", "Family Dinner", "Late Night"],
        walk: "4 min walk",
        rating: 4.3,
        reviews: 312,
        openTime: 0, 
        closeTime: 24
    },
    {
        name: "KFC",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/59/4c/73/caption.jpg?w=400&h=-1&s=1",
        description: "Crispy fried chicken and zinger burgers – the ultimate comfort food spot.",
        vibes: ["Quick Snack", "Family Dinner", "Late Night"],
        walk: "5 min walk",
        rating: 4.2,
        reviews: 289,
        openTime: 11,
        closeTime: 2
    },
    {
        name: "Hardee's",
        image: "https://images.deliveryhero.io/image/fd-pk/LH/v6et-listing.jpg",
        description: "Famous for thickburgers and hand-scooped shakes. A heavy, satisfying meal.",
        vibes: ["Quick Snack", "Family Dinner"],
        walk: "2 min walk",
        rating: 4.4,
        reviews: 410,
        openTime: 12,
        closeTime: 1
    },
    {
        name: "Pizza Hut",
        image: "https://pizzahut.com.pk/Content/images/about-us-img.jpg",
        description: "Freshly baked pan pizzas with unlimited toppings – ideal for group hangouts.",
        vibes: ["Family Dinner", "Late Night"],
        walk: "7 min walk",
        rating: 4.1,
        reviews: 267,
        openTime: 11,
        closeTime: 0 
    },
    {
        name: "Burning Brownie",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/05/44/37/burning-brownie.jpg?w=900&h=500&s=1",
        description: "Heaven for dessert lovers – signature sizzling brownies and milkshakes.",
        vibes: ["Late Night", "Coffee & Chill"],
        walk: "3 min walk",
        rating: 4.6,
        reviews: 156,
        openTime: 13,
        closeTime: 1 
    },
    {
        name: "Wild Wings",
        image: "https://www.youlinmagazine.com/articles/wild-wings-restaurant-islamabad-2.jpg",
        description: "Exceptional wings in multiple flavors – perfect for sports nights.",
        vibes: ["Family Dinner", "Late Night"],
        walk: "5 min walk",
        rating: 4.5,
        reviews: 178,
        openTime: 12,
        closeTime: 2
    },
    {
        name: "Second Cup",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/27/d9/bd/counter.jpg?w=900&h=500&s=1",
        description: "Cozy atmosphere and excellent coffee – perfect for quiet work sessions.",
        vibes: ["Coffee & Chill", "Best View"],
        walk: "6 min walk",
        rating: 4.4,
        reviews: 203,
        openTime: 8,
        closeTime: 0
    },
    {
        name: "Gloria Jean's",
        image: "https://gloriajeans.com.pk/wp-content/uploads/2021/05/about-us-1.jpg",
        description: "Premium coffee with a great outdoor view of Central Park.",
        vibes: ["Coffee & Chill", "Best View"],
        walk: "3 min walk",
        rating: 4.5,
        reviews: 195,
        openTime: 8,
        closeTime: 23 
    },
    {
        name: "Alibaba Doner Kebab",
        image: "https://images.deliveryhero.io/image/fd-pk/LH/w9be-listing.jpg",
        description: "Authentic Turkish flavors with juicy kebabs and fresh wraps.",
        vibes: ["Quick Snack", "Late Night"],
        walk: "5 min walk",
        rating: 4.2,
        reviews: 120,
        openTime: 12,
        closeTime: 0
    },
    {
        name: "Burger Fest",
        image: "https://images.deliveryhero.io/image/fd-pk/LH/v9be-listing.jpg",
        description: "Known for its juicy, loaded burgers that are very popular with locals.",
        vibes: ["Quick Snack", "Late Night"],
        walk: "4 min walk",
        rating: 4.3,
        reviews: 85,
        openTime: 12,
        closeTime: 3 
    },
    {
        name: "Subway",
        image: "https://images.deliveryhero.io/image/fd-pk/LH/v3eb-listing.jpg",
        description: "Build your own fresh sandwiches and salads exactly the way you like.",
        vibes: ["Quick Snack", "Family Dinner"],
        walk: "3 min walk",
        rating: 4.0,
        reviews: 142,
        openTime: 10,
        closeTime: 23
    },
    {
        name: "Howdy",
        image: "https://howdy.pk/wp-content/uploads/2022/08/Howdy-Home-Banner-3.jpg",
        description: "Cowboy-themed burgers and steaks with a unique flame-grilled taste.",
        vibes: ["Family Dinner", "Late Night"],
        walk: "5 min walk",
        rating: 4.4,
        reviews: 310,
        openTime: 12,
        closeTime: 2
    },
    {
        name: "Dunkin'",
        image: "https://dunkin.com.pk/wp-content/uploads/2022/01/Classic-Donuts.jpg",
        description: "The best spot for fresh donuts and a quick coffee fix.",
        vibes: ["Quick Snack", "Coffee & Chill"],
        walk: "2 min walk",
        rating: 4.2,
        reviews: 225,
        openTime: 7,
        closeTime: 23
    },
    {
        name: "Choux Pastry",
        image: "https://images.deliveryhero.io/image/fd-pk/LH/t5ws-listing.jpg",
        description: "Elegant and sophisticated French-style desserts and pastries.",
        vibes: ["Coffee & Chill", "Best View"],
        walk: "4 min walk",
        rating: 4.7,
        reviews: 98,
        openTime: 10,
        closeTime: 22 
    },
    {
        name: "Quetta Teas",
        image: "https://images.deliveryhero.io/image/fd-pk/LH/s1rs-listing.jpg",
        description: "Traditional outdoor tea and paratha spot – very budget-friendly.",
        vibes: ["Quick Snack", "Late Night"],
        walk: "6 min walk",
        rating: 4.5,
        reviews: 540,
        openTime: 0,
        closeTime: 24
    },
    {
        name: "Chop Chop Wok",
        image: "https://chopchopwok.pk/wp-content/uploads/2023/10/CCW-Home-Banner.jpg",
        description: "Choose your own base, sauce, and meat for a custom Asian bowl.",
        vibes: ["Family Dinner", "Best View"],
        walk: "5 min walk",
        rating: 4.6,
        reviews: 189,
        openTime: 12,
        closeTime: 23
    },
    {
        name: "Ranchers",
        image: "https://rancherspk.com/wp-content/uploads/2023/05/ranchers-food.jpg",
        description: "Very popular value burgers and fries with a fun ranch theme.",
        vibes: ["Quick Snack", "Late Night"],
        walk: "4 min walk",
        rating: 4.3,
        reviews: 620,
        openTime: 11,
        closeTime: 2
    },
    {
        name: "Jessie's",
        image: "https://jessies.com.pk/wp-content/uploads/2021/04/jessies-logo.png",
        description: "Gourmet burgers and shakes with a cool, artistic atmosphere.",
        vibes: ["Family Dinner", "Coffee & Chill"],
        walk: "5 min walk",
        rating: 4.4,
        reviews: 145,
        openTime: 12,
        closeTime: 0
    },
    {
        name: "Tayto",
        image: "https://images.deliveryhero.io/image/fd-pk/LH/u1rs-listing.jpg",
        description: "Delicious pastas, burgers, and snacks for a casual sit-down meal.",
        vibes: ["Family Dinner", "Quick Snack"],
        walk: "3 min walk",
        rating: 4.1,
        reviews: 112,
        openTime: 11,
        closeTime: 23
    },
    {
        name: "Goga Naan Shop",
        image: "https://images.deliveryhero.io/image/fd-pk/LH/g7rs-listing.jpg",
        description: "Famous local stuffed naans that are perfect for a traditional lunch.",
        vibes: ["Quick Snack"],
        walk: "8 min walk",
        rating: 4.5,
        reviews: 320,
        openTime: 9,
        closeTime: 22
    },
    {
        name: "Coffee Planet",
        image: "https://images.deliveryhero.io/image/fd-pk/LH/c4rs-listing.jpg",
        description: "Quality roasted coffee beans and a peaceful environment to study.",
        vibes: ["Coffee & Chill"],
        walk: "4 min walk",
        rating: 4.2,
        reviews: 88,
        openTime: 8,
        closeTime: 0
    },
    {
        name: "The Social",
        image: "https://images.deliveryhero.io/image/fd-pk/LH/v1eb-listing.jpg",
        description: "A trendy spot with a mix of continental and fast food.",
        vibes: ["Coffee & Chill", "Family Dinner"],
        walk: "5 min walk",
        rating: 4.2,
        reviews: 95,
        openTime: 12,
        closeTime: 1
    }
];

// --- 2. LOGIC: Calculate Open/Closed Status ---
function checkIfOpen(openHour, closeHour) {
    const now = new Date();
    const currentHour = now.getHours();
    
    if (openHour === 0 && closeHour === 24) return true;
    if (closeHour < openHour) {
        return currentHour >= openHour || currentHour < closeHour;
    }
    return currentHour >= openHour && currentHour < closeHour;
}

// --- 3. BUILDER: Generate Visual Components ---
function generateStars(rating) {
    let html = '';
    const full = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
        html += i <= full ? '<span class="filled">★</span>' : '<span class="empty">☆</span>';
    }
    return html;
}

function createCard(r) {
    const isCurrentlyOpen = checkIfOpen(r.openTime, r.closeTime);
    const status = isCurrentlyOpen ? 'OPEN' : 'CLOSED';
    const statusClass = isCurrentlyOpen ? 'open' : 'closed'; 
    const vibes = r.vibes.map(v => `<span class="vibe-tag">${v}</span>`).join('');

    return `
        <div class="restaurant-card">
            <div class="image-container">
                <img src="${r.image}" alt="${r.name}">
                <span class="status-badge ${statusClass}">${status}</span>
            </div>
            <div class="card-content">
                <h3>${r.name}</h3>
                <div class="rating">
                    <div class="stars">${generateStars(r.rating)}</div> ${r.rating} (${r.reviews} reviews)
                </div>
                <p class="restaurant-description">${r.description}</p>
                <div class="vibe-tags">${vibes}</div>
                <div class="walk-distance">${r.walk}</div>
            </div>
        </div>`;
}

// --- 4. ENGINE: Render & Update the Page ---
function renderCards(list) {
    const grid = document.getElementById('restaurant-grid');
    if (grid) {
        grid.innerHTML = '';
        list.forEach(r => grid.innerHTML += createCard(r));
    }
}

// --- 5. INTERACTION: Filters and Search ---
function setupHomeFeatures() {
    // A. Mood Buttons
    document.querySelectorAll('#mood-filter button').forEach(btn => {
        btn.addEventListener('click', () => {
            const mood = btn.dataset.mood;
            const filtered = mood === 'all' ? restaurants : restaurants.filter(r => r.vibes.includes(mood));
            renderCards(filtered);
            
            // Toggle active button style
            document.querySelectorAll('#mood-filter button').forEach(b => b.classList.add('secondary'));
            btn.classList.remove('secondary');
        });
    });

    // B. Live Search Bar
    const searchInput = document.getElementById('restaurant-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = restaurants.filter(r => 
                r.name.toLowerCase().includes(term) || 
                r.vibes.some(v => v.toLowerCase().includes(term))
            );
            renderCards(filtered);
        });
    }
}

// --- 6. RANDOMIZER: Spin the Plate Logic ---
function setupRandomizer() {
    const spin = document.getElementById('spin-button');
    const randomContainer = document.getElementById('random-restaurant');
    const modal = document.getElementById('modal');

    if (spin && randomContainer && modal) {
        spin.onclick = () => {
            const rand = restaurants[Math.floor(Math.random() * restaurants.length)];
            
            // Fixed: Using the wrapper class for CSS alignment
            randomContainer.innerHTML = `
                <div class="modal-card-wrapper">
                    ${createCard(rand)}
                </div>
            `;
            
            modal.style.display = 'flex';
        };
    }
}

// --- 7. START: Run when page loads ---
window.onload = () => {
    // Only run if we are on the Home Page
    if (document.getElementById('restaurant-grid')) {
        renderCards(restaurants);
        setupHomeFeatures();
        setupRandomizer();
        
        // Close Modal logic
        const closeBtn = document.querySelector('.close');
        if (closeBtn) {
            closeBtn.onclick = () => document.getElementById('modal').style.display = 'none';
        }
        
        // Close modal if clicking outside the card
        const modal = document.getElementById('modal');
        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    }
};