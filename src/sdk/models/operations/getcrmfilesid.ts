/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetCrmFilesIdRequest extends SpeakeasyBase {
    /**
     * File id to download.
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class GetCrmFilesIdResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Returns downloadable file link. Valid for next 5 minutes only.
     */
    @SpeakeasyMetadata()
    fileDownloadableLink?: shared.FileDownloadableLink;

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
