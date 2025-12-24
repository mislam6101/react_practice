import React from 'react'

const fruites = ["Mango", "Orange", "Grape"];
function Array_map() {
  return (
    <>
    
    <table border={1} class="table table-hover">
        <thead>
            <tr>
                <th colSpan={3}>Fruites</th>
            </tr>
        </thead>
        <tbody>
                {
                    fruites.map(x => 
                        <tr>
                            <td key={x}>
                                {x}
                            </td>
                        </tr>
                    )
                }
            
        </tbody>
    </table>
    
    {/* <ul>
        {fruites.map(fruite => 
            <li key={fruite}>
                {fruite}
            </li>
        )}
    </ul> */}
    
    </>
  )
}

export default Array_map