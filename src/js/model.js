import {async} from 'regenerator-runtime';
export  const  state = {
    recipe: {},
};

export  const loadRecipe= async function (id) {
  try {
    const res = await fetch(`${api_}`) 
     //(`https://forkify-api.jonas.io/api/v2/${id}`
        // "664c8f193e7aa067e94e8454
        );
        const  data = await res.json();
        console.log(res,data);
        if  (!res.ok) throw new Error(`${data.message} (${res.status})`)
        const {recipe} = data.data
        state.recipe={
          id : recipe.id,
          title : recipe.title,
          publisher : recipe.publisher,
          sourceUrl : recipe.source_url,
          image : recipe.image_url,
          servings : recipe.servings,
          cookingTime : recipe.cooking_time,
          ingridents: recipe.ingridents
        }
        console.log(state.recipe)
} 