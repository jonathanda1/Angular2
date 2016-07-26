json.array!(@posts) do |post|
  json.extract! post, :id, :title, :content, :author_id, :published_at
  json.url post_url(post, format: :json)
end
