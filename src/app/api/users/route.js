import { NextResponse } from "next/server";


//extract params
// database queries
// communicate with other services

export async function GET() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await resp.json()
    return NextResponse.json(data)
}

export function POST() {
    return NextResponse.json({
        message: "creando datos!"
    })
}

export function PUT() {
    return NextResponse.json({
        message: "actualizando datos!"
    })
}

export function DELETE() {
    return NextResponse.json({
        message: "eliminando datos!"
    })
}