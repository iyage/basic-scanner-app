import React from 'react'
import {  Outlet } from 'react-router-dom'
import logo from '../images/SproxilR_Transparent.png'
import styled from 'styled-components'

function Pages() {
    const PagesContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
    color: white;
    position: relative;
    overflow: hidden;
`
const Circle2= styled.div`
    height: 300px;
    width: 300px;
    border-radius: 50%;
    position: absolute;
    background-color: rgb(221, 128, 127);
    bottom: -100px;
    right: -100px;
    z-index: -1;
      @media screen and (min-height:'70vh') {
           display: none;
       }
       `
       const Circle3= styled.div`
    height: 300px;
    width: 300px;
    border-radius: 50%;
    position: absolute;
    background-color: rgb(143, 143, 143);
    top: -150px;
    left: -100px;
    z-index: -1;
      @media screen and (min-height:'70vh') {
           display: none;
       }
       `
 const Header = styled.div`
margin-top: 50px;
margin-bottom: 30px;
       `
       const ImgContainer = styled.div`
  display: flex;
  justify-content:center;
`
const Img = styled.img`
  width: 120px;
`
    const CopyRight = styled.p`
        font-size: 14px;
        letter-spacing: 1px;
        position: absolute;
        bottom: 70px;
        font-weight: 200;
        display: flex;
        width: 100%;
        justify-content: center;
    `
// const auth = localStorage.getItem('auth')
  return  (
    <PagesContainer>
        <Header>
<ImgContainer>
 <Img src={logo}/>
</ImgContainer>
</Header>
    <Outlet/>
       <CopyRight> Copyright &copy; {new Date().getFullYear()} Sproxil. All rights reserved.</CopyRight>
   <Circle3/>
      <Circle2/>
    </PagesContainer>
  )
}
// auth?
// :<Navigate to={"/"}/>
export default Pages