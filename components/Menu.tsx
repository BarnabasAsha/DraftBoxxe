import ClickAwayListener from 'react-click-away-listener'

const Menu = ({ position, closeMenu, list }) => {
    
    const styles = {
        top: position.top,
        left: position.left,
        right: position.right,
        bottom: position.bottom
    }

    return (
        <ClickAwayListener onClickAway={closeMenu} >
            <ul role="menu" className="w-28 h-24 shadow -translate-x-2 -translate-y-2 bg-white" style={{ position: 'fixed', zIndex: 1000000000, ...styles}}>
                {
                    list.map((l, index) => (
                        <li className="text-sm w-full h-10 px-3 py-3 hover:bg-gray-50" key={index} role="menuitem">
                            <button className="w-full h-full" onClick={l.action}>{l.item}</button>
                        </li>
                    ))
                }
            </ul>
        </ClickAwayListener>
    )
}

export default  Menu