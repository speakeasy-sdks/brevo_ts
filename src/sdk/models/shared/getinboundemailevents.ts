/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

export class GetInboundEmailEventsEvents extends SpeakeasyBase {
    /**
     * Date when email was received on SMTP relay
     */
    @SpeakeasyMetadata()
    @Expose({ name: "date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    date: Date;

    /**
     * Recipient’s email address
     */
    @SpeakeasyMetadata()
    @Expose({ name: "recipient" })
    recipient: string;

    /**
     * Sender’s email address
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sender" })
    sender: string;

    /**
     * UUID that can be used to fetch additional data
     */
    @SpeakeasyMetadata()
    @Expose({ name: "uuid" })
    uuid: string;
}

/**
 * List of events for received emails.
 */
export class GetInboundEmailEvents extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: GetInboundEmailEventsEvents })
    @Expose({ name: "events" })
    @Type(() => GetInboundEmailEventsEvents)
    events?: GetInboundEmailEventsEvents[];
}
