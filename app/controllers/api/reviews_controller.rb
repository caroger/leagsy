class Api::ReviewsController < ApplicationController
  # TODO uncomment after backend testing
  # before_action :require_logged_in

  def create
    if !current_user
      render json: { errors: "Please register/signin first" }
    end

    @review = current_user.reviews.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Review.all
    render :index
  end

  def show
    @review = Review.find_by(id: params[:id])
    if @review
      render :show
    else
      render json: @review.errors.full_messages, status: 404
    end
  end

  def destroy
    @review = current_user.reviews.find_by(id: params[:id])
    if @review
      @review.destroy
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private
    def review_params
      params.require(:review).permit(:rating, :body, :product_id)
    end
end
