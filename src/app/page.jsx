"use client";
import Users from "@/components/users";
import { useEffect, useRef } from "react";

const Page = () => {
    
    const isMounted = useRef(false);

    useEffect(() => {
        // es importante revisar esto ya que es una solucion temporal a que el useEffect se ejecute mas de una vez pero no resuelve el problema de raiz
        if (isMounted.current) {
            alert("loaded!")
            console.log('useEffect se ejecutó');
        } else {
        isMounted.current = true;
        }

        // alert("Loaded!")
    }, []);

    return(
        <>
        
            <h1>Hello World</h1>
            <button onClick={() => {
                alert("Hello!")
            }}>Click</button>
            <section>
                <Users/>
            </section>
        </>
    );
} 

export default Page;