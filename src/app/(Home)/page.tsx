'use client'
import { useEffect, useState } from "react"
import { Feed } from "@/app/_components/Main/Feed/Feed";
import { Hero } from "../_components/Utils/HeroBg/Hero";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter()
  return (
    <>
    <Hero>
      <button className='text-3xl font-bold p-8 py-2 shadow-white rounded-3xl' onClick={()=>{router.push('/login')}}>Nebula</button>
    </Hero>
    
    </>
  )
}
