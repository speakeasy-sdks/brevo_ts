/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateContactRequest extends SpeakeasyBase {
    /**
     * Email (urlencoded) OR ID of the contact
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=identifier" })
    identifier: any;

    /**
     * Values to update a contact
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    updateContact: shared.UpdateContact;
}

export class UpdateContactResponse extends SpeakeasyBase {
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
