import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function App() {
  const [count, setCount] = useState(0)
  const MySwal = withReactContent(Swal)
  const sumar = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log(count)

    if(count > 5){

      MySwal.fire({
        title: <p>Ok pero Jquery?</p>,
        didOpen: () => {
          MySwal.showLoading()
        },
      }).then(() => {
        return MySwal.fire(<p>Si si leo lloros</p>)
      })
    }
  
  }, [count])
  

  return (
    <div className="App">
      <h1>Contador</h1>
      <h3>{count}</h3>
      <button className='btn btn-warning' onClick={()=> sumar()}>Sumar</button>

      <div class="dropdown mt-5">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="https://github.com/Hakidoto">El gulukot0</a></li>
    <li><a class="dropdown-item" href="https://github.com/DavidPeralta36">Erre-Tard</a></li>
  </ul>
</div>
      
    </div>
  )
}

export default App
