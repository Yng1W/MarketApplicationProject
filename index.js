// ===== Smooth Scroll to Products =====
const shopNowBtn = document.getElementById('shopNowBtn');
shopNowBtn.addEventListener('click', () => {
    document.querySelector('.products').scrollIntoView({ behavior: 'smooth' });
});

const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
   open('/html/registration.html', '_self');
});
// ===== Buy Now Button Alert =====
const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h3').innerText;
        alert(`You clicked Buy Now for: ${productName}`);
    });
});

// ===== Back-to-Top Button =====
const backToTopBtn = document.createElement('button');
backToTopBtn.innerText = '⬆ Top';
backToTopBtn.id = 'backToTop';
document.body.appendChild(backToTopBtn);

backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.padding = '0.6rem 1rem';
backToTopBtn.style.fontSize = '1rem';
backToTopBtn.style.backgroundColor = '#00bfff';
backToTopBtn.style.color = '#0d1b2a';
backToTopBtn.style.border = 'none';
backToTopBtn.style.borderRadius = '5px';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.display = 'none';
backToTopBtn.style.zIndex = '1000';
backToTopBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';

// Show button when scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

// Scroll to top on click
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
