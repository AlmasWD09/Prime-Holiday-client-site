"use client"




const HotalTable = ({singleData}) => {
    const TABLE_HEAD = ["City", "4* Standard Hotel", "Room Type", "4* Superior Hotel", "Room Type"];

    const TABLE_ROWS = [
        {
            id: "01",
            name: "Muscat",
            job: "Golden Tulip or similar",
            romType01: "Standard",
            romType02: "Standard",
            superior: "Radisson Blu or Similar",
        },
        {
            id: "02",
            name: "Sur",
            job: "Turtle Beach Resort",
            romType01: "Standard",
            romType02: "Standard",
            superior: "Ras AI Jinz Resort",
        },
        {
            id: "03",
            name: "Wahiba",
            job: "Sama AI Wasil Camp",
            romType01: "Chalet",
            romType02: "Desert Rose Camp",
            superior: "Deluxe Tent",
        },
        {
            id: "04",
            name: "Nizwa",
            job: "Antique Inn or Similar",
            romType01: "Standard",
            romType02: "Standard",
            superior: "Antique Inn or Similar",
        },
        {
            id: "05",
            name: "Misfah",
            job: "Misfah Hospitality Inn",
            romType01: "Standard",
            romType02: "Standard",
            superior: "Misfah Hospitality Inn",
        },
        {
            id: "06",
            name: "Wakan Village",
            job: "Wakan Guest House",
            romType01: "Standard",
            romType02: "Standard",
            superior: "Wakan Guest House",
        },
        {
            id: "07",
            name: "Muscat",
            job: "Golden Tulip or similar",
            romType01: "Standard",
            romType02: "Standard",
            superior: "Radisson Blu or Similar",
        },
    ];

    return (
        <div className="relative max-w-full">
            {/* Scroll Wrapper */}
            <div className="overflow-x-auto overflow-y-hidden max-w-full custom-scrollbar">
                <div className="w-full">
                    <table className="w-full min-w-max table-auto text-left mt-8 ">
                        <thead>
                            <tr>
                               
                                {TABLE_HEAD.map((head, index) => (
                                    <th key={index} className="border-b border-blue-gray-100 bg-[#fffff0] p-4">
                                        <p
                                            variant="small"
                                            color="blue-gray"
                                            className="font-bold text-[20px] text-[#135029]"
                                        >
                                            {head}
                                        </p>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {singleData?.hotels?.map((item,index) => (
                                <tr key={index} className="even:bg-[#ffe3bd]">
                                    <td className="p-4">
                                        <p variant="small" color="blue-gray" className="text-[#454545] font-medium text-[18px]">
                                            {item.city}
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <p variant="small" color="blue-gray" className="text-[#454545] font-medium text-[18px]">
                                          {item.standard_hotel}
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <p variant="small" color="blue-gray" className="text-[#454545] font-medium text-[18px]">
                                            {item.room_type}
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <p as="a" href="#" variant="small" color="blue-gray" className="text-[#454545] font-medium text-[18px]">
                                        {item.supeior_hotel}
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <p as="a" href="#" variant="small" color="blue-gray" className="text-[#454545] font-medium text-[18px]">
                                            {item.room_type1}
                                        </p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default HotalTable;
