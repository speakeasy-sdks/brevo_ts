/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CreateSubAccountResponse = {
    /**
     * ID of the sub-account created
     */
    id: number;
};

/** @internal */
export namespace CreateSubAccountResponse$ {
    export type Inbound = {
        id: number;
    };

    export const inboundSchema: z.ZodType<CreateSubAccountResponse, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.number().int(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateSubAccountResponse> = z
        .object({
            id: z.number().int(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}
