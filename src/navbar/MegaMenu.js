import React from 'react'
import img1 from '../assets/img1.jpg'

const MegaMenu = () => {
    return (
        <div className='megamenu'>
            <ul className='level1'>
                <li className="has-submenu">Home
                    <ul className='level2'>
                        <li>
                            <img src={img1} alt='Sample 1' />
                            <p>test level</p>
                        </li>
                        <li><img src={img1} alt='Sample 1' />
                            <p>test level</p></li>
                        <li><img src={img1} alt='Sample 1' />
                            <p>test level</p></li>
                        <li><img src={img1} alt='Sample 1' />
                            <p>test level</p></li>
                    </ul>
                </li>
                <li className='submenu-2'>About
                    <ul className='sublevel2'>
                        <li className='has-submenu2-1'>level1
                            <ul className='level3-1'>
                                <li><p>test level</p> </li>
                                <li><p>test level</p></li>
                                <li><p>test level</p></li>
                                <li><p>test level</p></li>
                            </ul>
                        </li>
                        <li className='has-submenu2-2'>level1
                            <ul className='level3-2'>
                                <li><p>test level-2</p> </li>
                                <li><p>test level-2</p></li>
                                <li><p>test level-2</p></li>
                                <li><p>test level-2</p></li>
                            </ul>
                        </li>
                        <li className='has-submenu2-3'>level1
                            <ul className='level3-3'>
                                <li><p>test level-3</p> </li>
                                <li><p>test level-3</p></li>
                                <li><p>test level-3</p></li>
                                <li><p>test level-3</p></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className='submenu-4'>Contact
                    <ul className='sublevel-4'>
                        <li className='mega-submenu-4'>level-4
                            <ul className='level-4'>
                                <li>
                                    <img src={img1} alt='Sample 1' />
                                    <p>test level</p>
                                </li>
                                <li><img src={img1} alt='Sample 1' />
                                    <p>test level</p></li>

                            </ul>
                        </li>
                        <li>level-4</li>
                        <li>level-4</li>
                        <li>level-4</li>
                    </ul>
                </li>
                <li>Blogs</li>
                <li>Channels</li>
            </ul>
        </div>
    )
}

export default MegaMenu