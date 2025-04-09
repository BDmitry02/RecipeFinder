import Link from "next/link";
import { SingleRecipeCard } from "@/components/single-recipe-card/SingleRecipeCard";
import { RecipesSearchResult } from "@type/recipes/recipes-search-response";
import { routes } from "@constants/api/routes";
import { Button } from "../shadcn/button";
import { BackArrow } from "../back-arrow/BackArrow";

interface RecipesListProps {
    recipes: RecipesSearchResult;
}

export function RecipesList({ recipes }: RecipesListProps) {
    return (
        <div>
            {recipes.results.length > 0 && <BackArrow />}
            <div className="flex flex-col gap-8 items-center justify-center">
                {recipes.results.length > 0 ? (
                    <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6 w-full justify-items-center">
                        {recipes.results.map((recipe) => (
                            <div key={recipe.id} className="w-72">
                                <SingleRecipeCard recipe={recipe} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <p>No recipes found.</p>
                        <Button variant="outline" className="rounded-md">
                            <Link href={routes.homePage}>Back To Search</Link>
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}
