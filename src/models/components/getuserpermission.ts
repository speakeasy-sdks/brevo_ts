/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Privileges = {
    feature: string;
    permissions: Array<string>;
};

/**
 * Check user permission
 */
export type GetUserPermission = {
    /**
     * Email address of the user.
     */
    email: string;
    /**
     * Granular feature permissions given to the user.
     */
    privileges: Array<Privileges>;
    /**
     * Status of the invited user.
     */
    status: string;
};

/** @internal */
export namespace Privileges$ {
    export type Inbound = {
        feature: string;
        permissions: Array<string>;
    };

    export const inboundSchema: z.ZodType<Privileges, z.ZodTypeDef, Inbound> = z
        .object({
            feature: z.string(),
            permissions: z.array(z.string()),
        })
        .transform((v) => {
            return {
                feature: v.feature,
                permissions: v.permissions,
            };
        });

    export type Outbound = {
        feature: string;
        permissions: Array<string>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Privileges> = z
        .object({
            feature: z.string(),
            permissions: z.array(z.string()),
        })
        .transform((v) => {
            return {
                feature: v.feature,
                permissions: v.permissions,
            };
        });
}

/** @internal */
export namespace GetUserPermission$ {
    export type Inbound = {
        email: string;
        privileges: Array<Privileges$.Inbound>;
        status: string;
    };

    export const inboundSchema: z.ZodType<GetUserPermission, z.ZodTypeDef, Inbound> = z
        .object({
            email: z.string(),
            privileges: z.array(z.lazy(() => Privileges$.inboundSchema)),
            status: z.string(),
        })
        .transform((v) => {
            return {
                email: v.email,
                privileges: v.privileges,
                status: v.status,
            };
        });

    export type Outbound = {
        email: string;
        privileges: Array<Privileges$.Outbound>;
        status: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetUserPermission> = z
        .object({
            email: z.string(),
            privileges: z.array(z.lazy(() => Privileges$.outboundSchema)),
            status: z.string(),
        })
        .transform((v) => {
            return {
                email: v.email,
                privileges: v.privileges,
                status: v.status,
            };
        });
}
