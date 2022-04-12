export interface UserData {
  fName: string,
  mName:string,
  lName: string,
  parentFname: string,
  parentMname: string,
  parentLname: string,
  identityNumber: string,
  designation: string,
}

export interface HRAdata {
  amount: number,
  landLordName: string,
  landLordAddress: string
  landLordIdentityNumber: string,
}

export interface LTAdata {
  amount: number,
}