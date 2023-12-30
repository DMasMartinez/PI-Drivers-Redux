import logo from './logo.svg';
import './App.css';
import Drivers from './components/Drivers';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from './views/Navbar';
import Landing from './views/Landing';
import Form from './views/Form';
import Home from './views/Home';
import Searching from './views/Searching';
import Detail from './views/Detail';
function App() {
  const [driverlist,setDriverlist] = useState([])
  const [showdrivers,setShowdrivers] = useState([])
  const [qt,setQt] = useState(9)
  const [page,setPage] = useState(1)
  const initidx = qt*(page-1)
  const finalidx = page*qt
  const location = useLocation()
  const navigate = useNavigate()
  const search = (name) => {
    fetch(`http://localhost:3002/driver/?name=${name}`)
      .then(res=>res.json())
      .then(data=>setDriverlist([...driverlist,data]))
    navigate('/Searching')
  }

  const showdrivershome = async() => {
    const drivers = await fetch('http://localhost:5001/drivers/?_limit=60')
    const data = await drivers.json()
    setShowdrivers([...data.slice(initidx,finalidx)])
  }

  const orderalfa = (lista) =>{
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    const newlista = []
    for (var i=0;i<alfabeto.length;i++){
      var aux = alfabeto[i].toUpperCase()
      for (var j=0;j<lista.length;j++){
        if (aux===lista[j].name.forename[0]){
          newlista.push(lista[j])
        }
      }

    }
    setShowdrivers(newlista)
  }
  const ordernoalfa = (lista) => {
    const alfabetoinverso = 'zyxwvutsrqponmlkjihgfedcba'
    const newlista = []
    for (var i=0;i<=alfabetoinverso.length;i++){
      var aux = alfabetoinverso[i].toUpperCase()
      for (var j=0;j<=lista.length;j++){
        if (aux===lista[j].name.forename[0]){
          newlista.push(lista[j])
        }
      }
    }
    setShowdrivers(newlista)
  }

  return (
    <div className="App">
      {location.pathname!=='/'&&<Navbar search = {search} orderalfa={orderalfa} ordernoalfa = {ordernoalfa} showdrivers={showdrivers} setShowdrivers = {setShowdrivers}/>}
      <h1>inicio de proyecto</h1>
      <Routes>
        <Route path='/detail/:name' element={<Detail/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Home' element={<Home showdrivers = {showdrivers} page = {page} setPage = {setPage} showdrivershome = {showdrivershome}/>}/>
        <Route path='/Searching' element={<Searching driverlist={driverlist}/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
      {/* <Drivers driverlist = {driverlist}/> */}
    </div>
  );
}

export default App;
