# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

INSPIRATION = {
  "Who doesn't love peonies?" => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408814/Minipin/14261392044_5309dd92a3_k_t0lmhv.jpg',
  'Our own little indoor garden' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737490/Minipin/cacti_ilbxl3.jpg',
  'Amazing and gorgeous detail' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408814/Minipin/stairs_pfn35b.jpg',
  'Love the granite and the whole minimalist vibe' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408813/Minipin/kitchen_jpthne.jpg',
  'Love the pop of color from the armchairs' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408813/Minipin/living_room_jzimas.jpg',
  'The more plants the better!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737509/Minipin/pottedjadeplant_egweld.jpg',
  'Love the simple curtains and the light' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737493/Minipin/curtainedwindows_fb93wh.jpg',
  'Love the clean shape of these leaves' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739056/Minipin/leaves_l6eevy.jpg',
  'Sometimes a clean look is nice (if you can keep it clean)' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467740059/Minipin/chairandbasket_q3zmho.jpg',
  "Can't have a home without a kitten!" => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467741151/Minipin/kitten_jdneme.jpg',
  'This vase is so delicate' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467756744/Minipin/cutoutvase_c4zkzc.jpg',
  'Perfect work-from-home setup' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467756742/Minipin/deskwithplants_x6cxkl.jpg',
  'New seedlings for spring' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760701/Minipin/seedlings_olagrc.jpg',
  'Books and magazines to spend the day with' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760972/Minipin/booksandfeet_comtv1.jpg',
  'Colorful cacti' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760977/Minipin/colorfulcacti_llhzjg.jpg',
  'Great natural light' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760974/Minipin/lightroom_ah3mmc.jpg',
  'Need these lights for the patio!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760983/Minipin/patiolights_mgwmha.jpg',
  'How did they make cement look cozy?' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467762033/Minipin/cozycement_pcd3bf.jpg',
  'What kind of mailbox should we get?' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467762038/Minipin/mailboxes_qd4n1p.jpg',
  'Looks great for a Jane Austen themed party' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467766808/Minipin/backyard_ngy0mq.jpg',
  'More peonies!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467766804/Minipin/morepeonies_cejiz9.jpg',
  'I love antiques around the house' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467766805/Minipin/vintagesewingmachine_mn1k0c.jpg',
  'Looks like a well-equipped kitchen' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467766801/Minipin/wellusedkitchen_ca3hxq.jpg',
}

TRAVEL = {
  'Norway looks so beautiful!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408865/Minipin/norway_gyfhkw.jpg',
  "Let's go camping here" => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408821/Minipin/valley_kaqbyz.jpg',
  'Anyone up for a hike?' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408817/Minipin/hills_b5ejad.jpg',
  'Looks like it would be a beautiful venue for a wedding' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408812/Minipin/glassrestaurant_ysnxk0.jpg',
  'I would love to go to Morocco someday' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408813/Minipin/marrakesh_ws8ffm.jpg',
  'Big Sur!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408812/Minipin/bed_igmdbs.jpg',
  'Looks like the perfect place to sit with a good book and a cup of tea' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737516/Minipin/sheephouse_dawald.jpg',
  'I hear hot ballooning in Turkey is amazing!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737488/Minipin/balloonsinturkey_izq1c0.jpg',
  'Does anybody know where this is??' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467736388/Minipin/peak_tz0rfv.jpg',
  "Let's go eat all the good food!" => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467736403/Minipin/brooklyn_ktdxtl.jpg',
  'Like a mirror' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467736397/Minipin/mountain_lake_y4y6pq.jpg',
  'Dream vacation' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739059/Minipin/beach_xafsn6.jpg',
  'Feels like the end of the world' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467740391/Minipin/lighthouse_dgpcra.jpg',
  'Great shot of Half Dome' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467740395/Minipin/halfdome_djwhvn.jpg',
  'The Northern Lights are definitely on my bucket list' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467740394/Minipin/northernlights_qraw4z.jpg',
  'This is gorgeous' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467741058/Minipin/crazyvalley_odlv0n.jpg',
  'Fushimi Inari Shrine, Japan' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467741065/Minipin/fushiki_sorr1i.jpg',
  'Nothing like cooking over a campfire grill' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467756751/Minipin/campfire_pytmme.jpg',
  'The mosques in Turkey look beautiful' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467756745/Minipin/turkey_qjvjpm.jpg',
  'I can already feel the wind in my hair' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760705/Minipin/cliffcloseup_z8hpbk.jpg',
  'I love night markets!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760698/Minipin/paperlantern_ipmefo.jpg',
  'The hills are alive with the sound of music' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760698/Minipin/rivervalley_lda2sa.jpg',
  'Breathtaking' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760973/Minipin/mountainclimbing_qv4uqk.jpg',
  'Amazing view' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760982/Minipin/ricepaddies_rx57ns.jpg',
  'Great place for a meeting' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467761667/Minipin/powow_zunsyl.jpg',
  'Gorgeous sand dunes' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467762032/Minipin/sanddunes_awyoui.jpg',
}

CARS = {
  'Classic look' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467736509/Minipin/continental_car_nthbau.jpg',
  'Miss my old Thunderbird' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467736513/Minipin/thunderbird_fkvqej.jpg',
  'Looks like a great project in waiting!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467736515/Minipin/steering_wheel_ugbdfb.jpg',
  'These old ones look better than the new design' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737489/Minipin/beetle_sv3vao.jpg',
  'Really like the shape and the contrast' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737515/Minipin/train_ngrtu1.jpg',
  'Sturdy classic' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737519/Minipin/volks_ppzh7v.jpg',
  'Love the shape of the lights' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739052/Minipin/deluxe_ojrjgb.jpg',
  'Gotta love those buses' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739059/Minipin/coffeebus_mgywmi.jpg',
  'Nothing like riding a motorcycle on a gorgeous day' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467740068/Minipin/hondamotorcycle_byprgc.jpg',
  'Airports look amazing from above' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467741150/Minipin/airport_xezkhy.jpg',
  'Great racks!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467741150/Minipin/beetle2_sperp7.jpg',
  'Gray on gray' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760693/Minipin/planeinthesky_sreoqp.jpg',
  'Nice touch' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467761681/Minipin/ford_sknbjz.jpg',
  'Getting ready for a ride' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467762032/Minipin/motorcyclist_gbddeg.jpg',
  'Gotta love the simplicity of a skateboard' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467762036/Minipin/skateboard_qglndk.jpg',
  'Nice shade of blue' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467774318/Minipin/bluecar_ssfyo3.jpg',
  'Thai tuk tuk' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467774300/Minipin/tuktuk_dsviqd.jpg',
  'Those missiles look like matches' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467774335/Minipin/warplane_yupbbs.jpg',
  'Love the antique white' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467774346/Minipin/whitebus_tclgte.jpg',
}

ARCHITECTURE = {
  'Dramatic and regal' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737516/Minipin/statuebuilding_fgtrvb.jpg',
  'Interesting use of texture' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737516/Minipin/funky_underside_nqcw6m.jpg',
  'Somewhat dated look but interesting lines' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737488/Minipin/beigebuilding_ulriqk.jpg',
  'Classic, clean lettering' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737496/Minipin/bauhaus_vok86c.jpg',
  'Reminds me of a cathedral' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737491/Minipin/bridge_n2kqgx.jpg',
  'Love the effect from the arches' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739060/Minipin/subway_vjazww.jpg',
  'Such a classic, distinct look' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739533/Minipin/goldengatebridge_kwzezn.jpg',
  'Amazing shapes and texture' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739534/Minipin/crazybuildin_ncsjqe.jpg',
  'Love the curvature and the lighting' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739536/Minipin/curvybridge_ofhzgw.jpg',
  'Great detailing on the windows' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739537/Minipin/gothicwindows_dtezap.jpg',
  'I love the subtle gradient' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739546/Minipin/rainbowapartments_xnqidz.jpg',
  'Neat repeating pattern' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739548/Minipin/repeatingpattern_hrimib.jpg',
  'Amazing contrast, and the right side reminds me of scales' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739540/Minipin/scalybuilding_dzbtaf.jpg',
  'Beautiful details' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739541/Minipin/stainedglassceiling_lpr8rl.jpg',
  'This almost looks hand drawn!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467740060/Minipin/drawnbuilding_tljebv.jpg',
  'Dramatic shafts of light' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467740061/Minipin/shaftsoflight_ilazsn.jpg',
  'Great angle on this pattern' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467740063/Minipin/windowbuilding_wojjoz.jpg',
  'Reminds me of a slinky' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467740397/Minipin/slinkybuilding_hufygl.jpg',
  'Amazing details' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467741054/Minipin/detailedbrickbuilding_ztamys.jpg',
  'Stockholm looks like a beautiful city' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467741059/Minipin/finland_b5djs5.jpg',
  'Sharp angles!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467741057/Minipin/sharpbuilding_nmguzx.jpg',
  'Intersections' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467756738/Minipin/intersectionbuilding_c0jznc.jpg',
  'I love plants on balconies' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467756749/Minipin/plantbuilding_l3ujya.jpg',
  'Love the combination of curves and clean lines' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467756740/Minipin/wavymiamiishbuilding_kygqjv.jpg',
  'This one really looms over you' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760705/Minipin/dominantbuilding_ggfrtt.jpg',
  'Love the colors and lines' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467761663/Minipin/colorfullines_mnehdv.jpg',
  'That color really pops!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467761672/Minipin/primarycolorsbuilding_xxqqwa.jpg',
  'Another great gradient' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467761665/Minipin/rainbowbuilding_usoo97.jpg',
  'Love the way the mural frames the plant' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467762039/Minipin/planthairframe_mdx8gz.jpg',
  'So solitary' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467766808/Minipin/solitarybuilding_qnxfi1.jpg',
  'Unique use of color' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467774319/Minipin/colorblock_fo4tor.jpg',
  'Can I live there?' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467774352/Minipin/library_ac5msd.jpg',
  'Needle' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467774309/Minipin/needle_kwtsos.jpg',
}

TAGS = {
  'home' => 'house, home, cozy, comfort',
  'travel' => 'travel, exploration, journey, view, earth',
  'cars' => 'car, automobile, speed, wheel',
  'architecture' => 'building, window, architecture, design'
}

User.create(username: 'janeDoe9000', name: 'Jane Doe', password: 'joejoe')
User.create(username: 'MeetJoeBlack', name: 'Joe Black', password: 'joejoe')
User.create(username: 'RetiredAssassin', name: 'Naomi Brooks', password: 'joejoe')


Board.create(user_id: 1, name: 'Dwell', description: 'Ideas for making a house a home.')
Board.create(user_id: 3, name: 'Explore', description: "Oh the places we'll go")
Board.create(user_id: 2, name: 'Planes, Trains, and Automobiles', description: 'Need for speed yo.')
Board.create(user_id: 1, name: 'Architecture', description: "'The greatest thing a man can do in this world, is to make the most possible out of the stuff that has been given him.'")
Board.create(user_id: 1, name: 'Private Board', description: 'This board and its pins are not accessible to other users', private: true)

INSPIRATION.each do |desc, pic|
  photo = Photo.create(image_url: pic)
  Pin.create(photo_id: photo.id, description: desc, board_id: 1, tag_list: TAGS['home'])
  Pin.create(photo_id: photo.id, description: desc, board_id: 1, tag_list: TAGS['home'])
end

TRAVEL.each do |desc, pic|
  photo = Photo.create(image_url: pic)
  Pin.create(photo_id: photo.id, description: desc, board_id: 2, tag_list: TAGS['travel'])
  Pin.create(photo_id: photo.id, description: desc, board_id: 2, tag_list: TAGS['travel'])
end

CARS.each do |desc, pic|
  photo = Photo.create(image_url: pic)
  Pin.create(photo_id: photo.id, description: desc, board_id: 3, tag_list: TAGS['cars'])
  Pin.create(photo_id: photo.id, description: desc, board_id: 3, tag_list: TAGS['cars'])
  Pin.create(photo_id: photo.id, description: "I'm a private pin!", board_id: 5, tag_list: TAGS['cars'])
end

ARCHITECTURE.each do |desc, pic|
  photo = Photo.create(image_url: pic)
  Pin.create(photo_id: photo.id, description: desc, board_id: 4, tag_list: TAGS['architecture'])
  Pin.create(photo_id: photo.id, description: desc, board_id: 4, tag_list: TAGS['architecture'])
end

Follow.create(follower_id: 1, followee_id: 2)
Follow.create(follower_id: 1, followee_id: 3)
Follow.create(follower_id: 2, followee_id: 3)
Follow.create(follower_id: 2, followee_id: 1)
Follow.create(follower_id: 3, followee_id: 1)
Follow.create(follower_id: 3, followee_id: 2)
