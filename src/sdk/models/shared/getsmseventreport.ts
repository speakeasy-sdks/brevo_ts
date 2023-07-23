/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Event which occurred
 */
export enum GetSmsEventReportEventsEvent {
    Bounces = "bounces",
    HardBounces = "hardBounces",
    SoftBounces = "softBounces",
    Delivered = "delivered",
    Sent = "sent",
    Accepted = "accepted",
    Unsubscription = "unsubscription",
    Replies = "replies",
    Blocked = "blocked",
    Rejected = "rejected",
}

export class GetSmsEventReportEvents extends SpeakeasyBase {
    /**
     * UTC date-time on which the event has been generated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "date" })
    date?: string;

    /**
     * Event which occurred
     */
    @SpeakeasyMetadata()
    @Expose({ name: "event" })
    event?: GetSmsEventReportEventsEvent;

    /**
     * Message ID which generated the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "messageId" })
    messageId?: string;

    /**
     * Phone number which has generated the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "phoneNumber" })
    phoneNumber?: string;

    /**
     * Reason of bounce (only available if the event is hardbounce or softbounce)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reason" })
    reason?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "reply" })
    reply?: string;

    /**
     * Tag of the SMS which generated the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tag" })
    tag?: string;
}

/**
 * Sms events report informations
 */
export class GetSmsEventReport extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: GetSmsEventReportEvents })
    @Expose({ name: "events" })
    @Type(() => GetSmsEventReportEvents)
    events?: GetSmsEventReportEvents[];
}
