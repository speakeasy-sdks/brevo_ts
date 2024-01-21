/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Feature accessiblity given to the user.
 */
export type FeatureAccess = {
    /**
     * Conversations features accessiblity.
     */
    conversations?: string | undefined;
    /**
     * CRM features accessiblity.
     */
    crm?: string | undefined;
    /**
     * Marketing features accessiblity.
     */
    marketing?: string | undefined;
};

export type Users = {
    /**
     * Email address of the user.
     */
    email: string;
    /**
     * Feature accessiblity given to the user.
     */
    featureAccess: FeatureAccess;
    /**
     * Flag for indicating is user owner of the organization.
     */
    isOwner: string;
    /**
     * Status of the invited user.
     */
    status: string;
};

export type GetInvitedUsersList = {
    /**
     * Get invited users list
     */
    users?: Array<Users> | undefined;
};

/** @internal */
export namespace FeatureAccess$ {
    export type Inbound = {
        conversations?: string | undefined;
        crm?: string | undefined;
        marketing?: string | undefined;
    };

    export const inboundSchema: z.ZodType<FeatureAccess, z.ZodTypeDef, Inbound> = z
        .object({
            conversations: z.string().optional(),
            crm: z.string().optional(),
            marketing: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.conversations === undefined ? null : { conversations: v.conversations }),
                ...(v.crm === undefined ? null : { crm: v.crm }),
                ...(v.marketing === undefined ? null : { marketing: v.marketing }),
            };
        });

    export type Outbound = {
        conversations?: string | undefined;
        crm?: string | undefined;
        marketing?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FeatureAccess> = z
        .object({
            conversations: z.string().optional(),
            crm: z.string().optional(),
            marketing: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.conversations === undefined ? null : { conversations: v.conversations }),
                ...(v.crm === undefined ? null : { crm: v.crm }),
                ...(v.marketing === undefined ? null : { marketing: v.marketing }),
            };
        });
}

/** @internal */
export namespace Users$ {
    export type Inbound = {
        email: string;
        feature_access: FeatureAccess$.Inbound;
        is_owner: string;
        status: string;
    };

    export const inboundSchema: z.ZodType<Users, z.ZodTypeDef, Inbound> = z
        .object({
            email: z.string(),
            feature_access: z.lazy(() => FeatureAccess$.inboundSchema),
            is_owner: z.string(),
            status: z.string(),
        })
        .transform((v) => {
            return {
                email: v.email,
                featureAccess: v.feature_access,
                isOwner: v.is_owner,
                status: v.status,
            };
        });

    export type Outbound = {
        email: string;
        feature_access: FeatureAccess$.Outbound;
        is_owner: string;
        status: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Users> = z
        .object({
            email: z.string(),
            featureAccess: z.lazy(() => FeatureAccess$.outboundSchema),
            isOwner: z.string(),
            status: z.string(),
        })
        .transform((v) => {
            return {
                email: v.email,
                feature_access: v.featureAccess,
                is_owner: v.isOwner,
                status: v.status,
            };
        });
}

/** @internal */
export namespace GetInvitedUsersList$ {
    export type Inbound = {
        users?: Array<Users$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetInvitedUsersList, z.ZodTypeDef, Inbound> = z
        .object({
            users: z.array(z.lazy(() => Users$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.users === undefined ? null : { users: v.users }),
            };
        });

    export type Outbound = {
        users?: Array<Users$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetInvitedUsersList> = z
        .object({
            users: z.array(z.lazy(() => Users$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.users === undefined ? null : { users: v.users }),
            };
        });
}
