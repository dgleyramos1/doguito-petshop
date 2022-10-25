const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`)
          .then(response => {
            return response.json();
          })
}


const criaCliente = (nome, email) =>{
  return fetch(`http://localhost:3000/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  })
  .then( response => {
    return response.body
  })
}


const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE'
  })
}

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente
}