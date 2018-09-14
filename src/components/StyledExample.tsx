import React from 'react'

import styled from 'styled-components'

type Props = {
  name: string
}

const Container = styled.div`
  margin: 10px;
`

const Quote = styled.h1<{ color: string }>`
  color: ${props => props.color};
  font: 400 36px/1.4 'cardo';
  font-style: italic;
  font-weight: normal;
  text-align: left;
  text-indent: -10px;
  max-width: 800px;
  width: 80%;
  margin: 0 auto;
`

type AProps = {
  className?: string
  count: number
}

const AnotherComponent: React.SFC<AProps> = props => {
  return <div className={props.className}>Another components</div>
}

const StyledAnotherComponent = styled(AnotherComponent)`
  color: green;
`

export const someFunction = (name: string, city: string, goal: string) => {
  return name + city + goal
}

// type P = ReturnType<typeof someFunction>

export const StyledExample: React.SFC<Props> = props => {
  return (
    <Container>
      <Quote color="red">Some text</Quote>
      <StyledAnotherComponent count={4} />
      {props.name}
    </Container>
  )
}
