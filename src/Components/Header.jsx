import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import "../CSS/Header.css"
import Menu from '@mui/material/Menu';
import logo from "../Photo/logo.webp"
import { useDispatch, useSelector } from "react-redux"
import Table from 'react-bootstrap/esm/Table';
import { DELETE } from '../redux/actions/action';


const Header = () => {

const [price,setPrice]=useState(0)

    const getData = useSelector((state) => state.cartreducer.carts)
    // console.log(getData)

    const dispatch = useDispatch()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dlt = (id)=>{
dispatch(DELETE(id))
    }

    const total = ()=>{
        let price = 0;
        getData.map((ele,k)=>{
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };

    useEffect(()=>{
        total();
    },[total])

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <img
                        src={logo}
                        alt="About Us"
                        className="header-image"
                    />
                    <h1 className='header-head'>Food Junction</h1>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light" style={{ padding: 4, marginLeft: 47, fontSize: "large" }}>Menu</NavLink>

                        <NavLink to="/aboutus" className="text-decoration-none text-light" style={{ padding: 4, marginLeft: 13, fontSize: "large" }}>About Us</NavLink>
                    </Nav>

                    <Badge badgeContent={getData.length} color="primary"
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>
                    </Badge>
                </Container>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    {
                        getData.length ?
                            <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Restaurant Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getData.map((el) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td>

                                                                <NavLink to={`/details/${el.id}`} onClick={handleClose} >
                                                                    <img src={el.imgdata} style={{ width: "5rem", height: "5rem" }} alt="" />
                                                                </NavLink>

                                                            </td>
                                                            <td>
                                                                <p>{el.rname}</p>
                                                                <p>Price: Rs {el.price}</p>
                                                                <p>Quantity : {el.qnty}</p>
                                                                <p style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={()=>dlt(el.id)}>
                                                                    <i className='fas fa-trash smalltrash'></i>
                                                                </p>
                                                            </td>
                                                            <td className='mt-5' style={{ color: "red", fontSize: 20, cursor: "pointer" }} onClick={()=>dlt(el.id)} >
                                                                <i className='fas fa-trash largetrash'></i>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                        <p className='text-center'>Total : {price}</p>
                                    </tbody>
                                </Table>
                            </div> : <div className='card_details d-flex justify-content-center align-items-center' style={{ width: "15rem", paddingRight: 15, position: "relative", marginTop: 10 }}>
                                <i className='fas fa-close smallclose' onClick={handleClose} style={{ position: "absolute", top: 6, right: 20, fontSize: 23, cursor: "pointer" }}></i>
                                <p style={{ fontSize: 19 }}>Your cart is Empyt</p>

                            </div>
                    }

                </Menu>
            </Navbar>




        </>
    )
}

export default Header