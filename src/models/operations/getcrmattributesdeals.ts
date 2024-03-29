/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetCrmAttributesDealsResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Returns list of deal attributes
     */
    dealAttributes?: Array<components.DealAttributes> | undefined;
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
export namespace GetCrmAttributesDealsResponse$ {
    export type Inbound = {
        ContentType: string;
        DealAttributes?: Array<components.DealAttributes$.Inbound> | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetCrmAttributesDealsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            DealAttributes: z.array(components.DealAttributes$.inboundSchema).optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.DealAttributes === undefined ? null : { dealAttributes: v.DealAttributes }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        DealAttributes?: Array<components.DealAttributes$.Outbound> | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCrmAttributesDealsResponse> =
        z
            .object({
                contentType: z.string(),
                dealAttributes: z.array(components.DealAttributes$.outboundSchema).optional(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    ...(v.dealAttributes === undefined
                        ? null
                        : { DealAttributes: v.dealAttributes }),
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                };
            });
}
