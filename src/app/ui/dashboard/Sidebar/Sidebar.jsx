import { Image } from "next/image";

const Sidebar = () => {
  return (
    <div>
      <div>
        {/* <Image src={"/Logo.png"} alt="" width="50" height="50" /> */}
      </div>
      <ul className="flex flex-col m-10">
        <li className="mt-2">Overview</li>
        <li>Profile</li>
        <li>Appointments</li>
        <li>
          History
          <li>Videos</li>
          <li>Videos Library </li>
        </li>
        <li>Messages</li>
        <li>
          Support
          <li>FAQ</li>
          <li>Procedure Information </li>
        </li>
        <li>
          Aftercare
          <li>Quizzes</li>
          <li>Health & Skin Assesment</li>
        </li>
        <li>Finances</li>
        <li>Virtual Consultation</li>
      </ul>
    </div>
  );
};

export default Sidebar;
