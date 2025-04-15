import { processRecords } from "@/lib/algoliasearch"
import * as datasets from "@/lib/datasets"

export async function GET(request: Request) {
    //@ts-ignore
    const data = Object.keys(datasets).map((obj, index) => datasets[obj])

    let locations = <string[]>[]

    for(let i in data) {
        for(let location of data[i]) {
            if(locations.includes(location)) continue

            locations.push(location)
        }
    }

    try {
        const response = await processRecords(locations)

        return Response.json({message: "added records successfully"})
    } catch (error) {
        throw error        
    }
}