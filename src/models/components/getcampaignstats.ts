/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export class GetCampaignStats extends SpeakeasyBase {
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