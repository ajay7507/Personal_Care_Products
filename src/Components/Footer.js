import React from 'react';

const Footer =(props)=> {
    return(
        <>
           <center>
               <hr />
               <h6>&copy; Developer Ajay- {props.year}</h6>
            </center> 
        </>
    )
}

export default Footer;

// import React from 'react';

// const MyHeader =()=>{
//     return (
//         <div>
//             <center>
//                 <h1>React App</h1>
//             </center>
//             <hr />
//         </div>
//     )
// }

// export default MyHeader;
