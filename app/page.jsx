import Header from "./components/header/Header";
import Link from "next/link";



export default function Home() {
  return (
<>
<Header></Header>

<Link href={'/teste'}>Levar para página teste</Link>
<footer></footer>

</>    
  )
}
