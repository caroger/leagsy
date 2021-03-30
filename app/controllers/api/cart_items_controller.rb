class Api::CartItemsController < ApplicationController
  def index
    @cart_items = CartItem
    render :index
  end

  def show
    render :show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private
    def cartItemParams
    end
end
