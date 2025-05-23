import * as model from './model.js';
import recipeView from './views/recipeView.js';
//import icons from '../img/icons.svg'; // parcel 1
import icons from 'url:../img/icons.svg';   //parcel 2
import 'core-js/stable';
import 'regenerator-runtime/runtime';
console.log(icons)
const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
/*  moved  to  recipeView
const  renderSpinner = function(parentEl) {
  const markup = ` <div class="spinner">
  <svg>
    <use href="${icons}#icon-loader"></use>
          </svg> 
</div> `;
parentEl.innerHTML='';
parentEl.insertAdjacentHTML('afterbegin', markup);
};
*/
// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////
console.log("Test")

renderSpinner(recipeContainer);

//1. loading recipe 
await model.loadRecipe(id); 
//const {mdoel}= model.state.recipe
/*  moved  to  model 
const showRecipe = async function () {
  try {
   //const res = await fetch ('https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886'
   const id = window.location.hash.slice(1);
   console.log(id);
  //  renderSpinner(recipeContainer);  move  outside 
   //const  res = await fetch ('https://forkify-api.jonas.io/api/v2/recipes/664c8f193e7aa067e94e8454'
   const res = await fetch (`https://forkify-api.jonas.io/api/v2/${id}`
    // "664c8f193e7aa067e94e8454
    );
    const  data = await res.json();
    console.log(res,data);
    let {recipe} = data.data
    recipe={
      id : recipe.id,
      title : recipe.title,
      publisher : recipe.publisher,
      sourceUrl : recipe.source_url,
      image : recipe.image_url,
      servings : recipe.servings,
      cookingTime : recipe.cooking_time,
      ingridents: recipe.ingridents
    }
    console.log(recipe)
     */
    //2.  rendering  recipe 
    
    recipeView.render(model.state.recipe);
    /* moved  to  recipeviews
    const markup=`
        <figure class="recipe__fig">
          <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${recipe.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${recipe.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--increase-servings">
                <svg>
                  <use href="src/img/icons.svg#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated">
            <svg>
              <use href="src/img/icons.svg#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round">
            <svg class="">
              <use href="src/img/icons.svg#icon-bookmark-fill"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">
           ${recipe.ingridents.map(ing =>{
            return `<li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${ing.quantity}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${ing.unit}</span>
                  ${ing.decription} 
                   </div>
            </li> `;
           }).join('')}  
          </div>
      
           

            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="src/img/icons.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">0.5</div>
              <div class="recipe__description">
                <span class="recipe__unit">cup</span>
                ricotta cheese
              </div>
            </li>
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${recipe.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${recipe.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div> `;
      
        recipeContainer.innerHTML='';
        recipeContainer.insertAdjacentHTML('afterbegin', markup)
        */
  } catch (err) {
    alert(err);
  }
};
//https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886
showRecipe();

['haschange', 'load'].forEach(ev => window.addEventListener(ev.showRecipe))
window.addEventListener('hashchange', showRecipe);
window.addEventListener('load', showRecipe);