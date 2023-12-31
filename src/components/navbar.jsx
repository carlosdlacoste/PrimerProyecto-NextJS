import Link from "next/link";
import "@/../styles/navbar.css";


const NavBar = () => {
    return(
        <nav className="navbar py-3 px-7">
            <Link href='/'>
                <h1 className="text-3xl font-bold">NextJS Project</h1>
            </Link>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/tienda'>Tienda</Link>
                </li>
                <li>
                    <Link href='/posts'>Posts</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;