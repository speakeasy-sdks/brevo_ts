/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * **Mandatory if neither actionForEmailCampaigns nor actionForSmsCampaigns is passed.** This will export the contacts on the basis of provided action applied on contacts as per the list id.
 *
 * @remarks
 * * **allContacts** - Fetch the list of all contacts for a particular list.
 * * **subscribed & unsubscribed** - Fetch the list of subscribed / unsubscribed (blacklisted via any means) contacts for a particular list.
 * * **unsubscribedPerList** - Fetch the list of contacts that are unsubscribed from a particular list only.
 *
 */
export enum RequestContactExportCustomContactFilterActionForContacts {
    AllContacts = "allContacts",
    Subscribed = "subscribed",
    Unsubscribed = "unsubscribed",
    UnsubscribedPerList = "unsubscribedPerList",
}

/**
 * **Mandatory if neither actionForContacts nor actionForSmsCampaigns is passed.** This will export the contacts on the basis of provided action applied on email campaigns.
 *
 * @remarks
 * * **openers & nonOpeners** - emailCampaignId is mandatory. Fetch the list of readers / non-readers for a particular email campaign.
 * * **clickers & nonClickers** - emailCampaignId is mandatory. Fetch the list of clickers / non-clickers for a particular email campaign.
 * * **unsubscribed** - emailCampaignId is mandatory. Fetch the list of all unsubscribed (blacklisted via any means) contacts for a particular email campaign.
 * * **hardBounces & softBounces** - emailCampaignId is optional. Fetch the list of hard bounces / soft bounces for a particular / all email campaign(s).
 *
 */
export enum RequestContactExportCustomContactFilterActionForEmailCampaigns {
    Openers = "openers",
    NonOpeners = "nonOpeners",
    Clickers = "clickers",
    NonClickers = "nonClickers",
    Unsubscribed = "unsubscribed",
    HardBounces = "hardBounces",
    SoftBounces = "softBounces",
}

/**
 * **Mandatory if neither actionForContacts nor actionForEmailCampaigns is passed.** This will export the contacts on the basis of provided action applied on sms campaigns.
 *
 * @remarks
 * * **unsubscribed** - Fetch the list of all unsubscribed (blacklisted via any means) contacts for all / particular sms campaigns.
 * * **hardBounces & softBounces** - Fetch the list of hard bounces / soft bounces for all / particular sms campaigns.
 *
 */
export enum RequestContactExportCustomContactFilterActionForSmsCampaigns {
    HardBounces = "hardBounces",
    SoftBounces = "softBounces",
    Unsubscribed = "unsubscribed",
}

/**
 * Set the filter for the contacts to be exported.
 *
 * @remarks
 *
 */
export class RequestContactExportCustomContactFilter extends SpeakeasyBase {
    /**
     * **Mandatory if neither actionForEmailCampaigns nor actionForSmsCampaigns is passed.** This will export the contacts on the basis of provided action applied on contacts as per the list id.
     *
     * @remarks
     * * **allContacts** - Fetch the list of all contacts for a particular list.
     * * **subscribed & unsubscribed** - Fetch the list of subscribed / unsubscribed (blacklisted via any means) contacts for a particular list.
     * * **unsubscribedPerList** - Fetch the list of contacts that are unsubscribed from a particular list only.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "actionForContacts" })
    actionForContacts?: RequestContactExportCustomContactFilterActionForContacts;

    /**
     * **Mandatory if neither actionForContacts nor actionForSmsCampaigns is passed.** This will export the contacts on the basis of provided action applied on email campaigns.
     *
     * @remarks
     * * **openers & nonOpeners** - emailCampaignId is mandatory. Fetch the list of readers / non-readers for a particular email campaign.
     * * **clickers & nonClickers** - emailCampaignId is mandatory. Fetch the list of clickers / non-clickers for a particular email campaign.
     * * **unsubscribed** - emailCampaignId is mandatory. Fetch the list of all unsubscribed (blacklisted via any means) contacts for a particular email campaign.
     * * **hardBounces & softBounces** - emailCampaignId is optional. Fetch the list of hard bounces / soft bounces for a particular / all email campaign(s).
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "actionForEmailCampaigns" })
    actionForEmailCampaigns?: RequestContactExportCustomContactFilterActionForEmailCampaigns;

    /**
     * **Mandatory if neither actionForContacts nor actionForEmailCampaigns is passed.** This will export the contacts on the basis of provided action applied on sms campaigns.
     *
     * @remarks
     * * **unsubscribed** - Fetch the list of all unsubscribed (blacklisted via any means) contacts for all / particular sms campaigns.
     * * **hardBounces & softBounces** - Fetch the list of hard bounces / soft bounces for all / particular sms campaigns.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "actionForSmsCampaigns" })
    actionForSmsCampaigns?: RequestContactExportCustomContactFilterActionForSmsCampaigns;

    /**
     * Considered only if **actionForEmailCampaigns** is passed, ignored otherwise. **Mandatory if action is one of the following - openers, nonOpeners, clickers, nonClickers, unsubscribed.**
     *
     * @remarks
     * The id of the email campaign for which the corresponding action shall be applied in the filter.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "emailCampaignId" })
    emailCampaignId?: number;

    /**
     * **Mandatory if actionForContacts is passed, ignored otherwise.** Id of the list for which the corresponding action shall be applied in the filter.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "listId" })
    listId?: number;

    /**
     * Considered only if **actionForSmsCampaigns** is passed, ignored otherwise. The id of sms campaign for which the corresponding action shall be applied in the filter.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "smsCampaignId" })
    smsCampaignId?: number;
}

export class RequestContactExport extends SpeakeasyBase {
    /**
     * Set the filter for the contacts to be exported.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customContactFilter" })
    @Type(() => RequestContactExportCustomContactFilter)
    customContactFilter: RequestContactExportCustomContactFilter;

    /**
     * List of all the attributes that you want to export. **These attributes must be present in your contact database.** For example:
     *
     * @remarks
     * **['fname', 'lname', 'email']**
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "exportAttributes" })
    exportAttributes?: string[];

    /**
     * Webhook that will be called once the export process is finished. For reference, https://help.brevo.com/hc/en-us/articles/360007666479
     */
    @SpeakeasyMetadata()
    @Expose({ name: "notifyUrl" })
    notifyUrl?: string;
}
