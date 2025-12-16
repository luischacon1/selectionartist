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

// Unlock - elegant fade out then redirect to WhatsApp
function unlockVault() {
  // First fade out the gate
  gate.style.transition = 'opacity 0.4s ease';
  gate.style.opacity = '0';
  
  // Then fade out the entire page
  setTimeout(() => {
    document.body.style.transition = 'opacity 1.2s ease-out';
    document.body.style.opacity = '0';
  }, 200);
  
  // Redirect at the end of the fade
  setTimeout(() => {
    window.location.href = 'https://wa.link/ajmv7u';
  }, 1400);
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
