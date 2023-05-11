import React from "react";

// const style = {
//   color: 'blue'
// }
// const ClickTan = ()=>{
//   alert('函数组件事件')
// }
function ClickAlert(e){
  e.preventDefault();
  alert('类名组件事件')
  console.log(e);
}
// function Zhujian (){
//   return <div>
//     <h2 onClick={ClickTan}>我是函数组件</h2>
//   </div>
// }
//类名组件
class Zhujian2 extends React.Component{

  Chuanzhi = (e,msg)=>{
    console.log('事件触发了',e,msg);
  }

  state = {
    name: '学校'
  }

  changeName = ()=>{
    this.setState({
      name:'组件状态修改'
    })
  }
  
  render(){
    return (<>
      <h2 onClick={ClickAlert}><a href="http://baidu.com">我是类名组件</a></h2>
      <h2 onClick={(e)=> this.Chuanzhi(e,'MSG')}>传值事件</h2>
      <h1 onClick={this.changeName}>{this.state.name}</h1>
    </>)
  }
}


function App() {
  return (
    <div className="App">
      <Zhujian2></Zhujian2>
    </div>
  );
}

export default App;
//列表渲染 数值.map方法（对象=>{元素}）
//条件渲染 三元 或 短路或&&
//模板精简原则
// const ChangeTag = (type)=>{
//   if(type===1){
//     return <h1>this is H1</h1>
//   }else if(type===2){
//     return <h2>this is H2</h2>
//   }else if(type===3){
//     return <h3>this is H3</h3>
//   }