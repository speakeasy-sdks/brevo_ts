/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose, Type } from "class-transformer";

export class AttributeOptions extends SpeakeasyBase {}

/**
 * List of attributes
 */
export class CompanyAttributes extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: AttributeOptions })
    @Expose({ name: "attributeOptions" })
    @Type(() => AttributeOptions)
    attributeOptions?: AttributeOptions[];

    @SpeakeasyMetadata()
    @Expose({ name: "attributeTypeName" })
    attributeTypeName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "internalName" })
    internalName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "isRequired" })
    isRequired?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "label" })
    label?: string;
}