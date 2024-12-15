import { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
    const { getTotalCartAmount, token, food_list, cartItems, url } =
        useContext(StoreContext);

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: "",
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data) => ({ ...data, [name]: value }));
    };

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <form className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input
                        name="firstName"
                        onChange={onChangeHandler}
                        value={data.firstName}
                        type="text"
                        placeholder="First name"
                    />
                    <input
                        name="lastName"
                        onChange={onChangeHandler}
                        value={data.lastName}
                        type="text"
                        placeholder="Last name"
                    />
                </div>
                <input
                    name="email"
                    onChange={onChangeHandler}
                    value={data.email}
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="street"
                    onChange={onChangeHandler}
                    value={data.street}
                    type="text"
                    placeholder="Street"
                />
                <div className="multi-fields">
                    <input
                        type="text"
                        name="city"
                        value={data.city}
                        onChange={onChangeHandler}
                        placeholder="City"
                    />
                    <input
                        type="text"
                        name="state"
                        value={data.state}
                        onChange={onChangeHandler}
                        placeholder="State"
                    />
                </div>
                <div className="multi-fields">
                    <input
                        name="zipcode"
                        onChange={onChangeHandler}
                        value={data.zipcode}
                        type="text"
                        placeholder="Zip"
                    />
                    <input
                        type="text"
                        name="country"
                        value={data.country}
                        onChange={onChangeHandler}
                        placeholder="Country"
                    />
                </div>
                <input
                    type="text"
                    onChange={onChangeHandler}
                    name="phone"
                    value={data.phone}
                    placeholder="Phone"
                />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>sub total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>
                                $
                                {getTotalCartAmount() === 0
                                    ? 0
                                    : getTotalCartAmount() + 2}
                            </b>
                        </div>
                    </div>
                    <button>Proceed to payment</button>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;
