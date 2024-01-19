const api_url = 'https://type.fit/api/quotes';

const btn = document.getElementById('quoteButton');
const quote = document.getElementById('quoteDisplay');

btn.addEventListener('click', () => {
    getAPI(api_url);
});

const getAPI = (url) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => displayQuote(getRandomQuote(data)));
};

const displayQuote = (data) => {
    quote.textContent = data.text;
};

const getRandomQuote = (data) => {
    const int = getRandomInt(data.length);

    return data[int];
};

const getRandomInt = (length) => {
    return Math.floor(Math.random() * length + 1);
}

