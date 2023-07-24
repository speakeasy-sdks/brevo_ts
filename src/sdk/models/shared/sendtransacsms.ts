/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Type of the SMS. Marketing SMS messages are those sent typically with marketing content. Transactional SMS messages are sent to individuals and are triggered in response to some action, such as a sign-up, purchase, etc.
 */
export enum SendTransacSmsType {
    Transactional = "transactional",
    Marketing = "marketing",
}

/**
 * Values to send a transactional SMS
 */
export class SendTransacSms extends SpeakeasyBase {
    /**
     * Content of the message. If more than **160 characters** long, will be sent as multiple text messages
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "content" })
    content: string;

    /**
     * A recognizable prefix will ensure your audience knows who you are. Recommended by U.S. carriers. This will be added as your Brand Name before the message content. **Prefer verifying maximum length of 160 characters including this prefix in message content to avoid multiple sending of same sms.**
     */
    @SpeakeasyMetadata()
    @Expose({ name: "organisationPrefix" })
    organisationPrefix?: string;

    /**
     * Mobile number to send SMS with the country code
     */
    @SpeakeasyMetadata()
    @Expose({ name: "recipient" })
    recipient: string;

    /**
     * Name of the sender. **The number of characters is limited to 11 for alphanumeric characters and 15 for numeric characters**
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sender" })
    sender: string;

    /**
     * Tag of the message
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tag" })
    tag?: string;

    /**
     * Type of the SMS. Marketing SMS messages are those sent typically with marketing content. Transactional SMS messages are sent to individuals and are triggered in response to some action, such as a sign-up, purchase, etc.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: SendTransacSmsType;

    /**
     * Format of the message. It indicates whether the content should be treated as unicode or not.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unicodeEnabled" })
    unicodeEnabled?: boolean;

    /**
     * Webhook to call for each event triggered by the message (delivered etc.)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "webUrl" })
    webUrl?: string;
}
