/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

/**
 * Updated task details.
 */
export type PatchCrmTasksIdRequestBody = {
    /**
     * User id to whom task is assigned
     */
    assignToId?: string | undefined;
    /**
     * Companies ids for companies a task is linked to
     */
    companiesIds?: Array<string> | undefined;
    /**
     * Contact ids for contacts linked to this task
     */
    contactsIds?: Array<number> | undefined;
    /**
     * Task date/time
     */
    date?: Date | undefined;
    /**
     * Deal ids for deals a task is linked to
     */
    dealsIds?: Array<string> | undefined;
    /**
     * Task marked as done
     */
    done?: boolean | undefined;
    /**
     * Duration of task in milliseconds [1 minute = 60000 ms]
     */
    duration?: number | undefined;
    /**
     * Name of task
     */
    name?: string | undefined;
    /**
     * Notes added to a task
     */
    notes?: string | undefined;
    /**
     * Task reminder date/time for a task
     */
    reminder?: components.TaskReminder | undefined;
    /**
     * Id for type of task e.g Call / Email / Meeting etc.
     */
    taskTypeId?: string | undefined;
};

export type PatchCrmTasksIdRequest = {
    /**
     * Updated task details.
     */
    requestBody: PatchCrmTasksIdRequestBody;
    id: string;
};

export type PatchCrmTasksIdResponse = {
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
export namespace PatchCrmTasksIdRequestBody$ {
    export type Inbound = {
        assignToId?: string | undefined;
        companiesIds?: Array<string> | undefined;
        contactsIds?: Array<number> | undefined;
        date?: string | undefined;
        dealsIds?: Array<string> | undefined;
        done?: boolean | undefined;
        duration?: number | undefined;
        name?: string | undefined;
        notes?: string | undefined;
        reminder?: components.TaskReminder$.Inbound | undefined;
        taskTypeId?: string | undefined;
    };

    export const inboundSchema: z.ZodType<PatchCrmTasksIdRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            assignToId: z.string().optional(),
            companiesIds: z.array(z.string()).optional(),
            contactsIds: z.array(z.number().int()).optional(),
            date: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            dealsIds: z.array(z.string()).optional(),
            done: z.boolean().optional(),
            duration: z.number().int().optional(),
            name: z.string().optional(),
            notes: z.string().optional(),
            reminder: components.TaskReminder$.inboundSchema.optional(),
            taskTypeId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.assignToId === undefined ? null : { assignToId: v.assignToId }),
                ...(v.companiesIds === undefined ? null : { companiesIds: v.companiesIds }),
                ...(v.contactsIds === undefined ? null : { contactsIds: v.contactsIds }),
                ...(v.date === undefined ? null : { date: v.date }),
                ...(v.dealsIds === undefined ? null : { dealsIds: v.dealsIds }),
                ...(v.done === undefined ? null : { done: v.done }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.reminder === undefined ? null : { reminder: v.reminder }),
                ...(v.taskTypeId === undefined ? null : { taskTypeId: v.taskTypeId }),
            };
        });

    export type Outbound = {
        assignToId?: string | undefined;
        companiesIds?: Array<string> | undefined;
        contactsIds?: Array<number> | undefined;
        date?: string | undefined;
        dealsIds?: Array<string> | undefined;
        done?: boolean | undefined;
        duration?: number | undefined;
        name?: string | undefined;
        notes?: string | undefined;
        reminder?: components.TaskReminder$.Outbound | undefined;
        taskTypeId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PatchCrmTasksIdRequestBody> = z
        .object({
            assignToId: z.string().optional(),
            companiesIds: z.array(z.string()).optional(),
            contactsIds: z.array(z.number().int()).optional(),
            date: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            dealsIds: z.array(z.string()).optional(),
            done: z.boolean().optional(),
            duration: z.number().int().optional(),
            name: z.string().optional(),
            notes: z.string().optional(),
            reminder: components.TaskReminder$.outboundSchema.optional(),
            taskTypeId: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.assignToId === undefined ? null : { assignToId: v.assignToId }),
                ...(v.companiesIds === undefined ? null : { companiesIds: v.companiesIds }),
                ...(v.contactsIds === undefined ? null : { contactsIds: v.contactsIds }),
                ...(v.date === undefined ? null : { date: v.date }),
                ...(v.dealsIds === undefined ? null : { dealsIds: v.dealsIds }),
                ...(v.done === undefined ? null : { done: v.done }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.reminder === undefined ? null : { reminder: v.reminder }),
                ...(v.taskTypeId === undefined ? null : { taskTypeId: v.taskTypeId }),
            };
        });
}

/** @internal */
export namespace PatchCrmTasksIdRequest$ {
    export type Inbound = {
        RequestBody: PatchCrmTasksIdRequestBody$.Inbound;
        id: string;
    };

    export const inboundSchema: z.ZodType<PatchCrmTasksIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            RequestBody: z.lazy(() => PatchCrmTasksIdRequestBody$.inboundSchema),
            id: z.string(),
        })
        .transform((v) => {
            return {
                requestBody: v.RequestBody,
                id: v.id,
            };
        });

    export type Outbound = {
        RequestBody: PatchCrmTasksIdRequestBody$.Outbound;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PatchCrmTasksIdRequest> = z
        .object({
            requestBody: z.lazy(() => PatchCrmTasksIdRequestBody$.outboundSchema),
            id: z.string(),
        })
        .transform((v) => {
            return {
                RequestBody: v.requestBody,
                id: v.id,
            };
        });
}

/** @internal */
export namespace PatchCrmTasksIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<PatchCrmTasksIdResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PatchCrmTasksIdResponse> = z
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
