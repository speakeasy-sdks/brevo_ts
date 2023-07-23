/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetCrmNotesIdRequest extends SpeakeasyBase {
    /**
     * Note ID to get
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class GetCrmNotesIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Returns the Note by id
     */
    @SpeakeasyMetadata()
    note?: shared.Note;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Returned when invalid data posted
     */
    @SpeakeasyMetadata()
    errorModel?: shared.ErrorModel;
}
