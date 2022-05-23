import { useEffect, useState } from 'react'
import './Home.css'




function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(e => console.log(e))
    }, [])


    return (
        <div>
            <h1>Home</h1>
            <div className="img-btn">
            {
                
                data.map(product => {
                    return (

                        <div key={product.id}>
                            <img src={product.img} width='200' height='200'/>
                            <p>{product.title}</p>


                        </div>
                    )
                })

                
                
                
            }
            </div>

        </div>

    )
}
export default Home