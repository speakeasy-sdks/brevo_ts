/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

/**
 * Task name.
 */
export type PostCrmTasksRequestBody = {
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
     * Task due date and time
     */
    date: Date;
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
    name: string;
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
    taskTypeId: string;
};

/**
 * Task Details
 */
export type PostCrmTasksResponseBody = {
    /**
     * Unique task id
     */
    id: string;
};

export type PostCrmTasksResponse = {
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
    /**
     * Created new task
     */
    object?: PostCrmTasksResponseBody | undefined;
};

/** @internal */
export namespace PostCrmTasksRequestBody$ {
    export type Inbound = {
        assignToId?: string | undefined;
        companiesIds?: Array<string> | undefined;
        contactsIds?: Array<number> | undefined;
        date: string;
        dealsIds?: Array<string> | undefined;
        done?: boolean | undefined;
        duration?: number | undefined;
        name: string;
        notes?: string | undefined;
        reminder?: components.TaskReminder$.Inbound | undefined;
        taskTypeId: string;
    };

    export const inboundSchema: z.ZodType<PostCrmTasksRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            assignToId: z.string().optional(),
            companiesIds: z.array(z.string()).optional(),
            contactsIds: z.array(z.number().int()).optional(),
            date: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            dealsIds: z.array(z.string()).optional(),
            done: z.boolean().optional(),
            duration: z.number().int().optional(),
            name: z.string(),
            notes: z.string().optional(),
            reminder: components.TaskReminder$.inboundSchema.optional(),
            taskTypeId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.assignToId === undefined ? null : { assignToId: v.assignToId }),
                ...(v.companiesIds === undefined ? null : { companiesIds: v.companiesIds }),
                ...(v.contactsIds === undefined ? null : { contactsIds: v.contactsIds }),
                date: v.date,
                ...(v.dealsIds === undefined ? null : { dealsIds: v.dealsIds }),
                ...(v.done === undefined ? null : { done: v.done }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
                name: v.name,
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.reminder === undefined ? null : { reminder: v.reminder }),
                taskTypeId: v.taskTypeId,
            };
        });

    export type Outbound = {
        assignToId?: string | undefined;
        companiesIds?: Array<string> | undefined;
        contactsIds?: Array<number> | undefined;
        date: string;
        dealsIds?: Array<string> | undefined;
        done?: boolean | undefined;
        duration?: number | undefined;
        name: string;
        notes?: string | undefined;
        reminder?: components.TaskReminder$.Outbound | undefined;
        taskTypeId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostCrmTasksRequestBody> = z
        .object({
            assignToId: z.string().optional(),
            companiesIds: z.array(z.string()).optional(),
            contactsIds: z.array(z.number().int()).optional(),
            date: z.date().transform((v) => v.toISOString()),
            dealsIds: z.array(z.string()).optional(),
            done: z.boolean().optional(),
            duration: z.number().int().optional(),
            name: z.string(),
            notes: z.string().optional(),
            reminder: components.TaskReminder$.outboundSchema.optional(),
            taskTypeId: z.string(),
        })
        .transform((v) => {
            return {
                ...(v.assignToId === undefined ? null : { assignToId: v.assignToId }),
                ...(v.companiesIds === undefined ? null : { companiesIds: v.companiesIds }),
                ...(v.contactsIds === undefined ? null : { contactsIds: v.contactsIds }),
                date: v.date,
                ...(v.dealsIds === undefined ? null : { dealsIds: v.dealsIds }),
                ...(v.done === undefined ? null : { done: v.done }),
                ...(v.duration === undefined ? null : { duration: v.duration }),
                name: v.name,
                ...(v.notes === undefined ? null : { notes: v.notes }),
                ...(v.reminder === undefined ? null : { reminder: v.reminder }),
                taskTypeId: v.taskTypeId,
            };
        });
}

/** @internal */
export namespace PostCrmTasksResponseBody$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<PostCrmTasksResponseBody, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostCrmTasksResponseBody> = z
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
export namespace PostCrmTasksResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: PostCrmTasksResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<PostCrmTasksResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => PostCrmTasksResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: PostCrmTasksResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostCrmTasksResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => PostCrmTasksResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
