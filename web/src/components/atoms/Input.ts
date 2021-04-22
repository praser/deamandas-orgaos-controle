import styled from 'styled-components';

const Input = styled.input`
  /* Layout */
  box-sizing: border-box;
  display: block;
  height: 44px;
  margin: 0px;
  overflow-x: visible;
  overflow-y: visible;
  padding-bottom: 14px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 14px;

  /* Text */
  font-family: Nunito, -apple-system, system-ui, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-stretch: 100%;
  font-style: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 14px;
  text-align: start;
  text-indent: 0px;
  text-shadow: none;
  text-size-adjust: 100%;
  text-transform: none;
  word-spacing: 0px;

  /* Appearance */
  color: rgb(105, 112, 122);
  background-clip: padding-box;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(197, 204, 214);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(197, 204, 214);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(197, 204, 214);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(197, 204, 214);
  border-top-style: solid;
  border-top-width: 1px;
  cursor: text;

  /* Animation */
  transition-delay: 0s, 0s;
  transition-duration: 0.15s, 0.15s;
  transition-property: border-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out;

  /* Other */
  text-rendering: auto;
  writing-mode: horizontal-tb;
  appearance: auto;
  border-bottom-left-radius: 5.6px;
  border-bottom-right-radius: 5.6px;
  border-top-left-radius: 5.6px;
  border-top-right-radius: 5.6px;
  overflow-wrap: break-word;
  -webkit-rtl-ordering: logical;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:focus {
    color: #69707a;
    background-color: #fff;
    border-color: transparent;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 97 242 / 25%);
  }
`;

export default Input;
