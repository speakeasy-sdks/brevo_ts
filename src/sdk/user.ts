/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class User extends ClientSDK {
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
     * Get the list of all your users
     */
    async getInvitedUsersList(
        options?: RequestOptions
    ): Promise<operations.GetInvitedUsersListResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/organization/invited/users")();

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
            { security: securitySettings$, method: "GET", path: path$, headers: headers$ },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetInvitedUsersListResponse$.inboundSchema.parse({
                ...responseFields$,
                getInvitedUsersList: responseBody,
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
     * Check user permission
     */
    async getUserPermission(
        input: operations.GetUserPermissionRequest,
        options?: RequestOptions
    ): Promise<operations.GetUserPermissionResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.GetUserPermissionRequest$.outboundSchema.parse(input);
        const body$ = null;

        const pathParams$ = {
            email: enc$.encodeSimple("email", payload$.email, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = this.templateURLComponent("/organization/user/{email}/permissions")(
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

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.GetUserPermissionResponse$.inboundSchema.parse({
                ...responseFields$,
                getUserPermission: responseBody,
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
