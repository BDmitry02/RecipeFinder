import Image from "next/image";
import Link from "next/link";
import { routes } from "@constants/api/routes";
import { SearchRecipe } from "@type/recipes/recipes-search-response";

interface SingleRecipeCardProps {
    recipe: SearchRecipe;
}

export function SingleRecipeCard({ recipe }: SingleRecipeCardProps) {
    return (
        <div className="flex h-full w-full flex-col gap-4 rounded-md border-2 border-border p-4">
            <Link href={routes.recipes + `/${recipe.id}`} className="relative h-48 w-full">
                <Image src={recipe.image} alt={recipe.title} sizes="20rem" fill className="object-cover" />
            </Link>
            <h4>{recipe.title}</h4>
        </div>
    );
}
