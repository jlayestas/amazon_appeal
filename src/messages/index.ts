import type { Locale } from "@/i18n/routing";
import { messages as en } from "./en";
import { messages as es } from "./es";

export type { Messages } from "./en";

const messageMap = { en, es } as const;

export function getMessages(locale: Locale) {
  return messageMap[locale];
}
