import { useRef } from 'react'
import styled from 'styled-components'

const FileInput = () => {
  const fileInputRef = useRef(null)
  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  return (
    <>
      <HiddenInput
        type="file"
        multiple
        accept=".jpg,.png"
        ref={fileInputRef}
      />
      <Button onClick={handleButtonClick}></Button>
    </>
  )
}

export default FileInput

const HiddenInput = styled.input`
  display: none;
`

const Button = styled.button`
  position: absolute;
  top: 2vw;
  left: 3vw;
  display: flex;
  align-items: center;
  padding: 1vw;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
`
