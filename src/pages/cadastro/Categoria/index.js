import React, { useState, useEffect } from 'react';
import PageDefault from "../../../components/PageDefault";
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from "./../../../hooks/useForm";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = 'http://localhost:8080/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
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
          clearForm();
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
              <li key={`${categoria.titulo}${indice}`}>
                {categoria.titulo}
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