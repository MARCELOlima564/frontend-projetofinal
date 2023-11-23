import Header from "./components/header/Header";
import Link from "next/link";
import Hometest from "./teste/page";


export default function Home() {
  return (
<>
<Header></Header>
<Link href={'/teste'}>Levar para página teste</Link>


</>    
  )
}
