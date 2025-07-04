document.addEventListener('DOMContentLoaded', () => {
    // Navigare responsivă (Hamburger menu)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Închide meniul la click pe un link (doar pe mobil)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Gestionarea formularului de contact
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Oprește reîncărcarea paginii

            // Aici ar trebui să trimiți datele formularului către un server (backend)
            // Pentru acest exemplu, vom simula o trimitere reușită/eșuată

            const nume = document.getElementById('nume').value;
            const email = document.getElementById('email').value;
            const mesaj = document.getElementById('mesaj').value;

            // Validare simplă
            if (nume === '' || email === '' || mesaj === '') {
                displayMessage('Toate câmpurile sunt obligatorii!', 'error');
                return;
            }

            // Simulează o întârziere pentru a arăta o procesare
            formMessage.classList.add('hidden'); // Ascunde mesajul anterior
            displayMessage('Se trimite...', 'info'); // Poți adăuga o clasă 'info' în CSS

            setTimeout(() => {
                const success = Math.random() > 0.3; // 70% șanse de succes

                if (success) {
                    displayMessage('Mesajul a fost trimis cu succes! Vă mulțumim.', 'success');
                    contactForm.reset(); // Golește formularul
                } else {
                    displayMessage('A apărut o eroare la trimitere. Vă rugăm să încercați din nou.', 'error');
                }
            }, 2000); // Simulează 2 secunde de procesare
        });
    }

    function displayMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = ''; // Resetează clasele
        formMessage.classList.add(type);
        formMessage.classList.remove('hidden');

        // Ascunde mesajul după 5 secunde, cu excepția erorilor
        if (type !== 'error') {
            setTimeout(() => {
                formMessage.classList.add('hidden');
            }, 5000);
        }
    }

    // Smooth scrolling pentru ancore
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});