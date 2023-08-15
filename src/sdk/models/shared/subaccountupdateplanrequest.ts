/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Credit details to update
 */
export class SubAccountUpdatePlanRequestCredits extends SpeakeasyBase {
    /**
     * Number of email credits
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: number;
}

/**
 * Features details to update
 */
export class SubAccountUpdatePlanRequestFeatures extends SpeakeasyBase {
    /**
     * Number of inboxes
     */
    @SpeakeasyMetadata()
    @Expose({ name: "inbox" })
    inbox?: number;

    /**
     * Number of landing pages
     */
    @SpeakeasyMetadata()
    @Expose({ name: "landingPage" })
    landingPage?: number;

    /**
     * Number of multi-users
     */
    @SpeakeasyMetadata()
    @Expose({ name: "users" })
    users?: number;
}

/**
 * Details of the plan to be changed
 */
export class SubAccountUpdatePlanRequest extends SpeakeasyBase {
    /**
     * Credit details to update
     */
    @SpeakeasyMetadata()
    @Expose({ name: "credits" })
    @Type(() => SubAccountUpdatePlanRequestCredits)
    credits?: SubAccountUpdatePlanRequestCredits;

    /**
     * Features details to update
     */
    @SpeakeasyMetadata()
    @Expose({ name: "features" })
    @Type(() => SubAccountUpdatePlanRequestFeatures)
    features?: SubAccountUpdatePlanRequestFeatures;
}
