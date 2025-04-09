"use server";
import { redirect } from "next/navigation.js";
import { QueryParams } from "@type/query-param";
import { addQueryParamsToPath } from "@functions/navigation/path";

export async function navigate(path: string, queryParams?: QueryParams[]) {
    const url = addQueryParamsToPath(path, queryParams);
    redirect(url);
}
