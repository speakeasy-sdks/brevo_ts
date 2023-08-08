/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteWhatsAppCampaignRequest extends SpeakeasyBase {
    /**
     * id of the campaign
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaignId" })
    campaignId: number;
}

export class DeleteWhatsAppCampaignResponse extends SpeakeasyBase {
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
}
