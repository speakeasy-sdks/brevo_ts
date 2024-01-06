/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as components from "../models/components";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class SMSCampaigns extends ClientSDK {
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
     * Creates an SMS campaign
     */
    async createSmsCampaign(
        input: components.CreateSmsCampaign,
        options?: RequestOptions
    ): Promise<operations.CreateSmsCampaignResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = components.CreateSmsCampaign$.outboundSchema.parse(input);
        const body$ = enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/smsCampaigns")();

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
                method: "post",
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

        if (this.matchResponse(response, 201, "application/json")) {
            const responseBody = await response.json();
            const result = operations.CreateSmsCampaignResponse$.inboundSchema.parse({
                ...responseFields$,
                createModel: responseBody,
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
     * Delete an SMS campaign
     */
    async deleteSmsCampaign(
        input: operations.DeleteSmsCampaignRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteSmsCampaignResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.DeleteSmsCampaignRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            campaignId: enc$.encodeSimple("campaignId", payload$.campaignId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/smsCampaigns/{campaignId}")(pathParams$);

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
                method: "delete",
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

        if (this.matchStatusCode(response, 204)) {
            // fallthrough
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

        return operations.DeleteSmsCampaignResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Get an SMS campaign
     */
    async getSmsCampaign(
        input: operations.GetSmsCampaignRequest,
        options?: RequestOptions
    ): Promise<operations.GetSmsCampaignResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetSmsCampaignRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            campaignId: enc$.encodeSimple("campaignId", payload$.campaignId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/smsCampaigns/{campaignId}")(pathParams$);

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
                method: "get",
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
            const result = operations.GetSmsCampaignResponse$.inboundSchema.parse({
                ...responseFields$,
                getSmsCampaign: responseBody,
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
     * Returns the information for all your created SMS campaigns
     */
    async getSmsCampaigns(
        input: operations.GetSmsCampaignsRequest,
        options?: RequestOptions
    ): Promise<operations.GetSmsCampaignsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetSmsCampaignsRequest$.outboundSchema.parse(input);
        const body$ = null;

        const path$ = this.templateURLComponent("/smsCampaigns")();

        const query$ = [
            enc$.encodeForm("endDate", payload$.endDate, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("limit", payload$.limit, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("offset", payload$.offset, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("sort", payload$.sort, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("startDate", payload$.startDate, {
                explode: true,
                charEncoding: "percent",
            }),
            enc$.encodeForm("status", payload$.status, { explode: true, charEncoding: "percent" }),
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
                method: "get",
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
            const result = operations.GetSmsCampaignsResponse$.inboundSchema.parse({
                ...responseFields$,
                getSmsCampaigns: responseBody,
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
     * Export an SMS campaign's recipients
     *
     * @remarks
     * It returns the background process ID which on completion calls the notify URL that you have set in the input.
     */
    async requestSmsRecipientExport(
        input: operations.RequestSmsRecipientExportRequest,
        options?: RequestOptions
    ): Promise<operations.RequestSmsRecipientExportResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.RequestSmsRecipientExportRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.requestSmsRecipientExport, {
            explode: true,
        });

        const pathParams$ = {
            campaignId: enc$.encodeSimple("campaignId", payload$.campaignId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/smsCampaigns/{campaignId}/exportRecipients")(
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
                method: "post",
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

        if (this.matchResponse(response, 202, "application/json")) {
            const responseBody = await response.json();
            const result = operations.RequestSmsRecipientExportResponse$.inboundSchema.parse({
                ...responseFields$,
                createdProcessId: responseBody,
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
     * Send your SMS campaign immediately
     */
    async sendSmsCampaignNow(
        input: operations.SendSmsCampaignNowRequest,
        options?: RequestOptions
    ): Promise<operations.SendSmsCampaignNowResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.SendSmsCampaignNowRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            campaignId: enc$.encodeSimple("campaignId", payload$.campaignId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/smsCampaigns/{campaignId}/sendNow")(pathParams$);

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
                method: "post",
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

        if (this.matchStatusCode(response, 204)) {
            // fallthrough
        } else if (this.matchResponse(response, [400, 402, 404], "application/json")) {
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

        return operations.SendSmsCampaignNowResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Send an SMS campaign's report
     *
     * @remarks
     * Send report of Sent and Archived campaign, to the specified email addresses, with respective data and a pdf attachment in detail.
     */
    async sendSmsReport(
        input: operations.SendSmsReportRequest,
        options?: RequestOptions
    ): Promise<operations.SendSmsReportResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.SendSmsReportRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.sendReport, { explode: true });

        const pathParams$ = {
            campaignId: enc$.encodeSimple("campaignId", payload$.campaignId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/smsCampaigns/{campaignId}/sendReport")(
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
                method: "post",
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

        if (this.matchStatusCode(response, 204)) {
            // fallthrough
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

        return operations.SendSmsReportResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Send a test SMS campaign
     */
    async sendTestSms(
        input: operations.SendTestSmsRequest,
        options?: RequestOptions
    ): Promise<operations.SendTestSmsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.SendTestSmsRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.sendTestSms, { explode: true });

        const pathParams$ = {
            campaignId: enc$.encodeSimple("campaignId", payload$.campaignId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/smsCampaigns/{campaignId}/sendTest")(pathParams$);

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
                method: "post",
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

        if (this.matchStatusCode(response, 204)) {
            // fallthrough
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.PostSendSmsTestFailed$.inboundSchema.parse({
                ...responseFields$,
                ...responseBody,
            });
            throw result;
        } else if (this.matchResponse(response, 404, "application/json")) {
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

        return operations.SendTestSmsResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Update an SMS campaign
     */
    async updateSmsCampaign(
        input: operations.UpdateSmsCampaignRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateSmsCampaignResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.UpdateSmsCampaignRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.updateSmsCampaign, { explode: true });

        const pathParams$ = {
            campaignId: enc$.encodeSimple("campaignId", payload$.campaignId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/smsCampaigns/{campaignId}")(pathParams$);

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
                method: "put",
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

        if (this.matchStatusCode(response, 204)) {
            // fallthrough
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

        return operations.UpdateSmsCampaignResponse$.inboundSchema.parse(responseFields$);
    }

    /**
     * Update a campaign's status
     */
    async updateSmsCampaignStatus(
        input: operations.UpdateSmsCampaignStatusRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateSmsCampaignStatusResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = operations.UpdateSmsCampaignStatusRequest$.outboundSchema.parse(input);

        const body$ = enc$.encodeJSON("body", payload$.updateCampaignStatus, { explode: true });

        const pathParams$ = {
            campaignId: enc$.encodeSimple("campaignId", payload$.campaignId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/smsCampaigns/{campaignId}/status")(pathParams$);

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
                method: "put",
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

        if (this.matchStatusCode(response, 204)) {
            // fallthrough
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

        return operations.UpdateSmsCampaignStatusResponse$.inboundSchema.parse(responseFields$);
    }
}
