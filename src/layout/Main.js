import { Route, Routes } from "react-router-dom";
import CategoryList from "../Pages/CategoryList/CategoryList";
import ProductList from "../Pages/ProductList/ProductList";

export default function Main() {
  return (<div>
    <Routes>
      <Route path="/" element={<CategoryList/>}/>
      <Route path="category/:catName" element={<ProductList/>} />
      <Route path="/productList/:card" element/>
    </Routes>
    
    </div>
  )
}
