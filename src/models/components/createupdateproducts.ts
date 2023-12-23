/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type CreateUpdateProducts = {
    /**
     * Category ID-s of the product
     */
    categories?: Array<string> | undefined;
    /**
     * UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) of the product deleted from the shop's database
     */
    deletedAt?: string | undefined;
    /**
     * Product ID for which you requested the details
     */
    id: string;
    /**
     * Absolute URL to the cover image of the product
     */
    imageUrl?: string | undefined;
    /**
     * Meta data of product such as description, vendor, producer, stock level. The size of cumulative metaInfo shall not exceed **1000 KB**. Maximum length of metaInfo object can be 10.
     */
    metaInfo?: Record<string, any> | undefined;
    /**
     * Mandatory in case of creation**. Name of the product for which you requested the details
     */
    name: string;
    /**
     * Parent product id of the product
     */
    parentId?: string | undefined;
    /**
     * Price of the product
     */
    price?: number | undefined;
    /**
     * Product identifier from the shop
     */
    sku?: string | undefined;
    /**
     * URL to the product
     */
    url?: string | undefined;
};

/** @internal */
export namespace CreateUpdateProducts$ {
    export type Inbound = {
        categories?: Array<string> | undefined;
        deletedAt?: string | undefined;
        id: string;
        imageUrl?: string | undefined;
        metaInfo?: Record<string, any> | undefined;
        name: string;
        parentId?: string | undefined;
        price?: number | undefined;
        sku?: string | undefined;
        url?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CreateUpdateProducts, z.ZodTypeDef, Inbound> = z
        .object({
            categories: z.array(z.string()).optional(),
            deletedAt: z.string().optional(),
            id: z.string(),
            imageUrl: z.string().optional(),
            metaInfo: z.record(z.any()).optional(),
            name: z.string(),
            parentId: z.string().optional(),
            price: z.number().optional(),
            sku: z.string().optional(),
            url: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.categories === undefined ? null : { categories: v.categories }),
                ...(v.deletedAt === undefined ? null : { deletedAt: v.deletedAt }),
                id: v.id,
                ...(v.imageUrl === undefined ? null : { imageUrl: v.imageUrl }),
                ...(v.metaInfo === undefined ? null : { metaInfo: v.metaInfo }),
                name: v.name,
                ...(v.parentId === undefined ? null : { parentId: v.parentId }),
                ...(v.price === undefined ? null : { price: v.price }),
                ...(v.sku === undefined ? null : { sku: v.sku }),
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });

    export type Outbound = {
        categories?: Array<string> | undefined;
        deletedAt?: string | undefined;
        id: string;
        imageUrl?: string | undefined;
        metaInfo?: Record<string, any> | undefined;
        name: string;
        parentId?: string | undefined;
        price?: number | undefined;
        sku?: string | undefined;
        url?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateUpdateProducts> = z
        .object({
            categories: z.array(z.string()).optional(),
            deletedAt: z.string().optional(),
            id: z.string(),
            imageUrl: z.string().optional(),
            metaInfo: z.record(z.any()).optional(),
            name: z.string(),
            parentId: z.string().optional(),
            price: z.number().optional(),
            sku: z.string().optional(),
            url: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.categories === undefined ? null : { categories: v.categories }),
                ...(v.deletedAt === undefined ? null : { deletedAt: v.deletedAt }),
                id: v.id,
                ...(v.imageUrl === undefined ? null : { imageUrl: v.imageUrl }),
                ...(v.metaInfo === undefined ? null : { metaInfo: v.metaInfo }),
                name: v.name,
                ...(v.parentId === undefined ? null : { parentId: v.parentId }),
                ...(v.price === undefined ? null : { price: v.price }),
                ...(v.sku === undefined ? null : { sku: v.sku }),
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });
}
