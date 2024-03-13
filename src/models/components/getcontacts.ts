/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Set of attributes of the contact
 */
export type GetContactsAttributes = {};

export type Contacts = {
    /**
     * Set of attributes of the contact
     */
    attributes: GetContactsAttributes;
    /**
     * Creation UTC date-time of the contact (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    createdAt: string;
    /**
     * Email address of the contact for which you requested the details
     */
    email: string;
    /**
     * Blacklist status for email campaigns (true=blacklisted, false=not blacklisted)
     */
    emailBlacklisted: boolean;
    /**
     * ID of the contact for which you requested the details
     */
    id: number;
    listIds: Array<number>;
    listUnsubscribed?: Array<number> | undefined;
    /**
     * Last modification UTC date-time of the contact (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    modifiedAt: string;
    /**
     * Blacklist status for SMS campaigns (true=blacklisted, false=not blacklisted)
     */
    smsBlacklisted: boolean;
};

export type GetContacts = {
    contacts: Array<Contacts>;
    /**
     * Number of contacts
     */
    count: number;
};

/** @internal */
export namespace GetContactsAttributes$ {
    export type Inbound = {};

    export const inboundSchema: z.ZodType<GetContactsAttributes, z.ZodTypeDef, Inbound> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetContactsAttributes> =
        z.object({});
}

/** @internal */
export namespace Contacts$ {
    export type Inbound = {
        attributes: GetContactsAttributes$.Inbound;
        createdAt: string;
        email: string;
        emailBlacklisted: boolean;
        id: number;
        listIds: Array<number>;
        listUnsubscribed?: Array<number> | undefined;
        modifiedAt: string;
        smsBlacklisted: boolean;
    };

    export const inboundSchema: z.ZodType<Contacts, z.ZodTypeDef, Inbound> = z
        .object({
            attributes: z.lazy(() => GetContactsAttributes$.inboundSchema),
            createdAt: z.string(),
            email: z.string(),
            emailBlacklisted: z.boolean(),
            id: z.number().int(),
            listIds: z.array(z.number().int()),
            listUnsubscribed: z.array(z.number().int()).optional(),
            modifiedAt: z.string(),
            smsBlacklisted: z.boolean(),
        })
        .transform((v) => {
            return {
                attributes: v.attributes,
                createdAt: v.createdAt,
                email: v.email,
                emailBlacklisted: v.emailBlacklisted,
                id: v.id,
                listIds: v.listIds,
                ...(v.listUnsubscribed === undefined
                    ? null
                    : { listUnsubscribed: v.listUnsubscribed }),
                modifiedAt: v.modifiedAt,
                smsBlacklisted: v.smsBlacklisted,
            };
        });

    export type Outbound = {
        attributes: GetContactsAttributes$.Outbound;
        createdAt: string;
        email: string;
        emailBlacklisted: boolean;
        id: number;
        listIds: Array<number>;
        listUnsubscribed?: Array<number> | undefined;
        modifiedAt: string;
        smsBlacklisted: boolean;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Contacts> = z
        .object({
            attributes: z.lazy(() => GetContactsAttributes$.outboundSchema),
            createdAt: z.string(),
            email: z.string(),
            emailBlacklisted: z.boolean(),
            id: z.number().int(),
            listIds: z.array(z.number().int()),
            listUnsubscribed: z.array(z.number().int()).optional(),
            modifiedAt: z.string(),
            smsBlacklisted: z.boolean(),
        })
        .transform((v) => {
            return {
                attributes: v.attributes,
                createdAt: v.createdAt,
                email: v.email,
                emailBlacklisted: v.emailBlacklisted,
                id: v.id,
                listIds: v.listIds,
                ...(v.listUnsubscribed === undefined
                    ? null
                    : { listUnsubscribed: v.listUnsubscribed }),
                modifiedAt: v.modifiedAt,
                smsBlacklisted: v.smsBlacklisted,
            };
        });
}

/** @internal */
export namespace GetContacts$ {
    export type Inbound = {
        contacts: Array<Contacts$.Inbound>;
        count: number;
    };

    export const inboundSchema: z.ZodType<GetContacts, z.ZodTypeDef, Inbound> = z
        .object({
            contacts: z.array(z.lazy(() => Contacts$.inboundSchema)),
            count: z.number().int(),
        })
        .transform((v) => {
            return {
                contacts: v.contacts,
                count: v.count,
            };
        });

    export type Outbound = {
        contacts: Array<Contacts$.Outbound>;
        count: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetContacts> = z
        .object({
            contacts: z.array(z.lazy(() => Contacts$.outboundSchema)),
            count: z.number().int(),
        })
        .transform((v) => {
            return {
                contacts: v.contacts,
                count: v.count,
            };
        });
}
