

// import React, { useEffect, useState } from 'react'

// function App2() {
//     const [a, b]=useState([])


//     const Data = async () => {
//         const url = 'https://pizza-and-desserts.p.rapidapi.com/pizzas';
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': '5d2f083533mshcbe5342d0ed436cp1754a1jsn0ecf5e5e1777',
//                 'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
//             }
//         };
//         try {
//             const response = await fetch(url, options);
//             const result = await response.json();
//             b(result);
//             console.log(result);

//         } catch (error) {
//             console.error(error);
//         }
//     };






//     useEffect(() => {
//         Data()
//     },[]);


//     return (
//         <div>
//             <div className='container-fluid'>
//                 <div className='row'>
//                 {
//                 a.map(data=>

//                     <div className='col-lg-3'>
//                         <h3>{data.id}</h3>
//                          <h5>{data.description}</h5>
//                          <h4>{data.name}</h4>
//                          <img src={data.img} style={{width:"80%"}}/>
//                          <h3>{data.price}</h3>
//                          <h3>{data.quantity}</h3>

//                     </div>
//                     )
//             }
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default App2













































// import React, { useEffect, useState } from 'react'

// function App2() {
//     const [a, b]=useState([])



//     const Data = async () => {
//         const url = 'https://burgers-hub.p.rapidapi.com/burgers';
//         const options = {
//             method: 'GET',
//             headers: {
//                 // 'X-RapidAPI-Key': '5d2f083533mshcbe5342d0ed436cp1754a1jsn0ecf5e5e1777',
//                 'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
//             }
//         };

//         try {
//             const response = await fetch(url, options);
//             const result = await response.text();
//             b(result);
//             console.log(result);
//         } catch (error) {
//             console.error(error);
//         }


//     };




//     useEffect(() => {
//         Data()
//     }, []);


//     return (
//         <div>
//             <h4>JUST TESTING</h4>



//             {
//                 a.map(data=>

//                     <div>
//                         <h5>{data.id}</h5>
//                         <h6>{data.name}</h6>
//                         <img src={data.img}/>
            
//                     </div>
//                     )
//             }

//         </div>
//     )
// }

// export default App2






























// import React, { useEffect, useState } from 'react';

// function App2() {
//     const [data, setData] = useState([]);

//     const fetchData = async () => {
//         const url = 'https://burgers-hub.p.rapidapi.com/burgers';
//         const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Key': '5d2f083533mshcbe5342d0ed436cp1754a1jsn0ecf5e5e1777',
//                 'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
//             }
//         };

//         try {
//             const response = await fetch(url, options);
//             const result = await response.json();
//             setData(result);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h4>JUST TESTING</h4>

//             {Array.isArray(data) && data.map(item => (
//                 <div key={item.id}>
//                     <h5>{item.id}</h5>
//                     <h6>{item.name}</h6>
//                     <img src={item.img} alt={item.name} />
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default App2;


























