/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type AddContactToListRequest = {
    /**
     * Emails addresses OR IDs of the contacts
     */
    requestBody?: any | undefined;
    /**
     * Id of the list
     */
    listId: number;
};

export type AddContactToListResponse = {
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
     * All contacts have been added successfully to the list with details of failed ones
     */
    postContactInfo?: components.PostContactInfo | undefined;
};

/** @internal */
export namespace AddContactToListRequest$ {
    export type Inbound = {
        RequestBody?: any | undefined;
        listId: number;
    };

    export const inboundSchema: z.ZodType<AddContactToListRequest, z.ZodTypeDef, Inbound> = z
        .object({
            RequestBody: z.any().optional(),
            listId: z.number().int(),
        })
        .transform((v) => {
            return {
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
                listId: v.listId,
            };
        });

    export type Outbound = {
        RequestBody?: any | undefined;
        listId: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddContactToListRequest> = z
        .object({
            requestBody: z.any().optional(),
            listId: z.number().int(),
        })
        .transform((v) => {
            return {
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
                listId: v.listId,
            };
        });
}

/** @internal */
export namespace AddContactToListResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        postContactInfo?: components.PostContactInfo$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<AddContactToListResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            postContactInfo: components.PostContactInfo$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.postContactInfo === undefined
                    ? null
                    : { postContactInfo: v.postContactInfo }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        postContactInfo?: components.PostContactInfo$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddContactToListResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            postContactInfo: components.PostContactInfo$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.postContactInfo === undefined
                    ? null
                    : { postContactInfo: v.postContactInfo }),
            };
        });
}
