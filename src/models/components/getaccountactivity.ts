/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Logs = {
    /**
     * Type of activity in the account.
     */
    action: string;
    /**
     * Time of the activity.
     */
    date: string;
    /**
     * Browser details of the user who performed the activity.
     */
    userAgent: string;
    /**
     * Email address of the user who performed activity in the account.
     */
    userEmail: string;
    /**
     * IP address of the user who performed activity in the account.
     */
    userIp: string;
};

export type GetAccountActivity = {
    /**
     * Get user activity logs
     */
    logs?: Array<Logs> | undefined;
};

/** @internal */
export namespace Logs$ {
    export type Inbound = {
        action: string;
        date: string;
        user_agent: string;
        user_email: string;
        user_ip: string;
    };

    export const inboundSchema: z.ZodType<Logs, z.ZodTypeDef, Inbound> = z
        .object({
            action: z.string(),
            date: z.string(),
            user_agent: z.string(),
            user_email: z.string(),
            user_ip: z.string(),
        })
        .transform((v) => {
            return {
                action: v.action,
                date: v.date,
                userAgent: v.user_agent,
                userEmail: v.user_email,
                userIp: v.user_ip,
            };
        });

    export type Outbound = {
        action: string;
        date: string;
        user_agent: string;
        user_email: string;
        user_ip: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Logs> = z
        .object({
            action: z.string(),
            date: z.string(),
            userAgent: z.string(),
            userEmail: z.string(),
            userIp: z.string(),
        })
        .transform((v) => {
            return {
                action: v.action,
                date: v.date,
                user_agent: v.userAgent,
                user_email: v.userEmail,
                user_ip: v.userIp,
            };
        });
}

/** @internal */
export namespace GetAccountActivity$ {
    export type Inbound = {
        logs?: Array<Logs$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetAccountActivity, z.ZodTypeDef, Inbound> = z
        .object({
            logs: z.array(z.lazy(() => Logs$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.logs === undefined ? null : { logs: v.logs }),
            };
        });

    export type Outbound = {
        logs?: Array<Logs$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAccountActivity> = z
        .object({
            logs: z.array(z.lazy(() => Logs$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.logs === undefined ? null : { logs: v.logs }),
            };
        });
}
