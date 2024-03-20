/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetFolderRequest = {
    /**
     * id of the folder
     */
    folderId: number;
};

export type GetFolderResponse = {
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
     * Folder details
     */
    getFolder?: components.GetFolder | undefined;
};

/** @internal */
export namespace GetFolderRequest$ {
    export type Inbound = {
        folderId: number;
    };

    export const inboundSchema: z.ZodType<GetFolderRequest, z.ZodTypeDef, Inbound> = z
        .object({
            folderId: z.number().int(),
        })
        .transform((v) => {
            return {
                folderId: v.folderId,
            };
        });

    export type Outbound = {
        folderId: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetFolderRequest> = z
        .object({
            folderId: z.number().int(),
        })
        .transform((v) => {
            return {
                folderId: v.folderId,
            };
        });
}

/** @internal */
export namespace GetFolderResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getFolder?: components.GetFolder$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetFolderResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getFolder: z.lazy(() => components.GetFolder$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getFolder === undefined ? null : { getFolder: v.getFolder }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getFolder?: components.GetFolder$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetFolderResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            getFolder: z.lazy(() => components.GetFolder$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.getFolder === undefined ? null : { getFolder: v.getFolder }),
            };
        });
}
