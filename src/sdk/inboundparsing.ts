/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export enum GetInboundEmailAttachmentAcceptEnum {
    applicationJson = "application/json",
    applicationOctetStream = "application/octet-stream",
}

export class InboundParsing extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }

    /**
     * Retrieve inbound attachment with download token.
     *
     * @remarks
     * This endpoint will retrieve inbound attachment with download token.
     */
    async getInboundEmailAttachment(
        input: operations.GetInboundEmailAttachmentRequest,
        options?: RequestOptions & { acceptHeaderOverride?: GetInboundEmailAttachmentAcceptEnum }
    ): Promise<operations.GetInboundEmailAttachmentResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);

        const accept =
            options?.acceptHeaderOverride || "application/json;q=1, application/octet-stream;q=0";
        headers$.set("Accept", accept);

        const payload$ = operations.GetInboundEmailAttachmentRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            downloadToken: enc$.encodeSimple("downloadToken", payload$.downloadToken, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/inbound/attachments/{downloadToken}")(
            pathParams$
        );

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/octet-stream")) {
            const responseBody = response.body ?? undefined;
            const result = operations.GetInboundEmailAttachmentResponse$.inboundSchema.parse({
                ...responseFields$,
                Headers: this.unpackHeaders(response.headers),
                stream: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, [400, 404], "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorModel$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get the list of all the events for the received emails.
     *
     * @remarks
     * This endpoint will show the list of all the events for the received emails.
     */
    async getInboundEmailEvents(
        input: operations.GetInboundEmailEventsRequest,
        options?: RequestOptions
    ): Promise<operations.GetInboundEmailEventsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetInboundEmailEventsRequest$.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/inbound/events")();

        const query$ = [
            enc$.encodeForm("endDate", payload$.endDate, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("limit", payload$.limit, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("offset", payload$.offset, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("sender", payload$.sender, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("sort", payload$.sort, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("startDate", payload$.startDate, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetInboundEmailEventsResponse$.inboundSchema.parse({
                ...responseFields$,
                getInboundEmailEvents: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorModel$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Fetch all events history for one particular received email.
     *
     * @remarks
     * This endpoint will show the list of all events history for one particular received email.
     */
    async getInboundEmailEventsByUuid(
        input: operations.GetInboundEmailEventsByUuidRequest,
        options?: RequestOptions
    ): Promise<operations.GetInboundEmailEventsByUuidResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetInboundEmailEventsByUuidRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            uuid: enc$.encodeSimple("uuid", payload$.uuid, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/inbound/events/{uuid}")(pathParams$);

        let security$;
        if (typeof this.options$.apiKey === "function") {
            security$ = { apiKey: await this.options$.apiKey() };
        } else if (this.options$.apiKey) {
            security$ = { apiKey: this.options$.apiKey };
        } else {
            security$ = {};
        }
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const response = await this.fetch$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                body: body$,
            },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetInboundEmailEventsByUuidResponse$.inboundSchema.parse({
                ...responseFields$,
                getInboundEmailEventsByUuid: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorModel$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
