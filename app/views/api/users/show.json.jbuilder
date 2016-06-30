json.partial!('api/users/user', user: @user)

# json.pins @user.pinnings.each do |pinning|
#   json.partial!('api/pinnings/pinning', pinning: pinning)
# end
