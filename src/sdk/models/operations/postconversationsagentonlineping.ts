/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PostConversationsAgentOnlinePingRequestBody extends SpeakeasyBase {
    /**
     * agent email. When sending online pings from a standalone system, it’s hard to maintain a 1-to-1 relationship between the users of both systems. In this case, an agent can be specified by their email address. If there’s no agent with the specified email address in your Brevo organization, a dummy agent will be created automatically.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "agentEmail" })
    agentEmail?: any;

    /**
     * agent ID. It can be found on agent’s page or received <a href="https://developers.brevo.com/docs/conversations-webhooks">from a webhook</a>. Alternatively, you can use `agentEmail` + `agentName` + `receivedFrom` instead (all 3 fields required).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "agentId" })
    agentId?: any;

    /**
     * agent name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "agentName" })
    agentName?: any;

    /**
     * mark your messages to distinguish messages created by you from the others.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "receivedFrom" })
    receivedFrom?: any;
}

export class PostConversationsAgentOnlinePingResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * Returned when invalid data posted
     */
    @SpeakeasyMetadata()
    errorModel?: shared.ErrorModel;
}
