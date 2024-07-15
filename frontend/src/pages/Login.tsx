import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { userLogin } from "../features/auth/authActions";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, userInfo, error } = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoginActive, setIsLoginActive] = useState<boolean>(true);

  const navigate = useNavigate();

  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate("/store");
    }
  }, [navigate, userInfo]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    form.classList.add("was-validated");

    const loginData = {
      email,
      password,
    };
    dispatch(userLogin(loginData));
  };
  return (
    <div className="container mt-5" style={{ maxWidth: "415px" }}>
      <div className="text-center mb-4">
        <h5 >İday’a giriş yap veya hesap oluştur!</h5>
      </div>
      <div className="d-flex justify-content-center mb-3">
        <button
          className={`btn ${isLoginActive ? "btn-secondary" : "btn-light"
            } me-2`}
          aria-pressed={isLoginActive}
          onClick={() => setIsLoginActive(true)}
        >
          Giriş Yap
        </button>
        <button
          className={`btn ${!isLoginActive ? "btn-secondary" : "btn-light"}`}
          aria-pressed={!isLoginActive}
          onClick={() => setIsLoginActive(false)}
        >
          Üye Ol
        </button>
      </div>
      {isLoginActive ? (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="login-email" className="form-label">
                E-Posta
              </label>
              <input
                type="email"
                className="form-control"
                id="login-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                onInvalid={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity(
                    "Lütfen geçerli bir e-posta adresi giriniz."
                  )
                }
                onInput={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity("")
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="login-password-input" className="form-label">
                Şifre
              </label>
              <input
                type="password"
                className="form-control"
                id="login-password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                onInvalid={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity(
                    "Lütfen şifrenizi giriniz."
                  )
                }
                onInput={(e) =>
                  (e.target as HTMLInputElement).setCustomValidity("")
                }
              />
            </div>
            <div className="mb-3 text-end">
              <a href="#" className="text-decoration-none">
                Şifremi Unuttum
              </a>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Giriş Yap
            </button>
          </form>
        </div>
      ) : (
        // Signup form goes here
        <div>
          <form className="needs-validation" noValidate onSubmit={handleSubmit}>
            {/* Signup form fields */}
          </form>
        </div>
      )}
      <div className="text-center mt-3"></div>
    </div>
  );
};

export default Login;
