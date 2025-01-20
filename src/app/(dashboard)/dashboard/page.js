import { FaRegEye } from "react-icons/fa";

const DashboardPage = () => {
  return (
    <div className="m-10 bg-gray-100">
      {/* main div here */}
      <div className="grid grid-cols-6 gap-6">
        {/* one */}
        <div className="bg-green-400 p-4 space-y-3">
          <span ><FaRegEye className="bg-red-200 w-10 h-10 rounded-full p-2" /></span>
          <h1 className="text-xl font-bold">$3.456K</h1>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">Total views</h4>
            <h5 className="flex items-center">0.43% <FaRegEye /></h5>
          </div>
        </div>
        {/* two */}
        <div className="bg-green-400 p-4 space-y-3">
          <span ><FaRegEye className="bg-red-200 w-10 h-10 rounded-full p-2" /></span>
          <h1 className="text-xl font-bold">$3.456K</h1>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">Total views</h4>
            <h5 className="flex items-center">0.43% <FaRegEye /></h5>
          </div>
        </div>
        {/* three */}
        <div className="bg-green-400 p-4 space-y-3">
          <span ><FaRegEye className="bg-red-200 w-10 h-10 rounded-full p-2" /></span>
          <h1 className="text-xl font-bold">$3.456K</h1>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">Total views</h4>
            <h5 className="flex items-center">0.43% <FaRegEye /></h5>
          </div>
        </div>
        {/* four */}
        <div className="bg-green-400 p-4 space-y-3">
          <span ><FaRegEye className="bg-red-200 w-10 h-10 rounded-full p-2" /></span>
          <h1 className="text-xl font-bold">$3.456K</h1>
          <div className="flex justify-between items-center">
            <h4 className="font-semibold">Total views</h4>
            <h5 className="flex items-center">0.43% <FaRegEye /></h5>
          </div>
        </div>

      </div>
    </div>

  )
}

export default DashboardPage
