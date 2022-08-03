import React, { Component } from 'react';
import CSS from './product.css';


class Header extends Component {

    constructor(props) {
        super()

        this.state = {
            title: 'React Developer Ajay',
            keyword: 'User Text Here',
            keyword2: 'Enter Price Here'

        }
    }

    handleChange = (event) => {
        if (event.target.value === '') {
            this.setState({ keyword: 'User Text Here' })
        }
        else {
            this.setState({ keyword: event.target.value })
        }


        this.props.userText(event.target.value)


    }

    handleChange2 = (event) => {
        if (event.target.value === '') {
            this.setState({ keyword2: 'Enter Price Here' })
        }
        else {
            this.setState({ keyword2: event.target.value })
        }

        this.props.userText2(event.target.value)

    }

    setDefaultState = () => {
        this.setState({
            title: 'React Developer Ajay',
            keyword: 'User Text Here',
            keyword2: 'Enter Price Here'
        });
    }




    render() {
        return (
            <>
                <header style={{ backgroundColor: 'aqua' }}>
                    <center>
                        <div style={{ fontSize: '25px', marginBottom: '5px' }}>{this.state.title}</div>

                        <div style={{}}>
                            <input onChange={this.handleChange} />
                            <p style={{ marginTop: '3px' }}> {this.state.keyword}</p>
                            <input onChange={this.handleChange2} />
                            <p style={{ marginTop: '3px', marginBottom: '3px' }}>{this.state.keyword2}</p>
                        </div>
                    </center>
                </header>
                <hr />
            </>
        )

    }

}
// const MyHeader =()=>{


//     return (
//         <>
//         <header style={{backgroundColor:'aqua'}}>
//             <center>
//                 <div style={{fontSize:'25px', marginBottom:'5px' }}>Developer Ajay</div>
//                 <input/>
//                 <div style={{marginTop:'2px'}} >User Text Here</div>
//             </center>
//         </header>
//             <hr />
//         </>
//     )
// }

export default Header;