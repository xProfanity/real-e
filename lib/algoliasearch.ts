import { algoliasearch } from 'algoliasearch';

export const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APPID as string, process.env.ALGOLIA_SECRET_KEY as string);

// Fetch and index objects in Algolia
export const processRecords = async (locations: string[]) => {
  return await client.saveObjects({indexName: 'locations_index', objects: locations
    .map((location, index) => ({
        location_id: `${index+1}`,
        location
    }))
  })
};