import { Image } from "next/image";

const Sidebar = () => {
  return (
    <div>
      <div>
        <Image src={"/Logo.png"} alt="" width="50" height="50" />
      </div>
    </div>
  );
};

export default Sidebar;
