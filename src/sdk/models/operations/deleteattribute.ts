/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Category of the attribute
 */
export enum DeleteAttributeAttributeCategory {
    Normal = "normal",
    Transactional = "transactional",
    Category = "category",
    Calculated = "calculated",
    Global = "global",
}

export class DeleteAttributeRequest extends SpeakeasyBase {
    /**
     * Category of the attribute
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attributeCategory" })
    attributeCategory: DeleteAttributeAttributeCategory;

    /**
     * Name of the existing attribute
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attributeName" })
    attributeName: string;
}

export class DeleteAttributeResponse extends SpeakeasyBase {
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
