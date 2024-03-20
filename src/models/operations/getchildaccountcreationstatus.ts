/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetChildAccountCreationStatusRequest = {
    /**
     * Either auth key or id of reseller's child
     */
    childIdentifier: string;
};

export type GetChildAccountCreationStatusResponse = {
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
     * status of reseller's child account
     */
    getChildAccountCreationStatus?: components.GetChildAccountCreationStatus | undefined;
};

/** @internal */
export namespace GetChildAccountCreationStatusRequest$ {
    export type Inbound = {
        childIdentifier: string;
    };

    export const inboundSchema: z.ZodType<
        GetChildAccountCreationStatusRequest,
        z.ZodTypeDef,
        Inbound
    > = z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetChildAccountCreationStatusRequest
    > = z
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
export namespace GetChildAccountCreationStatusResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getChildAccountCreationStatus?:
            | components.GetChildAccountCreationStatus$.Inbound
            | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetChildAccountCreationStatusResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getChildAccountCreationStatus: z
                .lazy(() => components.GetChildAccountCreationStatus$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getChildAccountCreationStatus === undefined
                    ? null
                    : { getChildAccountCreationStatus: v.getChildAccountCreationStatus }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getChildAccountCreationStatus?:
            | components.GetChildAccountCreationStatus$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetChildAccountCreationStatusResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getChildAccountCreationStatus: z
                .lazy(() => components.GetChildAccountCreationStatus$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getChildAccountCreationStatus === undefined
                    ? null
                    : { getChildAccountCreationStatus: v.getChildAccountCreationStatus }),
            };
        });
}
