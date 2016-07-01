@pinnings.each do |pinning|
  json.set! pinning.id do
    json.partial!('api/pinnings/pinning', pinning: pinning)
  end
end
