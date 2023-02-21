import { useState } from 'react';
import 'components/App/App.css';
import Button from 'components/Button';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Product from 'components/Product';
function App() {
    
    const [products, setProducts] = useState( [
            {
                id: 1,
                name: "Капуста",
                price: "129р"
                
                
            },
            {
                id: 2,
                name: 'Огурцы',
                price: "129р"
                
            },
            {
                id: 3,
                name:'Томаты',
                price: "129р"
                
            },
            {
                id: 4,
                name: "Авокадо",
                price: "129р"
                
            }
    ])   
    const deleteProduct = (id) => {
        const filteredProducts  = products.filter(product => product.id !== id)
        
        setProducts (filteredProducts)
    }
    return(
        <div>
            <Header/>
            <div className="max-w-screen-lg mx-auto min-h-screen ">
            <div className='grid grid-cols-3 gap-3'>
                {products.length ===0 && (
                        <div className="mt-20 text-center text-7xl text-gray-400 font-thin">Нет продуктов</div>
                    )}
                    
                    {products.length > 0 && products.map( (product) => {
                    return (<Product key={product.id} product={product} deleteProduct={deleteProduct}/>)
                    })}
            </div>
                    
                </div>
            <Footer/>
        </div>
        
    )       
}
export default App
