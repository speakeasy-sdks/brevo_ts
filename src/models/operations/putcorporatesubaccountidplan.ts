/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";

export class PutCorporateSubAccountIdPlanRequest extends SpeakeasyBase {
    /**
     * Id of the sub-account organization
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: number;

    /**
     * Values to update a sub-account plan
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    subAccountUpdatePlanRequest: components.SubAccountUpdatePlanRequest;
}

export class PutCorporateSubAccountIdPlanResponse extends SpeakeasyBase {
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
