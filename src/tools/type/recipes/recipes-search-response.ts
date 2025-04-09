export interface RecipesQueryParams {
    query?: string;
    cuisine?: string;
    maxReadyTime?: string;
    offset?: string;
    [key: string]: string | undefined;
}

export interface RecipesSearchResult {
    results: SearchRecipe[];
    offset: number;
    number: number;
    totalResults: number;
}

export interface SearchRecipe {
    id: number;
    title: string;
    image: string;
    imageType: string;
}

export interface Ingredient {
    name: string;
    amount: number;
    unit: string;
}

export interface Recipe {
    title: string;
    image: string;
    extendedIngredients: Ingredient[];
}

export interface RecipeResponse {
    id: number;
    image: string;
    imageType: string;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    lowFodmap: boolean;
    weightWatcherSmartPoints: number;
    gaps: string;
    preparationMinutes: number | null;
    cookingMinutes: number | null;
    aggregateLikes: number;
    healthScore: number;
    creditsText: string;
    license: string | null;
    sourceName: string;
    pricePerServing: number;
    extendedIngredients: Ingredient[];
    summary: string;
    cuisines: string[];
    dishTypes: string[];
    diets: string[];
    occasions: string[];
    instructions: string;
    analyzedInstructions: { name: string; steps: any[] }[];
    originalId: string | null;
    spoonacularScore: number;
    spoonacularSourceUrl: string;
}
