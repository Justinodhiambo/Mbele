document.addEventListener('click', function(event) {
    var dropdown = document.querySelector('.dropdown-menu');
    var globe = document.querySelector('.dropdown button');

    if (globe.contains(event.target)) {
        dropdown.classList.toggle('hidden');
    } else {
        dropdown.classList.add('hidden');
    }
});
