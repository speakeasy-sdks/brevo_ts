/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type PostSendSmsTestFailedData = {
    /**
     * Response code
     */
    code: string;
    /**
     * Response message
     */
    message: string;
    unexistingSms?: Array<string> | undefined;
    withoutListSms?: Array<string> | undefined;
};

export class PostSendSmsTestFailed extends Error {
    /**
     * Response code
     */
    code: string;
    unexistingSms?: Array<string> | undefined;
    withoutListSms?: Array<string> | undefined;

    /** The original data that was passed to this error instance. */
    data$: PostSendSmsTestFailedData;

    constructor(err: PostSendSmsTestFailedData) {
        super("");
        this.data$ = err;

        this.code = err.code;
        if (err.unexistingSms != null) {
            this.unexistingSms = err.unexistingSms;
        }
        if (err.withoutListSms != null) {
            this.withoutListSms = err.withoutListSms;
        }

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "PostSendSmsTestFailed";
    }
}

/** @internal */
export namespace PostSendSmsTestFailed$ {
    export type Inbound = {
        code: string;
        message: string;
        unexistingSms?: Array<string> | undefined;
        withoutListSms?: Array<string> | undefined;
    };

    export const inboundSchema: z.ZodType<PostSendSmsTestFailed, z.ZodTypeDef, Inbound> = z
        .object({
            code: z.string(),
            message: z.string(),
            unexistingSms: z.array(z.string()).optional(),
            withoutListSms: z.array(z.string()).optional(),
        })
        .transform((v) => {
            return new PostSendSmsTestFailed({
                code: v.code,
                message: v.message,
                ...(v.unexistingSms === undefined ? null : { unexistingSms: v.unexistingSms }),
                ...(v.withoutListSms === undefined ? null : { withoutListSms: v.withoutListSms }),
            });
        });

    export type Outbound = {
        code: string;
        message: string;
        unexistingSms?: Array<string> | undefined;
        withoutListSms?: Array<string> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PostSendSmsTestFailed> = z
        .instanceof(PostSendSmsTestFailed)
        .transform((v) => v.data$)
        .pipe(
            z
                .object({
                    code: z.string(),
                    message: z.string(),
                    unexistingSms: z.array(z.string()).optional(),
                    withoutListSms: z.array(z.string()).optional(),
                })
                .transform((v) => {
                    return {
                        code: v.code,
                        message: v.message,
                        ...(v.unexistingSms === undefined
                            ? null
                            : { unexistingSms: v.unexistingSms }),
                        ...(v.withoutListSms === undefined
                            ? null
                            : { withoutListSms: v.withoutListSms }),
                    };
                })
        );
}
