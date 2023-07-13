import {HistoryList, HistoryContainer, Status} from './styles'
export function History (){
    return (
        <HistoryContainer>
            <h1>Meu histórico</h1> 
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                        <th>Tarefas</th>
                        <th>Duração</th>
                        <th>Inicio</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa</td>
                            <td>28 minutos</td>
                            <td>há 2 meses atrás</td>
                            <Status statusColor="green">Comcluido</Status>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>28 minutos</td>
                            <td>há 2 meses atrás</td>
                            <Status statusColor="yellow">Em andamento</Status>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>28 minutos</td>
                            <td>há 2 meses atrás</td>
                            <Status statusColor="green">Comcluido</Status>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>28 minutos</td>
                            <td>há 2 meses atrás</td>
                            <Status statusColor="green">Comcluido</Status>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>28 minutos</td>
                            <td>há 2 meses atrás</td>
                            <Status statusColor="green">Comcluido</Status>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>28 minutos</td>
                            <td>há 2 meses atrás</td>
                            <Status statusColor="red">Interompido</Status>
                        </tr>
                    </tbody>
                </table>

            </HistoryList>

        </HistoryContainer>
    )
}