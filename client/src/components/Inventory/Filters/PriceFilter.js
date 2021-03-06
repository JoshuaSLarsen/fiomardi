import React from "react";
import { Table, Checkbox } from "semantic-ui-react";

class PriceFilter extends React.Component {
  render() {
    const cars = this.props.cars;
    const priceOptions = [...new Set(cars.map((car) => car.price))];
    return (
      <>
        <Table.Cell style={{ display: "flex", flexDirection: "column" }}>
          {priceOptions.map((value, index) => {
            return (
              <Checkbox
                key={index}
                onClick={() => this.props.filterOptions(value)}
                label={value}
                style={{ padding: "5px" }}
              />
            );
          })}
        </Table.Cell>
      </>
    );
  }
}

export default PriceFilter;
