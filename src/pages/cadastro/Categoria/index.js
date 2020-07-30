import React, { useState } from 'react';
import PageDefault from "../../../components/PageDefault";
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  };
  // cor: '#000000'
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    // const { getAttribute, value } = infosDoEvento.target;
    // setValue( getAttribute('name'), value );

    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>
        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          // console.log('Enviado');
          setCategorias([
            ...categorias,
            values
          ]);
          setValues(valoresIniciais);
        }}>
          <FormField
            label="Nome da Categoria :"
            type="text"
            value={values.nome}
            name="nome"
            onChange={handleChange}
          />
          <FormField
            label="Descrição:"
            type="text"
            value={values.descricao}
            name="descricao"
            onChange={handleChange}
          />
          <FormField
            label="Cor :"
            type="color"
            value={values.cor}
            name="cor"
            onChange={handleChange}
          />
          {/* <div>
            <label>
              Cor:
              <input
                type="text"
                value={values.nome}
                name="nome"
                onChange={handleChange}
              />
            </label>
          </div> */}
          {/* <div>
            <label>
              Descrição:
              <textarea
                value={values.descricao}
                name="descricao"
                onChange={handleChange}
              ></textarea>
            </label>
          </div> */}
          {/* <div>
            <label>
              Cor:
              <input
                type="color"
                value={values.cor}
                name="cor"
                onChange={handleChange}
              />
            </label>
          </div> */}
          <button>Cadastrar</button>
        </form>
        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            );
          })}
        </ul>
        <Link to="/">
          Ir para a Home
        </Link>
      </PageDefault>
    );
  }

export default CadastroCategoria;