import React from 'react';
import { AgendaContainer,AgendaH1, AgendaWrapper, AgendaCard, AgendaH2, AgendaP, AgendaIcon, AgendaP2 } from './AgendaElements';
import Icon1 from '../../images/Icon1.svg';
import Icon2 from '../../images/Icon2.svg';
import Icon3 from '../../images/Icon3.svg';
const Agenda = () => {
  return (
    <AgendaContainer id="agenda">
    <AgendaH1>Workshop Agenda</AgendaH1>
    <AgendaP>Provide some Fossil workshop agenda overview here </AgendaP>
    <AgendaWrapper>
        <AgendaCard>
            <AgendaIcon src={Icon1}/>
            <AgendaH2>First Topic</AgendaH2>
            <AgendaP2>some information on the topic should be places here</AgendaP2>
        </AgendaCard>
        <AgendaCard>
            <AgendaIcon src={Icon2}/>
            <AgendaH2>Second Topic</AgendaH2>
            <AgendaP2>some information on the topic should be places here</AgendaP2>
        </AgendaCard>
        <AgendaCard>
            <AgendaIcon src={Icon3}/>
            <AgendaH2>Third Topic</AgendaH2>
            <AgendaP2> some information on the topic should be places here</AgendaP2>
        </AgendaCard>
    </AgendaWrapper>
    </AgendaContainer>
  )
}

export default Agenda