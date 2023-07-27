/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * Coupon collections
 */
export class GetCouponCollection extends SpeakeasyBase {
    /**
     * Datetime on which the collection was created
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * The default coupon of the collection
     */
    @SpeakeasyMetadata()
    @Expose({ name: "defaultCoupon" })
    defaultCoupon: string;

    /**
     * The id of the collection
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * The name of the collection
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Not sent coupons in the collection
     */
    @SpeakeasyMetadata()
    @Expose({ name: "remainingCoupons" })
    remainingCoupons: number;

    /**
     * Total coupons in the collection
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalCoupons" })
    totalCoupons: number;
}
