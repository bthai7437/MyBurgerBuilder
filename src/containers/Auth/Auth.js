import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import AuthStyle from "./Auth.module.css";
import * as actions from "../../store/Actions/index";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";

class Auth extends Component {
  componentDidMount() {
    console.log(this.props.building);
    if (!this.props.building && this.props.authRedirectPath !== "/") {
      this.props.onSetAuthRedirect();
    }
  }
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "E-mail Address"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    },
    isSignUp: true
  };
  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }

  inputChangeHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      }
    };
    this.setState({ controls: updatedControls });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignUp
    );
  };

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return { isSignUp: !prevState.isSignUp };
    });
  };
  render() {
    const elementArr = [];
    for (let key in this.state.controls) {
      elementArr.push({
        id: key,
        config: this.state.controls[key]
      });
    }
    let form = elementArr.map(el => (
      <Input
        key={el.id}
        elementType={el.config.elementType}
        elementConfig={el.config.elementConfig}
        value={el.config.value}
        changed={event => this.inputChangeHandler(event, el.id)}
        invalid={!el.config.valid}
        shouldValidate={el.config.validation}
        touched={el.config.touched}
      />
    ));
    if (this.props.loading) {
      form = <Spinner />;
    }
    let errorMessage = null;

    if (this.props.error) {
      errorMessage = <p>{this.props.error}</p>;
    }
    let authRedirect = null;
    if (this.props.isAuthenticated) {
      console.log("[Redirected]: " + console.log(this.props.authRedirectPath));
      authRedirect = <Redirect to={this.props.authRedirectPath} />;
    }
    return (
      <div className={AuthStyle.Auth}>
        {authRedirect}
        {errorMessage}
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType="Success">Success</Button>
        </form>
        <Button btnType="Danger" click={this.switchAuthModeHandler}>
          SWITCH TO {this.state.isSignUp ? "SIGN IN" : "SIGN UP"}
        </Button>
      </div>
    );
  }
}
const mapStatetoProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    building: state.burgerBuilder.building,
    authRedirectPath: state.auth.authRedirectPath
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
    onSetAuthRedirect: () => dispatch(actions.setAuthRedirectPath("/"))
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Auth);
