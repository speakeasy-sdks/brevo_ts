/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Attributes for deal creation
 *
 * @remarks
 *
 * If you want to create a deal on a specific pipeline and stage you can use the following attributes `pipeline` and `deal_stage`.
 *
 * Pipeline and deal_stage are ids you can fetch using this endpoint `/crm/pipeline/details/{pipelineID}`
 *
 */
export class PostCrmDealsAttributes extends SpeakeasyBase {}

/**
 * Deal create data.
 */
export class PostCrmDealsRequestBody extends SpeakeasyBase {
    /**
     * Attributes for deal creation
     *
     * @remarks
     *
     * If you want to create a deal on a specific pipeline and stage you can use the following attributes `pipeline` and `deal_stage`.
     *
     * Pipeline and deal_stage are ids you can fetch using this endpoint `/crm/pipeline/details/{pipelineID}`
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    @Type(() => PostCrmDealsAttributes)
    attributes?: PostCrmDealsAttributes;

    /**
     * Name of deal
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

/**
 * Created deal id
 */
export class PostCrmDealsResponseBody extends SpeakeasyBase {
    /**
     * Unique deal id
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;
}

export class PostCrmDealsResponse extends SpeakeasyBase {
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

    /**
     * Created new Deal
     */
    @SpeakeasyMetadata()
    object?: PostCrmDealsResponseBody;
}
