/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type UploadImageToGalleryResponse = {
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
     * Image has been successfully uploaded
     */
    uploadImageModel?: components.UploadImageModel | undefined;
};

/** @internal */
export namespace UploadImageToGalleryResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        uploadImageModel?: components.UploadImageModel$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UploadImageToGalleryResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            uploadImageModel: components.UploadImageModel$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.uploadImageModel === undefined
                    ? null
                    : { uploadImageModel: v.uploadImageModel }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        uploadImageModel?: components.UploadImageModel$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadImageToGalleryResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            uploadImageModel: components.UploadImageModel$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.uploadImageModel === undefined
                    ? null
                    : { uploadImageModel: v.uploadImageModel }),
            };
        });
}
