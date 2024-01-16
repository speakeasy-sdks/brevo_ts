/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type AuthenticateDomainRequest = {
    /**
     * Domain name
     */
    domainName: string;
};

export type AuthenticateDomainResponse = {
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
     * domain authenticated
     */
    authenticateDomainModel?: components.AuthenticateDomainModel | undefined;
};

/** @internal */
export namespace AuthenticateDomainRequest$ {
    export type Inbound = {
        domainName: string;
    };

    export const inboundSchema: z.ZodType<AuthenticateDomainRequest, z.ZodTypeDef, Inbound> = z
        .object({
            domainName: z.string(),
        })
        .transform((v) => {
            return {
                domainName: v.domainName,
            };
        });

    export type Outbound = {
        domainName: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AuthenticateDomainRequest> = z
        .object({
            domainName: z.string(),
        })
        .transform((v) => {
            return {
                domainName: v.domainName,
            };
        });
}

/** @internal */
export namespace AuthenticateDomainResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        authenticateDomainModel?: components.AuthenticateDomainModel$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<AuthenticateDomainResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            authenticateDomainModel: components.AuthenticateDomainModel$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.authenticateDomainModel === undefined
                    ? null
                    : { authenticateDomainModel: v.authenticateDomainModel }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        authenticateDomainModel?: components.AuthenticateDomainModel$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AuthenticateDomainResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            authenticateDomainModel: components.AuthenticateDomainModel$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.authenticateDomainModel === undefined
                    ? null
                    : { authenticateDomainModel: v.authenticateDomainModel }),
            };
        });
}
