/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CreateUpdateContactModel = {
    /**
     * ID of the contact when a new contact is created
     */
    id?: number | undefined;
};

/** @internal */
export namespace CreateUpdateContactModel$ {
    export type Inbound = {
        id?: number | undefined;
    };

    export const inboundSchema: z.ZodType<CreateUpdateContactModel, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        id?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateUpdateContactModel> = z
        .object({
            id: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}
