import React from "react";

export default function Price({ value }) {
    const currency = 'PLN'

return <span className="price">{value/100} {currency}</span>;
}
