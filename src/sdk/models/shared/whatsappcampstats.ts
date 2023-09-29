/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class WhatsappCampStats extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "delivered" })
    delivered: number;

    @SpeakeasyMetadata()
    @Expose({ name: "notSent" })
    notSent: number;

    @SpeakeasyMetadata()
    @Expose({ name: "read" })
    read: number;

    @SpeakeasyMetadata()
    @Expose({ name: "sent" })
    sent: number;

    @SpeakeasyMetadata()
    @Expose({ name: "unsubscribe" })
    unsubscribe: number;
}
