import React from "react";

export default function Contact() {
  return (
    <section className="container">
      <h1>Contact me</h1>
      <form id="contact-form">
        <div>
          <label>Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
