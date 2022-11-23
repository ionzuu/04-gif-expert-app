import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [Categories, setCategories] = useState([ 'One Punch', 'Dragon Ball']);

  const onAddCategory = () => {

    setCategories([...Categories, 'Valorant']);

  }

  console.log(Categories);

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory setCategories={ setCategories } />
      
      {/* LIstado de Gif */}

      <ol>
        {Categories.map(category => {
          return <li key={ category }>{category}</li>
        })}
      </ol>

        {/*  Gif Item */}

    </>
  )
}
