import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard() {
  const [cardData, setCardData] = useState()
  const { card } = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${card}`)
      .then(res => res.json())
      .then(json => setCardData(json))
  }, [])

  return <div>
    <h1>single product</h1>
    {cardData ? <div>
      <div>{v.id}</div>
      <div>{v.title}</div>
      <div>{v.category}</div>
      <div>{v.description}</div>
      <div>{v.price}</div>
      <div>{v.rating.rate}</div>
      <div>{v.rating.count}</div>
      <img src={v.image} />
    </div> && console.log(cardData) : <h4>something went wrong!!</h4>
    }
  </div>
}
