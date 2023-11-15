/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";

export class AddCreditsRequest extends SpeakeasyBase {
    /**
     * Values to post to add credit to a specific child account
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    addCredits: components.AddCredits;

    /**
     * Either auth key or id of reseller's child
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=childIdentifier" })
    childIdentifier: string;
}

export class AddCreditsResponse extends SpeakeasyBase {
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
     * Credits added
     */
    @SpeakeasyMetadata()
    remainingCreditModel?: components.RemainingCreditModel;
}
