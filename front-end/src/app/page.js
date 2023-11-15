import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function StartUp() {
  // const [videos, setVideos] = useState(null);
  // const router = useRouter();
  return(
    <div className="w-screen h-screen bg-blue-900 flex justify-center items-center">
      <div style={{color: "white", fontSize: 200, position: "absolute", top: "100px", left: "890px"}}>Quiz</div>
      <div style={{color: "white", fontSize: 50, position: "absolute", top: "270px", left: "1310px"}}>.iO</div>
      <div className="bg-blue-600" style={{position: "absolute", width: "700px", height: "700px", bottom: "800px", right: "1900px", borderRadius: "100%"}}></div>
      <div className="bg-blue-600" style={{position: "absolute", width: "500px", height: "500px", top: "950px", right: "1950px", borderRadius: "100%"}}></div>
      <div className="bg-blue-600" style={{position: "absolute", width: "600px", height: "900px", top: "700px", left: "1950px", borderRadius: "100%"}}></div>
      <div className="flex items-center flex-col w-96 rounded-3xl p-4 gap-12">
      <div className="flex justify-center items-center flex-col">
        <h1 style={{fontSize: "50px", color: "white"}}>Hello there</h1>      
        <p className="text-white">Welcome to Quiz.io</p>
      </div>
      <div className="flex gap-11">
        <ul><li><Link href="/Login"><button className="w-40 h-12 border-lime-400 border-2 rounded-3xl text-white">Login</button></Link></li></ul>
        <ul><li><Link href="/SignIn"><button className="w-40 h-12 border-lime-400 border-2 rounded-3xl text-white">Sign In</button></Link></li></ul>
      </div>
      </div>
    </div>
  )
}