
document.getElementById('closeMobileMenuBtn').classList.add('hidden');
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', hideMobileMenu);
});

// Show mobile menu
function showMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('hidden');
    document.getElementById('hamburgerBtn').classList.add('hidden');
    document.getElementById('closeMobileMenuBtn').classList.remove('hidden');
}

function hideMobileMenu() {
    document.getElementById('mobileMenu').classList.add('hidden');
    document.getElementById('hamburgerBtn').classList.remove('hidden');
    document.getElementById('closeMobileMenuBtn').classList.add('hidden');
}

// Change navbar style on scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('py-3', 'bg-black/90');
        nav.classList.remove('py-4', 'glass');
    } else {
        nav.classList.add('py-4', 'glass');
        nav.classList.remove('py-3', 'bg-black/90');
    }
});

// Intersection Observer for Reveal Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('opacity-0');
    observer.observe(section);
});

    // Tour Data Object
const tourData = {
    baobab: {
        title: "Baobab Tour",
        subtitle: "The Mystic West & The Giants",
        img: "./assets/images/baobab-tour.jpg",
        price: "From $950 / pers.",
        desc: "An expedition to Madagascar's most spectacular lands. Sail down the Tsiribihina River aboard a private barge before reaching the Tsingy de Bemaraha, a unique limestone cathedral in the world.",
        itinerary: [
            "Day 1 – Arrival in Antananarivo",
            "Day 2 - Antananarivo / Antsirabe & City Tour",
            "Day 3 - Antsirabe/ Tritriva Lake / Miandrivazo ",
            "Day 4 - Miandrivazo / Zazamalala Park / Morondava",
            "Day 5 - Baobab Avenue / Kirindy Forest Park ",
            "Day 6 – Flight from Morondava to Antananarivo",
            "Day 7 – Check-out and Departure"
        ]
    },
    indri: {
        title: "Indri Tour",
        subtitle: "The Emerald East & The Primary Forest",
        img: "./assets/images/indri-tour.jpg",
        price: "From $1075 / pers.",
        desc: "Dive into the enchanting humidity of the East. Listen to the deafening cry of the Indri lemur before letting yourself glide on the calm waters of the Pangalanes, lined with authentic fishing villages.",
        itinerary: [
            "Special Reserve of Analamazaotra",
            "Andasibe-Mantadia National Park",
            "Navigation on the Pangalanes Canal",
            "Visit to Akanin'ny Nofy fishing village",
            "Return transfer to the capital"
        ]
    },
    sakalava: {
        title: "Sakalava Tour",
        subtitle: "The Royal North & The Archipelagos",
        img: "./assets/images/sakalava-tour.jpg",
        price: "From $1750 / pers.",
        desc: "A high-end circuit combining fantastic geology and crystal-clear lagoons. From the Red Tsingy of Irodo to the white sand beaches of Nosy Be, it's an ode to Madagascar's wild beauty in the North.",
        itinerary: [
            "Discovery of Diego-Suarez and its three bays",
            "Excursion to the Emerald Sea",
            "Exploration of the Ankarana massif",
            "Crossing to the Nosy Be archipelago",
            "Private cruise between sacred islands"
        ]
    },
    vezo: {
        title: "Vezo Tour",
        subtitle: "The Nomadic South & The Soul of the Sea",
        img: "./assets/images/vezo-tour.jpg",
        price: "From $1320 / pers.",
        desc: "Travel across the mythical RN7 through the highlands before reaching the Southern desert. Experience Vezo authenticity in Anakao, where time stops to the rhythm of square-sail pirogues.",
        itinerary: [
            "Hiking in Isalo National Park",
            "Tuléar, the radiant city of the South",
            "Fast boat transfer to Anakao",
            "Pirogue outing with Vezo nomads",
            "Extension to Ifaty or domestic flight return"
        ]
    }
};

// Modal Functions
function openTourModal(tourId) {
    const tour = tourData[tourId];
    const modal = document.getElementById('tourModal');
    
    // Populate data
    document.getElementById('modalImg').src = tour.img;
    document.getElementById('modalTitle').innerText = tour.title;
    document.getElementById('modalSubtitle').innerText = tour.subtitle;
  //  document.getElementById('modalDesc').innerText = tour.desc;
    document.getElementById('modalPrice').innerText = tour.price;
    
    // Populate itinerary
    const itineraryContainer = document.getElementById('modalItinerary');
    itineraryContainer.innerHTML = '';
    tour.itinerary.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="text-[#C5A059] mr-2">✦</span> ${item}`;
        itineraryContainer.appendChild(li);
    });

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

function closeTourModal() {
    const modal = document.getElementById('tourModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scroll
}

function closeConfirmationModal() {
    const modal = document.getElementById('confirmationModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scroll
}

// Close on escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape'){
        closeTourModal();
        closeConfirmationModal();
    } 
});

// Close on click outside content
window.onclick = function(event) {
    const modal = document.getElementById('tourModal');
    if (event.target == modal) closeTourModal();

    const confirmationModal = document.getElementById('confirmationModal');
    if (event.target == confirmationModal) closeConfirmationModal();
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('py-2', 'bg-black/90');
        nav.classList.remove('py-4', 'glass');
    } else {
        nav.classList.add('py-4', 'glass');
        nav.classList.remove('py-2', 'bg-black/90');
    }
});
