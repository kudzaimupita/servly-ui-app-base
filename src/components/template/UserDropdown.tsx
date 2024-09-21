import Avatar from '@/components/ui/Avatar'
import withHeaderItem from '@/utils/hoc/withHeaderItem'
import classNames from 'classnames'
import { HiOutlineUser } from 'react-icons/hi'
import type { CommonProps } from '@/@types/common'

const _UserDropdown = ({ className }: CommonProps) => {
    const UserAvatar = (
        <div className={classNames(className, 'flex items-center gap-2')}>
            <Avatar size={32} shape="circle" icon={<HiOutlineUser />} />
        </div>
    )

    return <div>{UserAvatar}</div>
}

const UserDropdown = withHeaderItem(_UserDropdown)

export default UserDropdown
