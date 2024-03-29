/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetSmtpTemplateOverviewSender = {
    /**
     * From email for the template
     */
    email?: string | undefined;
    /**
     * Sender id of the template
     */
    id?: string | undefined;
    /**
     * From email for the template
     */
    name?: string | undefined;
};

export type GetSmtpTemplateOverview = {
    /**
     * Creation UTC date-time of the template (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    createdAt: string;
    /**
     * It is true if template is a valid Double opt-in (DOI) template, otherwise it is false. This field will be available only in case of single template detail call.
     */
    doiTemplate?: boolean | undefined;
    /**
     * HTML content of the template
     */
    htmlContent: string;
    /**
     * ID of the template
     */
    id: number;
    /**
     * Status of template (true=active, false=inactive)
     */
    isActive: boolean;
    /**
     * Last modification UTC date-time of the template (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    modifiedAt: string;
    /**
     * Name of the template
     */
    name: string;
    /**
     * Email defined as the "Reply to" for the template
     */
    replyTo: string;
    sender: GetSmtpTemplateOverviewSender;
    /**
     * Subject of the template
     */
    subject: string;
    /**
     * Tag of the template
     */
    tag: string;
    /**
     * Status of test sending for the template (true=test email has been sent, false=test email has not been sent)
     */
    testSent: boolean;
    /**
     * Customisation of the "to" field for the template
     */
    toField: string;
};

/** @internal */
export namespace GetSmtpTemplateOverviewSender$ {
    export type Inbound = {
        email?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetSmtpTemplateOverviewSender, z.ZodTypeDef, Inbound> = z
        .object({
            email: z.string().optional(),
            id: z.string().optional(),
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
        id?: string | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSmtpTemplateOverviewSender> =
        z
            .object({
                email: z.string().optional(),
                id: z.string().optional(),
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
export namespace GetSmtpTemplateOverview$ {
    export type Inbound = {
        createdAt: string;
        doiTemplate?: boolean | undefined;
        htmlContent: string;
        id: number;
        isActive: boolean;
        modifiedAt: string;
        name: string;
        replyTo: string;
        sender: GetSmtpTemplateOverviewSender$.Inbound;
        subject: string;
        tag: string;
        testSent: boolean;
        toField: string;
    };

    export const inboundSchema: z.ZodType<GetSmtpTemplateOverview, z.ZodTypeDef, Inbound> = z
        .object({
            createdAt: z.string(),
            doiTemplate: z.boolean().optional(),
            htmlContent: z.string(),
            id: z.number().int(),
            isActive: z.boolean(),
            modifiedAt: z.string(),
            name: z.string(),
            replyTo: z.string(),
            sender: z.lazy(() => GetSmtpTemplateOverviewSender$.inboundSchema),
            subject: z.string(),
            tag: z.string(),
            testSent: z.boolean(),
            toField: z.string(),
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                ...(v.doiTemplate === undefined ? null : { doiTemplate: v.doiTemplate }),
                htmlContent: v.htmlContent,
                id: v.id,
                isActive: v.isActive,
                modifiedAt: v.modifiedAt,
                name: v.name,
                replyTo: v.replyTo,
                sender: v.sender,
                subject: v.subject,
                tag: v.tag,
                testSent: v.testSent,
                toField: v.toField,
            };
        });

    export type Outbound = {
        createdAt: string;
        doiTemplate?: boolean | undefined;
        htmlContent: string;
        id: number;
        isActive: boolean;
        modifiedAt: string;
        name: string;
        replyTo: string;
        sender: GetSmtpTemplateOverviewSender$.Outbound;
        subject: string;
        tag: string;
        testSent: boolean;
        toField: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSmtpTemplateOverview> = z
        .object({
            createdAt: z.string(),
            doiTemplate: z.boolean().optional(),
            htmlContent: z.string(),
            id: z.number().int(),
            isActive: z.boolean(),
            modifiedAt: z.string(),
            name: z.string(),
            replyTo: z.string(),
            sender: z.lazy(() => GetSmtpTemplateOverviewSender$.outboundSchema),
            subject: z.string(),
            tag: z.string(),
            testSent: z.boolean(),
            toField: z.string(),
        })
        .transform((v) => {
            return {
                createdAt: v.createdAt,
                ...(v.doiTemplate === undefined ? null : { doiTemplate: v.doiTemplate }),
                htmlContent: v.htmlContent,
                id: v.id,
                isActive: v.isActive,
                modifiedAt: v.modifiedAt,
                name: v.name,
                replyTo: v.replyTo,
                sender: v.sender,
                subject: v.subject,
                tag: v.tag,
                testSent: v.testSent,
                toField: v.toField,
            };
        });
}
