class ApplicationController < ActionController::Base
  # TODO: for Postman testing purpose only!
  protect_from_forgery with: :null_session
  helper_method :current_user, :logged_in?

  # private

  def current_user
    return nil unless session[:session_token]

    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    if logged_in?
      current_user.reset_session_token!
      session[:session_token] = nil
      @current_user = nil
    else
      render status: 404
    end
  end

  def require_logged_in
    render json: { base: ["invalid credentials"] }, status: 401 unless @current_user
  end
end
