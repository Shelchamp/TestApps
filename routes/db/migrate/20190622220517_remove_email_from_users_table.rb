class RemoveEmailFromUsersTable < ActiveRecord::Migration[5.2]
  def change 
    change_table :users do |t|
      t.remove :email  
    end
  end
end
