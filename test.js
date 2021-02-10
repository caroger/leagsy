 {
  entities: {
    users: {
      1: {
        id: 1,
        username: "roger",
        addressId: 1,
        email: "roger@gmail.com",
      },
      2: {
        id: 2,
        username: "ben",
        addressId: 2,
        email: "ben@gmail.com",
      },
    },

    products: {
      1: {
        id: 1,
        name: "Logitech Gaming Mouse",
        price: 99,
        description: "super cool gaming mouse",
        imageUrl: "www.aws.imageUrl1",
        sellerId: 2,
      },
      9: {
        id: 9,
        name: "Alienware Gaming PC",
        price: 1499,
        description: "high performance gaming pc",
        imageUrl: "www.aws.imageUrl2",
        sellerId: 1,
      },
    },

    cartItems: {
      1: {
        id: 1,
        userId: 2,
        productId: 1,
        quantities: 1,
      },
      9: {
        id: 9,
        userId: 2,
        productId: 2,
        quantities: 2,
      },
    },

    favorites: {
      1: {
        id: 1,
        userId: 1,
        productId: 2,
      },
      2: {
        id: 2,
        userId: 15,
        productId: 1,
      },
    },

    reviews: {
      1: {
        id: 1,
        productId: 1,
        reviewerId: 15,
        rating: 5,
        body:
          "I bought this as a Christmas gift for my son and he really enjoys it!",
      },

      2: {
        id: 2,
        productId: 2,
        reviewerId: 1,
        rating: 3,
        body:
          "The wireless function sometimes doesn't work!!! I'm not happy about this product!",
      },
    },
  },

  ui: {
    modal: true / false,
  },

  errors: {
    login: ["Incorrect username/password combination"],
    checkOutForm: ["Required fields cannot be empty"],
    reviewForm: ["Rating/Title field cannot be empty"],
  },

  session: { currentUserId: 1 },
};
