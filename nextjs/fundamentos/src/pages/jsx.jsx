import Layout from "../components/Layout"

export default function Jsx() {
    const titulo = <h1>Isso é um título</h1>
    function subtitulo() {
        return <h2>Subtítulo</h2>
    }
    return (
        <Layout titulo={titulo}>
            {subtitulo()}
            <h1>Jsx é um conceito central</h1>
        </Layout>
    )
}
