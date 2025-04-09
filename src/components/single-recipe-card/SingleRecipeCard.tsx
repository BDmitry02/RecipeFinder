import Image from "next/image";
import Link from "next/link";
import { routes } from "@constants/api/routes";
import { SearchRecipe } from "@type/recipes/recipes-search-response";

interface SingleRecipeCardProps {
    recipe: SearchRecipe;
}

export function SingleRecipeCard({ recipe }: SingleRecipeCardProps) {
    return (
        <div className="w-full flex flex-col gap-4 p-4 border-2 border-border rounded-md h-full">
            <Link
                href={routes.recipes + `/${recipe.id}`}
                className="relative w-full h-48"
            >
                <Image
                    src={recipe.image}
                    alt={recipe.title}
                    sizes="20rem"
                    fill
                    className="object-cover"
                />
            </Link>
            <h4>{recipe.title}</h4>
        </div>
    );
}
