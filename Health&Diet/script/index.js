
let foodsHTML = '';

foods.forEach((food)=> {

    foodsHTML += `
    <div class="type-plan"> <u>${food.mealP}</u>
    <div class="s-container">
    <div class="thumbnail">
        <img class="bf-img" src="${food.image}" alt="">
    </div>
    <div class="meal-plan">${food.name}</div>
    <div class="author">By <u>${food.author}</u> &#65372;<span class="published">Published on ${food.published} </span></div>
    <div class="reviewed">Reviewed by ${food.reviewed}</div>
</div>
</div>`
});

document.querySelector('.js-grid-container').innerHTML = foodsHTML;


