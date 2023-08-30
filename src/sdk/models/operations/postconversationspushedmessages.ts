/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PostConversationsPushedMessagesRequestBody extends SpeakeasyBase {
    /**
     * agent ID. It can be found on agent’s page or received <a href="https://developers.brevo.com/docs/conversations-webhooks">from a webhook</a>.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "agentId" })
    agentId?: any;

    /**
     * group ID. It can be found on group’s page.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "groupId" })
    groupId?: any;

    /**
     * message text
     */
    @SpeakeasyMetadata()
    @Expose({ name: "text" })
    text: any;

    /**
     * visitor’s ID received <a href="https://developers.brevo.com/docs/conversations-webhooks">from a webhook</a> or generated by you to <a href="https://developers.brevo.com/docs/customize-the-widget#identifying-existing-users">bind existing user account to Conversations</a>
     */
    @SpeakeasyMetadata()
    @Expose({ name: "visitorId" })
    visitorId: any;
}

export class PostConversationsPushedMessagesResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Newly created message is returned as a response
     */
    @SpeakeasyMetadata()
    conversationsMessage?: shared.ConversationsMessage;

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
