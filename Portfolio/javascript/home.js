
    // JavaScript to handle popup display for projects section
document.querySelectorAll('.popup-trigger').forEach(trigger => {
  trigger.addEventListener('click', function (e) {
      e.preventDefault();
      const popupId = this.getAttribute('data-popup');
      document.getElementById(popupId).style.display = 'block';
  });
});

document.querySelectorAll('.close').forEach(closeBtn => {
  closeBtn.addEventListener('click', function () {
      this.closest('.popup').style.display = 'none';
  });
});

// Close the popup when clicking outside of it
window.onclick = function (event) {
  if (event.target.classList.contains('popup')) {
      event.target.style.display = 'none';
  }
};