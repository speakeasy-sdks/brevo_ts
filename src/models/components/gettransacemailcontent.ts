/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose, Type } from "class-transformer";

export class GetTransacEmailContentEvents extends SpeakeasyBase {
    /**
     * Name of the event that occurred on the sent email
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Time at which the event occurred
     */
    @SpeakeasyMetadata()
    @Expose({ name: "time" })
    time: string;
}

export class GetTransacEmailContent extends SpeakeasyBase {
    /**
     * Count of the attachments that were sent in the email
     */
    @SpeakeasyMetadata()
    @Expose({ name: "attachmentCount" })
    attachmentCount: number;

    /**
     * Actual content of the transactional email that has been sent
     */
    @SpeakeasyMetadata()
    @Expose({ name: "body" })
    body: string;

    /**
     * Date on which transactional email was sent
     */
    @SpeakeasyMetadata()
    @Expose({ name: "date" })
    date: string;

    /**
     * Email address to which transactional email has been sent
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * Series of events which occurred on the transactional email
     */
    @SpeakeasyMetadata({ elemType: GetTransacEmailContentEvents })
    @Expose({ name: "events" })
    @Type(() => GetTransacEmailContentEvents)
    events: GetTransacEmailContentEvents[];

    /**
     * Subject of the sent email
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subject" })
    subject: string;

    /**
     * Id of the template
     */
    @SpeakeasyMetadata()
    @Expose({ name: "templateId" })
    templateId?: number;
}
