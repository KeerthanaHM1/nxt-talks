// Modal Functions
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "block";
  }
  
  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none";
  }
  
  // Carousel Slide Function
  function moveSlide(id, direction) {
    const track = document.getElementById(id + '-track');
    if (!track) return;
  
    const card = track.querySelector('.traineer-card');
    if (!card) return;
  
    const cardWidth = card.offsetWidth + 20; // adjust if gap differs
    track.scrollLeft += direction * cardWidth;
  }
  
  // Filter Buttons Logic
  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.filter-btn');
    const sections = document.querySelectorAll('.traineer-card-container, .traineer-carousel-container');
  
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
  
        sections.forEach(sec => sec.classList.remove('active'));
        const targetSection = document.getElementById(btn.dataset.target);
        if (targetSection) {
          targetSection.classList.add('active');
        }
      });
    });
  });
  