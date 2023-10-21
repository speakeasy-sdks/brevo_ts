/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export enum CreateWebhookEvents {
    Sent = "sent",
    HardBounce = "hardBounce",
    SoftBounce = "softBounce",
    Blocked = "blocked",
    Spam = "spam",
    Delivered = "delivered",
    Request = "request",
    Click = "click",
    Invalid = "invalid",
    Deferred = "deferred",
    Opened = "opened",
    UniqueOpened = "uniqueOpened",
    Unsubscribed = "unsubscribed",
    ListAddition = "listAddition",
    ContactUpdated = "contactUpdated",
    ContactDeleted = "contactDeleted",
    InboundEmailProcessed = "inboundEmailProcessed",
}

/**
 * Type of the webhook
 */
export enum CreateWebhookType {
    Transactional = "transactional",
    Marketing = "marketing",
    Inbound = "inbound",
}

export class CreateWebhook extends SpeakeasyBase {
    /**
     * Description of the webhook
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Inbound domain of webhook, required in case of event type `inbound`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "domain" })
    domain?: string;

    /**
     * - Events triggering the webhook. Possible values for **Transactional** type webhook:
     *
     * @remarks
     * #### `sent` OR `request`, `delivered`, `hardBounce`, `softBounce`, `blocked`, `spam`, `invalid`, `deferred`, `click`, `opened`, `uniqueOpened` and `unsubscribed`
     * - Possible values for **Marketing** type webhook:
     * #### `spam`, `opened`, `click`, `hardBounce`, `softBounce`, `unsubscribed`, `listAddition` & `delivered`
     * - Possible values for **Inbound** type webhook:
     * #### `inboundEmailProcessed`
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "events" })
    events: CreateWebhookEvents[];

    /**
     * Type of the webhook
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: CreateWebhookType;

    /**
     * URL of the webhook
     */
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url: string;
}
