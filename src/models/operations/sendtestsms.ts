/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";

export class SendTestSmsRequest extends SpeakeasyBase {
    /**
     * Id of the SMS campaign
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaignId" })
    campaignId: number;

    /**
     * Mobile number of the recipient with the country code. This number **must belong to one of your contacts in Brevo account and must not be blacklisted**
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    sendTestSms: components.SendTestSms;
}

export class SendTestSmsResponse extends SpeakeasyBase {
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