import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://qawqqahmcrojoxlobjbv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhd3FxYWhtY3Jvam94bG9iamJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4ODM3NDQsImV4cCI6MjAyNTQ1OTc0NH0.3AMegObHIpOK-37jd9gfCdddXeGdOuWYZ1-APhj00t0'
const supabase = createClient(supabaseUrl, supabaseKey)
import { NextResponse } from "next/server"

export const POST = async(req,res)=>{

    const pack = await req.json()

    const {data,error} = await supabase.from('Products').insert(pack)

    if(error)
    {
        return NextResponse.json({msg:error},{status:500})
    }
    return NextResponse.json({msg:'Product Created'},{status:200})
}


export const GET = async(req,res)=>{

    const {id} = Object.fromEntries(new URL(req.url).searchParams.entries());

    const {data,error} = await supabase.from('Products').select('*').eq('seller',id)

    if(error)
    {
        return NextResponse.json({msg:error},{status:500})
    }
    return NextResponse.json({data},{status:200})
}


export const PATCH = async(req,res)=>{

    const pack = await req.json()

    const {id} = Object.fromEntries(new URL(req.url).searchParams.entries());

    const {data,error} = await supabase.from('Products').update(pack).eq('id',id)

    if(error)
    {
        return NextResponse.json({msg:error},{status:500})
    }
    return NextResponse.json({msg:'Product updated'},{status:200})
}


export const DELETE = async(req,res)=>{

    const {id} = Object.fromEntries(new URL(req.url).searchParams.entries());

    const {data,error} = await supabase.from('Products').delete().eq('id',id)

    if(error)
    {
        return NextResponse.json({msg:error},{status:500})
    }
    return NextResponse.json({msg:'Product deleted'},{status:200})
}