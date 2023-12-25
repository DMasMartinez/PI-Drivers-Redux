import logo from './logo.svg';
import './App.css';
import Drivers from './components/Drivers';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from './views/Navbar';
function App() {
  const [driverlist,setDriverlist] = useState([])
  const [showdrivers,setShowdrivers] = useState([])
  const [qt,setQt] = useState(6)
  const [page,setPage] = useState(1)
  const initidx = qt*(page-1)
  const finalidx = page*qt
  const location = useLocation()
  const navigate = useNavigate()
  const search = (id) => {
    fetch(`http://localhost:3002/driver/${id}`)
      .then(res=>res.json())
      .then(data=>setDriverlist([...driverlist,data]))
    navigate('/Searching')
  }

  const showdrivershome = () => {
    const drivers = fetch('http://localhost:5001/drivers/?_limit=60')
    const data = drivers.json()
    setShowdrivers([...showdrivers.slice(initidx,finalidx)])
  }

  const orderalfa = (lista,setLista) =>{
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    const newlista = []
    for (var i=0;i<alfabeto.length;i++){
      var aux = alfabeto[i]
      for (var j=0;j<lista.lenght;j++){
        if (aux===lista[j].name.surname[0]){
          newlista.push(lista[j])
        }
      }

    }
    setLista(newlista)
  }
  const ordernoalfa = (lista,setLista) => {
    const alfabetoinverso = 'zyxwvutsrqponmlkjihgfedcba'
    const newlista = []
    for (var i=0;i<alfabetoinverso.length;i++){
      var aux = alfabetoinverso[i]
      for (var j=0;j<lista.lenght;j++){
        if (aux===lista[j].name.surname[0]){
          newlista.push(lista[j])
        }
      }
    }
    setLista(newlista)
  }

  return (
    <div className="App">
      {location.pathname!=='/'&&<Navbar search = {search} orderalfa={orderalfa} ordernoalfa = {ordernoalfa}/>}
      <h1>inicio de proyecto</h1>
      <Routes>
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
