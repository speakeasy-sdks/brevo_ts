/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Test email could not be sent to the following email addresses
 */
export class PostSendFailed extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "blackListedEmails" })
    blackListedEmails?: string[];

    /**
     * Response code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code: string;

    /**
     * Response message
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;

    @SpeakeasyMetadata()
    @Expose({ name: "unexistingEmails" })
    unexistingEmails?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "withoutListEmails" })
    withoutListEmails?: string[];
}
