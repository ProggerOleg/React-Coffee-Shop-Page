import { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import SecondBlock from './components/second-block/text-block';
import PaperBlock from './components/paper/paper';
import FooterBlock from './components/footer/footer';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, name: 'Solimo Coffee Beans 2 kg', price: '10.73', image: 'coffee example.png', yellow: false},
        {id: 2, name: 'Presto Coffee Beans 1 kg', price: '15.99', image: 'coffee ex2.png', yellow: false},
        {id: 3, name: 'AROMISTICO Coffee 1 kg', price: '6.99', image: 'coffee ex3.png', yellow: false}
      ]
    }
  }

  changeColorCard = (id, prop) => {
    console.log(id)
    this.setState(({data})=> (
        {data: data.map(item => {
            if (item.id === id) {
                return {...item, [prop]: !item[prop]}
            }
            return item;
        })}
    ))
}
  
  render() {
    const {data} = this.state
    return (
      <div className="App">
        <Header/>
        <SecondBlock/>
        <PaperBlock
          data = {data}
          changeColorCard={this.changeColorCard}/>
        <FooterBlock/>
      </div>
    );
  }

}

export default App;
