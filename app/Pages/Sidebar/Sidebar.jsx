
const Sidebar = async () => {
  return (
    <div className="text-[#4C4D4F] text-[18px] font-medium w-[240px] bg-[#f5f1f1e5] py-4">
      <div>
        <ul className="flex flex-col gap-4 mx-auto p-6">
          <li>Overview</li>
          <li>Appointment</li>
          <li>
            History
            <ul className="text-[14px] ps-5 mt-3 flex flex-col gap-4">
              <li>Videos</li>
              <li>Videos Library</li>
            </ul>
          </li>
          <li>Messages</li>
          <li>
            Support
            <ul className="text-[14px] ps-5 mt-3 flex flex-col gap-4">
              <li>FAQ's</li>
              <li>Procedure Information</li>
            </ul>
          </li>
          <li>
            Aftercare
            <ul className="text-[14px] ps-5 mt-3 flex flex-col gap-4">
              <li>Quizzes</li>
              <li>Health & Skin Assesment</li>
            </ul>
          </li>
          <li>Finance</li>
          <li>Virtual Consultation</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
