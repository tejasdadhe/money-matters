import { PDFViewer } from "@react-pdf/renderer";
import React, { useState } from "react";
import { useEffect } from "react";
import Collapsible from "../Components/Collapsible";
import Form12BB from "../Components/Form12BB";
import { data } from "../Constants/data";
import { UserData } from "../Types/User.types";

const Form12bbGenerator = () => {

  const initialUserData: UserData = {
    fName: "", mName: "", lName: "", parentFname: "", parentMname: "", parentLname: "",
    identityNumber: "",
    designation: ""
  };

  const [formData, setData] = useState(data);
  const [userData, setUserData] = useState<UserData>(initialUserData);



  useEffect(() => {
    setData((formData) => { return {...formData,user: {
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
    }
    };
    });
  }, [userData]);
  
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
        <Collapsible className="mt-2" title="Financial Details">
          User details goes in here
        </Collapsible>
      </div>
    </div>
  );
};

export default Form12bbGenerator;
