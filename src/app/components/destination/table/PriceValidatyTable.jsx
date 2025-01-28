"use client"

import Item from "antd/es/list/Item";
import Image from "next/image";


const PriceValidatyTable = ({singleData}) => {
    const TABLE_HEAD = ["Hotel Category", "2 Pax", "4 Pax", "6 Pax", "8 Pax", "Single Supplement"];

    const TABLE_ROWS = [
        {
            id: "01",
            ratingTitle: "- Standard",
        },
        {
            id: "02",
            ratingTitle: "- Superior",
        },

    ];

    return (
        <div className="relative max-w-full">
            {/* Scroll Wrapper */}
            <div className="overflow-x-auto overflow-y-hidden max-w-full custom-scrollbar">
                <div className="w-full">
                    <table className="w-full min-w-max table-auto text-left mt-[24px]">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head, index) => (
                                    <th key={index} className="border-b border-blue-gray-100 text-lg text-center bg-[#135029] text-[#FFFFF0] p-4">
                                        <p
                                            variant="small"
                                            color="blue-gray"
                                            className="text[20px] font-bold text-[#FFFFF0]"
                                        >
                                            {head}
                                        </p>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {singleData?.price_validity?.map((item, index) => (
                                <tr key={index} className="">
                                    <td className="py-4">
                                        <p variant="small" color="blue-gray" className="font-semibold text-center  py-2 bg-[#f0f8f3] rounded text-lg">
                                           <span className="flex items-center gap-3 px-2">
                                            <Image src={'/svgImage/star.svg'} alt="rating icon" width={20} height={20} className="h-[20px] w-[20px]"/>
                                            <Image src={'/svgImage/star.svg'} alt="rating icon" width={20} height={20} className="h-[20px] w-[20px]"/>
                                            <Image src={'/svgImage/star.svg'} alt="rating icon" width={20} height={20} className="h-[20px] w-[20px]"/>
                                            <Image src={'/svgImage/star.svg'} alt="rating icon" width={20} height={20} className="h-[20px] w-[20px]"/>
                                            <Image src={'/svgImage/star.svg'} alt="rating icon" width={20} height={20} className="h-[20px] w-[20px]"/>
                                            {/* {ratingTitle} */}
                                            - Standard 
                                            </span>
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <p variant="small" color="blue-gray" className="font-bold text-center border border-[#135029] p-2 hover:bg-[#135029] hover:text-[#FFFFF0] rounded text-[18px]">
                                            ${item.two}
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <p variant="small" color="blue-gray" className="font-bold text-center border border-[#135029] p-2 hover:bg-[#135029] hover:text-[#FFFFF0] rounded text-[18px]">
                                        ${item.four}
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <p variant="small" color="blue-gray" className="font-bold text-center border border-[#135029] p-2 hover:bg-[#135029] hover:text-[#FFFFF0] rounded text-[18px]">
                                        ${item.six}
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <p variant="small" color="blue-gray" className="font-bold text-center border border-[#135029] p-2 hover:bg-[#135029] hover:text-[#FFFFF0] rounded text-[18px]">
                                        ${item.eight}
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <p variant="small" color="blue-gray" className="font-bold text-center border border-[#135029] p-2 hover:bg-[#135029] hover:text-[#FFFFF0] rounded text-[18px]">
                                        ${item.single_supplement}
                                        </p>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PriceValidatyTable
