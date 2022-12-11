import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./productList.css"

export default function ProductList() {
  const [list, setList] = useState([])
  const { catName } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${catName}`)
      .then(res => res.json())
      .then(json => setList(json))
  }, [])

  return (<div>
    <h1>ProductList</h1>
    <div className="products">
      {list?.map(v => {
        return <div onClick={() => navigate("productList/" + v.id)} key={v.id} className="product">
          <div>
            <div className="melel">{v.title}</div>
            <div className="melel">{v.price}$</div>
          </div>
          <img src={v.image} id="product-img" />
        </div>
      })}
    </div>
  </div>
  )
}
