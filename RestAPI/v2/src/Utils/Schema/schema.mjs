export const valid_schema = {
  imageUrl: {
    notEmpty: {
      errorMessage: "imageUrl should not be empty",
    },
    isLength: {
        options : {max: 1000},
        errorMessage: "Url should not be that long"
    },
    isURL: {
      errorMessage: "Should be a URL or a link"
    }
  },
  title: {
    notEmpty: {
      errorMessage: "title should not be empty",
    },
  },
  price: {
    notEmpty: {
      errorMessage: "price should not be empty",
    }
  },
  date: {
    notEmpty: {
      errorMessage: "date should not be empty",
    }
  },
  location: {
    notEmpty: {
      errorMessage: "location should not be empty",
    },
  },
  company: {
    notEmpty: {
      errorMessage: "company should not be empty",
    },
  },
};
