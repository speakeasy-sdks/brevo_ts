/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * values to update in child account status
 */
export class UpdateChildAccountStatus extends SpeakeasyBase {
    /**
     * Status of Marketing Automation Platform activation for your account (true=enabled, false=disabled)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "marketingAutomation" })
    marketingAutomation?: boolean;

    /**
     * Status of SMS Campaign Platform activation for your account (true=enabled, false=disabled)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "smsCampaign" })
    smsCampaign?: boolean;

    /**
     * Status of Transactional Email Platform activation for your account (true=enabled, false=disabled)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transactionalEmail" })
    transactionalEmail?: boolean;

    /**
     * Status of Transactional SMS Platform activation for your account (true=enabled, false=disabled)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "transactionalSms" })
    transactionalSms?: boolean;
}
