/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Attributes for deal update
 *
 * @remarks
 *
 * If you wish to update the pipeline of a deal you need to provide the `pipeline` and the `deal_stage`
 *
 * Pipeline and deal_stage are ids you can fetch using this endpoint `/crm/pipeline/details/{pipelineID}`
 *
 */
export class PatchCrmDealsIdAttributes extends SpeakeasyBase {}

/**
 * Updated deal details.
 */
export class PatchCrmDealsIdRequestBody extends SpeakeasyBase {
    /**
     * Attributes for deal update
     *
     * @remarks
     *
     * If you wish to update the pipeline of a deal you need to provide the `pipeline` and the `deal_stage`
     *
     * Pipeline and deal_stage are ids you can fetch using this endpoint `/crm/pipeline/details/{pipelineID}`
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    @Type(() => PatchCrmDealsIdAttributes)
    attributes?: PatchCrmDealsIdAttributes;

    /**
     * Name of deal
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class PatchCrmDealsIdRequest extends SpeakeasyBase {
    /**
     * Updated deal details.
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody: PatchCrmDealsIdRequestBody;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class PatchCrmDealsIdResponse extends SpeakeasyBase {
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