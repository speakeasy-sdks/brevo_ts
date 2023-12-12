/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Event which occurred
 */
export enum GetWhatsappEventReportEvent {
    Sent = "sent",
    Delivered = "delivered",
    Read = "read",
    Error = "error",
    Unsubscribe = "unsubscribe",
    Reply = "reply",
    SoftBounce = "soft-bounce",
}

export type GetWhatsappEventReportEvents = {
    /**
     * Text of the reply (will be there only in case of `reply` event with text)
     */
    body?: string | undefined;
    /**
     * WhatsApp Number with country code. Example, 85264318721
     */
    contactNumber: string;
    /**
     * UTC date-time on which the event has been generated
     */
    date: string;
    /**
     * Event which occurred
     */
    event: GetWhatsappEventReportEvent;
    /**
     * Url of the media reply (will be there only in case of `reply` event with media)
     */
    mediaUrl?: string | undefined;
    /**
     * Message ID which generated the event
     */
    messageId: string;
    /**
     * Reason for the event (will be there in case of `error` and `soft-bounce` events)
     */
    reason?: string | undefined;
    /**
     * WhatsApp Number with country code. Example, 85264318721
     */
    senderNumber: string;
};

export type GetWhatsappEventReport = {
    events?: Array<GetWhatsappEventReportEvents> | undefined;
};

/** @internal */
export const GetWhatsappEventReportEvent$ = z.nativeEnum(GetWhatsappEventReportEvent);

/** @internal */
export namespace GetWhatsappEventReportEvents$ {
    export type Inbound = {
        body?: string | undefined;
        contactNumber: string;
        date: string;
        event: GetWhatsappEventReportEvent;
        mediaUrl?: string | undefined;
        messageId: string;
        reason?: string | undefined;
        senderNumber: string;
    };

    export const inboundSchema: z.ZodType<GetWhatsappEventReportEvents, z.ZodTypeDef, Inbound> = z
        .object({
            body: z.string().optional(),
            contactNumber: z.string(),
            date: z.string(),
            event: GetWhatsappEventReportEvent$,
            mediaUrl: z.string().optional(),
            messageId: z.string(),
            reason: z.string().optional(),
            senderNumber: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.body === undefined ? null : { body: v.body }),
                contactNumber: v.contactNumber,
                date: v.date,
                event: v.event,
                ...(v.mediaUrl === undefined ? null : { mediaUrl: v.mediaUrl }),
                messageId: v.messageId,
                ...(v.reason === undefined ? null : { reason: v.reason }),
                senderNumber: v.senderNumber,
            };
        });

    export type Outbound = {
        body?: string | undefined;
        contactNumber: string;
        date: string;
        event: GetWhatsappEventReportEvent;
        mediaUrl?: string | undefined;
        messageId: string;
        reason?: string | undefined;
        senderNumber: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWhatsappEventReportEvents> = z
        .object({
            body: z.string().optional(),
            contactNumber: z.string(),
            date: z.string(),
            event: GetWhatsappEventReportEvent$,
            mediaUrl: z.string().optional(),
            messageId: z.string(),
            reason: z.string().optional(),
            senderNumber: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.body === undefined ? null : { body: v.body }),
                contactNumber: v.contactNumber,
                date: v.date,
                event: v.event,
                ...(v.mediaUrl === undefined ? null : { mediaUrl: v.mediaUrl }),
                messageId: v.messageId,
                ...(v.reason === undefined ? null : { reason: v.reason }),
                senderNumber: v.senderNumber,
            };
        });
}

/** @internal */
export namespace GetWhatsappEventReport$ {
    export type Inbound = {
        events?: Array<GetWhatsappEventReportEvents$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetWhatsappEventReport, z.ZodTypeDef, Inbound> = z
        .object({
            events: z.array(z.lazy(() => GetWhatsappEventReportEvents$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.events === undefined ? null : { events: v.events }),
            };
        });

    export type Outbound = {
        events?: Array<GetWhatsappEventReportEvents$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWhatsappEventReport> = z
        .object({
            events: z.array(z.lazy(() => GetWhatsappEventReportEvents$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.events === undefined ? null : { events: v.events }),
            };
        });
}
