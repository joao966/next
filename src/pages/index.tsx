import React from 'react';
import DefaultPage from '../atoms/wapperPage';
import Layout from '../atoms/layout';
import Content from '../atoms/content';
import ContentWrapper from '../atoms/wapperContent';

export default function Home(): JSX.Element {
  return (
    <DefaultPage>
      <Layout>
        <Layout>
          <Content>
            <ContentWrapper>
              Hello World
            </ContentWrapper>
          </Content>
        </Layout>
      </Layout>
    </DefaultPage>
  )
}
