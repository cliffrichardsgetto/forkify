import icons from 'url:../../img/icons.svg' ;
import Fraction from 'fractional';
console.log(fraction );

export class RecipeView {
   parentElement = document.querySelector('recipe');
   data;
   render(data) {
    this.data=data;
    const markup =this.generateMarkup;
    this.#clear;
    this.#parentElement.innerHTML=''; 
    
    clear() {
        this.parentElement.innerHTML='';
    } 
    renderSpinner = function() {
        const markup = ` <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
                </svg> 
      </div> `;
      this.#parentElement.innerHTML='';
      this.#parentElement.insertAdjacentHTML('afterbegin', markup);
      };
    recipeContainer.innerHTML='';
    recipeContainer.insertAdjacentHTML('afterbegin', markup)
   }

    generateMarkup() {
        return `
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
    
            generateMarkupIngredient() ing =>  {
                return `
            <div class="recipe__ingredients">
              <h2 class="heading--2">Recipe ingredients</h2>
              <ul class="recipe__ingredient-list">
               ${recipe.ingridents.map(ing =>{
                return `<li class="recipe__ingredient">
                  <svg class="recipe__icon">
                    <use href="src/img/icons.svg#icon-check"></use>
                  </svg>
                  <div class="recipe__quantity">${ing.quantity ? new Fraction(ing.quantity).toString() : '' }</div>
                  <div class="recipe__description">
                    <span class="recipe__unit">${ing.unit}</span>
                      ${ing.decription} 
                       </div>
                </li> `;
               }).join('')}  
              </div>
          `
               
    
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
          
   } 

}
export  default new RecipeView( );