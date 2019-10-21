import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import ContactStyle from "./ContactData.module.css";
import Axios from "../../../axios";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: Number(Number(this.props.price).toFixed(2)),
      customer: {
        name: "Steven",
        address: {
          street: "Hamilton",
          zip: "L8W"
        },
        deliveryMethod: "fastest"
      }
    };
    Axios.post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = <Spinner />;
    if (!this.state.loading) {
      form = (
        <form>
          <input
            className={ContactStyle.Input}
            type="text"
            name="email"
            placeholder="Your Email"
          />
          <input
            className={ContactStyle.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className={ContactStyle.Input}
            type="text"
            name="street"
            placeholder="Your Street"
          />
          <input
            className={ContactStyle.Input}
            type="text"
            name="postal"
            placeholder="Your Postal Code"
          />
          <Button btnType="Danger">CANCEL</Button>
          <Button btnType="Success" click={this.orderHandler}>
            SUCCESS
          </Button>
        </form>
      );
    }
    return (
      <div className={ContactStyle.ContactData}>
        <h4>Enter Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
