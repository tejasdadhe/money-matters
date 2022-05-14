import { stringIndexedObject } from "./CoreTypes";

export interface Evidence {
    data: string,
    link : string,
  }

export interface DeductionItem {
  section: string,
  isAvailed: boolean,
  evidence?: Evidence
}

export interface ExemptionItem {
  section: string,
  isAvailed: boolean,
  evidence?: Evidence
}

export interface UserData extends stringIndexedObject{
  firstName: string,
  middleName:string,
  lastName: string,
  parent? : UserData,
  identityNumber?: string,
  designation?: string,
}

export interface HRAdata extends stringIndexedObject, ExemptionItem {
  amount: number,
  landLordName: string,
  landLordAddress: string
  landLordIdentityNumber: string,
}

export interface LTAdata extends stringIndexedObject, ExemptionItem {
  amount: number,
}

export interface LoanData extends stringIndexedObject, DeductionItem {
  section: string,
  isAvailed: boolean,
  principal: number,
  interest: number,
  lenderName: string,
  lenderAddress: string,
  lenderIdentityNumber: string,
}

export interface Form12BBdata {
  financialYear: string,
  place: string,
  date: Date,
  user: UserData,
  declarations: {
    taxExemptions: {
      hra: HRAdata,
      lta: LTAdata
    },
    taxDeductions: {
      loans : Array<LoanData>
    }
  }
}