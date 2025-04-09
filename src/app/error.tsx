"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import { routes } from "@constants/api/routes";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
    const router = useRouter();

    useEffect(() => {
        console.error("Global Error:", error);
    }, [error]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-muted px-6 text-center">
            <div className="w-full max-w-md rounded-2xl border bg-background p-8 shadow-lg">
                <div className="mb-4 flex items-center justify-center">
                    <AlertCircle className="h-10 w-10 text-destructive" />
                </div>
                <h1 className="mb-2 text-2xl font-semibold">Oops! Something went wrong</h1>
                <p className="mb-6 text-muted-foreground">
                    We couldn&apos;t load the page. This might be due to a temporary issue or a broken
                    connection.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button onClick={() => reset()} variant="default">
                        Try again
                    </Button>
                    <Button variant="outline" onClick={() => router.push(routes.homePage)}>
                        Back to Home
                    </Button>
                </div>
            </div>
        </div>
    );
}
