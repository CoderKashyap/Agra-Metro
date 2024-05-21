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
        className={`${
          open ? "fixed" : "hidden"
        } inset-0 backdrop-blur-sm bg-black bg-opacity-50 z-20`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`bg-yellow-100 inset-x-0  bottom-0 md: md:inset-auto fixed md:right-4 md:top-[10%] rounded-2xl ${
            open ? "slide_In" : "slide_Out"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col justify-start h-full">
            <h1 className="py-4 text-xl font-bold text-center ">
              Notices & Alerts <span className="text-base">(1)</span>
            </h1>
            <div
              className="text-black text-left cursor-pointer py-4 px-2 absolute top-0 left-0"
              onClick={() => setOpen(false)}
            >
              <NavigateNextIcon fontSize="medium" />
            </div>
            <div className="">
              <ul className="px-2 overflow-y-auto h-[60vh]">
                <li
                  className={`transition-all duration-200  ease-in-out border border-yellow-300 bg-yellow-50 rounded-lg group flex items-start justify-between gap-x-2 px-2 py-3 my-2`}
                >
                  <div className="px-1 flex items-start justify-stretch gap-x-2 w-full">
                    <div
                      className={`text-yellow-500 transition-all duration-200 ease-in-out`}
                    >
                      <NotificationsActiveIcon fontSize="medium" />
                    </div>
                    <div className="group hover:cursor-pointer text-black text-sm w-full">
                      <p className="font-semibold text-gray-600">notification title</p>
                      <p className={`text-gray-500 group-hover:text-amber-500 w-fit max-w-[14rem]`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni deleniti nobis quae, aspernatur possimus veniam
                        repellendus quo rem facere quam?``
                      </p>
                      <p className="min-w-fit text-xs self-end text-gray-600 group-hover:text-amber-500 font-semibold">
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
                      <p className={`text-gray-500 group-hover:text-amber-500 w-fit max-w-[14rem]`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni deleniti nobis quae, aspernatur possimus veniam
                        repellendus quo rem facere quam?``
                      </p>
                      <p className="min-w-fit text-xs self-end text-gray-600 group-hover:text-amber-500 font-semibold">
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
                      <p className={`text-gray-500 group-hover:text-amber-500 w-fit max-w-[14rem]`}>
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
            </div>
            <div className="border-t-2 border-yellow-300">
              <button className="w-full transition-all duration-150 ease-linear hover:bg-yellow-300 rounded-b-2xl py-4 font-semibold">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <NotificationMenu open={openMenu} data={singleNotificationData} anchorEl={anchorEl} setAnchorEl={setAnchorEl} /> */}
    </>
  );
};

export default Notification;
