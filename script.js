// Email copy functionality 
const emailLink = document.querySelector('.email-link');

emailLink.addEventListener('click', (e) => {
  e.preventDefault();
  const email = emailLink.dataset.email;
  navigator.clipboard.writeText(email).then(() => {
    alert(`Copied ${email} to clipboard!`);
  }, (err) => {
    console.error('Could not copy email: ', err);
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Google Form Responsiveness
$(document).ready(function() {
    function resizeIframe() {
      var iframe = $('iframe');
      iframe.height(iframe.contents().find('body').height());
    }
    
    resizeIframe();
    $(window).resize(resizeIframe);
  });