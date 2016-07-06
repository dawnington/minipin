class Editboards < ActiveRecord::Migration
  def change
    add_column :boards, :private, :boolean, default: false, null: false
  end
end
