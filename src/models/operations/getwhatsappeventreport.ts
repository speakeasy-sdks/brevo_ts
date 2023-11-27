/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";

/**
 * Filter the report for a specific event type
 */
export enum QueryParamEvent {
    Sent = "sent",
    Delivered = "delivered",
    Read = "read",
    Error = "error",
    Unsubscribe = "unsubscribe",
    Reply = "reply",
    SoftBounce = "soft-bounce",
}

/**
 * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
 */
export enum GetWhatsappEventReportQueryParamSort {
    Asc = "asc",
    Desc = "desc",
}

export class GetWhatsappEventReportRequest extends SpeakeasyBase {
    /**
     * Filter results for specific contact (WhatsApp Number with country code. Example, 85264318721)
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contactNumber" })
    contactNumber?: string;

    /**
     * Number of days in the past including today (positive integer). _Not compatible with 'startDate' and 'endDate'_
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=days" })
    days?: number;

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
    event?: QueryParamEvent;

    /**
     * Number limitation for the result returned
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    /**
     * Beginning point in the list to retrieve from
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
    offset?: number;

    /**
     * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
    sort?: GetWhatsappEventReportQueryParamSort;

    /**
     * **Mandatory if endDate is used.** Starting date of the report (YYYY-MM-DD). Must be lower than equal to endDate
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
    startDate?: string;
}

export class GetWhatsappEventReportResponse extends SpeakeasyBase {
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
    rawResponse: AxiosResponse;

    /**
     * WhatsApp events report
     */
    @SpeakeasyMetadata()
    getWhatsappEventReport?: components.GetWhatsappEventReport;
}
