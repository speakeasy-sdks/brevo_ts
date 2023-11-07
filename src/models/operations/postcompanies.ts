/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Attributes for company creation
 */
export class PostCompaniesAttributes extends SpeakeasyBase {}

/**
 * Company create data.
 */
export class PostCompaniesRequestBody extends SpeakeasyBase {
    /**
     * Attributes for company creation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    @Type(() => PostCompaniesAttributes)
    attributes?: PostCompaniesAttributes;

    /**
     * Country code if phone_number is passed in attributes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "countryCode" })
    countryCode?: number;

    /**
     * Name of company
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

/**
 * Created company id
 */
export class PostCompaniesResponseBody extends SpeakeasyBase {
    /**
     * Unique company id
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;
}

export class PostCompaniesResponse extends SpeakeasyBase {
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
     * Created new Company
     */
    @SpeakeasyMetadata()
    object?: PostCompaniesResponseBody;
}