import React, { useLayoutEffect } from 'react';
import axios from 'axios';
import '../Styles/ProductReviews.scss';

class ProductReviews extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			productId: 0,
			reviews: [],
			products: [],
			currentProduct: {}
		}
	}
	setCurrentProduct(products) {
		for(let product of products) {
		  if(product.id === this.state.productId) {
			  console.log(product)
			  this.setState({currentProduct: product});
		  }
		}
	}
	componentDidMount() {
		axios.get(`http://localhost:3004/products`)
		  .then(res => {
			const products = res.data;
			this.setState( { products });
		  })

		  this.setCurrentProduct(this.state.products);

		axios.get(`http://localhost:3004/reviews`)
		  .then(res => {
			const reviews = res.data;
			this.setState( {reviews} );
		  })
	  }
	  getAverageRating() {
		const productReviews = this.state.reviews.filter(review =>
			 review.productId == this.state.productId
		);

		const totalRatingValue = productReviews.reduce((totalRating, productReview) => 
			totalRating + productReview.star_rating
		, 0)

		return totalRatingValue / productReviews.length;
  }
	
  render() {
    return (
		<div className="ProductReviews">
			<h1>Product Review</h1>
			<ul>{this.state.products.map(product => (
				product.id === this.state.productId ? <li key={product.id}>{product.name}</li> : ''
			))}</ul>
			<p>Average rating: {this.getAverageRating()}</p>
			<div class="FiveStar-totalBackground" aria-hidden="true">
				<span class="Icon u-iconGrayLight FiveStar-width">
								<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83 18">
							<title>rating_stars-5</title>
						<polygon
							points="7,2 8.7,7.2 14,7.3 9.8,10.7 11.3,16 7,12.8 2.7,16 4.2,10.7 0,7.3 5.3,7.2 "
							class="stroke_layer fill_layer"
							fill="#D3D3D3"
							stroke="#D3D3D3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<polygon
							points="24.5,2 26.2,7.2 31.5,7.3 27.3,10.7 28.8,16 24.5,12.8 20.2,16 21.7,10.7 17.5,7.3 22.8,7.2 "
							class="stroke_layer fill_layer"
							fill="#D3D3D3"
							stroke="#D3D3D3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<polygon
							points="41.5,2 43.2,7.2 48.5,7.3 44.3,10.7 45.8,16 41.5,12.8 37.2,16 38.7,10.7 34.5,7.3 39.8,7.2 "
							class="stroke_layer fill_layer"
							fill="#D3D3D3"
							stroke="#D3D3D3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<polygon
							points="58.5,2 60.2,7.2 65.5,7.3 61.3,10.7 62.8,16 58.5,12.8 54.2,16 55.7,10.7 51.5,7.3 56.8,7.2 "
							class="stroke_layer fill_layer"
							fill="#D3D3D3"
							stroke="#D3D3D3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<polygon
							points="75.8,2 77.5,7.2 82.8,7.3 78.6,10.7 80.1,16 75.8,12.8 71.5,16 73,10.7 68.8,7.3 74.1,7.2 "
							class="stroke_layer fill_layer"
							fill="#D3D3D3"
							stroke="#D3D3D3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</span>
			</div>
			{/* TODO: add style binding in FiveStar-totalOverlay in order to set `width` for the overlay yellow star from a method which return width as per the average rating of the product */}
							<div class="FiveStar-totalOverlay" aria-hidden="true">
														<span class="Icon u-iconYellowDark FiveStar-width">
														<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83 18">
									<title>rating_stars-5</title>
								<polygon
									points="7,2 8.7,7.2 14,7.3 9.8,10.7 11.3,16 7,12.8 2.7,16 4.2,10.7 0,7.3 5.3,7.2 "
									class="stroke_layer fill_layer"
									fill="#f6b333"
									stroke="#f6b333"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<polygon
									points="24.5,2 26.2,7.2 31.5,7.3 27.3,10.7 28.8,16 24.5,12.8 20.2,16 21.7,10.7 17.5,7.3 22.8,7.2 "
									class="stroke_layer fill_layer"
									fill="#f6b333"
									stroke="#f6b333"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<polygon
									points="41.5,2 43.2,7.2 48.5,7.3 44.3,10.7 45.8,16 41.5,12.8 37.2,16 38.7,10.7 34.5,7.3 39.8,7.2 "
									class="stroke_layer fill_layer"
									fill="#f6b333"
									stroke="#f6b333"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<polygon
									points="58.5,2 60.2,7.2 65.5,7.3 61.3,10.7 62.8,16 58.5,12.8 54.2,16 55.7,10.7 51.5,7.3 56.8,7.2 "
									class="stroke_layer fill_layer"
									fill="#f6b333"
									stroke="#f6b333"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<polygon
									points="75.8,2 77.5,7.2 82.8,7.3 78.6,10.7 80.1,16 75.8,12.8 71.5,16 73,10.7 68.8,7.3 74.1,7.2 "
									class="stroke_layer fill_layer"
									fill="#f6b333"
									stroke="#f6b333"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
                        </span>
                    </div>

			<p>
				<h3>Reviews:</h3>
				{this.state.reviews.map(review => (
					review.productId == this.state.productId ? <li class="productreviewTitle" key={review.id}>{review.author}: {review.star_rating} stars <div> {review.headline} </div></li> : ''
				))}
			</p>
		</div>
		
      );
  }
}

export default ProductReviews;
