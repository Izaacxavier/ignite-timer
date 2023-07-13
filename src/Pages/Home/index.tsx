import { Play } from "phosphor-react";
import { ButtonCountDown, Container, CountDownContainer, FormContainer, MinutesAmountInput, TaskInput, Separator } from "./styles";
export function Home() {
  return (
    <Container>
      <form action="">
        <FormContainer>
          <label htmlFor="text">Vou trabalhar em</label>
          <TaskInput type="text" id="text" list="task-suggestions" placeholder="Dê um nome para seu projeto"/>

          <datalist id="task-suggestions">
              <option value={"Projeto 1"}/>
              <option value={"Projeto 2"}/>
              <option value={"Projeto 3"}/>
              <option value={"Projeto 4"}/>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput type="number" id="minutesAmount"  step={5} min={5} max={60} />

          <span>minutos</span>
        </FormContainer>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <ButtonCountDown  disabled type="submit">
          <Play size={25} /> Começar
        </ButtonCountDown>
      </form>
    </Container>
  );
}
