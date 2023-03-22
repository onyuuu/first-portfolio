import React from 'react';
import { Tabs } from 'antd';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';
import Project5 from './Project5';
import Project6 from './Project6';
import './style/Tab.scss'

export default function Tab() {
  return (
    <>
      <Tabs defaultActiveKey="1" centered>
        <Tabs.TabPane tab='Kurly' key='tab1' activeKey='1'>
          <Project1 />
        </Tabs.TabPane>
        <Tabs.TabPane tab='서울일러스트레이션페어' key='tab2' activeKey='2'>
          <Project2 />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Shop' key='tab3' activeKey='3'>
          <Project3 />
        </Tabs.TabPane>
        <Tabs.TabPane tab='Movie' key='tab4' activeKey='4'>
          <Project4 />
        </Tabs.TabPane>
        <Tabs.TabPane tab='I HATE MONDAY' key='tab5' activeKey='5'>
          <Project5 />
        </Tabs.TabPane>
        <Tabs.TabPane tab='잡아바' key='tab6' activeKey='6'>
          <Project6 />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}