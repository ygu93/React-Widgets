import React from 'react';
import ReactDOM from 'react-dom';

// this.props.list = [
//   {title: "one", content: "hey"},
//   {title: "two", content: "whatsup"},
//   {title: "three", content: "hello"}
// ];

// class Header extends React.Component{
//   constructor(props){
//     super(props);
//
//   }
// }

class Tabs extends React.Component{
  constructor(props){
      super(props);
      this.state ={
        title: this.props.list[0].title,
        content: this.props.list[0].content,
        index: 0};

  }

  updateIndex(title){
    let titles = this.props.list.map( obj => (obj.title));
    console.log(title);
    console.log(titles.indexOf(title));
    let index = titles.indexOf(title);
    let content = this.props.list[index].content;
    this.setState({title, content, index});
  }



  render(){
    let titles = this.props.list.map( obj => (obj.title));

    return(
      <div className="tabs">
        <h2>Tabs</h2>
        <ul className = "tab-header">
          {
            titles.map( title =>
              (<li key = {title}
                className ="tab-li"
                onClick ={this.updateIndex.bind(this,title)} >{title}</li>))
          }
        </ul>
        <article className="content">
          {
            this.state.content
          }
        </article>
      </div>
    );
  }
}

export default Tabs;

// <ul>
//   <li>
//     title 1
//   </li>
//   <li>
//
//   </li>
// </ul>
// <article>
//   seleted tabs conetent
// </article>
