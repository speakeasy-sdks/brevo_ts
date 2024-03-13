/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Filter the history for a specific event type
 */
export enum Event {
    InvalidParameter = "invalid_parameter",
    MissingParameter = "missing_parameter",
    HardBounce = "hardBounce",
    SoftBounce = "softBounce",
    Delivered = "delivered",
    Spam = "spam",
    Request = "request",
    Opened = "opened",
    Click = "click",
    Invalid = "invalid",
    Deferred = "deferred",
    Blocked = "blocked",
    Unsubscribed = "unsubscribed",
    Error = "error",
    UniqueOpened = "uniqueOpened",
    LoadedByProxy = "loadedByProxy",
    AllEvents = "allEvents",
}

export type ExportWebhooksHistory = {
    /**
     * Number of days in the past including today (positive integer). _Not compatible with 'startDate' and 'endDate'_
     */
    days?: number | undefined;
    /**
     * Filter the history for a specific email
     */
    email?: string | undefined;
    /**
     * Mandatory if startDate is used. Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate
     */
    endDate?: string | undefined;
    /**
     * Filter the history for a specific event type
     */
    event: Event;
    /**
     * Filter the history for a specific message id
     */
    messageId?: number | undefined;
    /**
     * Webhook URL to receive CSV file link
     */
    notifyURL: string;
    /**
     * Sorting order of records (asc or desc)
     */
    sort?: string | undefined;
    /**
     * Mandatory if endDate is used. Starting date of the history (YYYY-MM-DD). Must be lower than equal to endDate
     */
    startDate?: string | undefined;
    /**
     * Filter the history for a specific webhook id
     */
    webhookId?: number | undefined;
};

/** @internal */
export const Event$ = z.nativeEnum(Event);

/** @internal */
export namespace ExportWebhooksHistory$ {
    export type Inbound = {
        days?: number | undefined;
        email?: string | undefined;
        endDate?: string | undefined;
        event: Event;
        messageId?: number | undefined;
        notifyURL: string;
        sort?: string | undefined;
        startDate?: string | undefined;
        webhookId?: number | undefined;
    };

    export const inboundSchema: z.ZodType<ExportWebhooksHistory, z.ZodTypeDef, Inbound> = z
        .object({
            days: z.number().int().optional(),
            email: z.string().optional(),
            endDate: z.string().optional(),
            event: Event$,
            messageId: z.number().int().optional(),
            notifyURL: z.string(),
            sort: z.string().optional(),
            startDate: z.string().optional(),
            webhookId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.days === undefined ? null : { days: v.days }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                event: v.event,
                ...(v.messageId === undefined ? null : { messageId: v.messageId }),
                notifyURL: v.notifyURL,
                ...(v.sort === undefined ? null : { sort: v.sort }),
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.webhookId === undefined ? null : { webhookId: v.webhookId }),
            };
        });

    export type Outbound = {
        days?: number | undefined;
        email?: string | undefined;
        endDate?: string | undefined;
        event: Event;
        messageId?: number | undefined;
        notifyURL: string;
        sort?: string | undefined;
        startDate?: string | undefined;
        webhookId?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ExportWebhooksHistory> = z
        .object({
            days: z.number().int().optional(),
            email: z.string().optional(),
            endDate: z.string().optional(),
            event: Event$,
            messageId: z.number().int().optional(),
            notifyURL: z.string(),
            sort: z.string().optional(),
            startDate: z.string().optional(),
            webhookId: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.days === undefined ? null : { days: v.days }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.endDate === undefined ? null : { endDate: v.endDate }),
                event: v.event,
                ...(v.messageId === undefined ? null : { messageId: v.messageId }),
                notifyURL: v.notifyURL,
                ...(v.sort === undefined ? null : { sort: v.sort }),
                ...(v.startDate === undefined ? null : { startDate: v.startDate }),
                ...(v.webhookId === undefined ? null : { webhookId: v.webhookId }),
            };
        });
}
