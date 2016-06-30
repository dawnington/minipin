json.partial!('api/boards/board', board: @board)

json.pins @board.pinnings.each do |pinning|
  json.partial!('api/pinnings/pinning', pinning: pinning)
end
