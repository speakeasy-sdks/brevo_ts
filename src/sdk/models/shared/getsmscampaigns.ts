/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class GetSmsCampaignsCampaignsRecipients extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "exclusionLists" })
    exclusionLists: number[];

    @SpeakeasyMetadata()
    @Expose({ name: "lists" })
    lists: number[];
}

export class GetSmsCampaignsCampaignsStatistics extends SpeakeasyBase {
    /**
     * Number of replies to the SMS
     */
    @SpeakeasyMetadata()
    @Expose({ name: "answered" })
    answered: number;

    /**
     * Number of delivered SMS
     */
    @SpeakeasyMetadata()
    @Expose({ name: "delivered" })
    delivered: number;

    /**
     * Number of hardbounced SMS
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hardBounces" })
    hardBounces: number;

    /**
     * Number of processing SMS
     */
    @SpeakeasyMetadata()
    @Expose({ name: "processing" })
    processing: number;

    /**
     * Number of sent SMS
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sent" })
    sent: number;

    /**
     * Number of softbounced SMS
     */
    @SpeakeasyMetadata()
    @Expose({ name: "softBounces" })
    softBounces: number;

    /**
     * Number of unsubscription SMS
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unsubscriptions" })
    unsubscriptions: number;
}

/**
 * Status of the SMS Campaign
 */
export enum GetSmsCampaignsCampaignsStatus {
    Draft = "draft",
    Sent = "sent",
    Archive = "archive",
    Queued = "queued",
    Suspended = "suspended",
    InProcess = "inProcess",
}

export class GetSmsCampaignsCampaigns extends SpeakeasyBase {
    /**
     * Content of the SMS Campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "content" })
    content: string;

    /**
     * Creation UTC date-time of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

    /**
     * ID of the SMS Campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    /**
     * UTC date-time of last modification of the SMS campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "modifiedAt" })
    modifiedAt: string;

    /**
     * Name of the SMS Campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    @SpeakeasyMetadata()
    @Expose({ name: "recipients" })
    @Type(() => GetSmsCampaignsCampaignsRecipients)
    recipients: GetSmsCampaignsCampaignsRecipients;

    /**
     * UTC date-time on which SMS campaign is scheduled. Should be in YYYY-MM-DDTHH:mm:ss.SSSZ format
     */
    @SpeakeasyMetadata()
    @Expose({ name: "scheduledAt" })
    scheduledAt?: string;

    /**
     * Sender of the SMS Campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sender" })
    sender: string;

    @SpeakeasyMetadata()
    @Expose({ name: "statistics" })
    @Type(() => GetSmsCampaignsCampaignsStatistics)
    statistics: GetSmsCampaignsCampaignsStatistics;

    /**
     * Status of the SMS Campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: GetSmsCampaignsCampaignsStatus;
}

export class GetSmsCampaigns extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: GetSmsCampaignsCampaigns })
    @Expose({ name: "campaigns" })
    @Type(() => GetSmsCampaignsCampaigns)
    campaigns?: GetSmsCampaignsCampaigns[];

    /**
     * Number of SMS campaigns retrieved
     */
    @SpeakeasyMetadata()
    @Expose({ name: "count" })
    count?: number;
}
