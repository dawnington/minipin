json.extract! user, :id, :username, :name
json.boards user.boards.each do |board|
  json.id board.id
  json.name board.name
end

json.pins user.pinnings.each do |pinning|
  json.partial!('api/pinnings/pinning', pinning: pinning)
end
