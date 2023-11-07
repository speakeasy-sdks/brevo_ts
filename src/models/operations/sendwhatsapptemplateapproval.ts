/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";

export class SendWhatsAppTemplateApprovalRequest extends SpeakeasyBase {
    /**
     * id of the template
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateId" })
    templateId: number;
}

export class SendWhatsAppTemplateApprovalResponse extends SpeakeasyBase {
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