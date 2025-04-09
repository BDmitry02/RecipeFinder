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
            <div className="w-full max-w-5xl mx-auto p-6 flex flex-col items-center">
                <div className="relative w-full max-w-2xl aspect-video mb-6 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={recipe.image}
                        alt={recipe.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority
                    />
                </div>

                <h1 className="text-4xl font-bold text-center mb-6">
                    {recipe.title}
                </h1>

                <div className="w-full max-w-2xl">
                    <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
                    <ul className="space-y-4">
                        {recipe.extendedIngredients.map((ingredient, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center p-4 rounded-lg shadow-md"
                            >
                                <span className="text-lg">
                                    {ingredient.amount} {ingredient.unit}{" "}
                                    {ingredient.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
