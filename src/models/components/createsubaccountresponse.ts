/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export class CreateSubAccountResponse extends SpeakeasyBase {
    /**
     * ID of the sub-account created
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;
}
