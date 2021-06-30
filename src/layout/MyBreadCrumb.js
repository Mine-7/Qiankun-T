import React, { Component } from 'react'
import {Breadcrumb} from 'antd'
import {Link} from 'react-router-dom';
import {connect} from 'dva';
// import {globeRouters} from '@/routers';

class MyBreadCrumb extends Component {
  constructor(props){
    super(props)
    this.state={
      title:'',
      path:'',
      childrenPath:'',
      childrenTitle:'',
      mainPath:''
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const {childrenTitle}=prevState
    const {users:{userinfo:{menu}}}=nextProps

    if(childrenTitle!==nextProps.childrenTitle){
      if(menu.length>0){
        return MyBreadCrumb.getBread(nextProps.match.path,nextProps.childrenTitle,menu)
      }
      return null
    }
    return null
  }


  /**
   * @description  面包屑参数处理
   * @static
   * @memberof MyBreadCrumb
   */
  // static getBread=(path,childrenPath,globeRouters)=>{
  static getBread=(path,childrenTitle,menu)=>{
    const pathArr=path.split('/')
    const childrenPath='/'+pathArr[1]+'/'+pathArr[2]
    const globeRouters=menu
    // console.log(this.props)
    // const {path,childrenPath} = this.state;
    if(globeRouters.length>0){
      let title ='';
      // let childrenTitle='';
      let mainPath='';
      globeRouters.map(item=>{

        if(item.main===childrenPath){
          title=item.title
          mainPath=item.main;
          // for(let i=0;i<item.routes.length;i+=1){

          //   if(item.routes[i].path===childrenPath){ //测试中
          //   // if(childrenPath.indexOf(item.routes[i].path)===-1){
          //     childrenTitle=item.routes[i].title
          //   }
          // }
        }
        return title
      })
      return {
        path:path,
        childrenPath:childrenPath,
        title:title,
        childrenTitle:childrenTitle,
        mainPath:mainPath
      }
    }
    return {
      path:path,
      childrenPath:childrenPath,
      title:'',
      childrenTitle:'',
      mainPath:''
    }
  }

  render() {
    const {title,childrenTitle,mainPath} = this.state;

    return (
      <div>
        <Breadcrumb style={{ marginBottom: 20 }}>
          <Breadcrumb.Item><Link to={mainPath}>{title}</Link></Breadcrumb.Item>
          <Breadcrumb.Item>{childrenTitle}</Breadcrumb.Item>
        </Breadcrumb>
        {/* <Divider style={{marginBottom:20,marginTop:5}}/> */}
      </div>
    )
  }
}
/* <Breadcrumb style={{ margin: '16px 0' }}> */

export default connect(({ users }) => ({
  users,
}))(MyBreadCrumb);
