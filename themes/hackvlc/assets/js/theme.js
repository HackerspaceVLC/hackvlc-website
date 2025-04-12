document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    setupThemeToggle();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize project card animations
    initProjectCards();
});

function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Exit if theme toggle doesn't exist
    if (!themeToggle) return;
    
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use the system preference
    const currentTheme = localStorage.getItem('theme') ||
        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Apply the theme
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateToggleButton('dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        updateToggleButton('light');
    }
    
    // Handle manual theme toggle
    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateToggleButton('dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            updateToggleButton('light');
        }
    });
    
    // Handle system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
                updateToggleButton('dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                updateToggleButton('light');
            }
        }
    });
    
    // Update the appearance of the toggle button
    function updateToggleButton(theme) {
        if (theme === 'dark') {
            themeToggle.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
            `;
            themeToggle.setAttribute('title', 'Switch to light mode');
        } else {
            themeToggle.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            `;
            themeToggle.setAttribute('title', 'Switch to dark mode');
        }
    }
}

function initScrollAnimations() {
    // Only initialize if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) return;
    
    // Select all elements with animation classes
    const animatedElements = document.querySelectorAll('.has-animation');
    
    // Create observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Unobserve after animation is applied
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe each element
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Add animation classes to specific elements if they don't already have them
    const elementsToAnimate = [
        '.hero h1',
        '.hero .lead', 
        '.hero-buttons',
        '.hero-image',
        '.section-header',
        '.card',
        '.project-card',
        '.gallery-image'
    ];
    
    elementsToAnimate.forEach((selector, index) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (!element.classList.contains('has-animation')) {
                element.classList.add('has-animation');
                element.style.animationDelay = `${index * 0.1}s`;
                observer.observe(element);
            }
        });
    });
}

function initProjectCards() {
    // Add hover interaction to project cards 
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Initialize image gallery lightbox if it exists
    if (typeof GLightbox !== 'undefined') {
        const lightbox = GLightbox({
            selector: '.gallery-image a',
            touchNavigation: true,
            loop: true,
            autoplayVideos: true
        });
    }
}

// Smooth scroll to sections when clicking on navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            e.preventDefault();
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});