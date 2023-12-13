/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Error code displayed in case of a failure
 */
export enum Code {
    InvalidParameter = "invalid_parameter",
    MissingParameter = "missing_parameter",
    OutOfRange = "out_of_range",
    CampaignProcessing = "campaign_processing",
    CampaignSent = "campaign_sent",
    DocumentNotFound = "document_not_found",
    ResellerPermissionDenied = "reseller_permission_denied",
    NotEnoughCredits = "not_enough_credits",
    PermissionDenied = "permission_denied",
    DuplicateParameter = "duplicate_parameter",
    DuplicateRequest = "duplicate_request",
    MethodNotAllowed = "method_not_allowed",
    Unauthorized = "unauthorized",
    AccountUnderValidation = "account_under_validation",
    NotAcceptable = "not_acceptable",
    BadRequest = "bad_request",
}

/**
 * bad request
 */
export type ErrorModelData = {
    /**
     * Error code displayed in case of a failure
     */
    code: Code;
    /**
     * Readable message associated to the failure
     */
    message: string;
};

/**
 * bad request
 */
export class ErrorModel extends Error {
    /**
     * Error code displayed in case of a failure
     */
    code: Code;

    /** The original data that was passed to this error instance. */
    data$: ErrorModelData;

    constructor(err: ErrorModelData, options?: ErrorOptions) {
        super("", options);
        this.data$ = err;

        this.code = err.code;

        const msg = "message" in err && typeof err.message === "string" ? err.message : "";
        const content = JSON.stringify(err);
        this.message = [msg, content].filter(Boolean).join("\n");

        this.name = "ErrorModel";
    }
}

/** @internal */
export const Code$ = z.nativeEnum(Code);

/** @internal */
export namespace ErrorModel$ {
    export type Inbound = {
        code: Code;
        message: string;
    };
    export type Outbound = {
        code: Code;
        message: string;
    };

    export const inboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Inbound> = z
        .object({
            code: Code$,
            message: z.string(),
        })
        .transform((v) => {
            return {
                code: v.code,
                message: v.message,
            };
        });
}
