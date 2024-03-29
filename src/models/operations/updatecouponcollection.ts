/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Values to update the coupon collection
 */
export type UpdateCouponCollectionRequestBody = {
    /**
     * A default coupon to be used in case there are no coupons left
     */
    defaultCoupon: string;
};

export type UpdateCouponCollectionRequest = {
    /**
     * Values to update the coupon collection
     */
    requestBody: UpdateCouponCollectionRequestBody;
    /**
     * Id of the collection to update
     */
    id: string;
};

/**
 * Coupon collection updated
 */
export type UpdateCouponCollectionResponseBody = {
    /**
     * The default coupon of the collection
     */
    defaultCoupon: string;
    /**
     * The id of the collection
     */
    id: string;
    /**
     * The name of the collection
     */
    name: string;
};

export type UpdateCouponCollectionResponse = {
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
     * Coupon collection updated
     */
    object?: UpdateCouponCollectionResponseBody | undefined;
};

/** @internal */
export namespace UpdateCouponCollectionRequestBody$ {
    export type Inbound = {
        defaultCoupon: string;
    };

    export const inboundSchema: z.ZodType<
        UpdateCouponCollectionRequestBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            defaultCoupon: z.string(),
        })
        .transform((v) => {
            return {
                defaultCoupon: v.defaultCoupon,
            };
        });

    export type Outbound = {
        defaultCoupon: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateCouponCollectionRequestBody
    > = z
        .object({
            defaultCoupon: z.string(),
        })
        .transform((v) => {
            return {
                defaultCoupon: v.defaultCoupon,
            };
        });
}

/** @internal */
export namespace UpdateCouponCollectionRequest$ {
    export type Inbound = {
        RequestBody: UpdateCouponCollectionRequestBody$.Inbound;
        id: string;
    };

    export const inboundSchema: z.ZodType<UpdateCouponCollectionRequest, z.ZodTypeDef, Inbound> = z
        .object({
            RequestBody: z.lazy(() => UpdateCouponCollectionRequestBody$.inboundSchema),
            id: z.string(),
        })
        .transform((v) => {
            return {
                requestBody: v.RequestBody,
                id: v.id,
            };
        });

    export type Outbound = {
        RequestBody: UpdateCouponCollectionRequestBody$.Outbound;
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCouponCollectionRequest> =
        z
            .object({
                requestBody: z.lazy(() => UpdateCouponCollectionRequestBody$.outboundSchema),
                id: z.string(),
            })
            .transform((v) => {
                return {
                    RequestBody: v.requestBody,
                    id: v.id,
                };
            });
}

/** @internal */
export namespace UpdateCouponCollectionResponseBody$ {
    export type Inbound = {
        defaultCoupon: string;
        id: string;
        name: string;
    };

    export const inboundSchema: z.ZodType<
        UpdateCouponCollectionResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            defaultCoupon: z.string(),
            id: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                defaultCoupon: v.defaultCoupon,
                id: v.id,
                name: v.name,
            };
        });

    export type Outbound = {
        defaultCoupon: string;
        id: string;
        name: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateCouponCollectionResponseBody
    > = z
        .object({
            defaultCoupon: z.string(),
            id: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                defaultCoupon: v.defaultCoupon,
                id: v.id,
                name: v.name,
            };
        });
}

/** @internal */
export namespace UpdateCouponCollectionResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: UpdateCouponCollectionResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<UpdateCouponCollectionResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => UpdateCouponCollectionResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: UpdateCouponCollectionResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateCouponCollectionResponse> =
        z
            .object({
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
                object: z.lazy(() => UpdateCouponCollectionResponseBody$.outboundSchema).optional(),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                    ...(v.object === undefined ? null : { object: v.object }),
                };
            });
}
