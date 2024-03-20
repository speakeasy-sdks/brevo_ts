/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type UpdateSenderRequest = {
    /**
     * Id of the sender
     */
    senderId: number;
    /**
     * sender's name
     */
    updateSender?: components.UpdateSender | undefined;
};

export type UpdateSenderResponse = {
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
export namespace UpdateSenderRequest$ {
    export type Inbound = {
        senderId: number;
        updateSender?: components.UpdateSender$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateSenderRequest, z.ZodTypeDef, Inbound> = z
        .object({
            senderId: z.number().int(),
            updateSender: z.lazy(() => components.UpdateSender$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                senderId: v.senderId,
                ...(v.updateSender === undefined ? null : { updateSender: v.updateSender }),
            };
        });

    export type Outbound = {
        senderId: number;
        updateSender?: components.UpdateSender$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSenderRequest> = z
        .object({
            senderId: z.number().int(),
            updateSender: z.lazy(() => components.UpdateSender$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                senderId: v.senderId,
                ...(v.updateSender === undefined ? null : { updateSender: v.updateSender }),
            };
        });
}

/** @internal */
export namespace UpdateSenderResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<UpdateSenderResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSenderResponse> = z
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
