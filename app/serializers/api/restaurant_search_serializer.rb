module Api
  class RestaurantSearchSerializer < BaseSerializer
    attributes(
      :id,
      :lat,
      :long,
      :name
)
  end
end