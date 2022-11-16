import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function App2() {
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
    <>
        <h1>Hola</h1>
    
    </>
    
  )
}

export default App2
