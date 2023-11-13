/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Order } from "./order";
import { Expose, Type } from "class-transformer";

export class OrderBatch extends SpeakeasyBase {
    /**
     * Notify Url provided by client to get the status of batch request
     */
    @SpeakeasyMetadata()
    @Expose({ name: "notifyUrl" })
    notifyUrl?: string;

    /**
     * array of order objects
     */
    @SpeakeasyMetadata({ elemType: Order })
    @Expose({ name: "orders" })
    @Type(() => Order)
    orders: Order[];
}
