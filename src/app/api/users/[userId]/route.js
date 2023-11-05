import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const {searchParams} = new URL(request.url)
    console.log(searchParams)
    console.log(searchParams.get('nombre'))
    console.log(searchParams.get('apellido'))
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const data = await resp.json()
    return NextResponse.json(data)
}