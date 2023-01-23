module Api
  class RestaurantSearchController < ActionController::API
    def index
      response = GooglePlacesClient.call(params[:search])
      render json: response, status: :ok
    end
  end
end