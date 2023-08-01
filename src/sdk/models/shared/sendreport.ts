/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Custom attributes for the report email.
 */
export class SendReportEmail extends SpeakeasyBase {
    /**
     * Custom text message to be presented in the report email.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "body" })
    body: string;

    /**
     * Email addresses of the recipients
     */
    @SpeakeasyMetadata()
    @Expose({ name: "to" })
    to: string[];
}

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

/**
 * Values for send a report
 */
export class SendReport extends SpeakeasyBase {
    /**
     * Custom attributes for the report email.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    @Type(() => SendReportEmail)
    email: SendReportEmail;

    /**
     * Language of email content for campaign report sending.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "language" })
    language?: SendReportLanguage;
}
