/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

/**
 * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
 */
export enum GetFoldersSort {
    Asc = "asc",
    Desc = "desc",
}

export class GetFoldersRequest extends SpeakeasyBase {
    /**
     * Number of documents per page
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
    limit: number;

    /**
     * Index of the first document of the page
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
    offset: number;

    /**
     * Sort the results in the ascending/descending order of record creation. Default order is **descending** if `sort` is not passed
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
    sort?: GetFoldersSort;
}

export class GetFoldersResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

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

    /**
     * bad request
     */
    @SpeakeasyMetadata()
    errorModel?: shared.ErrorModel;

    /**
     * Folders informations
     */
    @SpeakeasyMetadata()
    getFolders?: shared.GetFolders;
}
