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
import { useDispatch } from 'react-redux';
import { setdrivers,setdriversearch } from './redux/actions';
function App() {
  const dispatch = useDispatch()
  const [driverlist,setDriverlist] = useState([]) // lista de search // lista de home para mostrar drivers de la API
  const [origen,setOrigen] = useState('API') // sirve para filtrar los drivers mostrados en home ya sea API o BDD
  // const [surename,setSurename] = useState([])

  const [qt,setQt] = useState(9)
  const [page,setPage] = useState(1)
  // const initidx = qt*(page-1)
  // const finalidx = page*qt
  const location = useLocation()
  const navigate = useNavigate()
  // const search = (name) => {
  //   fetch(`http://localhost:3002/driver/?name=${name}`)
  //     .then(res=>res.json())
  //     .then(data=>setDriverlist([...driverlist,data]))
  //   navigate('/Searching')
  // }

  
  const orderalfa = (lista) =>{
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    // const alfabeto = 'zyxwvutsrqponmlkjihgfedcba'
    const newlista = []
    for (var i=0;i<alfabeto.length;i++){
      var aux = alfabeto[i].toUpperCase()
      for (var j=0;j<lista.length;j++){
        if (aux===lista[j].name.forename[0]){
          newlista.push(lista[j])
        }
      }

    }
    dispatch(setdrivers(newlista))
  }

  const orderalfa1 = (lista) =>{
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz'
    // const alfabeto = 'zyxwvutsrqponmlkjihgfedcba'
    const newlista = []
    for (var i=0;i<alfabeto.length;i++){
      var aux = alfabeto[i].toUpperCase()
      for (var j=0;j<lista.length;j++){
        if (aux===lista[j].name[0]){
          newlista.push(lista[j])
        }
      }

    }
    // setDriverlist(newlista)
    dispatch(setdriversearch(newlista))
  }
  const ordernoalfa = (lista) => {
    const alfabeto = 'zyxwvutsrqponmlkjihgfedcba'
    const newlista = []
    for (var i=0;i<alfabeto.length;i++){
      var aux = alfabeto[i].toUpperCase()
      for (var j=0;j<lista.length;j++){
        if (aux===lista[j].name.forename[0]){
          newlista.push(lista[j])
        }
      }

    }
    dispatch(setdrivers(newlista))
  }
  const ordernoalfa1 = (lista) => {
    const alfabeto = 'zyxwvutsrqponmlkjihgfedcba'
    const newlista = []
    for (var i=0;i<alfabeto.length;i++){
      var aux = alfabeto[i].toUpperCase()
      for (var j=0;j<lista.length;j++){
        if (aux===lista[j].name[0]){
          newlista.push(lista[j])
        }
      }

    }
    // setDriverlist(newlista)
    dispatch(setdriversearch(newlista))
  }
  const driversteam =(team,lista)=>{
    const listilla = []
    for (var i=0;i<lista.length;i++){
      const newlist = lista[i].teams.split(', ')
      for (var j=0;j<newlist.length;j++){
        if (newlist[j]===team){
          listilla.push(lista[i])
        }
      }
    }
    dispatch(setdrivers(listilla))
  }
  const driversteam1 =(team,lista)=>{
    const listilla = []
    for (var i=0;i<lista.length;i++){
      const newlist = lista[i].teams.split(',')
      for (var j=0;j<newlist.length;j++){
        if (newlist[j]===team){
          listilla.push(lista[i])
        }
      }
    }
    dispatch(setdriversearch(listilla))
  }
  const fecha_ascendente=(lista)=>{
    // const fechaObjeto = new Date(objetoConFecha.fecha)
    const newlista = []
    const newlista2 = []
    const newlista3 = []
    lista.map((driver)=>newlista.push(driver.dob))
    newlista.map((driver)=>newlista2.push(new Date(driver)))
    const listaascendente = newlista2.sort((a,b)=>a-b)

    for (var i=0;i<listaascendente.length;i++){
      for (var j=0;j<lista.length;j++){
        // const fechaObjeto = new Date(fechaString);
        // Obtener día, mes y año
        const dia = listaascendente[i].getDate().toString().padStart(2, '0');
        const mes = (listaascendente[i].getMonth() + 1).toString().padStart(2, '0');
        const año = listaascendente[i].getFullYear();
        const newday= parseInt(dia,10)
        const newday1 = (newday+1).toString()
        // Formatear la fecha en el formato deseado
        const fechaFormateada = `${año}-${mes}-${newday1}`
        if (fechaFormateada===lista[j].dob){
          newlista3.push(lista[j])
        }
      }
    }
    dispatch(setdrivers(newlista3))
  }
  const fecha_ascendente1=(lista)=>{
    // const fechaObjeto = new Date(objetoConFecha.fecha)
    const newlista = []
    const newlista2 = []
    const newlista3 = []
    lista.map((driver)=>newlista.push(driver.birdate))
    newlista.map((driver)=>newlista2.push(new Date(driver)))
    const listaascendente = newlista2.sort((a,b)=>a-b)

    for (var i=0;i<listaascendente.length;i++){
      for (var j=0;j<lista.length;j++){
        // const fechaObjeto = new Date(fechaString);
        // Obtener día, mes y año
        const dia = listaascendente[i].getDate().toString().padStart(2, '0'); // Agrega un cero al inicio si es necesario
        const mes = (listaascendente[i].getMonth() + 1).toString().padStart(2, '0'); // Sumar 1 porque los meses van de 0 a 11
        const año = listaascendente[i].getFullYear();
        const newday= parseInt(dia,10)
        const newday1 = (newday+1).toString()
        // Formatear la fecha en el formato deseado
        const fechaFormateada = `${año}-${mes}-${newday1}`
        if (fechaFormateada===lista[j].birdate){
          newlista3.push(lista[j])
        }
      }
    }
    // setDriverlist(newlista3)
    dispatch(setdriversearch(newlista3))
  }
  const fecha_descendente=(lista)=>{
    const newlista = []
    const newlista2 = []
    const newlista3 = []
    lista.map((driver)=>newlista.push(driver.dob))
    newlista.map((driver)=>newlista2.push(new Date(driver)))
    const listadescendente = newlista2.sort((a,b)=>b-a)
    for (var i=0;i<listadescendente.length;i++){
        const dia = listadescendente[i].getDate().toString().padStart(2, '0');
        const mes = (listadescendente[i].getMonth() + 1).toString().padStart(2, '0');
        const año = listadescendente[i].getFullYear();
        const newday= parseInt(dia,10)
        const newday1 = (newday+1).toString()
        const fechaFormateada = `${año}-${mes}-${newday1}`
      for (var j=0;j<lista.length;j++){
        if (lista[j].dob===fechaFormateada){
          newlista3.push(lista[j])
        }
      }
    }
    dispatch(setdrivers(newlista3))
    
  }
  const fecha_descendente1=(lista)=>{
    const newlista = []
    const newlista2 = []
    const newlista3 = []
    lista.map((driver)=>newlista.push(driver.birdate))
    newlista.map((driver)=>newlista2.push(new Date(driver)))
    const listadescendente = newlista2.sort((a,b)=>b-a)
    for (var i=0;i<listadescendente.length;i++){
        const dia = listadescendente[i].getDate().toString().padStart(2, '0');
        const mes = (listadescendente[i].getMonth() + 1).toString().padStart(2, '0');
        const año = listadescendente[i].getFullYear();
        const newday= parseInt(dia,10)
        const newday1 = (newday+1).toString()
        const fechaFormateada = `${año}-${mes}-${newday1}`
      for (var j=0;j<lista.length;j++){
        if (lista[j].birdate===fechaFormateada){
          newlista3.push(lista[j])
        }
      }
    }
    dispatch(setdriversearch(newlista3))
  }
  // const convert_to_format = (object) => {
  //   const {name,surname,nationality,number} = object;
  //   const newobject ={
  //     "name":name,
  //     "surname":surname,
  //     "nationality":nationality,
  //     "number":number
  //   }
  //   return newobject
  // }
  return (
    <div className="App">
      {location.pathname!=='/'&&<Navbar orderalfa={orderalfa} orderalfa1={orderalfa1} ordernoalfa = {ordernoalfa} ordernoalfa1={ordernoalfa1} origen={origen} setOrigen={setOrigen} driversteam={driversteam} driversteam1={driversteam1} fecha_ascendente={fecha_ascendente} fecha_ascendente1={fecha_ascendente1} fecha_descendente={fecha_descendente} fecha_descendente1={fecha_descendente1} driverlist={driverlist} setDriverlist={setDriverlist}/>}
      <Routes>
        <Route path='/detail/:name' element={<Detail/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Home' element={<Home page = {page} setPage = {setPage} qt={qt} origen={origen} setOrigen={setOrigen}/>}/>
        <Route path='/Searching' element={<Searching driverlist={driverlist}/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
      {/* <Drivers driverlist = {driverlist}/> */}
    </div>
  );
}

export default App;
