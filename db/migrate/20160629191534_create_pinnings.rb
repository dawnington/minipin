class CreatePinnings < ActiveRecord::Migration
  def change
    create_table :pinnings do |t|
      t.integer :board_id, null: false
      t.integer :pin_id, null: false
      t.text :description

      t.timestamps null: false
    end
  end
end
