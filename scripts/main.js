/**
 * ARTIST VAULT
 * Access control system
 */

const SECRET_CODE = '1111';

const gate = document.getElementById('gate');
const access = document.getElementById('access');
const passwordInput = document.getElementById('password');

// Focus input when page loads
window.addEventListener('load', () => {
  setTimeout(() => {
    passwordInput.focus();
  }, 2500); // Wait for animations
});

// Handle password input
passwordInput.addEventListener('input', (e) => {
  const value = e.target.value;
  
  // Remove error state on new input
  gate.classList.remove('is-error');
  
  // Check when 4 digits entered
  if (value.length === 4) {
    setTimeout(() => {
      if (value === SECRET_CODE) {
        unlockVault();
      } else {
        denyAccess();
      }
    }, 300); // Small delay for suspense
  }
});

// Unlock - redirect to WhatsApp
function unlockVault() {
  gate.style.transition = 'opacity 0.6s ease, transform 0.6s ease, filter 0.6s ease';
  gate.style.opacity = '0';
  gate.style.transform = 'translateY(-10px)';
  gate.style.filter = 'blur(5px)';
  
  setTimeout(() => {
    window.location.href = 'https://wa.link/ajmv7u';
  }, 600);
}

// Deny - shake animation
function denyAccess() {
  gate.classList.add('is-error');
  passwordInput.value = '';
  
  // Remove error state after animation
  setTimeout(() => {
    gate.classList.remove('is-error');
  }, 1000);
}

// Subtle cursor light effect
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  document.body.style.background = `
    radial-gradient(
      circle at ${x * 100}% ${y * 100}%,
      rgba(15, 15, 15, 1) 0%,
      rgba(0, 0, 0, 1) 50%
    )
  `;
});

// Prevent scrolling
document.body.style.overflow = 'hidden';
