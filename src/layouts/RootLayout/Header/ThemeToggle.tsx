import styled from "@emotion/styled"
import React from "react"
import { Emoji } from "src/components/Emoji"
import useScheme from "src/hooks/useScheme"

type Props = {}

const ThemeToggle: React.FC<Props> = () => {
  const [scheme, setScheme] = useScheme()

  const handleClick = () => {
    setScheme(scheme === "light" ? "dark" : "light")
  }

  return (
    <StyledWrapper onClick={handleClick}>
      {/* Safari 브라우저에서 <Emoji> 가 보이지 않음. */}
      <span>{scheme === "light" ? "☀️" : "🌙"}</span>
      {/*<Emoji>{scheme === "light" ? "☀️" : "🌙"}</Emoji>*/}
    </StyledWrapper>
  )
}

export default ThemeToggle

const StyledWrapper = styled.div`
  cursor: pointer;
`
