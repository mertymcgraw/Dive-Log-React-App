class DiveEntriesController < ApplicationController
  def index
    @dive_entries = DiveEntry.all

    render json: @dive_entries

  end 

  def create

  end


  def delete
  end 

end
