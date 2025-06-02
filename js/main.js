// Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// Toggle navigation menu
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    
    // Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger animation
    burger.classList.toggle('toggle');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollTop = 0;
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    }
});

// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the form data to a server
    // For now, we'll just log it and show a success message
    console.log('Form submitted:', formData);
    
    // Clear form
    contactForm.reset();
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
});

// Add animation to project cards on scroll
const projectCards = document.querySelectorAll('.project-card');
const skillItems = document.querySelectorAll('.skill-item');

const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const animateOnScroll = () => {
    projectCards.forEach(card => {
        if (isInViewport(card)) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });

    skillItems.forEach(item => {
        if (isInViewport(item)) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
};

// Initial styles for animation
projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
});

skillItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.5s ease-out';
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);
// Initial check for elements in viewport
animateOnScroll();

// Language Switcher
const langButtons = document.querySelectorAll('.lang-btn');

langButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all buttons
        langButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get the language
        const lang = button.getAttribute('data-lang');
        
        // Here you can add logic to switch the language content
        // For now, we'll just store the selected language in localStorage
        localStorage.setItem('selectedLanguage', lang);
    });
});

// Set initial active state based on stored language or default to 'en'
const storedLang = localStorage.getItem('selectedLanguage') || 'en';
document.querySelector(`.lang-btn[data-lang="${storedLang}"]`).classList.add('active');

// Spider Chart
const ctx = document.getElementById('skillsSpiderChart').getContext('2d');
new Chart(ctx, {
    type: 'radar',
    data: {
        labels: [
            'Analytical Thinking',
            'Programming',
            'Data Visualization',
            'Data Cleaning',
            'Business Acumen'
        ],
        datasets: [{
            label: 'Skill Rating',
            data: [9.5, 8.7, 8.4, 9.2, 8.7],
            fill: true,
            backgroundColor: 'rgba(52, 152, 219, 0.2)',
            borderColor: 'rgba(52, 152, 219, 1)',
            pointBackgroundColor: 'rgba(52, 152, 219, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(52, 152, 219, 1)'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
            line: {
                borderWidth: 3
            }
        },
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 0,
                suggestedMax: 10,
                pointLabels: {
                    font: {
                        size: 12
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        animation: {
            duration: 2000
        }
    }
});

// Word Cloud
const words = [
    { text: 'Analytical', size: 60 },
    { text: 'Driven', size: 55 },
    { text: 'Detail-oriented', size: 50 },
    { text: 'Problem Solver', size: 45 },
    { text: 'Passionate', size: 40 },
    { text: 'Team Player', size: 35 },
    { text: 'Innovative', size: 30 },
    { text: 'Determined', size: 25 },
    { text: 'Thorough', size: 20 },
    { text: 'Proactive', size: 15 }
];

const cloudCanvas = document.getElementById('wordCloudCanvas');
const cloudCtx = cloudCanvas.getContext('2d');

// Set canvas size
cloudCanvas.width = cloudCanvas.parentElement.offsetWidth;
cloudCanvas.height = 400;

// Create word cloud
WordCloud(cloudCanvas, {
    list: words.map(word => [word.text, word.size]),
    gridSize: 16,
    weightFactor: 1,
    fontFamily: 'Roboto, sans-serif',
    color: 'rgba(44, 62, 80, 0.8)',
    backgroundColor: 'transparent',
    rotateRatio: 0.5,
    rotationSteps: 2,
    drawOutOfBound: false
});

// Update word cloud size on window resize
window.addEventListener('resize', () => {
    const cloudCanvas = document.getElementById('wordCloudCanvas');
    cloudCanvas.width = cloudCanvas.parentElement.offsetWidth;
    cloudCanvas.height = 400;
    
    // Recreate word cloud
    WordCloud(cloudCanvas, {
        list: words.map(word => [word.text, word.size]),
        gridSize: 16,
        weightFactor: 1,
        fontFamily: 'Roboto, sans-serif',
        color: 'rgba(44, 62, 80, 0.8)',
        backgroundColor: 'transparent',
        rotateRatio: 0.5,
        rotationSteps: 2,
        drawOutOfBound: false
    });
}); 