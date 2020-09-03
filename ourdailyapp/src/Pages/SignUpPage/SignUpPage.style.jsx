import styled from "styled-components";

const S = {};

// ============== Log in form wrapper ================

S.SignUpFormWrapper = styled.div`
  grid-area: form;
  justify-self: flex-end;

  width: 90%;
  max-width: 400px;
  height: 100%;

  position: relative;

  &::before {
    content: "Sign Up";

    color: ${(props) => props.theme.SignUpPage.SignUpTitle};
    font-weight: 500;

    position: absolute;
    left: -1em;
    top: -3em;
  }

  @media screen and (max-width: 750px) {
    justify-self: center;
  }
`;

/* // =================== OR Seperate Line ====================== */
S.Or = styled.span`
  justify-self: center;
  align-self: center;

  grid-area: seperate;

  color: ${(props) => props.theme.SignUpPage.OrSepereateLine};

  position: relative;

  opacity: 0.8;

  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    background: ${(props) => props.theme.SignUpPage.OrSepereateLine};
    width: 2px;
    height: 7em;

    left: 50%;
  }

  &:before {
    top: -500%;
  }

  &:after {
    bottom: -500%;
  }

  @media screen and (max-width: 750px) {
    &:before,
    &:after {
      transform: rotate(90deg);
      top: -180%;
    }

    &:before {
      left: -350%;
    }

    &:after {
      bottom: 0;
      left: 450%;
    }
  }
`;

// ============== Oauth wrapper ================
S.OauthBtnsWrapper = styled.div`
  grid-area: authBtns;
  align-self: center;

  width: 90%;
  max-width: 240px;

  @media screen and (max-width: 750px) {
    justify-self: center;
  }
`;

export default S;
