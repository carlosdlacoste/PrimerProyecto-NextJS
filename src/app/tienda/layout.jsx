import Link from "next/link";

export default function TiendaLayout ({children}){
    return(
        <>
            <nav>
                <h3>Seccion Tienda</h3>
                <ul>
                    <li>
                        <Link href="/tienda/categorias">Categorias</Link>
                    </li>
                    <li>Productos Tienda</li>
                </ul>
            </nav>
            {children}
        </>
    );
}