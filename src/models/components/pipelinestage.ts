/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

/**
 * List of stages
 */
export class PipelineStage extends SpeakeasyBase {
    /**
     * Stage id
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * Stage name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;
}
