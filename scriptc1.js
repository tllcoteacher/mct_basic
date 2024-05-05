// script.js

// Smooth scrolling functionality
document.querySelectorAll('.scroll-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Email copy functionality
  function copyEmailToClipboard() {
    const email = 'mark@mathcoteacher.com';
    navigator.clipboard.writeText(email).then(() => {
      alert('Email copied to clipboard!');
    }, (err) => {
      console.error('Could not copy text: ', err);
    });
  }