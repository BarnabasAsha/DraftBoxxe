import ClickAwayListener from 'react-click-away-listener'

interface iMenu {
    position: {top: number, left: number, right:number, bottom:number},
    closeMenu: () => void,
    list: { action: () => void, item: unknown }[],
    small?: boolean
}

const Menu = ({ position, closeMenu, list, small }:iMenu) => {
    
    const styles = {
        top: position.top,
        left: position.left,
        right: position.right,
        bottom: position.bottom
    }

    return (
        <ClickAwayListener onClickAway={closeMenu} >
            <ul role="menu" className={`rounded overflow-hidden ${small ? 'h-12' : 'h-24'} w-28 shadow -translate-x-2 -translate-y-2 bg-gray-200 text-secondary`} style={{ position: 'fixed', zIndex: 1000000000, ...styles}}>
                {
                    list.map((l, index) => (
                        <li className="text-sm w-full h-12 px-3 py-3 hover:bg-gray-50" key={index} role="menuitem">
                            <button className="w-full h-full" onClick={l.action}>{l.item}</button>
                        </li>
                    ))
                }
            </ul>
        </ClickAwayListener>
    )
}

export default  Menu