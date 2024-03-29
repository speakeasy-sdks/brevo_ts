/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDKOptions, serverURLFromOptions } from "../lib/config";
import { HTTPClient } from "../lib/http";
import { ClientSDK } from "../lib/sdks";
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

export class Brevo extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    private _account?: Account;
    get account() {
        return (this._account ??= new Account(this.options$));
    }

    private _ecommerce?: Ecommerce;
    get ecommerce() {
        return (this._ecommerce ??= new Ecommerce(this.options$));
    }

    private _companies?: Companies;
    get companies() {
        return (this._companies ??= new Companies(this.options$));
    }

    private _contacts?: Contacts;
    get contacts() {
        return (this._contacts ??= new Contacts(this.options$));
    }

    private _conversations?: Conversations;
    get conversations() {
        return (this._conversations ??= new Conversations(this.options$));
    }

    private _masterAccount?: MasterAccount;
    get masterAccount() {
        return (this._masterAccount ??= new MasterAccount(this.options$));
    }

    private _coupons?: Coupons;
    get coupons() {
        return (this._coupons ??= new Coupons(this.options$));
    }

    private _deals?: Deals;
    get deals() {
        return (this._deals ??= new Deals(this.options$));
    }

    private _files?: Files;
    get files() {
        return (this._files ??= new Files(this.options$));
    }

    private _notes?: Notes;
    get notes() {
        return (this._notes ??= new Notes(this.options$));
    }

    private _tasks?: Tasks;
    get tasks() {
        return (this._tasks ??= new Tasks(this.options$));
    }

    private _emailCampaigns?: EmailCampaigns;
    get emailCampaigns() {
        return (this._emailCampaigns ??= new EmailCampaigns(this.options$));
    }

    private _externalFeeds?: ExternalFeeds;
    get externalFeeds() {
        return (this._externalFeeds ??= new ExternalFeeds(this.options$));
    }

    private _inboundParsing?: InboundParsing;
    get inboundParsing() {
        return (this._inboundParsing ??= new InboundParsing(this.options$));
    }

    private _user?: User;
    get user() {
        return (this._user ??= new User(this.options$));
    }

    private _process?: Process;
    get process() {
        return (this._process ??= new Process(this.options$));
    }

    private _reseller?: Reseller;
    get reseller() {
        return (this._reseller ??= new Reseller(this.options$));
    }

    private _senders?: Senders;
    get senders() {
        return (this._senders ??= new Senders(this.options$));
    }

    private _domains?: Domains;
    get domains() {
        return (this._domains ??= new Domains(this.options$));
    }

    private _smsCampaigns?: SMSCampaigns;
    get smsCampaigns() {
        return (this._smsCampaigns ??= new SMSCampaigns(this.options$));
    }

    private _transactionalEmails?: TransactionalEmails;
    get transactionalEmails() {
        return (this._transactionalEmails ??= new TransactionalEmails(this.options$));
    }

    private _transactionalSMS?: TransactionalSMS;
    get transactionalSMS() {
        return (this._transactionalSMS ??= new TransactionalSMS(this.options$));
    }

    private _webhooks?: Webhooks;
    get webhooks() {
        return (this._webhooks ??= new Webhooks(this.options$));
    }

    private _transactionalWhatsApp?: TransactionalWhatsApp;
    get transactionalWhatsApp() {
        return (this._transactionalWhatsApp ??= new TransactionalWhatsApp(this.options$));
    }

    private _whatsAppCampaigns?: WhatsAppCampaigns;
    get whatsAppCampaigns() {
        return (this._whatsAppCampaigns ??= new WhatsAppCampaigns(this.options$));
    }
}
