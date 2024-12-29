"use client"

const PrivacyPage = () => {
    return (
        <>
            {/* <div className="bg-[#FFFF0] text-gray-800">
                <div className="container mx-auto px-4 pt-20">
                    <h1 className="text-2xl font-bold mb-4 text-primary">
                        Privacy Policy

                    </h1>

                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">1. Introduction</h2>
                        <p className="text-sm">
                            Welcome to Prime Holiday Destinations. By using our website and
                            purchasing our holiday packages, you agree to be bound by these
                            Terms and Conditions. Please read them carefully before
                            proceeding with any booking.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">2. Definitions</h2>
                        <p className="text-sm">
                            "Client," "you," or "your" refers to the person using our
                            services. "Holiday package" refers to travel-related services
                            provided by Prime Holiday Destinations.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">3. Booking & Payment</h2>
                        <p className="text-sm">
                            All bookings must be made through our website or by email. A
                            deposit is required at the time of booking, with the balance
                            payable as per your booking confirmation.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">4. Pricing</h2>
                        <p className="text-sm">
                            All prices listed on our website are in US Dollars and inclusive
                            of taxes unless otherwise stated.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">
                            5. Cancellations & Refunds
                        </h2>
                        <p className="text-sm">
                            Cancellations must be submitted in writing. Refunds are provided
                            as per our cancellation policy.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">6. Travel Insurance</h2>
                        <p className="text-sm">
                            It is the client’s responsibility to obtain adequate travel
                            insurance.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">
                            7. Health & Travel Documentation
                        </h2>
                        <p className="text-sm">
                            Clients are responsible for ensuring they meet all health and visa
                            requirements for their chosen destination.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">
                            8. Changes to Your Booking
                        </h2>
                        <p className="text-sm">
                            If you wish to make any changes to your booking, we will do our
                            best to accommodate your request.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">9. Force Majeure</h2>
                        <p className="text-sm">
                            Prime Holiday Destinations will not be held liable for events
                            beyond our control, such as natural disasters or pandemics.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">10. Liability</h2>
                        <p className="text-sm">
                            Our liability is limited to the value of the holiday package
                            booked.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">11. Complaints</h2>
                        <p className="text-sm">
                            Complaints must be submitted in writing within 14 days of your
                            return.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">12. Privacy</h2>
                        <p className="text-sm">
                            We respect your privacy and process your data in accordance with
                            our Privacy Policy.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">
                            13. Amendments to Terms & Conditions
                        </h2>
                        <p className="text-sm">
                            We may revise these Terms & Conditions at any time. The latest
                            version will be available on our website.
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-2">14. Governing Law</h2>
                        <p className="text-sm">
                            These Terms & Conditions are governed by and construed in
                            accordance with the laws of your country.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-lg font-semibold mb-2">15. Contact Information</h2>
                        <p className="text-sm">
                            For any questions related to these Terms & Conditions, please
                            contact us at:{" "}
                            <a
                                href="mailto:contact@primeholidaydestinations.com"
                                className="text-blue-600 underline"
                            >
                                contact@primeholidaydestinations.com
                            </a>
                        </p>
                    </section>

                </div>
            </div> */}
            <div className="bg-[#FFFF0] text-gray-800">
                <div className="container mx-auto px-4 pt-20">
                    <h1 className="text-2xl font-bold mb-4 text-primary">Privacy Policy</h1>

                    <div className="space-y-8">
                        {/* Section 1 */}
                        <section>
                            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
                            <p>
                                Prime Holiday Destinations ("we", "our", or "us") is committed to protecting and respecting your privacy.
                                This Privacy Policy explains how we collect, use, and share your personal data when you visit our website or purchase holiday packages from us.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
                            <p className="mb-2">We may collect the following personal data:</p>
                            <ul className="list-disc pl-6">
                                <li><strong>Personal details:</strong> Name, email address, phone number, date of birth.</li>
                                <li><strong>Financial information:</strong> Payment details when you make a booking.</li>
                                <li><strong>Technical data:</strong> IP address, browser type, device information, location, and usage data through cookies and analytics tools.</li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
                            <ul className="list-disc pl-6">
                                <li>Process and manage your data for the services you request.</li>
                                <li>Communicate with you regarding your bookings.</li>
                                <li>Send promotional material if you've subscribed to our newsletter.</li>
                                <li>Analyze usage to improve our services.</li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-xl font-semibold mb-2">4. Legal Basis for Processing</h2>
                            <p>We process your data based on:</p>
                            <ul className="list-disc pl-6">
                                <li><strong>Contractual necessity:</strong> To fulfill your bookings.</li>
                                <li><strong>Legitimate interest:</strong> For marketing, improving our services, and ensuring website functionality.</li>
                                <li><strong>Consent:</strong> When you opt-in for marketing communications.</li>
                                <li><strong>Legal obligation:</strong> To comply with laws or regulatory requirements.</li>
                            </ul>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-xl font-semibold mb-2">5. Sharing Your Information</h2>
                            <p>Your data may be shared with:</p>
                            <ul className="list-disc pl-6">
                                <li>Service providers such as payment processors and travel operators.</li>
                                <li>Regulatory bodies when required by law.</li>
                            </ul>
                            <p className="mt-2">We do not sell or rent your personal information to third parties.</p>
                        </section>

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-xl font-semibold mb-2">6. Data Retention</h2>
                            <p>
                                We will retain your data for as long as necessary to fulfill the purposes outlined in this policy unless a longer retention period is required by law.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section>
                            <h2 className="text-xl font-semibold mb-2">7. Your Data Rights</h2>
                            <p className="mb-2">Under UK GDPR, you have the following rights:</p>
                            <ul className="list-disc pl-6">
                                <li><strong>Access:</strong> Request a copy of your personal data.</li>
                                <li><strong>Correction:</strong> Request corrections if your data is incorrect.</li>
                                <li><strong>Deletion:</strong> Request deletion of your data under certain conditions.</li>
                                <li><strong>Object:</strong> Object to the processing of your data.</li>
                                <li>
                                    <strong>Data portability:</strong> Request transfer of your data to another service provider.
                                </li>
                            </ul>
                        </section>

                        {/* Section 8 */}
                        <section>
                            <h2 className="text-xl font-semibold mb-2">8. Cookies Policy</h2>
                            <p>
                                We use cookies to improve your experience on our website. Cookies are small files stored on your device that help us track user behavior and preferences.
                                <span className="block mt-2">Types of cookies we use:</span>
                            </p>
                            <ul className="list-disc pl-6">
                                <li><strong>Essential cookies:</strong> Necessary for website functionality (e.g., login or booking features).</li>
                                <li>
                                    <strong>Marketing cookies:</strong> Track browsing habits to provide advertisements tailored to your preferences.
                                </li>
                                <li>
                                    <strong>Performance cookies:</strong> Gather information about how visitors use the site to help us improve it.
                                </li>
                            </ul>
                            <p><span className="font-bold">Managing Cookies:</span>
                                You can manage or disable cookies through your browser settings. However, disabling essential cookies may affect the functionality of our website.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section>
                            <h2 className="text-xl font-semibold mb-2">9. Third-Party Links</h2>
                            <p>
                                Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external websites.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section>
                            <h2 className="text-xl font-semibold mb-2">10. Security</h2>
                            <p>
                                We implement appropriate technical and organizational measures to safeguard your personal data. However, no transmission over the Internet is 100% secure, and we cannot guarantee the security of your data transmitted to our site.
                            </p>
                        </section>

                        {/* Section 11 */}
                        <section>
                            <h2 className="text-xl font-semibold mb-2">11. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.
                            </p>
                        </section>

                        {/* Section 12 */}
                        <section>
                            <h2 className="text-xl font-semibold mb-2">12. Contact Us
                            </h2>
                            <p>
                                If you have any questions or concerns regarding this Privacy Policy, please contact us at.
                            </p>
                            <p>
                            <span className="font-bold">Email: </span>contact@primeholidaydestinations.com
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyPage
