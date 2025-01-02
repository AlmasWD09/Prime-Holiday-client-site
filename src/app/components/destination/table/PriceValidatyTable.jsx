"use client"
import { Card, rating, Typography } from "@material-tailwind/react";
import Image from "next/image";


const PriceValidatyTable = () => {
    const TABLE_HEAD = ["Hotel Category", "2 Pax", "4 Pax", "6 Pax", "8 Pax", "Single Supplement"];

    const TABLE_ROWS = [
        {
            id: "01",
            ratingTitle: "- Standard",
            firstPax: "2525",
            secondPax: "2525",
            thirdPax: "2525",
            fourPax: "2525",
            singleSupliment: "2525",
        },
        {
            id: "02",
            ratingTitle: "- Superior",
            firstPax: "2525",
            secondPax: "2525",
            thirdPax: "2525",
            fourPax: "2525",
            singleSupliment: "2525",
        },

    ];

    return (
        <div className="relative max-w-full">
            {/* Scroll Wrapper */}
            <div className="overflow-x-auto overflow-y-hidden max-w-full custom-scrollbar">
                <Card className="w-full">
                    <table className="w-full min-w-max table-auto text-left mt-4">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head, index) => (
                                    <th key={index} className="border-b border-blue-gray-100 text-lg text-center bg-[#135029] text-white p-4">
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
                            {TABLE_ROWS.map(({firstPax, secondPax, thirdPax, fourPax, singleSupliment,ratingTitle }, index) => (
                                <tr key={index} className="">
                                    <td className="py-4">
                                        <Typography variant="small" color="blue-gray" className="font-semibold text-center  py-2 bg-[#f0f8f3] rounded text-lg">
                                           <span className="flex items-center gap-3 px-2">
                                            <Image src={'/svgImage/star.svg'} alt="rating icon" width={20} height={20} className="h-[20px] w-[20px]"/>
                                            <Image src={'/svgImage/star.svg'} alt="rating icon" width={20} height={20} className="h-[20px] w-[20px]"/>
                                            <Image src={'/svgImage/star.svg'} alt="rating icon" width={20} height={20} className="h-[20px] w-[20px]"/>
                                            <Image src={'/svgImage/star.svg'} alt="rating icon" width={20} height={20} className="h-[20px] w-[20px]"/>
                                            <Image src={'/svgImage/star.svg'} alt="rating icon" width={20} height={20} className="h-[20px] w-[20px]"/>
                                            {ratingTitle}
                                            </span>
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-semibold text-center border border-[#135029] p-2 hover:bg-[#135029] hover:text-white rounded text-lg">
                                            ${firstPax}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-semibold text-center border border-[#135029] p-2 hover:bg-[#135029] hover:text-white rounded text-lg">
                                            ${secondPax}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-semibold text-center border border-[#135029] p-2 hover:bg-[#135029] hover:text-white rounded text-lg">
                                            ${thirdPax}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-semibold text-center border border-[#135029] p-2 hover:bg-[#135029] hover:text-white rounded text-lg">
                                            ${fourPax}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-semibold text-center border border-[#135029] p-2 hover:bg-[#135029] hover:text-white rounded text-lg">
                                            ${singleSupliment}
                                        </Typography>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            </div>
        </div>
    )
}

export default PriceValidatyTable
