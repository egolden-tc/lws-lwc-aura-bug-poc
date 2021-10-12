import { LightningElement } from "lwc";
import {
  publish,
  MessageContext,
  subscribe,
  unsubscribe,
  APPLICATION_SCOPE,
} from "lightning/messageService";
import actionChannel from "@salesforce/messageChannel/ActionChannel__c";

export default class SampleComponent extends LightningElement {}
