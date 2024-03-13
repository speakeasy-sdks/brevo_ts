/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type UpdateSmtpTemplateRequest = {
    /**
     * id of the template
     */
    templateId: number;
    /**
     * values to update in transactional email template
     */
    updateSmtpTemplate: components.UpdateSmtpTemplate;
};

export type UpdateSmtpTemplateResponse = {
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
export namespace UpdateSmtpTemplateRequest$ {
    export type Inbound = {
        templateId: number;
        updateSmtpTemplate: components.UpdateSmtpTemplate$.Inbound;
    };

    export const inboundSchema: z.ZodType<UpdateSmtpTemplateRequest, z.ZodTypeDef, Inbound> = z
        .object({
            templateId: z.number().int(),
            updateSmtpTemplate: z.lazy(() => components.UpdateSmtpTemplate$.inboundSchema),
        })
        .transform((v) => {
            return {
                templateId: v.templateId,
                updateSmtpTemplate: v.updateSmtpTemplate,
            };
        });

    export type Outbound = {
        templateId: number;
        updateSmtpTemplate: components.UpdateSmtpTemplate$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSmtpTemplateRequest> = z
        .object({
            templateId: z.number().int(),
            updateSmtpTemplate: z.lazy(() => components.UpdateSmtpTemplate$.outboundSchema),
        })
        .transform((v) => {
            return {
                templateId: v.templateId,
                updateSmtpTemplate: v.updateSmtpTemplate,
            };
        });
}

/** @internal */
export namespace UpdateSmtpTemplateResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<UpdateSmtpTemplateResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateSmtpTemplateResponse> = z
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
