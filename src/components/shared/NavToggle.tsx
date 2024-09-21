import {  HiArrowLeft, HiArrowRight, HiOutlineMenuAlt1 } from 'react-icons/hi'
import type { CommonProps } from '@/@types/common'

export interface NavToggleProps extends CommonProps {
    toggled?: boolean
    isMobile?:boolean
}

const NavToggle = ({ toggled, className,isMobile }: NavToggleProps) => {
    return (
        <div className={className}>
{isMobile?<HiOutlineMenuAlt1/>:   <> {toggled ? <HiArrowRight /> : <HiArrowLeft />}</>}     
           
        </div>
    )
}

export default NavToggle
