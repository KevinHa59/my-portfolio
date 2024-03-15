import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function TypographyS({
  sx,
  variant,
  fontSize,
  color,
  fontStyle,
  fontFamily,
  textStyles,
  fontWeight,
  children,
}) {
  const [result, setResult] = useState("");

  useEffect(() => {
    const _result = convert(children, textStyles);
    setResult(_result);
  }, [children, textStyles]);
  return (
    <Typography
      sx={sx}
      variant={variant}
      fontSize={fontSize}
      color={color}
      fontStyle={fontStyle}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      dangerouslySetInnerHTML={{ __html: result }}
    />
  );
}

function convert(str, styles) {
  let result = str;
  styles.forEach((_style) => {
    const { text, style } = _style;
    const wordStyle = styleObjectToString(style);
    const wordResetStyle = styleObjectToString(style, true);
    const wordStyleHover = style.hover
      ? styleObjectToString(style.hover, true)
      : null;
    if (Array.isArray(text)) {
      text.forEach((_text) => {
        result = result.replaceAll(
          _text,
          `<span style="${wordStyle}" ${
            wordStyleHover ? `onmouseover="${wordStyleHover}"` : ""
          } onmouseleave="${wordResetStyle}">${_text}</span>`
        );
      });
    } else {
      result = result.replaceAll(
        text,
        `<span style="${wordStyle}">${text}</span>`
      );
    }
  });
  return result;
}

// Function to convert camelCase style properties to CSS properties
const convertCamelToCss = (camelCase) => {
  return camelCase.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};

// Function to convert style object to inline style string
const styleObjectToString = (style, isResetStyle = false) => {
  return Object.keys(style)
    .map((key) => {
      const cssProperty = convertCamelToCss(key);
      return isResetStyle
        ? `this.style.${key}= '${style[key]}'`
        : `${cssProperty}: ${style[key]}`;
    })
    .join("; ");
};
