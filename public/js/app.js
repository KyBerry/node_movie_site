const searchForm = document.querySelector('form');
const search = document.querySelector('.searchbox');
const placeholder = document.querySelectorAll('.movie-section__placeholder');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const movie = search.value;
    fetch(`/search?movie=${movie}`)
    .then((response) => {
        response.json()
        .then((data) => {
            if (data) {
                console.log(data);
            } else {
                console.log(data);
            }
        });
    });
    search.value = '';
});

setTimeout(() => {
    placeholder.forEach((item) => {
            item.remove();
        });
}, 1000);
