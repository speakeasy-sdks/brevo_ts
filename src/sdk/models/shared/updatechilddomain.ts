/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class UpdateChildDomain extends SpeakeasyBase {
    /**
     * Value for the sender domain that will replace the existing domain
     */
    @SpeakeasyMetadata()
    @Expose({ name: "domain" })
    domain?: string;
}
