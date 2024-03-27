import Image from "next/image";

const Rightbar = () => {
  const activitys = [
    {
      title: "New User registration",
      subTitle: "2 sec ago",
      icon: "/icons/Person.png",
    },
    {
      title: "A Product Stock has been updated",
      subTitle: "2 sec ago",
      icon: "/icons/DownBin.png",
    },
    {
      title: "A Payment has been done",
      subTitle: "2 sec ago",
      icon: "/icons/Payment.png",
    },
    {
      title: "A Product is out of stock",
      subTitle: "2 sec ago",
      icon: "/icons/DeleteBin.png",
    },
    {
      title: "An Appoinment confirmed",
      subTitle: "2 sec ago",
      icon: "/icons/Calender.png",
    },
    {
      title: "New User registration",
      subTitle: "2 sec ago",
      icon: "/icons/Person.png",
    },
    {
      title: "A Product is out of stock",
      subTitle: "2 sec ago",
      icon: "/icons/DeleteBin.png",
    },
  ];
  return (
    <div className="bg-white rounded-lg shadow-sm m-6 p-4">
      <div className="flex justify-between ">
        <h1>Recent Activity</h1>
        <p>View All</p>
      </div>
      {activitys.map((activity, idx) => (
        <div key={idx}>
          <div className="flex m-4">
            <Image src={activity.icon} alt="icon" width={20} height={15} />
            <div className="flex flex-col mx-4">
              <h4 className="text-sm">{activity.title}</h4>
              <span className="text-sm font-thin text-zinc-500">
                {activity.subTitle}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rightbar;
