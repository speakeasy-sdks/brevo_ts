/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class GetCategoriesCategories extends SpeakeasyBase {
    /**
     * Creation UTC date-time of the category (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

    /**
     * Category ID for which you requested the details
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * category deleted from the shop's database
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isDeleted" })
    isDeleted?: boolean;

    /**
     * Last modification UTC date-time of the category (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "modifiedAt" })
    modifiedAt: string;

    /**
     * Name of the category for which you requested the details
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * URL to the category
     */
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}

/**
 * All categories listed
 */
export class GetCategories extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: GetCategoriesCategories })
    @Expose({ name: "categories" })
    @Type(() => GetCategoriesCategories)
    categories: GetCategoriesCategories[];

    /**
     * Number of categories
     */
    @SpeakeasyMetadata()
    @Expose({ name: "count" })
    count: number;
}
