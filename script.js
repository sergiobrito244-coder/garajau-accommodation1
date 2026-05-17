// Smooth scroll for navigation links
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

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for fade-in animations
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

// Observe service cards and gallery items
document.querySelectorAll('.service-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle (for future enhancement)
const navLinks = document.querySelector('.nav-links');
let isMenuOpen = false;

// Add mobile menu button if needed in the future
function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    navLinks.style.display = isMenuOpen ? 'flex' : 'none';
}

// WhatsApp link validation - replace with actual number
const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');
whatsappLinks.forEach(link => {
    const currentHref = link.getAttribute('href');
    // Replace 351000000000 with actual WhatsApp number
    if (currentHref.includes('351000000000')) {
        console.log('Remember to replace 351000000000 with your actual WhatsApp number');
    }
});

// Booking.com link - replace with actual property link
const bookingLinks = document.querySelectorAll('a[href="https://booking.com"]');
bookingLinks.forEach(link => {
    console.log('Remember to replace https://booking.com with your actual Booking.com property URL');
});

console.log('Garajau Paradise website loaded successfully!');
console.log('TODO: Replace placeholder images with actual photos');
console.log('TODO: Update WhatsApp number: 351000000000');
console.log('TODO: Add actual Booking.com property URL');
console.log('TODO: Add Google Maps embed for location section');

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxOverlay = document.querySelector('.lightbox-overlay');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
const galleryPhotos = document.querySelectorAll('.gallery-photo');
let currentPhotoIndex = 0;

// Open lightbox when clicking on gallery photos
galleryPhotos.forEach((photo, index) => {
    photo.addEventListener('click', () => {
        currentPhotoIndex = index;
        openLightbox(photo.src, photo.alt);
    });
});

function openLightbox(src, alt) {
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
}

function showNextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % galleryPhotos.length;
    lightboxImage.src = galleryPhotos[currentPhotoIndex].src;
    lightboxImage.alt = galleryPhotos[currentPhotoIndex].alt;
}

function showPrevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
    lightboxImage.src = galleryPhotos[currentPhotoIndex].src;
    lightboxImage.alt = galleryPhotos[currentPhotoIndex].alt;
}

// Close lightbox when clicking X button
lightboxClose.addEventListener('click', closeLightbox);

// Close lightbox when clicking overlay
lightboxOverlay.addEventListener('click', closeLightbox);

// Navigate to next photo
lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    showNextPhoto();
});

// Navigate to previous photo
lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    showPrevPhoto();
});

// Close lightbox when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
    if (e.key === 'ArrowRight' && lightbox.classList.contains('active')) {
        showNextPhoto();
    }
    if (e.key === 'ArrowLeft' && lightbox.classList.contains('active')) {
        showPrevPhoto();
    }
});

// Language Switcher
const translations = {
    en: {
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-gallery': 'Gallery',
        'nav-location': 'Location',
        'hero-title': 'Jardins do Garajau View',
        'hero-subtitle': 'A stunning one-bedroom apartment with breathtaking ocean views in Garajau, Madeira',
        'btn-whatsapp': 'WhatsApp',
        'btn-book-now': 'Book Now',
        'about-title': 'Your Private Retreat',
        'about-description': 'Escape to our exquisite one-bedroom apartment perched above the crystal-clear waters of Garajau. Wake up to panoramic ocean views, fall asleep to the gentle sound of waves, and experience the authentic charm of Madeira from your private sanctuary.',
        'feature-1': '1 Bedroom Apartment',
        'feature-2': 'Stunning Ocean View',
        'feature-3': 'Fully Equipped Kitchen',
        'feature-4': 'Free WiFi',
        'services-title': 'Premium Services',
        'services-subtitle': 'Enhance your stay with our exclusive services',
        'service-1-title': 'Airport Transfer',
        'service-1-desc': 'Hassle-free transfers from Cristiano Ronaldo Airport to your accommodation. Start your vacation stress-free with our reliable transfer service.',
        'service-2-title': 'Massage Therapy',
        'service-2-desc': 'Relax and rejuvenate with professional massage services in the comfort of your apartment. Perfect after a day of exploring Madeira.',
        'service-3-title': 'Acupuncture',
        'service-3-desc': 'Experience traditional acupuncture therapy to restore balance and wellness. Professional practitioners available for personalized sessions.',
        'gallery-title': 'Gallery',
        'gallery-subtitle': 'A glimpse of your paradise',
        'location-title': 'Prime Location',
        'location-description': 'Located in the beautiful area of Garajau on the southern coast of Madeira, our apartment offers the perfect base for exploring the island. Enjoy easy access to Funchal, pristine beaches, world-class restaurants, and stunning natural reserves.',
        'location-address': 'Impasse da Olaria 8 Bloco A, Fração 2ºG, 9125-162 Caniço, Ilha da Madeira',
        'location-distance': '15 min from Funchal city center',
        'location-reserve': 'Near Garajau Natural Reserve',
        'map-placeholder': 'Map integration',
        'cta-title': 'Ready for Your Madeira Adventure?',
        'cta-subtitle': 'Book your stay today and experience the magic of Garajau',
        'cta-whatsapp': 'Contact on WhatsApp',
        'cta-booking': 'Book on Booking.com',
        'footer-logo': 'Jardins do Garajau View',
        'footer-text': 'Your perfect getaway in Madeira'
    },
    pt: {
        'nav-about': 'Sobre',
        'nav-services': 'Serviços',
        'nav-gallery': 'Galeria',
        'nav-location': 'Localização',
        'hero-title': 'Jardins do Garajau View',
        'hero-subtitle': 'Um apartamento de um quarto espetacular com vistas deslumbrantes para o oceano no Garajau, Madeira',
        'btn-whatsapp': 'WhatsApp',
        'btn-book-now': 'Reservar Agora',
        'about-title': 'O Seu Retiro Privado',
        'about-description': 'Escape para o nosso apartamento de um quarto exuberante situado acima das águas cristalinas do Garajau. Desperte com vistas panorâmicas do oceano, adormeça com o suave som das ondas e experimente o charme autêntico da Madeira no seu santuário privado.',
        'feature-1': 'Apartamento com 1 Quarto',
        'feature-2': 'Vista Deslumbrante do Oceano',
        'feature-3': 'Cozinha Completamente Equipada',
        'feature-4': 'WiFi Gratuito',
        'services-title': 'Serviços Premium',
        'services-subtitle': 'Melhore a sua estadia com os nossos serviços exclusivos',
        'service-1-title': 'Transfer do Aeroporto',
        'service-1-desc': 'Transferências sem complicações do Aeroporto Cristiano Ronaldo para o seu alojamento. Comece as suas férias sem stress com o nosso serviço de transferência fiável.',
        'service-2-title': 'Terapia de Massagem',
        'service-2-desc': 'Relaxe e rejuvenesça com serviços de massagem profissional no conforto do seu apartamento. Perfeito após um dia a explorar a Madeira.',
        'service-3-title': 'Acupuntura',
        'service-3-desc': 'Experimente a terapia tradicional de acupuntura para restaurar o equilíbrio e o bem-estar. Praticantes profissionais disponíveis para sessões personalizadas.',
        'gallery-title': 'Galeria',
        'gallery-subtitle': 'Um vislumbre do seu paraíso',
        'location-title': 'Localização Privilegiada',
        'location-description': 'Situado na bela área do Garajau na costa sul da Madeira, o nosso apartamento oferece a base perfeita para explorar a ilha. Desfrute de fácil acesso ao Funchal, praias imaculadas, restaurantes de classe mundial e reservas naturais deslumbrantes.',
        'location-address': 'Impasse da Olaria 8 Bloco A, Fração 2ºG, 9125-162 Caniço, Ilha da Madeira',
        'location-distance': '15 min do centro da cidade do Funchal',
        'location-reserve': 'Perto da Reserva Natural do Garajau',
        'map-placeholder': 'Integração de mapa',
        'cta-title': 'Pronto para a Sua Aventura na Madeira?',
        'cta-subtitle': 'Reserve a sua estadia hoje e experimente a magia do Garajau',
        'cta-whatsapp': 'Contactar via WhatsApp',
        'cta-booking': 'Reservar no Booking.com',
        'footer-logo': 'Jardins do Garajau View',
        'footer-text': 'O seu refúgio perfeito na Madeira'
    },
    fr: {
        'nav-about': 'À propos',
        'nav-services': 'Services',
        'nav-gallery': 'Galerie',
        'nav-location': 'Emplacement',
        'hero-title': 'Jardins do Garajau View',
        'hero-subtitle': 'Un appartement d\'une chambre époustouflant avec des vues imprenables sur l\'océan à Garajau, Madère',
        'btn-whatsapp': 'WhatsApp',
        'btn-book-now': 'Réserver maintenant',
        'about-title': 'Votre Retraite Privée',
        'about-description': 'Évadez-vous dans notre appartement d\'une chambre exquis perché au-dessus des eaux cristallines de Garajau. Réveillez-vous avec des vues panoramiques de l\'océan, endormez-vous au doux son des vagues et découvrez le charme authentique de Madère depuis votre sanctuaire privé.',
        'feature-1': 'Appartement 1 Chambre',
        'feature-2': 'Vue Imprennable sur l\'Océan',
        'feature-3': 'Cuisine Entièrement Équipée',
        'feature-4': 'WiFi Gratuit',
        'services-title': 'Services Premium',
        'services-subtitle': 'Améliorez votre séjour avec nos services exclusifs',
        'service-1-title': 'Transfert Aéroport',
        'service-1-desc': 'Transferts sans tracas de l\'aéroport Cristiano Ronaldo vers votre hébergement. Commencez vos vacances sans stress avec notre service de transfert fiable.',
        'service-2-title': 'Thérapie par Massage',
        'service-2-desc': 'Détendez-vous et régénérez-vous avec des services de massage professionnels dans le confort de votre appartement. Parfait après une journée d\'exploration de Madère.',
        'service-3-title': 'Acupuncture',
        'service-3-desc': 'Découvrez la thérapie traditionnelle d\'acupuncture pour rétablir l\'équilibre et le bien-être. Praticiens professionnels disponibles pour des sessions personnalisées.',
        'gallery-title': 'Galerie',
        'gallery-subtitle': 'Un aperçu de votre paradis',
        'location-title': 'Emplacement Idéal',
        'location-description': 'Situé dans la magnifique zone de Garajau sur la côte sud de Madère, notre appartement offre la base parfaite pour explorer l\'île. Profitez d\'un accès facile à Funchal, des plages immaculées, des restaurants de classe mondiale et des réserves naturelles époustouflantes.',
        'location-address': 'Impasse da Olaria 8 Bloco A, Fração 2ºG, 9125-162 Caniço, Ilha da Madeira',
        'location-distance': '15 min du centre-ville de Funchal',
        'location-reserve': 'Près de la Réserve Naturelle de Garajau',
        'map-placeholder': 'Intégration de carte',
        'cta-title': 'Prêt pour Votre Aventure à Madère?',
        'cta-subtitle': 'Réservez votre séjour aujourd\'hui et découvrez la magie de Garajau',
        'cta-whatsapp': 'Contacter sur WhatsApp',
        'cta-booking': 'Réserver sur Booking.com',
        'footer-logo': 'Jardins do Garajau View',
        'footer-text': 'Votre escapade parfaite à Madère'
    },
    de: {
        'nav-about': 'Über uns',
        'nav-services': 'Dienstleistungen',
        'nav-gallery': 'Galerie',
        'nav-location': 'Standort',
        'hero-title': 'Jardins do Garajau View',
        'hero-subtitle': 'Eine atemberaubende Einzimmerwohnung mit spektakulärem Meerblick in Garajau, Madeira',
        'btn-whatsapp': 'WhatsApp',
        'btn-book-now': 'Jetzt buchen',
        'about-title': 'Ihre Private Rückzugsort',
        'about-description': 'Entfliehen Sie in unsere exquisite Einzimmerwohnung über den kristallklaren Gewässern von Garajau. Erwachen Sie mit Panoramablick auf den Ozean, schlafen Sie mit dem sanften Wellengang ein und erleben Sie den authentischen Charme von Madeira aus Ihrem privaten Refugium.',
        'feature-1': 'Einzimmerwohnung',
        'feature-2': 'Spektakulärer Meerblick',
        'feature-3': 'Vollständig Ausgestattete Küche',
        'feature-4': 'Kostenloses WLAN',
        'services-title': 'Premium-Dienstleistungen',
        'services-subtitle': 'Verbessern Sie Ihren Aufenthalt mit unseren exklusiven Dienstleistungen',
        'service-1-title': 'Flughafentransfer',
        'service-1-desc': 'Stressfreie Transfers vom Flughafen Cristiano Ronaldo zu Ihrer Unterkunft. Beginnen Sie Ihren Urlaub stressfrei mit unserem zuverlässigen Transferservice.',
        'service-2-title': 'Massagetherapie',
        'service-2-desc': 'Entspannen Sie sich und verjüngen Sie sich mit professionellen Massagediensten im Komfort Ihrer Wohnung. Perfekt nach einem Tag der Erkundung von Madeira.',
        'service-3-title': 'Akupunktur',
        'service-3-desc': 'Erleben Sie die traditionelle Akupunkturtherapie zur Wiederherstellung von Balance und Wohlbefinden. Professionelle Praktiker für personalisierte Sitzungen verfügbar.',
        'gallery-title': 'Galerie',
        'gallery-subtitle': 'Ein Einblick in Ihr Paradies',
        'location-title': 'Erstklassige Lage',
        'location-description': 'Gelegen im wunderschönen Gebiet Garajau an der Südküste von Madeira, bietet unsere Wohnung die perfekte Basis zur Erkundung der Insel. Genießen Sie einfachen Zugang zu Funchal, makellosen Stränden, erstklassigen Restaurants und atemberaubenden Naturschutzgebieten.',
        'location-address': 'Impasse da Olaria 8 Bloco A, Fração 2ºG, 9125-162 Caniço, Ilha da Madeira',
        'location-distance': '15 min vom Stadtzentrum Funchal',
        'location-reserve': 'In der Nähe des Naturschutzgebiets Garajau',
        'map-placeholder': 'Kartenintegration',
        'cta-title': 'Bereit für Ihr Madeira-Abenteuer?',
        'cta-subtitle': 'Buchen Sie Ihren Aufenthalt heute und erleben Sie die Magie von Garajau',
        'cta-whatsapp': 'Kontaktieren Sie uns auf WhatsApp',
        'cta-booking': 'Auf Booking.com buchen',
        'footer-logo': 'Jardins do Garajau View',
        'footer-text': 'Ihr perfekter Urlaubsort auf Madeira'
    }
};

const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');
const currentLangSpan = document.getElementById('currentLang');
const langOptions = document.querySelectorAll('.lang-option');

let currentLang = 'en';

// Toggle dropdown
langBtn.addEventListener('click', () => {
    langDropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.remove('active');
    }
});

// Change language
langOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedLang = option.getAttribute('data-lang');
        changeLanguage(selectedLang);
        langDropdown.classList.remove('active');
    });
});

function changeLanguage(lang) {
    currentLang = lang;
    currentLangSpan.textContent = lang.toUpperCase();
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll('[data-translate]');
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}
