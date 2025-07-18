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

    // Note: Your contact form handling code here (getElementById('contactForm'))
    // seems to be for an *internal* form. Since you're now linking to a Google Form,
    // this specific block of JS for form submission simulation might not be needed
    // unless you plan to add an internal form later. I'll leave it as is,
    // but keep in mind it's currently unused for the Google Forms link.

    // Gestionarea formularului de contact (This part might be removed if only Google Forms are used)
    const contactForm = document.getElementById('contactForm'); // This ID doesn't exist in your HTML now
    const formMessage = document.getElementById('formMessage'); // This ID doesn't exist in your HTML now

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Oprește reîncărcarea paginii

            const nume = document.getElementById('nume').value;
            const email = document.getElementById('email').value;
            const mesaj = document.getElementById('mesaj').value;

            if (nume === '' || email === '' || mesaj === '') {
                displayMessage('Toate câmpurile sunt obligatorii!', 'error');
                return;
            }

            formMessage.classList.add('hidden');
            displayMessage('Se trimite...', 'info');

            setTimeout(() => {
                const success = Math.random() > 0.3;

                if (success) {
                    displayMessage('Mesajul a fost trimis cu succes! Vă mulțumim.', 'success');
                    contactForm.reset();
                } else {
                    displayMessage('A apărut o eroare la trimitere. Vă rugăm să încercați din nou.', 'error');
                }
            }, 2000);
        });
    }

    function displayMessage(message, type) {
        // This function will only be called if the `contactForm` and `formMessage` elements exist.
        // As per the HTML changes, they are no longer there for the external Google Form link.
        if (formMessage) { // Added a check to prevent errors
            formMessage.textContent = message;
            formMessage.className = '';
            formMessage.classList.add(type);
            formMessage.classList.remove('hidden');

            if (type !== 'error') {
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                }, 5000);
            }
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