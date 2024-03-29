/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Company attributes with values
 */
export type Attributes = {};

/**
 * Company Details
 */
export type Company = {
    /**
     * Company attributes with values
     */
    attributes?: Attributes | undefined;
    /**
     * Unique comoany id
     */
    id?: string | undefined;
    /**
     * Contact ids for contacts linked to this company
     */
    linkedContactsIds?: Array<number> | undefined;
    /**
     * Deals ids for companies linked to this company
     */
    linkedDealsIds?: Array<string> | undefined;
};

/** @internal */
export namespace Attributes$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<Attributes, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Attributes> = z.object({});
}

/** @internal */
export namespace Company$ {
    export type Inbound = {
        attributes?: Attributes$.Inbound | undefined;
        id?: string | undefined;
        linkedContactsIds?: Array<number> | undefined;
        linkedDealsIds?: Array<string> | undefined;
    };

    export const inboundSchema: z.ZodType<Company, z.ZodTypeDef, Inbound> = z
        .object({
            attributes: z.lazy(() => Attributes$.inboundSchema).optional(),
            id: z.string().optional(),
            linkedContactsIds: z.array(z.number().int()).optional(),
            linkedDealsIds: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.attributes === undefined ? null : { attributes: v.attributes }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.linkedContactsIds === undefined
                    ? null
                    : { linkedContactsIds: v.linkedContactsIds }),
                ...(v.linkedDealsIds === undefined ? null : { linkedDealsIds: v.linkedDealsIds }),
            };
        });

    export type Outbound = {
        attributes?: Attributes$.Outbound | undefined;
        id?: string | undefined;
        linkedContactsIds?: Array<number> | undefined;
        linkedDealsIds?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Company> = z
        .object({
            attributes: z.lazy(() => Attributes$.outboundSchema).optional(),
            id: z.string().optional(),
            linkedContactsIds: z.array(z.number().int()).optional(),
            linkedDealsIds: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.attributes === undefined ? null : { attributes: v.attributes }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.linkedContactsIds === undefined
                    ? null
                    : { linkedContactsIds: v.linkedContactsIds }),
                ...(v.linkedDealsIds === undefined ? null : { linkedDealsIds: v.linkedDealsIds }),
            };
        });
}
