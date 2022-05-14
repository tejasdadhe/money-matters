import React from "react";
import { Font, Page, View, Text, Document } from "@react-pdf/renderer";
import { styles } from "../styles";

import times from "../Assets/Fonts/times.ttf";
import timesBold from "../Assets/Fonts/times-bold.ttf";
import timesItalic from "../Assets/Fonts/times-italic.ttf";
import timesBoldItalic from "../Assets/Fonts/times-bold-italic.ttf";
import { Form12BBdata, LoanData, UserData } from "../Types/Form12bb.types";
import { Column, Row, ListItem, Bold, Italic, StyledText, HorizontleRule, } from "./ReactPDF";


Font.register({ family: "Times", src: times });
Font.register({ family: "TimesBold", src: timesBold });
Font.register({ family: "TimesItalic", src: timesItalic });
Font.register({ family: "TimesBoldItalic", src: timesBoldItalic });

const colSpan1 = 1;
const colSpan2 = 6;
const colSpan3 = 2;
const colSpan4 = 3;

// Create Document Component
const Form12BB = ({ data }:{data:Form12BBdata}) => {
  console.log("Data", data);
  const loans = data.declarations.taxDeductions.loans;
  const user: UserData  = data.user;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>FORM NO. 12BB</Text>
          <Text style={styles.subHeading}>
            [<Text style={styles.subHeadingItalic}>See</Text> rule 26C]
          </Text>
          <Text style={styles.titleBold}>
            Statement showing particulars of claims by an employee for deduction
            of tax under section 192
          </Text>
          <View style={styles.useDetail}>
            <Text style={styles.useDetailItem}>
              <Text style={styles.titleBullet}>1. &nbsp;</Text>
              Name and address of the employee:
              <Text style={styles.userData}>
                {`  ${user.firstName} ${user.middleName} ${user.lastName}  `}
              </Text>
            </Text>
          </View>
          <View style={styles.useDetail}>
            <Text style={styles.useDetailItem}>
              <Text style={styles.titleBullet}>2. &nbsp;</Text>[
              <Text style={styles.subHeadingItalic}>
                Permanent Account Number or Aadhaar Number
              </Text>
              ] of the employee:
              <Text
                style={styles.userData}
              >{` ${data.user.identityNumber}  `}</Text>
            </Text>
          </View>
          <View style={styles.useDetail}>
            <Text style={styles.useDetailItem}>
              <Text style={styles.titleBullet}>3. &nbsp;</Text>
              Financial year:{" "}
              <Text style={styles.userData}>{data.financialYear}</Text>
            </Text>
          </View>
          <View style={{ ...styles.mt1 }}>
            <Row>
              <Column colSpan={colSpan1} bold center>
                DETAILS OF CLAIMS AND EVIDENCE THEREOF
              </Column>
            </Row>

            <Row>
              <Column colSpan={colSpan1} center>
                Sl. No
              </Column>
              <Column colSpan={colSpan2} center>
                Nature of claim
              </Column>
              <Column colSpan={colSpan3} center>
                Amount (Rs.)
              </Column>
              <Column colSpan={colSpan4} center>
                Evidence/particulars
              </Column>
            </Row>

            <Row>
              <Column colSpan={colSpan1} center italic>
                (1)
              </Column>
              <Column colSpan={colSpan2} center italic>
                (2)
              </Column>
              <Column colSpan={colSpan3} center italic>
                (3)
              </Column>
              <Column colSpan={colSpan4} center italic>
                (4)
              </Column>
            </Row>

            <Row>
              <Column colSpan={colSpan1} center>
                1
              </Column>
              <Column colSpan={colSpan2}>House Rent Allowance:</Column>
              <Column colSpan={colSpan3}></Column>
              <Column colSpan={colSpan4}></Column>
            </Row>
            <Row transparent>
              <Column colSpan={colSpan1}></Column>
              <Column colSpan={colSpan2} withoutText>
                <ListItem index={1} type="i">
                  Rent paid to the landlord
                </ListItem>
              </Column>
              <Column colSpan={colSpan3}>
                Rs. {data.declarations.taxExemptions.hra.amount}
              </Column>
              <Column colSpan={colSpan4}></Column>
            </Row>
            <Row transparent>
              <Column colSpan={colSpan1}></Column>
              <Column colSpan={colSpan2} withoutText>
                <ListItem index={2} type="i">
                  Name of the landlord
                </ListItem>
              </Column>
              <Column colSpan={colSpan3}></Column>
              <Column colSpan={colSpan4}>
                {data.declarations.taxExemptions.hra.landLordName}
              </Column>
            </Row>
            <Row transparent>
              <Column colSpan={colSpan1}></Column>
              <Column colSpan={colSpan2} withoutText>
                <ListItem index={3} type="i">
                  Address of the landlord
                </ListItem>
              </Column>
              <Column colSpan={colSpan3}></Column>
              <Column colSpan={colSpan4}>
                {
                  data.declarations.taxExemptions.hra.landLordAddress
                }
              </Column>
            </Row>
            <Row transparent>
              <Column colSpan={colSpan1}></Column>
              <Column colSpan={colSpan2} withoutText>
                <ListItem index={4} type="i">
                  [<Italic>Permanent Account Number or Aadhaar Number</Italic>]
                  of the landlord
                </ListItem>
              </Column>
              <Column colSpan={colSpan3}></Column>
              <Column colSpan={colSpan4}>
                {
                  data.declarations.taxExemptions.hra.landLordIdentityNumber
                }
              </Column>
            </Row>
            <Row transparent>
              <Column colSpan={colSpan1}></Column>
              <Column colSpan={colSpan2}>
                <Text style={{ ...styles.ml1 }}>
                  <Text>
                    <Bold>Note : </Bold>[
                    <Italic>Permanent Account Number or Aadhaar Number</Italic>]
                    shall be furnished if the aggregate rent paid during the
                    previous year exceeds one lakh rupees
                  </Text>
                </Text>
              </Column>
              <Column colSpan={colSpan3}></Column>
              <Column colSpan={colSpan4}></Column>
            </Row>

            {/* Leave and Travel allowance */}

            <Row>
              <Column colSpan={colSpan1} center>
                2
              </Column>
              <Column colSpan={colSpan2}>
                Leave travel concessions or assistance
              </Column>
              <Column colSpan={colSpan3}>
                Rs. {data.declarations.taxExemptions.lta.amount}
              </Column>
              <Column colSpan={colSpan4}>Proof</Column>
            </Row>

            {/* Interests on home loan, education loan, Electric vehicle loan, etc */}

            <Row>
              <Column colSpan={colSpan1} center>
                3
              </Column>
              <Column colSpan={colSpan2}>
                Deduction of interest on borrowing:
              </Column>
              <Column colSpan={colSpan3}></Column>
              <Column colSpan={colSpan4}></Column>
            </Row>
            {loans.length > 0 ? loans.map((item : LoanData, index) => <>
              <Row transparent key={index}>
                <Column colSpan={colSpan1}></Column>
                <Column colSpan={colSpan2} withoutText>
                  <HorizontleRule />
                  <ListItem index={1} type="i">
                  Interest payable/paid to the lender
                  </ListItem>
                </Column>
                <Column colSpan={colSpan3}>
                Rs. {item.interest}
                </Column>
                <Column colSpan={colSpan4}></Column>
              </Row>
              <Row transparent>
                <Column colSpan={colSpan1}></Column>
                <Column colSpan={colSpan2} withoutText>
                  <ListItem index={2} type="i">
                  Name of the lender
                  </ListItem>
                </Column>
                <Column colSpan={colSpan3}></Column>
                <Column colSpan={colSpan4}>
                  {item.lenderName}
                </Column>
              </Row>
              <Row transparent>
                <Column colSpan={colSpan1}></Column>
                <Column colSpan={colSpan2} withoutText>
                  <ListItem index={3} type="i">
                  Address of the lender
                  </ListItem>
                </Column>
                <Column colSpan={colSpan3}></Column>
                <Column colSpan={colSpan4}>
                  {item.lenderAddress}
                </Column>
              </Row>
              <Row transparent>
                <Column colSpan={colSpan1}></Column>
                <Column colSpan={colSpan2} withoutText>
                  <ListItem index={4} type="i">
                    <StyledText style={{ ...styles.ml1 }}>
                    [
                      <Text style={{ ...styles.italics }}>
                      Permanent Account Number or Aadhaar Number
                      </Text>
                    ] of the lender
                    </StyledText>
                  </ListItem>
                </Column>
                <Column colSpan={colSpan3}></Column>
                <Column colSpan={colSpan4}>
                  {
                    item.lenderIdentityNumber
                  }
                </Column>
              </Row>

              <Row transparent>
                <Column colSpan={colSpan1}></Column>
                <Column colSpan={colSpan2} withoutText>
                  <ListItem index={1} type="a" level={2}>
                  Financial Institutions (if available)
                  </ListItem>
                </Column>
                <Column colSpan={colSpan3}></Column>
                <Column colSpan={colSpan4}></Column>
              </Row>

              <Row transparent>
                <Column colSpan={colSpan1}></Column>
                <Column colSpan={colSpan2} withoutText>
                  <ListItem index={2} type="a" level={2}>
                  Employer (if available)
                  </ListItem>
                </Column>
                <Column colSpan={colSpan3}></Column>
                <Column colSpan={colSpan4}></Column>
              </Row>

              <Row transparent>
                <Column colSpan={colSpan1}></Column>
                <Column colSpan={colSpan2} withoutText>
                  <ListItem index={3} type="a" level={2}>
                  Others
                  </ListItem>
                </Column>
                <Column colSpan={colSpan3}></Column>
                <Column colSpan={colSpan4}></Column>
              </Row>
            </>) : (<>
              <Row transparent>
                <Column colSpan={colSpan1}></Column>
                <Column colSpan={colSpan2} withoutText>
                  <ListItem index={1} type="i">
                  Interest payable/paid to the lender
                  </ListItem>
                </Column>
                <Column colSpan={colSpan3}>
                Rs. 0
                </Column>
                <Column colSpan={colSpan4}></Column>
              </Row>
              <Row transparent>
                <Column colSpan={colSpan1}></Column>
                <Column colSpan={colSpan2} withoutText>
                  <ListItem index={2} type="i">
                  Name of the lender
                  </ListItem>
                </Column>
                <Column colSpan={colSpan3}></Column>
                <Column colSpan={colSpan4}>
                  
                </Column>
              </Row>
              <Row transparent>
                <Column colSpan={colSpan1}></Column>
                <Column colSpan={colSpan2} withoutText>
                  <ListItem index={3} type="i">
                  Address of the lender
                  </ListItem>
                </Column>
                <Column colSpan={colSpan3}></Column>
                <Column colSpan={colSpan4}>
                 
                </Column>
              </Row>
              <Row transparent>
                <Column colSpan={colSpan1}></Column>
                <Column colSpan={colSpan2} withoutText>
                  <ListItem index={4} type="i">
                    <StyledText style={{ ...styles.ml1 }}>
                    [
                      <Text style={{ ...styles.italics }}>
                      Permanent Account Number or Aadhaar Number
                      </Text>
                    ] of the lender
                    </StyledText>
                  </ListItem>
                </Column>
                <Column colSpan={colSpan3}></Column>
                <Column colSpan={colSpan4}>
                  
                </Column>
              </Row>

              <Row transparent>
                <Column colSpan={colSpan1}></Column>
                <Column colSpan={colSpan2} withoutText>
                  <ListItem index={1} type="a" level={2}>
                  Financial Institutions (if available)
                  </ListItem>
                </Column>
                <Column colSpan={colSpan3}></Column>
                <Column colSpan={colSpan4}></Column>
              </Row>

              <Row transparent>
                <Column colSpan={colSpan1}></Column>
                <Column colSpan={colSpan2} withoutText>
                  <ListItem index={2} type="a" level={2}>
                  Employer (if available)
                  </ListItem>
                </Column>
                <Column colSpan={colSpan3}></Column>
                <Column colSpan={colSpan4}></Column>
              </Row>

              <Row transparent>
                <Column colSpan={colSpan1}></Column>
                <Column colSpan={colSpan2} withoutText>
                  <ListItem index={3} type="a" level={2}>
                  Others
                  </ListItem>
                </Column>
                <Column colSpan={colSpan3}></Column>
                <Column colSpan={colSpan4}></Column>
              </Row>
            </>)}
            

            <Row>
              <Column colSpan={colSpan1} center>
                4.
              </Column>
              <Column colSpan={colSpan2}>Deduction under Chapter VI-A</Column>
              <Column colSpan={colSpan3}></Column>
              <Column colSpan={colSpan4}></Column>
            </Row>

            <Row transparent>
              <Column colSpan={colSpan1}></Column>
              <Column colSpan={colSpan2} withoutText>
                <ListItem index={1} type="A" level={1}>
                  Sections 80C, 80CCC and 80CCD
                </ListItem>
              </Column>
              <Column colSpan={colSpan3}></Column>
              <Column colSpan={colSpan4}></Column>
            </Row>
            <Row transparent>
              <Column colSpan={colSpan1}></Column>
              <Column colSpan={colSpan2} withoutText>
                <ListItem index={1} type="i" level={2}>
                  Section 80C
                </ListItem>
              </Column>
              <Column colSpan={colSpan3}></Column>
              <Column colSpan={colSpan4}></Column>
            </Row>
            <Row transparent>
              <Column colSpan={colSpan1}></Column>
              <Column colSpan={colSpan2} withoutText>
                <ListItem index={1} type="a" level={3}>
                  .........................
                </ListItem>
              </Column>
              <Column colSpan={colSpan3}></Column>
              <Column colSpan={colSpan4}></Column>
            </Row>
            <Row transparent>
              <Column colSpan={colSpan1}></Column>
              <Column colSpan={colSpan2} withoutText>
                <ListItem index={2} type="a" level={3}>
                  .........................
                </ListItem>
              </Column>
              <Column colSpan={colSpan3}></Column>
              <Column colSpan={colSpan4}></Column>
            </Row>
            <Row transparent>
              <Column colSpan={colSpan1}></Column>
              <Column colSpan={colSpan2} withoutText>
                <ListItem index={3} type="a" level={3}>
                  .........................
                </ListItem>
              </Column>
              <Column colSpan={colSpan3}></Column>
              <Column colSpan={colSpan4}></Column>
            </Row>

            <Row transparent>
              <Column colSpan={colSpan1}></Column>
              <Column colSpan={colSpan2} withoutText>
                <ListItem index={2} type="i" level={2}>
                  Section 80CCC
                </ListItem>
              </Column>
              <Column colSpan={colSpan3}></Column>
              <Column colSpan={colSpan4}></Column>
            </Row>

            <Row transparent>
              <Column colSpan={colSpan1}></Column>
              <Column colSpan={colSpan2} withoutText>
                <ListItem index={3} type="i" level={2}>
                  Section 80CCD
                </ListItem>
              </Column>
              <Column colSpan={colSpan3}></Column>
              <Column colSpan={colSpan4}></Column>
            </Row>

            <Row transparent>
              <Column colSpan={colSpan1}></Column>
              <Column colSpan={colSpan2} withoutText>
                <ListItem index={2} type="A" level={1}>
                  Other sections (<Italic>e.g.</Italic> 80E, 80G, 80TTA, etc.)
                  under Chapter VI-A
                </ListItem>
              </Column>
              <Column colSpan={colSpan3}></Column>
              <Column colSpan={colSpan4}></Column>
            </Row>

            <Row transparent>
              <Column colSpan={colSpan1}></Column>
              <Column colSpan={colSpan2} withoutText>
                <ListItem index={1} type="i" level={2}>
                  section..............................
                </ListItem>
              </Column>
              <Column colSpan={colSpan3}></Column>
              <Column colSpan={colSpan4}></Column>
            </Row>
            <Row transparent>
              <Column colSpan={colSpan1}></Column>
              <Column colSpan={colSpan2} withoutText>
                <ListItem index={2} type="i" level={2}>
                  section..............................
                </ListItem>
              </Column>
              <Column colSpan={colSpan3}></Column>
              <Column colSpan={colSpan4}></Column>
            </Row>
            <Row transparent lastRow>
              <Column colSpan={colSpan1}></Column>
              <Column colSpan={colSpan2} withoutText>
                <ListItem index={3} type="i" level={2}>
                  section..............................
                </ListItem>
              </Column>
              <Column colSpan={colSpan3}></Column>
              <Column colSpan={colSpan4}></Column>
            </Row>
          </View>
          <View>
            <Text
              style={{
                ...styles.italicsBold,
                fontSize: "10px",
                ...styles.textCenter,
                ...styles.mt3,
              }}
            >
              Verification
            </Text>
            <Text style={{ ...styles.declaration, ...styles.mt1 }}>
              I,{" "}
              <Text style={styles.userData}>
                {`  ${data.user.firstName} ${data.user.middleName} ${data.user.lastName}  `}
              </Text>{" "}
              son/daughter of{" "}
              <Text
                style={styles.userData}
              >{`  ${data.user.parent?.firstName} ${data.user.parent?.middleName} ${data.user.parent?.lastName}  `}</Text>
              do hereby certify that the information given above is complete and
              correct.
            </Text>
            <View
              style={{
                ...styles.dFlex,
                ...styles.flexDirectionRow,
                ...styles.mt1,
              }}
            >
              <View style={{ ...styles.flex1, ...styles.alignItemsLeft }}>
                <Text
                  style={{
                    ...styles.declaration,
                    ...styles.mt1,
                    ...styles.italics,
                  }}
                >
                  Place <Text style={styles.userData}>{data.place}</Text>
                </Text>
                <Text
                  style={{
                    ...styles.declaration,
                    ...styles.mt1,
                    ...styles.italics,
                  }}
                >
                  Date{" "}
                  <Text style={styles.userData}>
                    {new Date().toLocaleDateString()}
                  </Text>
                </Text>
                <Text
                  style={{
                    ...styles.declaration,
                    ...styles.mt1,
                    ...styles.italics,
                  }}
                >
                  Designation{" "}
                  <Text style={styles.userData}>{data.user.designation}</Text>
                </Text>
              </View>
              <View style={{ ...styles.flex1, ...styles.alignItemsRight }}>
                <Text
                  style={{
                    ...styles.declaration,
                    ...styles.mt1,
                    ...styles.italics,
                    ...styles.textRight,
                  }}
                >
                  ...............................................................
                </Text>
                <Text
                  style={{
                    ...styles.declaration,
                    ...styles.mt1,
                    ...styles.italics,
                    ...styles.textRight,
                  }}
                >
                  (Signature of the employee)
                </Text>
                <Text
                  style={{
                    ...styles.declaration,
                    ...styles.mt1,
                    ...styles.italics,
                    ...styles.textRight,
                  }}
                >
                  Full Name:
                  <Text style={styles.userData}>
                    {`  ${data.user.firstName} ${data.user.middleName} ${data.user.lastName}  `}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Form12BB;
