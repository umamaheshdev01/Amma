import { useParams } from "next/navigation"
import { NextResponse } from "next/server"

export const GET = (req,{params},res)=>{

    const id = params.id

    return NextResponse.json({msg:id})
}