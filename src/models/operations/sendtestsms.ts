/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type SendTestSmsRequest = {
    /**
     * Id of the SMS campaign
     */
    campaignId: number;
    /**
     * Mobile number of the recipient with the country code. This number **must belong to one of your contacts in Brevo account and must not be blacklisted**
     *
     * @remarks
     *
     */
    sendTestSms: components.SendTestSms;
};

export type SendTestSmsResponse = {
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
export namespace SendTestSmsRequest$ {
    export type Inbound = {
        campaignId: number;
        sendTestSms: components.SendTestSms$.Inbound;
    };

    export const inboundSchema: z.ZodType<SendTestSmsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            campaignId: z.number().int(),
            sendTestSms: z.lazy(() => components.SendTestSms$.inboundSchema),
        })
        .transform((v) => {
            return {
                campaignId: v.campaignId,
                sendTestSms: v.sendTestSms,
            };
        });

    export type Outbound = {
        campaignId: number;
        sendTestSms: components.SendTestSms$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SendTestSmsRequest> = z
        .object({
            campaignId: z.number().int(),
            sendTestSms: z.lazy(() => components.SendTestSms$.outboundSchema),
        })
        .transform((v) => {
            return {
                campaignId: v.campaignId,
                sendTestSms: v.sendTestSms,
            };
        });
}

/** @internal */
export namespace SendTestSmsResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<SendTestSmsResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SendTestSmsResponse> = z
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
