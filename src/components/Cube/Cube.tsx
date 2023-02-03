import styled from 'styled-components'
import './Cube.scss'

export const Cube = () => {
  return (
    <div className="space3d">
      <div className="_3dbox">
        <div className="_3dface _3dface--front"></div>
        <div className="_3dface _3dface--top"></div>
        <div className="_3dface _3dface--bottom"></div>
        <div className="_3dface _3dface--left"></div>
        <div className="_3dface _3dface--right"></div>
        <div className="_3dface _3dface--back"></div>
      </div>
    </div>
  )
}
