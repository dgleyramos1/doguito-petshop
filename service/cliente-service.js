const listaClientes = async () => {
  const response = await fetch(`http://localhost:3000/profile`);
  return await response.json();
}


const criaCliente = async (nome, email) =>{
  const response = await fetch(`http://localhost:3000/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email
    })
  });
  return response.body;
}


const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE'
  })
}

const detalhaCliente = async (id) => {
  const response = await fetch(`http://localhost:3000/profile/${id}`);
  return await response.json();
}

const atualizaCliente = async (id, nome, email) => {
  const response = await fetch(`http://localhost:3000/profile/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        nome: nome,
        email: email
      }
    )
  });
  return await response.json();
}

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente
}