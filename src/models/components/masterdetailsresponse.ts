/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Billing address of master account
 */
export type MasterDetailsResponseAddress = {
    /**
     * Country code
     */
    countryCode?: string | undefined;
    /**
     * Locality
     */
    locality?: string | undefined;
    /**
     * Postal code
     */
    postalCode?: string | undefined;
    /**
     * State code
     */
    stateCode?: string | undefined;
    /**
     * Street address
     */
    streetAddress?: string | undefined;
};

/**
 * Billing name of master account holder
 */
export type Name = {
    /**
     * Last name for billing
     */
    familyName?: string | undefined;
    /**
     * First name for billing
     */
    givenName?: string | undefined;
};

/**
 * Billing details of the master account organization
 */
export type BillingInfo = {
    /**
     * Billing address of master account
     */
    address?: MasterDetailsResponseAddress | undefined;
    /**
     * Company name of master account
     */
    companyName?: string | undefined;
    /**
     * Billing email id of master account
     */
    email?: string | undefined;
    /**
     * Billing name of master account holder
     */
    name?: Name | undefined;
};

export type MasterDetailsResponseFeatures = {
    /**
     * Name of the feature
     */
    name?: string | undefined;
    /**
     * Quantity provided in the plan
     */
    quantity?: number | undefined;
    /**
     * Quantity remaining in the plan
     */
    remaining?: number | undefined;
    /**
     * Unit value of the feature
     */
    unitValue?: string | undefined;
    /**
     * Quantity consumed by master
     */
    used?: number | undefined;
};

/**
 * Plan period type
 */
export enum PlanPeriod {
    Month = "month",
    Year = "year",
}

/**
 * Plan details
 */
export type PlanInfo = {
    /**
     * Plan currency
     */
    currencyCode?: string | undefined;
    /**
     * List of provided features in the plan
     */
    features?: Array<MasterDetailsResponseFeatures> | undefined;
    /**
     * Timestamp of next billing date
     */
    nextBillingAt?: number | undefined;
    /**
     * Plan period type
     */
    planPeriod?: PlanPeriod | undefined;
    /**
     * Plan amount
     */
    price?: number | undefined;
    /**
     * Number of sub-accounts
     */
    subAccounts?: number | undefined;
};

export type MasterDetailsResponse = {
    /**
     * Billing details of the master account organization
     */
    billingInfo?: BillingInfo | undefined;
    /**
     * Company name of master account organization
     */
    companyName?: string | undefined;
    /**
     * Currency code of the master account organization
     */
    currencyCode?: string | undefined;
    /**
     * Email id of master account
     */
    email?: string | undefined;
    /**
     * Unique identifier of the master account organization
     */
    id?: number | undefined;
    /**
     * Plan details
     */
    planInfo?: PlanInfo | undefined;
    /**
     * Timezone of the master account organization
     */
    timezone?: string | undefined;
};

/** @internal */
export namespace MasterDetailsResponseAddress$ {
    export type Inbound = {
        countryCode?: string | undefined;
        locality?: string | undefined;
        postalCode?: string | undefined;
        stateCode?: string | undefined;
        streetAddress?: string | undefined;
    };

    export const inboundSchema: z.ZodType<MasterDetailsResponseAddress, z.ZodTypeDef, Inbound> = z
        .object({
            countryCode: z.string().optional(),
            locality: z.string().optional(),
            postalCode: z.string().optional(),
            stateCode: z.string().optional(),
            streetAddress: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.countryCode === undefined ? null : { countryCode: v.countryCode }),
                ...(v.locality === undefined ? null : { locality: v.locality }),
                ...(v.postalCode === undefined ? null : { postalCode: v.postalCode }),
                ...(v.stateCode === undefined ? null : { stateCode: v.stateCode }),
                ...(v.streetAddress === undefined ? null : { streetAddress: v.streetAddress }),
            };
        });

    export type Outbound = {
        countryCode?: string | undefined;
        locality?: string | undefined;
        postalCode?: string | undefined;
        stateCode?: string | undefined;
        streetAddress?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MasterDetailsResponseAddress> = z
        .object({
            countryCode: z.string().optional(),
            locality: z.string().optional(),
            postalCode: z.string().optional(),
            stateCode: z.string().optional(),
            streetAddress: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.countryCode === undefined ? null : { countryCode: v.countryCode }),
                ...(v.locality === undefined ? null : { locality: v.locality }),
                ...(v.postalCode === undefined ? null : { postalCode: v.postalCode }),
                ...(v.stateCode === undefined ? null : { stateCode: v.stateCode }),
                ...(v.streetAddress === undefined ? null : { streetAddress: v.streetAddress }),
            };
        });
}

/** @internal */
export namespace Name$ {
    export type Inbound = {
        familyName?: string | undefined;
        givenName?: string | undefined;
    };

    export const inboundSchema: z.ZodType<Name, z.ZodTypeDef, Inbound> = z
        .object({
            familyName: z.string().optional(),
            givenName: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.familyName === undefined ? null : { familyName: v.familyName }),
                ...(v.givenName === undefined ? null : { givenName: v.givenName }),
            };
        });

    export type Outbound = {
        familyName?: string | undefined;
        givenName?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Name> = z
        .object({
            familyName: z.string().optional(),
            givenName: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.familyName === undefined ? null : { familyName: v.familyName }),
                ...(v.givenName === undefined ? null : { givenName: v.givenName }),
            };
        });
}

/** @internal */
export namespace BillingInfo$ {
    export type Inbound = {
        address?: MasterDetailsResponseAddress$.Inbound | undefined;
        companyName?: string | undefined;
        email?: string | undefined;
        name?: Name$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<BillingInfo, z.ZodTypeDef, Inbound> = z
        .object({
            address: z.lazy(() => MasterDetailsResponseAddress$.inboundSchema).optional(),
            companyName: z.string().optional(),
            email: z.string().optional(),
            name: z.lazy(() => Name$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.companyName === undefined ? null : { companyName: v.companyName }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        address?: MasterDetailsResponseAddress$.Outbound | undefined;
        companyName?: string | undefined;
        email?: string | undefined;
        name?: Name$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BillingInfo> = z
        .object({
            address: z.lazy(() => MasterDetailsResponseAddress$.outboundSchema).optional(),
            companyName: z.string().optional(),
            email: z.string().optional(),
            name: z.lazy(() => Name$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.address === undefined ? null : { address: v.address }),
                ...(v.companyName === undefined ? null : { companyName: v.companyName }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}

/** @internal */
export namespace MasterDetailsResponseFeatures$ {
    export type Inbound = {
        name?: string | undefined;
        quantity?: number | undefined;
        remaining?: number | undefined;
        unitValue?: string | undefined;
        used?: number | undefined;
    };

    export const inboundSchema: z.ZodType<MasterDetailsResponseFeatures, z.ZodTypeDef, Inbound> = z
        .object({
            name: z.string().optional(),
            quantity: z.number().int().optional(),
            remaining: z.number().int().optional(),
            unitValue: z.string().optional(),
            used: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.quantity === undefined ? null : { quantity: v.quantity }),
                ...(v.remaining === undefined ? null : { remaining: v.remaining }),
                ...(v.unitValue === undefined ? null : { unitValue: v.unitValue }),
                ...(v.used === undefined ? null : { used: v.used }),
            };
        });

    export type Outbound = {
        name?: string | undefined;
        quantity?: number | undefined;
        remaining?: number | undefined;
        unitValue?: string | undefined;
        used?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MasterDetailsResponseFeatures> =
        z
            .object({
                name: z.string().optional(),
                quantity: z.number().int().optional(),
                remaining: z.number().int().optional(),
                unitValue: z.string().optional(),
                used: z.number().int().optional(),
            })
            .transform((v) => {
                return {
                    ...(v.name === undefined ? null : { name: v.name }),
                    ...(v.quantity === undefined ? null : { quantity: v.quantity }),
                    ...(v.remaining === undefined ? null : { remaining: v.remaining }),
                    ...(v.unitValue === undefined ? null : { unitValue: v.unitValue }),
                    ...(v.used === undefined ? null : { used: v.used }),
                };
            });
}

/** @internal */
export const PlanPeriod$ = z.nativeEnum(PlanPeriod);

/** @internal */
export namespace PlanInfo$ {
    export type Inbound = {
        currencyCode?: string | undefined;
        features?: Array<MasterDetailsResponseFeatures$.Inbound> | undefined;
        nextBillingAt?: number | undefined;
        planPeriod?: PlanPeriod | undefined;
        price?: number | undefined;
        subAccounts?: number | undefined;
    };

    export const inboundSchema: z.ZodType<PlanInfo, z.ZodTypeDef, Inbound> = z
        .object({
            currencyCode: z.string().optional(),
            features: z
                .array(z.lazy(() => MasterDetailsResponseFeatures$.inboundSchema))
                .optional(),
            nextBillingAt: z.number().int().optional(),
            planPeriod: PlanPeriod$.optional(),
            price: z.number().optional(),
            subAccounts: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.currencyCode === undefined ? null : { currencyCode: v.currencyCode }),
                ...(v.features === undefined ? null : { features: v.features }),
                ...(v.nextBillingAt === undefined ? null : { nextBillingAt: v.nextBillingAt }),
                ...(v.planPeriod === undefined ? null : { planPeriod: v.planPeriod }),
                ...(v.price === undefined ? null : { price: v.price }),
                ...(v.subAccounts === undefined ? null : { subAccounts: v.subAccounts }),
            };
        });

    export type Outbound = {
        currencyCode?: string | undefined;
        features?: Array<MasterDetailsResponseFeatures$.Outbound> | undefined;
        nextBillingAt?: number | undefined;
        planPeriod?: PlanPeriod | undefined;
        price?: number | undefined;
        subAccounts?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PlanInfo> = z
        .object({
            currencyCode: z.string().optional(),
            features: z
                .array(z.lazy(() => MasterDetailsResponseFeatures$.outboundSchema))
                .optional(),
            nextBillingAt: z.number().int().optional(),
            planPeriod: PlanPeriod$.optional(),
            price: z.number().optional(),
            subAccounts: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.currencyCode === undefined ? null : { currencyCode: v.currencyCode }),
                ...(v.features === undefined ? null : { features: v.features }),
                ...(v.nextBillingAt === undefined ? null : { nextBillingAt: v.nextBillingAt }),
                ...(v.planPeriod === undefined ? null : { planPeriod: v.planPeriod }),
                ...(v.price === undefined ? null : { price: v.price }),
                ...(v.subAccounts === undefined ? null : { subAccounts: v.subAccounts }),
            };
        });
}

/** @internal */
export namespace MasterDetailsResponse$ {
    export type Inbound = {
        billingInfo?: BillingInfo$.Inbound | undefined;
        companyName?: string | undefined;
        currencyCode?: string | undefined;
        email?: string | undefined;
        id?: number | undefined;
        planInfo?: PlanInfo$.Inbound | undefined;
        timezone?: string | undefined;
    };

    export const inboundSchema: z.ZodType<MasterDetailsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            billingInfo: z.lazy(() => BillingInfo$.inboundSchema).optional(),
            companyName: z.string().optional(),
            currencyCode: z.string().optional(),
            email: z.string().optional(),
            id: z.number().int().optional(),
            planInfo: z.lazy(() => PlanInfo$.inboundSchema).optional(),
            timezone: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.billingInfo === undefined ? null : { billingInfo: v.billingInfo }),
                ...(v.companyName === undefined ? null : { companyName: v.companyName }),
                ...(v.currencyCode === undefined ? null : { currencyCode: v.currencyCode }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.planInfo === undefined ? null : { planInfo: v.planInfo }),
                ...(v.timezone === undefined ? null : { timezone: v.timezone }),
            };
        });

    export type Outbound = {
        billingInfo?: BillingInfo$.Outbound | undefined;
        companyName?: string | undefined;
        currencyCode?: string | undefined;
        email?: string | undefined;
        id?: number | undefined;
        planInfo?: PlanInfo$.Outbound | undefined;
        timezone?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MasterDetailsResponse> = z
        .object({
            billingInfo: z.lazy(() => BillingInfo$.outboundSchema).optional(),
            companyName: z.string().optional(),
            currencyCode: z.string().optional(),
            email: z.string().optional(),
            id: z.number().int().optional(),
            planInfo: z.lazy(() => PlanInfo$.outboundSchema).optional(),
            timezone: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.billingInfo === undefined ? null : { billingInfo: v.billingInfo }),
                ...(v.companyName === undefined ? null : { companyName: v.companyName }),
                ...(v.currencyCode === undefined ? null : { currencyCode: v.currencyCode }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.planInfo === undefined ? null : { planInfo: v.planInfo }),
                ...(v.timezone === undefined ? null : { timezone: v.timezone }),
            };
        });
}
