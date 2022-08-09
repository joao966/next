import React from "react";
import { HeaderContainer } from "./styled";
import { GithubOutlined, BankTwoTone } from "@ant-design/icons";
import Link from "next/link";
import * as S from "./styled";
import { Layout } from "antd";

const Header: React.FC = () => {
  const { Header } = Layout;
  return (
    <Header
      style={{
        border: "3px sold black",
        position: "fixed",
        top: 0,
        height: "85px",
        width: "100%",
        padding: "0",
        lineHeight: "0px",
      }}
    >
      <HeaderContainer>
        <S.ImageLogo>
          <Link href="/">
            <BankTwoTone />
          </Link>
        </S.ImageLogo>

        <S.Col span={21}>
          <div
            style={{
              width: "100%",
              display: "flex",
              columnGap: "30px",
              paddingRight: "50px"
            }}
          >
            <Link href={""}>
              <S.DivLink>
                <GithubOutlined />
                <span
                  style={{
                    backgroundColor:
                      "transparent",
                  }}
                >
                  {"Menu Um"}
                </span>
              </S.DivLink>
            </Link>

            <Link href={""}>
              <S.DivLink>
                <GithubOutlined />
                <span
                  style={{
                    backgroundColor:
                      "transparent",
                  }}
                >
                  {"Menu Dois"}
                </span>
              </S.DivLink>
            </Link>

            <Link href={""}>
              <S.DivLink>
                <GithubOutlined />
                <span
                  style={{
                    backgroundColor:
                      "transparent",
                  }}
                >
                  {"Menu Três"}
                </span>
              </S.DivLink>
            </Link>
          </div>
        </S.Col>
      </HeaderContainer>
    </Header>
  );
};

export default Header;
