/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";

/**
 * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
 */
export enum GetTransacBlockedContactsQueryParamSort {
    Asc = "asc",
    Desc = "desc",
}

export class GetTransacBlockedContactsRequest extends SpeakeasyBase {
    /**
     * **Mandatory if startDate is used.** Ending date (YYYY-MM-DD) till which you want to fetch the blocked or unsubscribed contacts
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
    endDate?: string;

    /**
     * Number of documents returned per page
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit?: number;

    /**
     * Index of the first document on the page
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
    offset?: number;

    /**
     * Comma separated list of emails of the senders from which contacts are blocked or unsubscribed
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=senders" })
    senders?: string[];

    /**
     * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
    sort?: GetTransacBlockedContactsQueryParamSort;

    /**
     * **Mandatory if endDate is used.** Starting date (YYYY-MM-DD) from which you want to fetch the blocked or unsubscribed contacts
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
    startDate?: string;
}

export class GetTransacBlockedContactsResponse extends SpeakeasyBase {
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
     * List of blocked or unsubscribed transactional contacts
     */
    @SpeakeasyMetadata()
    getTransacBlockedContacts?: components.GetTransacBlockedContacts;
}
