import { client } from "@repo/db/client"

export default async function Home() {
    const user = await client.user.findFirst(); 
    return <div>
        <h1>Development Server</h1>
        <div>Name: {user?.username}</div>
        <div>Password: {user?.password}</div>
    </div>
}
