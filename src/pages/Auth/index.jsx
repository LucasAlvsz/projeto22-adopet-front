import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

import { UseForm } from "../../hooks";
import { AuthContext } from "../../providers/AuthProvider";
import Loading from "../../components/Loading";
import adopt from "../../assets/animations/adopt.json";

import * as S from "./styles";

const Auth = () => {
  const navigate = useNavigate();
  const { signIn, signUp, user, setUser } = useContext(AuthContext);
  const [form, , handleForm] = UseForm();
  const [authPath, setAuthPath] = useState("signIn");
  const [loading, setLoading] = useState(false);
  const [errorWarning, setErrorWarning] = useState(false);

  useEffect(() => {
    if (user) navigate("/discover");
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorWarning("");
    if (authPath === "signIn") {
      signIn(form)
        .then(({ data }) => {
          setUser(data);
          navigate("/discover");
        })
        .catch(({ response }) => {
          setErrorWarning(
            Array.isArray(response.data.error)
              ? response.data.error.message.join(" ")
              : response.data.error.message
          );
        })
        .finally(() => setLoading(false));
    } else if (authPath === "signUp") {
      signUp(form)
        .then(() => {
          setAuthPath("signIn");
        })
        .catch(({ response }) => {
          response.data[0].split(" ")[0] === '"body.phone"'
            ? setErrorWarning("Invalid Phone")
            : response.data[0].split(" ")[0] === '"body.cep"'
            ? setErrorWarning("Invalid CEP")
            : setErrorWarning(response.data);

          console.log(response.data);
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <main>
      <S.Wrapper>
        <S.Logo>adopet ❤</S.Logo>
        <S.Header path={authPath}>
          <h2
            className={authPath === "signIn" ? "active" : undefined}
            onClick={() => {
              if (!loading) {
                setErrorWarning("");
                setAuthPath("signIn");
              }
            }}
          >
            Sign-In
          </h2>
          <h2
            className={authPath === "signUp" ? "active" : undefined}
            onClick={() => {
              if (!loading) {
                setErrorWarning("");
                setAuthPath("signUp");
              }
            }}
          >
            Sign-Up
          </h2>
        </S.Header>
        <S.Form onSubmit={handleSubmit} error={errorWarning}>
          {authPath === "signUp" && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              disabled={loading}
              onChange={handleForm}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            disabled={loading}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            onChange={handleForm}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            disabled={loading}
            minLength={authPath === "signUp" ? 8 : undefined}
            onChange={handleForm}
          />
          {authPath === "signUp" && (
            <>
              <input
                type="password"
                placeholder="Confirm password"
                required
                disabled={form.password ? true : loading}
                onChange={(e) => {
                  e.target.value !== form.password
                    ? setErrorWarning("Passwords don't match")
                    : setErrorWarning("");
                }}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                required
                disabled={loading}
                maxLength="15"
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  e.target.value = e.target.value.replace(
                    /(\d{2})(\d)/,
                    "($1) $2"
                  );
                  e.target.value = e.target.value.replace(
                    /(\d{5})(\d)/,
                    "$1-$2"
                  );
                  handleForm(e);
                }}
              />
              <input
                type="text"
                name="cep"
                placeholder="CEP"
                required
                disabled={loading}
                maxLength="9"
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  e.target.value = e.target.value.replace(
                    /(\d{5})(\d{3})/,
                    "$1-$2"
                  );
                  handleForm(e);
                }}
              />
            </>
          )}
          {errorWarning && <S.ErrorWarning>{errorWarning}</S.ErrorWarning>}
          <button type="submit" disabled={loading}>
            {loading ? (
              <Loading />
            ) : authPath === "signIn" ? (
              "Sign In"
            ) : (
              "Sign Up"
            )}
          </button>
        </S.Form>
        <S.AnimationContainer>
          <Player
            autoplay
            loop
            src={adopt}
            style={{ height: "100%", width: "100%" }}
          />
        </S.AnimationContainer>
      </S.Wrapper>
    </main>
  );
};

export default Auth;
