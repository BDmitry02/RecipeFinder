"use client";

import { Loader2 } from "lucide-react";

export default function Loading() {
    return (
        <div className="flex h-[80vh] w-full flex-col items-center justify-center gap-4 text-center">
            <Loader2 className="h-12 w-12 animate-spin" />
            <h2 className="text-xl font-semibold text-muted-foreground">Cooking up your recipes...</h2>
            <p className="text-sm text-muted-foreground">
                Please wait while we fetch delicious ideas for you 🍳
            </p>
        </div>
    );
}
