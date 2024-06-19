import React from 'react'
import { Container } from 'react-bootstrap'
import MainPage1 from './subPages/MainPage1'
import Calculator from './subPages/Calculator'
import Partners from '../components/Partners'
import ProjectsComponent from '../components/ProjectsComponent'
import StatsComponent from '../components/StatsComponent'


const MainPage = () => {
  return (
    <Container fluid className='px-0'>
        <MainPage1 />
        <StatsComponent />
        <Calculator />
        <Partners />
        <ProjectsComponent />
    </Container>
  )
}

export default MainPage