<template>
    <div class="container mt-5">
      <h1>Equipos de Primera División</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Ubicación</th>
            <th>Año de Fundación</th>
            <th>Escudo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="team in teams" :key="team.idTeam">
            <td>{{ team.strTeam }}</td>
            <td>{{ team.strStadiumLocation }}</td>
            <td>{{ team.intFormedYear }}</td>
            <td><img :src="team.strTeamBadge" alt="Escudo del equipo" class="img-fluid rounded " /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  const apiUrl =
    "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Argentinian%20Primera%20Division";
  
  export default {
    data() {
      return {
        teams: [],
      };
    },
    mounted() {
      this.fetchTeamsData();
    },
    methods: {
      fetchTeamsData() {
        fetch(apiUrl)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Error de red - ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            const teams = data.teams;
            this.teams = teams;
          })
          .catch((error) => {
            console.error(`Hubo un error al obtener los datos: ${error}`);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  td img{
    width:80px;
}
  @media (max-width: 600px) {
  table {
    overflow-x: auto;
  }
  main ul {
    margin: 0;
    padding: 0;
  }
  tr td {
    padding-left: 0;
    padding-right: 0;
  }
}
  </style>
  