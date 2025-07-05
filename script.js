// JavaScript ES6+ Portfolio Implementation

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const backToTop = document.getElementById('backToTop');
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modal-body');
const contactForm = document.getElementById('contact-form');
const skillsGrid = document.getElementById('skills-grid');

// Typewriter effect
class TypeWriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = this.txt;

        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typewriter effect
document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        new TypeWriter(typewriterElement, [
            'Web Developer',
            'Content Creator',
            'SMM Specialist',
            'UGC Expert'
        ], 3000);
    }
});

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

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

// Smooth scroll to section function
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

// Scroll to top function
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Show/hide back to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }

    // Add scroll effect to navbar
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all elements with reveal class
document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Add reveal class to elements that should animate on scroll
document.addEventListener('DOMContentLoaded', () => {
    const elementsToReveal = document.querySelectorAll('.portfolio-card, .service-card, .about-content, .testimonial-content');
    elementsToReveal.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});

// Skills animation
const animateSkills = () => {
    const skills = document.querySelectorAll('.skill-tag');
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.transform = 'translateY(0)';
            skill.style.opacity = '1';
        }, index * 100);
    });
};

// Intersection Observer for skills section
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
        }
    });
}, { threshold: 0.5 });

if (skillsGrid) {
    skillsObserver.observe(skillsGrid);
}

// Project modal data
const projectData = {
    project1: {
        title: 'E-commerce Platform',
        description: 'A comprehensive e-commerce solution built with modern web technologies. Features include product catalog, shopping cart, payment integration, and admin dashboard.',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Stripe API', 'Responsive Design'],
        features: [
            'Responsive design for all devices',
            'Secure payment processing',
            'Product search and filtering',
            'User authentication system',
            'Admin dashboard for inventory management'
        ],
        liveUrl: '#',
        githubUrl: '#'
    },
    project2: {
        title: 'Social Media Campaign',
        description: 'Complete social media marketing strategy for a tech startup, including content creation, scheduling, and analytics tracking.',
        image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Content Strategy', 'Analytics', 'Canva', 'Hootsuite', 'Instagram'],
        features: [
            '300% increase in engagement',
            'Daily content creation and posting',
            'Influencer collaboration strategy',
            'Monthly analytics reports',
            'Brand voice development'
        ],
        liveUrl: '#',
        githubUrl: '#'
    },
    project3: {
        title: 'UGC Video Series',
        description: 'Authentic user-generated content videos for product reviews and tutorials, helping brands connect with their audience.',
        image: 'https://images.pexels.com/photos/3206079/pexels-photo-3206079.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Video Production', 'Adobe Premiere', 'Canva', 'iPhone', 'Lighting'],
        features: [
            'Authentic product demonstrations',
            'Professional video editing',
            'Optimized for social media platforms',
            'High conversion rates',
            'Brand-aligned content creation'
        ],
        liveUrl: '#',
        githubUrl: '#'
    },
    project4: {
        title: 'Creative Portfolio',
        description: 'Responsive portfolio website for a digital artist showcasing their work with smooth animations and interactive elements.',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['React', 'Framer Motion', 'GSAP', 'CSS3', 'Responsive Design'],
        features: [
            'Interactive gallery with lightbox',
            'Smooth scroll animations',
            'Mobile-first responsive design',
            'Contact form with validation',
            'SEO optimized structure'
        ],
        liveUrl: '#',
        githubUrl: '#'
    },
    project5: {
        title: 'Business Landing Page',
        description: 'High-converting landing page for a SaaS company with focus on conversion rate optimization and user experience.',
        image: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Google Analytics', 'A/B Testing'],
        features: [
            '40% increase in conversion rate',
            'A/B tested call-to-action buttons',
            'Optimized loading speed',
            'Mobile-responsive design',
            'Integrated analytics tracking'
        ],
        liveUrl: '#',
        githubUrl: '#'
    },
    project6: {
        title: 'Brand Content Creation',
        description: 'Comprehensive content strategy and creation for a lifestyle brand, including photography, copywriting, and social media content.',
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        technologies: ['Photography', 'Copywriting', 'Canva', 'Content Strategy', 'Brand Guidelines'],
        features: [
            'Brand identity development',
            'Content calendar creation',
            'Photography and styling',
            'Social media templates',
            'Performance tracking and optimization'
        ],
        liveUrl: '#',
        githubUrl: '#'
    }
};

// Open project modal
const openModal = (projectId) => {
    const project = projectData[projectId];
    if (!project) return;

    modalBody.innerHTML = `
        <div class="modal-project">
            <img src="${project.image}" alt="${project.title}" class="modal-image">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            
            <div class="modal-section">
                <h4>Technologies Used</h4>
                <div class="modal-tags">
                    ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-section">
                <h4>Key Features</h4>
                <ul class="modal-features">
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-actions">
                <a href="${project.liveUrl}" class="btn btn-primary" target="_blank">View Live</a>
                <a href="${project.githubUrl}" class="btn btn-secondary" target="_blank">View Code</a>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

// Close modal
const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Testimonials carousel
let currentTestimonial = 1;
const totalTestimonials = 3;

const showSlide = (n) => {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n > totalTestimonials) currentTestimonial = 1;
    if (n < 1) currentTestimonial = totalTestimonials;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentTestimonial - 1].classList.add('active');
    dots[currentTestimonial - 1].classList.add('active');
};

const currentSlide = (n) => {
    currentTestimonial = n;
    showSlide(currentTestimonial);
};

const nextSlide = () => {
    currentTestimonial++;
    showSlide(currentTestimonial);
};

// Auto-advance testimonials
setInterval(nextSlide, 5000);

// Form validation
const validateForm = () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
    });
    
    // Name validation
    if (!name) {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
    } else if (name.length < 2) {
        document.getElementById('name-error').textContent = 'Name must be at least 2 characters';
        isValid = false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('email-error').textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email';
        isValid = false;
    }
    
    // Service validation
    if (!service) {
        document.getElementById('service-error').textContent = 'Please select a service';
        isValid = false;
    }
    
    // Message validation
    if (!message) {
        document.getElementById('message-error').textContent = 'Message is required';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('message-error').textContent = 'Message must be at least 10 characters';
        isValid = false;
    }
    
    return isValid;
};

// Handle form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm()) {
        // Show success message
        const formData = new FormData(contactForm);
        const formObject = Object.fromEntries(formData);
        
        // Here you would typically send the data to your server
        console.log('Form submitted:', formObject);
        
        // Show success animation
        const submitButton = contactForm.querySelector('.btn-primary');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            submitButton.textContent = 'Message Sent!';
            submitButton.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
            
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.background = '';
                contactForm.reset();
            }, 3000);
        }, 2000);
    }
});

// Real-time form validation
['name', 'email', 'service', 'message'].forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field) {
        field.addEventListener('blur', validateForm);
        field.addEventListener('input', () => {
            const errorElement = document.getElementById(`${fieldId}-error`);
            if (errorElement && errorElement.textContent) {
                errorElement.textContent = '';
            }
        });
    }
});

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    document.querySelectorAll('.floating-element').forEach((element, index) => {
        const speed = (index + 1) * 0.1;
        element.style.transform = `translateY(${rate * speed}px)`;
    });
});

// Initialize AOS-like animations
const initScrollAnimations = () => {
    const elements = document.querySelectorAll('.portfolio-card, .service-card');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'all 0.6s ease-out';
        element.style.transitionDelay = `${index * 0.1}s`;
    });
};

// Trigger animations when elements come into view
const revealElements = () => {
    const elements = document.querySelectorAll('.portfolio-card, .service-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    revealElements();
});

window.addEventListener('scroll', revealElements);

// Performance optimization: debounce scroll events
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(() => {
    revealElements();
}, 10));

// Preload images for better performance
const preloadImages = () => {
    const images = [
        'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3206079/pexels-photo-3206079.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=600'
    ];
    
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    preloadImages();
    
    // Add loading animation
    document.body.classList.add('loaded');
    
    // Initialize smooth scrolling for all internal links
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
});

// Add CSS class for loaded state
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Export functions for global use
window.scrollToSection = scrollToSection;
window.scrollToTop = scrollToTop;
window.openModal = openModal;
window.closeModal = closeModal;
window.currentSlide = currentSlide;

// Console welcome message
console.log(`
🚀 Welcome to Alex's Portfolio!
📧 Contact: alex@example.com
💼 Services: Web Development, SMM, UGC Creation
🌟 Built with vanilla JavaScript, HTML5, and CSS3
`);