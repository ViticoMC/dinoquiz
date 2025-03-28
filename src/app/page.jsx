import Link from "next/link"
import {initializeDatabase} from "./seeds/routes"

export default function Page(){

    const {success, message} =  initializeDatabase()

    if(!success){
        return <h1>{message}</h1>
    }   
    return (
        <Link href='/home'>
        <h1>Hola desde Page</h1>
        </Link>

    )
}