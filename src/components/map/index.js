import React from 'react'
import { useState } from 'react'
import yilan from './yilan.png'
import Modal from '../modal'
import firebase from '../../utils/firebase'
import 'firebase/compat/firestore'
import './index.css'

export default function Map() {
    const [hoverId, setHoverId] = useState(null)
    const [data, setData] = useState({})
    const [isOnClick, setIsOnClick] = useState(false)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [nowUrl, setNowUrl] = useState(null)
    const place = [
        {id:'linmay', name:'林美石磐步道', top:'310px', left:'143px'},
        {id:'silado', name:'喜拉朵', top:'343px', left: '506px'},
        {id:'mrlee', name:'李氏三星蔥餡餅', top:'355px', left:'525px'},
        {id:'book', name:'哲思書棧', top:'320px', left:'543px'},
        {id:'fakevillage', name:'窯烤山寨村', top:'845px', left:'85px'},
        {id:'houtong', name:'猴洞坑瀑布', top:'48px', left:'682px'},
        {id:'fishball', name:'礁溪魚丸米粉', top:'278px', left:'578px'},
        {id:'tirecake', name:'小時候紅豆餅', top:'292px', left:'563px'}
    ]

    return (
        <>
        <div style={{display:'flex',flexWrap:'wrap'}}>
            <div className='yilan_map'>
                {place.map(obj=>{
                    return(
                        <div className='blocks' 
                        id={obj.id} 
                        style={{top: obj.top, left: obj.left}} 
                        key={obj.id} 
                        onMouseEnter={()=>setHoverId(obj.name)} 
                        onMouseLeave={()=>setHoverId(null)}
                        onClick={()=>{
                            firebase.firestore().collection('place').doc(obj.id).onSnapshot(docOnsnapshot=>{
                                const data = docOnsnapshot.data()
                                setData(data)
                                setIsOnClick(true)
                            })
                        }}
                        >
                            {hoverId === obj.name && obj.name}
                        </div>
                    )
                })}
            </div>
                {
                    isOnClick ?
                    <div className='place_info'>
                        地點:{data.name}<br/>
                        地址:{data.address}<br/>
                        <div className='line' />
                        <div className='place_image'>
                        {
                            data.imageUrl?.map(imageUrl=>{
                                return (
                                    <>
                                        <img src={imageUrl} className='photo' key={imageUrl} onClick={()=>{setNowUrl(imageUrl);setModalIsOpen(true)}} />
                                        <Modal trigger={modalIsOpen} setModalIsOpen={setModalIsOpen} imageUrl={nowUrl} />
                                    </>
                                )
                            })
                        }
                        </div>
                    </div>
                    : <></>
                }
        </div>
        </>
    )
}
