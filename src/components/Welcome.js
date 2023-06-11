import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`

const Info = styled.div`
  padding: 50px;
  flex: 1;

  @media (max-width: 700px) {
    padding: 8px;
    color: red;
  }

  @media (max-height: 800px) {
    padding: 8px;
    color: #1D2E43;
  }
`

const Logo = styled.img`
  margin: 0 auto;
  display: block;

  @media (max-width: 800px) {
    width: 80px;
    height: 80px;
  }
`

const Header = styled.h1`
  text-align: center;
  font-weight: 300;
  font-size:calc(6px + 3.6vw);
  letter-spacing: 1.8px;
  margin-top: 40px;
  border: none;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    margin-top: 10px;
    font-size:calc(12px + 1.7vw);
  }
`

const Instructions = styled.ul`
  margin-top: 50px;
  display: block;
  font-size:calc(9px + .7vw);
  padding-left: 15

  @media (max-width: 700px) {
    margin-top: 10px;
  }
`

const InstructionItem = styled.li`
  list-style-type: none;
  padding: 5px;
  margin: 10px;
  text-decoration: ${({ selectable }) => selectable ? 'underline' : 'none'};
  cursor: ${({ selectable }) => selectable ? 'pointer' : 'default'};

  @media (max-width: 700px) {
    margin: 3px;
    padding: 1px;
  }
`

export default function Welcome ({ selectCodeSnippet }) {
  return (
    <Container>
      <Info>
        <Header>SeeJS</Header>
        <p> Write JS in the Console, or see the Examples</p>
        <Instructions>
          <InstructionItem
            selectable
            onClick={() => selectCodeSnippet('simpleClosure')}>
              Simple Closure
          </InstructionItem>
          
          <InstructionItem
            selectable
            onClick={() => selectCodeSnippet('bubbleSort')}>
              Bubble Sort
          </InstructionItem>
          <InstructionItem
            selectable
            onClick={() => selectCodeSnippet('pseudoclassical')}>
              Pseudoclassical Pattern
          </InstructionItem>
          <InstructionItem
            selectable
            onClick={() => selectCodeSnippet('thisKeyword')}>
              "This" Keyword
          </InstructionItem>
        </Instructions>
      </Info>
    </Container>
  )
}