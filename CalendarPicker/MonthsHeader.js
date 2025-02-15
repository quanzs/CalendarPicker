import React from "react";
import { View, Text, Platform } from "react-native";
import PropTypes from "prop-types";
import { stylePropType } from "./localPropTypes";

export default function MonthsHeader(props) {
  const { styles, textStyle, headingLevel, title, headerWrapperStyle } = props;

  const accessibilityProps = { accessibilityRole: "header" };
  if (Platform.OS === "web") {
    accessibilityProps["aria-level"] = headingLevel;
  }

  return (
    <View style={[styles.headerWrapper, headerWrapperStyle]}>
      <Text style={[styles.monthsHeaderText, textStyle]}>{title}</Text>
    </View>
  );
}

MonthsHeader.propTypes = {
  styles: stylePropType,
  headerWrapperStyle: stylePropType,
  textStyle: stylePropType,
  title: PropTypes.string,
};
