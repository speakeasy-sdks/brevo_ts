/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type Segments = {};

export type GetSegments = {
    /**
     * Number of Segments in your account
     */
    count?: number | undefined;
    /**
     * Listing of all the segments available in your account
     */
    segments?: Array<Segments> | undefined;
};

/** @internal */
export namespace Segments$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<Segments, z.ZodTypeDef, Inbound> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Segments> = z.object({});
}

/** @internal */
export namespace GetSegments$ {
    export type Inbound = {
        count?: number | undefined;
        segments?: Array<Segments$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetSegments, z.ZodTypeDef, Inbound> = z
        .object({
            count: z.number().int().optional(),
            segments: z.array(z.lazy(() => Segments$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.count === undefined ? null : { count: v.count }),
                ...(v.segments === undefined ? null : { segments: v.segments }),
            };
        });

    export type Outbound = {
        count?: number | undefined;
        segments?: Array<Segments$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSegments> = z
        .object({
            count: z.number().int().optional(),
            segments: z.array(z.lazy(() => Segments$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.count === undefined ? null : { count: v.count }),
                ...(v.segments === undefined ? null : { segments: v.segments }),
            };
        });
}
