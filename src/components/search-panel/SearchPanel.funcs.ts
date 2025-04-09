import { routes } from "@constants/api/routes";
import { navigate } from "@functions/navigation/navigate";
import { SetStateFunc } from "@type/funcs-types";

export function setButtonVisibility(
    query: string,
    maxReadyTime: string,
    cuisine: string,
    setIsButtonDisabled: SetStateFunc<boolean>
) {
    const time = Number(maxReadyTime);

    if (query || time || cuisine !== "none") {
        setIsButtonDisabled(false);
    } else {
        setIsButtonDisabled(true);
    }
}

export function submitForm(
    query: string,
    maxReadyTime: string,
    cuisine: string
) {
    const searchParams = [];

    searchParams.push({ number: "50" });

    if (query) {
        searchParams.push({ query });
    }

    if (Number(maxReadyTime)) {
        searchParams.push({ maxReadyTime });
    }
    if (cuisine !== "none") {
        searchParams.push({ cuisine });
    }

    navigate(routes.recipes, searchParams);
}
