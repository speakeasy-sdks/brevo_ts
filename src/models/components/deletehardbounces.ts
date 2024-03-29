/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteHardbounces = {
    /**
     * Target a specific email address
     */
    contactEmail?: string | undefined;
    /**
     * Ending date (YYYY-MM-DD) of the time period for deletion. The hardbounces until this date will be deleted. Must be greater than or equal to the startDate
     */
    endDate?: string | undefined;
    /**
     * Starting date (YYYY-MM-DD) of the time period for deletion. The hardbounces occurred after this date will be deleted. Must be less than or equal to the endDate
     */
    startDate?: string | undefined;
};

/** @internal */
export namespace DeleteHardbounces$ {
    export type Inbound = {
        contactEmail?: string | undefined;
        endDate?: string | undefined;
        startDate?: string | undefined;
    };

    export const inboundSchema: z.ZodType<DeleteHardbounces, z.ZodTypeDef, Inbound> = z
        .object({
            contactEmail: z.string().optional(),
            endDate: z.string().optional(),
            startDate: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.contactEmail === undefined ? null : { contactEmail: v.contactEmail }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
            };
        });

    export type Outbound = {
        contactEmail?: string | undefined;
        endDate?: string | undefined;
        startDate?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteHardbounces> = z
        .object({
            contactEmail: z.string().optional(),
            endDate: z.string().optional(),
            startDate: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.contactEmail === undefined ? null : { contactEmail: v.contactEmail }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
            };
        });
}
