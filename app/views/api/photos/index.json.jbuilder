@photoss.each do |photos|
  json.set! photos.id do
    json.partial!('api/photoss/photos', photos: photos)
  end
end
