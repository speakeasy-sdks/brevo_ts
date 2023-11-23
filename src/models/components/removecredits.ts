/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export class RemoveCredits extends SpeakeasyBase {
    /**
     * **Required if sms credits are empty.** Email credits to be removed from the child account
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: number;

    /**
     * **Required if email credits are empty.** SMS credits to be removed from the child account
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sms" })
    sms?: number;
}
