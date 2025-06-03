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

// Initialize with English
document.querySelector('.lang-btn[data-lang="en"]').classList.add('active');
document.body.setAttribute('data-lang', 'en');

const testimonials = {
    en: [
        {
            text: "Her methodical approach and thorough analysis of projects was impressive. Every step was backed by solid logic and careful consideration.",
            role: "Project Team Member"
        },
        {
            text: "Even when team momentum was low, she maintained her enthusiasm and drive, actively seeking feedback and exploring various approaches to ensure thorough execution.",
            role: "Project Team Member"
        },
        {
            text: "Quick decision-making combined with rapid execution led to fast results. Her commitment to sharing progress and seeking team feedback was particularly noteworthy.",
            role: "Project Team Member"
        },
        {
            text: "She excels at successfully getting her opinions across to the rest of the team members. Even for minor matters, she anticipates feedback and questions and tries to find evidence to answer them, pointing out aspects that I miss.",
            role: "Project Team Member"
        },
        {
            text: "I positively remember how she provided constructive feedback on tasks during the project while also being generous with praise for team members' accomplishments.",
            role: "Project Team Member"
        },
        {
            text: "Her adventurous spirit to relentlessly try everything she learned and her unstoppable drive towards goals was a great asset to the team.",
            role: "Project Team Member"
        }
    ],
    kr: [
        {
            text: "어느 것 하나 대충 하지 않고 철저한 논리에 의해서 프로젝트를 진행하는 모습이 인상적이었습니다.",
            role: "프로젝트 팀원"
        },
        {
            text: "다른 팀원들이 적극적이지 않아서 무기력해질 법도 한데 열정을 잃지 않고 추진력 있게 팀을 이끌어가는 모습, 모르는 부분은 튜터님께 적극적으로 가서 피드백을 받고 개선하는 모습, 꼼꼼하게 처리하기 위해 다양한 방법을 모색하고 시도하려는 모습이 인상 깊었습니다.",
            role: "프로젝트 팀원"
        },
        {
            text: "빠른 결단력을 바탕으로 바로 행동으로 옮기면서 결과물 도출이 빠른 점, 이때 본인의 작업한 내용을 팀원들과 공유하고 피드백을 받으려는 점이 인상 깊었습니다.",
            role: "프로젝트 팀원"
        },
        {
            text: "자신의 의견을 나머지 팀원들에게 성공적으로 관철시키시는 장점이 있으십니다. 설령 사소한 내용이라도 피드백과 질문을 예상하여 그에 답할 근거를 찾으려고 하시는 등, 제가 놓치는 부분을 짚어주셨습니다.",
            role: "프로젝트 팀원"
        },
        {
            text: "팀원들이 프로젝트 중에 수행한 과업에 대해 피드백을 주는 것과 동시에 칭찬을 아끼지 않는 모습이 긍정적으로 기억됩니다.",
            role: "프로젝트 팀원"
        },
        {
            text: "배웠던 모든 내용을 시도해보려는 도전 정신과 목표를 향해 멈추지 않는 불도저같은 모습이 팀에 큰 도움이 되었습니다.",
            role: "프로젝트 팀원"
        }
    ]
};

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

// Initialize testimonials with English content
updateTestimonials('en');

// Word Cloud Configuration
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

// Initialize with English
document.querySelector('.lang-btn[data-lang="en"]').classList.add('active');
document.body.setAttribute('data-lang', 'en');
updateWordCloud('en');
updateTestimonials('en');
updateSpiderChart('en');

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