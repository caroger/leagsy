class Api::CartItemsController < ApplicationController
  def index
    @cart_items = current_user.cart_items
    render :index
  end

  def show
  end

  def create
    ## find associated product
    @cart_item = CartItem.find_by(user_id: params[:user_id], product_id: params[:product_id])

    ## If cart already has this product, update quantity
    if @cart_item
      @cart_item.update_attribute(:quantity, @cart_item.qauntity += params[:quantity])
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
    @cart_item = current_user.cart_items.find_by(id: params[:id])
    if @cart_item
      @cart_item.destroy
      render :show
    else
      render json: @cart_item.errors.full_message, status: 422
    end
  end

  private
    def cartitem_params
      params.require(:cart_items).permit(:user_id, :product_id, :quantity)
    end
end
