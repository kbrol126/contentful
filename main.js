function main() {
  fetch(
    "https://cdn.contentful.com/spaces/7dmr0uwu807a/environments/master/entries/1P0qLFW046Z54xWREw5kjj?access_token=BtX96HIXaQgEwTZIIp3ornmYOlSDW3miO7WenL3YLC8"
  )
    .then((response) => response.json())
    .then((data) => mostrarResultados(data));
}

function mostrarResultados(resultados) {
  console.log(resultados.fields);
}

main();
