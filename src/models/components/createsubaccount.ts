/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Set the language of the sub-account
 */
export enum CreateSubAccountLanguage {
    En = "en",
    Fr = "fr",
    It = "it",
    Es = "es",
    Pt = "pt",
    De = "de",
}

export type CreateSubAccount = {
    /**
     * Set the name of the sub-account company
     */
    companyName: string;
    /**
     * Email address for the organization
     */
    email: string;
    /**
     * Set the language of the sub-account
     */
    language?: CreateSubAccountLanguage | undefined;
    /**
     * Set the timezone of the sub-account
     */
    timezone?: string | undefined;
};

/** @internal */
export const CreateSubAccountLanguage$ = z.nativeEnum(CreateSubAccountLanguage);

/** @internal */
export namespace CreateSubAccount$ {
    export type Inbound = {
        companyName: string;
        email: string;
        language?: CreateSubAccountLanguage | undefined;
        timezone?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CreateSubAccount, z.ZodTypeDef, Inbound> = z
        .object({
            companyName: z.string(),
            email: z.string(),
            language: CreateSubAccountLanguage$.optional(),
            timezone: z.string().optional(),
        })
        .transform((v) => {
            return {
                companyName: v.companyName,
                email: v.email,
                ...(v.language === undefined ? null : { language: v.language }),
                ...(v.timezone === undefined ? null : { timezone: v.timezone }),
            };
        });

    export type Outbound = {
        companyName: string;
        email: string;
        language?: CreateSubAccountLanguage | undefined;
        timezone?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateSubAccount> = z
        .object({
            companyName: z.string(),
            email: z.string(),
            language: CreateSubAccountLanguage$.optional(),
            timezone: z.string().optional(),
        })
        .transform((v) => {
            return {
                companyName: v.companyName,
                email: v.email,
                ...(v.language === undefined ? null : { language: v.language }),
                ...(v.timezone === undefined ? null : { timezone: v.timezone }),
            };
        });
}
