export const data = {
  financialYear: "2021-2022",
  place: "Nagpur",
  date: new Date(),
  user: {
    firstName: "Tejas",
    middleName: " Vilasrao",
    lastName: "Dadhe",
    designation: "Software Engineer",
    identityNumber: "123421",
    parent: {
      firstName: "Vilasrao",
      middleName: "Haribhau",
      lastName: "Dadhe",
    },
  },
  investmentData: {
    taxExemptions: {
      // House rent Allowance
      section_80_gg: {
        amount: 100000,
        landLord: {
          name: "John Doe",
          address: "D-205, NIT-Complex, Gurudev Nagar, Nandanwan, Nagpur",
          identityNumber: "BTAPD8008B",
        },
        evidence: {
          label: "",
          url: "",
        },
      },
      //Leave and Travel Allowance
      section_10_5: {
        amount: 10000,
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
        amount: 200000,
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
        amount: 200000,
        lender: {
          name: "HDFC ltd",
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
        amount: 200000,
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
