import { api } from "@/convex/_generated/api"
import {fetchQuery} from "convex/nextjs"

export async function GET(req: Request) {
    try {
        const properties = await fetchQuery(api.properties.getProperties)
        console.log('properties', properties)
        return Response.json(properties) 
    } catch (error) {
        console.log("error");
        console.log('error', error)
        throw error
    }

}