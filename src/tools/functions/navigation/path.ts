import { WithIndexer } from "@type/general-types";
import { RecipesQueryParams } from "@type/recipes/recipes-search-response";
import { isNullOrUndefined } from "@functions/checkers";

export function addQueryParamsToPath(
    path: string,
    queryParams?: RecipesQueryParams[] | WithIndexer<string>
) {
    if (!queryParams) return path;

    let searchParams: string;

    if (Array.isArray(queryParams)) {
        searchParams = convertArrayParamsToString(queryParams);
    } else {
        searchParams = convertObjectParamsToString(queryParams);
    }

    return `${path}?${searchParams}`;
}
function convertArrayParamsToString(queryParams: RecipesQueryParams[]) {
    const searchParams = queryParams
        .flatMap((param) =>
            Object.entries(param).filter(
                ([key, value]) =>
                    !isNullOrUndefined(key) && !isNullOrUndefined(value)
            )
        )
        .map(([key, value]) => `${key}=${value}`)
        .join("&");

    return searchParams;
}

function convertObjectParamsToString(queryParams: WithIndexer<string>) {
    const searchParams = Object.entries(queryParams)
        .filter(
            ([key, value]) =>
                !isNullOrUndefined(key) && !isNullOrUndefined(value)
        )
        .map(
            ([key, value]) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        )
        .join("&");

    return searchParams;
}
