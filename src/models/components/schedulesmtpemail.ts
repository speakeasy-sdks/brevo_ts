/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export class ScheduleSmtpEmail extends SpeakeasyBase {
    /**
     * Batch ID of the batch transactional email scheduled
     */
    @SpeakeasyMetadata()
    @Expose({ name: "batchId" })
    batchId?: string;

    /**
     * Message ID of the transactional email scheduled
     */
    @SpeakeasyMetadata()
    @Expose({ name: "messageId" })
    messageId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "messageIds" })
    messageIds?: string[];
}
