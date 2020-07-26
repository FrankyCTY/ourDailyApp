import styled, { css } from "styled-components";

const S = {};

const buttonStyles = css`
  all: unset;
  cursor: pointer;
  text-align: center;
  letter-spacing: 1.6px;
  font-weight: 700;
  margin-bottom: 1rem;
  border-radius: 30px;
  color: white;
  font-size: clamp(0.8rem, 1.2vw, 1.4rem);
  transition: all 300ms ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 2px 5px 8px rgba($color: #000000, $alpha: 0.3);
  }
`;

// ===================== Page Content Main ========================
S.PageContentContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 0 5em;
  font-size: clamp(0.4rem, 1.4vw, 1rem);
`;

// ====================== Video =====================
S.VideoWrapper = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  overflow: hidden;
`;

S.Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

// ====================== Content Text Part =====================
S.Intro = styled.div`
  font-weight: 700;
  font-size: clamp(0.8rem, 1.4vw, 1rem);
  margin: 1.2em 0 0;
  color: var(--gray4);
  line-height: 1.8;

  & p {
    margin-bottom: 1em;
  }
`;

S.TagsWrapper = styled.div`
  margin-top: 1em;
`;

S.SectionTitle = styled.h2`
  font-weight: 700;
  border-bottom: 1px solid rgba($color: #535151, $alpha: 0.3);
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  padding: 1.2em 0;
  margin-bottom: 1.2em;
`;

S.FeatureList = styled.ul`
  padding-left: 2em;
  font-size: clamp(0.9rem, 1.5vw, 1.5rem);
  color: ${(props) => props.theme.appDetailPage.featureList};
  margin-bottom: 5em;

  & li {
    margin-bottom: 0.5em;
  }
`;

// ================================ Buttons ================================

S.BtnAddToWishlist = styled.button`
  ${buttonStyles}

  background: var(--blue-dark);

  padding: 0.8em 1.2em;
  align-self: flex-start;

  }
`;

S.IconHeart = styled.i`
  margin-left: 0.3rem;
  font-size: 1em;
  color: rgba($color: #000000, $alpha: 0.2);
  transition: all 100ms;

  &.active {
    color: var(--red);
  }
`;

S.BtnAddToCart = styled.button`
  ${buttonStyles}

  display: block;
  background: limegreen;

  width: 100%;
  margin-bottom: 5rem;
  padding: 0.8em 0;
`;
export default S;
