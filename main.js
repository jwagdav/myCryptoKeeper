document.querySelector('button').addEventListener('click', getFetch);



function getFetch(){
    const coin = document.querySelector('input').value;
    const currency = document.querySelector('#currency').value;
    const url = `https://api.coingecko.com/api/v3/coins/${coin}`;

    fetch(url)
        .then(res => res.json()) //parse response as JSON
        .then(data => {
            console.log(data);
            const h2 = document.querySelector('h2');
            h2.innerText = `$ ${data.market_data.current_price[currency]}`;

            const info = document.querySelector('.info');
            info.innerHTML = `<h1>${data.name}<h1> </p>${data.description.en}</p>`;
        })

        .catch(err => {
            console.log(`Error: ${err}`);
        })
    
}