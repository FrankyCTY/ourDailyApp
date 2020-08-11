import React from "react";
import S from "./profileDropDownMenu.style";
import "./profileDropDownMenu.style.scss";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { renderProfilePicture } from "../../utils/conditional.js";
import { closeNav } from "../../redux/nav/nav.actions";
import {
  selectCurrentUser,
  selectIsUserLogged,
} from "../../redux/user/user.selectors";

import SignInSignOutButton from "../../ComponentsNotReuse/signInSignOutButton/signInSignOutButton.component";
import DropDownHeader from "../../ComponentsNotReuse/profileDropDownHeader/profileDropDownHeader.component";
import { Dropdown } from "react-bootstrap";

class ProfileDropDownMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // ========================= Life Cycle Hooks =========================

  render() {
    const { currentUser, isLogged, closeNav, history } = this.props;
    if (currentUser !== null && currentUser !== undefined) {
    }
    return (
      <Dropdown className="dropDownMenu--profile">
        <S.DropDownToggle
          id="dropdown-basic-button"
          title=""
          imgsrc={isLogged ? renderProfilePicture(currentUser.photoURL) : null}
        ></S.DropDownToggle>

        <Dropdown.Menu>
          <DropDownHeader currentUser={currentUser} isLogged={isLogged} />

          <Dropdown.Divider />

          {/* =========== openSignInModal Btn ============= */}
          <SignInSignOutButton isLogged={isLogged} />

          <Dropdown.Item
            className="btn--profile"
            onClick={() => {
              closeNav();
              history.push("/profile");
            }}
          >
            <i className="iconfont icon-profile"></i>Profile
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => {
              closeNav();
            }}
          >
            <i className="iconfont icon-Settingscontroloptions"></i>
            Setting
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isLogged: selectIsUserLogged,
});

const mapDispatchToState = (dispatch) => ({
  closeNav: () => dispatch(closeNav()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToState)(ProfileDropDownMenu)
);
