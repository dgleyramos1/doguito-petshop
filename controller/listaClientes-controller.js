import {clienteService} from '../service/cliente-service.js';

const criaNovaLinha = (nome, email, id) => {
  const linhaNovoCliente = document.createElement('tr');
  const conteudo = `
      <td class="td" data-td>${nome}</td>
        <td>${email}</td>
        <td>
          <ul class="tabela__botoes-controle">
            <li>
              <a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a>
            </li>
            <li>
              <button class="botao-simples botao-simples--excluir" type="button">Excluir</button>
            </li>
          </ul>
        </td>`

  linhaNovoCliente.innerHTML = conteudo;
  linhaNovoCliente.dataset.id = id;
  return linhaNovoCliente;
}


const tabela = document.querySelector('[data-tabela]');

tabela.addEventListener('click', async (e) => {
  e.preventDefault()
  let ehBotaoDeletar = e.target.className === 'botao-simples botao-simples--excluir'
  let ehBotaoEditar = e.target.className === 'botao-simples botao-simples--editar'

  if(ehBotaoDeletar){
    const linhaCliente =  e.target.closest('[data-id]');
    let id = linhaCliente.dataset.id;
    await clienteService.removeCliente(id)
    linhaCliente.remove()
  }
  if(ehBotaoEditar){
    const linhaCliente =  e.target.closest('[data-id]');
    let id = linhaCliente.dataset.id;
    window.location.href = `../telas/edita_cliente.html?id=${id}`
  }
})


const render = async () => {
  const listaCliente = await clienteService.listaClientes();
  listaCliente.forEach(element => {
        tabela.appendChild(criaNovaLinha(element.nome, element.email, element.id))
      })
}


render();