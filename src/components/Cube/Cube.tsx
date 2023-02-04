import styled from 'styled-components'
import './Cube.scss'

const CubeContainer = styled.div`
  margin-top: 50px;
`

export const Cube = () => {
  return (
    <CubeContainer>
      <div className="space3d">
        <div className="_3dbox">
          <div className="_3dface _3dface--front no-border"></div>
          <div className="_3dface _3dface--top no-border"></div>
          <div className="_3dface _3dface--bottom no-border"></div>
          <div className="_3dface _3dface--left no-border"></div>
          <div className="_3dface _3dface--right no-border"></div>
          <div className="_3dface _3dface--back no-border"></div>
        </div>
      </div>
    </CubeContainer>
  )
}
