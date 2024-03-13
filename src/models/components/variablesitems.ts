/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type VariablesItems = {
    datatype?: string | undefined;
    default?: string | undefined;
    name?: string | undefined;
};

/** @internal */
export namespace VariablesItems$ {
    export type Inbound = {
        datatype?: string | undefined;
        default?: string | undefined;
        name?: string | undefined;
    };

    export const inboundSchema: z.ZodType<VariablesItems, z.ZodTypeDef, Inbound> = z
        .object({
            datatype: z.string().optional(),
            default: z.string().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.datatype === undefined ? null : { datatype: v.datatype }),
                ...(v.default === undefined ? null : { default: v.default }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        datatype?: string | undefined;
        default?: string | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, VariablesItems> = z
        .object({
            datatype: z.string().optional(),
            default: z.string().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.datatype === undefined ? null : { datatype: v.datatype }),
                ...(v.default === undefined ? null : { default: v.default }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}
