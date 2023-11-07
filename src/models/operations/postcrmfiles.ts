/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import * as components from "../../models/components";
import { AxiosResponse } from "axios";

export class File extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "multipart_form, content=true" })
    content: Uint8Array;

    @SpeakeasyMetadata({ data: "multipart_form, name=file" })
    fileName: string;
}

export class PostCrmFilesRequestBody extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "multipart_form, name=companyId" })
    companyId?: string;

    @SpeakeasyMetadata({ data: "multipart_form, name=contactId" })
    contactId?: number;

    @SpeakeasyMetadata({ data: "multipart_form, name=dealId" })
    dealId?: string;

    /**
     * File data to create a file.
     */
    @SpeakeasyMetadata({ data: "multipart_form, file=true" })
    file: File;
}

export class PostCrmFilesResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Returns the created File with additional details
     */
    @SpeakeasyMetadata()
    fileData?: components.FileData;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}