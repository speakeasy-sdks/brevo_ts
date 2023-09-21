/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetChildInfoRequest extends SpeakeasyBase {
    /**
     * Either auth key or id of reseller's child
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=childIdentifier" })
    childIdentifier: string;
}

export class GetChildInfoResponse extends SpeakeasyBase {
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
     * Information for the child
     */
    @SpeakeasyMetadata()
    getChildInfo?: shared.GetChildInfo;
}
