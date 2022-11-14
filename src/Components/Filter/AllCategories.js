import Filter from "./Filter";

const AllCategories = ()=> {
    return(<div>
        <h1>¿Qué postre te seduce más?</h1>
        
        { ['ALL','CAKE', 'COOKIES', 'MUFFINS'].map((category, index)=> <Filter key={index} category={category}/>)}
        
    </div>)
}

export default AllCategories;