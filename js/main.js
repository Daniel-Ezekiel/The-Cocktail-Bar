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

    // Then create the content with which to populate the div
    // Create h2 element for the drink title
    const h2 = document.createElement('h2');
    h2.textContent = drink.strDrink;

    // Create img element to for the cocktail image
    const img = document.createElement('img');
    img.classList.add('cocktail-img');
    img.src = drink.strDrinkThumb;

    // Create h3 element for the instructions heading
    const h3 = document.createElement('h3');
    h3.textContent = 'How to prepare';

    // Create p element for the preparation instructions
    const p = document.createElement('p');
    p.textContent = drink.strInstructions;

    // Append all content elements into the div
    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);

    // Append the div and it's contents to the swiperWrapper in the DOM
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.appendChild(div);
}