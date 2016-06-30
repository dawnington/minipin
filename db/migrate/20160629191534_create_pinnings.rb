class CreatePinnings < ActiveRecord::Migration
  def change
    create_table :pinnings do |t|
      t.integer :board_id, null: false
      t.integer :pin_id, null: false
      t.text :description

      t.timestamps null: false
    end
    add_index :pinnings, [:board_id, :pin_id], unique: true
  end
end
