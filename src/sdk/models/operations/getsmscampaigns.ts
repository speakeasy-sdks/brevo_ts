/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
 */
export enum GetSmsCampaignsSort {
    Asc = "asc",
    Desc = "desc",
}

/**
 * Status of campaign.
 */
export enum GetSmsCampaignsStatus {
    Suspended = "suspended",
    Archive = "archive",
    Sent = "sent",
    Queued = "queued",
    Draft = "draft",
    InProcess = "inProcess",
}

export class GetSmsCampaignsRequest extends SpeakeasyBase {
    /**
     * **Mandatory if startDate is used.** Ending (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent sms campaigns. **Prefer to pass your timezone in date-time format for accurate result** ( only available if either 'status' not passed and if passed is set to 'sent' )
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
    endDate?: string;

    /**
     * Number limitation for the result returned
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    /**
     * Beginning point in the list to retrieve from.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
    offset?: number;

    /**
     * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
    sort?: GetSmsCampaignsSort;

    /**
     * **Mandatory if endDate is used.** Starting (urlencoded) UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) to filter the sent sms campaigns. **Prefer to pass your timezone in date-time format for accurate result** ( only available if either 'status' not passed and if passed is set to 'sent' )
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
    startDate?: string;

    /**
     * Status of campaign.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
    status?: GetSmsCampaignsStatus;
}

export class GetSmsCampaignsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * bad request
     */
    @SpeakeasyMetadata()
    errorModel?: shared.ErrorModel;

    /**
     * SMS campaigns informations
     */
    @SpeakeasyMetadata()
    getSmsCampaigns?: shared.GetSmsCampaigns;
}
