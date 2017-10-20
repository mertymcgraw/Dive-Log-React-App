class DiveEntriesController < ApplicationController
  def index
    @dive_entries = DiveEntry.all

    render json: @dive_entries

  end 

  def create
    @dive_entry = DiveEntry.new(dive_entry_params)
    @dive_entry.save
  end


  def delete
    
  end 

  private

  def dive_entry_params
     params.require(:dive_entry).permit(:location, :dive_site, :time, :depth, :temperature, :visibility, :notes)
  end

end
