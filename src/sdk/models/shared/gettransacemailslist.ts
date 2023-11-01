/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

export class GetTransacEmailsListTransactionalEmails extends SpeakeasyBase {
    /**
     * Date on which transactional email was sent
     */
    @SpeakeasyMetadata()
    @Expose({ name: "date" })
    date: string;

    /**
     * Email address to which transactional email has been sent
     */
    @SpeakeasyMetadata()
    @Expose({ name: "email" })
    email: string;

    /**
     * Email address of the sender from which the email was sent
     */
    @SpeakeasyMetadata()
    @Expose({ name: "from" })
    from?: string;

    /**
     * Message Id of the sent email
     */
    @SpeakeasyMetadata()
    @Expose({ name: "messageId" })
    messageId: string;

    /**
     * Subject of the sent email
     */
    @SpeakeasyMetadata()
    @Expose({ name: "subject" })
    subject: string;

    /**
     * Tags used for your email
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tags" })
    tags?: string[];

    /**
     * Id of the template
     */
    @SpeakeasyMetadata()
    @Expose({ name: "templateId" })
    templateId?: number;

    /**
     * Unique id of the email sent to a particular contact
     */
    @SpeakeasyMetadata()
    @Expose({ name: "uuid" })
    uuid: string;
}

export class GetTransacEmailsList extends SpeakeasyBase {
    /**
     * Total number of transactional emails available on your account according to the passed filter
     */
    @SpeakeasyMetadata()
    @Expose({ name: "count" })
    count?: number;

    @SpeakeasyMetadata({ elemType: GetTransacEmailsListTransactionalEmails })
    @Expose({ name: "transactionalEmails" })
    @Type(() => GetTransacEmailsListTransactionalEmails)
    transactionalEmails?: GetTransacEmailsListTransactionalEmails[];
}
