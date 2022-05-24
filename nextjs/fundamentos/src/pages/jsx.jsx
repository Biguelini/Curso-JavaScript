export default function Jsx() {
    const titulo = <h1>Isso é um título</h1>
    function subtitulo(){
        return <h2>Subtítulo</h2>
    }
    return (
        <div>
            {titulo}
            {subtitulo()}
            <h1>Jsx é um conceito central</h1>
        </div>
    )
}
