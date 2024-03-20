import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function StyleSpan({ variant, style, children }) {
  const [result, setResult] = useState("");

  useEffect(() => {
    const _result = variant ? convert(children, variant) : children;
    setResult(_result);
  }, [children, variant]);

  return <span style={style} dangerouslySetInnerHTML={{ __html: result }} />;
}

function convert(str, styles) {
  let result = str;
  styles.forEach((_style) => {
    const { text, style, link } = _style;
    const wordStyle = styleObjectToString(style);
    const wordResetStyle = styleObjectToString(style, true);
    const wordStyleHover = style.hover
      ? styleObjectToString(style.hover, true)
      : null;
    if (Array.isArray(text)) {
      text.forEach((_text, index) => {
        let word = `<span style="${wordStyle}" ${
          wordStyleHover ? `onmouseover="${wordStyleHover}"` : ""
        } onmouseleave="${wordResetStyle}">${_text}</span>`;
        if (link) {
          word = extraLink(word, link);
        }
        result = result.replaceAll(_text, word);
      });
    } else {
      let word = `<span style="${wordStyle}" ${
        wordStyleHover ? `onmouseover="${wordStyleHover}"` : ""
      } onmouseleave="${wordResetStyle}">${text}</span>`;

      if (link) {
        word = extraLink(word, link);
      }
      result = result.replaceAll(text, word);
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

// extra
function extraLink(str, data) {
  const { href, target } = data;
  return `<a href="${href}" target="${target}">${str}</a>`;
}
