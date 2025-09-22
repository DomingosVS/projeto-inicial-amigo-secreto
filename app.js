let amigos = [];
let sorteioRealizado = false;

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    exibirAmigos();
}

function exibirAmigos() {
   const lista = document.getElementById('listaAmigos');
   lista.innerHTML = '';

   for (let i = 0; i < amigos.length; i++) {
       const li = document.createElement('li');
       li.textContent = amigos[i];
       lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Caso já tenha sorteado antes
    if (sorteioRealizado) {
        const confirmar = confirm("Deseja reiniciar o sorteio?");
        if (confirmar) {
            resetar();
        } else {
            return; // se não quiser reiniciar, não faz nada
        }
    }

    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    // Sorteio
    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];

    // Exibir resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li> Amigo secreto: <strong>${sorteado}</strong></li>`;

    sorteioRealizado = true;
}

function resetar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    sorteioRealizado = false;
}

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('amigo');
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') adicionarAmigo();
      });
    }
});