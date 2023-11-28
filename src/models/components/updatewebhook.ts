/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export enum UpdateWebhookEvents {
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

export class UpdateWebhook extends SpeakeasyBase {
    /**
     * Description of the webhook
     */
    @SpeakeasyMetadata()
    @Expose({ name: "description" })
    description?: string;

    /**
     * Inbound domain of webhook, used in case of event type `inbound`
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
    events?: UpdateWebhookEvents[];

    /**
     * URL of the webhook
     */
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}
