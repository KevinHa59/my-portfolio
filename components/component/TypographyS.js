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
    const { wordStyle, wordResetStyle, wordStyleHover } = extractStyles(style);

    if (Array.isArray(text)) {
      text.forEach((_text, index) => {
        result = spanString(
          _text,
          wordStyle,
          wordStyleHover,
          wordResetStyle,
          link,
          result
        );
      });
    } else {
      result = spanString(
        text,
        wordStyle,
        wordStyleHover,
        wordResetStyle,
        link,
        result
      );
    }
  });
  return result;
}

function spanString(
  value,
  wordStyle,
  wordStyleHover,
  wordResetStyle,
  link,
  result
) {
  let word = `<span style="${wordStyle}" ${
    wordStyleHover ? `onmouseover="${wordStyleHover}"` : ""
  } onmouseleave="${wordResetStyle}">${value}</span>`;
  if (link) {
    word = extraLink(word, link);
  }
  return result.replaceAll(value, word);
}

// extract style of word, reset style, and hover style
function extractStyles(style) {
  const wordStyle = styleObjectToString(style);
  const wordResetStyle = styleObjectToString(style, true);
  const wordStyleHover = style.hover
    ? styleObjectToString(style.hover, true)
    : null;
  return { wordStyle, wordResetStyle, wordStyleHover };
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
