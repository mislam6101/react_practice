import React from 'react'

function Array_map_users() {
    const users = [
        {id:1, name: 'Aarif', Age:28},
        {id:2, name: 'Jarin', Age:28},
        {id:3, name: 'Rafi', Age:25}
    ];
 return (
    <div>
        <table border={1} width={'10%'}>
            <tr>
                <th colSpan={2}>Details</th>
            </tr>
            {users.map(x =>
            <tr>
                <td key={x.id}>{x.name}</td>
                <td key={x.id}>{x.Age}</td>
            </tr>
            )}
        </table>
    </div>
  )
}

export default Array_map_users