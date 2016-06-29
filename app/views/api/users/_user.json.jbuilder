json.extract! user, :id, :username, :name
json.boards user.boards.pluck(:id)
