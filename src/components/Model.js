import React from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../Global/Context";
import CloseIcon from "@material-ui/icons/Close";
import "./Model.css";

function Model() {
  const { model, closeModel, register, login } = React.useContext(
    ContextProvider
  );
  const [state, setState] = React.useState({
    register: true,
    login: false,
  });
  const [inputs, setInputs] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const formsToggle = () => {
    setState({
      ...state,
      register: !state.register,
      login: !state.login,
    });
  };
  const closeForm = (e) => {
    const className = e.target.getAttribute("class");
    if (className === "model") {
      closeModel();
    }
  };
  const registerUser = (e) => {
    e.preventDefault();
    register(inputs);
    setInputs({ username: "", email: "", password: "" });
  };
  const userLogin = (e) => {
    e.preventDefault();
    login(inputs);
  };

  return (
    <>
      {model ? (
        <div className="model" onClick={closeForm}>
          <div className="model__container">
            {state.register ? (
              <div className="model__form">
                <form onSubmit={registerUser}>
                  <div className="model__group">
                    <Link to="/">
                      <img
                        src="https://s.yimg.com/fz/api/res/1.2/SXpl60h6zHzGr8bIYUmfPw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTEyMDtxPTgwO3c9MTIw/https://s.yimg.com/zb/imgv1/204992d0-b5f9-3f39-a561-8a829e5a4504/t_500x300"
                        alt=""
                      />
                    </Link>
                    <h1>Grow your business</h1>
                    <p>
                      Get in front of 400 million people looking to buy, make,
                      and do.
                    </p>
                  </div>
                  <div className="model__group">
                    <input
                      type="text"
                      name="username"
                      className="model__input"
                      placeholder="Username"
                      onChange={handleInput}
                      value={inputs.username}
                      required
                    />
                  </div>
                  <div className="model__group">
                    <input
                      type="email"
                      name="email"
                      className="model__input"
                      placeholder="Email"
                      onChange={handleInput}
                      value={inputs.email}
                      required
                    />
                  </div>
                  <div className="model__group">
                    <input
                      type="password"
                      name="password"
                      className="model__input"
                      placeholder="Password"
                      onChange={handleInput}
                      value={inputs.password}
                      required
                    />
                  </div>
                  <div className="model__group">
                    <input
                      type="submit"
                      value="Create account"
                      className="btn btn-smart"
                    />
                  </div>
                  <div className="model__group">
                    <span className="btn1 btn1-primery" onClick={formsToggle}>
                      Login into existing account
                    </span>
                  </div>
                  <div className="model__grouplast">
                    <p>
                      Creating an account means you’re okay with Pinterest’s
                      Business Terms of Service and Privacy Policy.
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              <div className="model__form">
                <form onSubmit={userLogin}>
                  <div className="model__groupl">
                    <Link to="/">
                      <img
                        src="https://s.yimg.com/fz/api/res/1.2/SXpl60h6zHzGr8bIYUmfPw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTEyMDtxPTgwO3c9MTIw/https://s.yimg.com/zb/imgv1/204992d0-b5f9-3f39-a561-8a829e5a4504/t_500x300"
                        alt=""
                      />
                    </Link>
                    <h1>Log in to Pinterest</h1>
                  </div>
                  <div className="model__groupl">
                    <input
                      type="email"
                      name="email"
                      className="model__inputl"
                      placeholder="Email"
                      onChange={handleInput}
                      value={inputs.email}
                      required
                    />
                  </div>
                  <div className="model__groupl">
                    <input
                      type="password"
                      name="password"
                      className="model__inputl"
                      placeholder="Password"
                      onChange={handleInput}
                      value={inputs.password}
                      required
                    />
                  </div>
                  <div className="model__groupl">
                    <input
                      type="submit"
                      value="Log in"
                      className="btnl btnl-smart"
                    />
                  </div>
                  <div className="l">
                    <p>
                      Creating an account means you’re okay with Pinterest’s
                      Business Terms of Service and Privacy Policy.
                    </p>
                  </div>
                  <div className="model__groupl">
                    <span className="btn1l btnl-primery" onClick={formsToggle}>
                      Create a new account
                    </span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Model;
