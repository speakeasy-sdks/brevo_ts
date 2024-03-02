/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../models/components";

export enum SecurityErrorCode {
    Incomplete = "incomplete",
    UnrecognisedSecurityType = "unrecognized_security_type",
}

export class SecurityError extends Error {
    constructor(public code: SecurityErrorCode, message: string) {
        super(message);
        this.name = "SecurityError";
    }

    static incomplete(): SecurityError {
        return new SecurityError(
            SecurityErrorCode.Incomplete,
            "Security requirements not met in order to perform the operation"
        );
    }
    static unrecognizedType(type: string): SecurityError {
        return new SecurityError(
            SecurityErrorCode.UnrecognisedSecurityType,
            `Unrecognised security type: ${type}`
        );
    }
}

export type SecurityState = {
    basic: { username: string; password?: string };
    headers: Record<string, string>;
    queryParams: Record<string, string>;
    cookies: Record<string, string>;
};

type SecurityInputBasicPacked = {
    type: "http:basic";
    value: { username: string; password?: string } | null | undefined;
};

type SecurityInputBasic = {
    type: "http:basic";
    value: string | null | undefined;
    fieldName: "username" | "password";
};

type SecurityInputBearer = {
    type: "http:bearer";
    value: string | null | undefined;
    fieldName: string;
};

type SecurityInputAPIKey = {
    type: "apiKey:header" | "apiKey:query" | "apiKey:cookie";
    value: string | null | undefined;
    fieldName: string;
};

type SecurityInputOIDC = {
    type: "openIdConnect";
    value: string | null | undefined;
    fieldName: string;
};

type SecurityInputOAuth2 = {
    type: "oauth2";
    value: string | null | undefined;
    fieldName: string;
};

type SecurityInputOAuth2ClientCredentials = {
    type: "oauth2:client_credentials";
    value: string | null | undefined;
    fieldName: "clientID" | "clientSecret";
};

export type SecurityInput =
    | SecurityInputBasic
    | SecurityInputBasicPacked
    | SecurityInputBearer
    | SecurityInputAPIKey
    | SecurityInputOAuth2
    | SecurityInputOAuth2ClientCredentials
    | SecurityInputOIDC;

export function resolveSecurity(...options: SecurityInput[][]): SecurityState | null {
    const state: SecurityState = {
        basic: { username: "", password: "" },
        headers: {},
        queryParams: {},
        cookies: {},
    };

    const option = options.find((opts) => opts.every((o) => Boolean(o.value)));
    if (option == null) {
        return null;
    }

    option.forEach((spec) => {
        if (spec.value == null) {
            return;
        }

        const { type } = spec;

        switch (type) {
            case "apiKey:header":
                state.headers[spec.fieldName] = spec.value;
                break;
            case "apiKey:query":
                state.queryParams[spec.fieldName] = spec.value;
                break;
            case "apiKey:cookie":
                state.cookies[spec.fieldName] = spec.value;
                break;
            case "http:basic":
                applyBasic(state, spec);
                break;
            case "http:bearer":
                applyBearer(state, spec);
                break;
            case "oauth2":
                applyBearer(state, spec);
                break;
            case "oauth2:client_credentials":
                break;
            case "openIdConnect":
                applyBearer(state, spec);
                break;
            default:
                spec satisfies never;
                throw SecurityError.unrecognizedType(type);
        }
    });

    return state;
}

function applyBasic(state: SecurityState, spec: SecurityInputBasic | SecurityInputBasicPacked) {
    if (spec.value == null) {
        return;
    }

    if ("fieldName" in spec) {
        state.basic[spec.fieldName] = spec.value;
    } else {
        state.basic = spec.value;
    }
}

function applyBearer(
    state: SecurityState,
    spec: SecurityInputBearer | SecurityInputOAuth2 | SecurityInputOIDC
) {
    if (spec.value == null) {
        return;
    }

    let value = spec.value;
    if (value.slice(0, 7).toLowerCase() !== "bearer ") {
        value = `Bearer ${value}`;
    }

    state.headers[spec.fieldName] = value;
}
export function resolveGlobalSecurity(security: Partial<components.Security> | null | undefined) {
    return resolveSecurity([
        { value: security?.apiKey, fieldName: "api-key", type: "apiKey:header" },
    ]);
}
