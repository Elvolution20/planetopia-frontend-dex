import { Button, HelpIcon, Link, Text } from '@pancakeswap-libs/uikit'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: 16px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 240px;
  }
`

const VersionBar = () => {
  return (
    <Wrapper>
      <Text bold mr="16px">
        Built By Planetopia Team
      </Text>
      <Button
        variant="subtle"
        as={Link}
        href="https://v1exchange.pancakeswap.finance/#/migrate"
        endIcon={<HelpIcon color="white" />}
        scale="sm"
        ml="16px"
      >
        Help
      </Button>
    </Wrapper>
  )
}

export default VersionBar
