import Filter from "./Filter";

const AllCategories = ()=> {
    return(<div>
        <h1>Smth sweety this way comes</h1>
        
        { ['ALL','CAKE', 'COOKIES', 'MUFFINS'].map((category, index)=> <Filter key={index} category={category}/>)}
        
    </div>)
}

export default AllCategories;
