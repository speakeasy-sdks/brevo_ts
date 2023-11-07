/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Updated task details.
 */
export class PatchCrmTasksIdRequestBody extends SpeakeasyBase {
    /**
     * User id to whom task is assigned
     */
    @SpeakeasyMetadata()
    @Expose({ name: "assignToId" })
    assignToId?: string;

    /**
     * Companies ids for companies a task is linked to
     */
    @SpeakeasyMetadata()
    @Expose({ name: "companiesIds" })
    companiesIds?: string[];

    /**
     * Contact ids for contacts linked to this task
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contactsIds" })
    contactsIds?: number[];

    /**
     * Task date/time
     */
    @SpeakeasyMetadata()
    @Expose({ name: "date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    date?: Date;

    /**
     * Deal ids for deals a task is linked to
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dealsIds" })
    dealsIds?: string[];

    /**
     * Task marked as done
     */
    @SpeakeasyMetadata()
    @Expose({ name: "done" })
    done?: boolean;

    /**
     * Duration of task in milliseconds [1 minute = 60000 ms]
     */
    @SpeakeasyMetadata()
    @Expose({ name: "duration" })
    duration?: number;

    /**
     * Name of task
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Notes added to a task
     */
    @SpeakeasyMetadata()
    @Expose({ name: "notes" })
    notes?: string;

    /**
     * Task reminder date/time for a task
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reminder" })
    @Type(() => components.TaskReminder)
    reminder?: components.TaskReminder;

    /**
     * Id for type of task e.g Call / Email / Meeting etc.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taskTypeId" })
    taskTypeId?: string;
}

export class PatchCrmTasksIdRequest extends SpeakeasyBase {
    /**
     * Updated task details.
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody: PatchCrmTasksIdRequestBody;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class PatchCrmTasksIdResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}