function botão(){
valor = parseFloat(prompt("Qual é o valor da compra? "))
categoria = prompt("Qual é a sua categoria? (A-Gestante, B-Aposentado, C-Pensionista")

var valorFinal



if (valor >= 80) {
  if (categoria == "A") {
    valorFinal = valor * 0.80
  } else if (categoria == "B") {
    valorFinal = valor * 0.85
  } else if (categoria == "C") {
    valorFinal = valor * 0.90
  }
}
if (valor < 80) {
  if (categoria == "A") {
    valorFinal = valor * 0.85
  } else if (categoria == "B")
    valorFinal = valor * 0.90
}
if (categoria == "A" || categoria == "B" || categoria == "C")
  alert(valorFinal + "Reais")
else { alert(categoria + " não é uma categoria válida") }
}