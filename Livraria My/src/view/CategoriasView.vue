<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      categorias: [
        { id: "8ae6623d-5462-4774-b5e1-e263c5d2d367", nome: "Categoria 1" },
        { id: "1f659d91-17b5-40da-b5fb-dbffa5664e27", nome: "Categoria 2" },
        { id: "d5a59ada-da1d-47a2-9a6e-e99964df9571", nome: "Categoria 3" },
        { id: "2311c938-42fa-4661-a3fc-9ba664a30f6e", nome: "Categoria 4" },
        { id: "6f58a76b-0ea0-4bca-8d93-296c7d69685c", nome: "Categoria 5" },
      ],
      nova_categoria: "",
    };
  },

  methods: {
    salvar() {
      if (this.nova_categoria !== "") {
        const novo_id = uuidv4();
        this.categorias.push({
          id: novo_id,
          nome: this.nova_categorias,
        });
        this.nova_categoria = "";
      }
    },
    excluir(categorias) {
      const indice = this.categorias.indexOf(categorias);
      this.categorias.splice(indice, 1);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de Categorias</h2>
    </div>
    <div class="form-input">
      <input type="text" v-model="nova_categoria" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-categorias">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="categorias in categorias" :key="categorias.id">
            <td>{{ categorias.id }}</td>
            <td>{{ categorias.nome }}</td>
            <td>
              <button @click="excluir(categorias)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.title {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
.form-input {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.form-input input {
  width: 60%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
}

.form-input button {
  margin-left: 1%;
  width: 20%;
  height: 40px;
  border: 1px solid rgb(36, 127, 65);
  border-radius: 10px;
  background-color: rgb(36, 127, 65);
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.list-categorias {
  display: flex;
  justify-content: center;
}

table {
  width: 50%;
  margin: 2% auto;
  border-collapse: collapse;
}

table tr th {
  border: 1px solid #ccc;
  padding: 10px;
  font-weight: bold;
}

table tr td {
  border: 1px solid #ccc;
  padding: 10px;
}

table tr:nth-child(odd) {
  background-color: black;
}
</style>
