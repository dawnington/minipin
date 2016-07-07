class Changetaggings < ActiveRecord::Migration
  def change
    change_column :taggings, :pin_id, :integer, :null => true
    change_column :taggings, :tag_id, :integer, :null => true
  end
end
