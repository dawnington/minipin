json.partial!('api/boards/board', board: @board)

json.owner do
  json.id @board.user_id
  json.name @board.owner.name
end
