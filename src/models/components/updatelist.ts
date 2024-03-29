/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdateList = {
    /**
     * Id of the folder in which the list is to be moved. Either of the two parameters (name, folderId) can be updated at a time.
     */
    folderId?: number | undefined;
    /**
     * Name of the list. Either of the two parameters (name, folderId) can be updated at a time.
     */
    name?: string | undefined;
};

/** @internal */
export namespace UpdateList$ {
    export type Inbound = {
        folderId?: number | undefined;
        name?: string | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateList, z.ZodTypeDef, Inbound> = z
        .object({
            folderId: z.number().int().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.folderId === undefined ? null : { folderId: v.folderId }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        folderId?: number | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateList> = z
        .object({
            folderId: z.number().int().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.folderId === undefined ? null : { folderId: v.folderId }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}
