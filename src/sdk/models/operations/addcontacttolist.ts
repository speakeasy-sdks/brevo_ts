/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class AddContactToListRequest extends SpeakeasyBase {
    /**
     * Emails addresses OR IDs of the contacts
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody: any;

    /**
     * Id of the list
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=listId" })
    listId: number;
}

export class AddContactToListResponse extends SpeakeasyBase {
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
     * All contacts have been added successfully to the list with details of failed ones
     */
    @SpeakeasyMetadata()
    postContactInfo?: shared.PostContactInfo;
}
