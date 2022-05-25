import Navegador from "../components/Navegador";


export default function Inicio() {
    return (
        <div style={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                height: '100vh',
                flexWrap: 'wrap'
            }
        }>
            <Navegador destino="/estiloso" texto="Estiloso" cor="crimson"/>
            <Navegador destino="/teste"texto="Teste"/>
            <Navegador destino="/jsx"texto="Jsx"/>
            <Navegador destino="/navegacao"texto="Navegação #01"/>
            <Navegador destino="/estado"texto="Estado"/>
            <Navegador destino="/cliente/1234"texto="Navegação #02" cor="red"/>
        </div>
    )
}
