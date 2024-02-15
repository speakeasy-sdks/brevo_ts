/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GetProcessRequest = {
    /**
     * Id of the process
     */
    processId: number;
};

export type GetProcessResponse = {
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
     * process informations
     */
    getProcess?: components.GetProcess | undefined;
};

/** @internal */
export namespace GetProcessRequest$ {
    export type Inbound = {
        processId: number;
    };

    export const inboundSchema: z.ZodType<GetProcessRequest, z.ZodTypeDef, Inbound> = z
        .object({
            processId: z.number().int(),
        })
        .transform((v) => {
            return {
                processId: v.processId,
            };
        });

    export type Outbound = {
        processId: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetProcessRequest> = z
        .object({
            processId: z.number().int(),
        })
        .transform((v) => {
            return {
                processId: v.processId,
            };
        });
}

/** @internal */
export namespace GetProcessResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getProcess?: components.GetProcess$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetProcessResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getProcess: z.lazy(() => components.GetProcess$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getProcess === undefined ? null : { getProcess: v.getProcess }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getProcess?: components.GetProcess$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetProcessResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getProcess: z.lazy(() => components.GetProcess$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getProcess === undefined ? null : { getProcess: v.getProcess }),
            };
        });
}
