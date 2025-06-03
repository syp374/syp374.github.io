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

// Initialize EmailJS
emailjs.init("EMpJL2vIs79NhCvaa");

// Form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = document.querySelector('.submit-btn');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        await emailjs.send(
            'service_h6swfyk',
            'template_wpri1cd',
            {
                to_email: 'seyoungpark374@gmail.com',
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            }
        );

        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Clear form
        contactForm.reset();
    } catch (error) {
        console.error('Error:', error);
        alert('Sorry, there was an error sending your message. Please try again later.');
    } finally {
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
    }
});

// Add animation to project cards on scroll
const projectCards = document.querySelectorAll('.project-card');
const skillItems = document.querySelectorAll('.skill-item');

const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
        rect.top <= (windowHeight * 0.8) && // Trigger when element is 80% from the top of viewport
        rect.bottom >= 0 &&
        rect.left >= 0 &&
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

// Remove any existing active classes first
langButtons.forEach(btn => btn.classList.remove('active'));

// Check for stored language preference
const storedLang = localStorage.getItem('selectedLanguage') || 'en';

// Initialize with stored language preference
document.querySelector('.lang-btn[data-lang="en"]').classList.remove('active');
document.querySelector('.lang-btn[data-lang="' + storedLang + '"]').classList.add('active');
document.body.setAttribute('data-lang', storedLang);
updateWordCloud(storedLang);
updateTestimonials(storedLang);
updateSpiderChart(storedLang);

langButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all buttons
        langButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get the language
        const lang = button.getAttribute('data-lang');
        
        // Update language
        updateLanguage(lang);
        
        // Store the selected language
        localStorage.setItem('selectedLanguage', lang);
    });
});

// Update word cloud size on window resize
window.addEventListener('resize', () => {
    const lang = document.body.getAttribute('data-lang');
    updateWordCloud(lang);
});

function updateTestimonials(lang) {
    const testimonialGrid = document.querySelector('.testimonial-grid');
    const currentTestimonials = testimonials[lang];
    
    testimonialGrid.innerHTML = currentTestimonials.map(testimonial => `
        <div class="testimonial-card">
            <div class="testimonial-content">
                <p class="testimonial-text">"${testimonial.text}"</p>
            </div>
            <div class="testimonial-attribution">
                <span class="testimonial-role">${testimonial.role}</span>
            </div>
        </div>
    `).join('');
}

// Language Switcher
const wordCloudData = {
    en: [
        { text: 'Analytical', weight: 60 },
        { text: 'Driven', weight: 55 },
        { text: 'Detail-oriented', weight: 52 },
        { text: 'Problem Solver', weight: 48 },
        { text: 'Passionate', weight: 45 },
        { text: 'Team Player', weight: 42 },
        { text: 'Innovative', weight: 40 },
        { text: 'Determined', weight: 38 },
        { text: 'Thorough', weight: 35 },
        { text: 'Proactive', weight: 32 }
    ],
    kr: [
        { text: '열정', weight: 60 },
        { text: '분석력', weight: 55 },
        { text: '적극적', weight: 52 },
        { text: '철저한', weight: 48 },
        { text: '호기심', weight: 45 },
        { text: '빠른 실행력', weight: 42 },
        { text: '목표지향적', weight: 40 },
        { text: '꼼꼼한', weight: 38 },
        { text: '추진력', weight: 35 },
        { text: '탐구정신', weight: 32 },
        { text: '책임감', weight: 30 },
        { text: '문제 해결', weight: 28 },
        { text: '끈기', weight: 25 }
    ]
};

function updateWordCloud(lang) {
    const cloudCanvas = document.getElementById('wordCloudCanvas');
    const containerWidth = cloudCanvas.parentElement.offsetWidth;
    const containerHeight = 350;
    
    cloudCanvas.width = 500;
    cloudCanvas.height = 350;

    WordCloud(cloudCanvas, {
        list: wordCloudData[lang].map(word => [word.text, word.weight]),
        gridSize: 8,
        weightFactor: 2,
        fontFamily: lang === 'kr' ? 'Noto Sans KR, sans-serif' : 'Roboto, sans-serif',
        color: function(word, weight) {
            if (weight >= 55) return '#0F172A';
            if (weight >= 50) return '#1E293B';
            if (weight >= 40) return '#334155';
            if (weight >= 35) return '#475569';
            if (weight >= 25) return '#64748B';
            return '#94A3B8';
        },
        backgroundColor: 'transparent',
        rotateRatio: 0.2,
        rotationSteps: 2,
        drawOutOfBound: false,
        shrinkToFit: true,
        minSize: 12,
        shuffle: false
    });
}

// Spider Chart
const ctx = document.getElementById('skillsSpiderChart').getContext('2d');
const spiderChartLabels = {
    en: [
        'Analytical Thinking',
        'Programming',
        'Data Visualization',
        'Data Cleaning',
        'Business Acumen'
    ],
    kr: [
        '분석적 사고',
        '프로그래밍 능력',
        '데이터 시각화',
        '데이터 정제',
        '비즈니스 통찰력'
    ]
};

function updateSpiderChart(lang) {
    if (window.spiderChart) {
        window.spiderChart.destroy();
    }
    
    window.spiderChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: spiderChartLabels[lang],
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
                            size: 12,
                            family: lang === 'kr' ? 'Noto Sans KR, sans-serif' : 'Roboto, sans-serif'
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
}

function updateLanguage(lang) {
    // Remove language classes from body
    document.body.classList.remove('lang-en', 'lang-kr');
    // Add new language class
    document.body.setAttribute('data-lang', lang);
    
    // Update testimonials
    updateTestimonials(lang);
    
    // Update word cloud
    updateWordCloud(lang);

    // Update spider chart
    updateSpiderChart(lang);
} 