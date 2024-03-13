/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdateAttributeEnumeration = {
    /**
     * Label of the value
     */
    label: string;
    /**
     * Id of the value
     */
    value: number;
};

export type UpdateAttribute = {
    /**
     * List of the values and labels that the attribute can take. **Use only if the attribute's category is "category"**. For example,
     *
     * @remarks
     * **[{"value":1, "label":"male"}, {"value":2, "label":"female"}]**
     *
     */
    enumeration?: Array<UpdateAttributeEnumeration> | undefined;
    /**
     * Value of the attribute to update. **Use only if the attribute's category is 'calculated' or 'global'**
     *
     * @remarks
     *
     */
    value?: string | undefined;
};

/** @internal */
export namespace UpdateAttributeEnumeration$ {
    export type Inbound = {
        label: string;
        value: number;
    };

    export const inboundSchema: z.ZodType<UpdateAttributeEnumeration, z.ZodTypeDef, Inbound> = z
        .object({
            label: z.string(),
            value: z.number().int(),
        })
        .transform((v) => {
            return {
                label: v.label,
                value: v.value,
            };
        });

    export type Outbound = {
        label: string;
        value: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateAttributeEnumeration> = z
        .object({
            label: z.string(),
            value: z.number().int(),
        })
        .transform((v) => {
            return {
                label: v.label,
                value: v.value,
            };
        });
}

/** @internal */
export namespace UpdateAttribute$ {
    export type Inbound = {
        enumeration?: Array<UpdateAttributeEnumeration$.Inbound> | undefined;
        value?: string | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateAttribute, z.ZodTypeDef, Inbound> = z
        .object({
            enumeration: z
                .array(z.lazy(() => UpdateAttributeEnumeration$.inboundSchema))
                .optional(),
            value: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.enumeration === undefined ? null : { enumeration: v.enumeration }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });

    export type Outbound = {
        enumeration?: Array<UpdateAttributeEnumeration$.Outbound> | undefined;
        value?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateAttribute> = z
        .object({
            enumeration: z
                .array(z.lazy(() => UpdateAttributeEnumeration$.outboundSchema))
                .optional(),
            value: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.enumeration === undefined ? null : { enumeration: v.enumeration }),
                ...(v.value === undefined ? null : { value: v.value }),
            };
        });
}
