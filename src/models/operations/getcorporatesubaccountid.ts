/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GetCorporateSubAccountIdRequest = {
    /**
     * Id of the sub-account organization
     */
    id: number;
};

export type GetCorporateSubAccountIdResponse = {
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
     * Sub-account organization details
     */
    subAccountDetailsResponse?: components.SubAccountDetailsResponse | undefined;
};

/** @internal */
export namespace GetCorporateSubAccountIdRequest$ {
    export type Inbound = {
        id: number;
    };

    export const inboundSchema: z.ZodType<GetCorporateSubAccountIdRequest, z.ZodTypeDef, Inbound> =
        z
            .object({
                id: z.number().int(),
            })
            .transform((v) => {
                return {
                    id: v.id,
                };
            });

    export type Outbound = {
        id: number;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetCorporateSubAccountIdRequest
    > = z
        .object({
            id: z.number().int(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace GetCorporateSubAccountIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        subAccountDetailsResponse?: components.SubAccountDetailsResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetCorporateSubAccountIdResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                ContentType: z.string(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
                subAccountDetailsResponse:
                    components.SubAccountDetailsResponse$.inboundSchema.optional(),
            })
            .transform((v) => {
                return {
                    contentType: v.ContentType,
                    statusCode: v.StatusCode,
                    rawResponse: v.RawResponse,
                    ...(v.subAccountDetailsResponse === undefined
                        ? null
                        : { subAccountDetailsResponse: v.subAccountDetailsResponse }),
                };
            });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        subAccountDetailsResponse?: components.SubAccountDetailsResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetCorporateSubAccountIdResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            subAccountDetailsResponse:
                components.SubAccountDetailsResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.subAccountDetailsResponse === undefined
                    ? null
                    : { subAccountDetailsResponse: v.subAccountDetailsResponse }),
            };
        });
}
