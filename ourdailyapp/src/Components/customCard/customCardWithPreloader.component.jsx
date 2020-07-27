import React from "react";
import S from "./customCardWithPreloader.style";
import "./customCardWithPreloader.style.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomCard from "./customCard.component";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import {
  selectIsApplicationsLoaded,
  selectApplicationsInArray,
} from "../../redux/app/app.selector";

const CustomCardWithPreloader = ({
  isLoading,
  applications,
  ...otherProps
}) => {
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={isLoading}
        addEndListener={(node, done) => {
          node.addEventListener("transitionend", done, false);
        }}
        classNames="fade"
      >
        <S.CardSectionContainer className="CardSectionContainer">
          {isLoading
            ? [...Array(6)].map((e, index) => (
                <S.LoadingCardContainer key={index} className={`card`}>
                  <S.LoadingImgWrapper className="img-loader"></S.LoadingImgWrapper>
                  <S.LoadingTitleText className="text-loader"></S.LoadingTitleText>
                  <S.LoadingDescriptionText className="text-loader"></S.LoadingDescriptionText>
                  <S.LoadingBtnStart className="text-loader"></S.LoadingBtnStart>
                </S.LoadingCardContainer>
              ))
            : applications.map((app, index) => (
                <CustomCard key={index} {...otherProps} id={app.id} app={app} />
              ))}
        </S.CardSectionContainer>
      </CSSTransition>
    </SwitchTransition>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsApplicationsLoaded(state),
  applications: selectApplicationsInArray,
});

export default connect(mapStateToProps)(CustomCardWithPreloader);