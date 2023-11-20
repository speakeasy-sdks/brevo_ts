/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Set of attributes of the contact
 */
export class GetContactsAttributes extends SpeakeasyBase {}

export class Contacts extends SpeakeasyBase {
    /**
     * Set of attributes of the contact
     */
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    @Type(() => GetContactsAttributes)
    attributes: GetContactsAttributes;

    /**
     * Creation UTC date-time of the contact (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

    /**
     * Email address of the contact for which you requested the details
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * Blacklist status for email campaigns (true=blacklisted, false=not blacklisted)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "emailBlacklisted" })
    emailBlacklisted: boolean;

    /**
     * ID of the contact for which you requested the details
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    @SpeakeasyMetadata()
    @Expose({ name: "listIds" })
    listIds: number[];

    @SpeakeasyMetadata()
    @Expose({ name: "listUnsubscribed" })
    listUnsubscribed?: number[];

    /**
     * Last modification UTC date-time of the contact (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "modifiedAt" })
    modifiedAt: string;

    /**
     * Blacklist status for SMS campaigns (true=blacklisted, false=not blacklisted)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "smsBlacklisted" })
    smsBlacklisted: boolean;
}

export class GetContacts extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: Contacts })
    @Expose({ name: "contacts" })
    @Type(() => Contacts)
    contacts: Contacts[];

    /**
     * Number of contacts
     */
    @SpeakeasyMetadata()
    @Expose({ name: "count" })
    count: number;
}
