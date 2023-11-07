/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Sender details including id or email and name (_optional_). Only one of either Sender's email or Sender's ID shall be passed in one request at a time. For example:
 *
 * @remarks
 * **{"name":"xyz", "email":"example@abc.com"}**
 * **{"name":"xyz", "id":123}**
 *
 */
export class UpdateSmtpTemplateSender extends SpeakeasyBase {
    /**
     * Email of the sender
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * Select the sender for the template on the basis of sender id.
     *
     * @remarks
     * _In order to select a sender with specific pool of IP’s, dedicated ip users shall pass id (instead of email)_.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * Name of the sender
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class UpdateSmtpTemplate extends SpeakeasyBase {
    /**
     * Absolute url of the attachment (**no local file**). Extensions allowed:
     *
     * @remarks
     * #### xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "attachmentUrl" })
    attachmentUrl?: string;

    /**
     * **Required if htmlUrl is empty**. If the template is designed using Drag & Drop editor via HTML content, then the design page will not have Drag & Drop editor access for that template. Body of the message (HTML must have more than 10 characters)
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "htmlContent" })
    htmlContent?: string;

    /**
     * **Required if htmlContent is empty**. URL to the body of the email (HTML)
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "htmlUrl" })
    htmlUrl?: string;

    /**
     * Status of the template. isActive = false means template is inactive, isActive = true means template is active
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isActive" })
    isActive?: boolean;

    /**
     * Email on which campaign recipients will be able to reply to
     */
    @SpeakeasyMetadata()
    @Expose({ name: "replyTo" })
    replyTo?: string;

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
    @Type(() => UpdateSmtpTemplateSender)
    sender?: UpdateSmtpTemplateSender;

    /**
     * Subject of the email
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subject" })
    subject?: string;

    /**
     * Tag of the template
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tag" })
    tag?: string;

    /**
     * Name of the template
     */
    @SpeakeasyMetadata()
    @Expose({ name: "templateName" })
    templateName?: string;

    /**
     * To personalize the **To** Field. If you want to include the first name and last name of your recipient, add **{FNAME} {LNAME}**. These contact attributes must already exist in your Brevo account. If input parameter **params** used please use **{{contact.FNAME}} {{contact.LNAME}}** for personalization
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "toField" })
    toField?: string;
}