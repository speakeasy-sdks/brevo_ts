/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetCompaniesAttributesResponse = {
    /**
     * Returns list of company attributes
     */
    companyAttributes?: Array<components.CompanyAttributes> | undefined;
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
export namespace GetCompaniesAttributesResponse$ {
    export type Inbound = {
        CompanyAttributes?: Array<components.CompanyAttributes$.Inbound> | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<GetCompaniesAttributesResponse, z.ZodTypeDef, Inbound> = z
        .object({
            CompanyAttributes: z.array(components.CompanyAttributes$.inboundSchema).optional(),
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                ...(v.CompanyAttributes === undefined
                    ? null
                    : { companyAttributes: v.CompanyAttributes }),
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        CompanyAttributes?: Array<components.CompanyAttributes$.Outbound> | undefined;
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetCompaniesAttributesResponse> =
        z
            .object({
                companyAttributes: z.array(components.CompanyAttributes$.outboundSchema).optional(),
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
            })
            .transform((v) => {
                return {
                    ...(v.companyAttributes === undefined
                        ? null
                        : { CompanyAttributes: v.companyAttributes }),
                    ContentType: v.contentType,
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                };
            });
}
