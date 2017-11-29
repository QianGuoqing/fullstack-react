import React, { Component } from 'react'

import Product from './Product'

import products from '../products.json'
import axios from 'axios'

class ProductList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }

    this.handleProductUpVote = this.handleProductUpVote.bind(this)
  }

  componentDidMount = () => {
    axios.get('http://127.0.0.1:3001/products').then(response => {
      response = response.data
      this.setState({
        products: response
      });
    }).catch(error => {
      console.log(error)
    })
  }
  

  handleProductUpVote(productId) {
    let products = [...this.state.products]
    products.forEach(product => {
      if (product.id === productId) {
        product.votes = parseInt(product.votes) + 1
      }
    })

    this.setState({
      products: products
    });
  }

  render () {
    const sortedProducts = this.state.products.sort((a, b) => a.votes - b.votes)
    const productComponents = sortedProducts.map(product => {
      return (
          <Product
            key={`product-${product.id}`}
            id={product.id}
            title={product.title}
            description={product.description}
            url={product.url}
            votes={product.votes}
            submitterAvatarUrl={product.submitterAvatarUrl}
            productImageUrl={product.productImageUrl}
            onVote={this.handleProductUpVote}/>
        )
    })
    return (
      <div className="ui unstackable items">
        {productComponents}
      </div>
    )
  }
}

export default ProductList