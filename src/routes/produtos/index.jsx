import { Link } from "react-router-dom"
import { ListaProdutos } from "../../ListaProdutos"

export default function Produtos(){

    return(
        <main>
            <h1>produtos</h1>
            {ListaProdutos.map(prod =>(
                <div key={prod.id}>
                    <Link to={`/Produtos/editar/${prod.id}`}>
                        Editar o produto: {prod.nome}
                    </Link>
                </div>
            ))}
        </main>
)
} 