import React, { useState, useEffect } from 'react';
import PageDefault from "../../../components/PageDefault";
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

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

  useEffect(() => {
    const URL_TOP = 'http://localhost:8080/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Categoria 1',
    //       cor: '#6BD1FF'
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descricao: 'Categoria 2',
    //       cor: '#6BD1FF'
    //     }
    //   ]);
    // }, 4 * 1000);
  }, [
    values.nome
  ]);

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
            type="textarea"
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
          <Button>Cadastrar</Button>
        </form>
        {categorias.length === 0 && (
          <div>
            Loading...
          </div>
        )}
        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria.nome}${indice}`}>
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