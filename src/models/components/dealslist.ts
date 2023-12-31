/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Deal, Deal$ } from "./deal";
import { z } from "zod";

/**
 * List of Deals
 */
export type DealsList = {
    /**
     * List of deals
     */
    items?: Array<Deal> | undefined;
};

/** @internal */
export namespace DealsList$ {
    export type Inbound = {
        items?: Array<Deal$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<DealsList, z.ZodTypeDef, Inbound> = z
        .object({
            items: z.array(Deal$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.items === undefined ? null : { items: v.items }),
            };
        });

    export type Outbound = {
        items?: Array<Deal$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DealsList> = z
        .object({
            items: z.array(Deal$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.items === undefined ? null : { items: v.items }),
            };
        });
}
