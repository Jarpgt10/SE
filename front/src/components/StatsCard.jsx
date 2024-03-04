import React from "react";
import Icon from "../utilities/Icon";

const StatsCard = ({ title, value, icon, }) => {
    return (

        <div className="shadow-gray-500 w-[20%] h-32 rounded-lg shadow-md p-4 ">
            <div className="flex justify-between">
                <div>{icon ? icon : title}</div>
                <div><Icon.points /></div>
            </div>
            <div className="justify-center flex mt-[10%]">
                <span className="text-xl font-bold">{value}</span>
            </div>
        </div>


        // <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-[20%]">
        //     <div className="flex  justify-between mb-4">

        //         <div className="text-lg font-bold text-gray-700">{title}</div>
        //         <div className={`material-icons text-2xl `}><Icon.points />
        //         </div>
        //     </div>
        //     <p className="text-4xl font-bold text-gray-900">{value}</p>
        // </div>
    );
};

export default StatsCard;