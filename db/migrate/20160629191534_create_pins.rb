class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
      t.integer :board_id, null: false, index: true
      t.integer :photo_id, null: false, index: true
      t.text :description

      t.timestamps null: false
    end
  end
end
