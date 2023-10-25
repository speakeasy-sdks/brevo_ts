/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Company attributes with values
 */
export class CompanyAttributes extends SpeakeasyBase {}

/**
 * Company Details
 */
export class Company extends SpeakeasyBase {
    /**
     * Company attributes with values
     */
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    @Type(() => CompanyAttributes)
    attributes?: CompanyAttributes;

    /**
     * Unique comoany id
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Contact ids for contacts linked to this company
     */
    @SpeakeasyMetadata()
    @Expose({ name: "linkedContactsIds" })
    linkedContactsIds?: number[];

    /**
     * Deals ids for companies linked to this company
     */
    @SpeakeasyMetadata()
    @Expose({ name: "linkedDealsIds" })
    linkedDealsIds?: string[];
}
