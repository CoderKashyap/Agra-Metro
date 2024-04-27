import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
import Drawer from '@mui/material/Drawer';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';
// import NotificationMenu from './NotificationMenu';


const Notification = ({ open, setOpen, notificationDot = null }) => {

    // const dispatch = useDispatch();
    const navigate = useNavigate();


    const [selectType, setNotifyType] = useState("general");
    const [filteredNotify, setFilteredNotify] = useState([]);
    const [interactedMap, setInteractedMap] = useState({});
    const [showSpecificDot, setSpecificDot] = useState(false);

    const [anchorEl, setAnchorEl] = useState(false);
    const [singleNotificationData, setSingleNotificationData] = useState({});

    const openMenu = Boolean(anchorEl);

    // const handleClick = (event, data) => {
    //     setSingleNotificationData(data)
    //     setAnchorEl(event.currentTarget);
    // };



    // const checkInterectOrNot = (noti) => {
    //     return noti.userWhoInterect.includes(user?._id)
    // }


    // const handleRedirect = (data) => {
    //     if(!data.notiAction && !data.userWhoInterect.includes(user._id)){
    //         dispatch(markNotificationSeen(data._id));
    //     }
    //     else if (data.notiAction && !data.userWhoInterect.includes(user._id)) {
    //         dispatch(markNotificationSeen(data._id));
    //         navigate(data.notiAction);
    //         setOpen(false)
    //     }
    //     else {
    //         navigate(data.notiAction);
    //         setOpen(false)
    //     }

    // }



    // const checkNotificationLength = () => {
    //     const noti = notification && notification.filter((data) => {

    //         if (data.notiType === "general" || data.notiType === "promotional") {
    //             return data;
    //         }
    //         if (data.notiType !== "specific" && data.specialUsers.some(userObj => userObj._id !== user?._id)) {
    //             return data;
    //         }
    //         if (data.specialUsers.some(userObj => userObj._id === user?._id)) {
    //             return data;
    //         }

    //     })
    //     return noti.length;
    // }

    return (
        <>
            <Drawer
                anchor={"right"}
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className='w-screen md:w-[400px]'>
                    <h1 className='py-2 mb-6 text-xl font-bold text-center '>Notifications <span className='text-base'>(1)</span></h1>
                    <div className='text-black text-left cursor-pointer my-2 px-2 absolute top-0 left-0' onClick={() => setOpen(false)}>
                        <NavigateNextIcon fontSize='medium' />
                    </div>
                    <div className='bg-gray-50'>
                        {/* <div className='bg-white w-full flex items-center justify-start gap-x-2 shadow-sm px-2 py-2'>
                            <div className={`relative w-fit text-center font-semibold  whitespace-nowrap rounded-full border ${selectType === "general" ? "border-[#6366f1] text-[#6366f1]" : "text-gray-500"}`}>
                                <button className={`relative top-0 text-xs px-4 py-1 `} onClick={() => setNotifyType("general")}>General</button>
                                {showGeneralDot && < div className="flex items-center justify-center absolute top-0 right-2 w-1 h-1 text-center text-white text-xs bg-[#fe5f1e] p-1 rounded-full"></div>}
                            </div>
                            <div className={`relative w-fit text-center font-semibold whitespace-nowrap rounded-full border ${selectType === "promotional" ? "border-[#6366f1] text-[#6366f1]" : "text-gray-500"}`}>
                                <button className={`relative top-0 text-xs px-4 py-1 `} onClick={() => setNotifyType("promotional")}>Promotional Offers</button>
                                {showpromotionalDot && < div className="flex items-center justify-center absolute top-0 right-2 w-1 h-1 text-center text-white text-xs bg-[#fe5f1e] p-1 rounded-full"></div>}
                            </div>
                            {
                                showSpecialOffer &&
                                <div className={`relative w-fit text-center font-semibold whitespace-nowrap rounded-full border ${selectType === "specific" ? "border-[#6366f1] text-[#6366f1]" : "text-gray-500"}`}>
                                    <button className={`relative top-0 text-xs px-4 py-1`} onClick={() => setNotifyType("specific")}>Special Offers</button>
                                    {showSpecificDot && < div className="flex items-center justify-center absolute top-0 right-2 w-1 h-1 text-center text-white text-xs bg-[#fe5f1e] p-1 rounded-full"></div>}
                                </div>
                            }
                        </div> */}
                        <div className='bg-white mt-2 border-t'>
                            <ul className='px-2 '>
                                <li className={`transition-all duration-200  ease-in-out border rounded-lg group flex items-start justify-between gap-x-2 text-gray-400 px-2 py-3 my-2 bg-white`} >
                                    <div className='px-1 flex items-start justify-center gap-x-2'>
                                        <span className={`group-hover:text-[#6366f1] transition-all duration-200 ease-in-out`}><CircleNotificationsIcon fontSize='large' /></span>
                                        <span className='hover:cursor-pointer text-black text-sm w-[15rem]'>
                                            <p className='font-semibold'>notification title</p>
                                            <p className={`text-gray-500 truncate w-fit max-w-[14rem]`}>description</p>
                                        </span>
                                        <button className='text-xs self-end text-[#6366f1] font-semibold' >more</button>
                                        {/* {
                                            !interactedMap[data._id] && data.notiDesc.length > 12 ?
                                                <button className='text-xs self-end text-[#6366f1] font-semibold' onClick={() => handleinteraction(data)}>more</button>
                                                :
                                                null
                                        }
                                        {
                                            interactedMap[data._id] &&
                                            <button className='text-xs self-end text-slate-400 font-semibold' onClick={() => handleinteraction(data)}>less</button>
                                        } */}
                                    </div>
                                    {/* <span className='cursor-pointer invisible group-hover:visible hover:text-gray-700 font-semibold' onClick={(e) => handleClick(e, data)}><MoreVertIcon fontSize='medium' /></span> */}
                                </li>
                                {/* {
                                    filteredNotify && filteredNotify.map((data) => (
                                        data.notiType === "general" || data.notiType === "specific" ?
                                            <li key={data._id} className={`transition-all duration-200  ease-in-out border rounded-lg group flex items-start justify-between gap-x-2 text-gray-400 px-2 py-3 my-2  ${checkInterectOrNot(data) ? "bg-white" : "bg-gray-100"} hover:bg-[#6365f125] hover:border-[#6365f14f]`}>
                                                <div className='px-1 flex items-start justify-center gap-x-2'>
                                                    <span className={`${notificationColor(data.notiType)} group-hover:text-[#6366f1] transition-all duration-200 ease-in-out`}><CircleNotificationsIcon fontSize='large' /></span>
                                                    <span className='hover:cursor-pointer text-black text-sm w-[15rem]' onClick={() => handleRedirect(data)}>
                                                        <p className='font-semibold'>{data.title}</p>
                                                        <p className={`text-gray-500 ${interactedMap[data._id] ? "break-words" : "truncate"} w-fit max-w-[14rem]`}>{data.notiDesc}</p>
                                                    </span>
                                                    {
                                                        !interactedMap[data._id] && data.notiDesc.length > 12 ?
                                                            <button className='text-xs self-end text-[#6366f1] font-semibold' onClick={() => handleinteraction(data)}>more</button>
                                                            :
                                                            null
                                                    }
                                                    {
                                                        interactedMap[data._id] &&
                                                        <button className='text-xs self-end text-slate-400 font-semibold' onClick={() => handleinteraction(data)}>less</button>
                                                    }
                                                </div>
                                                <span className='cursor-pointer invisible group-hover:visible hover:text-gray-700 font-semibold' onClick={(e) => handleClick(e, data)}><MoreVertIcon fontSize='medium' /></span>
                                            </li>
                                            :
                                            <li key={data._id} className={`w-full  transition-all duration-200  ease-in-out border rounded-lg group flex items-start justify-between gap-x-2 text-gray-400  my-2  ${checkInterectOrNot(data) ? "bg-white" : "bg-gray-100"} hover:bg-[#6365f125] hover:border-[#6365f14f]`}>
                                                <article className='w-full'>
                                                    <div className='flex items-center justify-start'>
                                                        <div className='px-4 py-2'>
                                                            <h3 className='text-gray-800 text-sm font-semibold'>{data.title}</h3>
                                                            <p className={`text-gray-500 text-xs ${interactedMap[data._id] ? "break-words" : "truncate"} w-fit max-w-[18rem]`}>{data.notiDesc}</p>
                                                        </div>
                                                        {
                                                            !interactedMap[data._id] && data.notiDesc.length > 12 ?
                                                                <button className='hover:cursor-pointer px-2 py-2 text-xs self-end text-[#6366f1] font-semibold' onClick={() => handleinteraction(data)}>more</button>
                                                                :
                                                                null
                                                        }
                                                        {
                                                            interactedMap[data._id] &&
                                                            <button className='hover:cursor-pointer px-2 py-2 text-xs self-end text-slate-400 font-semibold' onClick={() => handleinteraction(data)}>less</button>
                                                        }
                                                    </div>
                                                    <div className='hover:cursor-pointer w-full overflow-hidden' onClick={() => handleRedirect(data)}>
                                                        <img src={data.notiImage ? data.notiImage?.url : null} className='w-[1080px] h-[8rem]' alt="" />
                                                    </div>
                                                </article>
                                            </li>
                                    ))
                                } */}
                            </ul>
                        </div>
                    </div>
                </div >
            </Drawer >
            {/* <NotificationMenu open={openMenu} data={singleNotificationData} anchorEl={anchorEl} setAnchorEl={setAnchorEl} /> */}
        </>
    )
}

export default Notification