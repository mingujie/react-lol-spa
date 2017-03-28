import React, {Component, PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import pureRender from 'pure-render-decorator';
import { is, fromJS} from 'immutable';
import { Tool } from '../../Config/Tool';
import template from './template';
import { TabBar, Icon, NavBar } from 'antd-mobile';
export {template}

/**
 * 公共头部
 *
 * @export
 * @class Header
 * @extends {Component}
 */


export class Header extends Component {  //头部标题
     constructor(props,context) {
        super(props,context);
        this.state = {
        }

    }

    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
    
    render() {
        let {title, leftContent} = this.props;
        
        //let {saleRecord ,title ,HideList,goback ,save,productsInform,applyRecord,params} = this.props;
        
        /*if (goback&&params) {
            goback = ( <Link to={'/index'+params} className='head_goback left'>返回</Link>)
        }else if (goback){
            goback = (<span className='head_goback left' onClick={() => window.history.back()}>返回</span>)
        }*/
        return (
            <div className="nav-space">
                <NavBar leftContent={leftContent} mode="dark" onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
                >{title}</NavBar>
            </div>
        );
    }
}

export class Tartab extends Component{
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
                >
                <TabBar.Item
                    title={<Link to='/app'>提现</Link>}
                    key="生活"
                    icon={< div style = {{ width: '0.44rem', height: '0.44rem', background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center / 0.42rem 0.42rem no-repeat' }}/>}
                    selectedIcon={< div style = {{ width: '0.44rem', height: '0.44rem', background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center / 0.42rem 0.42rem no-repeat' }}/>}
                    data-seed="logId">
                </TabBar.Item>
                <TabBar.Item
                    icon={< Icon type = "koubei-o" size = "md" />}
                    selectedIcon={< Icon type = "koubei" size = "md" />}
                    title="口碑"
                    key="口碑"
                    data-seed="logId1">
                </TabBar.Item>
                <TabBar.Item
                    icon={< div style = {{ width: '0.44rem', height: '0.44rem', background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center / 0.42rem 0.42rem no-repeat' }}/>}
                    selectedIcon={< div style = {{ width: '0.44rem', height: '0.44rem', background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center / 0.42rem 0.42rem no-repeat' }}/>}
                    title="朋友"
                    key="朋友"
                   >
                </TabBar.Item>
                <TabBar.Item
                    icon={{
                    uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg'
                }}
                    selectedIcon={{
                    uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'
                }}
                    title="我的"
                    key="我的"
                   >
                </TabBar.Item>
            </TabBar>
        )
    }
}

