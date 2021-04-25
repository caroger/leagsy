class StaticPagesController < ApplicationController
  def root; end
  def index
    expires_in 24.hours, public: true
  end
end
