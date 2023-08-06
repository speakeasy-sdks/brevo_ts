/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * successfully created
 */
export class SendWhatsappMessage201ApplicationJSON extends SpeakeasyBase {
    /**
     * messageId of sent message
     */
    @SpeakeasyMetadata()
    @Expose({ name: "messageId" })
    messageId: string;
}

export class SendWhatsappMessageResponse extends SpeakeasyBase {
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
     * successfully created
     */
    @SpeakeasyMetadata()
    sendWhatsappMessage201ApplicationJSONObject?: SendWhatsappMessage201ApplicationJSON;
}
