
import React from 'react'
// import CSS from './product.css'

const Product =(props) => {

    const renderProduct = props.prodData.map((item) => {
        return (
            <div className="col" key={item.id}>
                <div className="card" style={{height:'370px', width:'100%'}} >
                    <img src={item.image} alt={item.name}  className="card-mg-top " />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text">Rs. {item.cost}</p>
                        <p className="card-text">Use {item.uses}</p>
                    </div>
                </div>
            </div>
        )

    }) 

    return (
        <>
        <div className="row row-cols-1 row-cols-md-4 g-4">{renderProduct}</div>

        </>
    )

}
        
    

export default Product;