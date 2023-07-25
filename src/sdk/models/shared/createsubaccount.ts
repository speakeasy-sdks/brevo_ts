/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Set the language of the sub-account
 */
export enum CreateSubAccountLanguage {
    En = "en",
    Fr = "fr",
    It = "it",
    Es = "es",
    Pt = "pt",
    De = "de",
}

/**
 * Request body with sub-account organization name
 */
export class CreateSubAccount extends SpeakeasyBase {
    /**
     * Set the name of the sub-account company
     */
    @SpeakeasyMetadata()
    @Expose({ name: "companyName" })
    companyName: string;

    /**
     * Email address for the organization
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * Set the language of the sub-account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "language" })
    language?: CreateSubAccountLanguage;

    /**
     * Set the timezone of the sub-account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "timezone" })
    timezone?: string;
}
