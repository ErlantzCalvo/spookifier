import "@/app/styles/footer.css"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (<footer className="footer text-gray-400">    
    <div className="row ">
    <ul>
    <li><a href="https://github.com/ErlantzCalvo/spookifier" target="_blank"><Image src="/github.svg" alt="Github" width={25} height={25}/></a></li>
    </ul>
    </div>
    
    <div className="row">
    Designed By: <Link href="https://github.com/ErlantzCalvo" className="hover:text-gray-500">Erlantz Calvo</Link>
    </div>
    </footer>)

}