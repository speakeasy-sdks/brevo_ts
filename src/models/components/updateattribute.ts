/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose, Type } from "class-transformer";

export class UpdateAttributeEnumeration extends SpeakeasyBase {
    /**
     * Label of the value
     */
    @SpeakeasyMetadata()
    @Expose({ name: "label" })
    label: string;

    /**
     * Id of the value
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value: number;
}

export class UpdateAttribute extends SpeakeasyBase {
    /**
     * List of the values and labels that the attribute can take. **Use only if the attribute's category is "category"**. For example,
     *
     * @remarks
     * **[{"value":1, "label":"male"}, {"value":2, "label":"female"}]**
     *
     */
    @SpeakeasyMetadata({ elemType: UpdateAttributeEnumeration })
    @Expose({ name: "enumeration" })
    @Type(() => UpdateAttributeEnumeration)
    enumeration?: UpdateAttributeEnumeration[];

    /**
     * Value of the attribute to update. **Use only if the attribute's category is 'calculated' or 'global'**
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "value" })
    value?: string;
}
