/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Sort the results in the ascending/descending order of webhook creation
 */
export enum GetWebhooksSort {
    Asc = "asc",
    Desc = "desc",
}

/**
 * Filter on webhook type
 */
export enum GetWebhooksType {
    Marketing = "marketing",
    Transactional = "transactional",
    Inbound = "inbound",
}

export class GetWebhooksRequest extends SpeakeasyBase {
    /**
     * Sort the results in the ascending/descending order of webhook creation
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
    sort?: GetWebhooksSort;

    /**
     * Filter on webhook type
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
    type?: GetWebhooksType;
}

export class GetWebhooksResponse extends SpeakeasyBase {
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
     * Webhooks informations
     */
    @SpeakeasyMetadata()
    getWebhooks?: shared.GetWebhooks;
}
