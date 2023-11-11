/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Category of the template
 */
export enum Category {
    Marketing = "MARKETING",
    Transactional = "TRANSACTIONAL",
}

export class CreateWhatsAppTemplate extends SpeakeasyBase {
    /**
     * Body of the template. **Maximum allowed characters are 1024**
     */
    @SpeakeasyMetadata()
    @Expose({ name: "bodyText" })
    bodyText: string;

    /**
     * Category of the template
     */
    @SpeakeasyMetadata()
    @Expose({ name: "category" })
    category: Category;

    /**
     * Text content of the header in the template. **Maximum allowed characters are 45**
     *
     * @remarks
     * **Use this field to add text content in template header and if mediaUrl is empty**
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "headerText" })
    headerText?: string;

    /**
     * Language of the template. For Example :
     *
     * @remarks
     * **en** for English
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "language" })
    language: string;

    /**
     * Absolute url of the media file **(no local file)** for the header. **Use this field in you want to add media in Template header and headerText is empty**.
     *
     * @remarks
     * Allowed extensions for media files are:
     * #### jpeg | png | mp4 | pdf
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "mediaUrl" })
    mediaUrl?: string;

    /**
     * Name of the template
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}
