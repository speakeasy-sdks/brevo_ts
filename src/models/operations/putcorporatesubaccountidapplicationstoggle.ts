/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";

export class PutCorporateSubAccountIdApplicationsToggleRequest extends SpeakeasyBase {
    /**
     * Id of the sub-account organization (mandatory)
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: number;

    /**
     * List of applications to activate or deactivate on a sub-account
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    subAccountAppsToggleRequest: components.SubAccountAppsToggleRequest;
}

export class PutCorporateSubAccountIdApplicationsToggleResponse extends SpeakeasyBase {
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
