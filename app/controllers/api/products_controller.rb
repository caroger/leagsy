class Api::ProductsController < ApplicationController
  def show
    @product = Product.find_by(id: params[:id])
    render 'api/products/show'
  end

  def index
    @products = Product.all
    render 'api/products/index'
  end

  def create
    @product = Product.create(product_params)
    if @product.save
      render 'api/products/index'
    else
      render json: @product.errors.full_messages, status: 422
    end
  end

  private

  def product_params
    params.require(:product).permit(:description, :name, :price, :category)
  end
end
