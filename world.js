window.addEventListener('DOMContentLoaded', () => {
    const countryInput = document.querySelector('#country');
    const result = document.querySelector('#result');

    function search(lookup) {
        const country = encodeURIComponent(countryInput.value.trim());
        let url = `world.php?country=${country}`;
        if (lookup === 'cities') {
            url += '&lookup=cities';
        }

        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('Request failed');
                return response.text();
            })
            .then(html => {
                result.innerHTML = html;
            })
            .catch(error => {
                result.textContent = 'Something went wrong: ' + error.message;
            });
    }

    document.querySelector('#lookup').addEventListener('click', () => search('country'));
    document.querySelector('#lookup-cities').addEventListener('click', () => search('cities'));
});
