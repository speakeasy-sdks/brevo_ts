/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class UpdateExternalFeedRequest extends SpeakeasyBase {
    /**
     * Values to update a feed
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    updateExternalFeed: shared.UpdateExternalFeed;

    /**
     * UUID of the feed to update
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
    uuid: string;
}

export class UpdateExternalFeedResponse extends SpeakeasyBase {
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
