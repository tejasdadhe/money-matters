import { PDFViewer } from "@react-pdf/renderer";
import React, { useState } from "react";
import { useEffect } from "react";
import Collapsible from "../Components/Collapsible";
import Form12BB from "../Components/Form12BB";
import { data } from "../Constants/data";
import { HRAdata, UserData } from "../Types/Form12bb.types";

const Form12bbGenerator = () => {

  const initialUserData: UserData = {
    fName: "", mName: "", lName: "", parentFname: "", parentMname: "", parentLname: "",
    identityNumber: "",
    designation: ""
  };

  const initialHRAdata: HRAdata = {
    amount: 0,
    landLordName: "",
    landLordAddress: "",
    landLordIdentityNumber: ""
  };



  const [formData, setData] = useState(data);
  const [fiscalYear, setFiscalYear] = useState("2022-2023");
  const [userData, setUserData] = useState<UserData>(initialUserData);
  const [hraData, setHraData] = useState<HRAdata>(initialHRAdata);



  useEffect(() => {
    setData((formData) => {
      return {
        ...formData,
        user: {
          firstName: userData.fName,
          middleName: userData.mName,
          lastName: userData.lName,
          designation: userData.designation,
          identityNumber: userData.identityNumber,
          parent: {
            firstName: userData.parentFname,
            middleName: userData.parentMname,
            lastName: userData.parentLname,
          },
        },
        investmentData: {
          ...formData.investmentData,
          taxExemptions: {
            ...formData.investmentData.taxExemptions,
            section_80_gg: {
              amount: hraData.amount.toString(),
              landLord: {
                name: hraData.landLordName,
                address: hraData.landLordAddress,
                identityNumber: hraData.landLordIdentityNumber,
              },
              evidence: {
                label: "",
                url: "",
              },
            }
          }
        }
      };
    });
  }, [userData, hraData]);
  
  const handleUserData = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    console.log("Current Target", name, value);
    setUserData((currentUserData) => {
      const newUserData: any = { ...currentUserData };
      newUserData[name] = value;
      return newUserData;
    });
  };

  const handleHRAdata = (e: React.FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    console.log("Current Target", name, value);
    setHraData((currentHraData) => {
      const newHraData: any = { ...currentHraData };
      newHraData[name] = value;
      return newHraData;
    });
  };

  return (
    <div className="w-100 h-100 d-flex form12bb-wrapper">
      <PDFViewer className="f-1">
        <Form12BB data={formData} />
      </PDFViewer>
      <div className="f-1 gap-1 p-1 d-flex flex-column">
        <Collapsible title="User Details" className="mt-2" >
          <div className="d-flex flex-column mt-2">
            <label>Name</label>
            <div className="d-flex gap-1">
              <input placeholder="First Name" className="f-1" value={userData.fName} name="fName" onChange={handleUserData}/>
              <input placeholder="Middle Name" className="f-1" value={userData.mName} name="mName" onChange={handleUserData}/>
              <input placeholder="Last Name" className="f-1" value={userData.lName} name="lName" onChange={handleUserData}/>
            </div>
          </div>
          <div className="d-flex flex-column mt-2">
            <label>Parent&apos;s Name</label>
            <div className="d-flex gap-1">
              <input placeholder="First Name" className="f-1" value={userData.parentFname} name="parentFname" onChange={handleUserData}/>
              <input placeholder="Middle Name" className="f-1" value={userData.parentMname} name="parentMname" onChange={handleUserData}/>
              <input placeholder="Last Name" className="f-1" value={userData.parentLname} name="parentLname" onChange={handleUserData}/>
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
      </div>
    </div>
  );
};

export default Form12bbGenerator;
