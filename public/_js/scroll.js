const header = document.getElementById('header');
const container = document.getElementById('content-container');

container.addEventListener('scroll', function() {
    if (container.scrollTop > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
})

function toggle() {
    document.getElementById('header').classList.toggle('active');
}
