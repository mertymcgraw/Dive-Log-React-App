class DiveEntriesController < ApplicationController
  def index
    @dive_entries = DiveEntry.all

  end 

  def create

  end


  def delete
  end 

end
