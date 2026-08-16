import type { ReactNode } from "react";

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface BusinessTypeItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface UpdatePanelItem {
  title: string;
  detail: string;
  statusText: string;
  isPending?: boolean;
}

export interface ChatMessage {
  id: string;
  type: "in" | "out";
  text: string;
}
