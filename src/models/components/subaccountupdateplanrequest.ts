/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Credit details to update
 */
export type SubAccountUpdatePlanRequestCredits = {
    /**
     * Number of email credits
     */
    email?: number | undefined;
};

/**
 * Features details to update
 */
export type Features = {
    /**
     * Number of inboxes
     */
    inbox?: number | undefined;
    /**
     * Number of landing pages
     */
    landingPage?: number | undefined;
    /**
     * Number of multi-users
     */
    users?: number | undefined;
};

/**
 * Details of the plan to be changed
 */
export type SubAccountUpdatePlanRequest = {
    /**
     * Credit details to update
     */
    credits?: SubAccountUpdatePlanRequestCredits | undefined;
    /**
     * Features details to update
     */
    features?: Features | undefined;
};

/** @internal */
export namespace SubAccountUpdatePlanRequestCredits$ {
    export type Inbound = {
        email?: number | undefined;
    };

    export const inboundSchema: z.ZodType<
        SubAccountUpdatePlanRequestCredits,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            email: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.email === undefined ? null : { email: v.email }),
            };
        });

    export type Outbound = {
        email?: number | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        SubAccountUpdatePlanRequestCredits
    > = z
        .object({
            email: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.email === undefined ? null : { email: v.email }),
            };
        });
}

/** @internal */
export namespace Features$ {
    export type Inbound = {
        inbox?: number | undefined;
        landingPage?: number | undefined;
        users?: number | undefined;
    };

    export const inboundSchema: z.ZodType<Features, z.ZodTypeDef, Inbound> = z
        .object({
            inbox: z.number().int().optional(),
            landingPage: z.number().int().optional(),
            users: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.inbox === undefined ? null : { inbox: v.inbox }),
                ...(v.landingPage === undefined ? null : { landingPage: v.landingPage }),
                ...(v.users === undefined ? null : { users: v.users }),
            };
        });

    export type Outbound = {
        inbox?: number | undefined;
        landingPage?: number | undefined;
        users?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Features> = z
        .object({
            inbox: z.number().int().optional(),
            landingPage: z.number().int().optional(),
            users: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.inbox === undefined ? null : { inbox: v.inbox }),
                ...(v.landingPage === undefined ? null : { landingPage: v.landingPage }),
                ...(v.users === undefined ? null : { users: v.users }),
            };
        });
}

/** @internal */
export namespace SubAccountUpdatePlanRequest$ {
    export type Inbound = {
        credits?: SubAccountUpdatePlanRequestCredits$.Inbound | undefined;
        features?: Features$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<SubAccountUpdatePlanRequest, z.ZodTypeDef, Inbound> = z
        .object({
            credits: z.lazy(() => SubAccountUpdatePlanRequestCredits$.inboundSchema).optional(),
            features: z.lazy(() => Features$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.credits === undefined ? null : { credits: v.credits }),
                ...(v.features === undefined ? null : { features: v.features }),
            };
        });

    export type Outbound = {
        credits?: SubAccountUpdatePlanRequestCredits$.Outbound | undefined;
        features?: Features$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SubAccountUpdatePlanRequest> = z
        .object({
            credits: z.lazy(() => SubAccountUpdatePlanRequestCredits$.outboundSchema).optional(),
            features: z.lazy(() => Features$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.credits === undefined ? null : { credits: v.credits }),
                ...(v.features === undefined ? null : { features: v.features }),
            };
        });
}
