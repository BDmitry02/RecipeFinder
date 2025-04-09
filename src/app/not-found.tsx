"use client";

import Link from "next/link";
import { Ghost } from "lucide-react";
import { Button } from "@shadcn/button";
import { routes } from "@constants/api/routes";

export default function NotFound() {
    return (
        <div className="flex min-h-[80vh] w-full flex-col items-center justify-center gap-4 text-center">
            <Ghost className="h-12 w-12 text-muted-foreground" />
            <h2 className="text-2xl font-bold text-foreground">Page Not Found</h2>
            <p className="max-w-sm text-sm text-muted-foreground">
                Oops! The page you&apos;re looking for doesn’t exist or has been moved.
            </p>
            <Button asChild className="mt-2">
                <Link href={routes.homePage}>Back to Home</Link>
            </Button>
        </div>
    );
}
