json.extract! user, :id, :username, :name

json.boards user.boards.each do |board|
  json.id board.id
  json.name board.name
end

json.follows do
  user.out_follows.each do |follow|
    json.set! follow.followee_id do
      json.user_id follow.followee_id
      json.follow_id follow.id
      json.name follow.followee.name
    end
  end
end
