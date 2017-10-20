class CreateDiveEntries < ActiveRecord::Migration[5.1]
  def change
    create_table :dive_entries do |t|
      t.string  :location, null: false
      t.string :dive_site, null: false
      t.integer :depth, null: false
      t.integer :time, null: false
      t.integer :visibility, default: 0
      t.text :notes, default: ""

      t.timestamps
    end
  end
end
