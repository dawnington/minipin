@follows.each do |follow|
  json.set! follow.id do
    json.id = follow.id
    json.user_id follow.follower_id
    json.name follow.follower.name
  end
end
