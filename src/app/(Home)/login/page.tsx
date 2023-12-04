import { TopNav } from "@/app/_components/Nav/TopNav";
import { Login } from "../../_components/Auth/Login";
import { Hero } from "@/app/_components/Utils/HeroBg/Hero";

export default function Page() {
  return (
    <main id='main-tag' className="">
      <Hero />
      <section id='dashboard-layout' className='p-4 pt-2 pb-20 w-full h-screen overflow-hidden'>
        <TopNav />
        <Login />
      </section>
    </main>
  )
} 
