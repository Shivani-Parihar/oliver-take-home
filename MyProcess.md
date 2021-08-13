# My thought process was the following: 

- Create a ProductReview component -> This renders the product info by calling the api to get products and filtering the current product to show the details

- Updated `App.js` to load `http://localhost:3000/product/0` to show details for Product with ID: 0.

- And below the product info, I display the average rating for the product

- Call the API to fetch reviews for the specific product (this endpoint did not return any data), so I ended up using the endpoint to get all reviews and filtering the product’s reviews from that response.
- Display the reviews for the product below the average rating, along with heading and additional information.

- For the second part of the task, if time had permitted I would have proceeded in the following way. 
- I will create a ReviewForm component with fields — Name, Star Rating, Headline and Body
- The form fields (Name, Heading and Body) will have a handleChange event associated with each field which will update the value of that field in the local state as the user types for each keystroke
- For the star rating field, we can have a `select` dropdown field - with ratings associated with each rating value from 1 to 5
- And a submit button with an onClick event to call handleSubmit 
- handleSubmit will do a post call using axios to a Database to store that product’s rating 

I would have liked to style the page more if time had permitted. 