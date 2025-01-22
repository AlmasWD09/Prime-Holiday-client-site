"use client";


const HotelPage = () => {


    const handleSubmitHotel = (event) => {
        event.preventDefault();
        const form = event.target;

        // Extracting values from the form
        const city = form.city.value;
        const hotel = form.hotel.value;
        const roomTypeOne = form.roomTypeOne.value;
        const supeiorHotel = form.supeiorHotel.value;
        const roomTypeTwo = form.roomTypeTwo.value;

        // Create hotelInfo object
        const hotelInfo = {
            city,
            hotel,
            roomTypeOne,
            supeiorHotel,
            roomTypeTwo,
        };

          // Set the hotelInfo object in a cookie
          document.cookie = `hotelInfo=${encodeURIComponent(
            JSON.stringify(hotelInfo)
        )}; path=/; max-age=${60 * 60 * 24};`; // Cookie expires in 1 day

        // Optionally, reset the form
        form.reset();
        alert("Hotel Info saved in cookies!");
    };



    return (
        <div className="border border-red-500 m-4 p-4">
            <h1 className="text-xl font-bold font-Roboto text-primary py-2">Hotel</h1>

            <form onSubmit={handleSubmitHotel}>
                <div className="space-y-4">
                    {/* City */}
                    <div>
                        <p>City</p>
                        <input required type="text" name="city" placeholder="City" className="border px-2 py-1 outline-none" />
                    </div>
                    {/* Standard Hotel */}
                    <div>
                        <p>Standard Hotel</p>
                        <input required type="text" name="hotel" placeholder="Standard Hotel" className="border px-2 py-1 outline-none" />
                    </div>
                    {/* Room Type One */}
                    <div>
                        <p>Room Type</p>
                        <input required type="text" name="roomTypeOne" placeholder="Room Type" className="border px-2 py-1 outline-none" />
                    </div>
                    {/* Supeior Hotel */}
                    <div>
                        <p>Supeior Hotel</p>
                        <input required type="text" name="supeiorHotel" placeholder="Supeior Hotel" className="border px-2 py-1 outline-none" />
                    </div>
                    {/* Room Type Two */}
                    <div>
                        <p>Room Type</p>
                        <input required type="text" name="roomTypeTwo" placeholder="Room Type" className="border px-2 py-1 outline-none" />
                    </div>
                </div>

                <div className="py-8">
                    <button type="submit" className="bg-primary text-white px-6 py-1">Save</button>
                </div>
            </form>

        </div>
    );
};

export default HotelPage;
