/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class UpdateChild extends SpeakeasyBase {
    /**
     * New Company name to use to update the child account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "companyName" })
    companyName?: string;

    /**
     * New Email address to update the child account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email?: string;

    /**
     * New First name to use to update the child account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "firstName" })
    firstName?: string;

    /**
     * New Last name to use to update the child account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lastName" })
    lastName?: string;

    /**
     * New password for the child account to login
     */
    @SpeakeasyMetadata()
    @Expose({ name: "password" })
    password?: string;
}
