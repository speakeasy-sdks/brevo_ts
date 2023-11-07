/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export class UploadImageModel extends SpeakeasyBase {
    /**
     * URL of the image uploaded
     */
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}