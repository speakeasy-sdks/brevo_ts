/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * Test email could not be sent to the following email addresses
 */
export type PostSendFailedData = {
    blackListedEmails?: Array<string> | undefined;
    /**
     * Response code
     */
    code: string;
    /**
     * Response message
     */
    message: string;
    unexistingEmails?: Array<string> | undefined;
    withoutListEmails?: Array<string> | undefined;
};

/**
 * Test email could not be sent to the following email addresses
 */
export class PostSendFailed extends Error {
    blackListedEmails?: Array<string> | undefined;
    /**
     * Response code
     */
    code: string;
    unexistingEmails?: Array<string> | undefined;
    withoutListEmails?: Array<string> | undefined;

    /** The original data that was passed to this error instance. */
    data$: PostSendFailedData;

    constructor(err: PostSendFailedData) {
        super("");
        this.data$ = err;

        if (err.blackListedEmails != null) {
            this.blackListedEmails = err.blackListedEmails;
        }
        this.code = err.code;
        if (err.unexistingEmails != null) {
            this.unexistingEmails = err.unexistingEmails;
        }
        if (err.withoutListEmails != null) {
            this.withoutListEmails = err.withoutListEmails;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "PostSendFailed";
    }
}

/** @internal */
export namespace PostSendFailed$ {
    export type Inbound = {
        blackListedEmails?: Array<string> | undefined;
        code: string;
        message: string;
        unexistingEmails?: Array<string> | undefined;
        withoutListEmails?: Array<string> | undefined;
    };

    export const inboundSchema: z.ZodType<PostSendFailed, z.ZodTypeDef, Inbound> = z
        .object({
            blackListedEmails: z.array(z.string()).optional(),
            code: z.string(),
            message: z.string(),
            unexistingEmails: z.array(z.string()).optional(),
            withoutListEmails: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return new PostSendFailed({
                ...(v.blackListedEmails === undefined
                    ? null
                    : { blackListedEmails: v.blackListedEmails }),
                code: v.code,
                message: v.message,
                ...(v.unexistingEmails === undefined
                    ? null
                    : { unexistingEmails: v.unexistingEmails }),
                ...(v.withoutListEmails === undefined
                    ? null
                    : { withoutListEmails: v.withoutListEmails }),
            });
        });
    export type Outbound = {
        blackListedEmails?: Array<string> | undefined;
        code: string;
        message: string;
        unexistingEmails?: Array<string> | undefined;
        withoutListEmails?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostSendFailed> = z
        .instanceof(PostSendFailed)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    blackListedEmails: z.array(z.string()).optional(),
                    code: z.string(),
                    message: z.string(),
                    unexistingEmails: z.array(z.string()).optional(),
                    withoutListEmails: z.array(z.string()).optional(),
                })
                .transform((v) => {
                    return {
                        ...(v.blackListedEmails === undefined
                            ? null
                            : { blackListedEmails: v.blackListedEmails }),
                        code: v.code,
                        message: v.message,
                        ...(v.unexistingEmails === undefined
                            ? null
                            : { unexistingEmails: v.unexistingEmails }),
                        ...(v.withoutListEmails === undefined
                            ? null
                            : { withoutListEmails: v.withoutListEmails }),
                    };
                })
        );
}
