document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Menu
    const navUl = document.querySelector('nav ul');
    const navElement = document.querySelector('nav');
    const header = document.querySelector('header');

    // Create hamburger icon
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    header.insertBefore(hamburger, navElement);

    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // 2. Scroll Animations (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => observer.observe(el));

    // 3. Dynamic Typing Effect (for Home Page)
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        const text = typingElement.getAttribute('data-text');
        typingElement.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }

        setTimeout(typeWriter, 500); // start after a small delay
    }

    // 4. Form Validation & Handling (for Join Us Page)
    const joinForm = document.getElementById('join-form');
    if (joinForm) {
        joinForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // simple validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();

            if (name === '' || email === '') {
                alert('Please fill out the required fields.');
                return;
            }

            // show success message
            const successMsg = document.getElementById('form-success');
            joinForm.style.display = 'none';
            successMsg.style.display = 'block';
        });
    }

    // 5. Mission Modals (for Missions Page)
    const missionCards = document.querySelectorAll('.mission-card');
    const modal = document.getElementById('mission-modal');

    if (modal && missionCards.length > 0) {
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-desc');
        const closeBtn = document.querySelector('.close-btn');

        missionCards.forEach(card => {
            card.addEventListener('click', () => {
                modalTitle.textContent = card.querySelector('h3').textContent;
                modalDesc.textContent = card.querySelector('.detailed-desc').textContent;
                modal.classList.add('show');
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
});
