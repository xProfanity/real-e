import { v } from "convex/values";
import { query } from "./_generated/server";

export const getProperties = query({
    handler: async (ctx) => {
        return await ctx.db.query('houses').collect()
    }
})

export const getUrl = query({
    args: {
        id: v.id("_storage")
    },
    handler: async (ctx, args) => {
        return await ctx.storage.getUrl(args.id)
    }
})