/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ScheduleSmtpEmail = {
    /**
     * Batch ID of the batch transactional email scheduled
     */
    batchId?: string | undefined;
    /**
     * Message ID of the transactional email scheduled
     */
    messageId?: string | undefined;
    messageIds?: Array<string> | undefined;
};

/** @internal */
export namespace ScheduleSmtpEmail$ {
    export type Inbound = {
        batchId?: string | undefined;
        messageId?: string | undefined;
        messageIds?: Array<string> | undefined;
    };

    export const inboundSchema: z.ZodType<ScheduleSmtpEmail, z.ZodTypeDef, Inbound> = z
        .object({
            batchId: z.string().optional(),
            messageId: z.string().optional(),
            messageIds: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.batchId === undefined ? null : { batchId: v.batchId }),
                ...(v.messageId === undefined ? null : { messageId: v.messageId }),
                ...(v.messageIds === undefined ? null : { messageIds: v.messageIds }),
            };
        });

    export type Outbound = {
        batchId?: string | undefined;
        messageId?: string | undefined;
        messageIds?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ScheduleSmtpEmail> = z
        .object({
            batchId: z.string().optional(),
            messageId: z.string().optional(),
            messageIds: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.batchId === undefined ? null : { batchId: v.batchId }),
                ...(v.messageId === undefined ? null : { messageId: v.messageId }),
                ...(v.messageIds === undefined ? null : { messageIds: v.messageIds }),
            };
        });
}
