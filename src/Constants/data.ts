export const data = {
  financialYear: "2021-2022",
  place: "Nagpur",
  date: new Date(),
  user: {
    firstName: "",
    middleName: " ",
    lastName: "",
    designation: "",
    identityNumber: "",
    parent: {
      firstName: "",
      middleName: "",
      lastName: "",
    },
  },
  declarations: {
    taxExemptions: {
      // House rent Allowance
      section_80_gg: {
        amount: "",
        landLord: {
          name: "",
          address: "",
          identityNumber: "",
        },
        evidence: {
          label: "",
          url: "",
        },
      },
      //Leave and Travel Allowance
      section_10_5: {
        amount: "",
        evidence: {
          label: "",
          url: "",
        },
      },
    },
    taxDeductions: {
      loans : [],
    },
  },
};
