/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export class CreateUpdateBatchCategoryModel extends SpeakeasyBase {
    /**
     * Number of the new created categories
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdCount" })
    createdCount?: number;

    /**
     * Number of the existing categories updated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updatedCount" })
    updatedCount?: number;
}