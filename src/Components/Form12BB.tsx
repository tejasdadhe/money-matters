import React from "react";
import { romanize } from "../Utils/Formatter";
import { Font, Page, View, Text, Document, PDFViewer } from "@react-pdf/renderer";
import { styles } from "../styles";

// import times from "../Assets/Fonts/times.ttf";
// import timesBold from "../Assets/Fonts/times-bold.ttf";
// import timesItalic from "../Assets/Fonts/times-italic.ttf";
// import timesBoldItalic from "../Assets/Fonts/times-bold-italic.ttf";


// Create styles

// Font.register({ family: "Times", src: times });
// Font.register({ family: "TimesBold", src: timesBold });
// Font.register({ family: "TimesItalic", src: timesItalic });
// Font.register({ family: "TimesBoldItalic", src: timesBoldItalic });

const colSpan1 = 1;
const colSpan2 = 6;
const colSpan3 = 2;
const colSpan4 = 3;

const Column = ({
  children,
  style,
  colSpan,
  center,
  bold,
  italic,
  withoutText,
}:any) => {
  let fontFamily = "Times";
  if (bold && italic) {
    fontFamily = "TimesBoldItalic";
  } else if (bold) {
    fontFamily = "TimesBold";
  } else if (italic) {
    fontFamily = "TimesItalic";
  }

  return (
    <View
      style={{
        ...style,
        ...styles.column,
        display: "flex",
        flexDirection: "row",
        flex: colSpan ? colSpan : 1,
        alignItems: center ? "center" : "left",
      }}
    >
      {withoutText ? (
        children
      ) : (
        <Text
          // style={{
          //   fontFamily,
          //   display: "flex",
          //   flex: 1,
          //   alignItems: center ? "center" : "left",
          //   textAlign: center ? "center" : "left",
          // }}
        >
          {children}
        </Text>
      )}
    </View>
  );
};

const Bold = ({ children } : any) => {
  return <Text style={{ fontFamily: "TimesBold" }}>{children}</Text>;
};

const Italic = ({ children } : any) => {
  return <Text style={{ fontFamily: "TimesItalic" }}>{children}</Text>;
};

const BoldAndItalic = ({ children } :any) => {
  return <Text style={{ fontFamily: "TimesBoldItalic" }}>{children}</Text>;
};

const Row = ({ children, style, lastRow, transparent } : any) => {
  return (
    <View
      style={{
        ...style,
        borderLeft: "1px solid black",
        display: "flex",
        flexDirection: "row",
        borderTop: !transparent ? "1px solid black" : "none",
        borderBottom: lastRow ? "1px solid black" : "none",
      }}
    >
      {children}
    </View>
  );
};

const StyledText = ({ children, style, bold, italic } : any) => {
  let fontFamily = "Times";
  if (bold && italic) {
    fontFamily = "TimesBoldItalic";
  } else if (bold) {
    fontFamily = "TimesBold";
  } else if (italic) {
    fontFamily = "TimesItalic";
  }
  return (
    <View style={style}>
      <Text style={{ fontFamily }}>{children}</Text>
    </View>
  );
};

const ListItem = ({ children, level, type, index } : any) => {
  const indexType = type ? type.toString() : "1";
  let displayIndex = "1";
  if (indexType === "a") {
    displayIndex = ((index || 1) + 9).toString(36).toLowerCase();
  } else if (indexType === "A") {
    displayIndex = ((index || 1) + 9).toString(36).toUpperCase();
  } else if (indexType === "i") {
    displayIndex = romanize(index).toLowerCase();
  } else if (indexType === "I") {
    displayIndex = romanize(index).toUpperCase();
  }
  return (
    <View style={{ display: "flex", flexDirection: "row", width: "100%" }}>
      <Text
        style={{
          width: "100%",
          textAlign: "right",
          paddingRight: "3px",
          flex: level ? level * 2 : 1,
        }}
      >
        (<Text style={{ ...styles.italics }}>{displayIndex}</Text>)
      </Text>
      <Text style={{ maxWidth: "170px", flex: 15 }}>{children}</Text>
    </View>
  );
};

// Create Document Component
const Form12BB = ({ data }:any) => {
  console.log("Data", data);
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
                {`  ${data.user.firstName} ${data.user.middleName} ${data.user.lastName}  `}
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
                Rs. {data.investmentData.taxExemptions.section_80_gg.amount}
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
                {data.investmentData.taxExemptions.section_80_gg.landLord.name}
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
                  data.investmentData.taxExemptions.section_80_gg.landLord
                    .address
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
                  data.investmentData.taxExemptions.section_80_gg.landLord
                    .identityNumber
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
                Rs. {data.investmentData.taxExemptions.section_10_5.amount}
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
            <Row transparent>
              <Column colSpan={colSpan1}></Column>
              <Column colSpan={colSpan2} withoutText>
                <ListItem index={1} type="i">
                  Interest payable/paid to the lender
                </ListItem>
              </Column>
              <Column colSpan={colSpan3}>
                Rs. {data.investmentData.taxDeductions.section_80_ee.amount}
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
                {data.investmentData.taxDeductions.section_80_ee.lender.name}
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
                {data.investmentData.taxDeductions.section_80_ee.lender.address}
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
                  data.investmentData.taxDeductions.section_80_ee.lender
                    .identityNumber
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
              >{`  ${data.user.parent.firstName} ${data.user.parent.middleName} ${data.user.parent.lastName}  `}</Text>
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
