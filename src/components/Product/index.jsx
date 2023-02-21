const Product = (props) =>{
    const { product, deleteProduct } = props
    /*надо написать функцию, которая будет показывать 1 кнопку при нажатии*/
    return (
        
            <div className=" bg-green-400 m-10 py-6 px-8  rounded-md shadow-nd ">
                <div className="flex flex-col items-start">
                    <p className="bg-green-200 text-green-900 text-lg font-semibold rounded-full px-3 py-1 shadow"> {product.price}</p>
                    <p className="text-2xl font-bold mt-4">{product.name} </p>
                    
                </div>
                <div className="flex-row flex mt-8">
                    <div className=" w-10 h-10 bg-red-500">
                        <img src="Img/delete_icon.png" alt="" className="z-10" onClick={() => deleteProduct(product.id)} />
                        
                    </div>
                    <div className=" h-10 bg-blue-500 ml-5 px-2 py-1">
                        <img src="Img/delete_icon.png" alt="" className="z-10 " />
                        <a className=" hover: cursor-pointer">В корзину</a>
                    </div>
                </div>
                    
        
                
            </div>
        
        
   )
}
export default Product