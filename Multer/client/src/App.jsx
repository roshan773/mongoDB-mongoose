import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fileupload from './Fileupload'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"

function App() {
  const [file, setfile] = useState([])

  const getdata = async () => {
    try {
      let res = await axios.get("http://localhost:8080/api/file/photo")
      // console.log("data fetch Properly", res)
      setfile(res.data)
    } catch (error) {
      console.log("Internal Error", error)
    }
  }

  useEffect(() => {
    getdata()
  }, [])

  return (
    <>
      <Fileupload  getdata = {getdata} />
      <hr />
      <div className="masonry-grid">
        {file.map((el) => (
          <img
            key={el._id}
            src={`http://localhost:8080/${el.filename}`}
            alt={el._id}
            className="masonry-item"
          />
        ))}
      </div>


    </>
  )
}

export default App
