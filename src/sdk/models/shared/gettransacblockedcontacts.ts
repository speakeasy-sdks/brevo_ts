/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Reason code for blocking / unsubscribing (This code is safe for comparison)
 */
export enum GetTransacBlockedContactsContactsReasonCode {
    UnsubscribedViaMA = "unsubscribedViaMA",
    UnsubscribedViaEmail = "unsubscribedViaEmail",
    AdminBlocked = "adminBlocked",
    UnsubscribedViaApi = "unsubscribedViaApi",
    HardBounce = "hardBounce",
    ContactFlaggedAsSpam = "contactFlaggedAsSpam",
}

/**
 * Reason for blocking / unsubscribing
 */
export class GetTransacBlockedContactsContactsReason extends SpeakeasyBase {
    /**
     * Reason code for blocking / unsubscribing (This code is safe for comparison)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code?: GetTransacBlockedContactsContactsReasonCode;

    /**
     * Reason for blocking / unsubscribing (This string is not safe for comparison)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message?: string;
}

export class GetTransacBlockedContactsContacts extends SpeakeasyBase {
    /**
     * Date when the contact was blocked or unsubscribed on
     */
    @SpeakeasyMetadata()
    @Expose({ name: "blockedAt" })
    blockedAt: string;

    /**
     * Email address of the blocked or unsubscribed contact
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * Reason for blocking / unsubscribing
     */
    @SpeakeasyMetadata()
    @Expose({ name: "reason" })
    @Type(() => GetTransacBlockedContactsContactsReason)
    reason: GetTransacBlockedContactsContactsReason;

    /**
     * Sender email address of the blocked or unsubscribed contact
     */
    @SpeakeasyMetadata()
    @Expose({ name: "senderEmail" })
    senderEmail: string;
}

/**
 * List of blocked or unsubscribed transactional contacts
 */
export class GetTransacBlockedContacts extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: GetTransacBlockedContactsContacts })
    @Expose({ name: "contacts" })
    @Type(() => GetTransacBlockedContactsContacts)
    contacts?: GetTransacBlockedContactsContacts[];

    /**
     * Count of blocked or unsubscribed contact
     */
    @SpeakeasyMetadata()
    @Expose({ name: "count" })
    count?: number;
}
