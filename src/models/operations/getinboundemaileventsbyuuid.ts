/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetInboundEmailEventsByUuidRequest = {
    /**
     * UUID to fetch events specific to recieved email
     */
    uuid: string;
};

export type GetInboundEmailEventsByUuidResponse = {
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
     * Email campaign informations
     */
    getInboundEmailEventsByUuid?: components.GetInboundEmailEventsByUuid | undefined;
};

/** @internal */
export namespace GetInboundEmailEventsByUuidRequest$ {
    export type Inbound = {
        uuid: string;
    };

    export const inboundSchema: z.ZodType<
        GetInboundEmailEventsByUuidRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            uuid: z.string(),
        })
        .transform((v) => {
            return {
                uuid: v.uuid,
            };
        });

    export type Outbound = {
        uuid: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetInboundEmailEventsByUuidRequest
    > = z
        .object({
            uuid: z.string(),
        })
        .transform((v) => {
            return {
                uuid: v.uuid,
            };
        });
}

/** @internal */
export namespace GetInboundEmailEventsByUuidResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getInboundEmailEventsByUuid?: components.GetInboundEmailEventsByUuid$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetInboundEmailEventsByUuidResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getInboundEmailEventsByUuid: z
                .lazy(() => components.GetInboundEmailEventsByUuid$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getInboundEmailEventsByUuid === undefined
                    ? null
                    : { getInboundEmailEventsByUuid: v.getInboundEmailEventsByUuid }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getInboundEmailEventsByUuid?: components.GetInboundEmailEventsByUuid$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetInboundEmailEventsByUuidResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getInboundEmailEventsByUuid: z
                .lazy(() => components.GetInboundEmailEventsByUuid$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getInboundEmailEventsByUuid === undefined
                    ? null
                    : { getInboundEmailEventsByUuid: v.getInboundEmailEventsByUuid }),
            };
        });
}
