class DiveEntriesController < ApplicationController
  def index
    @dive_entries = DiveEntry.all.order(:id)
    
    render json: @dive_entries

  end 

  def create
    @dive_entry = DiveEntry.new(dive_entry_params)
    @dive_entry.save
    render json: @dive_entry
  end

  def update
    @dive_entry = DiveEntry.find(params[:id])
    @dive_entry.update_attributes(dive_entry_params)
    @dive_entry.save
  
     render json: @dive_entry
  end 


  def destroy
    @dive_entry = DiveEntry.find(params[:id])
    @dive_entry.destroy
  end 

  private

  def dive_entry_params
     params.require(:dive_entry).permit(:location, :dive_site, :time, :depth, :temperature, :visibility, :notes)
  end

end
