import React from 'react'
import styled from 'styled-components'
import Slider from 'rc-slider/lib/Slider'
import 'rc-slider/assets/index.css'

const ButtonPanelContainer = styled.div`
  background: #333333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 12%;
`

const Top = styled.div`
  padding: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`

const Buttons = styled.div`
  > button {
    border: none;
    background: none;
    color: #fff;
    font-size: 18px;
    padding: 8px;
    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);

    @media (max-width: 700px) {
      font-size: 10px;
    }
  }

  > button:hover {
    color: #fff;
    cursor: pointer;
  }

  > button:disabled {
    color: #919191;
  }

  > button:active {
    color: #fff;
    text-shadow: none;
  }
`

const SliderContainer = styled.div`
  text-align: center;
  color: #fff;
  margin: 8px;
  position: relative;
  bottom: 10px;

  > p {
    margin: 3px;
  }


  @media (max-width: 700px) {
    display: none;
  }
`

const Status = styled.div`
  display: flex;
  justify-content: space-between;
  background: #dfe1e9;
  align-items: center;
  margin-bottom: 5px;
  padding: 3px;

  div {
    font-weight: 300
    font-size: 14px;
    padding: 5px;
    padding-left: 10px;

    > span {
      font-weight: 500;
      margin-left: 10px;
    }
  }

  a {
    color: black;
    background: transparent;
    font-weight: bold;
    margin-right: 8px;
  }

  @media (max-width: 700px) {
    font-size: 8px;
  }
`

export default function ButtonPanel ({ onStep, step, run, restart, currentOperation = 'NA', running, pause, disabled, serialize }) {
  return (
    <ButtonPanelContainer>
      <Top>
        <Buttons>
          {running === true
            ? <button onClick={pause}>Pause</button>
            : <button disabled={disabled} onClick={run}>Run</button>}
          <button disabled={disabled} onClick={step}>Next Step</button>
          <button onClick={serialize}>Share</button>
          <button onClick={restart}>Exit</button>
        </Buttons>
        <SliderContainer>
          <Slider
            style={{width: 100, marginRight: 10}}
            min={0}
            max={10}
            step={5}
            defaultValue={5}
            included={false}
            onChange={onStep}
            handleStyle={{
              borderColor: '#C3392A',
              backgroundColor: '#C3392A'
            }}
            marks={{
              0: 'Slow',
              5: 'Medium',
              10: 'Fast',
            }}
          />
        </SliderContainer>
      </Top>
      <Status>
        <div>Current Operation: <span>{currentOperation}</span></div>
      </Status>
    </ButtonPanelContainer>
  )
}