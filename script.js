"use strict"; // Habilita o modo estrito do JavaScript para garantir boas práticas de codificação.

// Função para formatar um dígito (adiciona um zero à esquerda, se necessário)
const formatarDigito = (digito) => `0${digito}`.slice(-2);

// Função para atualizar os elementos HTML que mostram a contagem regressiva
const atualizar = (tempo) => {
	const segundos = document.getElementById("segundos"); // Elemento HTML para os segundos
	const minutos = document.getElementById("minutos"); // Elemento HTML para os minutos
	const horas = document.getElementById("horas"); // Elemento HTML para as horas
	const dias = document.getElementById("dias"); // Elemento HTML para os dias

	// Cálculos para determinar a quantidade de segundos, minutos, horas e dias restantes
	const qtdSegundos = tempo % 60;
	const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
	const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
	const qtdDias = Math.floor(tempo / (60 * 60 * 24));

	// Atualiza o conteúdo dos elementos HTML com os valores calculados
	segundos.textContent = formatarDigito(qtdSegundos);
	minutos.textContent = formatarDigito(qtdMinutos);
	horas.textContent = formatarDigito(qtdHoras);
	dias.textContent = formatarDigito(qtdDias);
};

// Função para iniciar a contagem regressiva
const contagemRegressiva = (tempo) => {
	// Função para parar a contagem regressiva (usada como callback)
	const pararContagem = () => clearInterval(id);

	// Função para contar e atualizar a contagem regressiva
	const contar = () => {
		if (tempo === 0) {
			// Se o tempo acabou, para a contagem regressiva
			pararContagem();
		}
		atualizar(tempo); // Atualiza a contagem regressiva
		tempo--; // Decrementa o tempo restante
	};

	const id = setInterval(contar, 1000); // Inicia o intervalo de contagem regressiva a cada 1 segundo
};

// Função para calcular o tempo restante até a data do evento
const tempoRestante = () => {
	// Define a data do evento como 19 de maio de 2024
	const dataEvento = new Date("2024-05-19 00:00:00");
	const hoje = Date.now(); // Obtém a data e hora atual
	return Math.floor((dataEvento - hoje) / 1000); // Calcula e retorna o tempo restante em segundos
};

// Inicia a contagem regressiva com o tempo restante até a data do evento
contagemRegressiva(tempoRestante());
