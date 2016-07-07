json.id board.id
json.name board.name
json.private board.private
json.description board.description
json.owner do
  json.id board.user_id
  json.name board.owner.name
end
