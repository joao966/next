import React from 'react';
import DefaultPage from '../atoms/wapperPage';
import Layout from '../atoms/layout';
import Content from '../atoms/content';
import ContentWrapper from '../atoms/wapperContent';
import Header from '../components/header';

export default function Home(): JSX.Element {
  return (
    <DefaultPage>
      <Layout>
        <Header />
        <Layout>
          <Content>
            <ContentWrapper>
              <span style={{fontSize: "50px"}}>Hello World</span>
            </ContentWrapper>
          </Content>
        </Layout>
      </Layout>
    </DefaultPage>
  )
}
