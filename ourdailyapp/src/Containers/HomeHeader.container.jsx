import React, { useState } from "react";
import { Header } from "../Components/Compound Components/";
import { useMediaQuery } from "react-responsive";

const HomeHeader = () => {
  const width_under_850 = useMediaQuery({ query: "(max-width: 850px)" });

  const [dropDownHidden, toggleDropDownHidden] = useState(true);

  return (
    <Header src="/images/assets/homeBg.png">
      <Header.Frame className="gridCenterContent">
        <Header.Group
          className="homeSectionPadding"
          style={{
            gridColumn: "2",
            paddingTop: "15px",
            paddingBottom: "15px",
          }}
        >
          <Header.Group>
            <Header.Logo src="/images/assets/logo_white.png" />
            {width_under_850 ? null : (
              <>
                <Header.Link
                  activeStyle={{
                    color: "#849DC5",
                  }}
                  to="/"
                >
                  home
                </Header.Link>
                <Header.Link to="/aboutCreator">about me</Header.Link>
                <Header.Link to="/contact">contact</Header.Link>
              </>
            )}
          </Header.Group>
          <Header.Group
            style={{ flexBasis: "55%", justifyContent: "flex-end" }}
          >
            {width_under_850 ? (
              <Header.DropDownTogglerWrapper
                onClick={() => toggleDropDownHidden(!dropDownHidden)}
                className={dropDownHidden ? "" : "active"}
              >
                <Header.DropDownToggler />
              </Header.DropDownTogglerWrapper>
            ) : (
              <>
                <Header.Button>Log In</Header.Button>
                <Header.Button>Sign Up</Header.Button>
              </>
            )}
          </Header.Group>
          {/* ============ Drop Down Menu ============ */}
          <Header.DropDownMenu className={dropDownHidden ? "" : "active"}>
            <Header.DropDownItem>home</Header.DropDownItem>
            <Header.DropDownItem>about me</Header.DropDownItem>
            <Header.DropDownItem>contact</Header.DropDownItem>
            <Header.DropDownItem>Log In</Header.DropDownItem>
            <Header.DropDownItem>Sign Up</Header.DropDownItem>
          </Header.DropDownMenu>
        </Header.Group>

        {/* ============ Hero ============ */}

        <Header.Hero />
      </Header.Frame>
    </Header>
  );
};

export default HomeHeader;