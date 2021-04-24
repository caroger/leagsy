import React, { Component } from "react";
import { connect } from "react-redux";
import { filterObject, asArray } from "../../reducers/selector";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import ProductCard from "../Home/ProductCard";
import Select from "react-select";

const options = [
  { value: "ratinghigh", label: "Top Customer Reviews" },
  { value: "pricehigh", label: "Highest Price" },
  { value: "pricelow", label: "Lowest Price" },
];

class Category extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (prevState.category !== nextProps.category) {
  //     return { selectedOption:null };
  //   }
  //   return null;
  // }

  // componentWillMount() {
  //   this.setState({
  //     sortedProducts: this.props.filteredProducts,
  //     category: this.props.category,
  //   });
  // }

  handleChange(selectedOption) {
    this.setState({ selectedOption });
  }

  render() {
    const { selectedOption } = this.state;
    const { category, filteredProducts } = this.props;

    const sortedProducts =
      selectedOption !== null
        ? selectedOption.value === "ratinghigh"
          ? filteredProducts.slice().sort((a, b) => b.avgRating - a.avgRating)
          : selectedOption.value === "pricehigh"
          ? filteredProducts.slice().sort((a, b) => b.price - a.price)
          : selectedOption.value === "pricelow"
          ? filteredProducts.slice().sort((a, b) => a.price - b.price)
          : filteredProducts
        : filteredProducts;

    return (
      <div className="Category">
        <div className="navLink">
          <div className="left">
            <span>
              <Link to={`/cat/all`}>All categories</Link>
            </span>
            {category !== "all" && (
              <>
                {" "}
                <span>
                  <AiOutlineRight size={12} />
                </span>
                <span>
                  <Link to={`/cat/${category}`}>{category}</Link>
                </span>{" "}
              </>
            )}
            <span>({Object.keys(filteredProducts).length} results)</span>
          </div>
          <div className="right">
            <Select
              value={selectedOption}
              placeholder={"Sort By"}
              onChange={this.handleChange}
              options={options}
            />
          </div>
        </div>
        <div className="heading">
          <h1>{category}</h1>
        </div>
        <div className="ProductGrid">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

const mSTP = (state, ownProps) => {
  const allProducts = state.entities.products.all || {};
  const category = ownProps.match.params.category || "";
  const filteredProducts =
    category === "all"
      ? allProducts
      : filterObject(allProducts, "category", category);
  return {
    category,
    filteredProducts: asArray(filteredProducts),
  };
};
export default connect(mSTP, null)(Category);
