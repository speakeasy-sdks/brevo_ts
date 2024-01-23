/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Updated Note ID
 */
export type NoteId = {
    /**
     * Unique note Id
     */
    id?: string | undefined;
};

/** @internal */
export namespace NoteId$ {
    export type Inbound = {
        id?: string | undefined;
    };

    export const inboundSchema: z.ZodType<NoteId, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NoteId> = z
        .object({
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}
