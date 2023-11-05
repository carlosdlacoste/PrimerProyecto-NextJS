import { NextResponse } from "next/server";

console.log(process.env.TOKEN)
//extract params
// database queries
// communicate with other services

export async function GET() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users?apikey=" + process.env.TOKEN)
    console.log("https://jsonplaceholder.typicode.com/users?apikey=" + process.env.TOKEN)
    const data = await resp.json()
    return NextResponse.json(data)
}

export async function POST(request) {
    const {nombre, apellido} = await request.json()
    console.log(nombre, apellido)
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