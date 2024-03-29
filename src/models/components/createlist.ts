/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CreateList = {
    /**
     * Id of the parent folder in which this list is to be created
     */
    folderId: number;
    /**
     * Name of the list
     */
    name: string;
};

/** @internal */
export namespace CreateList$ {
    export type Inbound = {
        folderId: number;
        name: string;
    };

    export const inboundSchema: z.ZodType<CreateList, z.ZodTypeDef, Inbound> = z
        .object({
            folderId: z.number().int(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                folderId: v.folderId,
                name: v.name,
            };
        });

    export type Outbound = {
        folderId: number;
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateList> = z
        .object({
            folderId: z.number().int(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                folderId: v.folderId,
                name: v.name,
            };
        });
}
