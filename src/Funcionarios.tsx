import "./Funcionarios.css"

interface FuncionarioProps {
    funcionario: any
}

export default function Funcionario ({funcionario}: FuncionarioProps)
{
    return (
        <div className="Funcionario">
            <div className="nome_completo">{funcionario.nome_completo}</div>
            <div className="setor">{funcionario.setor}</div>
            <div className="data_amissao">{funcionario.data_admissao}</div> 
            <div className="salario_base">{funcionario.salario_base}</div>
        </div>
    )
} 
