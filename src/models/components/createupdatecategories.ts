/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CreateUpdateCategories = {
    /**
     * UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) of the category deleted from the shop's database
     */
    deletedAt?: string | undefined;
    /**
     * Unique Category ID as saved in the shop
     *
     * @remarks
     *
     */
    id: string;
    /**
     * **Mandatory in case of creation**. Name of the Category, as displayed in the shop
     *
     * @remarks
     *
     */
    name?: string | undefined;
    /**
     * URL to the category
     */
    url?: string | undefined;
};

/** @internal */
export namespace CreateUpdateCategories$ {
    export type Inbound = {
        deletedAt?: string | undefined;
        id: string;
        name?: string | undefined;
        url?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CreateUpdateCategories, z.ZodTypeDef, Inbound> = z
        .object({
            deletedAt: z.string().optional(),
            id: z.string(),
            name: z.string().optional(),
            url: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.deletedAt === undefined ? null : { deletedAt: v.deletedAt }),
                id: v.id,
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });

    export type Outbound = {
        deletedAt?: string | undefined;
        id: string;
        name?: string | undefined;
        url?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateUpdateCategories> = z
        .object({
            deletedAt: z.string().optional(),
            id: z.string(),
            name: z.string().optional(),
            url: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.deletedAt === undefined ? null : { deletedAt: v.deletedAt }),
                id: v.id,
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });
}
