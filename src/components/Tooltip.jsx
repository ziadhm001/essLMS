import { useRef } from "react";
import CourseApi from "../api/course";
import { useNavigate } from "react-router-dom";
const ToolTip = ({ children, tooltip, id }) => {
  const tooltipRef = useRef(null);
  const container = useRef(null);
  const navigate = useNavigate()
  return (
    <div
      ref={container}
  
      className="group relative inline-block"
    >
      {children}
      {tooltip ? (
        <div className="flex flex-row justify-center">
            <div className="arrow-up bg-blue-900 invisible opacity-0 transition group-hover:opacity-50 group-hover:visible"/>
            <div ref={tooltipRef}
            className="invisible group justify-center space-y-2 h-52 flex group-hover:visible opacity-0 flex-col group-hover:opacity-100 hover:bg-blue-50 transition bg-white text-black border p-4 rounded absolute top-full w-64 whitespace-nowrap shadow-lg">
                <p className="text-sm p-0 flex whitespace-normal">
                {tooltip}
                </p>
                <button className="flex p-1 border rounded-md text-sm border-blue-950 bg-blue-600 justify-center self-end hover:bg-blue-800 text-white w-24" onClick={() => console.log(CourseApi.Join({id}).then((response) => navigate(`/course/${response.data.id}`)))}>Enroll</button>
            </div>
        </div>
        ) : null}
    </div>
  );
}

export default ToolTip