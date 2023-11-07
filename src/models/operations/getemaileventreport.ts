/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";

/**
 * Filter the report for a specific event type
 */
export enum GetEmailEventReportQueryParamEvent {
    Bounces = "bounces",
    HardBounces = "hardBounces",
    SoftBounces = "softBounces",
    Delivered = "delivered",
    Spam = "spam",
    Requests = "requests",
    Opened = "opened",
    Clicks = "clicks",
    Invalid = "invalid",
    Deferred = "deferred",
    Blocked = "blocked",
    Unsubscribed = "unsubscribed",
    Error = "error",
    LoadedByProxy = "loadedByProxy",
}

/**
 * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
 */
export enum GetEmailEventReportQueryParamSort {
    Asc = "asc",
    Desc = "desc",
}

export class GetEmailEventReportRequest extends SpeakeasyBase {
    /**
     * Number of days in the past including today (positive integer). _Not compatible with 'startDate' and 'endDate'_
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=days" })
    days?: number;

    /**
     * Filter the report for a specific email addresses
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
    email?: string;

    /**
     * **Mandatory if startDate is used.** Ending date of the report (YYYY-MM-DD). Must be greater than equal to startDate
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
    endDate?: string;

    /**
     * Filter the report for a specific event type
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=event" })
    event?: GetEmailEventReportQueryParamEvent;

    /**
     * Number limitation for the result returned
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    /**
     * Filter on a specific message id
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=messageId" })
    messageId?: string;

    /**
     * Beginning point in the list to retrieve from.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
    offset?: number;

    /**
     * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
    sort?: GetEmailEventReportQueryParamSort;

    /**
     * **Mandatory if endDate is used.** Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
    startDate?: string;

    /**
     * Filter the report for tags (serialized and urlencoded array)
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
    tags?: string;

    /**
     * Filter on a specific template id
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=templateId" })
    templateId?: number;
}

export class GetEmailEventReportResponse extends SpeakeasyBase {
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
     * Email events report informations
     */
    @SpeakeasyMetadata()
    getEmailEventReport?: components.GetEmailEventReport;
}