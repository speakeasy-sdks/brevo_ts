/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose, Type } from "class-transformer";

export class V2 extends SpeakeasyBase {
    /**
     * API Key for version 2
     */
    @SpeakeasyMetadata()
    @Expose({ name: "key" })
    key: string;

    /**
     * Name of the key for version 2
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

export class V3 extends SpeakeasyBase {
    /**
     * API Key for version 3
     */
    @SpeakeasyMetadata()
    @Expose({ name: "key" })
    key: string;

    /**
     * Name of the key for version 3
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;
}

/**
 * API Keys associated to child account
 */
export class ApiKeys extends SpeakeasyBase {
    @SpeakeasyMetadata({ elemType: V2 })
    @Expose({ name: "v2" })
    @Type(() => V2)
    v2: V2[];

    @SpeakeasyMetadata({ elemType: V3 })
    @Expose({ name: "v3" })
    @Type(() => V3)
    v3?: V3[];
}

/**
 * Credits available for your child
 */
export class Credits extends SpeakeasyBase {
    /**
     * Email credits available for your child
     */
    @SpeakeasyMetadata()
    @Expose({ name: "emailCredits" })
    emailCredits?: number;

    /**
     * SMS credits available for your child
     */
    @SpeakeasyMetadata()
    @Expose({ name: "smsCredits" })
    smsCredits?: number;
}

/**
 * Statistics about your child account activity
 */
export class GetChildInfoStatistics extends SpeakeasyBase {
    /**
     * Overall emails sent for current month
     */
    @SpeakeasyMetadata()
    @Expose({ name: "currentMonthTotalSent" })
    currentMonthTotalSent?: number;

    /**
     * Overall emails sent for the previous month
     */
    @SpeakeasyMetadata()
    @Expose({ name: "previousMonthTotalSent" })
    previousMonthTotalSent?: number;

    /**
     * Overall emails sent for since the account exists
     */
    @SpeakeasyMetadata()
    @Expose({ name: "totalSent" })
    totalSent?: number;
}

export class GetChildInfo extends SpeakeasyBase {
    /**
     * API Keys associated to child account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "apiKeys" })
    @Type(() => ApiKeys)
    apiKeys?: ApiKeys;

    /**
     * Name of the company
     */
    @SpeakeasyMetadata()
    @Expose({ name: "companyName" })
    companyName: string;

    /**
     * Credits available for your child
     */
    @SpeakeasyMetadata()
    @Expose({ name: "credits" })
    @Type(() => Credits)
    credits?: Credits;

    /**
     * Login Email
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * First Name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "firstName" })
    firstName: string;

    /**
     * IP(s) associated to a child account user
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ips" })
    ips?: string[];

    /**
     * Last Name
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lastName" })
    lastName: string;

    /**
     * The encrypted password of child account
     */
    @SpeakeasyMetadata()
    @Expose({ name: "password" })
    password: string;

    /**
     * Statistics about your child account activity
     */
    @SpeakeasyMetadata()
    @Expose({ name: "statistics" })
    @Type(() => GetChildInfoStatistics)
    statistics?: GetChildInfoStatistics;
}