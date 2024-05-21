// import Drawer from "@mui/material/Drawer";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import "./Notification.css";

interface NotificationProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  notificationDot?: any;
}

const Notification: React.FC<NotificationProps> = ({ open, setOpen }) => {
  // const navigate = useNavigate();

  // const [selectType, setNotifyType] = useState<string>("general");
  // const [filteredNotify, setFilteredNotify] = useState<any[]>([]);
  // const [interactedMap, setInteractedMap] = useState<any>({});
  // const [showSpecificDot, setSpecificDot] = useState<boolean>(false);
  // const [singleNotificationData, setSingleNotificationData] = useState<any>({});

  // const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  // const openMenu = Boolean(anchorEl);

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
      <div
        className={`${open ? "fixed" : "hidden"
          } inset-0 backdrop-blur-sm bg-black bg-opacity-50 z-20`}
        onClick={() => setOpen(false)}
      >



        <div className={`inset-x-0 h-full bottom-0 md:inset-auto md:p-4 w-full md:w-96 fixed md:right-0 ${open ? "slide_In" : "slide_Out"
          }`} onClick={(e) => e.stopPropagation()}>

          <div className="bg-white flex flex-col md:rounded-xl h-full">

            <div className="flex justify-around items-center">

              <span className="cursor-pointer flex rounded-full text-white bg-amber-400"
                onClick={() => setOpen(false)}
              >
                <NavigateNextIcon fontSize="medium" />
              </span>

              <h1 className="py-4 text-xl font-bold text-center">Notices & Alerts</h1>

              <h1 className="py-4 text-xl font-bold text-center"><span className="text-base">(1)</span> </h1>

            </div>


            <ul className="px-3 flex flex-col overflow-y-auto h-full">
              <li
                className={`transition-all duration-200 ease-in-out border border-yellow-300 bg-yellow-50 rounded-lg group flex items-start justify-between gap-x-2 px-2 py-3 my-2`}
              >
                <div className="px-1 flex items-start justify-stretch gap-x-2 w-full">
                  <div
                    className={`text-yellow-500 transition-all duration-200 ease-in-out`}
                  >
                    <NotificationsActiveIcon fontSize="medium" />
                  </div>
                  <div className="group hover:cursor-pointer text-black text-sm w-full">
                    <p className="font-semibold text-gray-600">notification title</p>
                    <p className={`text-gray-500 group-hover:text-amber-400 w-full`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni deleniti nobis quae, aspernatur possimus veniam
                      repellendus quo rem facere quam?``
                    </p>
                    <p className="min-w-fit text-xs self-end text-gray-600 group-hover:text-amber-400 font-semibold">
                      Read More
                    </p>
                  </div>
                </div>
              </li>
              <li
                className={`transition-all duration-200  ease-in-out border border-yellow-300 bg-yellow-50 rounded-lg group flex items-start justify-between gap-x-2 text-gray-400 px-2 py-3 my-2`}
              >
                <div className="px-1 flex items-start justify-stretch gap-x-2 w-full">
                  <div
                    className={`text-yellow-500 transition-all duration-200 ease-in-out`}
                  >
                    <NotificationsActiveIcon fontSize="medium" />
                  </div>
                  <div className="group hover:cursor-pointer text-black text-sm w-full">
                    <p className="font-semibold text-gray-600">notification title</p>
                    <p className={`text-gray-500 group-hover:text-amber-400 w-full`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni deleniti nobis quae, aspernatur possimus veniam
                      repellendus quo rem facere quam?``
                    </p>
                    <p className="min-w-fit text-xs self-end text-gray-600 group-hover:text-amber-400 font-semibold">
                      Read More
                    </p>
                  </div>
                  {/* <button className="min-w-fit text-xs self-end text-gray-600 font-semibold">
                        Read More...
                      </button> */}
                </div>
              </li>
              <li
                className={`transition-all duration-200  ease-in-out border border-yellow-300 bg-yellow-50 rounded-lg group flex items-start justify-between gap-x-2 text-gray-400 px-2 py-3 my-2`}
              >
                <div className="px-1 flex items-start justify-stretch gap-x-2 w-full">
                  <div
                    className={`text-yellow-500 transition-all duration-200 ease-in-out`}
                  >
                    <NotificationsActiveIcon fontSize="medium" />
                  </div>
                  <div className="group hover:cursor-pointer text-black text-sm w-full">
                    <p className="font-semibold text-gray-600">notification title</p>
                    <p className={`text-gray-500 group-hover:text-amber-400 w-full`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni deleniti nobis quae, aspernatur possimus veniam
                      repellendus quo rem facere quam?``
                    </p>
                    <p className="min-w-fit text-xs self-end text-gray-600 group-hover:text-amber-600 font-semibold">
                      Read More
                    </p>
                  </div>
                  {/* <button className="min-w-fit text-xs self-end text-gray-600 font-semibold">
                        Read More...
                      </button> */}
                </div>
              </li>
              <li
                className={`transition-all duration-200 ease-in-out border border-yellow-300 bg-yellow-50 rounded-lg group flex items-start justify-between gap-x-2 px-2 py-3 my-2`}
              >
                <div className="px-1 flex items-start justify-stretch gap-x-2 w-full">
                  <div
                    className={`text-yellow-500 transition-all duration-200 ease-in-out`}
                  >
                    <NotificationsActiveIcon fontSize="medium" />
                  </div>
                  <div className="group hover:cursor-pointer text-black text-sm w-full">
                    <p className="font-semibold text-gray-600">notification title</p>
                    <p className={`text-gray-500 group-hover:text-amber-400 w-full`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni deleniti nobis quae, aspernatur possimus veniam
                      repellendus quo rem facere quam?``
                    </p>
                    <p className="min-w-fit text-xs self-end text-gray-600 group-hover:text-amber-400 font-semibold">
                      Read More
                    </p>
                  </div>
                </div>
              </li>
              <li
                className={`transition-all duration-200  ease-in-out border border-yellow-300 bg-yellow-50 rounded-lg group flex items-start justify-between gap-x-2 text-gray-400 px-2 py-3 my-2`}
              >
                <div className="px-1 flex items-start justify-stretch gap-x-2 w-full">
                  <div
                    className={`text-yellow-500 transition-all duration-200 ease-in-out`}
                  >
                    <NotificationsActiveIcon fontSize="medium" />
                  </div>
                  <div className="group hover:cursor-pointer text-black text-sm w-full">
                    <p className="font-semibold text-gray-600">notification title</p>
                    <p className={`text-gray-500 group-hover:text-amber-400 w-full`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni deleniti nobis quae, aspernatur possimus veniam
                      repellendus quo rem facere quam?``
                    </p>
                    <p className="min-w-fit text-xs self-end text-gray-600 group-hover:text-amber-400 font-semibold">
                      Read More
                    </p>
                  </div>
                  {/* <button className="min-w-fit text-xs self-end text-gray-600 font-semibold">
                        Read More...
                      </button> */}
                </div>
              </li>
              <li
                className={`transition-all duration-200  ease-in-out border border-yellow-300 bg-yellow-50 rounded-lg group flex items-start justify-between gap-x-2 text-gray-400 px-2 py-3 my-2`}
              >
                <div className="px-1 flex items-start justify-stretch gap-x-2 w-full">
                  <div
                    className={`text-yellow-500 transition-all duration-200 ease-in-out`}
                  >
                    <NotificationsActiveIcon fontSize="medium" />
                  </div>
                  <div className="group hover:cursor-pointer text-black text-sm w-full">
                    <p className="font-semibold text-gray-600">notification title</p>
                    <p className={`text-gray-500 group-hover:text-amber-400 w-full`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni deleniti nobis quae, aspernatur possimus veniam
                      repellendus quo rem facere quam?``
                    </p>
                    <p className="min-w-fit text-xs self-end text-gray-600 group-hover:text-amber-600 font-semibold">
                      Read More
                    </p>
                  </div>
                  {/* <button className="min-w-fit text-xs self-end text-gray-600 font-semibold">
                        Read More...
                      </button> */}
                </div>
              </li>
            </ul>

            <div className="flex justify-center items-center">
              <button className="transition-all duration-150 ease-linear m-3 text-white bg-amber-400 rounded-2xl py-1 px-4 font-semibold">
                View all
              </button>
            </div>


          </div>


        </div>


      </div>
    </>
  );
};

export default Notification;
