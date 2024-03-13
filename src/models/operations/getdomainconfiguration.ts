/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type GetDomainConfigurationRequest = {
    /**
     * Domain name
     */
    domainName: string;
};

export type GetDomainConfigurationResponse = {
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
     * domain configuration
     */
    getDomainConfigurationModel?: components.GetDomainConfigurationModel | undefined;
};

/** @internal */
export namespace GetDomainConfigurationRequest$ {
    export type Inbound = {
        domainName: string;
    };

    export const inboundSchema: z.ZodType<GetDomainConfigurationRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDomainConfigurationRequest> =
        z
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
export namespace GetDomainConfigurationResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        getDomainConfigurationModel?: components.GetDomainConfigurationModel$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetDomainConfigurationResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            getDomainConfigurationModel:
                components.GetDomainConfigurationModel$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.getDomainConfigurationModel === undefined
                    ? null
                    : { getDomainConfigurationModel: v.getDomainConfigurationModel }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        getDomainConfigurationModel?: components.GetDomainConfigurationModel$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetDomainConfigurationResponse> =
        z
            .object({
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
                getDomainConfigurationModel:
                    components.GetDomainConfigurationModel$.outboundSchema.optional(),
            })
            .transform((v) => {
                return {
                    ContentType: v.contentType,
                    StatusCode: v.statusCode,
                    RawResponse: v.rawResponse,
                    ...(v.getDomainConfigurationModel === undefined
                        ? null
                        : { getDomainConfigurationModel: v.getDomainConfigurationModel }),
                };
            });
}
