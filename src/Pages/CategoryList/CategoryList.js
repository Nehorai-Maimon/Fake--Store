import { useEffect, useState } from "react"
import "./categoryList.css"
import { useNavigate } from "react-router-dom"

export default function CategoryList() {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => { setCategories(json) })
  }, [])

  return (<div>
    <h1 id="head-category">Categories</h1>
    <div className="categories">
      {categories?.map((v) => <div
        className="category"
        key={v}>
        <div onClick={()=> navigate('category/' + v)}>{v}</div>
      </div>)}
    </div>
  </div>)
}
