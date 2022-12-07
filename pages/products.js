import React from  'react';
import axios from 'axios';
import Link from 'next/link';

function Products({products}){
  return (
    <div className='container-lista'> 
      <h1> Lista de Produtos </h1>
      {products.map((product) => (
        <div>
          <Link href='/profile/[id]' as={`/profile/${product.id}`}>
            <h4>{product.title}</h4>
          </Link>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps(context){
  const response = await axios.get(
    'https://fakestoreapi.com/products'
  );
  const data = await response.data;
  return  {
    props: {products:data},
  }
}

export default Products;