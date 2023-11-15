import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function SignIn() {
    return(
        <div className="w-screen h-screen bg-blue-900 flex justify-center items-center">
        <div className="bg-blue-600" style={{position: "absolute", width: "700px", height: "700px", bottom: "800px", right: "1900px", borderRadius: "100%"}}></div>
        <div className="bg-blue-600" style={{position: "absolute", width: "500px", height: "500px", top: "950px", right: "1950px", borderRadius: "100%"}}></div>
        <div className="bg-blue-600" style={{position: "absolute", width: "600px", height: "900px", top: "700px", left: "1950px", borderRadius: "100%"}}></div>
        <div className="flex items-center flex-col w-96 rounded-3xl p-4 gap-12">
        <div className="flex justify-center items-center flex-col">
          <h1 style={{fontSize: "50px", color: "white"}}>Hello there</h1>      
          <input type="text" placeholder="Username" className="w-72 h-12 m-6 p-2 border-lime-400 border-2 bg-blue-900 text-white" style={{borderRadius: 48}}/>
          <input type="text" placeholder="Password" className="w-72 h-12 p-2 border-lime-400 border-2 bg-blue-900 text-white"  style={{borderRadius: 48}}/>
        </div>
        <div className="flex gap-11">
        <ul><li><Link href="/main"><button className="w-40 h-12 border-lime-400 border-2 rounded-3xl text-white">Sign In</button></Link></li></ul>
        </div>
        </div>
      </div>
    )
}