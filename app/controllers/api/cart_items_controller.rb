class Api::CartItemsController < ApplicationController
  def index
    @cart_items = CartItem.all
    render :index
  end

  def show
  end

  def create
    ## find associated product
    @cart_item = CartItem.find_by(user_id: params[:user_id], product_id: params[:product_id])

    ## If cart already has this product, update quantity
    if @cart_item
      @cart_item.quantity += params[:quantity]
    else
      @cart_item = CartItem.new(cartitem_params)
    end
    if @cart_item.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destroy
  end

  private
    def cartitem_params
      params.require(:cart_items).permit(:user_id, :product_id, :quantity)
    end
end
