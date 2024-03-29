/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Auth type of the feed: * `basic` * `token` * `noAuth`
 *
 * @remarks
 *
 */
export enum GetAllExternalFeedsAuthType {
    Basic = "basic",
    Token = "token",
    NoAuth = "noAuth",
}

export type GetAllExternalFeedsHeaders = {
    /**
     * Name of the header
     */
    name?: string | undefined;
    /**
     * Value of the header
     */
    value?: string | undefined;
};

export type Feeds = {
    /**
     * Auth type of the feed: * `basic` * `token` * `noAuth`
     *
     * @remarks
     *
     */
    authType: GetAllExternalFeedsAuthType;
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
    headers: Array<GetAllExternalFeedsHeaders>;
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

export type GetAllExternalFeeds = {
    /**
     * Total number of batches
     */
    count?: number | undefined;
    feeds?: Array<Feeds> | undefined;
};

/** @internal */
export const GetAllExternalFeedsAuthType$ = z.nativeEnum(GetAllExternalFeedsAuthType);

/** @internal */
export namespace GetAllExternalFeedsHeaders$ {
    export type Inbound = {
        name?: string | undefined;
        value?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetAllExternalFeedsHeaders, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllExternalFeedsHeaders> = z
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
export namespace Feeds$ {
    export type Inbound = {
        authType: GetAllExternalFeedsAuthType;
        cache: boolean;
        createdAt: string;
        headers: Array<GetAllExternalFeedsHeaders$.Inbound>;
        id: string;
        maxRetries?: number | undefined;
        modifiedAt: string;
        name: string;
        password?: string | undefined;
        token?: string | undefined;
        url: string;
        username?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Feeds, z.ZodTypeDef, Inbound> = z
        .object({
            authType: GetAllExternalFeedsAuthType$,
            cache: z.boolean(),
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            headers: z.array(z.lazy(() => GetAllExternalFeedsHeaders$.inboundSchema)),
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
        authType: GetAllExternalFeedsAuthType;
        cache: boolean;
        createdAt: string;
        headers: Array<GetAllExternalFeedsHeaders$.Outbound>;
        id: string;
        maxRetries: number;
        modifiedAt: string;
        name: string;
        password?: string | undefined;
        token?: string | undefined;
        url: string;
        username?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Feeds> = z
        .object({
            authType: GetAllExternalFeedsAuthType$,
            cache: z.boolean(),
            createdAt: z.date().transform((v) => v.toISOString()),
            headers: z.array(z.lazy(() => GetAllExternalFeedsHeaders$.outboundSchema)),
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

/** @internal */
export namespace GetAllExternalFeeds$ {
    export type Inbound = {
        count?: number | undefined;
        feeds?: Array<Feeds$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetAllExternalFeeds, z.ZodTypeDef, Inbound> = z
        .object({
            count: z.number().int().optional(),
            feeds: z.array(z.lazy(() => Feeds$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.count === undefined ? null : { count: v.count }),
                ...(v.feeds === undefined ? null : { feeds: v.feeds }),
            };
        });

    export type Outbound = {
        count?: number | undefined;
        feeds?: Array<Feeds$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAllExternalFeeds> = z
        .object({
            count: z.number().int().optional(),
            feeds: z.array(z.lazy(() => Feeds$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.count === undefined ? null : { count: v.count }),
                ...(v.feeds === undefined ? null : { feeds: v.feeds }),
            };
        });
}
