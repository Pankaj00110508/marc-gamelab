document.addEventListener('DOMContentLoaded', () => {
  // Change header background on scroll
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

const formData = {
  name: document.getElementById('name').value,
  email: document.getElementById('email').value,
  message: document.getElementById('message').value,
};

fetch('https://script.google.com/macros/s/AKfycbwgDu9sc0MrEziGm1mUZJPD9D-5gbaWO35ocxARVAEL/dev', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
.then(response => response.json())
.then(data => {
  if (data.result === 'Success') {
    alert('Message sent successfully!');
    contactForm.reset();
  } else {
    alert('Failed to submit form. Please try again.');
  }
})
.catch(error => {
  console.error('Submission error:', error);
  alert('Failed to submit form. Please try again.');
});
