/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type Templates = {
    /**
     * category of the template
     */
    category: string;
    /**
     * Creation UTC date-time of the WhatsApp template (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    createdAt: string;
    /**
     * Error reason in the template creation
     */
    errorReason?: string | undefined;
    /**
     * ID of the WhatsApp template
     */
    id: number;
    /**
     * Language in which template exists
     */
    language: string;
    /**
     * UTC date-time of last modification of the WhatsApp template (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    modifiedAt: string;
    /**
     * Name of the WhatsApp template
     */
    name: string;
    /**
     * Status of the WhatsApp template
     */
    status: string;
};

export type GetWhatsappTemplates = {
    /**
     * Number of WhatsApp templates retrieved
     */
    count?: number | undefined;
    templates?: Array<Templates> | undefined;
};

/** @internal */
export namespace Templates$ {
    export type Inbound = {
        category: string;
        createdAt: string;
        errorReason?: string | undefined;
        id: number;
        language: string;
        modifiedAt: string;
        name: string;
        status: string;
    };

    export const inboundSchema: z.ZodType<Templates, z.ZodTypeDef, Inbound> = z
        .object({
            category: z.string(),
            createdAt: z.string(),
            errorReason: z.string().optional(),
            id: z.number().int(),
            language: z.string(),
            modifiedAt: z.string(),
            name: z.string(),
            status: z.string(),
        })
        .transform((v) => {
            return {
                category: v.category,
                createdAt: v.createdAt,
                ...(v.errorReason === undefined ? null : { errorReason: v.errorReason }),
                id: v.id,
                language: v.language,
                modifiedAt: v.modifiedAt,
                name: v.name,
                status: v.status,
            };
        });

    export type Outbound = {
        category: string;
        createdAt: string;
        errorReason?: string | undefined;
        id: number;
        language: string;
        modifiedAt: string;
        name: string;
        status: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Templates> = z
        .object({
            category: z.string(),
            createdAt: z.string(),
            errorReason: z.string().optional(),
            id: z.number().int(),
            language: z.string(),
            modifiedAt: z.string(),
            name: z.string(),
            status: z.string(),
        })
        .transform((v) => {
            return {
                category: v.category,
                createdAt: v.createdAt,
                ...(v.errorReason === undefined ? null : { errorReason: v.errorReason }),
                id: v.id,
                language: v.language,
                modifiedAt: v.modifiedAt,
                name: v.name,
                status: v.status,
            };
        });
}

/** @internal */
export namespace GetWhatsappTemplates$ {
    export type Inbound = {
        count?: number | undefined;
        templates?: Array<Templates$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GetWhatsappTemplates, z.ZodTypeDef, Inbound> = z
        .object({
            count: z.number().int().optional(),
            templates: z.array(z.lazy(() => Templates$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.count === undefined ? null : { count: v.count }),
                ...(v.templates === undefined ? null : { templates: v.templates }),
            };
        });

    export type Outbound = {
        count?: number | undefined;
        templates?: Array<Templates$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWhatsappTemplates> = z
        .object({
            count: z.number().int().optional(),
            templates: z.array(z.lazy(() => Templates$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.count === undefined ? null : { count: v.count }),
                ...(v.templates === undefined ? null : { templates: v.templates }),
            };
        });
}
