import styled, { css } from "styled-components";

import { ReactComponent as UserSvg } from "../../../assets/svg/user.svg";
import { ReactComponent as LockSvg } from "../../../assets/svg/password.svg";

const S = {};

const svgStyles = css`
  --size: 1.2em;
  width: var(--size);
  height: var(--size);
  margin-right: 0.6em;
  fill: ${(props) => props.theme.signInSignUpForm.inputSvg};
`;

S.LogInForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// S.FormInputBlock = styled.div`
//   border-bottom: 1px solid white;
//   display: flex;
//   align-items: center;
//   padding: 0 0.2em;
//   padding-bottom: 0.4em;
//   position: relative;
// `;

// S.InputField = styled.input`
//   width: 100%;
//   align-self: flex-end;
//   font-size: 0.9em;
//   border: 0;
//   background: 0;
//   outline: 0;

//   color: ${(props) => props.theme.signInSignUpForm.inputText};

//   &::placeholder {
//     color: ${(props) => props.theme.signInSignUpForm.inputPlaceHolder};
//     opacity: 1;
//     font-weight: 300;
//   }
// `;

// S.ForgotPassBtn = styled.button`
//   background: 0;
//   border: 0;
//   outline: 0;

//   font-weight: 500;

//   cursor: pointer;

//   font-size: 0.6em;
//   position: absolute;

//   color: ${(props) => props.theme.signInSignUpForm.inputText};
//   bottom: -2em;
//   right: 0;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// =================== Svg ===================

S.UserSvg = styled(UserSvg)`
  ${svgStyles}
`;

S.LockSvg = styled(LockSvg)`
  ${svgStyles}
`;

export default S;