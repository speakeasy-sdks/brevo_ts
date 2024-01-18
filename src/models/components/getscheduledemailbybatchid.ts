/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Current status of the scheduled batch
 */
export enum GetScheduledEmailByBatchIdStatus {
    InProgress = "inProgress",
    Queued = "queued",
    Processed = "processed",
    Error = "error",
}

export type Batches = {
    /**
     * Datetime on which the batch was scheduled
     */
    createdAt: Date;
    /**
     * Datetime for which the batch was scheduled
     */
    scheduledAt: Date;
    /**
     * Current status of the scheduled batch
     */
    status: GetScheduledEmailByBatchIdStatus;
};

export type GetScheduledEmailByBatchId = {
    batches?: Array<Batches> | undefined;
    /**
     * Total number of batches
     */
    count?: number | undefined;
};

/** @internal */
export const GetScheduledEmailByBatchIdStatus$ = z.nativeEnum(GetScheduledEmailByBatchIdStatus);

/** @internal */
export namespace Batches$ {
    export type Inbound = {
        createdAt: string;
        scheduledAt: string;
        status: GetScheduledEmailByBatchIdStatus;
    };

    export const inboundSchema: z.ZodType<Batches, z.ZodTypeDef, Inbound> = z
        .object({
            createdAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            scheduledAt: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            status: GetScheduledEmailByBatchIdStatus$,
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                scheduledAt: v.scheduledAt,
                status: v.status,
            };
        });

    export type Outbound = {
        createdAt: string;
        scheduledAt: string;
        status: GetScheduledEmailByBatchIdStatus;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Batches> = z
        .object({
            createdAt: z.date().transform((v) => v.toISOString()),
            scheduledAt: z.date().transform((v) => v.toISOString()),
            status: GetScheduledEmailByBatchIdStatus$,
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                scheduledAt: v.scheduledAt,
                status: v.status,
            };
        });
}

/** @internal */
export namespace GetScheduledEmailByBatchId$ {
    export type Inbound = {
        batches?: Array<Batches$.Inbound> | undefined;
        count?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetScheduledEmailByBatchId, z.ZodTypeDef, Inbound> = z
        .object({
            batches: z.array(z.lazy(() => Batches$.inboundSchema)).optional(),
            count: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.batches === undefined ? null : { batches: v.batches }),
                ...(v.count === undefined ? null : { count: v.count }),
            };
        });

    export type Outbound = {
        batches?: Array<Batches$.Outbound> | undefined;
        count?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetScheduledEmailByBatchId> = z
        .object({
            batches: z.array(z.lazy(() => Batches$.outboundSchema)).optional(),
            count: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.batches === undefined ? null : { batches: v.batches }),
                ...(v.count === undefined ? null : { count: v.count }),
            };
        });
}