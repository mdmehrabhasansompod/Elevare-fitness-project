import React, { useState } from "react";
import emailjs from "emailjs-com";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const programs = ["Strength Training", "Cardio Blast", "Yoga & Flexibility", "HIIT Training","Functional Training","CrossFit"];
const memberships = ["Bronze Plan", "Silver Plan", "Gold Plan","Platinum Plan"];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    program: "",
    membership: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Send admin email
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE1_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        // Send auto-reply to user
        return emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE2_ID,
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            program: formData.program,
            membership: formData.membership,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
      })
      .then(() => {
        setMessage("Form submitted successfully! Confirmation email sent.");
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          program: "",
          membership: "",
        });
      })
      .catch(() => setMessage("Failed to send email. Please try again."))
      .finally(() => setLoading(false));
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 min-h-screen">
      <h2 className="text-4xl md:text-6xl anton-regular text-center mb-12">
        Contact <span className="text-primary">Us</span>
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 bg-gray-900 p-8 md:p-10 rounded-3xl shadow-2xl"
        >
          {["name", "phone", "email", "address"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={handleChange}
              required={field !== "address"}
              className="p-4 rounded-lg text-white placeholder-gray-400 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
          ))}

          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
            className="p-4 rounded-lg text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary transition"
          >
            <option value="">Select Program</option>
            {programs.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>

          <select
            name="membership"
            value={formData.membership}
            onChange={handleChange}
            required
            className="p-4 rounded-lg text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary transition"
          >
            <option value="">Select Membership</option>
            {memberships.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-black font-bold p-4 rounded-lg hover:scale-105 transition-transform mt-2"
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {message && (
            <p className="text-center mt-2 text-green-400 font-semibold">{message}</p>
          )}
        </form>

        {/* Map & Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="h-80 md:h-full rounded-3xl overflow-hidden shadow-2xl">
            <MapContainer
              center={[34.0522, -118.2437]}
              zoom={13}
              scrollWheelZoom={false}
              className="w-full h-full rounded-3xl"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[34.0522, -118.2437]}>
                <Popup>Elevare Fitness - Los Angeles</Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl flex flex-col gap-2">
            <h3 className="text-2xl anton-regular text-primary">Contact Info</h3>
            <p className="montserrat-regular text-gray-200">
              123 Fitness Blvd, Los Angeles, CA, USA
            </p>
            <p className="montserrat-regular text-gray-200">+1 (555) 123-4567</p>
            <p className="montserrat-regular text-gray-200">+1 (555) 987-6543</p>
            <p className="montserrat-regular text-gray-200">info@elevarefitness.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
