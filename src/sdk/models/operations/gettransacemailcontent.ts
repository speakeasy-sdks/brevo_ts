/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetTransacEmailContentRequest extends SpeakeasyBase {
    /**
     * Unique id of the transactional email that has been sent to a particular contact
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
    uuid: string;
}

export class GetTransacEmailContentResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Transactional email content
     */
    @SpeakeasyMetadata()
    getTransacEmailContent?: shared.GetTransacEmailContent;
}
