/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CreatedBatchId = {
    /**
     * Batch ID of the request
     */
    batchId: number;
};

/** @internal */
export namespace CreatedBatchId$ {
    export type Inbound = {
        batchId: number;
    };

    export const inboundSchema: z.ZodType<CreatedBatchId, z.ZodTypeDef, Inbound> = z
        .object({
            batchId: z.number(),
        })
        .transform((v) => {
            return {
                batchId: v.batchId,
            };
        });

    export type Outbound = {
        batchId: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreatedBatchId> = z
        .object({
            batchId: z.number(),
        })
        .transform((v) => {
            return {
                batchId: v.batchId,
            };
        });
}
