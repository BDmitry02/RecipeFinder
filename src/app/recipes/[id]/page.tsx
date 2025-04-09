import { apiEndpoints } from "@constants/api/api-endpoints";
import { Recipe, RecipeResponse } from "@type/recipes/recipes-search-response";
import { fetchGet } from "@functions/fetch/fetch-funcs";
import { SingleRecipe } from "@/components/single-recipe/SingleRecipe";

interface SingleRecipePageProps {
    params: {
        id: string;
    };
}

export default async function SingleRecipePage({
    params,
}: SingleRecipePageProps) {
    const requestUrl = apiEndpoints.singleRecipePage.replace("{id}", params.id);

    const res = await fetchGet<RecipeResponse>(requestUrl);

    const recipeData: Recipe = {
        title: res.title,
        image: res.image,
        extendedIngredients: res.extendedIngredients.map((ingredient: any) => ({
            name: ingredient.name,
            amount: ingredient.amount,
            unit: ingredient.unit,
        })),
    };

    return (
        <div className="py-8 px-4">
            <SingleRecipe recipe={recipeData} />
        </div>
    );
}
