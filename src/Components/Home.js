import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import JSON  from './db.json';
import Product from './productDisplay'


  class Home extends Component {
    constructor() {
        super()

        // window.location.reload(false);

        this.state = {
            productData: JSON,
            filteredData: JSON,
        }

    }

    filterProduct = (userInput) =>{

           let output = this.state.productData.filter((item) =>{
            return item.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
              
            })
           
            this.setState({filteredData: output})
    } 

    filterProduct2 = (userInput) => {
        // console.log(userInput)
        if(userInput == 0){
            // this.filterProduct('');
            this.setState({filteredData: this.state.productData})
        }
        else{

            var strToNumber = Number(userInput)
            
            let output = this.state.productData.filter((item) =>{
                return item.cost === strToNumber;
                
            })            
            
            this.setState({filteredData: output})
        }
        
    }


        
    render() {
        return (
            <>
                <Header userText={(data) => {this.filterProduct(data)}} userText2={(data) => {this.filterProduct2(data)}}  />
                <Product prodData={this.state.filteredData}/>
                <Footer year="May 2022" />
                 
            </>
        )
    }
}

export default Home;