/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";

export class UpdateWebhookRequest extends SpeakeasyBase {
    /**
     * Values to update a webhook
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    updateWebhook: components.UpdateWebhook;

    /**
     * Id of the webhook
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhookId" })
    webhookId: number;
}

export class UpdateWebhookResponse extends SpeakeasyBase {
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
}