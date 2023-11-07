/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export class AuthenticateDomainModel extends SpeakeasyBase {
    /**
     * Domain
     */
    @SpeakeasyMetadata()
    @Expose({ name: "domain_name" })
    domainName: string;

    /**
     * Success message
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;
}