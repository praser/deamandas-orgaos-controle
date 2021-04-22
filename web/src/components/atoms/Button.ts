import styled from 'styled-components';

const Button = styled.button`
  /* Layout */
  align-items: center;
  box-sizing: border-box;
  display: inline-flex;
  height: 44px;
  justify-content: center;
  margin-bottom: 4px;
  margin-left: 0px;
  margin-right: 8px;
  margin-top: 4px;
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
  text-align: center;
  text-indent: 0px;
  text-shadow: none;
  text-size-adjust: 100%;
  text-transform: none;
  vertical-align: middle;
  word-spacing: 0px;

  /* Appearance */
  color: rgb(255, 255, 255);
  background-color: rgb(0, 97, 242);
  border-bottom-color: rgb(0, 97, 242);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(0, 97, 242);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(0, 97, 242);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(0, 97, 242);
  border-top-style: solid;
  border-top-width: 1px;
  cursor: pointer;

  /* Animation */
  transition-delay: 0s, 0s, 0s, 0s;
  transition-duration: 0.15s, 0.15s, 0.15s, 0.15s;
  transition-property: color, background-color, border-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out, ease-in-out, ease-in-out;

  /* Other */
  text-rendering: auto;
  writing-mode: horizontal-tb;
  appearance: none;
  border-bottom-left-radius: 5.6px;
  border-bottom-right-radius: 5.6px;
  border-top-left-radius: 5.6px;
  border-top-right-radius: 5.6px;
  overflow-wrap: break-word;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:active {
    color: #fff;
    background-color: #004dbf;
    border-color: #0047b2;
  }

  &:focus {
    background-color: #0052cc;
    border-color: #004dbf;
    box-shadow: 0 0 0 0.2rem rgb(38 121 244 / 50%);
    outline: 0;
  }

  &:hover {
    color: #fff;
    background-color: #0052cc;
    border-color: #004dbf;
    text-decoration: none;
  }

  &:disabled {
    opacity: 0.65;
    cursor: auto;
  }
`;

export default Button;
