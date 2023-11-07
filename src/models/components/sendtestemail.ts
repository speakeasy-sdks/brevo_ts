/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export class SendTestEmail extends SpeakeasyBase {
    /**
     * List of the email addresses of the recipients whom you wish to send the test mail.
     *
     * @remarks
     * _If left empty, the test mail will be sent to your entire test list. You can not send more than 50 test emails per day_.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "emailTo" })
    emailTo?: string[];
}