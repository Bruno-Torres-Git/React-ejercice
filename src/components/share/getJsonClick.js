import React, { useEffect, useState } from 'react';
function GetJsonClick(){
    const [isSelected, setSelected] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const getUsers = () => {
      fetch('https://randomuser.me/api/?results=30')
        .then((response) => response.json())
        .then((data) => {
          setUsers(data.results)
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
     useEffect(() => {
          setLoading(true);
          getUsers();
      }, []);
    return( 

        <div className='conditional-list'>
        
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <ul className="list" >
                    {users.map((item, index) => (
                        <li 
                        key={index} 
                        className={`card ${isSelected === index ? "card_active" : "card_normal"}`} 
                        onClick={()=> setSelected(index)}>
                            <img src={item.picture.large} alt="" />
                            <h3 className="name">
                                {`${item.name.title} ${item.name.first} ${item.name.last}`}
                            </h3>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        
    )
}
export default GetJsonClick;
