/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GetCampaignStats } from "./getcampaignstats";
import { GetDeviceBrowserStats } from "./getdevicebrowserstats";
import { GetStatsByDevice } from "./getstatsbydevice";
import { Expose, Transform, Type } from "class-transformer";

export class GetEmailCampaignRecipients extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "exclusionLists" })
    exclusionLists: number[];

    @SpeakeasyMetadata()
    @Expose({ name: "lists" })
    lists: number[];
}

export class GetEmailCampaignSender extends SpeakeasyBase {
    /**
     * Sender email of the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * Sender id of the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * Sender name of the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class GetEmailCampaignStatisticsCampaignStats extends SpeakeasyBase {
    /**
     * Number of total clicks for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "clickers" })
    clickers: number;

    /**
     * Number of complaints (Spam reports) for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "complaints" })
    complaints: number;

    /**
     * Number of deferred emails for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deferred" })
    deferred?: number;

    /**
     * Number of delivered emails for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "delivered" })
    delivered: number;

    /**
     * Rate of recipients without any privacy protection option enabled in their email client, applied to all delivered emails
     */
    @SpeakeasyMetadata()
    @Expose({ name: "estimatedViews" })
    estimatedViews?: number;

    /**
     * Number of harbounce for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hardBounces" })
    hardBounces: number;

    /**
     * List Id of email campaign (only in case of get email campaign(s)(not for global stats))
     */
    @SpeakeasyMetadata()
    @Expose({ name: "listId" })
    listId?: number;

    /**
     * Total number of non-delivered campaigns for a particular campaign id.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "returnBounce" })
    returnBounce?: number;

    /**
     * Number of sent emails for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sent" })
    sent: number;

    /**
     * Number of softbounce for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "softBounces" })
    softBounces: number;

    /**
     * Recipients without any privacy protection option enabled in their email client
     */
    @SpeakeasyMetadata()
    @Expose({ name: "trackableViews" })
    trackableViews: number;

    /**
     * Rate of recipients without any privacy protection option enabled in their email client
     */
    @SpeakeasyMetadata()
    @Expose({ name: "trackableViewsRate" })
    trackableViewsRate?: number;

    /**
     * Number of unique clicks for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "uniqueClicks" })
    uniqueClicks: number;

    /**
     * Number of unique openings for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "uniqueViews" })
    uniqueViews: number;

    /**
     * Number of unsubscription for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unsubscriptions" })
    unsubscriptions: number;

    /**
     * Number of openings for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "viewed" })
    viewed: number;
}

/**
 * Overall statistics of the campaign
 */
export class GetEmailCampaignStatisticsGlobalStats extends SpeakeasyBase {
    /**
     * Number of total clicks for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "clickers" })
    clickers: number;

    /**
     * Number of complaints (Spam reports) for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "complaints" })
    complaints: number;

    /**
     * Number of deferred emails for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deferred" })
    deferred?: number;

    /**
     * Number of delivered emails for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "delivered" })
    delivered: number;

    /**
     * Rate of recipients without any privacy protection option enabled in their email client, applied to all delivered emails
     */
    @SpeakeasyMetadata()
    @Expose({ name: "estimatedViews" })
    estimatedViews?: number;

    /**
     * Number of harbounce for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hardBounces" })
    hardBounces: number;

    /**
     * List Id of email campaign (only in case of get email campaign(s)(not for global stats))
     */
    @SpeakeasyMetadata()
    @Expose({ name: "listId" })
    listId?: number;

    /**
     * Total number of non-delivered campaigns for a particular campaign id.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "returnBounce" })
    returnBounce?: number;

    /**
     * Number of sent emails for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sent" })
    sent: number;

    /**
     * Number of softbounce for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "softBounces" })
    softBounces: number;

    /**
     * Recipients without any privacy protection option enabled in their email client
     */
    @SpeakeasyMetadata()
    @Expose({ name: "trackableViews" })
    trackableViews: number;

    /**
     * Rate of recipients without any privacy protection option enabled in their email client
     */
    @SpeakeasyMetadata()
    @Expose({ name: "trackableViewsRate" })
    trackableViewsRate?: number;

    /**
     * Number of unique clicks for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "uniqueClicks" })
    uniqueClicks: number;

    /**
     * Number of unique openings for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "uniqueViews" })
    uniqueViews: number;

    /**
     * Number of unsubscription for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unsubscriptions" })
    unsubscriptions: number;

    /**
     * Number of openings for the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "viewed" })
    viewed: number;
}

/**
 * Statistics about the number of clicks for the links
 */
export class GetEmailCampaignStatisticsLinksStats extends SpeakeasyBase {}

export class GetEmailCampaignStatistics extends SpeakeasyBase {
    /**
     * List-wise statistics of the campaign.
     */
    @SpeakeasyMetadata({ elemType: GetEmailCampaignStatisticsCampaignStats })
    @Expose({ name: "campaignStats" })
    @Type(() => GetEmailCampaignStatisticsCampaignStats)
    campaignStats: GetEmailCampaignStatisticsCampaignStats[];

    /**
     * Overall statistics of the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "globalStats" })
    @Type(() => GetEmailCampaignStatisticsGlobalStats)
    globalStats: GetEmailCampaignStatisticsGlobalStats;

    /**
     * Statistics about the number of clicks for the links
     */
    @SpeakeasyMetadata()
    @Expose({ name: "linksStats" })
    @Type(() => GetEmailCampaignStatisticsLinksStats)
    linksStats: GetEmailCampaignStatisticsLinksStats;

    /**
     * Number of clicks on mirror link
     */
    @SpeakeasyMetadata()
    @Expose({ name: "mirrorClick" })
    mirrorClick: number;

    /**
     * Number of remaning emails to send
     */
    @SpeakeasyMetadata()
    @Expose({ name: "remaining" })
    remaining: number;

    @SpeakeasyMetadata({ elemType: GetDeviceBrowserStats })
    @Expose({ name: "statsByBrowser" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, GetDeviceBrowserStats> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], GetDeviceBrowserStats);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    statsByBrowser: Record<string, GetDeviceBrowserStats>;

    @SpeakeasyMetadata()
    @Expose({ name: "statsByDevice" })
    @Type(() => GetStatsByDevice)
    statsByDevice: GetStatsByDevice;

    @SpeakeasyMetadata({ elemType: GetCampaignStats })
    @Expose({ name: "statsByDomain" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, GetCampaignStats> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], GetCampaignStats);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    statsByDomain: Record<string, GetCampaignStats>;
}

/**
 * Status of the campaign
 */
export enum GetEmailCampaignStatus {
    Draft = "draft",
    Sent = "sent",
    Archive = "archive",
    Queued = "queued",
    Suspended = "suspended",
    InProcess = "in_process",
}

/**
 * Type of campaign
 */
export enum GetEmailCampaignType {
    Classic = "classic",
    Trigger = "trigger",
}

/**
 * Email campaign informations
 */
export class GetEmailCampaign extends SpeakeasyBase {
    /**
     * Status of A/B Test for the campaign. abTesting = false means it is disabled, & abTesting = true means it is enabled.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "abTesting" })
    abTesting?: boolean;

    /**
     * Creation UTC date-time of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

    /**
     * Footer of the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "footer" })
    footer: string;

    /**
     * Header of the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "header" })
    header: string;

    /**
     * HTML content of the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "htmlContent" })
    htmlContent: string;

    /**
     * ID of the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;

    /**
     * Status of inline image. inlineImageActivation = false means image can’t be embedded, & inlineImageActivation = true means image can be embedded, in the email.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "inlineImageActivation" })
    inlineImageActivation?: boolean;

    /**
     * Status of mirror links in campaign. mirrorActive = false means mirror links are deactivated, & mirrorActive = true means mirror links are activated, in the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "mirrorActive" })
    mirrorActive?: boolean;

    /**
     * UTC date-time of last modification of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "modifiedAt" })
    modifiedAt: string;

    /**
     * Name of the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Preview text or preheader of the email campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "previewText" })
    previewText?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "recipients" })
    @Type(() => GetEmailCampaignRecipients)
    recipients: GetEmailCampaignRecipients;

    /**
     * FOR TRIGGER ONLY ! Type of trigger campaign.recurring = false means contact can receive the same Trigger campaign only once, & recurring = true means contact can receive the same Trigger campaign several times
     */
    @SpeakeasyMetadata()
    @Expose({ name: "recurring" })
    recurring?: boolean;

    /**
     * Email defined as the "Reply to" of the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "replyTo" })
    replyTo: string;

    /**
     * Total number of non-delivered campaigns for a particular campaign id.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "returnBounce" })
    returnBounce?: number;

    /**
     * UTC date-time on which campaign is scheduled (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "scheduledAt" })
    scheduledAt?: string;

    /**
     * It is true if you have chosen to send your campaign at best time, otherwise it is false
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sendAtBestTime" })
    sendAtBestTime?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "sender" })
    @Type(() => GetEmailCampaignSender)
    sender: GetEmailCampaignSender;

    /**
     * Sent UTC date-time of the campaign (YYYY-MM-DDTHH:mm:ss.SSSZ). Only available if 'status' of the campaign is 'sent'
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sentDate" })
    sentDate?: string;

    /**
     * Link to share the campaign on social medias
     */
    @SpeakeasyMetadata()
    @Expose({ name: "shareLink" })
    shareLink?: string;

    /**
     * The size of your ab-test groups. Only available if `abTesting` flag of the campaign is `true`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "splitRule" })
    splitRule?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "statistics" })
    @Type(() => GetEmailCampaignStatistics)
    statistics: GetEmailCampaignStatistics;

    /**
     * Status of the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: GetEmailCampaignStatus;

    /**
     * Subject of the campaign. Only available if `abTesting` flag of the campaign is `false`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subject" })
    subject?: string;

    /**
     * Subject A of the ab-test campaign. Only available if `abTesting` flag of the campaign is `true`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subjectA" })
    subjectA?: string;

    /**
     * Subject B of the ab-test campaign. Only available if `abTesting` flag of the campaign is `true`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subjectB" })
    subjectB?: string;

    /**
     * Tag of the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tag" })
    tag?: string;

    /**
     * Retrieved the status of test email sending. (true=Test email has been sent  false=Test email has not been sent)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "testSent" })
    testSent: boolean;

    /**
     * Customisation of the "to" field of the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "toField" })
    toField?: string;

    /**
     * Type of campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: GetEmailCampaignType;

    /**
     * Criteria for the winning version. Only available if `abTesting` flag of the campaign is `true`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "winnerCriteria" })
    winnerCriteria?: string;

    /**
     * The duration of the test in hours at the end of which the winning version will be sent. Only available if `abTesting` flag of the campaign is `true`
     */
    @SpeakeasyMetadata()
    @Expose({ name: "winnerDelay" })
    winnerDelay?: number;
}
