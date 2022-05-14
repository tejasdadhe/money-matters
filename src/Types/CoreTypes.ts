import { Evidence } from "./Form12bb.types";

export interface stringIndexedObject { 
  [id: string]: string | number | boolean | Evidence | stringIndexedObject | undefined,
}