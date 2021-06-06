import { FC } from "react";
import { Layout, Breadcrumb } from "antd";
import { Container } from "react-grid-system";

import { Header } from "../Header";
import { Menu } from "../Menu";
import "./layout.scss";

const { Content, Footer } = Layout;

export const AppLayout: FC = ({ children }) => {
  return (
    <Layout className="layout">
      <Header />
      <div style={{ display: "flex" }}>
        <Menu />
        <Content className="layout__content">
          <Container fluid>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Login</Breadcrumb.Item>
            </Breadcrumb>
            {children}
          </Container>
        </Content>
      </div>
    </Layout>
  );
};
