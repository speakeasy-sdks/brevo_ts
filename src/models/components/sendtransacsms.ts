/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Type of the SMS. Marketing SMS messages are those sent typically with marketing content. Transactional SMS messages are sent to individuals and are triggered in response to some action, such as a sign-up, purchase, etc.
 */
export enum SendTransacSmsType {
    Transactional = "transactional",
    Marketing = "marketing",
}

export type SendTransacSms = {
    /**
     * Content of the message. If more than **160 characters** long, will be sent as multiple text messages
     *
     * @remarks
     *
     */
    content: string;
    /**
     * A recognizable prefix will ensure your audience knows who you are. Recommended by U.S. carriers. This will be added as your Brand Name before the message content. **Prefer verifying maximum length of 160 characters including this prefix in message content to avoid multiple sending of same sms.**
     */
    organisationPrefix?: string | undefined;
    /**
     * Mobile number to send SMS with the country code
     */
    recipient: string;
    /**
     * Name of the sender. **The number of characters is limited to 11 for alphanumeric characters and 15 for numeric characters**
     *
     * @remarks
     *
     */
    sender: string;
    /**
     * Tag of the message
     */
    tag?: string | undefined;
    /**
     * Type of the SMS. Marketing SMS messages are those sent typically with marketing content. Transactional SMS messages are sent to individuals and are triggered in response to some action, such as a sign-up, purchase, etc.
     */
    type?: SendTransacSmsType | undefined;
    /**
     * Format of the message. It indicates whether the content should be treated as unicode or not.
     *
     * @remarks
     *
     */
    unicodeEnabled?: boolean | undefined;
    /**
     * Webhook to call for each event triggered by the message (delivered etc.)
     */
    webUrl?: string | undefined;
};

/** @internal */
export const SendTransacSmsType$ = z.nativeEnum(SendTransacSmsType);

/** @internal */
export namespace SendTransacSms$ {
    export type Inbound = {
        content: string;
        organisationPrefix?: string | undefined;
        recipient: string;
        sender: string;
        tag?: string | undefined;
        type?: SendTransacSmsType | undefined;
        unicodeEnabled?: boolean | undefined;
        webUrl?: string | undefined;
    };

    export const inboundSchema: z.ZodType<SendTransacSms, z.ZodTypeDef, Inbound> = z
        .object({
            content: z.string(),
            organisationPrefix: z.string().optional(),
            recipient: z.string(),
            sender: z.string(),
            tag: z.string().optional(),
            type: SendTransacSmsType$.optional(),
            unicodeEnabled: z.boolean().optional(),
            webUrl: z.string().optional(),
        })
        .transform((v) => {
            return {
                content: v.content,
                ...(v.organisationPrefix === undefined
                    ? null
                    : { organisationPrefix: v.organisationPrefix }),
                recipient: v.recipient,
                sender: v.sender,
                ...(v.tag === undefined ? null : { tag: v.tag }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.unicodeEnabled === undefined ? null : { unicodeEnabled: v.unicodeEnabled }),
                ...(v.webUrl === undefined ? null : { webUrl: v.webUrl }),
            };
        });

    export type Outbound = {
        content: string;
        organisationPrefix?: string | undefined;
        recipient: string;
        sender: string;
        tag?: string | undefined;
        type?: SendTransacSmsType | undefined;
        unicodeEnabled?: boolean | undefined;
        webUrl?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SendTransacSms> = z
        .object({
            content: z.string(),
            organisationPrefix: z.string().optional(),
            recipient: z.string(),
            sender: z.string(),
            tag: z.string().optional(),
            type: SendTransacSmsType$.optional(),
            unicodeEnabled: z.boolean().optional(),
            webUrl: z.string().optional(),
        })
        .transform((v) => {
            return {
                content: v.content,
                ...(v.organisationPrefix === undefined
                    ? null
                    : { organisationPrefix: v.organisationPrefix }),
                recipient: v.recipient,
                sender: v.sender,
                ...(v.tag === undefined ? null : { tag: v.tag }),
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.unicodeEnabled === undefined ? null : { unicodeEnabled: v.unicodeEnabled }),
                ...(v.webUrl === undefined ? null : { webUrl: v.webUrl }),
            };
        });
}
