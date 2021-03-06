import React, { Componnet } from 'react';
import ReactDom from 'react-dom';

import { connect } from 'dva';
import { Link } from 'dva/router';

import config from '../config';

import Header from '../components/header/Header';
import Sider from '../components/sider/Sider';
import Main from '../components/main/Main';

//const components = config.main.components;
const headerInfo = {
    ...config.header,
    name: config.userInfo.name,
    aver: config.userInfo.aver
}

const siderInfo = { ...config.sider };

const mainInfo = {
    style: config.sider.style
}

const IndexInfo = {
    permission: config.userInfo.permission,
    loginUrl: config.userInfo.permission
}

const App = (props) => {

        let featureId = props.params.FeatureId || config.sider.selectedKey;

        let featureInfo = {
            featureId: featureId,
            params: props.params.params,

            feature: config.main.components[featureId].component,
            title: config.main.components[featureId].title,
        }
        
        if(IndexInfo.permission){
            return  <div>
                        <Header {...headerInfo}/>
                        <Sider {...siderInfo} selectedKey={featureId}/>
                        <Main {...mainInfo} {...featureInfo}/>
                    </div>
        }else{
            return  <div className="nopermission">
                        您暂无权限处理该系统工作，请先
                        <a href={IndexInfo.loginUrl}>登录</a>
                        或者找相关人员申请权限。
                    </div>
        }
}

export default App;
