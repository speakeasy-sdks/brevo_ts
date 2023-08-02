/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

export class GetInboundEmailEventsByUuidAttachments extends SpeakeasyBase {
    /**
     * value of the Content-ID header of the attachment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contentId" })
    contentId?: string;

    /**
     * size of the attachment in bytes
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contentLength" })
    contentLength?: number;

    /**
     * value of the Content-Type header of the attachment
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contentType" })
    contentType?: string;

    /**
     * filename specified in the Content-Disposition header of the attachment
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

/**
 * Type of the event
 */
export enum GetInboundEmailEventsByUuidLogsType {
    Received = "received",
    Processed = "processed",
    WebhookFailed = "webhookFailed",
    WebhookDelivered = "webhookDelivered",
}

export class GetInboundEmailEventsByUuidLogs extends SpeakeasyBase {
    /**
     * Date of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "date" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    date?: Date;

    /**
     * Type of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: GetInboundEmailEventsByUuidLogsType;
}

/**
 * Email campaign informations
 */
export class GetInboundEmailEventsByUuid extends SpeakeasyBase {
    /**
     * List of attachments of the email. This will be present only after the processing is done.
     */
    @SpeakeasyMetadata({ elemType: GetInboundEmailEventsByUuidAttachments })
    @Expose({ name: "attachments" })
    @Type(() => GetInboundEmailEventsByUuidAttachments)
    attachments?: GetInboundEmailEventsByUuidAttachments[];

    /**
     * Date when email was delivered successfully to client’s webhook
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deliveredAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    deliveredAt?: Date;

    /**
     * List of events/logs that describe the lifecycle of the email on SIB platform
     */
    @SpeakeasyMetadata({ elemType: GetInboundEmailEventsByUuidLogs })
    @Expose({ name: "logs" })
    @Type(() => GetInboundEmailEventsByUuidLogs)
    logs?: GetInboundEmailEventsByUuidLogs[];

    /**
     * Value of the Message-ID header. This will be present only after the processing is done.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "messageId" })
    messageId?: string;

    /**
     * Date when email was received on SMTP relay
     */
    @SpeakeasyMetadata()
    @Expose({ name: "receivedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    receivedAt?: Date;

    /**
     * Recipient’s email address
     */
    @SpeakeasyMetadata()
    @Expose({ name: "recipient" })
    recipient?: string;

    /**
     * Sender’s email address
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sender" })
    sender?: string;

    /**
     * Value of the Subject header. This will be present only after the processing is done.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subject" })
    subject?: string;
}
