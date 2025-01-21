"use client"


const ItineryPage = () => {



    const handleSubmitItinery = (event) => {
        event.preventDefault();
        const form = event.target;

        // Extracting values from the form
        const lunchTime = form.lunchTime.value;
        const days = form.days.value;
        const description = form.description.value;
       

        // Create hotelInfo object
        const initeryInfo = {
           lunchTime,
           days,
           description,
        };


        console.log(initeryInfo)
        // localStorage.setItem('initeryDetails',JSON.stringify(initeryInfo))
        // Optionally, reset the form
        form.reset();
    };


    return (
        <div className="border border-red-500 m-4 p-4">
            <h1 className="text-xl font-bold font-Roboto text-primary py-2">ITINERARY</h1>

            <form onSubmit={handleSubmitItinery}>
                <div className="space-y-4">
                    {/* LunchTime */}
                    <div>
                        <p>LunchTime</p>
                        <input required type="text" name="lunchTime" placeholder="LunchTime" className="border px-2 py-1 outline-none" />
                    </div>

                    {/* days */}
                    <div>
                        <p>Days</p>
                        <input required type="number" name="days" placeholder="Days" className="border px-2 py-1 outline-none" />
                    </div>


                    {/* description */}
                    <div>
                    <p>Itinery Description</p>
                        <textarea name="description" placeholder="Enter Your Description...." rows={10} cols={60} className="border p-2 outline-none"></textarea>
                    </div>
                </div>

                <div className="py-8">
                    <button type="submit" className="bg-primary text-white px-6 py-1">Save</button>
                </div>
            </form>

        </div>
    )
}

export default ItineryPage


// lunchPeriod