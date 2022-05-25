import Cabecalho from '../components/Cabecalho'
import Layout from '../components/Layout'

export default function App() {
    return (
        <Layout titulo="Uso de componente">
            <Cabecalho titulo="Next.js & React" />
            <Cabecalho titulo="Aprenda na prática" />
        </Layout>
    )
}
