/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

/**
 * Values to create a coupon collection
 */
export class CreateCouponCollectionRequestBody extends SpeakeasyBase {
    /**
     * A default coupon to be used in case there are no coupons left
     */
    @SpeakeasyMetadata()
    @Expose({ name: "defaultCoupon" })
    defaultCoupon: string;

    /**
     * Name of the collection with no white spaces between words
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

/**
 * Coupon collection created
 */
export class CreateCouponCollectionResponseBody extends SpeakeasyBase {
    /**
     * The id of the created collection
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;
}

export class CreateCouponCollectionResponse extends SpeakeasyBase {
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
     * Coupon collection created
     */
    @SpeakeasyMetadata()
    object?: CreateCouponCollectionResponseBody;
}
