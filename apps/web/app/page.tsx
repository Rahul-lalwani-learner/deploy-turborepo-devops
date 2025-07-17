import { client } from "@repo/db/client"

export default async function Home() {
    const user = await client.user.findFirst(); 
    return <div>
        <h1 >This is Production server</h1>
        <h2>Production Server running</h2>
        <div>Name: {user?.username}</div>
        <div>Password: {user?.password}</div>
    </div>
}
