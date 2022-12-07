import axios from "axios";
import Products from "../products";


function Profile({product = {}}){
    return(
    <div className="container">
       
         <h3>Nome: {product.title}</h3>
         <img src={product.image} width={300} height={300} ></img> 
         <h5>Preço: U${product.price}</h5> 
         <a href="http://localhost:3000/products">
            <h4>Voltar para lista de produtos</h4>
          </a>
         <a href="http://localhost:3000/">
            <h4>Voltar para a página inicial</h4>
          </a>
    </div>
)}

export async function getStaticProps(context){
    const response = await axios.get (
        'https://fakestoreapi.com/products/' + context.params.id
    );

    const product = await response.data;
    return{
        props : {product}
    }
}

export async function getStaticPaths(){
  const response = await axios.get(
    'https://fakestoreapi.com/products'
  );
  const products = await response.data;
  const paths = products.map((product)=>{
    return {params:{id:String(product.id)}};
  });
  return{
    paths,
    fallback: true,
  };
}


export default Profile;