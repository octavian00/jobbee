import { NextResponse } from "next/server"

const allowedParams = [
    "keyword",
    "location",
    "page",
    "education",
    "experience",
    "salary",
    "jobType",
    "next",
]

export async function middleware(req) {
    //const country = req.geo.contry

    const url = req.nextUrl;
    let changed = false;

    console.log(url);

    url.searchParams.forEach((param, key) => {
        if (!allowedParams.includes(key)) {
            url.searchParams.delete(key);
            changed = true;
        }
    });

    if(changed) {
        return NextResponse.redirect(url);
    }
}