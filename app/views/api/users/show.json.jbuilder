# json.partial!('api/users/user', user: @user, boards: @boards)

json.extract! @user, :id, :username, :name

json.boards @boards.each do |board|
  json.id board.id
  json.name board.name
end

json.follows({})
json.follows do
  @user.out_follows.each do |follow|
    json.set! follow.followee_id do
      json.user_id follow.followee_id
      json.follow_id follow.id
      json.name follow.followee.name
    end
  end
end
