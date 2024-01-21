/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type EmailExportRecipientsRequest = {
    /**
     * Id of the campaign
     */
    campaignId: number;
    /**
     * Values to send for a recipient export request
     */
    emailExportRecipients?: components.EmailExportRecipients | undefined;
};

export type EmailExportRecipientsResponse = {
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
     * process id created
     */
    createdProcessId?: components.CreatedProcessId | undefined;
};

/** @internal */
export namespace EmailExportRecipientsRequest$ {
    export type Inbound = {
        campaignId: number;
        emailExportRecipients?: components.EmailExportRecipients$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<EmailExportRecipientsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            campaignId: z.number().int(),
            emailExportRecipients: z
                .lazy(() => components.EmailExportRecipients$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                campaignId: v.campaignId,
                ...(v.emailExportRecipients === undefined
                    ? null
                    : { emailExportRecipients: v.emailExportRecipients }),
            };
        });

    export type Outbound = {
        campaignId: number;
        emailExportRecipients?: components.EmailExportRecipients$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EmailExportRecipientsRequest> = z
        .object({
            campaignId: z.number().int(),
            emailExportRecipients: z
                .lazy(() => components.EmailExportRecipients$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                campaignId: v.campaignId,
                ...(v.emailExportRecipients === undefined
                    ? null
                    : { emailExportRecipients: v.emailExportRecipients }),
            };
        });
}

/** @internal */
export namespace EmailExportRecipientsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        createdProcessId?: components.CreatedProcessId$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<EmailExportRecipientsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            createdProcessId: components.CreatedProcessId$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.createdProcessId === undefined
                    ? null
                    : { createdProcessId: v.createdProcessId }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        createdProcessId?: components.CreatedProcessId$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EmailExportRecipientsResponse> =
        z
            .object({
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
                createdProcessId: components.CreatedProcessId$.outboundSchema.optional(),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                    ...(v.createdProcessId === undefined
                        ? null
                        : { createdProcessId: v.createdProcessId }),
                };
            });
}
