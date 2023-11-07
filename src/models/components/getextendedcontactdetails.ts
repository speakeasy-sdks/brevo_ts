/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Set of attributes of the contact
 */
export class GetExtendedContactDetailsAttributes extends SpeakeasyBase {}

export class GetExtendedContactDetailsLinks extends SpeakeasyBase {
    /**
     * Number of clicks on this link for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "count" })
    count: number;

    /**
     * UTC date-time of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "eventTime" })
    eventTime: string;

    /**
     * IP from which the user has clicked on the link
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ip" })
    ip: string;

    /**
     * URL of the clicked link
     */
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url: string;
}

export class GetExtendedContactDetailsClicked extends SpeakeasyBase {
    /**
     * ID of the campaign which generated the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "campaignId" })
    campaignId: number;

    /**
     * Listing of the clicked links for the campaign
     */
    @SpeakeasyMetadata({ elemType: GetExtendedContactDetailsLinks })
    @Expose({ name: "links" })
    @Type(() => GetExtendedContactDetailsLinks)
    links: GetExtendedContactDetailsLinks[];
}

export class GetExtendedContactDetailsComplaints extends SpeakeasyBase {
    /**
     * ID of the campaign which generated the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "campaignId" })
    campaignId: number;

    /**
     * UTC date-time of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "eventTime" })
    eventTime: string;
}

export class GetExtendedContactDetailsDelivered extends SpeakeasyBase {
    /**
     * ID of the campaign which generated the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "campaignId" })
    campaignId: number;

    /**
     * UTC date-time of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "eventTime" })
    eventTime: string;
}

export class GetExtendedContactDetailsHardBounces extends SpeakeasyBase {
    /**
     * ID of the campaign which generated the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "campaignId" })
    campaignId: number;

    /**
     * UTC date-time of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "eventTime" })
    eventTime: string;
}

export class GetExtendedContactDetailsMessagesSent extends SpeakeasyBase {
    /**
     * ID of the campaign which generated the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "campaignId" })
    campaignId: number;

    /**
     * UTC date-time of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "eventTime" })
    eventTime: string;
}

export class GetExtendedContactDetailsOpened extends SpeakeasyBase {
    /**
     * ID of the campaign which generated the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "campaignId" })
    campaignId: number;

    /**
     * Number of openings for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "count" })
    count: number;

    /**
     * UTC date-time of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "eventTime" })
    eventTime: string;

    /**
     * IP from which the user has opened the email
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ip" })
    ip: string;
}

export class GetExtendedContactDetailsSoftBounces extends SpeakeasyBase {
    /**
     * ID of the campaign which generated the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "campaignId" })
    campaignId: number;

    /**
     * UTC date-time of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "eventTime" })
    eventTime: string;
}

export class GetExtendedContactDetailsTransacAttributes extends SpeakeasyBase {}

export class GetExtendedContactDetailsAdminUnsubscription extends SpeakeasyBase {
    /**
     * UTC date-time of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "eventTime" })
    eventTime: string;

    /**
     * IP from which the user has been unsubscribed
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ip" })
    ip?: string;
}

export class GetExtendedContactDetailsUserUnsubscription extends SpeakeasyBase {
    /**
     * ID of the campaign which generated the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "campaignId" })
    campaignId: number;

    /**
     * UTC date-time of the event
     */
    @SpeakeasyMetadata()
    @Expose({ name: "eventTime" })
    eventTime: string;

    /**
     * IP from which the user has unsubscribed
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ip" })
    ip?: string;
}

/**
 * Listing of the unsubscription for the contact
 */
export class GetExtendedContactDetailsUnsubscriptions extends SpeakeasyBase {
    /**
     * Contact has been unsubscribed from the administrator
     */
    @SpeakeasyMetadata({ elemType: GetExtendedContactDetailsAdminUnsubscription })
    @Expose({ name: "adminUnsubscription" })
    @Type(() => GetExtendedContactDetailsAdminUnsubscription)
    adminUnsubscription: GetExtendedContactDetailsAdminUnsubscription[];

    /**
     * Contact unsubscribe via unsubscription link in a campaign
     */
    @SpeakeasyMetadata({ elemType: GetExtendedContactDetailsUserUnsubscription })
    @Expose({ name: "userUnsubscription" })
    @Type(() => GetExtendedContactDetailsUserUnsubscription)
    userUnsubscription: GetExtendedContactDetailsUserUnsubscription[];
}

/**
 * Campaign statistics of the contact
 */
export class GetExtendedContactDetailsStatistics extends SpeakeasyBase {
    /**
     * Listing of the clicks generated by the contact
     */
    @SpeakeasyMetadata({ elemType: GetExtendedContactDetailsClicked })
    @Expose({ name: "clicked" })
    @Type(() => GetExtendedContactDetailsClicked)
    clicked?: GetExtendedContactDetailsClicked[];

    /**
     * Listing of the complaints generated by the contact
     */
    @SpeakeasyMetadata({ elemType: GetExtendedContactDetailsComplaints })
    @Expose({ name: "complaints" })
    @Type(() => GetExtendedContactDetailsComplaints)
    complaints?: GetExtendedContactDetailsComplaints[];

    /**
     * Listing of the delivered campaign for the contact
     */
    @SpeakeasyMetadata({ elemType: GetExtendedContactDetailsDelivered })
    @Expose({ name: "delivered" })
    @Type(() => GetExtendedContactDetailsDelivered)
    delivered?: GetExtendedContactDetailsDelivered[];

    /**
     * Listing of the hardbounes generated by the contact
     */
    @SpeakeasyMetadata({ elemType: GetExtendedContactDetailsHardBounces })
    @Expose({ name: "hardBounces" })
    @Type(() => GetExtendedContactDetailsHardBounces)
    hardBounces?: GetExtendedContactDetailsHardBounces[];

    /**
     * Listing of the sent campaign for the contact
     */
    @SpeakeasyMetadata({ elemType: GetExtendedContactDetailsMessagesSent })
    @Expose({ name: "messagesSent" })
    @Type(() => GetExtendedContactDetailsMessagesSent)
    messagesSent?: GetExtendedContactDetailsMessagesSent[];

    /**
     * Listing of the openings generated by the contact
     */
    @SpeakeasyMetadata({ elemType: GetExtendedContactDetailsOpened })
    @Expose({ name: "opened" })
    @Type(() => GetExtendedContactDetailsOpened)
    opened?: GetExtendedContactDetailsOpened[];

    /**
     * Listing of the softbounes generated by the contact
     */
    @SpeakeasyMetadata({ elemType: GetExtendedContactDetailsSoftBounces })
    @Expose({ name: "softBounces" })
    @Type(() => GetExtendedContactDetailsSoftBounces)
    softBounces?: GetExtendedContactDetailsSoftBounces[];

    /**
     * Listing of the transactional attributes for the contact
     */
    @SpeakeasyMetadata({ elemType: GetExtendedContactDetailsTransacAttributes })
    @Expose({ name: "transacAttributes" })
    @Type(() => GetExtendedContactDetailsTransacAttributes)
    transacAttributes?: GetExtendedContactDetailsTransacAttributes[];

    /**
     * Listing of the unsubscription for the contact
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unsubscriptions" })
    @Type(() => GetExtendedContactDetailsUnsubscriptions)
    unsubscriptions?: GetExtendedContactDetailsUnsubscriptions;
}

export class GetExtendedContactDetails extends SpeakeasyBase {
    /**
     * Set of attributes of the contact
     */
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    @Type(() => GetExtendedContactDetailsAttributes)
    attributes: GetExtendedContactDetailsAttributes;

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

    /**
     * Campaign statistics of the contact
     */
    @SpeakeasyMetadata()
    @Expose({ name: "statistics" })
    @Type(() => GetExtendedContactDetailsStatistics)
    statistics: GetExtendedContactDetailsStatistics;
}