class CreatePinnings < ActiveRecord::Migration
  def change
    create_table :pinnings do |t|
      t.integer :board_id, null: false, index: true
      t.integer :pin_id, null: false, index: true
      t.text :description

      t.timestamps null: false
    end
  end
end
