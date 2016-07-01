# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

INSPIRATION = {
  'Love this look' => 'http://res.cloudinary.com/dojinyoct/image/upload/v1467408813/madewell_wf2y89.jpg',
  "Who doesn't love peonies?" => 'http://res.cloudinary.com/dojinyoct/image/upload/v1467408814/14261392044_5309dd92a3_k_t0lmhv.jpg',
  'Amazing and grogeous detail' => 'http://res.cloudinary.com/dojinyoct/image/upload/v1467408814/stairs_pfn35b.jpg',
  'Love the granite and the whole minimalist vibe' => 'http://res.cloudinary.com/dojinyoct/image/upload/v1467408813/kitchen_jpthne.jpg',
  'Love the pop of color from the armchairs' => 'http://res.cloudinary.com/dojinyoct/image/upload/v1467408813/living_room_jzimas.jpg'
}

TRAVEL = {
  'Norway looks so beautiful!' => 'http://res.cloudinary.com/dojinyoct/image/upload/v1467408865/norway_gyfhkw.jpg',
  "Let's go camping here" => 'http://res.cloudinary.com/dojinyoct/image/upload/v1467408821/valley_kaqbyz.jpg',
  'Anyone up for a hike?' => 'http://res.cloudinary.com/dojinyoct/image/upload/v1467408817/hills_b5ejad.jpg',
  'Looks like it would be a beautiful venue for a wedding' => 'http://res.cloudinary.com/dojinyoct/image/upload/v1467408812/glassrestaurant_ysnxk0.jpg',
  'I would love to go to Morocco someday' => 'http://res.cloudinary.com/dojinyoct/image/upload/v1467408813/marrakesh_ws8ffm.jpg',
  'Big Sur!' => 'http://res.cloudinary.com/dojinyoct/image/upload/v1467408812/bed_igmdbs.jpg'
}

User.create(username: 'joe', name: 'Joe Black', password: 'joejoe')
User.create(username: 'joe2', name: 'Joe White', password: 'joejoe')
User.create(username: 'joe3', name: 'Joe Pink', password: 'joejoe')


Board.create(user_id: 1, name: 'Inspiration', description: 'Ideas for the house')
Board.create(user_id: 1, name: 'Travel Ideas', description: 'Our bucket list')
Board.create(user_id: 2, name: 'Style Wish List', description: 'I want to be like Grace Kelly')
Board.create(user_id: 3, name: 'Product Design', description: 'Sleek stuff')

INSPIRATION.each do |desc, pic|
  pin = Pin.create(image_url: pic)
  Pinning.create(pin_id: pin.id, description: desc, board_id: 1)
end

TRAVEL.each do |desc, pic|
  pin = Pin.create(image_url: pic)
  Pinning.create(pin_id: pin.id, description: desc, board_id: 2)
end
