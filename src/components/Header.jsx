import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Header() {
  return (
    <HeadWrapper><Link to={'/register'}>
      <Button>로그인</Button>  </Link></HeadWrapper>
  )
}

const HeadWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`