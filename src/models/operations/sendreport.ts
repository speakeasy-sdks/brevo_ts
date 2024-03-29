/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type SendReportRequest = {
    /**
     * Id of the campaign
     */
    campaignId: number;
    /**
     * Values for send a report
     */
    sendReport: components.SendReport;
};

export type SendReportResponse = {
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
export namespace SendReportRequest$ {
    export type Inbound = {
        campaignId: number;
        sendReport: components.SendReport$.Inbound;
    };

    export const inboundSchema: z.ZodType<SendReportRequest, z.ZodTypeDef, Inbound> = z
        .object({
            campaignId: z.number().int(),
            sendReport: z.lazy(() => components.SendReport$.inboundSchema),
        })
        .transform((v) => {
            return {
                campaignId: v.campaignId,
                sendReport: v.sendReport,
            };
        });

    export type Outbound = {
        campaignId: number;
        sendReport: components.SendReport$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SendReportRequest> = z
        .object({
            campaignId: z.number().int(),
            sendReport: z.lazy(() => components.SendReport$.outboundSchema),
        })
        .transform((v) => {
            return {
                campaignId: v.campaignId,
                sendReport: v.sendReport,
            };
        });
}

/** @internal */
export namespace SendReportResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<SendReportResponse, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SendReportResponse> = z
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
