"use client";

import { useCallback, useEffect, useState } from "react";
import { Input } from "@shadcn/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shadcn/select";
import { Button } from "@shadcn/button";
import { cuisines } from "@constants/cuisines";
import { setButtonVisibility, submitForm } from "@/components/search-panel/SearchPanel.funcs";

export function SearchPanel() {
    const [query, setQuery] = useState("");
    const [cuisine, setCuisine] = useState("none");
    const [maxReadyTime, setMaxReadyTime] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const onQueryInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value),
        [],
    );

    const onReadyTimeInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => setMaxReadyTime(e.target.value),
        [],
    );

    const onCuisineChange = useCallback((value: string) => setCuisine(value), []);

    useEffect(
        () => setButtonVisibility(query, maxReadyTime, cuisine, setIsButtonDisabled),
        [query, maxReadyTime, cuisine],
    );

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        submitForm(query, maxReadyTime, cuisine);
    };

    return (
        <section aria-labelledby="search-panel-title" className="w-full p-4">
            <h2 id="search-panel-title" className="sr-only">
                Search Panel - Select your preferences
            </h2>
            <form
                onSubmit={onFormSubmit}
                className="flex flex-col flex-wrap items-stretch justify-center gap-4 sm:flex-row sm:items-end"
            >
                <label id="query-label" className="sr-only" htmlFor="query">
                    What do you want to cook?
                </label>
                <Input
                    className="w-full sm:max-w-56"
                    value={query}
                    onChange={onQueryInputChange}
                    type="text"
                    name="query"
                    placeholder="What do you want to cook?"
                />
                <label id="cuisine-label" className="sr-only" htmlFor="cuisine">
                    Select a cuisine
                </label>
                <Select onValueChange={onCuisineChange} value={cuisine}>
                    <SelectTrigger className="w-full sm:max-w-48">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="none">Select a cuisine</SelectItem>
                        {Object.entries(cuisines).map(([key, value], i) => (
                            <SelectItem key={i} value={key}>
                                {value}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <label id="maxReadyTime-label" className="sr-only" htmlFor="maxReadyTime">
                    Max ready time (mins)
                </label>
                <Input
                    value={maxReadyTime}
                    onChange={onReadyTimeInputChange}
                    type="number"
                    name="maxReadyTime"
                    placeholder="Max ready time (mins)"
                    className="w-full sm:max-w-48"
                    min={0}
                />
                <Button type="submit" variant="outline" disabled={isButtonDisabled}>
                    Next
                </Button>
            </form>
        </section>
    );
}
