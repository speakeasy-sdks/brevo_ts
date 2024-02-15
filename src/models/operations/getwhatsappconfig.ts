/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GetWhatsAppConfigResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Get all the information of your WhatsApp API account
     */
    getWhatsAppConfig?: components.GetWhatsAppConfig | undefined;
};

/** @internal */
export namespace GetWhatsAppConfigResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getWhatsAppConfig?: components.GetWhatsAppConfig$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetWhatsAppConfigResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getWhatsAppConfig: z.lazy(() => components.GetWhatsAppConfig$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getWhatsAppConfig === undefined
                    ? null
                    : { getWhatsAppConfig: v.getWhatsAppConfig }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getWhatsAppConfig?: components.GetWhatsAppConfig$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWhatsAppConfigResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getWhatsAppConfig: z
                .lazy(() => components.GetWhatsAppConfig$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getWhatsAppConfig === undefined
                    ? null
                    : { getWhatsAppConfig: v.getWhatsAppConfig }),
            };
        });
}
