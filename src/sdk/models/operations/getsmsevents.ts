/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Filter the report for specific events
 */
export enum GetSmsEventsEvent {
    Bounces = "bounces",
    HardBounces = "hardBounces",
    SoftBounces = "softBounces",
    Delivered = "delivered",
    Sent = "sent",
    Accepted = "accepted",
    Unsubscription = "unsubscription",
    Replies = "replies",
    Blocked = "blocked",
    Rejected = "rejected",
}

/**
 * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
 */
export enum GetSmsEventsSort {
    Asc = "asc",
    Desc = "desc",
}

export class GetSmsEventsRequest extends SpeakeasyBase {
    /**
     * Number of days in the past including today (positive integer). **Not compatible with 'startDate' and 'endDate'**
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=days" })
    days?: number;

    /**
     * **Mandatory if startDate is used.** Ending date (YYYY-MM-DD) of the report
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
    endDate?: string;

    /**
     * Filter the report for specific events
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event" })
    event?: GetSmsEventsEvent;

    /**
     * Number of documents per page
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    /**
     * Index of the first document of the page
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
    offset?: number;

    /**
     * Filter the report for a specific phone number
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phoneNumber" })
    phoneNumber?: string;

    /**
     * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
    sort?: GetSmsEventsSort;

    /**
     * **Mandatory if endDate is used.** Starting date (YYYY-MM-DD) of the report
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
    startDate?: string;

    /**
     * Filter the report for specific tags passed as a serialized urlencoded array
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
    tags?: string;
}

export class GetSmsEventsResponse extends SpeakeasyBase {
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

    /**
     * bad request
     */
    @SpeakeasyMetadata()
    errorModel?: shared.ErrorModel;

    /**
     * Sms events report informations
     */
    @SpeakeasyMetadata()
    getSmsEventReport?: shared.GetSmsEventReport;
}
