/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { objectToClass, SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { GetDeviceBrowserStats } from "./getdevicebrowserstats";
import { Expose, Transform } from "class-transformer";

export class GetStatsByDevice extends SpeakeasyBase {
    /**
     * Statistics of the campaign on the basis of desktop devices
     */
    @SpeakeasyMetadata({ elemType: GetDeviceBrowserStats })
    @Expose({ name: "desktop" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, GetDeviceBrowserStats> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], GetDeviceBrowserStats);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    desktop?: Record<string, GetDeviceBrowserStats>;

    /**
     * Statistics of the campaign on the basis of mobile devices
     */
    @SpeakeasyMetadata({ elemType: GetDeviceBrowserStats })
    @Expose({ name: "mobile" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, GetDeviceBrowserStats> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], GetDeviceBrowserStats);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    mobile?: Record<string, GetDeviceBrowserStats>;

    /**
     * Statistics of the campaign on the basis of tablet devices
     */
    @SpeakeasyMetadata({ elemType: GetDeviceBrowserStats })
    @Expose({ name: "tablet" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, GetDeviceBrowserStats> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], GetDeviceBrowserStats);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    tablet?: Record<string, GetDeviceBrowserStats>;

    /**
     * Statistics of the campaign on the basis of unknown devices
     */
    @SpeakeasyMetadata({ elemType: GetDeviceBrowserStats })
    @Expose({ name: "unknown" })
    @Transform(
        ({ value }) => {
            const obj: Record<string, GetDeviceBrowserStats> = {};
            for (const key in value) {
                obj[key] = objectToClass(value[key], GetDeviceBrowserStats);
            }
            return obj;
        },
        { toClassOnly: true }
    )
    unknown?: Record<string, GetDeviceBrowserStats>;
}