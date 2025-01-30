"use client"

const CancelationPolicy = () => {
    return (
        <>
            <section className="container mx-auto px-4 pt-20 font-Roboto">
                <div className="">
                    <h1 className="text-[20px] md:text-[24px] text-primary font-Roboto font-semibold pb-[24px]">
                        Cancellation and Refund Policy
                    </h1>
                    <p className="text-[20px] md:text-[24px] font-normal text-[#454545]">
                        At Prime Holiday Destinations (PHD), we aim to provide a flexible and
                        fair cancellation and refund policy to meet the needs of our travelers
                        while maintaining a smooth booking experience. Please review the terms
                        below, which apply to all bookings made with us.
                    </p>

                    {/* Payment Options Section */}
                    <section className="mb-16">
                        <h2 className="text-[20px] md:text-[24px] text-gray-800 font-Roboto font-semibold mb-2 pt-8">1. Payment Options</h2>
                        <p className="text-[20px] md:text-[24px] font-normal text-[#454545]">We offer two payment methods:</p>

                        <ul className="list-disc list-inside text-sm text-gray-[#454545] space-y-2">
                        <li className="text-[20px] md:text-[24px] font-normal text-[#454545]"><strong>Bank Transfer:</strong> Payment via BACS to our business account.</li>
                        <li className="text-[20px] md:text-[24px] font-normal text-[#454545]"><strong>PayPal:</strong> A payment link will be emailed to you upon request.</li>
                        <li className="text-[20px] md:text-[24px] font-normal text-[#454545]">For bookings with a travel date within 30 days of confirmation, full payment is required.</li>
                        <li className="text-[20px] md:text-[24px] font-normal text-[#454545]">For bookings with a travel date beyond 30 days, a deposit of $100 is required to secure your booking. The remaining balance must be paid in full at least 30 days before the date of arrival at the destination.</li>
                        </ul>
                    </section>



                    {/* Cancellation Policy Section */}
                    <section className="mb-16">
                        <h2 className="text-[20px] md:text-[24px] text-gray-800 font-Roboto font-semibold mb-2">2. Cancellation Policy</h2>
                        <p className="text-[20px] md:text-[24px] font-normal text-[#454545]">Cancellation policies vary based on the destination and service providers. We work closely with our local partners to ensure that the terms are clearly communicated to avoid misunderstandings.</p>

                        <ul className="list-disc list-inside text-sm text-gray-[#454545] space-y-2">
                            <li className="text-[20px] md:text-[24px] font-normal text-[#454545]">
                                All cancellation requests must be submitted in writing via email at least 30 days before the travel date.
                            </li>
                            <li className="text-[20px] md:text-[24px] font-normal text-[#454545]">
                            Cancellation requests received less than 30 days before the start of the holiday package will be subject to our refund policy outlined below.
                            </li>
                        </ul>
                    </section>

                    {/* Refund Policy Section */}
                    <section className="mb-16">
                        <h2 className="text-[20px] md:text-[24px] text-gray-800 font-Roboto font-semibold mb-2">3. Refund Policy</h2>
                        <p className="text-[20px] md:text-[24px] font-normal text-[#454545]">
                        Refunds depend on the timing of the cancellation, as follows:
                        </p>

                        <ul className="list-disc list-inside text-sm text-gray-[#454545] space-y-2">
                            <li className="text-[20px] md:text-[24px] font-normal text-[#454545]">
                                <strong>30 days or more before departure:</strong>  Full refund, minus a $50 administration fee.
                            </li>
                            <li className="text-[20px] md:text-[24px] font-normal text-[#454545]">
                                <strong>29 – 22 days before departure: </strong>  50% refund, minus a $50 administration fee.
                            </li>
                            <li className="text-[20px] md:text-[24px] font-normal text-[#454545]">
                                <strong>21 days or less before departure:</strong>  No refund will be issued
                            </li>
                        </ul>
                    </section>

                    {/* Footer */}
                    <div className=" mt-6  text-sm text-gray-[#454545]">
                        <h1 className="text-[20px] md:text-[24px] text-gray-800 font-Roboto font-semibold mb-2">Note:</h1>
                        <p className="text-[20px] md:text-[24px] font-normal text-[#454545]">All refunds are subject to a $50 administration fee.</p>
                        <p className="text-[20px] md:text-[24px] font-normal text-[#454545]">The Cancellation & Refund Policy is subject to change without prior notice.</p>
                    </div>
                    <div className="pt-10">
                        <p className="text-[20px] md:text-[24px] font-normal text-[#454545]">For any questions or further clarifications, feel free to contact us.</p>
                        <p className="text-[20px] md:text-[24px] font-normal text-[#454545]">We’re here to make your holiday planning as seamless and enjoyable as possible.
                        </p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default CancelationPolicy
