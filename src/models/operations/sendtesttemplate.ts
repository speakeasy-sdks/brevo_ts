/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type SendTestTemplateRequest = {
    sendTestEmail: components.SendTestEmail;
    /**
     * Id of the template
     */
    templateId: number;
};

export type SendTestTemplateResponse = {
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
};

/** @internal */
export namespace SendTestTemplateRequest$ {
    export type Inbound = {
        sendTestEmail: components.SendTestEmail$.Inbound;
        templateId: number;
    };

    export const inboundSchema: z.ZodType<SendTestTemplateRequest, z.ZodTypeDef, Inbound> = z
        .object({
            sendTestEmail: components.SendTestEmail$.inboundSchema,
            templateId: z.number().int(),
        })
        .transform((v) => {
            return {
                sendTestEmail: v.sendTestEmail,
                templateId: v.templateId,
            };
        });

    export type Outbound = {
        sendTestEmail: components.SendTestEmail$.Outbound;
        templateId: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SendTestTemplateRequest> = z
        .object({
            sendTestEmail: components.SendTestEmail$.outboundSchema,
            templateId: z.number().int(),
        })
        .transform((v) => {
            return {
                sendTestEmail: v.sendTestEmail,
                templateId: v.templateId,
            };
        });
}

/** @internal */
export namespace SendTestTemplateResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<SendTestTemplateResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SendTestTemplateResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
