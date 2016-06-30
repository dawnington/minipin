json.extract! user, :id, :username, :name
json.boards user.boards.each do |board|
  json.id board.id
  json.name board.name
end
