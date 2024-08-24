import useFetch from "../hooks/useFetch";


export default function MultiplesCustomHooks() {
    const { isLoading, isError, data } = useFetch('https://pokeapi.co/api/v2/pokemon/1');


    return (
        <>
            <h3>Infomación pokemons</h3>
            {isLoading && 'Cargando...'}
            {data?.name}
        </>
    )
}
