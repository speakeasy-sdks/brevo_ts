/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Credits remaining for child account
 */
export class RemainingCreditModelChild extends SpeakeasyBase {
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

export class RemainingCreditModelReseller extends SpeakeasyBase {
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
    @Type(() => RemainingCreditModelChild)
    child: RemainingCreditModelChild;

    @SpeakeasyMetadata()
    @Expose({ name: "reseller" })
    @Type(() => RemainingCreditModelReseller)
    reseller: RemainingCreditModelReseller;
}
