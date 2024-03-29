/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteResellerChildRequest = {
    /**
     * Either auth key or child id of reseller's child
     */
    childIdentifier: string;
};

export type DeleteResellerChildResponse = {
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
};

/** @internal */
export namespace DeleteResellerChildRequest$ {
    export type Inbound = {
        childIdentifier: string;
    };

    export const inboundSchema: z.ZodType<DeleteResellerChildRequest, z.ZodTypeDef, Inbound> = z
        .object({
            childIdentifier: z.string(),
        })
        .transform((v) => {
            return {
                childIdentifier: v.childIdentifier,
            };
        });

    export type Outbound = {
        childIdentifier: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteResellerChildRequest> = z
        .object({
            childIdentifier: z.string(),
        })
        .transform((v) => {
            return {
                childIdentifier: v.childIdentifier,
            };
        });
}

/** @internal */
export namespace DeleteResellerChildResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<DeleteResellerChildResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteResellerChildResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
