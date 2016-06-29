# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

IMAGE_URLS = [
  'https://s-media-cache-ak0.pinimg.com/564x/fd/05/51/fd055142e2981415ca888cd518180fad.jpg',
  'https://s-media-cache-ak0.pinimg.com/564x/0e/4e/90/0e4e90c680e24d6a2db8c17a3e4eda5d.jpg',
  'https://s-media-cache-ak0.pinimg.com/564x/3e/a7/0a/3ea70a9ea182faf7e460bafa402d476e.jpg',
  'https://s-media-cache-ak0.pinimg.com/564x/6f/05/e9/6f05e93f64302cef69aa03ab0c4861e0.jpg',
  'https://s-media-cache-ak0.pinimg.com/564x/05/7d/ad/057dad143f7696e4da62f2ccd096f1cc.jpg',
  'https://s-media-cache-ak0.pinimg.com/564x/7c/77/4c/7c774c235a335e93fdbdf4c89c8ca3c5.jpg'
]

User.create(username: 'joe', name: 'Joe Black', password: 'joejoe')
User.create(username: 'joe2', name: 'Joe White', password: 'joejoe')
User.create(username: 'joe3', name: 'Joe Pink', password: 'joejoe')

IMAGE_URLS.each { |pic| Pin.create(image_url: pic) }
