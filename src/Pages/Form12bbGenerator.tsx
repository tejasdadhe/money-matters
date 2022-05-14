import { PDFViewer } from "@react-pdf/renderer";
import React, { useState } from "react";
import { useEffect } from "react";
import Collapsible from "../Components/Collapsible";
import Form12BB from "../Components/Form12BB";
import {
  initialUserData,
  initialHRAdata,
  initialLTAData,
  initialHousingLoan,
  initialEducationLoan,
  initialElectricVehicleLoan,
  initialForm12BBData
} from "../Constants/InitialValues";
import { HRAdata, LoanData, LTAdata, UserData, Form12BBdata } from "../Types/Form12bb.types";

const Form12bbGenerator = () => {

  const [formData, setData] = useState<Form12BBdata>(initialForm12BBData);
  const [fiscalYear] = useState("2022-2023");
  const [userData, setUserData] = useState<UserData>(initialUserData);
  const [hraData, setHraData] = useState<HRAdata>(initialHRAdata);
  const [ltaData, setLtaData] = useState<LTAdata>(initialLTAData);
  const [housingLoanData, setHousingLoanData] = useState<LoanData>(initialHousingLoan);
  const [educatonLoanData, setEducationLoanData] = useState<LoanData>(initialEducationLoan);
  const [electricVehicleLoan, setElectricVehicleLoanData] = useState<LoanData>(initialElectricVehicleLoan);



  useEffect(() => {
    let loans = [housingLoanData];
    if (educatonLoanData.isAvailed) loans.push(educatonLoanData);
    if (electricVehicleLoan.isAvailed) loans.push(electricVehicleLoan);
    if (loans.length > 1) loans = loans.filter((item: LoanData) => item.isAvailed);
    
    setData(
      {
        financialYear: "2021-22",
        place: "Napur",
        date: new Date(),
        user: userData,
        declarations: {
          taxExemptions: {
            hra: hraData,
            lta: ltaData
          },
          taxDeductions: {
            loans,
          }
        }
      }
    );
  }, [userData, hraData, ltaData, housingLoanData, educatonLoanData, electricVehicleLoan]);
  

  useEffect(() => {
    console.log("Form Data", formData);
  }, [formData]);
  
  const handleUserData = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    setUserData((currentUserData) => {
      let name = target.name;
      let value : string | UserData = target.value;
      if (name === "parentFname") {
        name = "parent";
        value = {
          firstName: value,
          middleName: currentUserData.parent ? currentUserData.parent.middleName : "",
          lastName: currentUserData.parent ? currentUserData.parent.lastName : "",
        };
      } else if (name === "parentMname") {
        name = "parent";
        value = {
          firstName: currentUserData.parent ? currentUserData.parent.firstName : "",
          middleName: value,
          lastName: currentUserData.parent ? currentUserData.parent.lastName : "",
        };
      } else if (name === "parentLname") {
        name = "parent";
        value = {
          firstName: currentUserData.parent ? currentUserData.parent.firstName : "",
          middleName: currentUserData.parent ? currentUserData.parent.middleName : "",
          lastName: value,
        };
      }
      const newUserData: UserData = { ...currentUserData };
      newUserData[name] = value;
      return newUserData;
    });
  };

  const handleHRAdata = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    console.log("Current Target", name, value);
    setHraData((currentHraData) => {
      const newHraData: HRAdata = { ...currentHraData };
      newHraData[name] = value;
      return newHraData;
    });
  };

  const handleLtaData = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    console.log("Current Target", name, value);
    setLtaData((currentLtaData) => {
      const newLtaData: LTAdata = { ...currentLtaData };
      newLtaData[name] = value;
      return newLtaData;
    });
  };

  const handleHousingLoanData = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = (name === "isAvailed") ? (e.currentTarget.checked) : e.currentTarget.value;
    setHousingLoanData((currentHousingLoanData) => {
      const newHousingLoanData: LoanData = { ...currentHousingLoanData };
      newHousingLoanData[name] = value;
      return newHousingLoanData;
    });
  };

  const handleEducationLoanData = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = (name === "isAvailed") ? (e.currentTarget.checked) : e.currentTarget.value;
    setEducationLoanData((currentEducationLoanData) => {
      const newEducationLoanData: LoanData = { ...currentEducationLoanData };
      newEducationLoanData[name] = value;
      return newEducationLoanData;
    });
  };


  const handleElectricVehicleLoanData = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = (name === "isAvailed") ? (e.currentTarget.checked) : e.currentTarget.value;
    setElectricVehicleLoanData((currentElectricVehicleLoanData) => {
      const newElectricVehicleLoanData: LoanData = { ...currentElectricVehicleLoanData };
      newElectricVehicleLoanData[name] = value;
      return newElectricVehicleLoanData;
    });
  };

  return (
    <div className="w-100 h-100 d-flex form12bb-wrapper">
      <PDFViewer className="f-1">
        <Form12BB data={formData} />
      </PDFViewer>
      <div className="f-1 gap-1 p-1 d-flex flex-column overflow-auto">
        <Collapsible title="User Details" className="mt-2" >
          <div className="d-flex flex-column mt-2">
            <label>Name</label>
            <div className="d-flex gap-1">
              <input placeholder="First Name" className="f-1" value={userData.firstName} name="firstName" onChange={handleUserData}/>
              <input placeholder="Middle Name" className="f-1" value={userData.middleName} name="middleName" onChange={handleUserData}/>
              <input placeholder="Last Name" className="f-1" value={userData.lastName} name="lastName" onChange={handleUserData}/>
            </div>
          </div>
          <div className="d-flex flex-column mt-2">
            <label>Parent&apos;s Name</label>
            <div className="d-flex gap-1">
              <input placeholder="First Name" className="f-1" value={userData.parent?.firstName} name="parentFname" onChange={handleUserData}/>
              <input placeholder="Middle Name" className="f-1" value={userData.parent?.middleName} name="parentMname" onChange={handleUserData}/>
              <input placeholder="Last Name" className="f-1" value={userData.parent?.lastName} name="parentLname" onChange={handleUserData}/>
            </div>
          </div>
          <div className="d-flex gap-2 mt-2">
            <div className="d-flex flex-column f-1">
              <label>PAN / AADHAR number</label>
              <div className="d-flex gap-1">
                <input placeholder="ABC1234" className="f-1" value={userData.identityNumber} name="identityNumber" onChange={handleUserData}/>
              </div>
            </div>
            <div className="d-flex flex-column f-1">
              <label>Designation</label>
              <div className="d-flex gap-1">
                <input placeholder="Full stack developer" className="f-1" value={userData.designation} name="designation" onChange={handleUserData}/>
              </div>
            </div>
          </div>
          
        </Collapsible>
        <Collapsible className="mt-2" title="Home Rent Allowance (HRA)">
          <div className="d-flex flex-column mt-2">
            <label>Amount paid to land lord in the financial year { fiscalYear }</label>
            <input placeholder="1,00,000" className="f-1" value={hraData.amount} name="amount" onChange={handleHRAdata}/>
          </div>
          <div className="d-flex flex-column mt-2">
            <label>Name of the land lord</label>
            <input placeholder="John Doe" className="f-1" value={hraData.landLordName} name="landLordName" onChange={handleHRAdata}/>
          </div>
          <div className="d-flex flex-column mt-2">
            <label>Address of the land lord</label>
            <input placeholder="Address" className="f-1" value={hraData.landLordAddress} name="landLordAddress" onChange={handleHRAdata}/>
          </div>
          <div className="d-flex flex-column mt-2">
            <label>PAN or AADHAAR number of the land lord</label>
            <input placeholder="ABC1234" className="f-1" value={hraData.landLordIdentityNumber} name="landLordIdentityNumber" onChange={handleHRAdata}/>
          </div>
        </Collapsible>
        <Collapsible className="mt-2" title="Leave & Travel Allowance (LTA)">
          <div className="d-flex flex-column mt-2">
            <label>Amount</label>
            <input placeholder="40000" className="f-1" value={ltaData.amount} name="amount" onChange={handleLtaData}/>
          </div>
        </Collapsible>
        <Collapsible className="mt-2" title="Loans">
          <div className="d-flex flex-row justify-content-between align-items-center mt-3">
            <h5 className="mt-2 mb-0">Housing Loan</h5>
            <input type="checkbox" checked={housingLoanData.isAvailed} className="form-check-input mr-3" name="isAvailed" onChange={handleHousingLoanData}/>
          </div>      
          {housingLoanData.isAvailed ? (<><div className="d-flex gap-2">
            <div className="d-flex flex-column mt-2 f-1">
              <label>Principal Amount</label>
              <input placeholder="150000" className="f-1" value={housingLoanData.principal} name="principal" onChange={handleHousingLoanData} />
            </div>
            <div className="d-flex flex-column mt-2 f-1">
              <label>Interest Amount</label>
              <input placeholder="200000" className="f-1" value={housingLoanData.interest} name="interest" onChange={handleHousingLoanData} />
            </div>
          </div>
          <div className="d-flex flex-column mt-2">
            <label>Name of the lender.</label>
            <input placeholder="John Doe" className="f-1" value={housingLoanData.lenderName} name="lenderName" onChange={handleHousingLoanData} />
          </div><div className="d-flex flex-column mt-2">
            <label>Address of the lender.</label>
            <input className="f-1" value={housingLoanData.lenderAddress} name="lenderAddress" onChange={handleHousingLoanData} />
          </div><div className="d-flex flex-column mt-2">
            <label>PAN / AADHAAR number of the lender.</label>
            <input placeholder="ABC123" className="f-1" value={housingLoanData.lenderIdentityNumber} name="lenderIdentityNumber" onChange={handleHousingLoanData} />
          </div></>) : null}
          <hr className="mb-3"/>
          <div className="d-flex flex-row justify-content-between align-items-center mt-3">
            <h5 className="mb-0">Education Loan</h5>
            <input type="checkbox" className="form-check-input mr-3" name="isAvailed" onChange={handleEducationLoanData}/>
          </div>
          {
            educatonLoanData.isAvailed ? (<>
              <div className="d-flex gap-2">
                <div className="d-flex flex-column mt-2 f-1">
                  <label>Principal Amount</label>
                  <input placeholder="150000" className="f-1" value={educatonLoanData.principal} name="principal" onChange={handleEducationLoanData} />
                </div>
                <div className="d-flex flex-column mt-2 f-1">
                  <label>Interest Amount</label>
                  <input placeholder="200000" className="f-1" value={educatonLoanData.interest} name="interest" onChange={handleEducationLoanData} />
                </div>
              </div><div className="d-flex flex-column mt-2">
                <label>Name of the lender.</label>
                <input placeholder="John Doe" className="f-1" value={educatonLoanData.lenderName} name="lenderName" onChange={handleEducationLoanData} />
              </div><div className="d-flex flex-column mt-2">
                <label>Address of the lender.</label>
                <input className="f-1" value={educatonLoanData.lenderAddress} name="lenderAddress" onChange={handleEducationLoanData} />
              </div><div className="d-flex flex-column mt-2">
                <label>PAN / AADHAAR number of the lender.</label>
                <input placeholder="ABC123" className="f-1" value={educatonLoanData.lenderIdentityNumber} name="lenderIdentityNumber" onChange={handleEducationLoanData} />
              </div>
            </>) : null}
          
          
          <hr className="mb-3" />
          <div className="d-flex flex-row justify-content-between align-items-center mt-3">
            <h5 className="mb-0">Electric Vehicle Loan</h5>
            <input type="checkbox" className="form-check-input mr-3" name="isAvailed" onChange={handleElectricVehicleLoanData}/>
          </div>
          {
            electricVehicleLoan.isAvailed ? (
              <><div className="d-flex gap-2">
                <div className="d-flex flex-column mt-2 f-1">
                  <label>Principal Amount</label>
                  <input placeholder="150000" className="f-1" value={electricVehicleLoan.principal} name="principal" onChange={handleElectricVehicleLoanData} />
                </div>
                <div className="d-flex flex-column mt-2 f-1">
                  <label>Interest Amount</label>
                  <input placeholder="200000" className="f-1" value={electricVehicleLoan.interest} name="interest" onChange={handleElectricVehicleLoanData} />
                </div>
              </div><div className="d-flex flex-column mt-2">
                <label>Name of the lender.</label>
                <input placeholder="John Doe" className="f-1" value={electricVehicleLoan.lenderName} name="lenderName" onChange={handleElectricVehicleLoanData} />
              </div><div className="d-flex flex-column mt-2">
                <label>Address of the lender.</label>
                <input className="f-1" value={electricVehicleLoan.lenderAddress} name="lenderAddress" onChange={handleElectricVehicleLoanData} />
              </div><div className="d-flex flex-column mt-2">
                <label>PAN / AADHAAR number of the lender.</label>
                <input placeholder="ABC123" className="f-1" value={electricVehicleLoan.lenderIdentityNumber} name="lenderIdentityNumber" onChange={handleElectricVehicleLoanData} />
              </div></>) : (<></>)
          }
        </Collapsible>
      </div>
    </div>
  );
};

export default Form12bbGenerator;
