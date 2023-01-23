# frozen_string_literal: true

module Api
  # https://github.com/jsonapi-serializer/jsonapi-serializer
  class BaseSerializer
    include JSONAPI::Serializer
  end
end
