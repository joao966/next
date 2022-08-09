import React, { CSSProperties } from "react";

type IDefaultPageProps = {
  title?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
};

const DefaultPage: React.FC<IDefaultPageProps> = ({ children, style }) => (
  <main style={{ ...style }}>
    {children}
  </main>
);

export default DefaultPage;
