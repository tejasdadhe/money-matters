import { Form12BBdata, HRAdata, LoanData, LTAdata, UserData } from "../Types/Form12bb.types";

export const initialUserData: UserData = {
  firstName: "",
  middleName: "",
  lastName: "",
  parent: {
    firstName: "",
    middleName: "",
    lastName: "",
  },
  identityNumber: "",
  designation: ""
};

export const initialHRAdata: HRAdata = {
  section: "Section 10(13A)",
  isAvailed: false,
  amount: 0,
  landLordName: "",
  landLordAddress: "",
  landLordIdentityNumber: ""
};

export const initialLTAData: LTAdata = {
  section: "Section 10(5)",
  isAvailed: false,
  amount: 0,
};  

export const initialHousingLoan: LoanData = {
  section: "24 B",
  isAvailed: false,
  principal: 0,
  interest: 0,
  lenderName: "",
  lenderAddress: "",
  lenderIdentityNumber: ""
};

export const initialEducationLoan: LoanData = {
  section: "80 E",
  isAvailed: false,
  principal: 0,
  interest: 0,
  lenderName: "",
  lenderAddress: "",
  lenderIdentityNumber: ""
}; 


export const initialElectricVehicleLoan: LoanData = {
  section: "80 EEB",
  isAvailed: false,
  principal: 0,
  interest: 0,
  lenderName: "",
  lenderAddress: "",
  lenderIdentityNumber: ""
}; 

export const initialForm12BBData: Form12BBdata = {
  financialYear: "",
  place: "",
  date: new Date(),
  user: initialUserData,
  declarations: {
    taxExemptions: {
      hra: initialHRAdata,
      lta: initialLTAData,
    },
    taxDeductions: {
      loans: [initialHousingLoan]
    }
  }
};

