/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type CreateContact = {
    /**
     * Pass the set of attributes and their values. The attribute's parameter should be passed in capital letter while creating a contact. **These attributes must be present in your Brevo account**. For eg:
     *
     * @remarks
     * **{"FNAME":"Elly", "LNAME":"Roger"}**
     *
     */
    attributes?: Record<string, any> | undefined;
    /**
     * Email address of the user. **Mandatory if "SMS" field is not passed in "attributes" parameter**. Mobile Number in **SMS** field should be passed with proper country code. For example:
     *
     * @remarks
     * **{"SMS":"+91xxxxxxxxxx"}** or **{"SMS":"0091xxxxxxxxxx"}**
     *
     */
    email?: string | undefined;
    /**
     * Set this field to blacklist the contact for emails (emailBlacklisted = true)
     */
    emailBlacklisted?: boolean | undefined;
    /**
     * Pass your own Id to create a contact.
     */
    extId?: string | undefined;
    /**
     * Ids of the lists to add the contact to
     */
    listIds?: Array<number> | undefined;
    /**
     * Set this field to blacklist the contact for SMS (smsBlacklisted = true)
     */
    smsBlacklisted?: boolean | undefined;
    /**
     * transactional email forbidden sender for contact. Use only for email Contact ( only available if updateEnabled = true )
     */
    smtpBlacklistSender?: Array<string> | undefined;
    /**
     * Facilitate to update the existing contact in the same request (updateEnabled = true)
     */
    updateEnabled?: boolean | undefined;
};

/** @internal */
export namespace CreateContact$ {
    export type Inbound = {
        attributes?: Record<string, any> | undefined;
        email?: string | undefined;
        emailBlacklisted?: boolean | undefined;
        ext_id?: string | undefined;
        listIds?: Array<number> | undefined;
        smsBlacklisted?: boolean | undefined;
        smtpBlacklistSender?: Array<string> | undefined;
        updateEnabled?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<CreateContact, z.ZodTypeDef, Inbound> = z
        .object({
            attributes: z.record(z.any()).optional(),
            email: z.string().optional(),
            emailBlacklisted: z.boolean().optional(),
            ext_id: z.string().optional(),
            listIds: z.array(z.number().int()).optional(),
            smsBlacklisted: z.boolean().optional(),
            smtpBlacklistSender: z.array(z.string()).optional(),
            updateEnabled: z.boolean().default(false),
        })
        .transform((v) => {
            return {
                ...(v.attributes === undefined ? null : { attributes: v.attributes }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.emailBlacklisted === undefined
                    ? null
                    : { emailBlacklisted: v.emailBlacklisted }),
                ...(v.ext_id === undefined ? null : { extId: v.ext_id }),
                ...(v.listIds === undefined ? null : { listIds: v.listIds }),
                ...(v.smsBlacklisted === undefined ? null : { smsBlacklisted: v.smsBlacklisted }),
                ...(v.smtpBlacklistSender === undefined
                    ? null
                    : { smtpBlacklistSender: v.smtpBlacklistSender }),
                ...(v.updateEnabled === undefined ? null : { updateEnabled: v.updateEnabled }),
            };
        });

    export type Outbound = {
        attributes?: Record<string, any> | undefined;
        email?: string | undefined;
        emailBlacklisted?: boolean | undefined;
        ext_id?: string | undefined;
        listIds?: Array<number> | undefined;
        smsBlacklisted?: boolean | undefined;
        smtpBlacklistSender?: Array<string> | undefined;
        updateEnabled: boolean;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateContact> = z
        .object({
            attributes: z.record(z.any()).optional(),
            email: z.string().optional(),
            emailBlacklisted: z.boolean().optional(),
            extId: z.string().optional(),
            listIds: z.array(z.number().int()).optional(),
            smsBlacklisted: z.boolean().optional(),
            smtpBlacklistSender: z.array(z.string()).optional(),
            updateEnabled: z.boolean().default(false),
        })
        .transform((v) => {
            return {
                ...(v.attributes === undefined ? null : { attributes: v.attributes }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.emailBlacklisted === undefined
                    ? null
                    : { emailBlacklisted: v.emailBlacklisted }),
                ...(v.extId === undefined ? null : { ext_id: v.extId }),
                ...(v.listIds === undefined ? null : { listIds: v.listIds }),
                ...(v.smsBlacklisted === undefined ? null : { smsBlacklisted: v.smsBlacklisted }),
                ...(v.smtpBlacklistSender === undefined
                    ? null
                    : { smtpBlacklistSender: v.smtpBlacklistSender }),
                updateEnabled: v.updateEnabled,
            };
        });
}
