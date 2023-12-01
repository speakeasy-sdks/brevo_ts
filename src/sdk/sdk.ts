/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as components from "../models/components";
import { Account } from "./account";
import { Companies } from "./companies";
import { Contacts } from "./contacts";
import { Conversations } from "./conversations";
import { Coupons } from "./coupons";
import { Deals } from "./deals";
import { Domains } from "./domains";
import { Ecommerce } from "./ecommerce";
import { EmailCampaigns } from "./emailcampaigns";
import { ExternalFeeds } from "./externalfeeds";
import { Files } from "./files";
import { InboundParsing } from "./inboundparsing";
import { MasterAccount } from "./masteraccount";
import { Notes } from "./notes";
import { Process } from "./process";
import { Reseller } from "./reseller";
import { Senders } from "./senders";
import { SMSCampaigns } from "./smscampaigns";
import { Tasks } from "./tasks";
import { TransactionalEmails } from "./transactionalemails";
import { TransactionalSMS } from "./transactionalsms";
import { TransactionalWhatsApp } from "./transactionalwhatsapp";
import { User } from "./user";
import { Webhooks } from "./webhooks";
import { WhatsAppCampaigns } from "./whatsappcampaigns";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://api.brevo.com/v3"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    apiKey?: string;

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: components.Security | (() => Promise<components.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "3.0.0";
    sdkVersion = "0.1.0";
    genVersion = "2.205.0";
    userAgent = "speakeasy-sdk/typescript 0.1.0 2.205.0 3.0.0 BREVO";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Brevo API: Brevo provide a RESTFul API that can be used with any languages. With this API, you will be able to :
 *
 * @remarks
 *   - Manage your campaigns and get the statistics
 *   - Manage your contacts
 *   - Send transactional Emails and SMS
 *   - and much more...
 *
 * You can download our wrappers at https://github.com/orgs/brevo
 *
 * **Possible responses**
 *   | Code | Message |
 *   | :-------------: | ------------- |
 *   | 200  | OK. Successful Request  |
 *   | 201  | OK. Successful Creation |
 *   | 202  | OK. Request accepted |
 *   | 204  | OK. Successful Update/Deletion  |
 *   | 400  | Error. Bad Request  |
 *   | 401  | Error. Authentication Needed  |
 *   | 402  | Error. Not enough credit, plan upgrade needed  |
 *   | 403  | Error. Permission denied  |
 *   | 404  | Error. Object does not exist |
 *   | 405  | Error. Method not allowed  |
 *   | 406  | Error. Not Acceptable  |
 *
 */
export class Brevo {
    public account: Account;
    public ecommerce: Ecommerce;
    public companies: Companies;
    public contacts: Contacts;
    public conversations: Conversations;
    public masterAccount: MasterAccount;
    public coupons: Coupons;
    public deals: Deals;
    public files: Files;
    public notes: Notes;
    public tasks: Tasks;
    public emailCampaigns: EmailCampaigns;
    public externalFeeds: ExternalFeeds;
    public inboundParsing: InboundParsing;
    public user: User;
    public process: Process;
    public reseller: Reseller;
    public senders: Senders;
    public domains: Domains;
    public smsCampaigns: SMSCampaigns;
    public transactionalEmails: TransactionalEmails;
    public transactionalSMS: TransactionalSMS;
    public webhooks: Webhooks;
    public transactionalWhatsApp: TransactionalWhatsApp;
    public whatsAppCampaigns: WhatsAppCampaigns;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: new components.Security({ apiKey: props?.apiKey }),

            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.account = new Account(this.sdkConfiguration);
        this.ecommerce = new Ecommerce(this.sdkConfiguration);
        this.companies = new Companies(this.sdkConfiguration);
        this.contacts = new Contacts(this.sdkConfiguration);
        this.conversations = new Conversations(this.sdkConfiguration);
        this.masterAccount = new MasterAccount(this.sdkConfiguration);
        this.coupons = new Coupons(this.sdkConfiguration);
        this.deals = new Deals(this.sdkConfiguration);
        this.files = new Files(this.sdkConfiguration);
        this.notes = new Notes(this.sdkConfiguration);
        this.tasks = new Tasks(this.sdkConfiguration);
        this.emailCampaigns = new EmailCampaigns(this.sdkConfiguration);
        this.externalFeeds = new ExternalFeeds(this.sdkConfiguration);
        this.inboundParsing = new InboundParsing(this.sdkConfiguration);
        this.user = new User(this.sdkConfiguration);
        this.process = new Process(this.sdkConfiguration);
        this.reseller = new Reseller(this.sdkConfiguration);
        this.senders = new Senders(this.sdkConfiguration);
        this.domains = new Domains(this.sdkConfiguration);
        this.smsCampaigns = new SMSCampaigns(this.sdkConfiguration);
        this.transactionalEmails = new TransactionalEmails(this.sdkConfiguration);
        this.transactionalSMS = new TransactionalSMS(this.sdkConfiguration);
        this.webhooks = new Webhooks(this.sdkConfiguration);
        this.transactionalWhatsApp = new TransactionalWhatsApp(this.sdkConfiguration);
        this.whatsAppCampaigns = new WhatsAppCampaigns(this.sdkConfiguration);
    }
}
