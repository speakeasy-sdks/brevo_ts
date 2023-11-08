/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Language of the child account
 */
export enum Language {
    Fr = "fr",
    Es = "es",
    Pt = "pt",
    It = "it",
    De = "de",
    En = "en",
}

export class CreateChild extends SpeakeasyBase {
    /**
     * Company name to use to create the child account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "companyName" })
    companyName: string;

    /**
     * Email address to create the child account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * First name to use to create the child account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "firstName" })
    firstName: string;

    /**
     * Language of the child account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "language" })
    language?: Language;

    /**
     * Last name to use to create the child account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lastName" })
    lastName: string;

    /**
     * Password for the child account to login
     */
    @SpeakeasyMetadata()
    @Expose({ name: "password" })
    password: string;
}
