/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export class CreateUpdateCategory extends SpeakeasyBase {
    /**
     * UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) of the category deleted from the shop's database
     */
    @SpeakeasyMetadata()
    @Expose({ name: "deletedAt" })
    deletedAt?: string;

    /**
     * Unique Category ID as saved in the shop
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * **Mandatory in case of creation**. Name of the Category, as displayed in the shop
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Facilitate to update the existing category in the same request (updateEnabled = true)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "updateEnabled" })
    updateEnabled?: boolean;

    /**
     * URL to the category
     */
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}