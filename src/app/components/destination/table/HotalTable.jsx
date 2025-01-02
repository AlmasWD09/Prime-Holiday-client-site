"use client"
import { Card, Typography } from "@material-tailwind/react";

const HotalTable = () => {
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
                <Card className="w-full">
                    <table className="w-full min-w-max table-auto text-left mt-8">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head, index) => (
                                    <th key={index} className="border-b border-blue-gray-100 bg-[#fffff0] p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-bold text-xl"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_ROWS.map(({ name, job, romType01, romType02, superior }, index) => (
                                <tr key={index} className="even:bg-[#ffe3bd]">
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {name}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {job}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {romType01}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                            {superior}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                            {romType02}
                                        </Typography>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            </div>
        </div>
    );
};

export default HotalTable;
