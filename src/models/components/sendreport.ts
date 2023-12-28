/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Custom attributes for the report email.
 */
export type Email = {
    /**
     * Custom text message to be presented in the report email.
     */
    body: string;
    /**
     * Email addresses of the recipients
     */
    to: Array<string>;
};

/**
 * Language of email content for campaign report sending.
 */
export enum SendReportLanguage {
    Fr = "fr",
    Es = "es",
    Pt = "pt",
    It = "it",
    De = "de",
    En = "en",
}

export type SendReport = {
    /**
     * Custom attributes for the report email.
     */
    email: Email;
    /**
     * Language of email content for campaign report sending.
     */
    language?: SendReportLanguage | undefined;
};

/** @internal */
export namespace Email$ {
    export type Inbound = {
        body: string;
        to: Array<string>;
    };

    export const inboundSchema: z.ZodType<Email, z.ZodTypeDef, Inbound> = z
        .object({
            body: z.string(),
            to: z.array(z.string()),
        })
        .transform((v) => {
            return {
                body: v.body,
                to: v.to,
            };
        });

    export type Outbound = {
        body: string;
        to: Array<string>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Email> = z
        .object({
            body: z.string(),
            to: z.array(z.string()),
        })
        .transform((v) => {
            return {
                body: v.body,
                to: v.to,
            };
        });
}

/** @internal */
export const SendReportLanguage$ = z.nativeEnum(SendReportLanguage);

/** @internal */
export namespace SendReport$ {
    export type Inbound = {
        email: Email$.Inbound;
        language?: SendReportLanguage | undefined;
    };

    export const inboundSchema: z.ZodType<SendReport, z.ZodTypeDef, Inbound> = z
        .object({
            email: z.lazy(() => Email$.inboundSchema),
            language: SendReportLanguage$.optional(),
        })
        .transform((v) => {
            return {
                email: v.email,
                ...(v.language === undefined ? null : { language: v.language }),
            };
        });

    export type Outbound = {
        email: Email$.Outbound;
        language?: SendReportLanguage | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SendReport> = z
        .object({
            email: z.lazy(() => Email$.outboundSchema),
            language: SendReportLanguage$.optional(),
        })
        .transform((v) => {
            return {
                email: v.email,
                ...(v.language === undefined ? null : { language: v.language }),
            };
        });
}
