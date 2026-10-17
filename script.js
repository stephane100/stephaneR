// ===== Particules animées =====
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// ===== Navigation =====
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-link');

// Scroll effect on navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu on link click
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Active link on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ===== Animations au scroll =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observer les éléments de la timeline
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Observer les cartes et sections
document.querySelectorAll('.info-card, .skill-category, .education-card, .contact-item, .service-card, .project-card, .testimonial-card, .process-step, .value-item').forEach(item => {
    item.classList.add('fade-in');
    observer.observe(item);
});

// ===== Animation des barres de compétences =====
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillItems = entry.target.querySelectorAll('.skill-item');
            skillItems.forEach((item, index) => {
                setTimeout(() => {
                    const progress = item.querySelector('.skill-progress');
                    const skillLevel = item.getAttribute('data-skill');
                    progress.style.width = skillLevel + '%';
                }, index * 100);
            });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-category').forEach(category => {
    skillObserver.observe(category);
});

// ===== Animation des compteurs de stats =====
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stat-number').forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                if (target && !counter.classList.contains('counted')) {
                    counter.classList.add('counted');
                    animateCounter(counter, target, 1500);
                }
            });
        }
    });
}, { threshold: 0.3 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ===== Formulaire de contact =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Animation de succès
        const btn = contactForm.querySelector('.btn');
        const originalText = btn.textContent;
        btn.textContent = 'Message envoyé !';
        btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            contactForm.reset();
        }, 3000);
        
        // Ici vous pouvez ajouter l'envoi réel du formulaire
        console.log('Form submitted:', { name, email, subject, message });
    });
}

// ===== Smooth scroll pour les ancres =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Effet parallaxe sur le hero =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// ===== Cursor personnalisé (optionnel) =====
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

const cursorFollower = document.createElement('div');
cursorFollower.className = 'cursor-follower';
document.body.appendChild(cursorFollower);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Effet hover sur les liens
document.querySelectorAll('a, button, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        cursorFollower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursorFollower.classList.remove('hover');
    });
});

// ===== Initialisation =====
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    
    // Affichage des détails projet en modal
    const projectModal = document.getElementById('project-modal');
    const projectModalBody = document.getElementById('project-modal-body');
    const projectModalClose = document.querySelector('.project-modal-close');
    const projectModalOverlay = document.querySelector('.project-modal-overlay');

    function openProjectModal(projectCard) {
        if (!projectModal || !projectModalBody) return;
        const details = projectCard.querySelector('.project-details');
        const header = projectCard.querySelector('.project-header');
        if (!details) return;

        projectModalBody.innerHTML = '';
        if (header) {
            const headerClone = header.cloneNode(true);
            projectModalBody.appendChild(headerClone);
        }
        const detailsClone = details.cloneNode(true);
        detailsClone.style.display = 'block';
        projectModalBody.appendChild(detailsClone);

        projectModal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        if (!projectModal) return;
        projectModal.classList.remove('open');
        document.body.style.overflow = '';
        setTimeout(() => {
            if (projectModalBody) projectModalBody.innerHTML = '';
        }, 300);
    }

    document.querySelectorAll('.btn-toggle-details').forEach(button => {
        button.addEventListener('click', function() {
            const projectCard = this.closest('.project-card');
            if (projectCard) openProjectModal(projectCard);
        });
    });

    if (projectModalClose) projectModalClose.addEventListener('click', closeProjectModal);
    if (projectModalOverlay) projectModalOverlay.addEventListener('click', closeProjectModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
            closeProjectModal();
        }
    });

    // Initialisation de la section Solutions d'automatisation IA
    renderAutomationCases();
    initAutomationModal();
    
    // Ajouter les styles pour le curseur personnalisé
    const style = document.createElement('style');
    style.textContent = `
        .custom-cursor {
            width: 10px;
            height: 10px;
            background: var(--accent);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: transform 0.1s ease;
            mix-blend-mode: difference;
        }
        
        .cursor-follower {
            width: 30px;
            height: 30px;
            border: 2px solid var(--accent);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9998;
            transform: translate(-50%, -50%);
            transition: all 0.3s ease;
            opacity: 0.5;
        }
        
        .custom-cursor.hover {
            transform: translate(-50%, -50%) scale(2);
        }
        
        .cursor-follower.hover {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0.8;
        }
        
        @media (max-width: 768px) {
            .custom-cursor,
            .cursor-follower {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Animation d'entrée pour les éléments visibles
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach((el, index) => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                setTimeout(() => {
                    el.classList.add('visible');
                }, index * 100);
            }
        });
    }, 500);
});

// ===== Section Solutions d'automatisation IA =====
function renderAutomationCases() {
    if (typeof AUTOMATION_CASES === 'undefined') return;

    const container = document.getElementById('automation-cases');
    if (!container) return;

    container.innerHTML = AUTOMATION_CASES.map((useCase, index) => {
        const benefitsHtml = useCase.benefits.map(b => `
            <div class="automation-card-benefit">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>${b}</span>
            </div>
        `).join('');

        return `
            <article class="automation-card fade-in" data-aos="fade-up" data-automation-id="${useCase.id}" style="animation-delay: ${index * 100}ms">
                <div class="automation-card-icon" aria-hidden="true">
                    ${useCase.icon}
                </div>
                <span class="automation-card-sector">${useCase.sector}</span>
                <h3>${useCase.title}</h3>
                <p class="automation-card-description">${useCase.shortDescription}</p>
                <div class="automation-card-benefits">
                    ${benefitsHtml}
                </div>
                <button class="automation-card-btn" data-automation-id="${useCase.id}" aria-label="Voir le fonctionnement de ${useCase.title}">
                    Voir le fonctionnement
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
            </article>
        `;
    }).join('');

    // Observer les nouvelles cartes pour les animations au scroll
    if (typeof observer !== 'undefined') {
        document.querySelectorAll('.automation-card').forEach(card => {
            observer.observe(card);
        });
    }
}

function openAutomationModal(useCaseId) {
    if (typeof AUTOMATION_CASES === 'undefined' || typeof AUTOMATION_TECHNOLOGIES === 'undefined') return;

    const useCase = AUTOMATION_CASES.find(c => c.id === useCaseId);
    if (!useCase) return;

    const modal = document.getElementById('automation-modal');
    const body = document.getElementById('automation-modal-body');
    if (!modal || !body) return;

    const beforeList = useCase.before.map(step => `<li>${step}</li>`).join('');
    const afterList = useCase.after.map(step => `<li>${step}</li>`).join('');

    const roi = useCase.roi;
    const roiHtml = `
        <div class="automation-roi-card">
            <div class="value">${roi.timePerWeek}</div>
            <div class="label">Temps économisé par semaine</div>
        </div>
        <div class="automation-roi-card">
            <div class="value">${roi.timePerMonth}</div>
            <div class="label">Temps économisé par mois</div>
        </div>
        <div class="automation-roi-card">
            <div class="value">${roi.errorReduction}</div>
            <div class="label">Réduction des erreurs</div>
        </div>
        <div class="automation-roi-card">
            <div class="value">${roi.payback}</div>
            <div class="label">Retour sur investissement</div>
        </div>
    `;

    const techHtml = useCase.technologies.map(tech => {
        const techData = AUTOMATION_TECHNOLOGIES[tech] || { name: tech, color: '#999' };
        return `
            <div class="automation-tech-item">
                <span class="automation-tech-dot" style="background-color: ${techData.color}"></span>
                <span>${techData.name}</span>
            </div>
        `;
    }).join('');

    body.innerHTML = `
        <div class="automation-detail-header">
            <div class="automation-card-icon" aria-hidden="true">
                ${useCase.icon}
            </div>
            <div class="automation-detail-title">
                <span class="automation-card-sector">${useCase.sector}</span>
                <h3 id="automation-modal-title">${useCase.title}</h3>
            </div>
        </div>

        <div class="automation-detail-block">
            <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                Le problème
            </h4>
            <p>${useCase.problem}</p>
        </div>

        <div class="automation-detail-block">
            <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Avant / Après
            </h4>
            <div class="automation-timeline-grid">
                <div class="automation-timeline before">
                    <h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        Avant
                    </h5>
                    <ul>${beforeList}</ul>
                </div>
                <div class="automation-timeline after">
                    <h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                        Après
                    </h5>
                    <ul>${afterList}</ul>
                </div>
            </div>
        </div>

        <div class="automation-detail-block">
            <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                Workflow
            </h4>
            <div class="automation-workflow">
                <div class="automation-workflow-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <p>Capture d'écran du workflow n8n à ajouter ici</p>
                <button class="automation-workflow-btn" disabled>
                    Voir le workflow
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </button>
            </div>
        </div>

        <div class="automation-detail-block">
            <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>
                ROI
            </h4>
            <div class="automation-roi">
                ${roiHtml}
            </div>
        </div>

        <div class="automation-detail-block">
            <h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                Technologies utilisées
            </h4>
            <div class="automation-tech-list">
                ${techHtml}
            </div>
        </div>

        <div class="automation-detail-block" style="text-align: center; margin-bottom: 0;">
            <a href="#contact" class="btn btn-primary automation-modal-close-link">Discuter de mon projet</a>
        </div>
    `;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Fermer la modal au clic sur les liens internes
    body.querySelectorAll('.automation-modal-close-link').forEach(link => {
        link.addEventListener('click', closeAutomationModal);
    });
}

function closeAutomationModal() {
    const modal = document.getElementById('automation-modal');
    const body = document.getElementById('automation-modal-body');
    if (!modal) return;

    modal.classList.remove('open');
    document.body.style.overflow = '';
    if (body) {
        setTimeout(() => {
            body.innerHTML = '';
        }, 300);
    }
}

function initAutomationModal() {
    const modal = document.getElementById('automation-modal');
    const closeBtn = document.querySelector('.automation-modal-close');
    const overlay = document.querySelector('.automation-modal-overlay');
    if (!modal) return;

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.automation-card-btn');
        if (btn) {
            const id = btn.getAttribute('data-automation-id');
            if (id) openAutomationModal(id);
        }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeAutomationModal);
    if (overlay) overlay.addEventListener('click', closeAutomationModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeAutomationModal();
        }
    });
}

// ===== Effet de compteur pour les statistiques (si ajouté) =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// ===== Filtrage des projets par catégorie =====
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card[data-category]');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.setAttribute('aria-selected', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.classList.remove('is-hidden');
            } else {
                card.classList.add('is-hidden');
            }
        });
    });
});

// ===== Gestion du thème (pour extension future) =====
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
    });
    
    // Charger le thème sauvegardé
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
    }
}
