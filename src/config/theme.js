const fontstack = "Montserrat,sans-serif";
const bodytext = "#444444";
const heading = "#000000";
const orangeColor = "#f56735";
const orangeHover = "#ff9516";
const iconColor = "#000000";
const darkmodeLightColor = "#ffffff";
const border = "#c3c3c3";
const grayColor = "#808080";
const placeholder = "#cccccc";
const panelColor = "rgba(242, 245, 245, 0.8)";
const backgroundColor = "#ffffff";
const borderColor = "#e1e5eb";
const hoverIconColor = "#000000";
const panelHeading = "#000000";
const tabLink ="#000000";
const tabBg ="rgba(242,245,245,0.8)";
const themeColor ="#000000";
const tableViewCard ="#ffffff";

const theme = {
  "font-stack": fontstack,
  "body-text": bodytext,
  "heading": heading,
  "orange-color": orangeColor,
  "orange-hover": orangeHover,
  "icon-color": iconColor,
  "darkMode-lightColor": darkmodeLightColor,
  "border": border,
  "gray-color": grayColor,
  "placeholder": placeholder,
  "panel-color": panelColor,
  "background-color": backgroundColor,
  "border-color": borderColor,
  "hover-icon-color": hoverIconColor,
  "panel-heading": panelHeading,
  "tabLink" : tabLink,
  "tabBg" : tabBg,
  "themeColor" : themeColor,
  "tableViewCard" : tableViewCard,
};

const darktheme = {
  ...theme,
  "panel-color": "#292A29",
  "background-color": "#000000",
  "border-color": "#6c6c6c",
  "icon-color": "#ffffff",
  "panel-heading": "#ffffff",
  "tabLink" : "#ffffff",
  "tabBg" : "#2a2a2a",
  "themeColor" : "#ffffff",
  "placeholder" : "#cccccc",
  "body-text" : "#ffffff",
  "tableViewCard" : "#3E3F3E",
  "tableHeadBg" : "#535353",
};

export { theme, darktheme };
