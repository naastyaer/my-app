function Button (props){
    const {title, onClick} = props 
    
    return (
        <button  onClick = {onClick} className="ax-10 bg-blue-500 rounded-lg text-xl font-semibold text-white px-4 py-2"> 
            {title} 
        </button>
    )
}
export default Button