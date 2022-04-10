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
  investmentData: {
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
      //Interest on housing loan
      section_80_ee: {
        isClaimed: true,
        amount: "",
        lender: {
          name: "HDFC ltd",
          address:
            "HDFC House, H T Parekh Marg, 165-166,Backbay Reclamation, Churchgate,Mumbai - 400 020.",
          identityNumber: "AAACH0997E",
          financialInstitution: "",
          employer: "",
          others: "",
        },
        evidence: {
          label: "",
          url: "",
        },
      },

      //Interest on eduction loan
      section_80_e: {
        isClaimed: true,
        amount: "",
        lender: {
          name: "",
          address: "",
          identityNumber: "",
          financialInstitution: "",
          employer: "",
          others: "",
        },
        evidence: {
          label: "",
          url: "",
        },
      },

      //Interest on electric vehicle loan
      section_80_eeb: {
        isClaimed: true,
        amount: "",
        lender: {
          name: "",
          address: "",
          identityNumber: "",
          financialInstitution: "",
          employer: "",
          others: "",
        },
        evidence: {
          label: "",
          url: "",
        },
      },
    },
  },
};
