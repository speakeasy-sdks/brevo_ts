/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose, Transform, Type } from "class-transformer";

export class Attachment extends SpeakeasyBase {
    /**
     * Base64 encoded chunk data of the attachment generated on the fly
     */
    @SpeakeasyMetadata()
    @Expose({ name: "content" })
    content?: string;

    /**
     * **Required if content is passed**. Name of the attachment
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Absolute url of the attachment (**no local file**).
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}

export class Bcc extends SpeakeasyBase {
    /**
     * Email address of the recipient in bcc
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * Name of the recipient in bcc. **Maximum allowed characters are 70**.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class Cc extends SpeakeasyBase {
    /**
     * Email address of the recipient in cc
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * Name of the recipient in cc. **Maximum allowed characters are 70**.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class SendSmtpEmailBcc extends SpeakeasyBase {
    /**
     * Email address of the recipient in bcc
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * Name of the recipient in bcc. **Maximum allowed characters are 70**.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class SendSmtpEmailCc extends SpeakeasyBase {
    /**
     * Email address of the recipient in cc
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * Name of the recipient in cc. **Maximum allowed characters are 70**.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

/**
 * Email (**required**), along with name (_optional_), on which transactional mail recipients will be able to reply back. For example,
 *
 * @remarks
 * **{"email":"ann6533@example.com", "name":"Ann"}**
 *
 */
export class SendSmtpEmailReplyTo extends SpeakeasyBase {
    /**
     * Email address in reply to
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * Name in reply to. **Maximum allowed characters are 70**.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class SendSmtpEmailTo extends SpeakeasyBase {
    /**
     * Email address of the recipient
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * Name of the recipient. **Maximum allowed characters are 70**.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class MessageVersions extends SpeakeasyBase {
    /**
     * List of email addresses and names (_optional_) of the recipients in bcc
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ elemType: SendSmtpEmailBcc })
    @Expose({ name: "bcc" })
    @Type(() => SendSmtpEmailBcc)
    bcc?: SendSmtpEmailBcc[];

    /**
     * List of email addresses and names (_optional_) of the recipients in cc
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ elemType: SendSmtpEmailCc })
    @Expose({ name: "cc" })
    @Type(() => SendSmtpEmailCc)
    cc?: SendSmtpEmailCc[];

    /**
     * Pass the set of attributes to customize the template. For example, **{"FNAME":"Joe", "LNAME":"Doe"}**. It's **considered only if template is in New Template Language format**.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "params" })
    params?: Record<string, any>;

    /**
     * Email (**required**), along with name (_optional_), on which transactional mail recipients will be able to reply back. For example,
     *
     * @remarks
     * **{"email":"ann6533@example.com", "name":"Ann"}**
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "replyTo" })
    @Type(() => SendSmtpEmailReplyTo)
    replyTo?: SendSmtpEmailReplyTo;

    /**
     * Custom subject specific to message version
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subject" })
    subject?: string;

    /**
     * List of email addresses and names (_optional_) of the recipients. For example,
     *
     * @remarks
     * **[{"name":"Jimmy", "email":"jimmy98@example.com"}, {"name":"Joe", "email":"joe@example.com"}]**
     *
     */
    @SpeakeasyMetadata({ elemType: SendSmtpEmailTo })
    @Expose({ name: "to" })
    @Type(() => SendSmtpEmailTo)
    to: SendSmtpEmailTo[];
}

/**
 * Email (**required**), along with name (_optional_), on which transactional mail recipients will be able to reply back. For example,
 *
 * @remarks
 * **{"email":"ann6533@example.com", "name":"Ann"}**
 *
 */
export class ReplyTo extends SpeakeasyBase {
    /**
     * Email address in reply to
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * Name in reply to. **Maximum allowed characters are 70**.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

/**
 * **Mandatory if `templateId` is not passed**. Pass name (_optional_) and email or id of sender from which emails will be sent. **`name` will be ignored if passed along with sender `id`**. For example,
 *
 * @remarks
 * **{"name":"Mary from MyShop", "email":"no-reply@myshop.com"}**
 * **{"id":2}**
 *
 */
export class SendSmtpEmailSender extends SpeakeasyBase {
    /**
     * Email of the sender from which the emails will be sent. Mandatory if sender id is not passed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * Id of the sender from which the emails will be sent. In order to select a sender with specific pool of IP’s, dedicated ip users shall pass id (instead of email). Mandatory if email is not passed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: number;

    /**
     * description: Name of the sender from which the emails will be sent. **Maximum allowed characters are 70**. Applicable only when email is passed.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class To extends SpeakeasyBase {
    /**
     * Email address of the recipient
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * Name of the recipient. **Maximum allowed characters are 70**.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}

export class SendSmtpEmail extends SpeakeasyBase {
    /**
     * Pass the _absolute URL_ (**no local file**) or the _base64 content_ of the attachment along with the attachment name. **Mandatory if attachment content is passed**. For example,
     *
     * @remarks
     * **[{"url":"https://attachment.domain.com/myAttachmentFromUrl.jpg", "name":"myAttachmentFromUrl.jpg"}, {"content":"base64 example content", "name":"myAttachmentFromBase64.jpg"}]**.
     * Allowed extensions for attachment file:
     * #### xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub, eps, odt, mp3, m4a, m4v, wma, ogg, flac, wav, aif, aifc, aiff, mp4, mov, avi, mkv, mpeg, mpg, wmv, pkpass and xlsm.
     * If `templateId` is passed and is in New Template Language format then both attachment url and content are accepted. If template is in Old template Language format, then `attachment` is ignored
     *
     */
    @SpeakeasyMetadata({ elemType: Attachment })
    @Expose({ name: "attachment" })
    @Type(() => Attachment)
    attachment?: Attachment[];

    /**
     * Valid UUIDv4 batch id to identify the scheduled batches transactional email. If not passed we will create a valid UUIDv4 batch id at our end.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "batchId" })
    batchId?: string;

    /**
     * List of email addresses and names (_optional_) of the recipients in bcc
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ elemType: Bcc })
    @Expose({ name: "bcc" })
    @Type(() => Bcc)
    bcc?: Bcc[];

    /**
     * List of email addresses and names (_optional_) of the recipients in cc
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata({ elemType: Cc })
    @Expose({ name: "cc" })
    @Type(() => Cc)
    cc?: Cc[];

    /**
     * Pass the set of custom headers (_not the standard headers_) that shall be sent along the mail headers in the original email. **'sender.ip'** header can be set (**only for dedicated ip users**) to mention the IP to be used for sending transactional emails. Headers are allowed in `This-Case-Only` (i.e. words separated by hyphen with first letter of each word in capital letter), they will be converted to such case styling if not in this format in the request payload. For example,
     *
     * @remarks
     * **{"sender.ip":"1.2.3.4", "X-Mailin-custom":"some_custom_header", "idempotencyKey":"abc-123"}**.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "headers" })
    headers?: Record<string, any>;

    /**
     * HTML body of the message. **Mandatory if 'templateId' is not passed, ignored if 'templateId' is passed**
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "htmlContent" })
    htmlContent?: string;

    /**
     * You can customize and send out multiple versions of a mail. **templateId** can be customized only if global parameter contains templateId. **htmlContent and textContent** can be customized only if any of the two, htmlContent or textContent, is present in global parameters. Some global parameters such as **to(mandatory), bcc, cc, replyTo, subject** can also be customized specific to each version.
     *
     * @remarks
     * Total number of recipients in one API request must not exceed 2000. However, you can still pass upto 99 recipients maximum in one message version.
     * The size of individual params in all the messageVersions shall not exceed **100 KB** limit and that of cumulative params shall not exceed **1000 KB**.
     * You can follow this **step-by-step guide** on how to use **messageVersions** to batch send emails - **https://developers.brevo.com/docs/batch-send-transactional-emails**
     *
     */
    @SpeakeasyMetadata({ elemType: MessageVersions })
    @Expose({ name: "messageVersions" })
    @Type(() => MessageVersions)
    messageVersions?: MessageVersions[];

    /**
     * Pass the set of attributes to customize the template. For example, **{"FNAME":"Joe", "LNAME":"Doe"}**. It's **considered only if template is in New Template Language format**.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "params" })
    params?: Record<string, any>;

    /**
     * Email (**required**), along with name (_optional_), on which transactional mail recipients will be able to reply back. For example,
     *
     * @remarks
     * **{"email":"ann6533@example.com", "name":"Ann"}**
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "replyTo" })
    @Type(() => ReplyTo)
    replyTo?: ReplyTo;

    /**
     * UTC date-time on which the email has to schedule (YYYY-MM-DDTHH:mm:ss.SSSZ). Prefer to pass your timezone in date-time format for scheduling. There can be an expected delay of +5 minutes in scheduled email delivery. **Please note this feature is currently a public beta**.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "scheduledAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    scheduledAt?: Date;

    /**
     * **Mandatory if `templateId` is not passed**. Pass name (_optional_) and email or id of sender from which emails will be sent. **`name` will be ignored if passed along with sender `id`**. For example,
     *
     * @remarks
     * **{"name":"Mary from MyShop", "email":"no-reply@myshop.com"}**
     * **{"id":2}**
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sender" })
    @Type(() => SendSmtpEmailSender)
    sender?: SendSmtpEmailSender;

    /**
     * Subject of the message. **Mandatory if 'templateId' is not passed**
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subject" })
    subject?: string;

    /**
     * Tag your emails to find them more easily
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tags" })
    tags?: string[];

    /**
     * Id of the template.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "templateId" })
    templateId?: number;

    /**
     * Plain Text body of the message. **Ignored if 'templateId' is passed**
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "textContent" })
    textContent?: string;

    /**
     * **Mandatory if messageVersions are not passed, ignored if messageVersions are passed**
     *
     * @remarks
     * List of email addresses and names (_optional_) of the recipients. For example,
     * **[{"name":"Jimmy", "email":"jimmy98@example.com"}, {"name":"Joe", "email":"joe@example.com"}]**
     *
     */
    @SpeakeasyMetadata({ elemType: To })
    @Expose({ name: "to" })
    @Type(() => To)
    to?: To[];
}