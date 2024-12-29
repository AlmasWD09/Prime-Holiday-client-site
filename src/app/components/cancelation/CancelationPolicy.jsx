"use client"

const CancelationPolicy = () => {
    return (
        <>
            <section className="container mx-auto px-4 pt-20">
                <div className="p-8">
                    <h1 className="text-2xl font-bold mb-4 text-primary">
                        Cancellation and Refund Policy
                    </h1>
                    <p className="text-sm text-gray-600 mb-6">
                        At Prime Holiday Destinations (PHD), we aim to provide a flexible and
                        fair cancellation and refund policy to meet the needs of our travelers
                        while maintaining a smooth booking experience. Please review the terms
                        below, which apply to all bookings made with us.
                    </p>

                    {/* Payment Options Section */}
                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">1. Payment Options</h2>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                            <li>Bank Transfer: Payment via BACS to our business account.</li>
                            <li>PayPal: A payment link will be emailed to you upon request.</li>
                            <li>
                                For bookings with a travel date within 30 days of confirmation,
                                full payment is required.
                            </li>
                            <li>
                                For bookings with a travel date beyond 30 days, a deposit of $100
                                is required to secure your booking. The remaining balance must be
                                paid in full at least 30 days before the date of arrival at the
                                destination.
                            </li>
                        </ul>
                    </section>

                    {/* Cancellation Policy Section */}
                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">2. Cancellation Policy</h2>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                            <li>
                                Cancellation policies vary based on the destination and service
                                providers. We work closely with our local partners to ensure that
                                the terms are clearly communicated to avoid misunderstandings.
                            </li>
                            <li>
                                All cancellation requests must be submitted in writing via email
                                at least 30 days before the travel date.
                            </li>
                            <li>
                                Cancellation requests received less than 30 days before the start
                                of the holiday package will be subject to our refund policy
                                outlined below.
                            </li>
                        </ul>
                    </section>

                    {/* Refund Policy Section */}
                    <section>
                        <h2 className="text-lg font-semibold mb-2">3. Refund Policy</h2>
                        <p className="text-sm text-gray-600 mb-4">
                            Refunds depend on the timing of the cancellation, as follows:
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                            <li>
                                <strong>30 days or more before departure:</strong> Full refund,
                                minus a $50 administration fee.
                            </li>
                            <li>
                                <strong>29 – 22 days before departure:</strong> 50% refund, minus
                                a $50 administration fee.
                            </li>
                            <li>
                                <strong>21 days or less before departure:</strong> No refund will
                                be issued.
                            </li>
                        </ul>
                        <p className="text-sm text-gray-600 mt-4">
                            <strong>Notes:</strong> All refunds are subject to a $50
                            administration fee.
                        </p>
                        <p className="text-sm text-gray-600">
                            The Cancellation & Refund Policy is subject to
                            change without prior notice.
                        </p>
                    </section>

                    {/* Footer */}
                    <div className="border-t mt-6 pt-4 text-sm text-gray-600">
                        <p>
                            For any questions or further clarifications, feel free to contact
                            us.</p>
                        <p>
                            We're here to make your holiday planning as seamless and
                            enjoyable as possible.
                        </p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default CancelationPolicy
