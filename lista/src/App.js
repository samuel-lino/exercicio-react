import carros from './objetos.js'
import './app.css'
import $ from 'jquery'
const lista_de_carros = carros

function App() {
  function pesquisar(){
    let ano = $('#ano').val()
    let port = $('#porte').val()
    let lista = []
    var por = lista_de_carros.filter((p)=>{
      if(ano === '' && port === ''){
        return lista_de_carros
      }else if(ano === '' && port !== ''){
        return p.porte === port
      }else if(port === '' && ano !== ''){
        return p.ano === ano
      }else{
        return p.porte === port && p.ano === ano
      }
      
    })
    var res
    if(por.length === 0){
        $('.mostrar').html('<h3>Nada encontrado</h3>')
      }else{
        res = por
        for(var ele of res){
          if(lista.includes(ele) === true){
            return
          }else{
            lista.push(ele)
          }
        }
        console.log(lista)
        $('.mostrar').html('')
        for(var obj of lista){
          $('.mostrar').append('<label>'+ obj.modelo +'</label>')
        }}
    }
  return (
    <div className="App">
      <div className="filtro">
        <h1>Filtro</h1>
        <label form='porte'>porte</label>
        <select id='porte'>
          <option value={''}></option>
          <option value={'médio'}>médio</option>
          <option value={'compacto'}>compacto</option>
        </select>
        <label form='ano'>Ano</label>
        <select id='ano'>
          <option value={''}></option>
          <option value={'2023'}>2023</option>
          <option value={'2024'}>2024</option>
        </select>
      </div>
      <div className="res">
        <button onClickCapture={pesquisar}>pesquisar</button>

      </div>
      <div className="mostrar">

      </div>
    </div>
  );
}

export default App;
