/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type CreateUpdateFolder = {
    /**
     * Name of the folder
     */
    name?: string | undefined;
};

/** @internal */
export namespace CreateUpdateFolder$ {
    export type Inbound = {
        name?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CreateUpdateFolder, z.ZodTypeDef, Inbound> = z
        .object({
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateUpdateFolder> = z
        .object({
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}
