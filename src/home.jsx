import {useState, useEffect} from 'react'
import {Navbar, Header} from './components'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const fetchData = (term, setData) =>{
  if (term===""){
    fetch("https://api.unsplash.com/photos?page=1&client_id=")
    .then(response => response.json())
    .then(response => {setData(response); console.log(response.results)})
  }
  else{
    fetch(`https://api.unsplash.com/search/photos?&page=1&query=${term}&client_id=`)
    .then(response => response.json())
    .then(response => {setData(response.results); console.log(response.results)})
  }
}


const Home = () => {
  const [data, setData] = useState([])
  const [query, setQuery] = useState("Feel Good")
  const [term, setTerm] = useState("")
  useEffect(() => fetchData(term, setData),[term]) 
  return (
    <section className="home-page">
      <Navbar />
      <Header query={query} setQuery={setQuery} setTerm={setTerm}/>
      <section className="home-page-content">
      {/* <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}> */}
        <Masonry
          columnsCount={4}
          gutter="15px"
        >
          {data? data.map(item => <img key={item.id} className="content-img" src={item.urls.full} alt="preview"/>):console.log("nope")}
        </Masonry>
      {/* </ResponsiveMasonry>  */}
      </section>
    </section>
  )
}

export default Home
