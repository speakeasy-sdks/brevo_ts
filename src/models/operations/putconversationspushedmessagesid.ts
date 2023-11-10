/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class PutConversationsPushedMessagesIdRequestBody extends SpeakeasyBase {
    /**
     * edited message text
     */
    @SpeakeasyMetadata()
    @Expose({ name: "text" })
    text: string;
}

export class PutConversationsPushedMessagesIdRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    requestBody: PutConversationsPushedMessagesIdRequestBody;

    /**
     * ID of the message
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class PutConversationsPushedMessagesIdResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Updated message is returned as a response
     */
    @SpeakeasyMetadata()
    conversationsMessage?: components.ConversationsMessage;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
