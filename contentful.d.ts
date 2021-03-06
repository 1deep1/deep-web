// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface ICardFields {
  /** Поинт */
  point?: string | undefined;

  /** date */
  date?: string | undefined;

  /** text */
  text?: string | undefined;
}

export interface ICard extends Entry<ICardFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "card";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IWorksFields {
  /** name */
  name?: string | undefined;

  /** app */
  app?: string | undefined;

  /** small-text */
  smallText?: string | undefined;

  /** description */
  description?: Document | undefined;

  /** slug */
  slug?: string | undefined;

  /** image */
  image?: Asset | undefined;

  /** screen */
  screen?: Asset[] | undefined;
}

export interface IWorks extends Entry<IWorksFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "works";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "card" | "works";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
