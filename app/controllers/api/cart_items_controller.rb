class Api::CartItemsController < ApplicationController
  def index
    @cart_items = current_user.cart_items
    render :index
  end

  def create
    ## find associated product
    @cart_item = current_user.cart_items.find_by(product_id: cartitem_params[:product_id])

    ## If cart already has this product, update quantity
    if @cart_item
      @cart_item.update_attribute(:quantity, @cart_item.quantity += cartitem_params[:quantity].to_i)
    else
      @cart_item = current_user.cart_items.new(cartitem_params)
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
      params.require(:cartItem).permit(:product_id, :quantity, :user_id)
    end
end
