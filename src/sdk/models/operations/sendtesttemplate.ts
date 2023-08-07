/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class SendTestTemplateRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    sendTestEmail: shared.SendTestEmail;

    /**
     * Id of the template
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateId" })
    templateId: number;
}

export class SendTestTemplateResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Template ID not found
     */
    @SpeakeasyMetadata()
    errorModel?: shared.ErrorModel;

    /**
     * Test email could not be sent to the following email addresses
     */
    @SpeakeasyMetadata()
    postSendFailed?: shared.PostSendFailed;
}
