import React from 'react'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../../../context/ContextAPI'
import { useEffect } from 'react'

function ProductsByCategory() {
    const {productsByCategory,getProductsByCategory} = useContext(Context)
    const {id} =  useParams()
    async function getOneCategoryById(){
        await getProductsByCategory(id)
    }
    useEffect(()=>{
        getOneCategoryById()
    },[])
  return (
    <div>
      {productsByCategory && productsByCategory.map((item)=>{
        return <Link to={`/detalis/${item._id}`} className='text-dark'>
        <h1>{item.title}</h1>
        </Link>
      })}
    </div>
  )
}

export default ProductsByCategory
