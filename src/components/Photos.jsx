import React from 'react'
import styled from 'styled-components'

function Photos() {



  return (
    <>
    <Overflow>
        <SlideContainer>
            <Slide><img /></Slide>
            <Slide><img /></Slide>
            <Slide><img /></Slide>
		</SlideContainer>
		<PrevBtn>prev</PrevBtn>
		<NextBtn>next</NextBtn>
    </Overflow>
    </>
  )
}

export default Photos

const Overflow = styled.div`
    overflow: hidden;
	position: relative;
`;

const SlideContainer = styled.div`
    display: flex;
	transform: translate(-0vw); 
	transition: all 2s;
`
const Slide = styled.div`
    width: 100vw;
    height: 300px;
`
const PrevBtn = styled.button`
    cursor: pointer;
    position: absolute;
    top: 50%;
`
const NextBtn = styled.button`
    cursor: pointer;
    position: absolute;
    top: 50%;
`