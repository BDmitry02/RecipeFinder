import { fetchGet } from "@functions/fetch/fetch-funcs";
import { RecipesSearchResult } from "@type/recipes/recipes-search-response";
import { apiEndpoints } from "@constants/api/api-endpoints";
import { RecipesList } from "@/components/recipes-list/RecipesList";

interface RecipesProps {
    searchParams: {
        query?: string;
        cuisine?: string;
        maxReadyTime?: string;
        offset?: string;
    };
}

export default async function Recipes({ searchParams }: RecipesProps) {
    const data = await fetchGet<RecipesSearchResult>(apiEndpoints.searchResults, searchParams, {
        revalidate: 60,
    });

    return (
        <section className="px-4 py-8">
            <RecipesList recipes={data} />
        </section>
    );
}
