/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type DeleteSmtpLogMessageIdRequest = {
    /**
     * MessageId of the transactional log to delete
     */
    messageId: string;
};

export type DeleteSmtpLogMessageIdResponse = {
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
export namespace DeleteSmtpLogMessageIdRequest$ {
    export type Inbound = {
        messageId: string;
    };

    export const inboundSchema: z.ZodType<DeleteSmtpLogMessageIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            messageId: z.string(),
        })
        .transform((v) => {
            return {
                messageId: v.messageId,
            };
        });

    export type Outbound = {
        messageId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteSmtpLogMessageIdRequest> =
        z
            .object({
                messageId: z.string(),
            })
            .transform((v) => {
                return {
                    messageId: v.messageId,
                };
            });
}

/** @internal */
export namespace DeleteSmtpLogMessageIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<DeleteSmtpLogMessageIdResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteSmtpLogMessageIdResponse> =
        z
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
