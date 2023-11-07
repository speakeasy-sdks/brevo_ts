/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Task Details
 */
export class Task extends SpeakeasyBase {
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
     * Deal ids for deals a task is linked to
     */
    @SpeakeasyMetadata()
    @Expose({ name: "dealsIds" })
    dealsIds?: string[];

    /**
     * Unique task id
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Name of task
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Id for type of task e.g Call / Email / Meeting etc.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "taskTypeId" })
    taskTypeId: string;
}