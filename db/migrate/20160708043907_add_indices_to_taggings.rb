class AddIndicesToTaggings < ActiveRecord::Migration
  def change
    add_index :taggings, :tag_id
    add_index :taggings, :pin_id
  end
end
