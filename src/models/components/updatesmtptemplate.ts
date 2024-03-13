/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Sender details including id or email and name (_optional_). Only one of either Sender's email or Sender's ID shall be passed in one request at a time. For example:
 *
 * @remarks
 * **{"name":"xyz", "email":"example@abc.com"}**
 * **{"name":"xyz", "id":123}**
 *
 */
export type UpdateSmtpTemplateSender = {
    /**
     * Email of the sender
     */
    email?: string | undefined;
    /**
     * Select the sender for the template on the basis of sender id.
     *
     * @remarks
     * _In order to select a sender with specific pool of IP’s, dedicated ip users shall pass id (instead of email)_.
     *
     */
    id?: number | undefined;
    /**
     * Name of the sender
     */
    name?: string | undefined;
};

export type UpdateSmtpTemplate = {
    /**
     * Absolute url of the attachment (**no local file**). Extensions allowed:
     *
     * @remarks
     * #### xlsx, xls, ods, docx, docm, doc, csv, pdf, txt, gif, jpg, jpeg, png, tif, tiff, rtf, bmp, cgm, css, shtml, html, htm, zip, xml, ppt, pptx, tar, ez, ics, mobi, msg, pub and eps
     *
     */
    attachmentUrl?: string | undefined;
    /**
     * **Required if htmlUrl is empty**. If the template is designed using Drag & Drop editor via HTML content, then the design page will not have Drag & Drop editor access for that template. Body of the message (HTML must have more than 10 characters)
     *
     * @remarks
     *
     */
    htmlContent?: string | undefined;
    /**
     * **Required if htmlContent is empty**. URL to the body of the email (HTML)
     *
     * @remarks
     *
     */
    htmlUrl?: string | undefined;
    /**
     * Status of the template. isActive = false means template is inactive, isActive = true means template is active
     */
    isActive?: boolean | undefined;
    /**
     * Email on which campaign recipients will be able to reply to
     */
    replyTo?: string | undefined;
    /**
     * Sender details including id or email and name (_optional_). Only one of either Sender's email or Sender's ID shall be passed in one request at a time. For example:
     *
     * @remarks
     * **{"name":"xyz", "email":"example@abc.com"}**
     * **{"name":"xyz", "id":123}**
     *
     */
    sender?: UpdateSmtpTemplateSender | undefined;
    /**
     * Subject of the email
     */
    subject?: string | undefined;
    /**
     * Tag of the template
     */
    tag?: string | undefined;
    /**
     * Name of the template
     */
    templateName?: string | undefined;
    /**
     * To personalize the **To** Field. If you want to include the first name and last name of your recipient, add **{FNAME} {LNAME}**. These contact attributes must already exist in your Brevo account. If input parameter **params** used please use **{{"{{"}}contact.FNAME}} {{"{{"}}contact.LNAME}}** for personalization
     *
     * @remarks
     *
     */
    toField?: string | undefined;
};

/** @internal */
export namespace UpdateSmtpTemplateSender$ {
    export type Inbound = {
        email?: string | undefined;
        id?: number | undefined;
        name?: string | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateSmtpTemplateSender, z.ZodTypeDef, Inbound> = z
        .object({
            email: z.string().optional(),
            id: z.number().int().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        email?: string | undefined;
        id?: number | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSmtpTemplateSender> = z
        .object({
            email: z.string().optional(),
            id: z.number().int().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}

/** @internal */
export namespace UpdateSmtpTemplate$ {
    export type Inbound = {
        attachmentUrl?: string | undefined;
        htmlContent?: string | undefined;
        htmlUrl?: string | undefined;
        isActive?: boolean | undefined;
        replyTo?: string | undefined;
        sender?: UpdateSmtpTemplateSender$.Inbound | undefined;
        subject?: string | undefined;
        tag?: string | undefined;
        templateName?: string | undefined;
        toField?: string | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateSmtpTemplate, z.ZodTypeDef, Inbound> = z
        .object({
            attachmentUrl: z.string().optional(),
            htmlContent: z.string().optional(),
            htmlUrl: z.string().optional(),
            isActive: z.boolean().optional(),
            replyTo: z.string().optional(),
            sender: z.lazy(() => UpdateSmtpTemplateSender$.inboundSchema).optional(),
            subject: z.string().optional(),
            tag: z.string().optional(),
            templateName: z.string().optional(),
            toField: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.attachmentUrl === undefined ? null : { attachmentUrl: v.attachmentUrl }),
                ...(v.htmlContent === undefined ? null : { htmlContent: v.htmlContent }),
                ...(v.htmlUrl === undefined ? null : { htmlUrl: v.htmlUrl }),
                ...(v.isActive === undefined ? null : { isActive: v.isActive }),
                ...(v.replyTo === undefined ? null : { replyTo: v.replyTo }),
                ...(v.sender === undefined ? null : { sender: v.sender }),
                ...(v.subject === undefined ? null : { subject: v.subject }),
                ...(v.tag === undefined ? null : { tag: v.tag }),
                ...(v.templateName === undefined ? null : { templateName: v.templateName }),
                ...(v.toField === undefined ? null : { toField: v.toField }),
            };
        });

    export type Outbound = {
        attachmentUrl?: string | undefined;
        htmlContent?: string | undefined;
        htmlUrl?: string | undefined;
        isActive?: boolean | undefined;
        replyTo?: string | undefined;
        sender?: UpdateSmtpTemplateSender$.Outbound | undefined;
        subject?: string | undefined;
        tag?: string | undefined;
        templateName?: string | undefined;
        toField?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSmtpTemplate> = z
        .object({
            attachmentUrl: z.string().optional(),
            htmlContent: z.string().optional(),
            htmlUrl: z.string().optional(),
            isActive: z.boolean().optional(),
            replyTo: z.string().optional(),
            sender: z.lazy(() => UpdateSmtpTemplateSender$.outboundSchema).optional(),
            subject: z.string().optional(),
            tag: z.string().optional(),
            templateName: z.string().optional(),
            toField: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.attachmentUrl === undefined ? null : { attachmentUrl: v.attachmentUrl }),
                ...(v.htmlContent === undefined ? null : { htmlContent: v.htmlContent }),
                ...(v.htmlUrl === undefined ? null : { htmlUrl: v.htmlUrl }),
                ...(v.isActive === undefined ? null : { isActive: v.isActive }),
                ...(v.replyTo === undefined ? null : { replyTo: v.replyTo }),
                ...(v.sender === undefined ? null : { sender: v.sender }),
                ...(v.subject === undefined ? null : { subject: v.subject }),
                ...(v.tag === undefined ? null : { tag: v.tag }),
                ...(v.templateName === undefined ? null : { templateName: v.templateName }),
                ...(v.toField === undefined ? null : { toField: v.toField }),
            };
        });
}
