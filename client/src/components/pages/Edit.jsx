// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import api from '../../api'

// export default function EditProperty(props) {
//   const [properties, setProperties] = useState([])

//   useEffect(() => {
//     // if (!props.property) {
//     api.getProperties('/all').then(p => {
//       setProperties(p)
//     })
//     // }
//   }, [])

//   function handleClick(e, id, index) {
//     console.log(id)
//     api.deleteProperty(id).then(prop => {
//       const arr = properties.filter((property, i) => i != index)
//       setProperties(arr)
//     })
//   }

//   //   const [properties, setProperties] = useState([])

//   // function getAllProperties(property) {
//   //   return properties
//   // }

//   return (
//     <div className="edit">
//       <h2 className="manage-properties-title">Manage your Properties stock</h2>
//       <div>
//         <table className="table table-hover">
//           <thead>
//             <tr className="table-secondary">
//               <th scope="col">Property Title</th>
//               <th scope="col">Type</th>
//               <th scope="col">Location</th>
//               <th scope="col">Rent/Sale</th>
//               <th scope="col">Edit</th>
//               <th scope="col">Delete</th>
//             </tr>
//           </thead>
//           {properties.map((property, i) => (
//             <tbody>
//               <tr>
//                 <td>
//                   <div>{property.title}</div>
//                 </td>
//                 <td>
//                   <div>{property.type}</div>
//                 </td>
//                 <td>
//                   <div>{property.location}</div>
//                 </td>
//                 <td>
//                   <div>{property.kind}</div>
//                 </td>
//                 <td>
//                   <Link
//                     to={`/edit/${property._id}`}
//                     className="fa fa-edit table-icon"
//                   ></Link>
//                 </td>
//                 <td>
//                   <button onClick={e => handleClick(e, property._id, i)}>
//                     <i className="fa fa-trash table-icon"></i>
//                   </button>
//                 </td>
//               </tr>
//             </tbody>
//           ))}
//         </table>
//       </div>
//     </div>
//   )
// }
