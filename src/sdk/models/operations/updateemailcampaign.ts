/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateEmailCampaignRequest extends SpeakeasyBase {
    /**
     * Id of the campaign
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaignId" })
    campaignId: number;

    /**
     * Values to update a campaign
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    updateEmailCampaign: shared.UpdateEmailCampaign;
}

export class UpdateEmailCampaignResponse extends SpeakeasyBase {
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
}
