/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";

export class UpdateListRequest extends SpeakeasyBase {
    /**
     * Id of the list
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=listId" })
    listId: number;

    /**
     * Values to update a list
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    updateList: components.UpdateList;
}

export class UpdateListResponse extends SpeakeasyBase {
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
    rawResponse: AxiosResponse;
}
