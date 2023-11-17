import { useSession, signIn, signOut } from "next-auth/react"
import { Navbar } from "./components/Navbar/Navbar"


export default function Home() {
  const { data: session } = useSession()
  if(session) {
    return <>
    <Navbar/>
    </>
  }
  return <div className="w-screen h-screen  bg-slate-800 flex content-center items-center justify-center">

    <img className="scale-x-[-1] hidden lg:block xl:h-screen  lg:h-5/6 absolute left-0" src="https://i.goopics.net/fwnnt9.png"/>
    <img className="hidden lg:block xl:h-screen  lg:h-5/6 absolute right-0" src="https://i.goopics.net/gxa1cl.png"/>
    <button onClick={() => signIn('discord')} className="connectDiscord bg-slate-400 py-4 px-20 rounded-md flex items-center justify-around text-black text-lg font-bold ">
      Se connecter avec Discord
      <img src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-1-1.png" className="w-10 ml-4"/>
    </button>
  </div>
}
