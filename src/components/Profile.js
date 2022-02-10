import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import profile_white from "../asset/header/profile_white.png";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "qwer",
      name: "asdf",
      imageUrl: "",
    };
  }

  // Google Login
  responseGoogle = (res) => {
    console.log(res);
    this.setState({
      id: res.googleId,
      name: res.profileObj.name,
      imageUrl: res.profileObj.imageUrl,
    });

    window.localStorage.setItem("imageUrl", this.state.imageUrl);
    window.location.reload();
  };

  // Login Fail
  responseFail = (err) => {
    console.error(err);
  };

  render() {
    return (
      <div
        className="contents"
        style={{
          height: "100vh",
          paddingTop: "50vh",
          backgroundColor: "black",
        }}
      >
        <GoogleLogin
          clientId="835389304145-pll2ngg9i01e00vajc7svevd555h1g6b.apps.googleusercontent.com"
          buttonText="Google 로그인"
          onSuccess={this.responseGoogle}
          onFailure={this.responseFail}
        />
      </div>
    );
  }
}

export default Profile;
