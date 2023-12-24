/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

/**
 * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
 */
export enum GetProcessesQueryParamSort {
    Asc = "asc",
    Desc = "desc",
}

export type GetProcessesRequest = {
    /**
     * Number limitation for the result returned
     */
    limit?: number | undefined;
    /**
     * Beginning point in the list to retrieve from.
     */
    offset?: number | undefined;
    /**
     * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
     */
    sort?: GetProcessesQueryParamSort | undefined;
};

export type GetProcessesResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * processes informations
     */
    getProcesses?: components.GetProcesses | undefined;
};

/** @internal */
export const GetProcessesQueryParamSort$ = z.nativeEnum(GetProcessesQueryParamSort);

/** @internal */
export namespace GetProcessesRequest$ {
    export type Inbound = {
        limit?: number | undefined;
        offset?: number | undefined;
        sort?: GetProcessesQueryParamSort | undefined;
    };

    export const inboundSchema: z.ZodType<GetProcessesRequest, z.ZodTypeDef, Inbound> = z
        .object({
            limit: z.number().int().optional(),
            offset: z.number().int().optional(),
            sort: GetProcessesQueryParamSort$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.offset === undefined ? null : { offset: v.offset }),
                ...(v.sort === undefined ? null : { sort: v.sort }),
            };
        });

    export type Outbound = {
        limit?: number | undefined;
        offset?: number | undefined;
        sort?: GetProcessesQueryParamSort | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetProcessesRequest> = z
        .object({
            limit: z.number().int().optional(),
            offset: z.number().int().optional(),
            sort: GetProcessesQueryParamSort$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.offset === undefined ? null : { offset: v.offset }),
                ...(v.sort === undefined ? null : { sort: v.sort }),
            };
        });
}

/** @internal */
export namespace GetProcessesResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getProcesses?: components.GetProcesses$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetProcessesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getProcesses: z.lazy(() => components.GetProcesses$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getProcesses === undefined ? null : { getProcesses: v.getProcesses }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getProcesses?: components.GetProcesses$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetProcessesResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getProcesses: z.lazy(() => components.GetProcesses$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getProcesses === undefined ? null : { getProcesses: v.getProcesses }),
            };
        });
}
