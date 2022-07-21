document.querySelector('#getDrink').addEventListener('click', clearSlideAndGetDrink);

function clearSlideAndGetDrink(){
    let swiperSlide = document.querySelectorAll('.swiper-slide');
    if(swiperSlide !== null){
        swiperSlide.forEach(e => e.remove());
    };
    const drinkInput = document.querySelector('input').value.toLowerCase();


    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkInput}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data);

            const drinks = data.drinks;
            drinks.forEach(drink => {
            drinkToDOM(drink);
            });


        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

function drinkToDOM(drink){
    // First create a div for the swiper-slide
    const div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.classList.add('swiper-slide-active');

    // Add content to the created div
    div.innerHTML = `
        <h2>${drink.strDrink}</h2>
        <img class="cocktail-img" src="${drink.strDrinkThumb}">
        <h3>How to prepare</h3>
        <p>${drink.strInstructions}</p>
    `;

    // Append the div and it's contents to the swiperWrapper in the DOM
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.appendChild(div);
}