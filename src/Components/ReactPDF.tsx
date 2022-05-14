import React from "react";
import { View, Text } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";
import { styles } from "../styles";
import { romanize } from "../Utils/Formatter";

export const Column = ({
  children,
  style,
  colSpan,
  center,
  bold,
  italic,
  withoutText,
}: {
    children?: React.ReactNode,
    style?: Style | Style[],
    colSpan?: number,
    center?: boolean,
    bold?: boolean,
    italic?: boolean,
    withoutText? : boolean,
}) => {
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
        alignItems: center ? "center" : "flex-start",
      }}
    >
      {withoutText ? (
        children
      ) : (
        <Text
          style={{
            fontFamily,
            display: "flex",
            flex: 1,
            alignItems: center ? "center" : "flex-start",
            textAlign: center ? "center" : "left",
          }}
        >
          {children}
        </Text>
      )}
    </View>
  );
};

export const Bold = ({ children } : { children:React.ReactNode }) => {
  return <Text style={{ fontFamily: "TimesBold" }}>{children}</Text>;
};

export const Italic = ({ children } : { children:React.ReactNode }) => {
  return <Text style={{ fontFamily: "TimesItalic" }}>{children}</Text>;
};

export const Row = ({ children, style, lastRow, transparent } :
  { children: React.ReactNode, style?: Style | Style[], lastRow?: boolean, transparent?: boolean }) => {
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

export const StyledText = ({ children, style, bold, italic } : {
    children?: React.ReactNode,
    style?: Style | Style[],
    bold?: boolean,
    italic?: boolean,
}) => {
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

export const ListItem = ({ children, level, type, index } : {
    children?: React.ReactNode,
    level?: number,
    type?: "1" | "a" | "A" | "i" | "I",
    index: number,
}) => {
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


export const HorizontleRule = () => {
  return <View style={{ borderBottom: "1px solid black", flex:1 }} />;
};