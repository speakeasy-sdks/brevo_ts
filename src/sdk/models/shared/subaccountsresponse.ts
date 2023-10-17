/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class SubAccountsResponseSubAccounts extends SpeakeasyBase {
    /**
     * Whether the sub-account is active or not
     */
    @SpeakeasyMetadata()
    @Expose({ name: "active" })
    active: boolean;

    /**
     * Name of the sub-account company
     */
    @SpeakeasyMetadata()
    @Expose({ name: "companyName" })
    companyName: string;

    /**
     * Timestamp when the sub-account was created
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    createdAt: number;

    /**
     * id of the sub-account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: number;
}

export class SubAccountsResponse extends SpeakeasyBase {
    /**
     * Total number of subaccounts
     */
    @SpeakeasyMetadata()
    @Expose({ name: "count" })
    count?: number;

    @SpeakeasyMetadata({ elemType: SubAccountsResponseSubAccounts })
    @Expose({ name: "subAccounts" })
    @Type(() => SubAccountsResponseSubAccounts)
    subAccounts?: SubAccountsResponseSubAccounts[];
}
