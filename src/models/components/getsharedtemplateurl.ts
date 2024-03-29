/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetSharedTemplateUrl = {
    /**
     * A unique URL for the email campaign or transactional template. This URL can be shared with other Brevo users.
     */
    sharedUrl: string;
};

/** @internal */
export namespace GetSharedTemplateUrl$ {
    export type Inbound = {
        sharedUrl: string;
    };

    export const inboundSchema: z.ZodType<GetSharedTemplateUrl, z.ZodTypeDef, Inbound> = z
        .object({
            sharedUrl: z.string(),
        })
        .transform((v) => {
            return {
                sharedUrl: v.sharedUrl,
            };
        });

    export type Outbound = {
        sharedUrl: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSharedTemplateUrl> = z
        .object({
            sharedUrl: z.string(),
        })
        .transform((v) => {
            return {
                sharedUrl: v.sharedUrl,
            };
        });
}
