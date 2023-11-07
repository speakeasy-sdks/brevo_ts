/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Meta data of product such as description, vendor, producer, stock level, etc.
 */
export class MetaInfo extends SpeakeasyBase {}

export class GetProductDetails extends SpeakeasyBase {
    /**
     * Category ID-s of the product
     */
    @SpeakeasyMetadata()
    @Expose({ name: "categories" })
    categories?: string[];

    /**
     * Creation UTC date-time of the product (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: string;

    /**
     * Product ID for which you requested the details
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Absolute URL to the cover image of the product
     */
    @SpeakeasyMetadata()
    @Expose({ name: "imageUrl" })
    imageUrl?: string;

    /**
     * product deleted from the shop's database
     */
    @SpeakeasyMetadata()
    @Expose({ name: "isDeleted" })
    isDeleted?: boolean;

    /**
     * Meta data of product such as description, vendor, producer, stock level, etc.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metaInfo" })
    @Type(() => MetaInfo)
    metaInfo?: MetaInfo;

    /**
     * Last modification UTC date-time of the product (YYYY-MM-DDTHH:mm:ss.SSSZ)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "modifiedAt" })
    modifiedAt: string;

    /**
     * Name of the product for which you requested the details
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * Parent product id of the product
     */
    @SpeakeasyMetadata()
    @Expose({ name: "parentId" })
    parentId?: string;

    /**
     * Price of the product
     */
    @SpeakeasyMetadata()
    @Expose({ name: "price" })
    price?: number;

    /**
     * S3 url of original image
     */
    @SpeakeasyMetadata()
    @Expose({ name: "s3Original" })
    s3Original?: string;

    /**
     * S3 thumbnail url of original image in 120x120 dimension for analytics section
     */
    @SpeakeasyMetadata()
    @Expose({ name: "s3ThumbAnalytics" })
    s3ThumbAnalytics: string;

    /**
     * S3 thumbnail url of original image in 600x400 dimension for editor section
     */
    @SpeakeasyMetadata()
    @Expose({ name: "s3ThumbEditor" })
    s3ThumbEditor: string;

    /**
     * Product identifier from the shop
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sku" })
    sku?: string;

    /**
     * URL to the product
     */
    @SpeakeasyMetadata()
    @Expose({ name: "url" })
    url?: string;
}
