import styled from "styled-components";
import { Affix, Col as AntCol, Menu as AntMenu } from "antd";

export const AffixHeader = styled(Affix)``;

export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  background-color: black;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: 85px;
  width: 100%;
  justify-content: space-between;

  .selected {
      background-image: linear-gradient(
          360deg,
          rgba(22, 190, 118, 0.25) 0%,
          rgba(22, 190, 118, 0) 72.22%
      );

      padding: 0px 5px;
      border-bottom: 4px solid #16be76;

      > span {
          color: #16be76;
      }

      img {
          filter: invert(63%) sepia(59%) saturate(2740%) hue-rotate(110deg)
              brightness(93%) contrast(83%);
      }
  }
`;

export const ImageLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  cursor: pointer;
  height: 63px;
  width: 167px;
  margin-left: 30px;

  > img {
      width: 167px;
      height: 47px;
  }
`;

export const Col = styled(AntCol)`
  display: flex;
  justify-content: end;
`;

export const Menu = styled(AntMenu)`
  height: 80px;
  width: 100%;
  padding: 0px 5px;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: black;
  border: 1px solid black;
`;

export const MenuItem = styled(AntMenu.Item)``;

export const DivLink = styled.div`
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: black;

  .select {
      background-color: black;
      border: none;
      -webkit-appearance: none;
      -moz-appearance: none;
  }

  > span {
      color: #4d4d4d;
      padding-left: 10px;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      background-color: black;
  }

  :hover {
      border-bottom: 4px solid #16be76;

      > span {
          color: #16be76;
      }

      img {
          filter: invert(63%) sepia(59%) saturate(2740%) hue-rotate(110deg)
              brightness(93%) contrast(83%);
      }
  }
`;

export const DivHover = styled.div`
  background-color: black;
  color: white;
  font-family: Poppins;
  border: black;
  width: 222px;
  height: 160px;
  position: fixed;
  top: 80px;
  display: flex;
  margin-left: -125px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 0 0 10px 10px;

  .selectHover {
      > span {
          color: #16be76;
      }

      > img {
          filter: invert(63%) sepia(59%) saturate(2740%) hue-rotate(110deg)
              brightness(93%) contrast(83%) !important;
      }
  }
`;

export const SpanDrop = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  width: 182px;

  > span {
      margin-left: 10px;
      color: #4d4d4d;
  }

  > img {
      filter: invert(30%) sepia(9%) saturate(9%) hue-rotate(315deg)
          brightness(95%) contrast(93%) !important;
  }

  :hover {
      > span {
          color: #16be76;
      }

      img {
          filter: invert(63%) sepia(59%) saturate(2740%) hue-rotate(110deg)
              brightness(93%) contrast(83%) !important;
      }
  }
`;
