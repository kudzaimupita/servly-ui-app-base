import { BsDashSquare } from 'react-icons/bs'
import {
    HiOutlineColorSwatch,
    HiOutlineDesktopComputer,
    HiOutlineTemplate,
    HiOutlineViewGridAdd,
} from 'react-icons/hi'
import { VscDashboard } from 'react-icons/vsc'
import { MdOutlineDashboard, MdSupportAgent } from 'react-icons/md'
import { CiWallet, CiBitcoin } from 'react-icons/ci'
import { RiShoppingCartLine, RiFileList3Line } from 'react-icons/ri'
import { FaBoxOpen } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiLaurelsTrophy, GiThreeFriends } from 'react-icons/gi'
import { FiSettings, FiTool } from 'react-icons/fi'
import { IoIosPeople } from 'react-icons/io'
import { BiNews } from 'react-icons/bi'

export type NavigationIcons = Record<string, JSX.Element>

const navigationIcon: NavigationIcons = {
    dashboard: <MdOutlineDashboard />,
    aubitWallet: <CiWallet />,
    assets: <CiBitcoin />,
    marketplace: <HiOutlineViewGridAdd />,
    mint: <HiOutlineTemplate />,
    sell: <HiOutlineDesktopComputer />,
    claims: <HiOutlineColorSwatch />,
    importContract: <BsDashSquare />,
    walletSettings: <FiSettings />,
    validateAubit: <FiTool />,
    store: <RiShoppingCartLine />,
    inventory: <FaBoxOpen />,
    orders: <RiFileList3Line />,
    rewardProgram: <GiLaurelsTrophy />,
    overview: <VscDashboard />,
    earnings: <HiOutlineDesktopComputer />,
    yieldHub: <HiOutlineColorSwatch />,
    sales: <HiOutlineTemplate />,
    team: <GiThreeFriends />,
    leaderboards: <IoIosPeople />,
    tools: <FiTool />,
    starvara: <AiOutlineShoppingCart />,
    news: <BiNews />,
    support: <MdSupportAgent />,
}

export default navigationIcon
