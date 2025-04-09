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
            <section
                className="flex flex-col items-center justify-center gap-8"
                aria-label="Recipes list"
                role="region"
            >
                {recipes.results.length > 0 ? (
                    <div
                        className="grid w-full grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] justify-items-center gap-6"
                        aria-live="polite"
                    >
                        {recipes.results.map((recipe) => (
                            <div key={recipe.id} className="w-72">
                                <SingleRecipeCard recipe={recipe} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <p role="status">No recipes found.</p>
                        <Button variant="outline" className="rounded-md">
                            <Link href={routes.homePage}>Back To Search</Link>
                        </Button>
                    </>
                )}
            </section>
        </div>
    );
}
