import React from "react";

// Recibimos como parámetros el nombre y el estado inicial de nuestro item.
function useLocalStorage(itemName, initialValue) {
  const [sincronizedItem, setSincronizedItem]= React.useState(true);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        // Utilizamos la lógica que teníamos, pero ahora con las variables y parámentros nuevos
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  },[sincronizedItem]);

  // Guardamos nuestro item en una constante

  // ¡Podemos utilizar otros hooks!

  // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const sincronizeItem=() =>{
    setLoading(true);
    setSincronizedItem(false);
  };

  // Regresamos los datos que necesitamos
  return { item, saveItem, loading, error,sincronizeItem };
}

export { useLocalStorage };
