/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type RemoveContactFromListByIDs = {
    /**
     * **Required if 'all' is false and 'emails' is empty.** IDs to remove from a list. You can pass a **maximum of 150 IDs** for removal in one request.
     *
     * @remarks
     *
     */
    ids?: Array<number> | undefined;
};

/** @internal */
export namespace RemoveContactFromListByIDs$ {
    export type Inbound = {
        ids?: Array<number> | undefined;
    };

    export const inboundSchema: z.ZodType<RemoveContactFromListByIDs, z.ZodTypeDef, Inbound> = z
        .object({
            ids: z.array(z.number().int()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.ids === undefined ? null : { ids: v.ids }),
            };
        });

    export type Outbound = {
        ids?: Array<number> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RemoveContactFromListByIDs> = z
        .object({
            ids: z.array(z.number().int()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.ids === undefined ? null : { ids: v.ids }),
            };
        });
}
