# frozen_string_literal: true

###
# Client to query new data from the google places api.
# TODO: need to pass gps coordinates so it can fetch based on the map center
# 
class GooglePlacesClient
  SEARCH_OPTIONS = {
    types: %w[restaurant food],
    radius: 1000,
  }

  def self.call(search_term)
    new(search_term).search
  end

  def initialize(search_term)
    @client = GooglePlaces::Client.new(ENV['GOOGLE_CLIENT_API_KEY'])
    @search_term = search_term
  end

  def options
    SEARCH_OPTIONS.merge(name: @search_term)
  end

  def search
    @client.spots(37.791104400970255, -122.4060736093017, options)
  end
end
