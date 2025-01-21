import React from 'react'

const extra = () => {
  return (
    <div>
              {/* **** tab button *** */}
              <section className=" pt-[56px]">
          <div className="p-6 border border-[#B0B0B0] border-opacity-20 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4  border-gray-300 pb-6">
              <button className="py-3 text-center font-bold border border-[#135029] rounded-xl border-opacity-30 hover:bg-[#135029] hover:text-[#FFFFF0] ">INCLUDES & EXCLUDES</button>
              <Link href={'/dashboard/hotal-package'} className="py-3 text-center text-black font-bold border border-[#135029] rounded-xl border-opacity-30 hover:bg-[#135029] hover:text-[#FFFFF0] "><button >HOTELS</button></Link>
              <Link href={'/dashboard/price-validity'} className="py-3 text-center text-black font-bold border border-[#135029] rounded-xl border-opacity-30 hover:bg-[#135029] hover:text-[#FFFFF0] "><button >PRICE & VALIDITY</button></Link>
              <Link href={'/dashboard/itinery'} className="py-3 text-center text-black font-bold border border-[#135029] rounded-xl border-opacity-30 hover:bg-[#135029] hover:text-[#FFFFF0] "><button >ITINERARY</button></Link>
            </div>

            {/* =============== INCLUDES & EXCLUDES Tab start =========================== */}
            {
              buttonText === "INCLUDES & EXCLUDES" && <div>
                <div className="flex justify-evenly bg-[#135029] py-4">
                  <h3 className=" font-bold text-[#FFFFFF]">Includes</h3>
                  <h3 className=" font-bold text-[#FFFFFF]">Excludes</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                  {/* Includes Section */}
                  <div className="p-4">
                    <div className="flex justify-between lg:border-r border-[#D1D1D1] border-opacity-30">
                      <input
                        type="text"
                        placeholder="Enter your text"
                        value={inputValue} // Bind input value to state
                        onChange={(e) => setInputValue(e.target.value)}
                        className="bg-transparent border border-primary outline-none px-2 py-1 rounded-lg"
                      />
                      <button
                        onClick={handleAdd}
                        className="border border-primary hover:bg-primary hover:text-white px-4 py-1 mr-4 rounded-lg"
                      >
                        Add
                      </button>
                    </div>

                    {/* Display the items */}
                    <div className="mt-4">
                      {items.map((item, index) => (
                        <div key={item.id} className="p-2 border-b">
                          {index + 1}. {item.text}
                        </div>
                      ))}
                    </div>

                  </div>


                  {/* Excludes Section */}
                  <div className="p-4">
                    <div className="flex justify-between ">
                      <input
                        type="text"
                        placeholder="Enter your text"
                        value={inputValueExcludes}
                        onChange={(e) => setInputValueExcludes(e.target.value)}
                        className="bg-transparent border border-primary outline-none px-2 py-1 rounded-lg"
                      />
                      <button
                        onClick={handleAddTwo}
                        className="border border-primary hover:bg-primary hover:text-white px-4 py-1 mr-4 rounded-lg">
                        Add
                      </button>
                    </div>
                    {/* Display the items */}
                    <div className="mt-4">
                      {itemsExcludes.map((item, index) => (
                        <div key={item.id} className="p-2 border-b">
                          {index + 1}. {item.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            }
            {/* =============== INCLUDES & EXCLUDES Tab end ============================= */}
          </div>
        </section>
    </div>
  )
}

export default extra
