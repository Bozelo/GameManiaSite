
// estrutura "funcao()"" pega uma serie de comandos e da um nome para conseguir chamar de um outro lugar(script).
function mostrarMenu() {
    let menu = document.getElementById("menu")

    if (getComputedStyle(menu).display == 'none') {
        menu.style.display = 'flex';
    } else {
menu.style.display = 'none';
    }
}

function cadastrarNewsletter() {
   
    let nome = document.getElementById("input1").value
    let senha = document.getElementById("input2").value

    // alert(nome)
    // alert(senha)

    console.log(nome, senha)

}

