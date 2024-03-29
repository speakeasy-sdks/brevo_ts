/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type SendWhatsappMessageText = {
    /**
     * List of phone numbers of the contacts
     */
    contactNumbers: Array<string>;
    /**
     * WhatsApp Number with country code. Example, 85264318721
     */
    senderNumber: string;
    /**
     * Text to be sent as message body (will be overridden if templateId is passed in the same request)
     */
    text: string;
};

/** @internal */
export namespace SendWhatsappMessageText$ {
    export type Inbound = {
        contactNumbers: Array<string>;
        senderNumber: string;
        text: string;
    };

    export const inboundSchema: z.ZodType<SendWhatsappMessageText, z.ZodTypeDef, Inbound> = z
        .object({
            contactNumbers: z.array(z.string()),
            senderNumber: z.string(),
            text: z.string(),
        })
        .transform((v) => {
            return {
                contactNumbers: v.contactNumbers,
                senderNumber: v.senderNumber,
                text: v.text,
            };
        });

    export type Outbound = {
        contactNumbers: Array<string>;
        senderNumber: string;
        text: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SendWhatsappMessageText> = z
        .object({
            contactNumbers: z.array(z.string()),
            senderNumber: z.string(),
            text: z.string(),
        })
        .transform((v) => {
            return {
                contactNumbers: v.contactNumbers,
                senderNumber: v.senderNumber,
                text: v.text,
            };
        });
}
