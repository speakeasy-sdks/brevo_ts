/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type UpdateResellerChildRequest = {
    /**
     * Either auth key or id of reseller's child
     */
    childIdentifier: string;
    /**
     * values to update in child profile
     */
    updateChild: components.UpdateChild;
};

export type UpdateResellerChildResponse = {
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
export namespace UpdateResellerChildRequest$ {
    export type Inbound = {
        childIdentifier: string;
        updateChild: components.UpdateChild$.Inbound;
    };

    export const inboundSchema: z.ZodType<UpdateResellerChildRequest, z.ZodTypeDef, Inbound> = z
        .object({
            childIdentifier: z.string(),
            updateChild: components.UpdateChild$.inboundSchema,
        })
        .transform((v) => {
            return {
                childIdentifier: v.childIdentifier,
                updateChild: v.updateChild,
            };
        });

    export type Outbound = {
        childIdentifier: string;
        updateChild: components.UpdateChild$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateResellerChildRequest> = z
        .object({
            childIdentifier: z.string(),
            updateChild: components.UpdateChild$.outboundSchema,
        })
        .transform((v) => {
            return {
                childIdentifier: v.childIdentifier,
                updateChild: v.updateChild,
            };
        });
}

/** @internal */
export namespace UpdateResellerChildResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<UpdateResellerChildResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateResellerChildResponse> = z
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
