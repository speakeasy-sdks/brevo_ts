/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Credits remaining for child account
 */
export class Child extends SpeakeasyBase {
    /**
     * Email Credits remaining for child account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: number;

    /**
     * SMS Credits remaining for child account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sms" })
    sms: number;
}

export class Reseller extends SpeakeasyBase {
    /**
     * Email Credits remaining for reseller account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: number;

    /**
     * SMS Credits remaining for reseller account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sms" })
    sms: number;
}

export class RemainingCreditModel extends SpeakeasyBase {
    /**
     * Credits remaining for child account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "child" })
    @Type(() => Child)
    child: Child;

    @SpeakeasyMetadata()
    @Expose({ name: "reseller" })
    @Type(() => Reseller)
    reseller: Reseller;
}
