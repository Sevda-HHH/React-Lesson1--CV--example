import React, { Component } from 'react'
import Card from './Card';
import Pagination from 'react-bootstrap/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';

import './style.css'

export default class Cards extends Component {
    state = {
        products: [],
        pageCount: 1,
        currentPage: 1,
        perPage: 5,
        pageNumbers: []
    }

    componentDidMount = () => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    products: json.products,
                    pageCount: ((json.products.length) / this.state.perPage).toFixed()
                })
                return ((json.products.length) / this.state.perPage).toFixed()
            })
            .then((res) => { 
                let arr = []
                for (let i = 1; i <= res; i++) { 
                    arr[i - 1] = i
                } 
                this.setState({
                    pageNumbers: [...arr]
                })
            })

    }

    handleChangePage = (key) => {
        this.setState({
            currentPage: key
        })
    }
    handleChangePerPage(num) {
        this.setState({
            perPage: num
        })
    }
    render() {
        let { products,
            pageCount,
            currentPage,
            perPage,
            pageNumbers } = this.state 
        return (
            <>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => this.handleChangePerPage(5)}>5</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.handleChangePerPage(10)}>10</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.handleChangePerPage(15)}>15</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className='cards'>
                    {products.slice((currentPage - 1) * perPage,
                        perPage * currentPage).map((item) => {
                            return <Card key={item.id} item={item} />
                        })}
                </div>
                <Pagination style={{ justifyContent: "center" }}>
                    {
                        pageNumbers.map((item) => { 
                            return (<Pagination.Item onClick={() => this.handleChangePage(item)} key={item} active={item === this.state.currentPage}>
                                {item}
                            </Pagination.Item>)
                        })
                    }
                </Pagination>

            </>
        )
    }

}

