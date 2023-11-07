/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Segment ids and List ids to include/exclude from campaign
 */
export class Recipients extends SpeakeasyBase {
    /**
     * List ids to exclude from the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "exclusionListIds" })
    exclusionListIds?: number[];

    /**
     * **Mandatory if scheduledAt is not empty**. List Ids to send the campaign to
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "listIds" })
    listIds?: number[];

    /**
     * **Mandatory if listIds are not used**. Segment ids to send the campaign to.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "segmentIds" })
    segmentIds?: number[];
}

/**
 * Sender details including id or email and name (_optional_). Only one of either Sender's email or Sender's ID shall be passed in one request at a time. For example:
 *
 * @remarks
 * **{"name":"xyz", "email":"example@abc.com"}**
 * **{"name":"xyz", "id":123}**
 *
 */
export class Sender extends SpeakeasyBase {
    /**
     * Sender email
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * Select the sender for the campaign on the basis of sender id.
     *
     * @remarks
     * _In order to select a sender with specific pool of IP’s, dedicated ip users shall pass id (instead of email)_.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * Sender Name
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
export enum WinnerCriteria {
    Open = "open",
    Click = "click",
}

export class CreateEmailCampaign extends SpeakeasyBase {
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
     * #### xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps
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
     * Mandatory if htmlUrl and templateId are empty. Body of the message (HTML).
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "htmlContent" })
    htmlContent?: string;

    /**
     * **Mandatory if htmlContent and templateId are empty**. Url to the message (HTML). For example:
     *
     * @remarks
     * **https://html.domain.com**
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "htmlUrl" })
    htmlUrl?: string;

    /**
     * **Mandatory if ipWarmupEnable is set to true**. Set a percentage increase rate for warming up your ip. We recommend you set the increase rate to 30% per day. If you want to send the same number of emails every day, set the daily increase value to 0%.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "increaseRate" })
    increaseRate?: number;

    /**
     * **Mandatory if ipWarmupEnable is set to true**. Set an initial quota greater than 1 for warming up your ip. We recommend you set a value of 3000.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "initialQuota" })
    initialQuota?: number;

    /**
     * Use true to embedded the images in your email. Final size of
     *
     * @remarks
     * the email should be less than **4MB**. Campaigns with embedded images can
     * _not be sent to more than 5000 contacts_
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
     * Use true to enable the mirror link
     */
    @SpeakeasyMetadata()
    @Expose({ name: "mirrorActive" })
    mirrorActive?: boolean;

    /**
     * Name of the campaign
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

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
    @Type(() => Recipients)
    recipients?: Recipients;

    /**
     * Email on which the campaign recipients will be able to reply to
     */
    @SpeakeasyMetadata()
    @Expose({ name: "replyTo" })
    replyTo?: string;

    /**
     * Sending UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ). **Prefer to pass your timezone in date-time format for accurate result**.
     *
     * @remarks
     * If sendAtBestTime is set to true, your campaign will be sent according to the date passed (ignoring the time part). For example:
     * **2017-06-01T12:30:00+02:00**
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "scheduledAt" })
    scheduledAt?: string;

    /**
     * Set this to true if you want to send your campaign at best time.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sendAtBestTime" })
    sendAtBestTime?: boolean;

    /**
     * Sender details including id or email and name (_optional_). Only one of either Sender's email or Sender's ID shall be passed in one request at a time. For example:
     *
     * @remarks
     * **{"name":"xyz", "email":"example@abc.com"}**
     * **{"name":"xyz", "id":123}**
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sender" })
    @Type(() => Sender)
    sender: Sender;

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
     * Subject of the campaign. **Mandatory if abTesting is false**.
     *
     * @remarks
     * Ignored if abTesting is true.
     *
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
     * **Mandatory if htmlContent and htmlUrl are empty**. Id of the transactional
     *
     * @remarks
     * email template with status _active_. Used to copy only its content fetched
     * from htmlContent/htmlUrl to an email campaign for RSS feature.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "templateId" })
    templateId?: number;

    /**
     * To personalize the **To** Field. If you want to include the first name and last name of your recipient, add **{FNAME} {LNAME}**. These contact attributes must already exist in your Brevo account. If input parameter **params** used please use **{{contact.FNAME}} {{contact.LNAME}}** for personalization
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "toField" })
    toField?: string;

    /**
     * Enter an unsubscription page id. The page id is a 24 digit alphanumeric id that can be found in the URL when editing the page. If not entered, then the default unsubscription page will be used.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unsubscriptionPageId" })
    unsubscriptionPageId?: string;

    /**
     * **Mandatory if templateId is used containing the {{ update_profile }} tag**. Enter an update profile form id. The form id is a 24 digit alphanumeric id that can be found in the URL when editing the form. If not entered, then the default update profile form will be used.
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
    winnerCriteria?: WinnerCriteria;

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