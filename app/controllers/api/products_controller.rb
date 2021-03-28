class Api::ProductsController < ApplicationController
  def show
    @product = Product.includes(:reviews, :seller).with_attached_photos.find_by(id: params[:id])

    if @product
      render :show
    else
      render json: ["Product not found"], status: 404
    end

  end

  def index
    @products = Product.all
    render :index
  end

  private
    def product_params
      params.require(:product).permit(:description, :name, :price, :category, photos: [])
    end
end
