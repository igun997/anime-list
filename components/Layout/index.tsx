import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Col, Drawer, Grid, Image, Layout, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './index.module.less';
import MenuExtends from './partials/MenuExtends';
import imageLogo from '../../assets/images/maukirimlogo.png';
import imageLogoColapse from '../../assets/images/favicon.png';

const { Header, Sider, Content } = Layout;
const { useBreakpoint } = Grid;
const BaseLayout: React.FC<any> = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { xs } = useBreakpoint();
  const onClose = () => {
    setCollapsed(!collapsed);
  };
  useEffect(() => {
    if (xs) {
      setCollapsed(false);
    }
  }, [xs]);

  return (
    <>
      <Layout className={styles.root}>
        <Sider
          width={250}
          theme={'light'}
          hidden={xs}
          trigger={null}
          id={'components-layout'}
          collapsible
          collapsed={collapsed}>
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Image
              src={collapsed ? imageLogoColapse.src : imageLogo.src}
              style={{
                width: 'auto',
                margin: collapsed ? 14 : 0,
                height: collapsed ? 32 : 60,
              }}
              preview={false}
            />
          </div>
          <MenuExtends theme={'light'} />
        </Sider>
        {xs && (
          <Drawer title={'maukirim'} placement="left" onClose={onClose} visible={collapsed}>
            <MenuExtends theme={'light'} onClose={onClose} />
          </Drawer>
        )}
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ paddingLeft: 20 }}>
            <Row justify={'space-between'}>
              <Col>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: () => setCollapsed(!collapsed),
                })}
              </Col>
            </Row>
          </Header>
          <Content
            className="site-layout-background-content"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default BaseLayout;
