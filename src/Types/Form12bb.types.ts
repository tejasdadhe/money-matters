import { stringIndexedObject } from "./CoreTypes";

export interface UserData extends stringIndexedObject{
  fName: string,
  mName:string,
  lName: string,
  parentFname: string,
  parentMname: string,
  parentLname: string,
  identityNumber: string,
  designation: string,
}

export interface HRAdata extends stringIndexedObject {
  amount: number,
  landLordName: string,
  landLordAddress: string
  landLordIdentityNumber: string,
}

export interface LTAdata extends stringIndexedObject {
  amount: number,
}

export interface LoanData extends stringIndexedObject {
  section: string,
  isAvailed: boolean,
  principal: number,
  interest: number,
  lenderName: string,
  lenderAddress: string,
  lenderIdentityNumber: string,
}