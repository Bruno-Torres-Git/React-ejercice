import React, { useEffect, useState } from 'react';//como pasaba en react native importamos los elementos que vamos a usar useState que era para hacer reactivos los elementos y useEfect que era la escucha para el fetch por ej
function GetJson(){
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const getUsers = () => {//esto es lo mismo que usamos en react Native para llamar a una api
      fetch('https://randomuser.me/api/?results=30')
        .then((response) => response.json())
        .then((data) => {
          setUsers(data.results)//esto lo que hace es decir en users guardame data.results
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
     useEffect(() => {
          setLoading(true);
          getUsers();
      }, []);
    return(//esta parte es lo mismo que en react Native solo que al no poder importar un componente FlatList y trabajar dentro osea tenemos que usar etiquetas html decidimos trabajar en torno a un ul con li dentro para hacer lo mas parecido a esa flat list
        //en vez de encerrar todo en un view como pasaba con esta parte en react native usamos un div con un classList que lo identifique
        <div className='conditional-list'>

            {isLoading ? (//pero esto es exactamente lo mismo que en reactNative si no se cumple que aun este cargando nos genera todos los items de abajo
                <div>Loading...</div>//claro que como aca no tenemos el componente que importabamos que nos generaba un preloading pusimos solamente un texto Loading cuando los items esten cargando
            ) : (
                <ul className="list">
                    {users.map((item, index) => (//para listar en React usamos un map y le decimos que los usuarios guardados en users nos liste cada uno de ellos////// y bueno entonces le decimos que nos traiga el item es decir todo lo que contenga cada usuario y su index
                        //entonces creamos este li que le pusimos como className card ya que es eso para cada usuario nos generara una card y para que pueda iterar entre usuarios le pusimos una key{index} que seria lo mismo que en react native un keyExtractor
                        <li key={index} className="card">
                            <img src={item.picture.large} alt="" />
                            <h3 className="name">
                                {`${item.name.title} ${item.name.first} ${item.name.last}`}
                            </h3>
                        </li>
                    ))}
                </ul>//y bueno luego de generar el li que va a contener a la card le asignamos que queremos que contenga y bueno le pusimos una img y un h3 donde pasaremos informacion de la api
            )}
        </div>
        
    )
}
export default GetJson;
