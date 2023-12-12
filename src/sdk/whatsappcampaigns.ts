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

export class WhatsAppCampaigns extends ClientSDK {
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
     * Create and Send a WhatsApp campaign
     */
    async createWhatsAppCampaign(
        input: components.CreateWhatsAppCampaign,
        options?: RequestOptions
    ): Promise<operations.CreateWhatsAppCampaignResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");

        const payload = components.CreateWhatsAppCampaign$.outboundSchema.parse(input);
        const body = enc$.encodeJSON("body", payload, { explode: true });

        const path = this.templateURLComponent("/whatsappCampaigns")();

        const security = this.options$.apiKey ? { apiKey: this.options$.apiKey } : {};
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "post", path, headers, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 201, "application/json")) {
            const responseBody = await response.json();
            const result = operations.CreateWhatsAppCampaignResponse$.inboundSchema.parse({
                ...responseFields,
                createModel: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorModel$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new errors.ErrorModel(result);
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Create a WhatsApp template
     */
    async createWhatsAppTemplate(
        input: components.CreateWhatsAppTemplate,
        options?: RequestOptions
    ): Promise<operations.CreateWhatsAppTemplateResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");

        const payload = components.CreateWhatsAppTemplate$.outboundSchema.parse(input);
        const body = enc$.encodeJSON("body", payload, { explode: true });

        const path = this.templateURLComponent("/whatsappCampaigns/template")();

        const security = this.options$.apiKey ? { apiKey: this.options$.apiKey } : {};
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "post", path, headers, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 201, "application/json")) {
            const responseBody = await response.json();
            const result = operations.CreateWhatsAppTemplateResponse$.inboundSchema.parse({
                ...responseFields,
                createModel: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorModel$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new errors.ErrorModel(result);
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Delete a WhatsApp campaign
     */
    async deleteWhatsAppCampaign(
        input: operations.DeleteWhatsAppCampaignRequest,
        options?: RequestOptions
    ): Promise<operations.DeleteWhatsAppCampaignResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const payload = operations.DeleteWhatsAppCampaignRequest$.outboundSchema.parse(input);
        const body = null;

        const pathParams = {
            campaignId: enc$.encodeSimple("campaignId", payload.campaignId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/whatsappCampaigns/{campaignId}")(pathParams);

        const security = this.options$.apiKey ? { apiKey: this.options$.apiKey } : {};
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "delete", path, headers, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchStatusCode(response, 204)) {
            // fallthrough
        } else if (this.matchResponse(response, [400, 404], "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorModel$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new errors.ErrorModel(result);
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.DeleteWhatsAppCampaignResponse$.inboundSchema.parse(responseFields);
    }

    /**
     * Get a WhatsApp campaign
     */
    async getWhatsAppCampaign(
        input: operations.GetWhatsAppCampaignRequest,
        options?: RequestOptions
    ): Promise<operations.GetWhatsAppCampaignResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const payload = operations.GetWhatsAppCampaignRequest$.outboundSchema.parse(input);
        const body = null;

        const pathParams = {
            campaignId: enc$.encodeSimple("campaignId", payload.campaignId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/whatsappCampaigns/{campaignId}")(pathParams);

        const security = this.options$.apiKey ? { apiKey: this.options$.apiKey } : {};
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "get", path, headers, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetWhatsAppCampaignResponse$.inboundSchema.parse({
                ...responseFields,
                getWhatsappCampaignOverview: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, [400, 404], "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorModel$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new errors.ErrorModel(result);
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Return all your created WhatsApp campaigns
     */
    async getWhatsAppCampaigns(
        input: operations.GetWhatsAppCampaignsRequest,
        options?: RequestOptions
    ): Promise<operations.GetWhatsAppCampaignsResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const payload = operations.GetWhatsAppCampaignsRequest$.outboundSchema.parse(input);
        const body = null;

        const path = this.templateURLComponent("/whatsappCampaigns")();

        const query = [
            enc$.encodeForm("endDate", payload.endDate, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("limit", payload.limit, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("offset", payload.offset, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("sort", payload.sort, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("startDate", payload.startDate, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        const security = this.options$.apiKey ? { apiKey: this.options$.apiKey } : {};
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "get", path, headers, query, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetWhatsAppCampaignsResponse$.inboundSchema.parse({
                ...responseFields,
                getWhatsappCampaigns: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorModel$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new errors.ErrorModel(result);
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Get your WhatsApp API account information
     */
    async getWhatsAppConfig(
        options?: RequestOptions
    ): Promise<operations.GetWhatsAppConfigResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const path = this.templateURLComponent("/whatsappCampaigns/config")();

        const security = this.options$.apiKey ? { apiKey: this.options$.apiKey } : {};
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "get", path, headers },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetWhatsAppConfigResponse$.inboundSchema.parse({
                ...responseFields,
                getWhatsAppConfig: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorModel$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new errors.ErrorModel(result);
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Return all your created WhatsApp templates
     */
    async getWhatsAppTemplates(
        input: operations.GetWhatsAppTemplatesRequest,
        options?: RequestOptions
    ): Promise<operations.GetWhatsAppTemplatesResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const payload = operations.GetWhatsAppTemplatesRequest$.outboundSchema.parse(input);
        const body = null;

        const path = this.templateURLComponent("/whatsappCampaigns/template-list")();

        const query = [
            enc$.encodeForm("endDate", payload.endDate, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("limit", payload.limit, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("offset", payload.offset, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("sort", payload.sort, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("startDate", payload.startDate, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        const security = this.options$.apiKey ? { apiKey: this.options$.apiKey } : {};
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "get", path, headers, query, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetWhatsAppTemplatesResponse$.inboundSchema.parse({
                ...responseFields,
                getWhatsappTemplates: responseBody,
            });
            return result;
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorModel$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new errors.ErrorModel(result);
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    /**
     * Send your WhatsApp template for approval
     */
    async sendWhatsAppTemplateApproval(
        input: operations.SendWhatsAppTemplateApprovalRequest,
        options?: RequestOptions
    ): Promise<operations.SendWhatsAppTemplateApprovalResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Accept", "application/json");

        const payload = operations.SendWhatsAppTemplateApprovalRequest$.outboundSchema.parse(input);
        const body = null;

        const pathParams = {
            templateId: enc$.encodeSimple("templateId", payload.templateId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/whatsappCampaigns/template/approval/{templateId}")(
            pathParams
        );

        const security = this.options$.apiKey ? { apiKey: this.options$.apiKey } : {};
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "post", path, headers, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchStatusCode(response, 200)) {
            // fallthrough
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorModel$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new errors.ErrorModel(result);
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.SendWhatsAppTemplateApprovalResponse$.inboundSchema.parse(responseFields);
    }

    /**
     * Update a WhatsApp campaign
     */
    async updateWhatsAppCampaign(
        input: operations.UpdateWhatsAppCampaignRequest,
        options?: RequestOptions
    ): Promise<operations.UpdateWhatsAppCampaignResponse> {
        const headers = new Headers();
        headers.set("user-agent", SDK_METADATA.userAgent);
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");

        const payload = operations.UpdateWhatsAppCampaignRequest$.outboundSchema.parse(input);

        const body = enc$.encodeJSON("body", payload.updateWhatsAppCampaign, { explode: true });

        const pathParams = {
            campaignId: enc$.encodeSimple("campaignId", payload.campaignId, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path = this.templateURLComponent("/whatsappCampaigns/{campaignId}")(pathParams);

        const security = this.options$.apiKey ? { apiKey: this.options$.apiKey } : {};
        const securitySettings = this.resolveGlobalSecurity(security);

        const response = await this.fetch$(
            { security: securitySettings, method: "put", path, headers, body },
            options
        );

        const responseFields = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchStatusCode(response, 204)) {
            // fallthrough
        } else if (this.matchResponse(response, 400, "application/json")) {
            const responseBody = await response.json();
            const result = errors.ErrorModel$.inboundSchema.parse({
                ...responseFields,
                ...responseBody,
            });
            throw new errors.ErrorModel(result);
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }

        return operations.UpdateWhatsAppCampaignResponse$.inboundSchema.parse(responseFields);
    }
}
