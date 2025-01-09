import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // تحقق من صحة البيانات (يمكن تطويرها حسب الحاجة)
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // إرسال بيانات تسجيل الدخول
    console.log("Logging in with:", { email, password });
    setError(""); // مسح الأخطاء

    // يمكن إضافة طلب API هنا للتحقق من تسجيل الدخول
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Sanabel Alkhair</h1>
      <form className="login-form" onSubmit={handleLogin}>
        {error && <div className="login-error">{error}</div>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
