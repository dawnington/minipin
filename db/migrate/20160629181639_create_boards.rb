class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.integer :user_id, null: false, index: true
      t.string :name, null: false
      t.text :description

      t.timestamps null: false
    end
  end
end
