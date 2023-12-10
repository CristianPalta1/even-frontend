// components/AuthForm.js
import React from "react";

const AuthForm = ({ title, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        {/* ... */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AuthForm;
