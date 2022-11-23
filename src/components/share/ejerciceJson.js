import React, { useEffect, useState } from 'react';
function GetEjerciceClick(){
    const [isSelected, setSelected] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const getUsers = () => {
      fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response) => response.json())
        .then((data) => {
          setUsers(data)
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
                <ul className="list">
                    {users.map((item, index) => (
                        <li 
                        key={index} 
                        className={`card ${isSelected === index ? "card_active" : "cards"}`}//aca cambiamos un toque el else ya que no precisabamos ninguna otra class de estilos y reutilizamos la que ya teniamos para las cards y en el if creamos esa clase 
                        onClick={()=> setSelected(index)}>
                            <div className='definitive'>
                                <div className="title">    
                                    <h3 className='named'>
                                        {`Name:${item.name} -  id : ${item.id}`}
                                    </h3>
                                </div>
                                <div className="content">
                                    <h3>
                                        {`Nickname: ${item.username}`}
                                    </h3>
                                    <h3>
                                        {`Email: ${item.email}`}
                                    </h3>
                                </div>
                                <div className="footer">
                                    <h3>
                                        {`Company: ${item.company.name}`}
                                    </h3>
                                    <h3>
                                        {`website: ${item.website}`}
                                    </h3>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        
    )
    //Aca lo que hicimos fue un ejercicio en el que teniamos que pasar una logica que hicimos en react native a react 
   //Lo primero que hicimos fue llamar a la api que queriamos con el fetch y desp lo que hicimos fue lo mismo que con reactNative solo que los <View> los representamos aca como <div> y los <Text> los representamos como h3 la ClassName la utilizamos para setear estilos y no mucho mas
}
export default GetEjerciceClick;