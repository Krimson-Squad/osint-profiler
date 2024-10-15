import 'bootstrap/dist/css/bootstrap.min.css';

const PrivacyPolicy = () => {
    return (
        <div className="container my-5 bg-dark text-white pt-3 pb-3">
            <h1 className="mb-4">Privacy Policy for OSINT Application</h1>
            <p>
                At Profile App, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our OSINT application.
            </p>

            <h2 className="mt-4">Information We Collect</h2>
            <ul>
                <li><strong>Personal Information:</strong> We may collect personal information such as your name, email address, and contact details when you register or interact with our app.</li>
                <li><strong>Usage Data:</strong> We automatically collect information about your interactions with the app, including device information, IP address, and browsing behavior.</li>
                <li><strong>Publicly Available Information:</strong> As an OSINT application, we may aggregate and analyze publicly available data from various sources.</li>
            </ul>

            <h2 className="mt-4">How We Use Your Information</h2>
            <p>
                We may use the information we collect for various purposes, including:
            </p>
            <ul>
                <li>To provide and maintain our service.</li>
                <li>To improve, personalize, and expand our app s features.</li>
                <li>To communicate with you, including sending updates, newsletters, or promotional content.</li>
                <li>To analyze user behavior and trends to enhance user experience.</li>
            </ul>

            <h2 className="mt-4">Data Protection</h2>
            <p>
                We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
            </p>

            <h2 className="mt-4">Information Sharing</h2>
            <p>
                We do not sell or rent your personal information to third parties. We may share information with trusted partners who assist us in operating our application, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
            </p>

            <h2 className="mt-4">Your Rights</h2>
            <p>
                Depending on your jurisdiction, you may have the following rights regarding your personal information:
            </p>
            <ul>
                <li>The right to access your personal information.</li>
                <li>The right to request correction of inaccurate data.</li>
                <li>The right to request deletion of your personal data.</li>
                <li>The right to object to or restrict the processing of your information.</li>
            </ul>

            <h2 className="mt-4">Changes to This Privacy Policy</h2>
            <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with a revised effective date.
            </p>

            <h2 className="mt-4">Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>Email: support@yourapp.com</p>
            <p>Phone: +1 (123) 456-7890</p>
        </div>
    );
};

export default PrivacyPolicy;