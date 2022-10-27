const listaSelecaoPokemons = document.querySelectorAll('.work')
console.log (listaSelecaoPokemons)
const cartoesPokemon = document.querySelectorAll('.cartao-work')
console.log (cartoesPokemon)

listaSelecaoPokemons.forEach(work => {
	work.addEventListener('click', () => {
		console.log (work)

		const cartaoativo = document.querySelector('.ativo')
		cartaoativo.classList.remove('ativo')

		const idPokemonSelecionado = cartao.attributes.id.value

		const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
		cartaoPokemonParaAbrir.classList.add('aberto')


		const pokemonAtivoNaListagem = document.querySelector('.ativo')
		pokemonAtivoNaListagem.classList.remove('ativo')

		const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
		pokemonSelecionadoNaListagem.classList.add('ativo')
	})
})