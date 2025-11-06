import React from 'react'
import { useForm } from "react-hook-form";

function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
      {/* Name Fields*/}
      <div className="nameInput d-flex gap-3">
        <div className="firstName d-flex flex-column">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            autoComplete="off"
            {...register("firstName", {
              required: "First name is required",
              maxLength: 20,
            })}
          />
          {errors.firstName && <p role="alert">{errors.firstName.message}</p>}
        </div>
        <div className="secondName d-flex flex-column">
          <label htmlFor="secondName">Second Name</label>
          <input
            id="secondName"
            type="text"
            autoComplete="off"
            {...register("secondName", {
              required: "Second name is required",
              maxLength: 20,
            })}
          />
          {errors.secondName && <p role="alert">{errors.secondName.message}</p>}
        </div>
      </div>

      {/* Email */}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        autoComplete="off"
        {...register("email", {
          required: "Email Address is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email address",
          },
        })}
      />
      {errors.email && <p role="alert">{errors.email.message}</p>}

      {/* phone */}
      <label htmlFor="phone">Phone</label>
      <input
        placeholder="+20 012 3456 7891"
        id="phone"
        type="tel"
        autoComplete="off"
        {...register("phone", {
          required: "Phone is required",
          pattern: {
            value: /^[0-9]+$/,
            message: "Please enter numbers only",
          },
          minLength: 10,
          maxLength: 15,
        })}
        onInput={(e) => {
          e.target.value = e.target.value.replace(/[^0-9]/g, "");
        }}
      />
      {errors.phone && <p role="alert">{errors.phone.message}</p>}

      {/* date */}
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        placeholder="please Enter the date and the number of guests"
        rows="4"
        cols="50"
        {...register("message", {
          required: "Enter your Message Please",
        })}
      />
      {errors.message && <p role="alert">{errors.message.message}</p>}
      {/* button */}
      <button type="submit" className="submitBtn">
        Booking
      </button>
    </form>
  );
}

export default BookingForm
