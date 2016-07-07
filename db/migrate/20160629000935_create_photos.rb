class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :image_url, null: false

      t.timestamps null: false
    end
  end
end
