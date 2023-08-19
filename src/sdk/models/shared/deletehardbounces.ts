/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * values to delete hardbounces
 */
export class DeleteHardbounces extends SpeakeasyBase {
    /**
     * Target a specific email address
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contactEmail" })
    contactEmail?: string;

    /**
     * Ending date (YYYY-MM-DD) of the time period for deletion. The hardbounces until this date will be deleted. Must be greater than or equal to the startDate
     */
    @SpeakeasyMetadata()
    @Expose({ name: "endDate" })
    endDate?: string;

    /**
     * Starting date (YYYY-MM-DD) of the time period for deletion. The hardbounces occurred after this date will be deleted. Must be less than or equal to the endDate
     */
    @SpeakeasyMetadata()
    @Expose({ name: "startDate" })
    startDate?: string;
}
