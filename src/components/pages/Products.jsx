import React from 'react'
const Products = () => {
    const [ products, setproducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fatech("https://fakestorepi.com/products");
            const data = await response.json();
            setproducts([...data]);
        };
        fetchData();
    },[]);
        
    return (
      <div className="products-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
          </div>
        ))}
      </div>
    );
  };
  
  export default Products;