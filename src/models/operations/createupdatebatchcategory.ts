/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type CreateUpdateBatchCategoryResponse = {
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
     * Category created and updated
     */
    createUpdateBatchCategoryModel?: components.CreateUpdateBatchCategoryModel | undefined;
};

/** @internal */
export namespace CreateUpdateBatchCategoryResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        createUpdateBatchCategoryModel?:
            | components.CreateUpdateBatchCategoryModel$.Inbound
            | undefined;
    };

    export const inboundSchema: z.ZodType<
        CreateUpdateBatchCategoryResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            createUpdateBatchCategoryModel:
                components.CreateUpdateBatchCategoryModel$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.createUpdateBatchCategoryModel === undefined
                    ? null
                    : { createUpdateBatchCategoryModel: v.createUpdateBatchCategoryModel }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        createUpdateBatchCategoryModel?:
            | components.CreateUpdateBatchCategoryModel$.Outbound
            | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateUpdateBatchCategoryResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            createUpdateBatchCategoryModel:
                components.CreateUpdateBatchCategoryModel$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.createUpdateBatchCategoryModel === undefined
                    ? null
                    : { createUpdateBatchCategoryModel: v.createUpdateBatchCategoryModel }),
            };
        });
}
