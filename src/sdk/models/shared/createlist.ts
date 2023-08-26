/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Values to create a list
 */
export class CreateList extends SpeakeasyBase {
    /**
     * Id of the parent folder in which this list is to be created
     */
    @SpeakeasyMetadata()
    @Expose({ name: "folderId" })
    folderId: number;

    /**
     * Name of the list
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}
