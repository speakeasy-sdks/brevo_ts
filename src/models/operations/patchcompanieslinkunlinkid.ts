/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * Linked / Unlinked contacts and deals ids.
 */
export class PatchCompaniesLinkUnlinkIdRequestBody extends SpeakeasyBase {
    /**
     * Contact ids for contacts to be linked with company
     */
    @SpeakeasyMetadata()
    @Expose({ name: "linkContactIds" })
    linkContactIds?: number[];

    /**
     * Deal ids for deals to be linked with company
     */
    @SpeakeasyMetadata()
    @Expose({ name: "linkDealsIds" })
    linkDealsIds?: string[];

    /**
     * Contact ids for contacts to be unlinked from company
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unlinkContactIds" })
    unlinkContactIds?: number[];

    /**
     * Deal ids for deals to be unlinked from company
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unlinkDealsIds" })
    unlinkDealsIds?: string[];
}

export class PatchCompaniesLinkUnlinkIdRequest extends SpeakeasyBase {
    /**
     * Linked / Unlinked contacts and deals ids.
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody: PatchCompaniesLinkUnlinkIdRequestBody;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class PatchCompaniesLinkUnlinkIdResponse extends SpeakeasyBase {
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
