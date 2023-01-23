require "rails_helper"

describe Api::RestaurantSearchController, type: :request do
  it "returns restaurant json data" do
    get "/api/restaurant_search#index" do
      expect(response).to have_http_status(:ok)
      expect(response.content_type).to start_with("application/json")
    end
  end
end
