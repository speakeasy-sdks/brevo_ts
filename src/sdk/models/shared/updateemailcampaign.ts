/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Segment ids and List ids to include/exclude from campaign
 */
export class UpdateEmailCampaignRecipients extends SpeakeasyBase {
    /**
     * List ids which have to be excluded from a campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "exclusionListIds" })
    exclusionListIds?: number[];

    /**
     * Lists Ids to send the campaign to. **Campaign should only be updated with listIds if listIds were used to create it. REQUIRED if already not present in campaign and scheduledAt is not empty**
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "listIds" })
    listIds?: number[];

    /**
     * **Mandatory if listIds are not used. Campaign should only be updated with segmentIds if segmentIds were used to create it.** Segment ids to send the campaign to.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "segmentIds" })
    segmentIds?: number[];
}

/**
 * Sender details including id or email and name (optional). Only one of either Sender's email or Sender's ID shall be passed in one request at a time. For example:
 *
 * @remarks
 * **{"name":"xyz", "email":"example@abc.com"}**
 * **{"name":"xyz", "id":123}**
 *
 */
export class UpdateEmailCampaignSender extends SpeakeasyBase {
    /**
     * Sender email from which the campaign emails are sent
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * Select the sender for the campaign on the basis of sender id. **In order to select a sender with specific pool of IP’s, dedicated ip users shall pass id (instead of email)**.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * Sender Name from which the campaign emails are sent
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

/**
 * Choose the metrics that will determinate the winning version. **Mandatory if _splitRule_ >= 1 and < 50**. If splitRule = 50, `winnerCriteria` is ignored if passed
 *
 * @remarks
 *
 */
export enum UpdateEmailCampaignWinnerCriteria {
    Open = "open",
    Click = "click",
}

export class UpdateEmailCampaign extends SpeakeasyBase {
    /**
     * Status of A/B Test. abTesting = false means it is disabled & abTesting = true means it is enabled. **subjectA, subjectB, splitRule, winnerCriteria & winnerDelay** will be considered when abTesting is set to true.
     *
     * @remarks
     * subjectA & subjectB are mandatory together & subject if passed is ignored. **Can be set to true only if sendAtBestTime is false**.
     * You will be able to set up two subject lines for your campaign and send them to a random sample of your total recipients. Half of the test group will receive version A, and the other half will receive version B
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "abTesting" })
    abTesting?: boolean;

    /**
     * Absolute url of the attachment (no local file).
     *
     * @remarks
     * Extension allowed:
     * #### xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps'
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "attachmentUrl" })
    attachmentUrl?: string;

    /**
     * Footer of the email campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "footer" })
    footer?: string;

    /**
     * Header of the email campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "header" })
    header?: string;

    /**
     * Body of the message (HTML version). If the campaign is designed using Drag & Drop editor via HTML content, then the design page will not have Drag & Drop editor access for that campaign. **REQUIRED if htmlUrl is empty**
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "htmlContent" })
    htmlContent?: string;

    /**
     * Url which contents the body of the email message. **REQUIRED if htmlContent is empty**
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "htmlUrl" })
    htmlUrl?: string;

    /**
     * Set a percentage increase rate for warming up your ip. We recommend you set the increase rate to 30% per day. If you want to send the same number of emails every day, set the daily increase value to 0%.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "increaseRate" })
    increaseRate?: number;

    /**
     * Set an initial quota greater than 1 for warming up your ip. We recommend you set a value of 3000.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "initialQuota" })
    initialQuota?: number;

    /**
     * Status of inline image. inlineImageActivation = false means image can’t be embedded, & inlineImageActivation = true means image can be embedded, in the email.
     *
     * @remarks
     * You cannot send a campaign of more than **4MB** with images embedded in the email. Campaigns with the images embedded in the email _must be sent to less than 5000 contacts_.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "inlineImageActivation" })
    inlineImageActivation?: boolean;

    /**
     * **Available for dedicated ip clients**. Set this to true if you wish to warm up your ip.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ipWarmupEnable" })
    ipWarmupEnable?: boolean;

    /**
     * Status of mirror links in campaign. mirrorActive = false means mirror links are deactivated, & mirrorActive = true means mirror links are activated, in the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "mirrorActive" })
    mirrorActive?: boolean;

    /**
     * Name of the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Pass the set of attributes to customize the type classic campaign. For example: **{"FNAME":"Joe", "LNAME":"Doe"}**. Only available if **type** is **classic**. It's considered only if campaign is in _New Template Language format_. The New Template Language is dependent on the values of **subject, htmlContent/htmlUrl, sender.name & toField**
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "params" })
    params?: Record<string, any>;

    /**
     * Preview text or preheader of the email campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "previewText" })
    previewText?: string;

    /**
     * Segment ids and List ids to include/exclude from campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "recipients" })
    @Type(() => UpdateEmailCampaignRecipients)
    recipients?: UpdateEmailCampaignRecipients;

    /**
     * **FOR TRIGGER ONLY !** Type of trigger campaign.recurring = false means contact can receive the same Trigger campaign only once, & recurring = true means contact can receive the same Trigger campaign several times
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "recurring" })
    recurring?: boolean;

    /**
     * Email on which campaign recipients will be able to reply to
     */
    @SpeakeasyMetadata()
    @Expose({ name: "replyTo" })
    replyTo?: string;

    /**
     * UTC date-time on which the campaign has to run (YYYY-MM-DDTHH:mm:ss.SSSZ).
     *
     * @remarks
     * **Prefer to pass your timezone in date-time format for accurate result.**
     * If sendAtBestTime is set to true, your campaign will be sent according
     * to the date passed (ignoring the time part).
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "scheduledAt" })
    scheduledAt?: string;

    /**
     * Set this to true if you want to send your campaign at best time.
     *
     * @remarks
     * Note:- **if true, warmup ip will be disabled.**
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sendAtBestTime" })
    sendAtBestTime?: boolean;

    /**
     * Sender details including id or email and name (optional). Only one of either Sender's email or Sender's ID shall be passed in one request at a time. For example:
     *
     * @remarks
     * **{"name":"xyz", "email":"example@abc.com"}**
     * **{"name":"xyz", "id":123}**
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sender" })
    @Type(() => UpdateEmailCampaignSender)
    sender?: UpdateEmailCampaignSender;

    /**
     * Add the size of your test groups. **Mandatory if abTesting = true & 'recipients' is passed**. We'll send version A and B to a random sample of recipients, and then the winning version to everyone else
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "splitRule" })
    splitRule?: number;

    /**
     * Subject of the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subject" })
    subject?: string;

    /**
     * Subject A of the campaign. **Mandatory if abTesting = true**.
     *
     * @remarks
     * subjectA & subjectB should have unique value
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subjectA" })
    subjectA?: string;

    /**
     * Subject B of the campaign. **Mandatory if abTesting = true**.
     *
     * @remarks
     * subjectA & subjectB should have unique value
     *
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
     * To personalize the **To** Field. If you want to include the first
     *
     * @remarks
     * name and last name of your recipient, add **{FNAME} {LNAME}**. These contact
     * attributes must already exist in your Brevo account. If input parameter
     * **params** used please use **{{contact.FNAME}} {{contact.LNAME}}** for personalization
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "toField" })
    toField?: string;

    /**
     * Enter an unsubscription page id. The page id is a 24 digit alphanumeric id that can be found in the URL when editing the page.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unsubscriptionPageId" })
    unsubscriptionPageId?: string;

    /**
     * **Mandatory if templateId is used containing the {{ update_profile }} tag**. Enter an update profile form id. The form id is a 24 digit alphanumeric id that can be found in the URL when editing the form.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updateFormId" })
    updateFormId?: string;

    /**
     * Customize the utm_campaign value. If this field is empty, the campaign name will be used. Only alphanumeric characters and spaces are allowed
     */
    @SpeakeasyMetadata()
    @Expose({ name: "utmCampaign" })
    utmCampaign?: string;

    /**
     * Choose the metrics that will determinate the winning version. **Mandatory if _splitRule_ >= 1 and < 50**. If splitRule = 50, `winnerCriteria` is ignored if passed
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "winnerCriteria" })
    winnerCriteria?: UpdateEmailCampaignWinnerCriteria;

    /**
     * Choose the duration of the test in hours. Maximum is 7 days, pass 24*7 = 168 hours. The winning version will be sent at the end of the test. **Mandatory if _splitRule_ >= 1 and < 50**. If splitRule = 50, `winnerDelay` is ignored if passed
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "winnerDelay" })
    winnerDelay?: number;
}
