[![Banner](/app/assets/README/banner.png)](http://leagsy.herokuapp.com/#/)
# Leagsy
Leagsy, an online gift shop for League of Legend fans, is a clone of the e-commerce website [Etys](https://www.etsy.com). It offers a pleasant browsing experience on [League of Legend](https://merch.riotgames.com/en-us/) merchandises. Users can browse, filter, sort, review, and add merchandises to her/his shopping cart.

*Disclaimer: Leagsy is built for learning and demonostration purposes only. All images and descriptions associated with product listings were taken from [Riot Games Merch](https://merch.riotgames.com/en-us/)*

### See it in Action
[Leagsy Live Site](http://leagsy.herokuapp.com)

### Technology Used
##### React, Redux, PostgreSQL, Ruby on Rails, AWS S3
Leagsy is built using a Rails backend, PostgreSQL for the database management, Rails activestorage with AWS S3 cloud for image hosting, AJAX for API calls, and React/Redux for the frontend rendering and state management.

### Features/Code Highlight

#### Product Search Filter
![Product Search](/app/assets/README/search_demo.gif)
- Search product by name and category
- Press ESC to clear search
- Click on search result to go to product detail view


#### Image Slider
![Image Slider](/app/assets/README/slider_demo.gif)
- Cycle through product photos by clicking the left/right arrow buttons
- Clicking image thunmbnail selects the image for large view
- Utilized react hook `useState()` to track and update the state of image display

```js
const [current, setCurrent] = useState(0);
const length = images.length;

if (!Array.isArray(images) || images.length <= 0) return null;

const prevImg = () => {
  setCurrent(current === 0 ? length - 1 : current - 1);
};

const nextImg = () => {
  setCurrent(current === length - 1 ? 0 : current + 1);
};
```

#### Sort Products
![Product Sort](/app/assets/README/sort_demo.gif)
- Sort products by price(high -> low or low -> high) or by rating(high -> low)
- Utilized ternary operator to sort products depending on the sorting preference(`selectedOptions`) stored in component state

```js
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
```

#### Product Review

![Product Review](/app/assets/README/reivew_demo.gif)
- Prompt user to login/registered before reviewing a product
- Check for required field (rating value) before allowing user to submit review
- Same user can only leave 1 review for each product
- Conditionally render review create form/ delete review button depending on the user state(login? reviewed?)

```js
render(){
  ...
  const ownReview = productReviews.filter(
    (review) => review && review.reviewerId === sessionId
  );
  const othersReviews = productReviews.filter(
    (review) => review && review.reviewerId !== sessionId
  );
  ...
  <div>
    {ownReview && ownReview.length === 1 ? (
      <ReviewShow review={ownReview[0]} key={ownReview[0].id} />
    ) : (
      <ReviewForm productId={product.id} />
    )}
    {othersReviews.map((review, key) => (
      <ReviewShow review={review} key={key} />
    ))}
  </div>
}
```
#### Shopping Cart
![Cart Crud](/app/assets/README/cart_demo.gif)
- CRUD functions for shopping cart items
- Sync update item count indicator next to the shopping cart icon upon cart item creation/deletion
- Sync update cart sub-total upon cart item quantity update
### Acknowledgement
Products seeding data are taking from [Riot Merch Store](https://merch.riotgames.com/en-us/)

### Next Step
- [ ] Implement product search feature
- [ ] Refactor CSS code and optimize for mobile devices




