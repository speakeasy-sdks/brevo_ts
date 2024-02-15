/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Auth type of the feed: * `basic` * `token` * `noAuth`
 *
 * @remarks
 *
 */
export enum GetExternalFeedByUUIDAuthType {
    Basic = "basic",
    Token = "token",
    NoAuth = "noAuth",
}

export type GetExternalFeedByUUIDHeaders = {
    /**
     * Name of the header
     */
    name?: string | undefined;
    /**
     * Value of the header
     */
    value?: string | undefined;
};

export type GetExternalFeedByUUID = {
    /**
     * Auth type of the feed: * `basic` * `token` * `noAuth`
     *
     * @remarks
     *
     */
    authType: GetExternalFeedByUUIDAuthType;
    /**
     * Toggle caching of feed url response
     */
    cache: boolean;
    /**
     * Datetime on which the feed was created
     */
    createdAt: Date;
    /**
     * Custom headers for the feed
     */
    headers: Array<GetExternalFeedByUUIDHeaders>;
    /**
     * ID of the feed
     */
    id: string;
    /**
     * Maximum number of retries on the feed url
     */
    maxRetries?: number | undefined;
    /**
     * Datetime on which the feed was modified
     */
    modifiedAt: Date;
    /**
     * Name of the feed
     */
    name: string;
    /**
     * Password for authType `basic`
     */
    password?: string | undefined;
    /**
     * Token for authType `token`
     */
    token?: string | undefined;
    /**
     * URL of the feed
     */
    url: string;
    /**
     * Username for authType `basic`
     */
    username?: string | undefined;
};

/** @internal */
export const GetExternalFeedByUUIDAuthType$ = z.nativeEnum(GetExternalFeedByUUIDAuthType);

/** @internal */
export namespace GetExternalFeedByUUIDHeaders$ {
    export type Inbound = {
        name?: string | undefined;
        value?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetExternalFeedByUUIDHeaders, z.ZodTypeDef, Inbound> = z
        .object({
            name: z.string().optional(),
            value: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        name?: string | undefined;
        value?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetExternalFeedByUUIDHeaders> = z
        .object({
            name: z.string().optional(),
            value: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}

/** @internal */
export namespace GetExternalFeedByUUID$ {
    export type Inbound = {
        authType: GetExternalFeedByUUIDAuthType;
        cache: boolean;
        createdAt: string;
        headers: Array<GetExternalFeedByUUIDHeaders$.Inbound>;
        id: string;
        maxRetries?: number | undefined;
        modifiedAt: string;
        name: string;
        password?: string | undefined;
        token?: string | undefined;
        url: string;
        username?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetExternalFeedByUUID, z.ZodTypeDef, Inbound> = z
        .object({
            authType: GetExternalFeedByUUIDAuthType$,
            cache: z.boolean(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            headers: z.array(z.lazy(() => GetExternalFeedByUUIDHeaders$.inboundSchema)),
            id: z.string(),
            maxRetries: z.number().int().default(5),
            modifiedAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            name: z.string(),
            password: z.string().optional(),
            token: z.string().optional(),
            url: z.string(),
            username: z.string().optional(),
        })
        .transform((v) => {
            return {
                authType: v.authType,
                cache: v.cache,
                createdAt: v.createdAt,
                headers: v.headers,
                id: v.id,
                maxRetries: v.maxRetries,
                modifiedAt: v.modifiedAt,
                name: v.name,
                ...(v.password === undefined ? null : { password: v.password }),
                ...(v.token === undefined ? null : { token: v.token }),
                url: v.url,
                ...(v.username === undefined ? null : { username: v.username }),
            };
        });

    export type Outbound = {
        authType: GetExternalFeedByUUIDAuthType;
        cache: boolean;
        createdAt: string;
        headers: Array<GetExternalFeedByUUIDHeaders$.Outbound>;
        id: string;
        maxRetries: number;
        modifiedAt: string;
        name: string;
        password?: string | undefined;
        token?: string | undefined;
        url: string;
        username?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetExternalFeedByUUID> = z
        .object({
            authType: GetExternalFeedByUUIDAuthType$,
            cache: z.boolean(),
            createdAt: z.date().transform((v) => v.toISOString()),
            headers: z.array(z.lazy(() => GetExternalFeedByUUIDHeaders$.outboundSchema)),
            id: z.string(),
            maxRetries: z.number().int().default(5),
            modifiedAt: z.date().transform((v) => v.toISOString()),
            name: z.string(),
            password: z.string().optional(),
            token: z.string().optional(),
            url: z.string(),
            username: z.string().optional(),
        })
        .transform((v) => {
            return {
                authType: v.authType,
                cache: v.cache,
                createdAt: v.createdAt,
                headers: v.headers,
                id: v.id,
                maxRetries: v.maxRetries,
                modifiedAt: v.modifiedAt,
                name: v.name,
                ...(v.password === undefined ? null : { password: v.password }),
                ...(v.token === undefined ? null : { token: v.token }),
                url: v.url,
                ...(v.username === undefined ? null : { username: v.username }),
            };
        });
}
