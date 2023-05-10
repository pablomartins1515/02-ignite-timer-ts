import { useContext } from 'react'
import { CyclesContext } from '../../contexts/Cyclescontext'
import { HistoyContainer, HistoryList, Status } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <HistoyContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((Cycle) => {
              return (
                <tr key={Cycle.id}>
                  <td>{Cycle.task}</td>
                  <td>{Cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(Cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {Cycle.finishedDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}
                    {Cycle.interruptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {!Cycle.interruptedDate && !Cycle.finishedDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoyContainer>
  )
}
