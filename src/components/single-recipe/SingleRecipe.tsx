import { Recipe } from "@type/recipes/recipes-search-response";
import Image from "next/image";
import { BackArrow } from "../back-arrow/BackArrow";

interface SingleRecipeProps {
    recipe: Recipe;
}

export function SingleRecipe({ recipe }: SingleRecipeProps) {
    return (
        <div>
            <BackArrow />
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center p-6">
                <section
                    className="relative mb-6 aspect-video w-full max-w-2xl overflow-hidden rounded-lg shadow-lg"
                    aria-label={`Image of ${recipe.title}`}
                >
                    <Image
                        src={recipe.image}
                        alt={recipe.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority
                    />
                </section>

                <section aria-labelledby="recipe-title">
                    <h1 className="mb-6 text-center text-4xl font-bold">{recipe.title}</h1>
                </section>

                <div className="w-full max-w-2xl">
                    <section aria-labelledby="ingredients-title">
                        <h2 className="mb-4 text-2xl font-semibold">Ingredients</h2>
                    </section>
                    <section aria-labelledby="ingredients-list">
                        <ul className="space-y-4">
                            {recipe.extendedIngredients.map((ingredient, index) => (
                                <li
                                    key={index}
                                    className="flex items-center justify-between rounded-lg p-4 shadow-md"
                                >
                                    <span className="text-lg">
                                        {ingredient.amount} {ingredient.unit} {ingredient.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
