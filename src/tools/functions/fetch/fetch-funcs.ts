import { addQueryParamsToPath } from "@functions/navigation/path";
import { WithIndexer } from "@type/general-types";
import { envKeys } from "@constants/env-keys";
import { RecipesQueryParams } from "@type/recipes/recipes-search-response";

export async function fetchGet<T>(
    url: string,
    queryParams?: RecipesQueryParams[] | WithIndexer<string>,
    params?: WithIndexer<number>
) {
    const completedUrl = addQueryParamsToPath(url, queryParams);

    try {
        const response = await fetch(completedUrl, {
            method: "GET",
            headers: { "x-api-key": process.env[envKeys.spoonacularApiKey]! },
            next: { ...params },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = (await response.json()) as T;

        return data;
    } catch (error) {
        console.error("Error in fetchGet:", error);
        throw error;
    }
}
