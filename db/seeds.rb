# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

INSPIRATION = {
  "Who doesn't love peonies?" => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408814/14261392044_5309dd92a3_k_t0lmhv.jpg',
  'Our own little indoor garden' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737490/cacti_ilbxl3.jpg',
  'Amazing and gorgeous detail' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408814/stairs_pfn35b.jpg',
  'Love the granite and the whole minimalist vibe' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408813/kitchen_jpthne.jpg',
  'Love the pop of color from the armchairs' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408813/living_room_jzimas.jpg',
  'The more plants the better!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737509/pottedjadeplant_egweld.jpg',
  'Love the simple curtains and the light' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737493/curtainedwindows_fb93wh.jpg',
  'Love the clean shape of these leaves' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739056/leaves_l6eevy.jpg',
  'Sometimes a clean look is nice (if you can keep it clean)' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467740059/chairandbasket_q3zmho.jpg',
  "Can't have a home without a kitten!" => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467741151/kitten_jdneme.jpg',
  'This vase is so delicate' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467756744/cutoutvase_c4zkzc.jpg',
  'Perfect work-from-home setup' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467756742/deskwithplants_x6cxkl.jpg',
  'New seedlings for spring' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760701/seedlings_olagrc.jpg',
  'Books and magazines to spend the day with' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760972/booksandfeet_comtv1.jpg',
  'Colorful cacti' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760977/colorfulcacti_llhzjg.jpg',
  'Great natural light' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760974/lightroom_ah3mmc.jpg',
  'Need these lights for the patio!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760983/patiolights_mgwmha.jpg',
  'How did they make cement look cozy?' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467762033/cozycement_pcd3bf.jpg',
  'What kind of mailbox should we get?' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467762038/mailboxes_qd4n1p.jpg'
}

TRAVEL = {
  'Norway looks so beautiful!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408865/norway_gyfhkw.jpg',
  "Let's go camping here" => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408821/valley_kaqbyz.jpg',
  'Anyone up for a hike?' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408817/hills_b5ejad.jpg',
  'Looks like it would be a beautiful venue for a wedding' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408812/glassrestaurant_ysnxk0.jpg',
  'I would love to go to Morocco someday' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408813/marrakesh_ws8ffm.jpg',
  'Big Sur!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467408812/bed_igmdbs.jpg',
  'Looks like the perfect place to sit with a good book and a cup of tea' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737516/sheephouse_dawald.jpg',
  'I hear hot ballooning in Turkey is amazing!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737488/balloonsinturkey_izq1c0.jpg',
  'Does anybody know where this is??' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467736388/peak_tz0rfv.jpg',
  "Let's go eat all the good food!" => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467736403/brooklyn_ktdxtl.jpg',
  'Like a mirror' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467736397/mountain_lake_y4y6pq.jpg',
  'Dream vacation' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739059/beach_xafsn6.jpg',
  'Feels like the end of the world' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467740391/lighthouse_dgpcra.jpg',
  'Great shot of Half Dome' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467740395/halfdome_djwhvn.jpg',
  'The Northern Lights are definitely on my bucket list' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467740394/northernlights_qraw4z.jpg',
  'This is gorgeous' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467741058/crazyvalley_odlv0n.jpg',
  'Fushimi Inari Shrine, Japan' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467741065/fushiki_sorr1i.jpg',
  'Nothing like cooking over a campfire grill' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467756751/campfire_pytmme.jpg',
  'The mosques in Turkey look beautiful' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467756745/turkey_qjvjpm.jpg',
  'I can already feel the wind in my hair' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760705/cliffcloseup_z8hpbk.jpg',
  'I love night markets!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760698/paperlantern_ipmefo.jpg',
  'The hills are alive with the sound of music' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760698/rivervalley_lda2sa.jpg',
  'Breathtaking' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760973/mountainclimbing_qv4uqk.jpg',
  'Amazing view' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760982/ricepaddies_rx57ns.jpg',
  'Great place for a meeting' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467761667/powow_zunsyl.jpg',
  'Gorgeous sand dunes' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467762032/sanddunes_awyoui.jpg'
}

CARS = {
  'Classic look' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467736509/continental_car_nthbau.jpg',
  'Miss my old Thunderbird' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467736513/thunderbird_fkvqej.jpg',
  'Looks like a great project in waiting!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467736515/steering_wheel_ugbdfb.jpg',
  'These old ones look better than the new design' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737489/beetle_sv3vao.jpg',
  'Really like the shape and the contrast' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737515/train_ngrtu1.jpg',
  'Sturdy classic' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737519/volks_ppzh7v.jpg',
  'Love the shape of the lights' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739052/deluxe_ojrjgb.jpg',
  'Gotta love those buses' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739059/coffeebus_mgywmi.jpg',
  'Nothing like riding a motorcycle on a gorgeous day' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467740068/hondamotorcycle_byprgc.jpg',
  'Airports look amazing from above' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467741150/airport_xezkhy.jpg',
  'Great racks!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467741150/beetle2_sperp7.jpg',
  'Gray on gray' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760693/planeinthesky_sreoqp.jpg',
  'Nice touch' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467761681/ford_sknbjz.jpg',
  'Getting ready for a ride' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467762032/motorcyclist_gbddeg.jpg',
  'Gotta love the simplicity of a skateboard' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467762036/skateboard_qglndk.jpg'
}

ARCHITECTURE = {
  'Dramatic and regal' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737516/statuebuilding_fgtrvb.jpg',
  'Interesting use of texture' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737516/funky_underside_nqcw6m.jpg',
  'Somewhat dated look but interesting lines' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737488/beigebuilding_ulriqk.jpg',
  'Classic, clean lettering' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737496/bauhaus_vok86c.jpg',
  'Reminds me of a cathedral' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467737491/bridge_n2kqgx.jpg',
  'Love the effect from the arches' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739060/subway_vjazww.jpg',
  'Such a classic, distinct look' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739533/goldengatebridge_kwzezn.jpg',
  'Amazing shapes and texture' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739534/crazybuildin_ncsjqe.jpg',
  'Love the curvature and the lighting' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739536/curvybridge_ofhzgw.jpg',
  'Great detailing on the windows' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739537/gothicwindows_dtezap.jpg',
  'I love the subtle gradient' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739546/rainbowapartments_xnqidz.jpg',
  'Neat repeating pattern' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739548/repeatingpattern_hrimib.jpg',
  'Amazing contrast, and the right side reminds me of scales' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739540/scalybuilding_dzbtaf.jpg',
  'Beautiful details' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467739541/stainedglassceiling_lpr8rl.jpg',
  'This almost looks hand drawn!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467740060/drawnbuilding_tljebv.jpg',
  'Dramatic shafts of light' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467740061/shaftsoflight_ilazsn.jpg',
  'Great angle on this pattern' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467740063/windowbuilding_wojjoz.jpg',
  'Reminds me of a slinky' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467740397/slinkybuilding_hufygl.jpg',
  'Amazing details' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467741054/detailedbrickbuilding_ztamys.jpg',
  'Stockholm looks like a beautiful city' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467741059/finland_b5djs5.jpg',
  'Sharp angles!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467741057/sharpbuilding_nmguzx.jpg',
  'Intersections' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467756738/intersectionbuilding_c0jznc.jpg',
  'I love plants on balconies' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467756749/plantbuilding_l3ujya.jpg',
  'Love the combination of curves and clean lines' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467756740/wavymiamiishbuilding_kygqjv.jpg',
  'This one really looms over you' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467760705/dominantbuilding_ggfrtt.jpg',
  'Love the colors and lines' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467761663/colorfullines_mnehdv.jpg',
  'That color really pops!' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467761672/primarycolorsbuilding_xxqqwa.jpg',
  'Another great gradient' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467761665/rainbowbuilding_usoo97.jpg',
  'Love the way the mural frames the plant' => 'https://res.cloudinary.com/dojinyoct/image/upload/c_scale,w_600/v1467762039/planthairframe_mdx8gz.jpg'
}

User.create(username: 'janeDoe9000', name: 'Jane Doe', password: 'joejoe')
User.create(username: 'MeetJoeBlack', name: 'Joe Black', password: 'joejoe')
User.create(username: 'RetiredAssassin', name: 'Naomi Brooks', password: 'joejoe')


Board.create(user_id: 1, name: 'Dwell', description: 'Ideas for making a house a home.')
Board.create(user_id: 1, name: 'Explore', description: 'Our bucket list')
Board.create(user_id: 2, name: 'Planes, Trains, and Automobiles', description: 'Need for speed yo.')
Board.create(user_id: 3, name: 'Architecture', description: "'The greatest thing a man can do in this world, is to make the most possible out of the stuff that has been given him.'")

INSPIRATION.each do |desc, pic|
  pin = Pin.create(image_url: pic)
  Pinning.create(pin_id: pin.id, description: desc, board_id: 1)
end

TRAVEL.each do |desc, pic|
  pin = Pin.create(image_url: pic)
  Pinning.create(pin_id: pin.id, description: desc, board_id: 2)
end

CARS.each do |desc, pic|
  pin = Pin.create(image_url: pic)
  Pinning.create(pin_id: pin.id, description: desc, board_id: 3)
end

ARCHITECTURE.each do |desc, pic|
  pin = Pin.create(image_url: pic)
  Pinning.create(pin_id: pin.id, description: desc, board_id: 4)
end

Follow.create(follower_id: 1, followee_id: 2)
Follow.create(follower_id: 1, followee_id: 3)
Follow.create(follower_id: 2, followee_id: 3)
Follow.create(follower_id: 2, followee_id: 1)
Follow.create(follower_id: 3, followee_id: 1)
Follow.create(follower_id: 3, followee_id: 2)
