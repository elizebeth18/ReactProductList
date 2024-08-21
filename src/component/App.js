import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css'

const App = () => {
    
    const[pList, setPList] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then((response) => {
            setPList(response.data.products)
        })
        .catch((error) => console.error(error))
    },[]);

    const displayPList = (data) => {
        if(data) {
            return data.map((item) => {
                return(
                    <div className='col-md-5 prodDiv'  key={item.id}>
                        <div className='col-md-12'>
                            <img src={item.images[0]} alt={item.title} style={{width: '100%'}}/>
                        </div>
                        <div className='col-md-12 text-center' style={{margin: 10}}>
                            <span>{item.title}</span>
                        </div>
                </div>
                )
            })
        }
    }

    return(
        <div className='container'>
            <div className='row'>
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <center>
                            <h3>
                                List of Products
                            </h3>
                        </center>
                    </div>
                    <div class="panel-body">
                        {displayPList(pList)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;