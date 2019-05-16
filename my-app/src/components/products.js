    
import React from 'react'
import {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import ProductTile from "./ProductTile"

class ProductPage extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        fetch("http://localhost:8000/api/vehicle")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    products: data
                })
                console.log(this.state)
            })
    }

    render() {
        const products = this.state.products.map((item, idx) => <ProductTile data={item} key={idx} />)
        return(
            <>
                <div className="main-content">
                    <div className="hero">
                        <div className="hero-cover">
                            <h1 className="products-hero-content"><b>Lux Rentals</b></h1>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row products">
                            {products}
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductPage