/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class DeleteSmtpTemplateRequest extends SpeakeasyBase {
    /**
     * id of the template
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateId" })
    templateId: number;
}

export class DeleteSmtpTemplateResponse extends SpeakeasyBase {
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
