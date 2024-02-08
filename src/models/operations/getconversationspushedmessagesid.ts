/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GetConversationsPushedMessagesIdRequest = {
    /**
     * ID of the message sent previously
     */
    id: string;
};

export type GetConversationsPushedMessagesIdResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Requested message is returned as a response
     */
    conversationsMessage?: components.ConversationsMessage | undefined;
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
export namespace GetConversationsPushedMessagesIdRequest$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<
        GetConversationsPushedMessagesIdRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetConversationsPushedMessagesIdRequest
    > = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace GetConversationsPushedMessagesIdResponse$ {
    export type Inbound = {
        ContentType: string;
        ConversationsMessage?: components.ConversationsMessage$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<
        GetConversationsPushedMessagesIdResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            ConversationsMessage: components.ConversationsMessage$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.ConversationsMessage === undefined
                    ? null
                    : { conversationsMessage: v.ConversationsMessage }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        ConversationsMessage?: components.ConversationsMessage$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetConversationsPushedMessagesIdResponse
    > = z
        .object({
            contentType: z.string(),
            conversationsMessage: components.ConversationsMessage$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.conversationsMessage === undefined
                    ? null
                    : { ConversationsMessage: v.conversationsMessage }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
