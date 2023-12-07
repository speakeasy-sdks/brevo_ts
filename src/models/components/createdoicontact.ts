/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export class CreateDoiContact extends SpeakeasyBase {
    /**
     * Pass the set of attributes and their values. **These attributes must be present in your Brevo account**. For eg. **{'FNAME':'Elly', 'LNAME':'Roger'}**
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "attributes" })
    attributes?: Record<string, any>;

    /**
     * Email address where the confirmation email will be sent. This email address will be the identifier for all other contact attributes.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * Lists under user account where contact should not be added
     */
    @SpeakeasyMetadata()
    @Expose({ name: "excludeListIds" })
    excludeListIds?: number[];

    /**
     * Lists under user account where contact should be added
     */
    @SpeakeasyMetadata()
    @Expose({ name: "includeListIds" })
    includeListIds: number[];

    /**
     * URL of the web page that user will be redirected to after clicking on the double opt in URL. When editing your DOI template you can reference this URL by using the tag **{{ params.DOIurl }}**.
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "redirectionUrl" })
    redirectionUrl: string;

    /**
     * Id of the Double opt-in (DOI) template
     */
    @SpeakeasyMetadata()
    @Expose({ name: "templateId" })
    templateId: number;
}
