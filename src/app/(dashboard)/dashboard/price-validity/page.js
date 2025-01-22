"use client"

const PriceValidityPage = () => {

    const handleSubmitPriceValidity = (event) => {
        event.preventDefault();
        const form = event.target;
        const two = form.two.value;
        const four = form.four.value;
        const six = form.six.value;
        const eight = form.eight.value;
        const singleSupplement = form.singleSupplement.value;

        const priceValidityInfo = {
            two,
            four,
            six,
            eight,
            singleSupplement
        }

        // Set the hotelInfo object in a cookie
        document.cookie = `priceValidityInfo=${encodeURIComponent(
            JSON.stringify(priceValidityInfo)
        )}; path=/; max-age=${60 * 60 * 24};`; // Cookie expires in 1 day

        // Optionally, reset the form
        form.reset();
        alert("priceValidityo Info saved in cookies!");
    }
    return (
        <div className="border border-red-500 m-4 p-4">
            <h1 className="text-xl font-bold font-Roboto text-primary py-2">PRICE & VALIDITY</h1>

            <form onSubmit={handleSubmitPriceValidity}>
                <div className="space-y-4">
                    {/* 2px for */}
                    <div>
                        <p>2 Pax</p>
                        <input required type="number" name="two" placeholder="2px" className="border px-2 py-1 outline-none" />
                    </div>
                    {/* 4px for */}
                    <div>
                        <p>4 Pax</p>
                        <input required type="number" name="four" placeholder="4px" className="border px-2 py-1 outline-none" />
                    </div>
                    {/* 6px for */}
                    <div>
                        <p>6 Pax</p>
                        <input required type="number" name="six" placeholder="6px" className="border px-2 py-1 outline-none" />
                    </div>
                    {/* 8px for */}
                    <div>
                        <p>8 Pax</p>
                        <input required type="number" name="eight" placeholder="8px" className="border px-2 py-1 outline-none" />
                    </div>
                    {/* Single Supplement for */}
                    <div>
                        <p>Single Supplement</p>
                        <input required type="number" name="singleSupplement" placeholder="Single Supplement" className="border px-2 py-1 outline-none" />
                    </div>

                </div>
                <div className="py-8">
                    <button type="submit" className="bg-primary text-white px-6 py-1">Save</button>
                </div>
            </form>
        </div>
    )
}

export default PriceValidityPage
