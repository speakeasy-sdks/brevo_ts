/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";

/**
 * Category of the attribute
 */
export enum AttributeCategory {
    Normal = "normal",
    Transactional = "transactional",
    Category = "category",
    Calculated = "calculated",
    Global = "global",
}

export class CreateAttributeRequest extends SpeakeasyBase {
    /**
     * Category of the attribute
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attributeCategory" })
    attributeCategory: AttributeCategory;

    /**
     * Name of the attribute
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attributeName" })
    attributeName: string;

    /**
     * Values to create an attribute
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    createAttribute: components.CreateAttribute;
}

export class CreateAttributeResponse extends SpeakeasyBase {
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
