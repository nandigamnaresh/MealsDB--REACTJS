import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App3.css'

function App3() {
    const [a, b] = useState();
   const [c, d]=useState("");

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${c}`).then(chinna => b(chinna.data.meals))
    },[c])

    const chinna =(e)=>{
        d(e.target.value);
    }
    return (
        <div >
           
            <div className='container-fluid'>
            <h2  className='text-center mt-5 mb-5 text-primary'>{c} ITEMS</h2>
           <div className='text-center'>
           <input className=' mb-4 py-4 fw-bold ps-3' type='text' style={{width:"20%" ,height:"30px"}} placeholder='ENTER MEAT NAME' value={c} onChange={chinna}/>
           </div>
                <div className='row ms-5 ps-5'>
                
                   
                    {
                      a&&  a.map(data =>
                        
                            <div className='col-lg-4 pb-5  text-center'>
                                
                                <div class="card" style={{width: "20rem" , height: "100%"}}>
                            
                                        <div class="card-body ">
                                           
                                            <h3 class="card-text">{data.strMeal}</h3>
                                            <img src={data.strMealThumb} id='swiggy-img'/>
                                            <h3 class="card-title mt-3">PRICE:{data.idMeal-52000}</h3>
                                            <button className='btn btn-primary mt-5 mb-2'>ADD ITEM</button>
                                            
                                        </div>
                                </div>
                            </div>


                        )
                    }



                </div>
            </div>

        </div>
    )
}

export default App3