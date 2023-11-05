import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const data = await resp.json()
    return NextResponse.json(data)
}