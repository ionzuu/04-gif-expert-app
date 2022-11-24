import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [Categories, setCategories] = useState([ 'One Punch', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {
    console.log(newCategory)
    if( Categories.includes(newCategory) ) return;
    setCategories([newCategory, ...Categories]);
    //setCategories([...Categories, 'Valorant']);

  }

  console.log(Categories);

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory = { (event) => onAddCategory(event) } />
      
        {
        Categories.map( ( category ) => (
          <GifGrid key={ category } category = { category } />
        ))
        }

    </>
  )
}
