/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type PostCorporateSubAccountResponse = {
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
     * Created sub-account ID
     */
    createSubAccountResponse?: components.CreateSubAccountResponse | undefined;
};

/** @internal */
export namespace PostCorporateSubAccountResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        createSubAccountResponse?: components.CreateSubAccountResponse$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<PostCorporateSubAccountResponse, z.ZodTypeDef, Inbound> =
        z
            .object({
                ContentType: z.string(),
                StatusCode: z.number().int(),
                RawResponse: z.instanceof(Response),
                createSubAccountResponse:
                    components.CreateSubAccountResponse$.inboundSchema.optional(),
            })
            .transform((v) => {
                return {
                    contentType: v.ContentType,
                    statusCode: v.StatusCode,
                    rawResponse: v.RawResponse,
                    ...(v.createSubAccountResponse === undefined
                        ? null
                        : { createSubAccountResponse: v.createSubAccountResponse }),
                };
            });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        createSubAccountResponse?: components.CreateSubAccountResponse$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        PostCorporateSubAccountResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            createSubAccountResponse:
                components.CreateSubAccountResponse$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.createSubAccountResponse === undefined
                    ? null
                    : { createSubAccountResponse: v.createSubAccountResponse }),
            };
        });
}
