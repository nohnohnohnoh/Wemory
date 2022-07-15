import styled from 'styled-components'

interface ParentsProps {
  test: boolean
  setTest: Function
  bgColor: string
}

const Props = ({ test, setTest, bgColor }: ParentsProps) => {
  const testClick = () => {
    setTest(!test)
    console.log(1)
  }
  return (
    <div>
      <Practice onClick={testClick} bgColor={bgColor} />
    </div>
  )
}

const Practice = styled.div<ParentsProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
`

export default Props
